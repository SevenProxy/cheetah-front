import Image from 'next/image';

const BannerCardComponent = (): JSX.Element => {
  return (
    <Image src="/images/banner.gif" className="w-full" alt="Banner gif" width={100} height={100} />
  );
}

export default BannerCardComponent;