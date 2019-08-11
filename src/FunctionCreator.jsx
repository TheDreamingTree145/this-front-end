import React from 'react';
import { globalCall, sample, simpleCall, simpleCallStrict } from './situation_creator';

const FunctionCreator = ({type, functionName}) => {
  switch(type) {
    case globalCall:
      return globalCallCreator()
    case simpleCall:
      return simpleCallCreator(functionName)
    case simpleCallStrict:
      return simpleCallStrictCreator(functionName)
  }
}

const globalCallCreator = () => (
  <div>
    console.log(this)
    <br />
    answer = window
  </div>
)

const simpleCallCreator = (functionName) => {
  const types = [1, 2]
  const type = types[sample(types)]
  if (type === 1) {
    return (
      <div>
        function {functionName}() {`
          {return this;}
        `}
        <br />
        answer = window
        <br />

        why = When not in strict-mode and <code>this</code> is not set by the function call,
        <code>this</code> will refer to the global object.
      </div>
    )
  } else {
    return (
      <div>
        const x = "Hello World";
        function {functionName}() {`
          {console.log(this.x);}
        `}

        {functionName}();

        <br />

        answer = "Hello World"
        <br />
        why =


      </div>
    )
  }
}

const simpleCallStrictCreator = (functionName) =>  (
  <div>
    function {functionName}() {`
      {use strict; return this;}
    `}
    <br />
    answer = undefined
    <br />
    why = When in strict-mode, <code>this</code> will not default to the global object.
    Therefore, since the value of <code>this</code> was not set at execution time the
    value of <code>this</code> will remain undefined
  </div>
)

export default FunctionCreator;
