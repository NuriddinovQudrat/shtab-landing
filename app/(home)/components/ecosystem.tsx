import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Ecosystem = () => {
  return (
    <div className="bg-primary p-4 py-10">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col mb-10">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              Ecosystem
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full text-white">
            <h1 className="sm:text-4xl text-3xl mb-5">Explore the Silal Ecosystem</h1>
            <p className="text-sm mb-10">
              Collaborating seamlessly, our diverse business verticals unite in one vision, turning
              aspirations into achievements.
            </p>
            <Button variant={"outline"}>
              About Silal <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          {/* 6.SIXTH-CIRCLE */}
          <div className="border-2 border-[#9A7264] w-[860px] h-[860px] rounded-full flex items-center justify-center relative">
            <div
              className="w-24 h-24 rounded-full bg-[#9A7264] flex justify-center items-center text-center text-white text-[12px] font-[700] absolute"
              style={{ left: "0%", top: "10%", transform: "translate(60%, 0%)" }}
            >
              Food Distribution
            </div>

            {/* 5.FIFTH-CIRCLE */}
            <div className="border-2 border-[#C8DBFF] w-[740px] h-[740px] rounded-full flex items-center justify-center relative">
              <div
                className="w-24 h-24 rounded-full bg-[#C8DBFF] flex justify-center items-center text-center text-[12px] font-[700] absolute"
                style={{ left: "0%", bottom: "50%", transform: "translate(-35%, -50%)" }}
              >
                Sustainability
              </div>

              {/* 4.FOURTH-CIRCLE */}
              <div className="border-2 border-[#A9A8A8] w-[620px] h-[620px] rounded-full flex items-center justify-center relative">
                <div
                  className="w-24 h-24 rounded-full bg-[#A9A8A8] flex justify-center items-center text-center text-white text-[12px] font-[700] absolute"
                  style={{ right: "0", bottom: "50%", transform: "translate(35%, -50%)" }}
                >
                  Agritech
                </div>

                {/* 3.THIRD-CIRCLE */}
                <div className="border-2 border-[#9BC2AB] w-[500px] h-[500px] rounded-full flex items-center justify-center relative">
                  <div
                    className="w-24 h-24 rounded-full bg-[#9BC2AB] flex justify-center items-center text-center text-white text-[12px] font-[700] absolute"
                    style={{ right: "0", bottom: "25%", transform: "translate(25%, 25%)" }}
                  >
                    Farming
                  </div>

                  {/* 2.SECOND-CIRCLE */}
                  <div className="border-2 border-[#00A9D8] w-[380px] h-[380px] rounded-full flex items-center justify-center relative">
                    <div
                      className="w-24 h-24 rounded-full bg-[#00A9D8] flex justify-center items-center text-center text-white text-[12px] font-[700] absolute"
                      style={{ left: "0", bottom: "25%", transform: "translate(-35%, 25%)" }}
                    >
                      Innovation
                    </div>

                    {/* 1.FIRST-CIRCLE */}
                    <div className="border-2 border-[#B73E94] w-[260px] h-[260px] rounded-full flex items-center justify-center relative">
                      <div
                        className="w-24 h-24 rounded-full bg-[#B73E94] flex justify-center items-center text-center text-white text-[12px] font-[700] absolute"
                        style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}
                      >
                        Food Security
                      </div>

                      {/* 0.MAIN-CIRCLE */}
                      <div className="w-[140px] h-[140px] bg-[#ffffff1a] rounded-full flex items-center justify-center">
                        <div
                          className="w-16 h-16"
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
      </div>
    </div>
  );
};
