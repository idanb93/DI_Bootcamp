import react from "react";
import FormComponent from "./FormComponent";

class EnteredInformation extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            nutsFree: false,
            lactoseFree: false,
            isVegan: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { value, name, type, checked } = e.target;
    
        type === "checkbox"
          ? this.setState({ [name]: checked })
          : this.setState({ [name]: value });
      }

    render() {

        return (
            <FormComponent handleChange={this.handleChange} {...this.state}/>
        )
    }
}

export default EnteredInformation;