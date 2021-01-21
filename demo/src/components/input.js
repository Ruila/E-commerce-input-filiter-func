import '../css/style.css';
import React, { Component } from 'react';

class input extends Component  {
  constructor() {
    super();
    this.state = {
      aalert: false,
      inputValue: "臺南市",
    }
   
  }
  handleChange(event){
    
  }
  search(){
   
  }
  render(){
    return (
      <div className="input-layout">
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.search}>
          查詢
        </button>
      </div>
     
    );
  } 
}

export default input;
