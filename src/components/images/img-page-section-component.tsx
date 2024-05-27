import Image from 'next/image';

export default function ImgPageSection() {
  return (
    <Image id="profile-pik" src="/images/cheetah.png" width={500} height={500} alt="logotipo" className="rounded-full animate__animated animate__infinite animate__pulse" />
  );
}