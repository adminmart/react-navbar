import React from "react";
import "../index.css";

export const Reactmenu = React.forwardRef(
  (
    {
      children,
      logo
    },
    ref
  ) => {

    return (
      <>
        <nav role="navigation">
          <ul>
            {children}
          </ul>
        </nav>
      </>
    );
  }
);
