import '../css/style.css';
import Input from './input.js';
import Content from './content';
import React, { Component } from 'react';
import Json from '../json/biggo_sitetype.json'

class block extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      
    }
    
  } 
    changeArea(area){
      this.setState({currentArea: area})
  }
  render(){
    // console.log(Json)
    return(
      <div className="block-layout">
        <Input alldata = {Json}/>
        <Content />
      </div>
    );
  }
}

export default block;
