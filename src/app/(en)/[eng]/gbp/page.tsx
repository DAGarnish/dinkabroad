import { englishLang } from "@/lib/i18n";
import { Home, homeMetadata } from "../home";

// Only reached through the rewrite in proxy.ts; same URL and canonical as the euro page.
export const metadata = homeMetadata;

export default async function Page({ params }: { params: Promise<{ eng: string }> }) {
  return <Home currency="GBP" lang={englishLang((await params).eng)} />;
}
