import { LocalDink, holidayMetadata } from "../../pickleball-holiday-barcelona/content";

// Only reached through the rewrite in proxy.ts; same URL and canonical as the euro page.
export const metadata = holidayMetadata;

export default function Page() {
  return <LocalDink currency="USD" />;
}
