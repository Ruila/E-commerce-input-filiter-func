import '../css/style.css';
import Input from './input.js';
import Content from './content';
import React, { Component } from 'react';
import Json from '../json/biggo_sitetype.json'

class block extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      currentInput: "",
      currentList: {},
    }
    this.updateInput=this.updateInput.bind(this);
  } 
  updateInput(input){
      this.setState({currentInput: input})
  }
  render(){
    console.log(Json)
    return(
      <div className="block-layout">
        {this.state.currentInput}
        <Input alldata = {Json} updateInput = {this.updateInput}/>
        <Content alldata = {Json} currentInput = {this.state.currentInput}/>
      </div>
    );
  }
}

export default block;
