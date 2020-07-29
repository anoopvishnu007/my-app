import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
      {name :"anoop", age:34},
      {name: "anu",age:28}
    ]
  }
  changeName = ()=>{
    console.log("clicked");
    this.setState({persons:[
      {name :"anoopvn", age:34},
      {name: "anu",age:28}
    ]});
  }
  render(){
    return (
    <div className="App">
      <h1> Hi All</h1>
      <button onClick={this.changeName}>Change name</button>
      <Person name= {this.state.persons[0].name}> Hi this is me!</Person>
      <Person name= "anoop"> Hi this is me!</Person>
    </div>   
  );
}
}
export default App;
