import './App.css';
import {Home, LandingPage, Detail, Form, Validate} from "./components"
import {Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/videogame" component={Form} />
      <Route exact path="/videogame:id" component={Detail} />

      <Route path="*" component={Validate} />

      
    </div>
  );
}

export default App;
