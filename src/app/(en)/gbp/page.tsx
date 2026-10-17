import { Home, homeMetadata } from "../home";

// Only reached through the rewrite in proxy.ts; same URL and canonical as the euro page.
export const metadata = homeMetadata;

export default function Page() {
  return <Home currency="GBP" />;
}
