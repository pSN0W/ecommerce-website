import React from "react";

import "./home-page.scss";

import DirectoryMenu from "../../component/directory/directory";

const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
