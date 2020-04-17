import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './HeaderComponent';
import Details from './DetailsComponent';
import './style.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      students:[
        {studentId:"101", studentName:"Ram", studentMarks:"89"},
        {studentId:"102", studentName:"Ravi", studentMarks:"55"},
        {studentId:"103", studentName:"John", studentMarks:"99"},
        {studentId:"104", studentName:"Steve", studentMarks:"60"},
        {studentId:"105", studentName:"Hari", studentMarks:"77"}
      ]
    };
  }

  render() {
    return (
      <div align="center">
        <Header />
        <Details students={this.state.students} />
      </div>
    );
  }
}

render(<Main />, document.getElementById('root'));
