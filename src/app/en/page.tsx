'use client';
import { useEffect } from 'react';
import AnimateHeader from '@/components/header/animate-wel-component';
import BannerPageSection from '@/components/images/banner-page-section-componnet';
import ProjectsComponent from '@/components/projects/projects-component';
import FooterEnHome from '@/components/footer/footer-en';

const HomePageEn = (): JSX.Element => {
  useEffect(() => {
    const elmentRef: Element | null = document.querySelector('.animated_scroll');
    window.addEventListener('scroll', (_: Event) => {
      if (!elmentRef?.scrollHeight) return;

      if (window.scrollY > elmentRef?.scrollHeight - window.innerHeight / 2 - 30) {
        elmentRef?.classList.add('animate__animated', 'animate__fadeInLeft');
      } else {
        elmentRef?.classList.remove('animate__animated', 'animate__fadeInLeft');
      }
    });
  }, []);
  return (
    <div className="relative">
      <AnimateHeader />
      <section className="bg-[--secondaryColor]">
        <div id="about" className="main-container container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] py-[50px]">
            <div className="animated_scroll  py-10 text-pretty md:py-0 font-semibold">
              <h2 id="about-me" className="mb-4">More About</h2>
              <p className="mb-4">Hello and welcome to the Cheetah Solutions Network! We specialize in creating communities for Discord, developing dates for the SA:MP community, editing videos, creating custom websites and exclusive bots. We are ready to meet your needs and strengthen your online community.</p>
              <p className="mb-4">Our dedicated team offers customized event solutions, bot integrations, and unique member experiences. Contact us today and discover how we can drive growth and engagement in your online community.</p>
              <hr className="w-full h-[3px] bg-white" />
              <div className="my-6">
                <h4 className="text-2xl font-bold mb-4">Our Services</h4>
                <p className="mb-4">Transforming challenges into agile solutions + Quality of services: <a href="" download></a></p>
                <div id="skills" className="grid grid-cols-2 gap-4">
                  <ul>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Bot Discord
                    </li>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Custom Website
                    </li>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Datas SAMP
                    </li>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Video Edits
                    </li>
                  </ul>
                  <ul>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Design
                    </li>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Disclosures
                    </li>
                    <li className="flex items-center">
                      <svg fill="currentColor" className="bi bi-check-lg w-4 h-4 mr-2 text-green-300" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                      Discord Servers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid content-center text-center w-full">
              <BannerPageSection />
              <h3 className="text-xl font-bold mb-2">Let s Get Social</h3>
              <ul className="w-full text-center flex flex-col items-center justify-center">
                <li className="mb-2">
                  <a target="_blank" href="https://discord.gg/bTxUSkysqG"
                    className="block mb-2 w-fit">Discord</a>
                </li>
                <li className="mb-2">
                  <a target="_blank" href="https://discord.gg/bTxUSkysqG"
                    className="block mb-2 w-fit">
                    Youtube
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
      <ProjectsComponent/>
      <FooterEnHome/>
    </div>
  );
}

export default HomePageEn;