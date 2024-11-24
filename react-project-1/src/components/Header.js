import React from "react";
import reactLogo from "./images/react-icon-small.png";




export default function Header() {
    console.log(reactLogo);
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="React Logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}



// export default function ReactFactsHeader() {
//     return (
//         <nav>
//             <img
//                 src={reactLogo}
//                 alt="React Logo"
//                 className="nav--icon"
//             />
//             <h3 className="nav--logo_text">ReactFacts</h3>
//             <h4 className="nav--title">React Course - Project 1</h4>
//         </nav>
//     );
// } 
