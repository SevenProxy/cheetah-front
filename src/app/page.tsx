"use client";
import { useEffect } from 'react';
import AnimateHeaderPT from '@/components/header/animate-pt-component';
import AboutPt from '@/components/about/about-pt.component';
import ProjectsPtComponent from '@/components/projects/projects-pt-component';
import FooterPtHome from '@/components/footer/footer-pt.component';
import DiscordPtComponent from '@/components/anuntions/discord-pt.component';
import PeoplesPtComponent from '@/components/peoples/peoples-pt.component';

const HomePageEn = (): JSX.Element => {
  useEffect(() => {
    const elmentRef: Element | null =
      document.querySelector(".animated_scroll");
    window.addEventListener("scroll", (_: Event) => {
      if (!elmentRef?.scrollHeight) return;

      if (
        window.scrollY >
        elmentRef?.scrollHeight - window.innerHeight / 2 - 30
      ) {
        elmentRef?.classList.add("animate__animated", "animate__fadeInLeft");
      } else {
        elmentRef?.classList.remove("animate__animated", "animate__fadeInLeft");
      }
    });
  }, []);
  return (
    <div className="relative">
      <AnimateHeaderPT />
      <AboutPt />
      <DiscordPtComponent />
      <ProjectsPtComponent />
      
      <FooterPtHome />
    </div>
  );
};
//<PeoplesPtComponent />
export default HomePageEn;
