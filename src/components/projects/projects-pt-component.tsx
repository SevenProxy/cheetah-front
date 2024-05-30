import { useState, MouseEvent } from 'react';
import BannerCardComponent from '../images/banner-card-component';
import CaroseulTrasitionPt from '../transition/caroseul-pt.component';

const ProjectsPtComponent = (): JSX.Element => {
  const [background, setBackground] = useState("radial-gradient(#1f2937, rgb(31 41 55 / 0))");

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setBackground(`radial-gradient(circle at ${x}% ${y}%, #1f2937, rgb(31 41 55 / 0))`);
    console.log(background)
  };

  return (
    <section style={{ background: "radial-gradient(rgb(24, 32, 73), rgb(14 18 39), rgb(18, 18, 20) 60%)" }} className="w-full h-fit md:h-screen mx-auto flex items-center justify-center">
      <div id="services" className="py-10 main-container">
        <h2>Mais Serviços</h2>
        <div className="flex mt-8 flex-col md:flex-row my-5 justify-evenly items-center h-fit lg:h-[500px] min-h-[500px] mx-auto">
          <div onMouseMove={handleMouseMove}  style={{ background: background }} className="relative bg-gradient-to-b from-gray-800 to-gray-800/20 flex flex-col max-w-[90%] sm:max-w-[70%] max-h-1/2 lg:w-[30%] sm:w-screen border-2 rounded-md border-[--submitBtn] h-fit sm:h-[500px] mb-14 lg:mb-0 md:h-full mr-4">
            <BannerCardComponent />

            <div className="flex flex-col items-center justify-center">
              <div className="text-stone-800 dark:text-white rounded-b-md p-5 h-fit w-full ">
                <p className="mb-4">👾 ~ Oferecemos uma variedade de datas personalizadas para a comunidade SA:MP. Temos opções de escape, anti-lag, PVP, modificações, FiveM e muito mais. Entre em contato conosco para descobrir todas as opções disponíveis e encontrar a que melhor se adapta às suas necessidades.</p>
                
                <p>Explore nossa seleção de datas personalizadas para a comunidade SA:MP!</p>
              </div>
            </div>
          </div>

          <CaroseulTrasitionPt />
        </div>
      </div>
    </section>
  );
}
export default ProjectsPtComponent;