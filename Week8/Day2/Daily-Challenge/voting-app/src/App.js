import React, { useState } from 'react'
import './App.css';


function App() {

  const [languages, setCount] = useState(
    [{name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}]
  )

  const incrementSpecificCounter = (event)=>{

    const languageClicked = event.target.name;

    setCount( (languages.map((language) => 
      language.name === languageClicked
      ? {...language, votes: language.votes+1}
      : {...language}
    )))
    
  }

  return (
    <div className="App">
      <h1 style={{fontSize: "44px"}}>Vote Your Language</h1>
      {languages.map((language)=>(
        <h1 key={language.name} className="languages">
        {language.votes} {language.name} <button className="click-here" name={language.name} onClick={incrementSpecificCounter}>Click here</button>
        </h1>
      ))}
    </div>
  );
}

export default App;
