import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import Clock from "./Clock"
import Item from "./Item"

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
          value1 :'',
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    //if (event.target.name == "value1") {
      this.setState({value1: event.target.value})
    //} else {
    //    this.setState({value2: event.target.value})
    //}
  }

  render() {

      const data = [
          {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
          {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
          {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
          {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
          {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
          {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ];

      let SportingGoods = data.map(item => {
          if (item.category === "Sporting Goods") {
              return <Item item={item} search={this.state.value1} />
          }
          return null
      })

      let Electronics = data.map(item => {
          if (item.category === "Electronics") {
              return <Item item={item} search={this.state.value1} />
          }
          return null
      })

    return (
      <div className="App">
        <Clock />
          <div>hello {this.state.value1}</div>
            <input name="value1" value={this.state.value1} onChange={this.handleChange}/>

          <div><span>name</span>####<span>price</span></div>
          <h3>Sporting Goods</h3>
          <ul>{SportingGoods}
          </ul>
          <h3>Electronics</h3>
          <ul>{Electronics}</ul>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
