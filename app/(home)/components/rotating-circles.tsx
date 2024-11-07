import React from "react";

export default function RotatingCircles() {
  return (
    <div className="flex justify-center">
      {/* 6.SIXTH-CIRCLE */}
      <div className="border-2 border-[#9A7264] lg:w-[860px] lg:h-[860px] w-[450px] h-[450px] max-[500px]:w-[300px] max-[500px]:h-[300px] rounded-full flex items-center justify-center relative">
        <div
          className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#9A7264] flex justify-center items-center text-center text-white lg:text-[12px] lg:font-[700] text-[8px] max-[500px]:text-[6px] font-[500] absolute"
          style={{ left: "0%", top: "10%", transform: "translate(60%, 0%)" }}
        >
          Food Distribution
        </div>

        {/* 5.FIFTH-CIRCLE */}
        <div className="border-2 border-[#C8DBFF] lg:w-[740px] lg:h-[740px] w-[380px] h-[380px] max-[500px]:w-[260px] max-[500px]:h-[260px] rounded-full flex items-center justify-center relative">
          <div
            className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#C8DBFF] flex justify-center items-center text-center lg:text-[12px] lg:font-[700] text-[7px] max-[500px]:text-[5px] font-[500] absolute"
            style={{ left: "0%", bottom: "50%", transform: "translate(-35%, -50%)" }}
          >
            Sustainability
          </div>

          {/* 4.FOURTH-CIRCLE */}
          <div className="border-2 border-[#A9A8A8] lg:w-[620px] lg:h-[620px] w-[310px] h-[310px] max-[500px]:w-[220px] max-[500px]:h-[220px] rounded-full flex items-center justify-center relative">
            <div
              className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#A9A8A8] flex justify-center items-center text-center text-white lg:text-[12px] lg:font-[700] text-[8px] max-[500px]:text-[6px] font-[500] absolute"
              style={{ right: "0", bottom: "50%", transform: "translate(35%, -50%)" }}
            >
              Agritech
            </div>

            {/* 3.THIRD-CIRCLE */}
            <div className="border-2 border-[#9BC2AB] lg:w-[500px] lg:h-[500px] w-[240px] h-[240px] max-[500px]:w-[180px] max-[500px]:h-[180px] rounded-full flex items-center justify-center relative">
              <div
                className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#9BC2AB] flex justify-center items-center text-center text-white lg:text-[12px] lg:font-[700] text-[8px] max-[500px]:text-[6px] font-[500] absolute"
                style={{ right: "0", bottom: "25%", transform: "translate(25%, 25%)" }}
              >
                Farming
              </div>

              {/* 2.SECOND-CIRCLE */}
              <div className="border-2 border-[#00A9D8] lg:w-[380px] lg:h-[380px] w-[170px] h-[170px] max-[500px]:w-[140px] max-[500px]:h-[140px] rounded-full flex items-center justify-center relative">
                <div
                  className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#00A9D8] flex justify-center items-center text-center text-white lg:text-[12px] lg:font-[700] text-[8px] max-[500px]:text-[6px] font-[500] absolute"
                  style={{ left: "0", bottom: "25%", transform: "translate(-35%, 25%)" }}
                >
                  Innovation
                </div>

                {/* 1.FIRST-CIRCLE */}
                <div className="border-2 border-[#B73E94] lg:w-[260px] lg:h-[260px] w-[100px] h-[100px] max-[500px]:w-[90px] max-[500px]:h-[90px] rounded-full flex items-center justify-center relative">
                  <div
                    className="lg:w-24 lg:h-24 w-12 h-12 max-[500px]:w-7 max-[500px]:h-7 rounded-full bg-[#B73E94] flex justify-center items-center text-center text-white lg:text-[12px] lg:font-[700] text-[8px] max-[500px]:text-[6px] font-[500] absolute"
                    style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}
                  >
                    Food Security
                  </div>

                  {/* 0.MAIN-CIRCLE */}
                  <div className="lg:w-[140px] lg:h-[140px] w-[40px] h-[40px] bg-[#ffffff1a] rounded-full flex items-center justify-center">
                    <div
                      className="lg:w-16 lg:h-16 w-6 h-6"
                      style={{
                        maskImage: "url(/basket.png)",
                        backgroundColor: "#fff",
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
