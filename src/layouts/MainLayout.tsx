import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="container mx-auto max-w-[1170px] px-6">
        <Navbar />
      </header>
      <main className="container mx-auto max-w-[1170px] px-6">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
