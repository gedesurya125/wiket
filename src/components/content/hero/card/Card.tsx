/** @jsxImportSource theme-ui */
import React from "react";
import type { SxProp } from "theme-ui";


export interface CardDataValidator {
  image: string;
  title: string;
  desc: string;
  SxProp: SxProp;
}

const Card = (props: CardDataValidator) => {
  return (
    <div
      className="hero-card"
      sx={{
        p: '8px',
        boxShadow: '0px 30px 20px rgba(0,0,0,0.1), 1px 0px 20px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        // margin: '10px',
        position: 'absolute',
        backgroundColor: 'background',
        ...props.SxProp.sx
      }}
    >
      <div className="card-image">
        <img sx={{
          width: '100%',
          borderRadius: '10px'
        }} src={props.image} alt="..." />
      </div>
      <div className="card-text">
        <p
          sx={{
            fontWeight: "bold",
            fontSize: '15px',
            lineHeight: "18.75px",
            color: '#333333'
          }}
        >
          {props.title}
        </p>
        <p sx={{
          fontSize: '13px',
          lineHeight: "19.5px"
        }}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
