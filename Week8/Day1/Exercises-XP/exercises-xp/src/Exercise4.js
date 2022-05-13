import React from "react";
// import Component from "react";
import './Exercise4.css';

class Exercise4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Part 1

        // return (
        //     <div>
        //         <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a header</h1>
        //         <p>This is a paragraph</p>
        //         <a href="">This is a Link</a>
        //         <br/>
        //         This is a form:
        //         <form>
        //             Enter your name:
        //             <br/>
        //             <input type={'text'}/>
        //             <input type={'submit'}/>
        //         </form>
        //         Here is an image:
        //         <br/>
        //         <img src="./public/logo192.png"/>
        //         <br/>
        //         This is a List: 
        //         <ul>
        //             <li>
        //                 Coffee
        //             </li>
        //             <li>
        //                 Tea
        //             </li>
        //             <li>
        //                 Milk
        //             </li>
        //         </ul>

        //     </div>
        // );

        // Part 2

        // const style_header = {
        //     color: "white",
        //     backgroundColor: "DodgerBlue",
        //     padding: "10px",
        //     fontFamily: "Arial"
        //   };

        // const style_header_keys = Object.keys(style_header);

        // return (
        //     <h1 style={{
        //         color: style_header['color'],
        //         backgroundColor: style_header['backgroundColor'],
        //         padding: style_header['padding'],
        //         fontFamily: style_header['fontFamily'],
        //     }}>
        //         Header
        //     </h1>
        // );

        // Part 3

        return (
            <p className="para">
                Hello this is a paragraph
            </p>
        );


    }
}

export default Exercise4;