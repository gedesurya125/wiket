/** @jsxImportSource theme-ui */
import React from "react";
import heroImage from "../../../assets/jpg/header-img-florist.jpg";
import baristaImage from "../../../assets/jpg/header-img-barista.jpg";
import gardenerImage from "../../../assets/jpg/header-img-gardener.jpg";
import potteryImage from "../../../assets/jpg/header-img-pottery.jpg";
import Card from "./card/Card";
import type { CardDataValidator } from "./card/Card";
import type { SxProp } from "theme-ui";
import pin1Img from '../../../assets/svg/pin-01.svg';
import pin2Img from '../../../assets/svg/pin-02.svg';


const cardData: CardDataValidator[] = [
  {
    image: potteryImage,
    title: "Potject",
    desc: "Pottery in Bangkok",
    SxProp: {
      sx: {
        bottom: ["-100px", "auto", "auto", null],
        left: ["23px", "auto", "auto", null],

        top: [null, "30px", "40px", null],
        right: [null, "-130px", "-54px", null],
        width: ["140px", null, "146px", null],
      },
    },
  },
  {
    image: gardenerImage,
    title: "GreenThumb",
    desc: "Gardener in CheChe",
    SxProp: {
      sx: {
        bottom: ["-260px", "auto", "auto", null],
        right: ["0px", "-350px", "auto", null],

        top: [null, "150px", "178px", null],
        left:[null, "auto", "-54px"],
        width: ["138px", null, "146px", null],
      },
    },
  },
  {
    image: baristaImage,
    title: "Green Cafe",
    desc: "Cafe in Bankok",
    SxProp: {
      sx: {
        bottom: ["-335px", "-110px", "40px", null],
        left: ["0px", "auto", 'auto', null],
        right: [null, "-100px", "-108px", null],
        width: ["145px", null, "146px", null],

      },
    },
  },
];

interface HeroProps {
  sxProp: SxProp;
}
const Hero = ({ sxProp }: HeroProps) => {
  const renderCard = () => {
    return cardData.map((data, index) => <Card key={index} {...data} />);
  };
  return (
    <div
      sx={{
        ...sxProp.sx,
        display: [null, null, "flex", null],
        flexDirection: "column-reverse",
      }}
    >
      <div
        sx={{
          marginBottom: "12px",
          marginTop: ['0px', null, "16px", null]
        }}
      >
        <p
          sx={{
            fontWeight: "bold",
            fontSize: "17px",
            lineHeight: "25.5px",
          }}
        >
          Hanging Garden
        </p>
        <p
          sx={{
            fontSize: "15px",
            lineHeight: "22.5px",
          }}
        >
          Florist in Bangkok
        </p>
      </div>

      <div
        sx={{
          position: "relative",
          maxWidth: [null, "300px", "416px", null],
        }}
      >
        <img
          sx={{
            width: "100%",
            borderRadius: "24px",
          }}
          src={heroImage}
          alt="..."
        />
        <img 
          src={pin1Img} 
          alt="..."
          sx={{
            position: 'absolute',
            display: ["none",null,"block", null],
            right:[null,null, "-70px", null],
            bottom: [null,null, "230px", null]
          }}
        />
        <img 
          src={pin2Img} 
          alt="..."
          sx={{
            position: 'absolute',
            display: ["none",null,"block", null],
            left: [null, null, "-50px", null],
            top: [null, null, "100px", null]
          }}
        />
        {renderCard()}
      </div>
    </div>
  );
};

export default Hero;
