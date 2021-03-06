import React, { useState } from 'react';
import Navigation from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

// for future, import the hero image
// import herobg from '../../assets/cover/hero-bg.jpg';

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method with switch in order to render the specific page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
        <nav className="nav-main">
            <div className="main-name">
                <a
                    className=""
                    href="#about"
                >
                    <span >Khanh D. Lam</span>
                </a>
            </div>
        
        {/* Pass the state value and the setter as props to NavTabs */}
        <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
        />
        </nav>

      {/* {/* hero image could be here - future improvement */}
      {/* <img src={herobg} className="my-2" style={{ width: "100%"}} alt="hero" /> */}

        {/* Call the renderPage function passing in the currentPage */}
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
  );
}

export default Header;