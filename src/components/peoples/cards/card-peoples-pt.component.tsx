import React, { MouseEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

interface PeoplesCardProps {
  name: string;
  description: string;
  role: string;
  roleColor: string;
  borderColor: string;
  background: string;
  icon: string;
}

// colocar quele card do swiper aqui

const CargPeoples: PeoplesCardProps[] = [
  {
    name: "Talisson Souza",
    description:
      "Responsável pela gestão geral e organização da Cheetah Solutions.",
    role: "CEO",
    roleColor: "bg-green-400",
    borderColor: "border-green-400",
    background: "https://cdn.discordapp.com/avatars/933780111742877777/a_f77d9a52247500d7453ca43dc7716209.gif?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1223106730292936775/638c04a2e4f0482b3e85dbbf379ffa5f.webp?size=16&quality=lossless"
  },
  {
    name: "Proxy Seven",
    description:
      "Programador oficial da Cheetah Solutions, responsável pelo gerenciamento dos sites e bots da empresa.",
    role: "Developer Oficial",
    roleColor: "bg-blue-400",
    borderColor: "border-blue-400",
    background: "https://cdn.discordapp.com/avatars/1193791291125940309/f37502932a454009f8c7543d4111b6f4.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1229958890775646208/3265eefecf5536e1eef786a3c4107f57.webp?size=16&quality=lossless"
  },
  {
    name: "Vitor Mapeli",
    description:
      "Responsável pela gestão geral e organização da Cheetah Solutions.",
    role: "CEO",
    roleColor: "bg-green-400",
    borderColor: "border-green-400",
    background: "https://cdn.discordapp.com/avatars/248829995395448834/cba69e17e1052da50052afa6feb19f3a.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1223106730292936775/638c04a2e4f0482b3e85dbbf379ffa5f.webp?size=16&quality=lossless"
  },
  {
    name: "nuggets.",
    description:
      "Responsável pela gestão geral e organização da Cheetah Solutions.",
    role: "CEO",
    roleColor: "bg-green-400",
    borderColor: "border-green-400",
    background: "https://cdn.discordapp.com/avatars/1232269234818646087/a_650903ddebf64271281db2acee1bab6c.gif?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1223106730292936775/638c04a2e4f0482b3e85dbbf379ffa5f.webp?size=16&quality=lossless"
  },
  {
    name: "Simplez!",
    description:
      "Programador oficial da Cheetah Solutions, responsável pelo gerenciamento dos sites e bots da empresa.",
    role: "Developer Oficial",
    roleColor: "bg-blue-400",
    borderColor: "border-blue-400",
    background: "https://cdn.discordapp.com/avatars/1007597515744477204/2983bc4da5cbc8dd15a34982a102a005.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1229958890775646208/3265eefecf5536e1eef786a3c4107f57.webp?size=16&quality=lossless"
  },
  {
    name: "Hellen🏅",
    description:
      "Responsável pela gestão geral e organização da Cheetah Solutions.",
    role: "CEO",
    roleColor: "bg-green-400",
    borderColor: "border-green-400",
    background: "https://cdn.discordapp.com/avatars/1158546330843611197/b3dc56573fee968356bd44a08573d038.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1223106730292936775/638c04a2e4f0482b3e85dbbf379ffa5f.webp?size=16&quality=lossless"
  },
  {
    name: "Seven",
    description:
      "Responsável pela gestão geral e organização da Cheetah Solutions.",
    role: "CEO",
    roleColor: "bg-green-400",
    borderColor: "border-green-400",
    background: "https://cdn.discordapp.com/avatars/1199323382190182432/ab2e81381727e1b3891c1d780677e8e1.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1223106730292936775/638c04a2e4f0482b3e85dbbf379ffa5f.webp?size=16&quality=lossless"
  },
  {
    name: "Who Am I",
    description:
      "Programador oficial da Cheetah Solutions, responsável pelo gerenciamento dos sites e bots da empresa.",
    role: "Equipe de Suporte Técnico",
    roleColor: "bg-yellow-400",
    borderColor: "border-yellow-400",
    background: "https://cdn.discordapp.com/avatars/828677274659586068/c8e524f6db4e0e643af12642e51c4ee8.png?size=2048",
    icon: "https://cdn.discordapp.com/role-icons/1214192570490421319/c69d52003c5d11cf466d91ac546ab8ae.webp?size=16&quality=lossless"
  },
];

const CardPeoplePtComponent = (): JSX.Element => {
  const [cardBackgroundOne, setCrdBackgroundOne] = useState(
    "radial-gradient(rgb(48 47 47 / 76%), rgb(21 21 21 / 90%))"
  );

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setCrdBackgroundOne(
      `radial-gradient(circle at ${x}% ${y}%, rgb(48 47 47 / 76%), rgb(21 21 21 / 90%))`
    );
  };

  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {CargPeoples.map((card: PeoplesCardProps) => (
          <SwiperSlide key={card.name}>
            <div className="relative cursor-default h-[800px] md:h-[500px] md:max-h-[500px] w-full shadow-xl shadow-[#202020]">
              <div style={{ backgroundImage: `url('${card.background}')` }} className="h-[40%] max-h-[40%] rounded-tl-md rounded-tr-md bg-center bg-cover bg-no-repeat"></div>
              <div
                onMouseMove={handleMouseMove}
                style={{ background: cardBackgroundOne }}
                className="h-[60%] rounded-bl-md rounded-br-md p-4 flex flex-col justify-between"
              >
                <div className="w-full">
                  <p className="border-b pb-2 text-lg mb-2 font-bold w-fit">{card.name}</p>
                  <p>
                    {card.description}
                  </p>
                </div>
                <div className="w-full">
                  <span className={`w-fit select-none px-2 py-0.5 rounded-lg border ${card.borderColor} flex items-center`}>
                    <div className={`w-4 h-4 rounded-full ${card.roleColor}`}></div>
                    <img
                      width={900}
                      height={900}
                      className="w-4 h-4 mx-1"
                      src={card.icon}
                      alt="icon cargo"
                    />
                    <p>{card.role}</p>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardPeoplePtComponent;
