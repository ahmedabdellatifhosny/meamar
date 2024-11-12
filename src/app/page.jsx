"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./../components/layout/menu/Menu";
import Hero from "./../components/hero/Hero";
import Loader from "@/components/loader/Loader";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from 'react';
import { useEffect, useState } from "react";
import Statistcs from "@/components/statistcs/Statistcs";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import "./global-styles/globals.css";

function MainContent({ setLoader }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoader(true); 
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, [pathname, searchParams]);

  return (
    <>
      <Menu />
      <Hero />
      <Statistcs />
      <About />
      <Projects />
    
    </>
  );
}

export default function Home() {
  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader && <Loader />}
      <Suspense fallback={<Loader />}> 
        <MainContent setLoader={setLoader} />
      </Suspense>
    </>
  );
}
