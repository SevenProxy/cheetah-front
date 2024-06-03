const AboutHostPtComponent = (): JSX.Element => {
  return (
    <section id="about" className="bg-white dark:bg-zinc-800 lg:h-[80vh] relative">
      <div
        style={{
          transform: "translateX(-50%) translateY(-50%)",
          background:
            "radial-gradient(closest-side at 50% 50%,#0080ff,transparent)",
        }}
        className="pointer-events-none absolute left-[5%] top-[10%] md:w-[120%] w-[120%] h-[120%] opacity-[.15] z-10"
      ></div>

      <div
        style={{
          transform: "translateX(50%) translateY(50%)",
          background:
            "radial-gradient(closest-side at 50% 50%,#7000ff,transparent)",
        }}
        className="pointer-events-none absolute right-[5%] bottom-[20%] md:h-[120%] md:w-[120%] w-[120%] h-[120%] opacity-[.15] z-10"
      ></div>
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Cypher Cloud <br />
            Hosting.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-zinc-400 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-100">
            Seja bem-vindo à Cypher Cloud! Somos a mais nova rede de hospedagem
            para Bots de Discord e Sites, desenvolvida pela empresa Cheetah
            Solutions Network. Nosso objetivo é oferecer um serviço de
            hospedagem confiável, rápido e seguro para todos os seus projetos
            digitais.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/cheetahsolutions/"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-zinc-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-purple-700 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              <svg
                className="w-4 h-4 mr-2 bg-white rounded-full text-black"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>{" "}
              GitHub
            </a>
            <a
              href="https://discord.gg/bTxUSkysqG"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-purple-700 dark:bg-purple-800 dark:text-purple-400 dark:border-purple-600 dark:hover:text-white dark:hover:bg-purple-700"
            >
              <svg fill="currentColor" className="bi bi-discord w-4 h-4 mr-2" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
              </svg>
              Discord
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/images/host/info-main.svg"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHostPtComponent;
