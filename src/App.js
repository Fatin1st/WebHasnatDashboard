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

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl transition duration-250 ease-in-out hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
