import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Ecosystem = () => {
  return (
    <div className="bg-primary p-10">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-[#fff] w-5 h-[1px] mr-2"></div>
              Ecosystem
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full text-white">
            <h1 className="text-4xl mb-5">Explore the Silal Ecosystem</h1>
            <p className="text-sm mb-10">
              Collaborating seamlessly, our diverse business verticals unite in one vision, turning
              aspirations into achievements.
            </p>
            <Button variant={"outline"}>
              About Silal <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
