import '../css/style.css';
import Shop from './shop.js'
import React, { Component } from 'react';


class content extends Component {
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
      <div className="content-layout">
        <Shop />
        <Shop />
      </div>
    );
  }
}

export default content;
