import React from "react";
import "../index.css";

export const Reactsubmenu = React.forwardRef(
  (
    {
      children,
      name
    },
    ref
  ) => {

    return (
      <>

           
        
              {/* <ul className="dropdown">
                   
              </ul> */}

            <li><a href="#">{name}</a>
              <ul className="dropdown">
                  {children}
              </ul>
            </li>
            
           
    
      </>
    );
  }
);
