import { englishLang } from "@/lib/i18n";
import { Home, homeMetadata } from "./home";

export const metadata = homeMetadata;

export default async function Page({ params }: { params: Promise<{ eng: string }> }) {
  return <Home currency="EUR" lang={englishLang((await params).eng)} />;
}
