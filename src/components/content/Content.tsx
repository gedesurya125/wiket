/** @jsxImportSource theme-ui */

import React from "react";
import Description from "./description/Description";
import HeaderLine from "./headerLine/HeaderLine";
import Hero from "./hero/Hero";
import Title from "./title/Title";

const Content = () => {
  return (
    <div
      sx={{
        margin: ["1em 0", null, '103px 0px 0px', null],
        display: [null, "grid", null, null],
        // maxWidth: [null, null, "", null],
        gridTemplateColumns: [null, "repeat(12, 1fr)", null,  null],
        gridTemplateRows: [null, "repeat(16, 50px)", null, null],

      }}
    >
      <Title
        sxProp={{
          sx: {
            gridColumn: [null,"1 / span 12", "8 / span 5"],
            gridRow: [null,"1 / span 2", "1 / span 6"],

            

          },
        }}
      />
      <Description
        sxProp={{
          sx: {
            gridColumn: [null, "1 / span 12", "8 / span 4", null],
            gridRow: [null, "3 / span 2", "10 / span 3", null],
            marginLeft: [null, null, "80px", "60px"],
            alignSelf: "center"
          },
        }}
      />
      <Hero
        sxProp={{
          sx: {
            gridColumn:[null, "1 / span 6", "1 / span 6", null],
            gridRow: [null, "5 / span 6", "1 / span 5", null],
            justifySelf: [null,null,"center", null],
            alignSelf: [null,null,"start", null]
          },
        }}
      />
      <HeaderLine
        sxProp={{
          sx: {
            gridColumn: [null, "5 / span 7","6 / span 3", null ],
            gridRow: [null, "6 / span 11", "9 / span 8", null],
            alignSelf: 'top',
            justifySelf: [null, 'start', "center", null]
          },
        }}
      />
    </div>
  );
};

export default Content;
