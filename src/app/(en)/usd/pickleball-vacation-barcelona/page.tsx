import { LongHaulLob, vacationMetadata } from "../../pickleball-vacation-barcelona/content";

// Only reached through the rewrite in proxy.ts; same URL and canonical as the euro page.
export const metadata = vacationMetadata;

export default function Page() {
  return <LongHaulLob currency="USD" />;
}
