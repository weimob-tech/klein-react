export function urlToList(url: string) {
  if (!url || url === '/') {
    return ['/'];
  }
  const urlList = url.split('/').filter(Boolean);
  return urlList.map(
    (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`,
  );
}
