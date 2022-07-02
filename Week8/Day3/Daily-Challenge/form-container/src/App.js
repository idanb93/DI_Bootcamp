import './App.css';
import FormComponent from './components/FormComponent';
import EnteredInformation from './components/EnteredInformation';

function App() {

  // let userDetails = {
  //   first_name: '',
  //   last_name: '',
  //   age: 0,
  //   gender: '',
  //   destination: '',
  //   constraints: '',

  // }

  // const setUserDetails = (e) => {
  //   console.log('App Component before assignment', userDetails);

    // switch (e.target.name) {
    //   case 'firstName':
    //     userDetails.first_name = e.target.value;
    //     break;
    //   case 'lastName':
    //     userDetails.last_name = e.target.value;
    //     break;
    //   case 'age':
    //     userDetails.age = e.target.value;
    //     break;
    //   case 'gender':
    //     userDetails.gender = e.target.value;
    //     break;
    //   case 'destination':
    //     userDetails.destination = e.target.value;
    //     break;
    //   case 'constraints':
    //     userDetails.constraints = e.target.value;
    //     break;

    //   default:
    //     console.log('error');
    // }
  //   console.log('App Component after assignment', userDetails);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div id='title'>
          <EnteredInformation />
        </div>
      </header>
    </div>
  );
}

export default App;
