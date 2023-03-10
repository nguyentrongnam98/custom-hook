import React from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";



function App(props) {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos')
  return <React.Fragment></React.Fragment>;
}

export default App;
