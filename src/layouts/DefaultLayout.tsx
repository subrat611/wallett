import React from "react";
import FooterActionMenu from "../components/FooterActionMenu";

interface DefaultLayoutPropsType {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutPropsType> = ({ children }) => {
  return (
    <div className="bg-gray-950 min-h-screen h-full">
      {children}
      <FooterActionMenu />
    </div>
  );
};

export default DefaultLayout;
