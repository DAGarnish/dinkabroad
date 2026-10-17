import { Home, homeMetadata } from "../home";

// Same page and canonical URL as the homepage; only reached through the rewrite in proxy.ts.
export const metadata = homeMetadata;

export default function HomeUsdPage() {
  return <Home currency="USD" />;
}
