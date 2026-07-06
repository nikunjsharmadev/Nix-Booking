import "./Hero.css";
import SearchBar from "../SearchBar/SearchBar";
function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>
          Book smarter
          <br />
          Travel better
        </h1>
        <p>Find flights and hotels worldwide</p>
        <SearchBar />
      </div>
    </section>
  );
}
export default Hero;
