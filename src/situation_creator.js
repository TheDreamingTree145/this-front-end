import React from 'react';
import FunctionCreator from './FunctionCreator';
import Markdown from 'react-markdown';

const codeBlock =  `
  \`\`\`js
    function helloWorld() {

    }
  \`\`\`
`

export const globalCall = "global call"
export const simpleCall = "simple call"
export const simpleCallStrict = "simple call strict"

export const sample = arr => Math.floor(Math.random() * arr.length);
const types = [globalCall, simpleCall, simpleCallStrict]
const type = types[sample(types)];
const fakeNames = ["hello", "good", "bye", "forever"]
const functionName = fakeNames[sample(fakeNames)];

const data = "# Hello World"

export const globalContext = () => {

  return <FunctionCreator functionName={functionName} type={type}/>
}
