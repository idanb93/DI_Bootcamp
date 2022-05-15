import data from './data.json'
import React from 'react'

class PostList extends React.Component {


    render() {
        return (
            data.map((item, i) => (
                <div key={i}>
                    <h1 key={i+1}>Item #{i+1} Title - {item.title}</h1>
                    <p key={i+2}>Item #{i+1} Content - {item.content}</p>
                </div>
            ))
        )
    }

}

export default PostList;