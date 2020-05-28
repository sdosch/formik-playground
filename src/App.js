import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

import MultipleDropdown from "./pages/mulitple-dropdown";
import FormikValidation from "./pages/formik-validation";
import Layout from "./layout/index";

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav variant="tabs" style={{ margin: "40px 0" }}>
      <Nav.Item>
        <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/formik-validation"
          active={location.pathname === "/formik-validation"}
        >
          Formik Validation
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/multi-select"
          active={location.pathname === "/multi-select"}
        >
          Multi Select
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

function App() {
  return (
    <Router
      basename={
        window.location.hostname === "localhost" ? "" : "/component-incubator"
      }
    >
      <div>
        <Navigation />
        <Switch>
          <Route path="/formik-validation">
            <PageFormikValidation />
          </Route>
          <Route path="/multi-select">
            <PageMultipleDropdown />
          </Route>
          <Route path="/">
            <PageHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PageHome() {
  return (
    <Layout.Default
      headline="Hello"
      description="Component Collection"
      content={"..."}
    />
  );
}

function PageMultipleDropdown() {
  return (
    <Layout.Default
      headline="Minimal React Bootstrap Multiselect"
      description="A dropdown component that offers multiple selection of values."
      content={
        <MultipleDropdown
          options={["Red", "Blue", "Orange", "Pink", "Gold", "Banana"]}
          initialValue={["Red", "Blue"]}
        />
      }
    />
  );
}

function PageFormikValidation() {
  return (
    <Layout.Default
      headline="Simple React Bootstrap Form Validation with Formik"
      description="Uses Yup for form validation. Uses formik-persist to store form input values in local storage."
      content={<FormikValidation />}
    />
  );
}

export default App;
