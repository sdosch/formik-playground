import React from "react";
// import Basic from "./pages/formik-basic";
import "bootstrap/dist/css/bootstrap.min.css";
import MultipleDropdown from "./pages/mulitple-dropdown";

function App() {
  return (
    <MultipleDropdown
      options={["Red", "Blue", "Orange", "Pink", "Gold", "Banana"]}
      initialValue={["Red", "Blue"]}
    />
  );
}

export default App;
