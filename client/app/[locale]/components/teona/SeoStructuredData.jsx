import { breadcrumbStructuredData } from "@/lib/structuredData";
import JsonLd from "./JsonLd";

export default function SeoStructuredData({ locale, items }) {
  return <JsonLd data={breadcrumbStructuredData({ locale, items })} />;
}
