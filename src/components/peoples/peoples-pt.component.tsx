import CardPeoplePtComponent from './cards/card-peoples-pt.component';

const PeoplesPtComponent = (): JSX.Element => {
  return (
    <section className="w-full h-fit md:h-screen overflow-x-clip relative">
      <div className="w-full flex items-center h-full relative bg-[--mainDark] md:py-0 py-10 pb-52">
        <div style={{ transform: "translateX(-50%) translateY(-50%)", background: "radial-gradient(closest-side at 50% 50%,#0080ff,transparent)" }} className="pointer-events-none absolute left-[20%] top-[10%] md:h-[60%] md:w-[50%] w-[80%] h-[80%] opacity-[.15] z-10"></div>

        <div style={{ transform: "translateX(50%) translateY(50%)", background: "radial-gradient(closest-side at 50% 50%,#7000ff,transparent)" }} className="pointer-events-none absolute right-[20%] bottom-[20%] md:h-[60%] md:w-[50%] w-[80%] h-[60%] opacity-[.15] z-10"></div>

        <div className="w-full md:flex items-center justify-between relative z-20 px-4 mx-auto main-container container">

          <div className="md:max-w-[60%]">
            <h2>Team<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(97.57deg, #29e0a9 -12.7%, #5f75f2 32.64%, #9956f6 78.49%, #e254ff 109.78%);" }}>!</span></h2>
            <h6>Conheça nosso time!</h6>
            <p className="mt-4 text-balance">Nosso time de especialistas está à disposição para oferecer suporte 24 horas por dia, 7 dias por semana, garantindo que você tenha toda a assistência necessária quando precisar. Além disso, oferecemos hospedagem de qualidade para que você possa focar no que realmente importa: crescer e engajar seu Projeto.</p>
          </div>

          <CardPeoplePtComponent />

        </div>
      </div>
    </section>
  );
}

export default PeoplesPtComponent;
