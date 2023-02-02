import { Spinner } from "../../../src/components/Spinner";

export default async function Loading() {
  return (
    <div className="w-32 mx-auto">
      <Spinner />
    </div>
  );
}
