import { PropsCard } from './types';
import CardComponent from './card-component';
import BannerCardComponent from '../images/banner-card-component';
import CaroseulTrasition from '../transition/caroseul';

const card: PropsCard[] = [
  {
    title: 'Bot Discord',
    description: 'We have the perfect solution for you! Our company develops high-quality private and custom bots.'
  },
  {
    title: 'Custom Website',
    description: 'We offer custom website creation for businesses, making the process simple for you.'
  },
  {
    title: 'Datas SAMP',
    description: 'We offer a variety of custom dates for the SA:MP community.'
  },
  {
    title: 'Design',
    description: 'We transform your vision into unique designs that capture the essence of your brand.'
  },
  
];

const ProjectsComponent = (): JSX.Element => {
  return (
    <section className="w-full h-screen mx-auto flex items-center justify-center bg-[--mainColor]">
      <div  id="services"  className="py-10 main-container">
        <h2>More Services</h2>
        <div className="flex mt-8 flex-col xl:flex-row my-5 justify-evenly items-center h-[500px] min-h-[500px] mx-auto">
          <div className="flex flex-col max-w-[70%] max-h-1/2 lg:w-[30%] sm:w-screen border-2 rounded-md border-[--submitBtn] h-full mr-4">
            <BannerCardComponent />

            <div className="flex flex-col items-center justify-center p-1.5 ">
              <div className="text-stone-800 dark:text-white rounded-b-md p-5 h-fit w-full ">
                <p className="mb-4">~👾 We offer a variety of custom dates for the SA:MP community. We have options for escape, anti-lag, PVP, modifications, FiveM, and more. Contact us to find out all the options available and find the one that best suits your needs.</p>
                
                <p>Explore our selection of custom dates for the SA:MP community!</p>
              </div>
            </div>
          </div>

          <CaroseulTrasition />
        </div>
      </div>
    </section>
  );
}
export default ProjectsComponent;

/*
<section className="w-full mx-auto flex items-center justify-center bg-[--mainColor]">
      <div  id="services"  className="py-10 main-container">
        <h2>More Services</h2>
        <div className="flex flex-col xl:flex-row my-5 xl:w-fit justify-evenly items-center">
          <div className="flex flex-col max-w-[40%] max-h-1/2 lg:w-[40%] sm:w-screen border-2 rounded-md border-[--submitBtn] h-full mr-4">
          <BannerCardComponent />

          <div className="flex flex-col items-center justify-center p-1.5 ">
              <div className="text-stone-800 dark:text-white rounded-b-md p-5 h-fit w-full ">
                <p className="mb-4">~👾 We offer a variety of custom dates for the SA:MP community. We have options for escape, anti-lag, PVP, modifications, FiveM, and more. Contact us to find out all the options available and find the one that best suits your needs.</p>
                
                <p>Explore our selection of custom dates for the SA:MP community!</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <CaroseulTrasition />
          </div>
        </div>
      </div>
    </section>
*/