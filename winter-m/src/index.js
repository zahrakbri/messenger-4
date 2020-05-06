import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './components/onboard/login.js'
import Signup from './components/onboard/signup'
import Messenger from './components/messenger/messenger'
import * as serviceWorker from './serviceWorker';

const name = 'Reyhane'
const element = <h1>salam {name}</h1>

function Header (props) {
  console.log('propsss:', props)
  return(
    <div>
      <h1>my name is {props.name + ' ' + props.family}</h1>
      <p>this is a component</p>
    </div>
  )
}


class Footer extends Component {
  render () {
    return (
      <div>
        <h1 className='red'>this is a class component</h1>
        <p>this is a class component</p>
      </div>
    )
  }
}

class ParentComponent extends React.Component {
  render () {
    return (
      <div>
        <Header name='zahra' family='kabiri' />
        <Header name='farnoosh' family='tavasoli' />
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<Messenger /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
