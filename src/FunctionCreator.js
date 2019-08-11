import React from 'react';
import { simpleCall, simpleCallStrict } from './situation_creator';

const FunctionCreator = ({type, functionName}) => {
  switch(type) {
    case simpleCall:
      return simpleCallCreator(functionName)
    case simpleCallStrict:
      return simpleCallStrictCreator(functionName)
  }
}

const simpleCallCreator = (functionName) => (
  <div>
    function {functionName}() {`
      {return this;}
    `}
    <br />
    answer = window
  </div>
)

const simpleCallStrictCreator = (functionName) =>  (
  <div>
    function {functionName}() {`
      {use strict; return this;}
    `}
    <br />
    answer = undefined
  </div>
)

export default FunctionCreator;
