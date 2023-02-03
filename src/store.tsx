"use client";

import { produce } from "immer";
import localforage from "localforage";
import { createContext, useContext, useEffect, useRef } from "react";
import { createStore, useStore } from "zustand";

interface AppStoreProps {
  collapsedIds: Record<number, boolean>;
  readIds: Record<number, boolean>;
}

interface AppStoreState extends AppStoreProps {
  toggleCollapsed: (id: number) => void;
  markRead: (id: number) => void;

  setAndPersist: (props: Partial<AppStoreProps>) => void;

  getPersistent: () => AppStoreProps;
}

const createAppStore = (initProps?: Partial<AppStoreProps>) => {
  const DEFAULT_PROPS: AppStoreProps = {
    collapsedIds: {},
    readIds: {},
  };
  return createStore<AppStoreState>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    setAndPersist: (props) => {
      set(props);
      localforage.setItem(INDEXDB_KEY, props);
    },

    getPersistent: () => {
      const { collapsedIds, readIds } = get();

      return {
        collapsedIds,
        readIds,
      };
    },

    toggleCollapsed: (id) => {
      const { setAndPersist, getPersistent } = get();

      const newData = produce(getPersistent(), (draft) => {
        // set if not present -- delete if present
        if (draft.collapsedIds[id]) {
          delete draft.collapsedIds[id];
        } else {
          draft.collapsedIds[id] = true;
        }
      });

      setAndPersist(newData);
    },

    markRead: (id) => {
      const { setAndPersist, getPersistent } = get();

      const newData = produce(getPersistent(), (draft) => {
        draft.readIds[id] = true;
      });

      setAndPersist(newData);
    },
  }));
};

export const AppStoreContext = createContext<AppStore | null>(null);

export function useAppStoreContext<T>(
  selector: (state: AppStoreState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(AppStoreContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector, equalityFn);
}

// Provider wrapper
type AppStoreProviderProps = React.PropsWithChildren<Partial<AppStoreProps>>;

const INDEXDB_KEY = "appStore";
export function AppStoreProvider({
  children,
  ...props
}: AppStoreProviderProps) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = createAppStore(props);
  }

  useEffect(() => {
    // push local storage into the store
    async function load() {
      localforage.config({
        driver: localforage.INDEXEDDB,
      });

      const storeData = await localforage.getItem<AppStoreProps>(INDEXDB_KEY);

      console.log("storeData", storeData);

      if (storeData) {
        storeRef.current?.setState(storeData);
      }
    }
    load();
  }, []);

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
}

type AppStore = ReturnType<typeof createAppStore>;
