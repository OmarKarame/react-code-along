import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import ArtistTile from "./components/artist_tile/ArtistTile"
import './data/artist.js'
import artist from "./data/artist";

const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <div className="app">
      <Nav />
      <header className="greeting">
        <img src={greetingImg} className="greeting__img" alt={greetingTime} />
        <h1 className="greeting__heading">
          Good {greetingTime} <br /> {user.firstName} {user.lastName}
        </h1>
      </header>
      <section className="aritst-tile">
        <ArtistTile name = {artist.strArtist} image = {artist.strArtistThumb}/>
      </section>
    </div>
  );
};

export default App;
