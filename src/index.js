import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './components/FavoriteColor';
import CounterClass from './components/CounterClass';
import FavoriteColorClass from './components/FavoriteColorClass';
import MultipleComponent1 from './components/MultipleComponent1';
import MultipleComponent2 from './components/MultipleComponent2';
import ManageStateAsObject from './components/ManageStateAsObject';
import ManageStateWithObject from './components/ManageStateWithObject';
import UpdateObjectInClassComponent from './components/UpdateObjectInClassComponent';
// import Garage from './components/Garage';
// import Greeting from './components/Greetings';
// import Counter from './components/Counter';
// import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Garage />
    <Greeting/>
<Header/>
    <Counter/> */}
{/* <FavoriteColor/> */}
{/* <CounterClass/> */}
{/* <CounterClass/> */}
{/* <FavoriteColorClass/> */}
{/* <MultipleComponent1/> */}
{/* <MultipleComponent2/> */}
<ManageStateAsObject/>
<UpdateObjectInClassComponent/>
{/* <ManageStateWithObject/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
