import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Principal from "./components/Principal/Principal";
import NewGame from "./components/NewGame/NewGame";
import Description from "./components/Description/Description";

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
