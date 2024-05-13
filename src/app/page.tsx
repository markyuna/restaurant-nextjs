"use client"
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-5">
      <Navbar />
      <Header />
      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
      </div>
      <Footer />
    </main>

  );
}
