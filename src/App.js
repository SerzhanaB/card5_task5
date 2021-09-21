import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
super(props)
this.state={ reverted: false}
  }
  
componentWillMount() {
  console.log('монтирование');

}

componentDidMount() {
  console.log('did mount');

}
componentWillReceiveProps(nextProps) {

  console.log('componentWillReceiveProps - not recommended');
}  

UNSAFE_componentWillUpdate (){
  console.log('componentWillUpdate - not recommended');
}

componentWillUnmount() {

  console.log('WillUnmount');
}
  revert =()=> this.setState({reverted:!this.state.reverted})
  render(){
    return (
      <div className="App">
   <h3>Методы жизненного цикла</h3>
   <button onClick ={this.revert}> Revert</button>
   {this.state.reverted===true ?  <p>Если положительное значение</p>: <p>если отрицательное значение</p> }
      </div>
    );
  }
 
}

export default App;
