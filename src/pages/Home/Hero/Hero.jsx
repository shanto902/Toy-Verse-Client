

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/RpzhQCj/hero-img.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Where Imagination Comes to Life!</h1>
      <p className="mb-5">Step into ToyVerse, the ultimate toy marketplace. Discover a world of endless play possibilities with our diverse selection of toys, games, and collectibles. Explore, connect, and let your imagination soar. Join us today and unlock the magic of play!</p>
      <button className="btn btn-outline">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;