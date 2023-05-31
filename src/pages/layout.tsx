import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className=" mt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
