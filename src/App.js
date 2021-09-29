import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import BestArtistsRow from "./BestArtistsRow";
import MoviesRow from "./MoviesRow";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <BestArtistsRow />
      <MoviesRow title="Popular Movies" />
      <MoviesRow title="Trending Movies" />
      <MoviesRow title="Action Movies" />
      <MoviesRow title="Thriller Movies" />
      <MoviesRow title="Comedy Movies" />
      <MoviesRow title="Romantic Movies" />
      <MoviesRow title="SciFi Movies" />
      <MoviesRow title="Documentries" />
      <Footer />
    </div>
  );
}

export default App;
