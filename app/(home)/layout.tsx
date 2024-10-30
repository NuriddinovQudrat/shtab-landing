import { ChildProps } from "@/types";
import { Footer, Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
