import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Item 1", "Item 2"],
      txtContent: "",
    };
  }

  txtChange = (e) => {
    this.setState({ txtContent: e.target.value });
  };

  addItem = (e) => {
    let currentText = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentText);
    this.setState({ items: currentItems });
  };
  removeItem = (i) => {  
    if(!window.confirm("Are you sure you want to delete this?"))  {
      return;
    }
    let currentItems = this.state.items;
    currentItems.splice(i,1);
    this.setState({ items: currentItems });
  };

  render() {
    return (
      <div className="">
        <input type="text" onChange={this.txtChange} />
        &nbsp;
        <button onClick={this.addItem}>Add</button>
        <ul>
          {this.state.items.map((i, k) => (
            <li>
              {i} &nbsp;
              <button onClick={()=>{this.removeItem(k)}}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
