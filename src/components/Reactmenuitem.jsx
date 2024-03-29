import React from "react";
import "../index.css";

export const Reactmenuitem = React.forwardRef(
  (
    {
      children
    },
    ref
  ) => {

    return (
      <>

            <li>{children}</li>
        {/* <nav role="navigation">
          <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a>
              <ul className="dropdown">
                <li><a href="#">Sub-1</a></li>
                <li><a href="#">Sub-2</a></li>
                <li><a href="#">Sub-3</a></li>
              </ul>
            </li>
            <li><a href="#">Three</a></li>
          </ul>
        </nav> */}
      </>
    );
  }
);
