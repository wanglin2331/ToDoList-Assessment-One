import React, {Component} from 'react';
import axios from 'axios';
import List from './List';
const localServer = 'http://localhost:6001/api/todolist/';


class ToDoList extends Component {

    deleteList(ID) {
        axios.delete(localServer+`${ID}`)
        .then(
            response => {this.props.refresh()}
        )
        this.deleteList=this.deleteList.bind(this);
    }


    
    render () {
        return (
            <div className='MainList'>
               
                {this.props.lists.map(listItem => {
                return (
                    <div className="listToShow">

                        <List ListText={listItem.text} ListID={listItem.ID}/>
                        <button onClick={()=>this.deleteList(listItem.ID)}>delete</button>
                    </div>
                    )})
                }
          </div>
        )
    }
}

export default ToDoList;