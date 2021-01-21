import '../css/style.css';
import Shop from './shop.js'
import React, { Component } from 'react';


class content extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      outputlist: []
    }
    
  } 
  componentDidMount(){
    // initial outputlist
    let arrayType = []
    for(let i in this.props.alldata){
      let obj = {
        'imgurl': '',
        'id': '',
        'name': ''
      }
      obj['imgurl'] = this.props.alldata[i].detail.image;
      obj['id'] = i;
      obj['name'] = this.props.alldata[i].item.name;
      arrayType.push(obj)
    }
    this.setState({outputlist: arrayType});
  }
  render(){
    const outputlist = this.state.outputlist.map(v=>{
      return <Shop imgurl={v.imgurl} title={v.name} />
    })
    return(
      <div className="content-layout">
        {outputlist}
      </div>
    );
  }
}

export default content;
