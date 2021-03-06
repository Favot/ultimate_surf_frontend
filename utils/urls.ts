export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_A42B5B43C7706DDA'

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg"; //Or default image here
  }
  if (image.url.indexOf("/") === 0) {
    //It's a relative url, add API URL
    return `${API_URL}${image.url}`;
  }
  return image.url;
};
