import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import axios from 'axios';
const localServer = 'http://localhost:6001/api/todolist/';


class App extends Component {
  constructor() {
    super();
    this.state= {
      lists:[],
      newlistText:""
    }

    this.inputNewListText=this.inputNewListText.bind(this);
    this.createList=this.createList.bind(this);
    this.refresh=this.refresh.bind(this);

    };

  componentDidMount(){
      axios.get (localServer). then (
          response => {
              this.setState({lists: response.data});
          }
      )
  }


inputNewListText(val){
  this.setState({newlistText: val})
};


createList () {
  let newList ={
    "text": this.state.newlistText
  };
  axios.post(localServer, newList).then(response =>{
    axios.get (localServer). then (
      response => {
          this.setState({lists: response.data});
          this.ClearFields();
        })
    })
  };


refresh() {
  axios.get (localServer). then (
    response => {
        this.setState({lists: response.data});
    })
  };


ClearFields(){
    document.getElementById("ListField").value = ""}


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>TODO LIST</h1>
        </header>
        
        
        <body>
          <div className="inputfield">
            <input id="ListField" onChange={(e)=>this.inputNewListText(e.target.value)}/>
            <button onClick={()=>this.createList()}>Submit</button>
          </div>

          <ToDoList lists={this.state.lists} refresh={this.refresh}/>

        </body>


      </div>
    );
  }
}

export default App;
