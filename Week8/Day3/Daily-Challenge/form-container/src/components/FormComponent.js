import react from "react";

class FormComponent extends react.Component {

    constructor() {
        super();
        this.state = {
            inputs: {},
        }
    }

    handleChange = (event)=>{
        
    }

    render() {
        return (
            <div>
                <form action="http://localhost:3000" method="GET">
                    <input type={'text'} placeholder="First Name" name="firstName"/>
                    <br/>
                    <input type={'text'} placeholder="Last Name" name="lastName"/>
                    <br/>
                    <input type={'text'} placeholder="Age" name="age"/>
                    <br/>
                   <input type={'radio'} value="Male" name="gender"/> Male
                    <br/>
                    <input type={'radio'} value="Female" name="gender"/> Female
                    <br/>
                    <select name="destination">
                        <option defaultValue={true}> -- Please Choose a Destination --</option>
                        <option value={'Thailand'}>Thailand</option>
                        <option value={'Japan'}>Japan</option>
                        <option value={'Brazil'}>Brazil</option>
                    </select>
                    <br/>
                    <input type={'checkbox'} name="NutsFree"/> Nuts free
                    <br/>
                    <input type={'checkbox'} name="lactoseFree"/> Lactose free
                    <br/>
                    <input type={'checkbox'} name="Vegan"/> Vegan
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        )
    }
}

export default FormComponent;