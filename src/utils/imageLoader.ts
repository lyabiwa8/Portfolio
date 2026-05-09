const basePath = "/lya-portfolio";

export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http")) return src;
  if (src.startsWith(basePath)) return src;
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}

export function getAssetPath(src: string) {
  if (src.startsWith("http")) return src;
  if (src.startsWith(basePath)) return src;
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
