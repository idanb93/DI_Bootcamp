// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import React from 'react';
import UserFavoriteColors from './UserFavoriteColors'
import Exercise4 from './Exercise4'
import './Exercise4.css';


// Without JSX

// class App extends React.Component {
//   render() {
//     return;
//   }
// }

// With JSX

// function App() {

//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5+5;

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World!</h1>
//         {myelement}
//         React is {sum} times better with JSX
//       </header>
//     </div>
//   );
// }

// Render an Object

// function App() {

//   const user = {
//     first_name: 'Bob',
//     last_name: 'Dylan',
//     fav_animals : ['Horse','Turtle','Elephant','Monkey']
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <UserFavoriteColors fav_animals={user.fav_animals}/>
//       </header>
//     </div>
//   );
// }

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Exercise4/>
      </header>
    </div>
  );
}

export default App;
