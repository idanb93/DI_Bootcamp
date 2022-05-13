
import React from "react";
// import Component from "react";

class UserFavoriteColors extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ul>

            {this.props.fav_animals.map((animal) => (
                <li>{animal}</li>
            ))}
            
            </ul>
        );
    }
}

export default UserFavoriteColors;