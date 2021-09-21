import LandingPage from "./components/LandingPage/LandingPage";
import Principal from "./components/Principal/Principal";
import { Route, Switch } from "react-router-dom";
import Description from "./components/Description/Description";
import NewGame from "./components/NewGame/NewGame";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/videogames" component={Principal} />
        <Route exact path="/newgame" component={NewGame} />
        <Route exact path="/description/:id" component={Description} />
      </Switch>
    </>
  );
}

export default App;
