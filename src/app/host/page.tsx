"use client";
import HeaderHostPtComponent from "@/components/header/host/header-host-pt.component";
import AboutHostPtComponent from "@/components/about/host/about-host-pt.component";
import PartnerHostComponent from "@/components/anuntions/host/partner-host.component";
import InfoHostPtComponnet from "@/components/about/host/info-host-pt.component";
import FeedbackHostPtComponent from "@/components/feedback/host/feedback-host-pt.componnet";
import PricingCardPtComponent from "@/components/pricing/host/pricing-card-pt.componnet";
import HelpHostPtComponent from "@/components/help/host/help-hots-pt.component";
import FooterHostPtComponent from "@/components/footer/host/footer-host-pt.component";

const HostPagePt = (): JSX.Element => {
  return (
    <main className="">
      <HeaderHostPtComponent />
      <AboutHostPtComponent />
      <PartnerHostComponent />
      <InfoHostPtComponnet />
      <FeedbackHostPtComponent />
      <PricingCardPtComponent />
      <HelpHostPtComponent />
      <section className="bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Comece seu teste gratuito hoje
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Experimente a plataforma Landwind por 30 dias. Não é necessário cartão de crédito.
            </p>
            <a
              href="#"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              Teste gratuito por 30 dias
            </a>
          </div>
        </div>
      </section>
      <FooterHostPtComponent />
    </main>
  );
};

export default HostPagePt;
