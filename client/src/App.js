import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/wrapper";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard/index";
import Footer from "./components/Footer/footer";
import SendCash from './pages/SendCash.page';
import RequestCash from './pages/RequestCash';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/sendmoney" exact component={SendCash} />
          <Route path="/requestmoney" exact component={RequestCash}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;