/***************************************************************************************
 *                                                                                      *
 *                                CODE SHOWCASE LICENSE                                 *
 *                                                                                      *
 ***************************************************************************************/

/* NOTICE: This license applies to the code contained within this file and all the 
   accompanying files in the repository. By accessing or using the code, you agree to 
   be bound by the terms and conditions of this license. If you do not agree to these 
   terms and conditions, do not copy, modify, distribute, or otherwise use the code. */

/* DISCLAIMER: The code provided in this repository is for showcase purposes only. 
   It is owned by Fatin Hasnat and is protected by copyright laws. The code is not 
   intended for use in any production environment or for any commercial purposes. 
   The code is provided "as is," without warranty of any kind, express or implied, 
   including but not limited to the warranties of merchantability, fitness for a 
   particular purpose, and non-infringement. In no event shall Fatin Hasnat be liable 
   for any claim, damages, or other liability arising from the use or distribution 
   of the code. */

/* WARNING: Any unauthorized use, reproduction, or distribution of the code contained 
   in this repository is strictly prohibited. Fatin Hasnat reserves all rights to 
   take appropriate legal action against individuals or entities found to be in 
   violation of this license. */

/**************************************************************************************/

import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { TbClipboard } from "react-icons/tb";

import { Header } from "../components";

const ColorPicker = () => {
  const [HexColor, setHexColor] = useState("#008000"); // Set the default value here

  const change = (args) => {
    const newHexColor = args.currentValue.hex;
    setHexColor(newHexColor);

    document.getElementById("preview").style.backgroundColor = newHexColor;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(HexColor);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div className="text-center">
        <div id="preview" />

        <div className="flex justify-center items-center gap-1 flex-wrap">
          <p
            id="hex-code"
            className="text-xl text-gray-800 mt-4 mb-4 font-semibold"
          >{`Hex: ${HexColor}`}</p>
          <button
            type="button"
            className="p-1 text-xl opacity-0.9 hover:drop-shadow-xl transition duration-250 ease-in-out"
            onClick={copyToClipboard}
          >
            <TbClipboard />
          </button>
        </div>

        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
