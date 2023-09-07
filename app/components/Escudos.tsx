import Image from "next/image";
import React from "react";

export const escudos = [
    {
      path: "/escudos/alianza-lima.png",
      team: "Alianza Lima",
    },
    {
      path: "/escudos/argentinos-jrs.png",
      team: "Argentinos Jrs.",
    },
    {
      path: "/escudos/atletico-nacional.png",
      team: "Atlético Nacional",
    },
    {
      path: "/escudos/atletico-paranaense.png",
      team: "Altlético Paranaense",
    },
    {
      path: "/escudos/aucas.png",
      team: "Aucas",
    },
    {
      path: "/escudos/barcelona-sc.png",
      team: "Barcelona SC",
    },
    {
      path: "/escudos/boca.png",
      team: "Boca Jrs.",
    },
    {
      path: "/escudos/bolivar.png",
      team: "Bolivar",
    },
    {
      path: "/escudos/cerro-porteno.png",
      team: "Cerro Porteño",
    },
    {
      path: "/escudos/colo-colo.png",
      team: "Colo-colo",
    },
    {
      path: "/escudos/corinthians.png",
      team: "Corinthians",
    },
    {
      path: "/escudos/deportivo-pereira.png",
      team: "Deportivo Pereira",
    },

    {
      path: "/escudos/flamengo.png",
      team: "Flamengo",
    },
    {
      path: "/escudos/fluminense.png",
      team: "Fluminense",
    },
    {
      path: "/escudos/independiente-del-valle.png",
      team: "Independiente del valle",
    },
    {
      path: "/escudos/internacional.png",
      team: "Internacional",
    },
    {
      path: "/escudos/libertad.png",
      team: "Libertad",
    },
    {
      path: "/escudos/liverpool.png",
      team: "Liverpool",
    },

    {
      path: "/escudos/melgar.png",
      team: "Melgar",
    },
    {
      path: "/escudos/metropolitanos.png",
      team: "Metropolitanos",
    },
    {
      path: "/escudos/monagas.png",
      team: "Monagas",
    },
    {
      path: "/escudos/nacional.png",
      team: "Nacional",
    },
    {
      path: "/escudos/nublense.png",
      team: "Ñublense",
    },
    {
      path: "/escudos/olimpia.png",
      team: "Olimpia",
    },

    {
      path: "/escudos/palmeiras.png",
      team: "Palmeiras",
    },
    {
      path: "/escudos/patronato.png",
      team: "Patronato",
    },
    {
      path: "/escudos/racing.png",
      team: "Racing",
    },
    {
      path: "/escudos/river.png",
      team: "River",
    },
    {
      path: "/escudos/sporting-cristal.png",
      team: "Sporting cristal",
    },
    {
      path: "/escudos/strongest.png",
      team: "The strongest",
    },
  ];
  
const Escudos = () => {
  
  return (
    <div className="mt-4 grid grid-cols-7 md:grid-cols-9 lg:grid-cols-12 place-items-center gap-2 w-full ">
      {escudos.map((it) => (
        <Image
          src={it.path}
          alt="escudo"
          width={20}
          height={20}
          key={it.team}
          style={{ width: "auto", height: "auto" }}
        
        />
      ))}
    </div>
  );
};

export default Escudos;
