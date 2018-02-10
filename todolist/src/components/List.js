import React, {Component} from 'react';
import axios from 'axios';
const localServer = 'http://localhost:6001/api/todolist/';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
          editting: false,
          ListText: this.props.ListText,
          ID: this.props.ListID
        }
    
        // this.inputNewListText=this.inputNewListText.bind(this);
        // this.setEditting=this.setEditting.bind(this);
        // this.updateList=this.updateList.bind(this);
    }

    // componentWillReceiveProps(props) {
    //     this.setState({ 
    //                     ListText: props.ListText,
    //                     ID: props.ListID
    //                 });
    //   };


    inputNewListText (val){
        this.setState({ListText: val});
    //    console.log(this.state.ListText);
    //    console.log(this.state.ID)
    }


    setEditting() {
        this.setState({editting: !this.state.editting});
        // console.log(this.state.editting)
    }


    updateList() {
        let newText = {"text": this.state.ListText}
        axios.put(localServer+this.state.ID, newText)
        // this.props.refresh();
        this.setEditting();
    }


    render () {
        return (
            <div>
                

                    <div className="List">
                        {
                            this.state.editting
                            ?
                                <div>
                                <input value={this.state.ListText} onChange={(e)=>this.inputNewListText(e.target.value) }/>
                                <button onClick={ ()=>this.updateList() }>Submit Change</button>
                                </div>
                            :
                                <span>{this.state.ListText}</span>
                        }
                        <button onClick={()=>this.setEditting()}>edit</button>
                    </div>
            </div>
    )
    }
}


export default List;