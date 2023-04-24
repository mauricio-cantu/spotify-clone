export const getImageUrl = (fileName: string): string => {
  return new URL(`../assets/img/${fileName}`, import.meta.url).href;
};
