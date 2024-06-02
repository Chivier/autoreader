import "./home.css";
import { Footer } from "./components/footer";

import { Header } from "./components/header";
import { Search } from "./components/search";

import { ClerkProvider } from '@clerk/nextjs';

export default function Home() {

  return (
    <>
      <ClerkProvider>
      <Header />

      <Search />

      <Footer />
      </ClerkProvider>
    </>
  );
}
