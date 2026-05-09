export default function imageLoader({ src }: { src: string }) {
  const basePath = "/lya-portfolio";
  if (src.startsWith("http")) return src;
  if (src.startsWith(basePath)) return src;
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
