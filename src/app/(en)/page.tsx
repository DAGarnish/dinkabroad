import { Home, homeMetadata } from "./home";

export const metadata = homeMetadata;

export default function HomePage() {
  return <Home currency="EUR" />;
}
