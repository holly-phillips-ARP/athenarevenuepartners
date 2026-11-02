import { Helmet } from "react-helmet-async";

export function PageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `https://athenarevenuepartners.com${path}`;
  return <Helmet><title>{title} | Athena Revenue Partners</title><meta name="description" content={description} /><link rel="canonical" href={url} /><meta property="og:title" content={`${title} | Athena Revenue Partners`} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content={url} /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={`${title} | Athena Revenue Partners`} /><meta name="twitter:description" content={description} /></Helmet>;
}