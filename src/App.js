import React from "react"
import "./App.css"

export default class App extends React.Component{
  state = {
    n1: null,
    n2: null,
    result: null, 
  }
  add = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    })
  }
  sub = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    })
  }
  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    })
  }
  div = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    })
  }
  clear = () => {
    this.setState({
      n1: "",
      n2: "", 
      result: null
    })
  }
  handleChangeN1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    })
  }
  handleChangeN2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    })
  }
  render(){
    let {result} = this.state
    return(
      <div className="container-calc">
        <h1>Calculadora</h1>
        <div className="h2-container">
          <h2>{result}</h2>
        </div>
        <div className="inputs">
          <input  placeholder = "Número 1" value = {this.state.n1} onChange={this.handleChangeN1}/>
          <input placeholder = "Número 2" value = {this.state.n2} onChange={this.handleChangeN2}/>
        </div>
        <div className="button-container">
          <button onClick={this.add}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.div}>/</button>
          <button onClick={this.clear}>C</button>
        </div>
      </div>
    )
  }
}