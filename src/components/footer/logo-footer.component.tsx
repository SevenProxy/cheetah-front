import Image from "next/image";

const LogoFooterComponent = (): JSX.Element => {
  return (
    <div className="w-full py-4">
      <div className="w-full relative flex items-center justify-center mx-auto">
        <Image className="select-none w-48 h-48 absolute bottom-12" src="/images/footer-logo.png" alt="Logo Footer" width={900} height={900} />
      </div>
    </div>
  );
}

export default LogoFooterComponent;
