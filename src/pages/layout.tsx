import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
