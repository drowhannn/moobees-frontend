import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import BestArtistsRow from "./BestArtistsRow";
import MoviesRow from "./MoviesRow";
import Footer from "./Footer";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchAll} />
      <BestArtistsRow />
      <MoviesRow title="Popular Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Trending Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Action Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Thriller Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Romantic Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="SciFi Movies" fetchUrl={requests.fetchAll} />
      <MoviesRow title="Documentries" fetchUrl={requests.fetchAll} />
      <Footer />
    </div>
  );
}

export default App;
