import React from 'react';
import ReactDom from 'react-dom';
import Counter from './component/counter';
import counter from './reducer/counter';
import createStore from './store/createStore';

const rootEl = document.getElementById('root');
const store = createStore(counter);

const render = () => {
ReactDom.render(
  <Counter
    value={store.getState()}
    onIncrement={()=>{store.dispatch({type:'increment'})}}
    onDecrement={()=>{store.dispatch({type:'decrement'})}}
  />, document.getElementById('root'))
}

render();
store.subcribe(render);