import Image from 'next/image';
import ImgPageSection from '../images/img-page-section-component';
import AnimateBackground from './animate-background-component';

export default function AnimateHeader() {
  return (
    <div className="w-full relative z-20 text-white min-h-[100vh] md:min-h-fit md:h-screen overflow-hidden">
      <div
        className="is_top animate__animated animate__slow animate__slideInUp absolute z-10 h-full w-full bg-[#181818] md:flex block md:items-center justify-center md:justify-end md:py-4 md:px-10">
        <div
          className="md:mt-0 mt-8 w-fit text-left animate__animated animate__slow animate__slideInUp max-w-[90%] md:max-w-[45%] px-4 hidden md:flex items-start md:h-fit h-full justify-center flex-col">
          <h1 className="text-5xl text-zinc-200 font-bold mb-2">Seja Bem-vindo(a)!</h1>
          <p className="text-[--submitBtn] text-5xl font-bold mb-4">WELCOME!</p>
        </div>
        <div
          className="md:hidden w-full h-fit animate__animated animate__slow animate__slideInUp flex items-start justify-center">
          <section className="h-fit w-full bg-[--mainColor] border-solid border-b-[1px] border-[--borderColor]">
            <div className="main-container w-[95%] md:w-[1000px] mx-auto h-full">
              <div className="grid text-center content-center min-h-[10em]">
                <h1 className="mb-14 text-center text-6xl mt-10 flex items-start md:items-center justify-center">
                  <Image className="select-none mr-2 w-14 h-14" src="/images/hi.gif" alt="hi" width={100} height={100} />
                  Hi, We are the Cheetah
                </h1>
              </div>
              <div className="intro-wrapper bg-[--secondaryColor] border border-solid border-[--borderColor] rounded-tl-md rounded-bl-md">
                <div className="nav-wrapper">
                  <div className="dots-wrapper flex">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                  </div>
                  <ul id="navigation" className="text-mainText">
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#services">Services</a></li>
                  </ul>
                </div>
                <div className="left-column grid-area-left-column pt-[50px] pb-[50px]">
                  <ImgPageSection />
                  <h5 className="text-center mt-4">Cheetah Solutions</h5>
                  <ul className="flex justify-around mt-2">
                    <li className="mr-2 w-10 h-10">
                      <a href="https://discord.gg/bTxUSkysqG">
                        <svg fill="currentColor" className="bi bi-discord w-full h-full" viewBox="0 0 16 16">
                          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-center text-xs mt-2 italic">
                    *Follow us<br />on social media
                  </p>
                </div>
                <div className="right-column right-column grid  content-center pt-[50px] pb-[50px]">
                  <div className="bg-[--previewShadow] w-[310px] h-[180px] pl-[30px] pt-[30px]">
                    <div className="bg-previewBg w-[310px] border border-[#17a2b8] bg-[--previewBg] p-6 relative rounded shadow-lg">
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -top-1 -left-1"></div>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -top-1 -right-1"></div>
                      <h3 className="text-white mb-4">What do we do</h3>
                      <p className="text-white">
                        Hello and welcome to the Cheetah Solutions Network! We specialize in creating communities.
                      </p>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -bottom-1 -right-1"></div>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -bottom-1 -left-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        className="hidden animate__delay-2s animate__slow	animate__animated animate__slideInRight absolute z-20 w-full h-full bg-[#202020] md:flex flex-col items-top justify-start">
        <section className="md:h-screen h-fit bg-[--mainColor] border-solid border-b-[1px] border-[--borderColor]">
          <AnimateBackground />
          <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full">
            <div className="main-container w-[95%] md:w-[1000px] mx-auto overflow-auto">
              <div className="grid text-center content-center min-h-[10em]">
                <h1 className="mb-14 text-center text-6xl mt-10 flex items-center justify-center">
                  <Image className="select-none mr-2 w-14 h-14" src="/images/hi.gif" alt="hi" width={100} height={100} />
                  Hi, We are the Cheetah
                </h1>
              </div>
              <div className="intro-wrapper bg-[--secondaryColor] border border-solid border-[--borderColor] rounded-tl-md rounded-bl-md">
                <div className="nav-wrapper">
                  <div className="dots-wrapper flex">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                  </div>
                  <ul id="navigation" className="text-mainText">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                  </ul>
                </div>
                <div className="left-column grid-area-left-column pt-[50px] pb-[50px]">
                  <ImgPageSection />
                  <h5 className="text-center mt-4">Cheetah Solutions</h5>
                  <ul className="flex justify-around mt-2">
                    <li className="mr-2 w-10 h-10">
                      <a href="https://discord.gg/bTxUSkysqG">
                        <svg fill="currentColor" className="bi bi-discord w-full h-full" viewBox="0 0 16 16">
                          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-center text-xs mt-2 italic">
                    *Follow us<br />on social media
                  </p>
                </div>
                <div className="right-column right-column grid  content-center pt-[50px] pb-[50px]">
                  <div className="bg-[--previewShadow] w-[310px] h-[180px] pl-[30px] pt-[30px]">
                    <div className="bg-previewBg w-[310px] border border-[#17a2b8] bg-[--previewBg] p-6 relative rounded shadow-lg">
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -top-1 -left-1"></div>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -top-1 -right-1"></div>
                      <h3 className="text-white mb-4">What do we do</h3>
                      <p className="text-white">
                        Hello and welcome to the Cheetah Solutions Network! We specialize in creating communities.
                      </p>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -bottom-1 -right-1"></div>
                      <div className="w-[7px] h-[7px] rounded-[50%] border-[1.5px] border-solid border-[#17a2b8] bg-white absolute -bottom-1 -left-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}