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
      <Banner fetchUrl={requests.fetchLatest} />
      {/* <BestArtistsRow /> */}
      <MoviesRow title="Latest Movies" fetchUrl={requests.fetchLatest} />
      <MoviesRow title="Action Movies" fetchUrl={requests.fetchAction} />
      <MoviesRow title="Thriller Movies" fetchUrl={requests.fetchThriller} />
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <MoviesRow title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <MoviesRow title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Footer />
    </div>
  );
}

export default App;
