import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
   return function requestUserRepos(username) {
      fetch(`https://api.github.com/users/facebook`);
      <h3 class="text-center mt-5">GitHub API</h3>;
      <Form className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>e.g. facebook</Form.Label>
         <Button as="input" type="submit" value="Submit" />{" "}
      </Form>;
   };
}

export default App;
