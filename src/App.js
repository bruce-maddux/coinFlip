import './App.css';
import React from 'react'
import { render } from 'react-dom';
import tailCoin from './tailCoin.jpg'
import headCoin from './headcoin.jpg'
import downCoin from './downcoin.jfif'
import sideCoin from './sidecoin.jfif'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {random: 0, val : "D"};
    this.handleClick = this.handleClick.bind(this);
    this.urlLink = "";
  }
  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({val : rand > 40 && rand < 60 ? "M" : rand > 50 ? "H" : "T"});
    this.setState({ random: rand });
  }
  render() {
    {this.urlLink = this.state.val === "D" ? downCoin : this.state.val === "M" ? sideCoin : this.state.val === "H" ? headCoin : tailCoin}
    return (
      <div className="App">
        <h1 className = "App-title">
          Coin Flip
        </h1>
        <img src = {this.urlLink} className = "App-img"></img>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        {/*<div>The number is: {this.state.random}</div>*/}
        <div>Heads or Tails : {this.state.val}</div>

      </div>
  );
}
}
export default App;
render(<App />, document.getElementById('root'));

