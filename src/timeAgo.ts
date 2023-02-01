import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

export function getTimeAgo(time: number) {
  // convert to ms if too small
  if (time < 10000000000) {
    time *= 1000;
  }

  return timeAgo.format(time);
}
