import data from './data2.json'
import React from 'react'

class Example1 extends React.Component {


    render() {

        return (
            data['SocialMedias'].map((url, i)=>(
                <li key={i}>{url}</li>
            ))
        )
    }

}

export default Example1;