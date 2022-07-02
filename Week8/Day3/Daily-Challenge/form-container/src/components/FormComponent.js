import react from "react";

function FormComponent(props) {

    return (
        <div id='form-to-fill'>
            <form action="http://localhost:3000" method="GET">
                <input type={'text'} placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange} />
                <br />
                <input type={'text'} placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.handleChange} />
                <br />
                <input type={'text'} placeholder="Age" name="age" value={props.age} onChange={props.handleChange} />
                <br />
                <input type={'radio'} name="gender" value="male" checked={props.gender === "male"} onChange={props.handleChange} /> Male
                <br />
                <input type={'radio'} name="gender" value="female" checked={props.gender === "female"} onChange={props.handleChange} /> Female
                <br />
                <select name="destination" onChange={props.handleChange} value={props.destination}>
                    <option defaultValue={true}> -- Please Choose a Destination --</option>
                    <option value={'Thailand'}>Thailand</option>
                    <option value={'Japan'}>Japan</option>
                    <option value={'Brazil'}>Brazil</option>
                </select>
                <br />
                <input type={'checkbox'} name="nutsFree" onChange={props.handleChange} checked={props.nutsFree} /> Nuts free
                <br />
                <input type={'checkbox'} name="lactoseFree" onChange={props.handleChange} checked={props.lactoseFree} /> Lactose free
                <br />
                <input type={'checkbox'} name="isVegan" onChange={props.handleChange} checked={props.isVegan} /> Vegan
                <br />
                <button type="submit">Submit</button>
            </form>

            <div id='entered-information'>
                <h2>Entered information:</h2>
                <p>
                    Your name: {props.firstName} {props.lastName}
                </p>
                <p>Your age: {props.age}</p>
                <p>Your gender: {props.gender}</p>
                <p>Your destination: {props.destination}</p>
                <p>Your dietary restrictions: </p>
                <div className="restrictions">
                    <span>**Nuts free : {props.nutsFree ? " Yes" : "No"}</span> <br />
                    <span>**Lactose free : {props.lactoseFree ? " Yes" : "No"}</span>{" "}
                    <br />
                    <span>**Vegan meal : {props.isVegan ? " Yes" : "No"}</span>
                </div>
            </div>

        </div>

    )
}

export default FormComponent;