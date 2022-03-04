import React from "react";

function Navigation(props) {

    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    
    return (
        <nav>
            <ul className="flex-row">
                {tabs.map((tab) => (
                <li
                    className={
                    props.currentPage === tab ? "mx-5 navActive" : "mx-5"
                    }
                    key={tab}
                >
                    <a
                    href={"#" + tab.toLowerCase()}
                    // when a tab is clicked,
                    // the current page is set through the handlePageChange props.
                    onClick={() => props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? "mx-5 navActive" : "mx-5"
                    }
                    >
                    {tab}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;