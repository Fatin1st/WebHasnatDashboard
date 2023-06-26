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

import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
