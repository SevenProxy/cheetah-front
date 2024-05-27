'use client'
import { useEffect } from 'react';
import { PropsProjectParms } from './types';

const CardComponent = (Props: PropsProjectParms): JSX.Element => {

  useEffect(() => {
    const bot: Element | null = document.querySelector('.card_Bot_Discord');
    const customWeb: Element | null  = document.querySelector('.card_Custom_Website');
    const dataSamp: Element | null  = document.querySelector('.card_Datas_SAMP');
    const design: Element | null  = document.querySelector('.card_Design');

    document.addEventListener('mouseover', (e: Event) => {
      if (e.target === bot) {
        bot?.parentElement?.classList.add('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if ( e.target === customWeb) {
        customWeb?.parentElement?.classList.add('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if (e.target === dataSamp) {
        dataSamp?.parentElement?.classList.add('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if (e.target === design) {
        design?.parentElement?.classList.add('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else {
        return;
      }
    });
    document.addEventListener('mouseout', (e: Event) => {
      if (e.target === bot) {
        bot?.parentElement?.classList.remove('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if ( e.target === customWeb) {
        customWeb?.parentElement?.classList.remove('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if (e.target === dataSamp) {
        dataSamp?.parentElement?.classList.remove('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else if (e.target === design) {
        design?.parentElement?.classList.remove('animate__animated', 'animate__infinite', 'animate__rubberBand');
      } else {
        return;
      }
    });
  }, []);

  return (
    <div key={Props.card.title} className="relative p-2 my-2 max-w-xl">
      <div className="relative z-20 border-[--submitBtn] border-2 border-b-0 bg-transparent w-100 box-border h-7  mx-0 my-auto rounded-t-md">
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-2 bg-red-600 inline-block hover:scale-125"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-3 bg-yellow-300 inline-block hover:scale-125"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-4 bg-green-600 inline-block hover:scale-125"></div>
      </div>
      <div className="border-[--submitBtn] border-2 border-t-0 bg-transparent box-border w-100 h-56 mx-0 my-auto p-5 rounded-b-md flex justify-center items-center flex-col">
        <div className="font-semibold text-md md:text-xl text-center max-w-lg">
          <h5>{Props.card.title}</h5>
        </div>
        <div className="text-sm md:text-lg text-center max-w-lg">
          <p>{Props.card.description}</p>
        </div>
      </div>
      <div className={`card_${Props.card.title.replace(' ', '_')} absolute top-0 left-0 z-10 w-full h-full`}></div>
    </div>
  );
}

export default CardComponent;