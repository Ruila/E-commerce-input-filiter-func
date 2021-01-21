import '../css/style.css';
import DropdownUnit from './dropdownUnit'
import React, { Component } from 'react';

class input extends Component  {
  constructor() {
    super();
    this.state = {
      nameslist: {
        "none" : "none"
      },
      inputValue: "",
      outputlist: [],
      dropdownHide: true,
    }
    this.handleChange=this.handleChange.bind(this);
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
    this.search=this.search.bind(this);
    this.updateDropdown=this.updateDropdown.bind(this);
  }
  componentDidMount(){
    var nameslist = Object.values(this.props.alldata).map(v=>v.item.name)
   
    this.setState({nameslist: nameslist});
  }
  handleChange(event){
    // console.log(event.target.value)
    this.setState({inputValue: event.target.value});
    this.updateDropdown(event.target.value);
  }
  onFocus(event){
    this.setState({dropdownHide: false})
  }
  onBlur(event){
    this.setState({dropdownHide: true})
  }
  updateDropdown(input){
    var filter = this.state.nameslist.filter(v=>{
      if (v.indexOf(input)>0){
        return v
      }
    })
    this.setState({outputlist: filter})
  }
  search(){
   
  }
  render(){
    const outputlist = this.state.outputlist.map((v, idx)=>{
      return <DropdownUnit key={idx} text = {v}/>
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
