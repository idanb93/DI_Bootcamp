import data from './data2.json'
import React from 'react'

class Example2 extends React.Component {

    functionA = () => {

    }

    render() {

        console.log(data);

        return (

            data['Skills'].map((skill, i) => (
                (
                    <>  
                        <br key={i}/>
                        <h2 key={i+1}>{skill.Area}</h2>
                        <br key={i+2}/>
                        <>
                        {skill.SkillSet.map((skillSet, i)=>(
                            <li key={i+5}>{skillSet.Name}</li>
                        ))}
                        </>
                    </>
                )

            )


            )
        )
    }

}

export default Example2;