"use client";
import { useEffect } from "react";
import AnimateHeaderEn from "@/components/header/animate-en-component";
import AboutEn from "@/components/about/about-en.component";
import ProjectsComponent from "@/components/projects/projects-en-component";
import FooterEnHome from "@/components/footer/footer-en.component";
import DiscordEnComponent from "@/components/anuntions/discord-en.component";

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
      <AnimateHeaderEn />
      <AboutEn />
      <DiscordEnComponent />
      <ProjectsComponent />
      <FooterEnHome />
    </div>
  );
};

export default HomePageEn;
