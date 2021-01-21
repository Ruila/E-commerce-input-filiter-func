import '../css/style.css';
import React, { Component } from 'react';


class dropdownUnit extends Component {
  constructor(props) {
    super(props);
    this.state={ 
     
    }
    
  }
  componentDidMount(){
  }

  render(){
    return(
      <div className="drowpUnit-layout">
          <h5>{this.props.text}</h5>
      </div>
    );
  }
}

export default dropdownUnit;
