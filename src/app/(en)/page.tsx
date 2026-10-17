import { Home, homeMetadata } from "./home";

export const metadata = homeMetadata;

export default function Page() {
  return <Home currency="EUR" />;
}
