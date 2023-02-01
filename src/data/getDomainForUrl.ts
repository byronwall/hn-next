export function getDomainForUrl(url: string | undefined) {
  if (url === undefined) {
    return "";
  }

  const urlObj = new URL(url);
  return urlObj.hostname;
}
