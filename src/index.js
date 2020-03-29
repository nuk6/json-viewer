import React from 'react';
import ReactDOM from 'react-dom';
import ComplexObject from './ComplexObject'
import {Obj} from "./data";

//import LogItem from './components/LogItem';
//import TestComp from './components/TestComp'
//import {LogData} from '../src/data/mockData';
//require('../src/styles/Home.css');
//let id = 2;
//ReactDOM.render(<LogItem key={id} id={id} data={LogData[id]}></LogItem>, document.getElementById('root'));
ReactDOM.render(<ComplexObject level={1} depth={1} fk={1} objVal={Obj}/>, document.getElementById('root'));
