/** @jsxImportSource theme-ui */

import React from "react";
import type {SxProp} from 'theme-ui'


interface DescriptionProps{
  sxProp: SxProp
}
const Description = ({sxProp}:DescriptionProps) => {
  return (
    <div sx={{
      marginBottom: ['62px', null, "20px", null],
      ...sxProp.sx
    }}>
      <p sx={{
        fontSize: ["17px", null, "20px", null],
        lineHeight: ["27px", null, "30px", null],
      }}>
        <span
          sx={{
            fontWeight: "bold",
          }}
        >
          Wiket is the first business to business network
        </span>{" "}
        which lets you connect to mind like people.
      </p>
    </div>
  );
};

export default Description;
