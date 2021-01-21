import '../css/style.css';
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
      <div className="shop-layout">
        <div className="img">
          img
        </div>
        <div className="text">
          text
        </div>
      </div>
    );
  }
}

export default block;
