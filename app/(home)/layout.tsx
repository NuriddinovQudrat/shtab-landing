import { ChildProps } from "@/types";
import { Footer } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
