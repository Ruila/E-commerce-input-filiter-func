import '../css/style.css';
import DropdownUnit from './dropdownUnit'
import React, { Component } from 'react';

class input extends Component  {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      outputlist: [],
      arrayType: [],
      dropdownHide: true,
    }
    this.handleChange=this.handleChange.bind(this);
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
    this.search=this.search.bind(this);
    this.updateDropdown=this.updateDropdown.bind(this);
  }
  componentDidMount(){
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
    this.setState({arrayType: arrayType});
  }
  // when you are typing in input
  handleChange(event){
    this.setState({inputValue: event.target.value});
    this.updateDropdown(event.target.value);
  }
  // when input is foucsed
  onFocus(event){
    this.setState({dropdownHide: false})
  }
  // when input isn't focused
  onBlur(event){
    this.setState({dropdownHide: true})
  }
  // update dropdown block
  updateDropdown(input){
    var filter = this.state.arrayType.filter(v=>{
      if (v.name.indexOf(input)>0){
        return v
      }
    })
    this.setState({outputlist: filter})
  }
  // click search button
  search(){
   this.props.updateInput(this.state.inputValue)
  }
  render(){
    const outputlist = this.state.outputlist.map((v, idx)=>{
      return <DropdownUnit key={v.id} text = {v.name}/>
    })
    return (
      <div className="input-layout">
        <div className="input-component">
          <input type="text" value={this.state.inputValue} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleChange}></input>
          <button onClick={this.search}>
            查詢
          </button>
          <div className={`dropdown-block ${this.state.dropdownHide?'hide':''}`}>
           {outputlist}
          </div>
        </div>
      </div>
     
    );
  } 
}

export default input;
