import Image from 'next/image';
import './settings.css';
import { DISCORD } from '@/env/cheetah-links';

const DiscordEnComponent = (): JSX.Element => {
  return (
    <div className="bg-[--mainDark] w-full mx-augo py-8 flex items-center justify-center">
      <div className="w-full md:max-w-[70%] relative">
        <div className="select-none absolute sm:-bottom-2 -top-32 -left-6 md:-left-32">
          <div className="relative w-full h-full  sm:flex sm:items-end sm:justify-end">
            <Image className="w-40 h-40" width={1000} height={1000} src="/images/egirl-mascote.png" alt="Mascote Cheetah"/>
          </div>
        </div>
        <div className="border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-[10px] w-full h-full">
          <div
            style={{
              backgroundImage:
                "linear-gradient(95.99deg,rgba(41,224,169,.7) 7.66%,rgba(95,117,242,.7) 41.15%,rgba(153,86,246,.7) 75.03%,rgba(226,84,255,.7) 98.16%)",
            }}
            className="rounded-[10px] w-full h-full flex flex-col items-center justify-between gap-4 p-6 md:flex-row"
          >
            <h3 className="my-2 text-2xl font-medium text-white lg:max-w-[41.1875rem] lg:text-3xl">
              Did you like our services? Join our Dicord server!
            </h3>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-2xl text-white max-lg:rotate-90"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <a
                href={DISCORD}
                className="group flex w-full items-center justify-center px-6 gap-2 rounded-[0.625rem] text-sm font-bold uppercase leading-[16.41px] transition-colors md:w-fit disabled:cursor-not-allowed disabled:opacity-75 py-[1.125rem] max-h-[3.25rem] bg-white text-rocketseat-dark hover:bg-white/90"
              >
                Join the server!
              </a>
            </div>
          </div>
        </div>
        <div className="w-16 h-16 absolute -bottom-5 sm:-top-5 right-0 md:-right-5">
          <div className="relative w-full h-full">
            <div style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,242,242,0.7339422829678747) 27%, rgba(0,212,255,0) 100%)" }} className="rounded-full absolute top-0 left-0 z-10 w-full h-full"></div>
            <div className="relative animate__infinite animate__slower animate__animated animate__shakeY">
              <svg
                style={{ transform: "rotateX(325deg) rotateY(20deg) rotateX(5deg)" }}
                fill="currentColor"
                className="bi bi-discord relative z-20 w-full h-full text-white"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordEnComponent;
