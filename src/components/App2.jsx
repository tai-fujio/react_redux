import React , {Component} from 'react';
import Greeting from './greeting';

class App2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Ana',
    };
  };

  handleMouseOver(){
    this.setState({name:'Mike'})
  };

  handleMouseOut(){
    this.setState({name:'Pan'})
  };

  handleNameChange(name){
    // console.log(e.target.value);
    this.setState({name: name});
  };



  render(){
    return(
      <div onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()}
      >
      <input 
        type="text" 
        value={this.state.name}
        onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={() => this.handleNameChange('Bob')}>Set Name Bob</button>
        <Greeting name={this.state.name} />
        <Greeting name="Bob" />
        <Greeting name="Sara" />
      </div>
    );
  }
};

export default App2;
