import BannerPageSection from "../images/banner-page-section-componnet";

const AboutPt = (): JSX.Element => {
  return (
    <section style={{ backgroundImage: "url(https://www.rocketseat.com.br/discover/svg/discover/lines.svg), linear-gradient(0deg, rgb(24, 32, 73), rgb(14 18 39), rgb(18, 18, 20) 50%)" }} className="bg-[--secondaryColor] bg-center bg-cover border-solid border-b-[1px] border-zinc-700">
      <div id="about" className="main-container container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] py-[50px]">
          <div className="animated_scroll  py-10 text-pretty md:py-0 font-semibold">
            <h2 id="about-me" className="mb-4">
            Mais Sobre
            </h2>
            <p className="mb-4">
            Olá e bem-vindo à Cheetah Solutions Network! Somos especializados na criação de comunidades para o Discord, desenvolvendo datas para o Comunidade SA:MP, edição de vídeos, criação de sites personalizados e bots exclusivos. Estamos prontos para atender às suas necessidades e fortalecer sua comunidade online.
            </p>
            <p className="mb-4">
            Nossa equipe dedicada oferece soluções personalizadas para eventos, bot integrações e experiências únicas para os membros. Contate-nos hoje mesmo e Descubra como podemos impulsionar o crescimento e o envolvimento na sua on-line comunidade.
            </p>
            <div className="my-6">
              <h4 className="text-2xl font-bold mb-4">Nossos Serviços</h4>
              <p className="mb-4">
              Transformando desafios em soluções ágeis + Qualidade de Serviços:
              </p>
              <div id="skills" className="grid grid-cols-2 gap-4">
                <ul>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Bot Discord
                  </li>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Custom Website
                  </li>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Datas SAMP
                  </li>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Video Edits
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Design
                  </li>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Disclosures
                  </li>
                  <li className="flex items-center">
                    <svg
                      fill="currentColor"
                      className="bi bi-check-lg w-4 h-4 mr-2 text-green-300"
                      viewBox="0 0 16 16"
                    >
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
            <h3 className="text-xl font-bold mb-2">Vamos Ficar Social</h3>
            <ul className="w-full text-center flex flex-col items-center justify-center">
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://discord.gg/bTxUSkysqG"
                  className="block mb-2 w-fit"
                >
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  href="https://discord.gg/bTxUSkysqG"
                  className="block mb-2 w-fit"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPt;