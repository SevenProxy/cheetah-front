import Image from 'next/image';

export default function BannerPageSection() {
  return (
    <Image className="w-full h-[150px] mb-4 rounded-md" src="/images/banner.png" alt="Banner"  width={500} height={5000}/>
  );
}