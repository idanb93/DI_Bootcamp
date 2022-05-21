import React from 'react';
import { connect } from "react-redux";
import {getRobots} from '../redux/actions'

class Robots extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    render(){

        return (
            <>
            <button onClick={this.props.handleGetRobots}>Get Robots</button>

            {this.props.robots.map((robot, i)=>(
    
                <div key={robot.id} style={{

                    height: '40vh',
                    width: '16vw',

                    border: '1px solid black',
                    borderRadius: '40px',
                    backgroundColor: 'cyan',

                    }}>
                <img src={`https://robohash.org/${robot.id}?15x15`}/>
                <h2>{robot.name}</h2>
                <h4>{robot.email}</h4>
                </div>
            ))}
            </>
        )
    }
}

const mapStateToProps = (state)=>{

    return {
        robots: state.robots,
    }
}

const mapDispatchToProps = (dispatch)=>{

    return {
        handleGetRobots: ()=>dispatch(getRobots()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(Robots);