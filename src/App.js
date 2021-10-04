import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
// import BestArtistsRow from "./BestArtistsRow";
import MoviesRow from "./MoviesRow";
import Footer from "./Footer";
import requests from "./requests";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from "./Movie";
import Movies from "./Movies";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Banner fetchUrl={requests.fetchLatest} />
            {/* <BestArtistsRow /> */}
            <MoviesRow title="Latest Movies" fetchUrl={requests.fetchLatest} />
            <MoviesRow title="Action Movies" fetchUrl={requests.fetchAction} />
            <MoviesRow
              title="Thriller Movies"
              fetchUrl={requests.fetchThriller}
            />
            <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedy} />
            <MoviesRow
              title="Romance Movies"
              fetchUrl={requests.fetchRomance}
            />
            <MoviesRow title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route exact path="/movies/:genre">
            <Movies />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
