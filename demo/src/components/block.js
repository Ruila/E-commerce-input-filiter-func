import '../css/style.css';
import Input from './input.js'
import React, { Component } from 'react';


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
    return(
      <div className="block-layout">
        <Input />
      </div>
    );
  }
}

export default block;
