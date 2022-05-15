import data from './data2.json'
import React from 'react'

class Example3 extends React.Component {

    render() {

        return (
            data['Experiences'].map((experience, i) => (
                (
                    <div style={{border: '1px solid whitesmoke'}} key={i}>
                        <img src={experience.logo} key={i+1}/>
                        <br key={i+2}/>
                        <a key={i+3} href={experience.url}>{experience.companyName}</a>
                        <>
                            {experience.roles.map((role, i) => (
                                <>
                                <h3 key={i+7}>{role.title}</h3>
                                <h4 key={i+8}>{role.startDate} - {role.endDate} - {role.location}</h4>
                                <h4 key={i+9}>{role.description}</h4>
                                </>
                            ))}
                        </>
                    </div>
                )

            )
            )
        )
    }

}

export default Example3;