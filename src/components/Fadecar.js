import React, { useState } from "react";
import FadeIn from 'react-fade-in';



function Fadecar() {
  const [car, setcar] = useState(false);
  const [car2, setcar2] = useState(true);
  const [bike, setbike] = useState(true);
  const [bike2, setbike2] = useState(false);
  const [heart, setheart] = useState(true);
  const [heart2, setheart2] = useState(false);
  const [carfield, setcarfield] = useState(true);
  const [bikefield, setbikefield] = useState(false);
  const [heartfield, setheartfield] = useState(false);


  const cars = () => {
   
    setcar(false);
    setbike(true);
    setheart(true);

    setcar2(true);
    setbike2(false);
    setheart2(false);

    setcarfield(true);
    setbikefield(false);
    setheartfield(false);
  };

  const bikes = () => {
   
    setcar(true);
    setbike(false);
    setheart(true);

    setcar2(true);
    setbike2(true);
    setheart2(false);

    setcarfield(false);
    setbikefield(true);
    setheartfield(false);
  };

  const hearts = () => {
   
    setcar(true);
    setbike(true);
    setheart(false);

    setcar2(true);
    setbike2(false);
    setheart2(true);

    setcarfield(false);
    setbikefield(false);
    setheartfield(true);
  };


  return (
    <div>
      <div className="back">
    
     </div>

      <div  style={{ marginTop: "-700px",marginLeft: "30px" }}>
        {car && (
          <div
            className="cFRTzp"
            style={{ marginLeft: "-200px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi" onClick={cars}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                  alt="car icon"
                  class="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {bike && (
          <div
            className="cFRTzp"
            style={{ marginLeft: "705px", marginTop: "-60px" }}
          >
            <div className="eIrHNz">
              <div className="gDVWJU" onClick={bikes}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                  alt="bike icon"
                  class="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {heart && (
          <div
            className="cFRTzp"
            style={{ marginLeft: "855px", marginTop: "-60px" }}
          >
            <div className="eIrHNz">
              <div className="gDVWJU" onClick={hearts}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
                  alt="health icon"
                  class="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {car2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "550px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iIzdjNDdlMSI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                  alt="car icon"
                  class="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {bike2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "700px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iIzdjNDdlMSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                  alt="car icon"
                  class="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {heart2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "860px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iIzdjNDdlMSIvPjwvc3ZnPg=="
                  alt="car icon"
                  class="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {carfield && (
          <div>
                <FadeIn>
            <div
              style={{
                marginLeft: "550px",
                backgroundColor: "white",
                width: "480px",
                marginTop: "20px",
                height: "80px",
                borderRadius: "20px",
              }}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
               
                style={{ width: "472px", height: "80px", borderRadius: "10px" }}
              ></input>
              <div style={{marginTop:"-95px"}}><img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjggMTYiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjQuOTg1NyA1LjQ2NDUxLTQuMTU4Mi0uOTY1MTMtMy40NzQyLTMuMTk0NDJjLS45MTIyLS44NDI3ODctMi4wOTI2LTEuMzA0OTYtMy4zMjY2LTEuMzA0OTZoLTQuOTYzMTVjLTEuNDQ4NjkgMC0yLjc3NjY2LjcyMDQ0NS0zLjU1NDY2IDEuOTQzODRsLTEuNjc2NzMgMi41OTYzMy0xLjIzNDA3LjI4NTQ1Yy0xLjEyNjc2LjI1ODI4LTEuOTMxNTg2IDEuMjc3NzgtMS45MzE1ODYgMi40NjAzOXYyLjg2ODE5YzAgMS4zMTg2Ljk3OTIwNiAyLjQwNiAyLjI5Mzc2NiAyLjUxNDhsMS4zODE2Mi4xMjIzYy40MTU4MyAxLjQxMzcgMS42NzY3MyAyLjQ0NjggMy4xOTI0OSAyLjQ0NjggMS40ODg5MyAwIDIuNzM2NDItMS4wMDU5IDMuMTc5MDItMi4zNzg4aDcuMzM3NGMuNDI5MiAxLjM3MjkgMS42OTAxIDIuMzc4OCAzLjE3OTEgMi4zNzg4IDEuNTk2MiAwIDIuOTI0Mi0xLjE0MTggMy4yNTk1LTIuNjUwN2wxLjMwMTItLjQzNWMuOTI1NS0uMjk5IDEuNTQyNi0xLjE2OSAxLjU0MjYtMi4xMzQxdi0xLjU3Njg2YzAtMS40MjcyOS0uOTY1OC0yLjY1MDY5LTIuMzQ3NS0yLjk3Njkzem0tOC44NTMxLTIuODAwMjIgMS45MDQ4IDEuNzY3MTNoLTUuODYxOHYtMi41ODI3M2gxLjg1MTFjLjc3OCAwIDEuNTI5MS4yODU0NiAyLjEwNTkuODE1NnptLTkuMTA3OTUuMjg1NDZjLjQ0MjY2LS42OTMyNiAxLjIwNzI0LTEuMTAxMDYgMi4wMjU0OS0xLjEwMTA2aDEuMzAxMTZ2Mi41ODI3M2gtNC4yNzkwM3ptLjUyMzE0IDEwLjQ1MzI1Yy0uODQ1MDcgMC0xLjUyOTE3LS43MDY5LTEuNTI5MTctMS41NjMyIDAtLjg3LjY4NDEtMS41NjMzIDEuNTI5MTctMS41NjMzczEuNTI5MTcuNzA2OSAxLjUyOTE3IDEuNTYzM2MwIC44NTYzLS42OTc1MSAxLjU2MzItMS41MjkxNyAxLjU2MzJ6bTEzLjY4MjExIDBjLS44NDUxIDAtMS41MjkyLS43MDY5LTEuNTI5Mi0xLjU2MzIgMC0uODcuNjg0MS0xLjU2MzMgMS41MjkyLTEuNTYzMy44NDUgMCAxLjUyOTIuNzA2OSAxLjUyOTIgMS41NjMzIDAgLjg1NjMtLjY4NDIgMS41NjMyLTEuNTI5MiAxLjU2MzJ6bTQuMjc5LTMuMzg0N2MwIC4xNzY3LS4xMDczLjMyNjItLjI4MTcuMzk0MmwtLjg1ODUuMjg1NGMtLjQ2OTUtMS4zMTg1Mi0xLjY5MDEtMi4yNzAwNS0zLjEzODgtMi4yNzAwNS0xLjU2OTQgMC0yLjg4NCAxLjExNDY1LTMuMjQ2MiAyLjU5NjM1aC03LjIwMzJjLS4zNjIyLTEuNDgxNy0xLjY2MzI5LTIuNTk2MzUtMy4yMzI3MS0yLjU5NjM1LTEuNTQyNTkgMC0yLjgzMDMyIDEuMDczODctMy4yMTkzMiAyLjUxNDc1bC0xLjIwNzI0LS4xMDg3Yy0uMzYyMTctLjAyNzItLjYzMDQ1LS4zMjYzLS42MzA0NS0uNjc5N3YtMi44NjgxOWMwLS4zMjYyNC4yMTQ2Mi0uNTk4MS41MzY1NS0uNjY2MDdsMS40ODg5NC0uMzUzNDJoMTUuNzg4MDNsNC4yOTI0Ljk5MjMxYy41NS4xMjIzNC45MzkuNjExNy45MzkgMS4xODI2MXYxLjU3Njg2eiIgZmlsbD0iIzdkODk5YiIvPjwvc3ZnPg=="
             style={{marginLeft:"10px",marginTop:"50px"}}
             
              alt="car icon"
            />
            &nbsp;&nbsp;<div style={{marginLeft:"50px",marginTop:"-40px"}}>
            <p className="ekLCtT">
              Enter your &nbsp;
              <span style={{ color: "#7C47E1" }}>car</span>&nbsp; number
            </p>
            </div>
            </div>
            </div>
            <div class="sc-bdVaJa sc-bwzfXH sc-kaNhvL hnEcVH">
              <p class="sc-iwsKbI sc-LKuAh eAeVoP" >Insure now</p>
              &nbsp;&nbsp;&nbsp;
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgMTMgMTMiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMSA2LjE4NTA2aDEwLjM3MDQiLz48cGF0aCBkPSJtNi4xODU1NSAxIDUuMTg1MTUgNS4xODUxOS01LjE4NTE1IDUuMTg1MjEiLz48L2c+PC9zdmc+"
                alt="search icon"
              />
            </div>

            <div className="cGYGGy" style={{marginTop:"10px"}}><div>
                or</div>
                </div>
                <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
         
         <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
             <div className="fRJFwS">
                 <img   src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg=="></img>
                 <div class="sc-bdVaJa jCnDwj" style={{marginTop:"em"}}><p class="sc-iwsKbI sc-daURTG detjqg">Looking to insure your new car?</p><p class="sc-iwsKbI sc-bXGyLb bqVLHP">Save big with our zero commission insurance</p></div>
                 <button class="sc-fYiAbW jBqRDn">Get a quote</button>
             </div>
             </div>
         
             </FadeIn>
          </div>
        )}

        {bikefield && (
          <div>
              <FadeIn>
            <div
              style={{
                marginLeft: "550px",
                backgroundColor: "white",
                width: "480px",
                marginTop: "20px",
                height: "80px",
                borderRadius: "20px",
              }}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
               
                style={{ width: "472px", height: "80px", borderRadius: "10px" }}
              />
              <div style={{marginTop:"-95px"}}><img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjcgMTgiIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjN2Q4OTliIj48cGF0aCBkPSJtMjEuMjkwNiAxOGMtMi43MDI3IDAtNC44OTQxLTIuMjQwMS00Ljg5NDEtNC45OTE1czIuMTkxNC00Ljk5MTUzIDQuODk0MS00Ljk5MTUzIDQuODk0MSAyLjI0MDEzIDQuODk0MSA0Ljk5MTUzLTIuMTkxNCA0Ljk5MTUtNC44OTQxIDQuOTkxNXptMC04LjE0NDdjLTEuNjkyMiAwLTMuMDY4IDEuNDI0NC0zLjA2OCAzLjE2NTMgMCAxLjc0MSAxLjM3NTggMy4xNjU0IDMuMDY4IDMuMTY1NHMzLjA2OC0xLjQyNDQgMy4wNjgtMy4xNjU0YzAtMS43NDA5LTEuMzc1OC0zLjE2NTMtMy4wNjgtMy4xNjUzeiIvPjxwYXRoIGQ9Im01LjU5NzYzIDE4Yy0yLjcxNDkgMC00LjkzMDYzOC0yLjI1MjItNC45MzA2MzgtNS4wMjhzMi4yMTU3MzgtNS4wMjgwMyA0LjkzMDYzOC01LjAyODAzYzIuNzI3MDcgMCA0LjkzMDY3IDIuMjUyMjMgNC45MzA2NyA1LjAyODAzcy0yLjIwMzYgNS4wMjgtNC45MzA2NyA1LjAyOHptMC04LjIyOTg3Yy0xLjcxNjU5IDAtMy4xMDQ0OCAxLjQzNjU3LTMuMTA0NDggMy4yMDE4N3MxLjQwMDA2IDMuMjAxOSAzLjEwNDQ4IDMuMjAxOWMxLjcxNjU5IDAgMy4xMTY2NS0xLjQzNjYgMy4xMTY2NS0zLjIwMTlzLTEuNDAwMDYtMy4yMDE4Ny0zLjExNjY1LTMuMjAxODd6Ii8+PHBhdGggZD0ibTExLjEwMDYgOC41MDM3OWMtLjI0MzUgMC0uNDk5MS0uMDk3MzktLjY2OTYtLjI5MjE4LTEuNzA0NC0xLjg2MjY5LTQuOTA2MjctMi4yNTIyNy00LjkzMDYyLTIuMjUyMjctLjQ5OTE1LS4wNjA4Ny0uODUyMjEtLjUxMTMyLS44MDM1MS0xLjAxMDQ3LjA2MDg3LS40OTkxNi41MjM1LS44NTIyMSAxLjAxMDQ3LS44MDM1Mi4xNDYxLjAxMjE4IDMuMzYwMTQuNDAxNzYgNS41NTE1NiAyLjMyNTMyIDEuMTU2NS0uNTk2NTUgMy43MjUzLTEuODEzOTkgNi4xNzI0LTIuMDQ1My41MTEzLS4wNjA4OC45NDk2LjMxNjUzLjk5ODMuODI3ODYuMDQ4Ny40OTkxNS0uMzE2NS45NDk2LS44Mjc5Ljk5ODMtMi44MDAxLjI0MzQ5LTYuMDAxOSAyLjEwNjE3LTYuMDM4NSAyLjExODM0LS4xNDYxLjA4NTIzLS4zMDQzLjEzMzkyLS40NjI2LjEzMzkyeiIvPjxwYXRoIGQ9Im0xNy40NjczIDE1LjA0MTZoLTUuNDA1NGMtLjA3MyAwLS4xMzM5LS4wMTIyLS4yMDctLjAyNDRsLTYuMTcyMzktMS40Yy0uNDg2OTgtLjEwOTYtLjgwMzUxLS41OTY2LS42ODE3Ny0xLjA5NTcuMTA5NTctLjQ4Ny42MDg3Mi0uNzkxNCAxLjA5NTctLjY4MThsNi4wNzUwNiAxLjM3NTdoNS4yOTU4Yy40OTkyIDAgLjkxMzEuNDEzOS45MTMxLjkxMzEgMCAuNDk5MS0uNDEzOS45MTMxLS45MTMxLjkxMzF6Ii8+PHBhdGggZD0ibTIxLjI3NzggMTMuNjQxNWMtLjM1MzEgMC0uNjgxOC0uMjA3LS44NC0uNTQ3OWwtNC4wNDE5LTkuMzEzNDJjLS4yODAxLS42NTc0Mi0uODI3OS0xLjEzMjIyLTEuNTA5Ny0xLjMyNzAxLS40ODctLjEzMzkyLS43NjctLjY0NTI0LS42MzMtMS4xMjAwNS4xMzM5LS40ODY5NzIuNjQ1Mi0uNzY2OTg0IDEuMTMyMi0uNjMzMDY1IDEuMjA1Mi4zNDA4ODUgMi4xNzkyIDEuMjA1MjY1IDIuNjc4MyAyLjM2MTgzNWw0LjA0MiA5LjMxMzQxYy4xOTQ3LjQ2MjYtLjAxMjIuOTk4My0uNDc0OCAxLjE5MzEtLjEwOTYuMDQ4Ny0uMjMxNC4wNzMxLS4zNTMxLjA3MzF6Ii8+PHBhdGggZD0ibTIxLjYzMTMgNi40MjIwNGMtLjM1MyAwLS42ODE4LS4yMDY5Ni0uODI3OC0uNTQ3ODVsLS43MTgzLTEuNjMxMzdjLS4yMDctLjQ2MjYyIDAtLjk5ODMuNDYyNi0xLjIwNTI2LjQ2MjYtLjIwNjk3Ljk5ODMgMCAxLjIwNTMuNDYyNjJsLjcxODIgMS42MzEzOGMuMjA3LjQ2MjYyIDAgLjk5ODMtLjQ2MjYgMS4yMDUyNi0uMTIxNy4wNjA4Ny0uMjQzNS4wODUyMi0uMzc3NC4wODUyMnoiLz48L2c+PC9zdmc+"
             style={{marginLeft:"10px",marginTop:"50px"}}
             
              alt="car icon"
            />
            &nbsp;&nbsp;<div style={{marginLeft:"50px",marginTop:"-40px"}}>
            <p className="ekLCtT">
              Enter your &nbsp;
              <span style={{ color: "#7C47E1" }}>Bike</span>&nbsp; number
            </p>
            </div>
            </div>
              
            </div>
            <div class="sc-bdVaJa sc-bwzfXH sc-kaNhvL hnEcVH">
              <p class="sc-iwsKbI sc-LKuAh eAeVoP">Insure now</p>
              &nbsp;&nbsp;&nbsp;
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgMTMgMTMiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMSA2LjE4NTA2aDEwLjM3MDQiLz48cGF0aCBkPSJtNi4xODU1NSAxIDUuMTg1MTUgNS4xODUxOS01LjE4NTE1IDUuMTg1MjEiLz48L2c+PC9zdmc+"
                alt="search icon"
              />
            </div>
            <div className="cGYGGy" style={{marginTop:"10px"}}>
                or
                </div>
                <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
         
         <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
             <div className="fRJFwS">
                 <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxwYXRoIGQ9Im0xMy45NjQ0IDIwLjA4M2MtLjk1NTEuMDAxMS0xLjg3MDguMzgxLTIuNTQ2MiAxLjA1NjQtLjY3NTMuNjc1NC0xLjA1NTMgMS41OTExLTEuMDU2NCAyLjU0NjIuMDAxMS45NTUxLjM4MTEgMS44NzA4IDEuMDU2NCAyLjU0NjIuNjc1NC42NzU0IDEuNTkxMSAxLjA1NTMgMi41NDYyIDEuMDU2NC45NTUxLS4wMDE0IDEuODcwNi0uMzgxNCAyLjU0NTktMS4wNTY3LjY3NTQtLjY3NTMgMS4wNTU0LTEuNTkwOSAxLjA1NjctMi41NDU5LS4wMDEzLS45NTUtLjM4MTMtMS44NzA2LTEuMDU2Ny0yLjU0NTktLjY3NTMtLjY3NTMtMS41OTA4LTEuMDU1My0yLjU0NTktMS4wNTY3em0wIDUuNTA1OWMtLjUwNDgtLjAwMDItLjk4ODgtLjIwMDgtMS4zNDU5LS41NTc3LS4zNTctLjM1NjgtLjU1NzktLjg0MDgtLjU1ODQtMS4zNDU2LjAwMDUtLjUwNDkuMjAxMy0uOTg5LjU1ODQtMS4zNDYuMzU3LS4zNTcuODQxLS41NTc4IDEuMzQ1OS0uNTU4NC41MDQ5LjAwMDkuOTg4OC4yMDE4IDEuMzQ1Ny41NTg3LjM1Ny4zNTcuNTU3OS44NDA5LjU1ODcgMS4zNDU3LS4wMDA4LjUwNDctLjIwMTguOTg4NS0uNTU4OCAxLjM0NTMtLjM1NjkuMzU2OC0uODQwOC41NTc1LTEuMzQ1Ni41NTh6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTI5LjQ2MjEgMjAuNjAwOC4yNTQyLS40MTg2Yy0uNjM2NC0uMzgzMi0xLjM2NTQtLjU4NTUtMi4xMDg0LS41ODQ5LS4yMTI4LjAwMTYtLjQyNTEuMDE5OC0uNjM1MS4wNTQ0bC0yLjM2MDYtNC43NTg4LTIuNzQ5OC0uNjg2NGMtLjE0NzgtLjAzNjktLjMwNC0uMDE3NS0uNDM4Mi4wNTQ1LS4xMzQzLjA3MTktLjIzNjkuMTkxMy0uMjg4LjMzNDctLjA1MS4xNDMxLS4wNDcyLjI5OTkuMDEwOC40NDAyLjA1OC4xNDA0LjE2Ni4yNTQyLjMwMzEuMzE5NWwxLjkyMzIuODk3OC4yOTQxLjU5MDFjLTMuNTIuMjQxNy00LjkxNzkgMi4xMTc4LTYuNTQ4MiAxLjM2MDMtMS4xMzczLS42MjE2LTIuOTAyNS0uODkxNS0zLjk2MzUtMS4wMDI0LS4xMTQ4LS4wMTE4LS4yMzA4LS4wMDAxLS4zNDA5LjAzNDUtLjExLjAzNDYtLjIxMTkuMDkxMy0uMjk5Mi4xNjY2LS4wODc0LjA3NTQtLjE1ODUuMTY3OC0uMjA4OS4yNzE1LS4wNTA1LjEwMzgtLjA3OTIuMjE2Ny0uMDg0NC4zMzItLjAwOTcuMjE2Ny4wNjM4LjQyOS4yMDU0LjU5MzMuMTQxNS4xNjQ0LjM0MDYuMjY4NC41NTYzLjI5MDkgMS4wMDc3LjEwNDYgMi40ODQxLjM0NzQgMy4zMjEyLjgwMzYgMCAwIDIuMzY2OCAxLjE2MjUgMi40MDY2IDQuMzY1NC4wMDExLjE0MTYuMDU3OS4yNzcxLjE1ODIuMzc3MnMuMjM1OS4xNTY3LjM3NzUuMTU3NWgyLjE4MzhjLjExNjEuMDAwNC4yMjkyLS4wMzcxLjMyMjEtLjEwNjguMDkyOS0uMDY5Ni4xNjA2LS4xNjc3LjE5MjctLjI3OTMuMjYxNi0uOTA3MiAxLjA2Mi0zLjI1IDIuNzg3NS01LjIxNTFsLjYzNTEgMS4yNzM0Yy0uNTcwNy4zNzA5LTEuMDM5OS44Nzg0LTEuMzY0OSAxLjQ3NjQtLjMyNTEuNTk4LS40OTU3IDEuMjY3Ny0uNDk2NSAxLjk0ODRoLjQ5MTdjLjAwMTEuOTU1MS4zODExIDEuODcwOCAxLjA1NjQgMi41NDYyLjY3NTQuNjc1MyAxLjU5MTEgMS4wNTUzIDIuNTQ2MiAxLjA1NjQuOTU1LS4wMDE0IDEuODcwNC0uMzgxNCAyLjU0NTYtMS4wNTY4LjY3NTEtLjY3NTMgMS4wNTQ5LTEuNTkwOSAxLjA1Ni0yLjU0NTguMDAxMy0uNjIxNi0uMTU4NS0xLjIzMjgtLjQ2MzYtMS43NzQzcy0uNzQ1Mi0uOTk0Ny0xLjI3NzUtMS4zMTU2em0tMS44NTEgNC45ODhjLS41MDQ4LS4wMDAzLS45ODg5LS4yMDA5LTEuMzQ1OS0uNTU3OC0uMzU3MS0uMzU2OC0uNTU3OS0uODQwOC0uNTU4NS0xLjM0NTYuMDAwNi0uNTA0OS4yMDE0LS45ODg5LjU1ODQtMS4zNDYuMzU3LS4zNTcuODQxMS0uNTU3OCAxLjM0Ni0uNTU4My41MDQ3LjAwMDguOTg4NS4yMDE3IDEuMzQ1My41NTg3cy41NTc0Ljg0MDkuNTU4IDEuMzQ1NmMtLjAwMDYuNTA0Ni0uMjAxMy45ODg0LS41NTgxIDEuMzQ1My0uMzU2OC4zNTY4LS44NDA2LjU1NzUtMS4zNDUyLjU1ODF6IiBmaWxsPSIjMTZjMmY4Ii8+PGcgZmlsbD0iI2ZmZTQ2ZSI+PHBhdGggZD0ibTEyLjc1NzggMTIuNzQ2MyAxLjY1MzggMi4xMTU3IDEuMDgzMi0uODQ5MS0xLjY3NzQtMi4xMjk3eiIvPjxwYXRoIGQ9Im0xOS41MDU5IDkuODIxOTgtLjAwMzIgMi42ODUzMiAxLjM3NjMtLjAwMDItLjAwNjgtMi43MTEwNXoiLz48cGF0aCBkPSJtMjcuNTE5IDExLjY2MTYtLjk2MTEgMS4xODczIDEuMDU1Ljg4MzguOTctMS4yMTM0eiIvPjwvZz48cGF0aCBkPSJtMjYuNTcxOSAxNy41MTZjLjAzNi4wODcyLjA5NjQuMTYyLjE3NDEuMjE1NS4wNzc2LjA1MzUuMTY5MS4wODMzLjI2MzMuMDg1OWwuODIwMy4wMjNjLjA2LjAwMTcuMTE5Ni0uMDEwNi4xNzQxLS4wMzU4LjA1NDQtLjAyNTIuMTAyMy0uMDYyNy4xMzk4LS4xMDk2LjAzNzUtLjA0NjguMDYzNi0uMTAxNy4wNzYzLS4xNjA0LjAxMjgtLjA1ODYuMDExNy0uMTE5NC0uMDAzLS4xNzc2bC0uNDY3Ny0xLjgzMjJjLS4wMTYzLS4wNjE5LS4wNDc2LS4xMTg5LS4wOTEyLS4xNjU4cy0uMDk4MS0uMDgyMy0uMTU4OC0uMTAzYy0uMDYwNi0uMDIwNy0uMTI1NC0uMDI2MS0uMTg4Ni0uMDE1N3MtLjEyMjguMDM2Mi0uMTczNi4wNzUybC0uODI0NS42Mjc5Yy0uMDg1NS4wNjU1LS4xNDY5LjE1NzUtLjE3NDcuMjYxNi0uMDI3OS4xMDQtLjAyMDUuMjE0NC4wMjA5LjMxMzl6IiBmaWxsPSIjMTZjMmY4Ii8+PC9zdmc+" alt="car icon" className="sc-lkqHmb bRTQVF"></img>
                 <div class="sc-bdVaJa jCnDwj" style={{marginTop:"em"}}><p class="sc-iwsKbI sc-daURTG detjqg" style={{marginLeft:"-20px"}}>Looking to insure your new bike?</p><p class="sc-iwsKbI sc-bXGyLb bqVLHP">Save big with our zero commission insurance</p></div>
                 <button class="sc-fYiAbW jBqRDn">Get a quote</button>
             </div>
             </div>
         
             </FadeIn>
          </div>
        )}
        {heartfield && (
            <div>
                <FadeIn>
              <div
                style={{
                  marginLeft: "550px",
                  backgroundColor: "white",
                  width: "480px",
                  marginTop: "20px",
                  height: "80px",
                  borderRadius: "20px",
                }}
              >
              <p className="dbVKIG" style={{ marginLeft: "30px" }}>
              Arogya Sanjeevani policy, ACKO
            </p>
            <div className="ieFMZz">
              <p className="gvofsT" style={{marginLeft:"30px"}}>
                Standard health insurance plan that’s big on benefits, <br/>
                low on cost
              </p>
            </div>
                
              </div>
              <div class="sc-bdVaJa sc-bwzfXH sc-kaNhvL hnEcVH">
                <p class="sc-iwsKbI sc-LKuAh eAeVoP">Insure now</p>
                &nbsp;&nbsp;&nbsp;
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgMTMgMTMiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMSA2LjE4NTA2aDEwLjM3MDQiLz48cGF0aCBkPSJtNi4xODU1NSAxIDUuMTg1MTUgNS4xODUxOS01LjE4NTE1IDUuMTg1MjEiLz48L2c+PC9zdmc+"
                  alt="search icon"
                />
              </div>
              <div className="cGYGGy" style={{marginTop:"10px"}}>
                  or
                  </div>
                  <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                  <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
           
           <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
           <div >
         
         </div>
         <div >
          <div className="buckEw">
            <div className="health" >
              <img
                src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMC43IDMxLjVjLTUuNiAwLTEwLjItNC42LTEwLjItMTAuMnYtMTAuNmMwLTUuNiA0LjYtMTAuMiAxMC4yLTEwLjJoMTAuNmM1LjYgMCAxMC4yIDQuNiAxMC4yIDEwLjJ2MTAuNmMwIDUuNi00LjYgMTAuMi0xMC4yIDEwLjJ6IiBmaWxsPSIjN2M0N2UxIi8+PHBhdGggZD0ibTIxLjMgMWM1LjMgMCA5LjcgNC4zIDkuNyA5Ljd2MTAuNmMwIDUuMy00LjMgOS43LTkuNyA5LjdoLTEwLjZjLTUuNCAwLTkuNy00LjMtOS43LTkuN3YtMTAuNmMwLTUuNCA0LjMtOS43IDkuNy05Ljd6bTAtMWgtMTAuNmMtNS45IDAtMTAuNyA0LjgtMTAuNyAxMC43djEwLjZjMCA1LjkgNC44IDEwLjcgMTAuNyAxMC43aDEwLjZjNS45IDAgMTAuNy00LjggMTAuNy0xMC43di0xMC42YzAtNS45LTQuOC0xMC43LTEwLjctMTAuN3oiIGZpbGw9IiM5MzY0ZWQiLz48cGF0aCBkPSJtMjQuNyAxMmgtMTYuOGMtMSAwLTIgLjQtMi44IDEuMi0uNy44LTEuMSAxLjgtMS4xIDIuOCAwIC41LjEgMSAuMyAxLjVzLjUuOS44IDEuM2MuNC40LjguNiAxLjMuOHMxIC4zIDEuNS4zaDE2LjhjMi4yIDAgNC0xLjcgNC0zLjkgMC0uNS0uMS0xLS4zLTEuNXMtLjUtLjktLjktMS4zLS44LS43LTEuMy0uOS0xLS4zLTEuNS0uM3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjQuNSAxOC45Yy0uOCAwLTEuNS0uMy0yLjEtLjlzLS45LTEuMy0uOS0yLjEuMy0xLjUuOS0yLjEgMS4zLS45IDIuMS0uOSAxLjUuMyAyLjEuOS45IDEuMy45IDIuMS0uMyAxLjUtLjkgMi4xYy0uNS42LTEuMy45LTIuMS45eiIgZmlsbD0iIzdjNDdlMSIvPjxwYXRoIGQ9Im0yNi41IDE2LjVjLjItMS4xLS40LTIuMi0xLjUtMi40cy0yLjIuNC0yLjQgMS41LjQgMi4yIDEuNSAyLjQgMi4xLS41IDIuNC0xLjV6IiBmaWxsPSIjM2ZiNzUyIi8+PGcgZmlsbD0iIzdjNDdlMSI+PHBhdGggZD0ibTExIDE2YzAtLjgtLjMtMS41LS45LTIuMS0uNi0uNS0xLjMtLjktMi4xLS45cy0xLjUuMy0yLjEuOWMtLjUuNi0uOSAxLjMtLjkgMi4xcy4zIDEuNS45IDIuMWMuNi41IDEuMy45IDIuMS45LjcgMCAxLjUtLjMgMi0uOHYuMy4yYzAgLjEuMS4xLjEuMiAwIDAgLjEuMS4yLjFoLjIuMmMuMSAwIC4xLS4xLjItLjEgMCAwIC4xLS4xLjEtLjJzMC0uMSAwLS4ydi0yLjVjMCAuMSAwIC4xIDAgMHptLTIuOSAyYy0uNSAwLTEtLjItMS40LS42cy0uNi0uOS0uNi0xLjQuMi0xIC42LTEuNGMuMy0uNC44LS42IDEuMy0uNnMxIC4yIDEuNC42LjYuOS42IDEuNGMwIC4zIDAgLjUtLjEuOC0uMS4yLS4yLjUtLjQuNi0uMi4yLS40LjMtLjYuNC0uMy4yLS42LjItLjguMnoiLz48cGF0aCBkPSJtMTQuNiAxOC45Yy0uOCAwLTEuNS0uMy0yLjEtLjlzLS45LTEuMy0uOS0yLjEuMy0xLjUuOS0yLjEgMS4zLS45IDIuMS0uOWMuNyAwIDEuNC4zIDIgLjggMCAwIC4xLjEuMS4xdi4yLjJjMCAuMS0uMS4xLS4xLjIgMCAwLS4xLjEtLjEuMS0uMSAwLS4xIDAtLjIgMHMtLjEgMC0uMiAwLS4xLS4xLS4yLS4xYy0uNC0uMy0uOC0uNS0xLjMtLjUtLjMgMC0uNS4xLS44LjItLjIuMS0uNS4yLS43LjRzLS4zLjQtLjQuN2MtLjEuMi0uMi41LS4yLjggMCAuNS4yIDEgLjYgMS40cy45LjYgMS40LjYgMS0uMiAxLjMtLjVjLjEtLjEuMi0uMS4zLS4xcy4yLjEuMy4yLjEuMi4xLjMtLjEuMi0uMi4zYy0uMy41LTEgLjctMS43Ljd6Ii8+PHBhdGggZD0ibTIxLjYgMTguMS0yLjYtMi4xIDIuNS0yLjFzLjEtLjEuMS0uMSAwLS4xLjEtLjJjMC0uMSAwLS4xIDAtLjJzMC0uMS0uMS0uMi0uMi0uMi0uMy0uMi0uMiAwLS4zLjFsLTIuOCAyLjN2LTEuOWMwLS4xLS4xLS4yLS4xLS4zLS4xLS4xLS4yLS4yLS4zLS4ycy0uMi4xLS4zLjEtLjEuMi0uMS4zdjUgLjJjMCAuMS4xLjEuMS4yIDAgMCAuMS4xLjIuMWguMi4ycy4xLS4xLjItLjFjMCAwIC4xLS4xLjEtLjJzMC0uMSAwLS4ydi0xLjlsMi44IDIuM2MuMS4xLjIuMS4zLjFoLjJjLjEgMCAuMS0uMS4yLS4xIDAgMCAuMS0uMS4xLS4yczAtLjEgMC0uMiAwLS4xLS4xLS4yYy0uMiAwLS4yLS4xLS4zLS4xeiIvPjwvZz48L3N2Zz4="
                className="acko-img"
                style={{marginTop: "80px",
                        marginLeft: "685px"}}
              />
            </div>
          </div>
          <div className="dfFLcv">
            <p className="gxYocx" style={{ marginLeft: "20px" }}>
              Corporate health policy from ACKO?
            </p>
            <p className="jaxMBs" style={{ marginLeft: "20px" }}>
              Install the ACKO app
              <p className="DTCbz">to access your benefits.</p>
            </p>
          </div>
          <div className="bpwqTm" style={{marginLeft:"347px",marginTop: "-38px"}}>
          <a href="https://apps.apple.com/in/app/id1535591580?mt=8">
          <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE5IiB2aWV3Qm94PSIwIDAgMjAgMTkiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS4wNzIzNCAxNS42NDQyLTEuMTY1NTUgMi4wNTg5Yy0uMzMzMDEuNjEyMS0xLjExMDA0Ljc3OS0xLjY2NTA2LjQ0NTEtLjYxMDUzLS4zMzM4LS43NzcwNC0xLjExMjktLjQ0NDAzLTEuNjY5M2wuODg4MDQtMS41MDI0Yy45NDM1My0uMzMzOSAxLjcyMDU3LS4xMTEzIDIuMzg2Ni42Njc3em0xMy4zNzU5Ni0zLjcyODJoLTMuMjE5MWMtMS42MDk2LTIuNzgyMjItMi44MzA2LTQuODk2NzItMy42MDc2LTYuMjg3ODMtLjcyMTYuNjEyMDktMS40NDMxIDIuMzkyNzItLjQ0NCA0LjE3MzM1Ljk5OSAxLjcyNDk4IDIuNTUzMSA0LjM5NTk4IDQuNTUxMSA3LjkwMTU4LjMzMzEuNTU2NCAxLjExMDEuNzc5IDEuNjY1MS40NDUxLjU1NS0uMzMzOC43NzctMS4xMTI5LjQ0NC0xLjY2OTNsLTEuMjIxLTIuMTE0NWgxLjc3NmMuNjY2MSAwIDEuMjIxMS0uNTU2NSAxLjIyMTEtMS4yMjQyLjA1NTUtLjY2NzctLjQ5OTYtMS4yMjQyLTEuMTY1Ni0xLjIyNDJ6bS03LjQzNzIgMGgtMy44Mjk2OWw1LjI3MjY5LTkuMTgxMzdjLjMzMy0uNTU2NDQuMTY2NS0xLjMzNTQ3LS40NDQtMS42NjkzNC0uNjEwNS0uMzMzODY2LTEuMzMyMS0uMTY2OTIyLTEuNjY1MS40NDUxN2wtLjU1NDk5Ljk0NTk1LS41NTUwMi0uOTQ1OTVjLS4zMzMwMS0uNTU2NDQ3LTEuMTEwMDQtLjc3OTAzNi0xLjY2NTA2LS40NDUxNy0uNTU1MDIuMzMzODctLjc3NzAyIDEuMTEyOS0uNDQ0MDEgMS42NjkzNGwxLjI3NjU0IDIuMTcwMTYtMy45OTYxNiA2Ljk1NTYxaC0zLjEwODEyYy0uNjY2MDIxIDAtMS4yMjEwMzE2LjU1NjQtMS4yMjEwMzE2IDEuMjI0MiAwIC42Njc3LjU1NTAxMDYgMS4yMjQxIDEuMjIxMDMxNiAxLjIyNDFoMTEuMTU1OTJjLjQ5OTUtLjg5MDMtLjIyMi0yLjM5MjctMS40NDMtMi4zOTI3eiIgZmlsbD0iI2QxYzBmZiIvPjwvc3ZnPg=="/>
          
          </a>
          <div className="gBwHuj"></div>
          <a href="https://play.google.com/store/apps/details?id=com.acko.android&referrer=af_tranid%3D4RyhOUKXa32whFQA9R09Mw%26shortlink%3Dfce251b8%26pid%3DWebsite%20Footer%26c%3DWebsite%20Footer%20Google%26af_web_id%3D5275d55d-d43b-4a2e-a92f-fd9cdf5a456e-o">
          <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE5IiB2aWV3Qm94PSIwIDAgMTYgMTkiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLjg1OTcwOC41NjQ2OTcgOC44ODAzMzIgOC45MDMxNzMtOC44ODAzMzIgOC45MDMxM2MtLjMzMzAxMi0uMTExMy0uNTU1MDItLjQ0NTItLjU1NTAyLS43Nzl2LTE2LjE5MjYzYzAtLjM4OTUyLjIyMjAwOC0uNzIzMzgzLjU1NTAyLS44MzQ2NzN6bTkuNDkwODkyIDkuNTE1MjAzIDEuOTk4IDIuMDAzMi05LjU0NjMyIDUuNTA4OXptMi43NzUxLTIuODM3ODIgMi40NDIxIDEuNDQ2NzVjLjM4ODUuMjIyNTguNTU1Ljc3OTAxLjMzMyAxLjE2ODUyLS4wNTU1LjExMTI5LS4xNjY1LjIyMjY1LS4zMzMuMzMzODVsLTIuNDQyMSAxLjQ0NjgtMi4xNjQ2LTIuMTcwMTN6bS0xMC4zMjM0Mi01Ljk1Mzk5IDkuNTQ2MzIgNS41MDg4LTEuOTk4IDIuMDAzMjN6IiBmaWxsPSIjZDFjMGZmIi8+PC9zdmc+"/>
          
          </a>
          
          </div>
        </div>
         
               </div>
           
               </FadeIn>
            </div>
          )}
      </div>

    </div>
  );
}
export default Fadecar;
