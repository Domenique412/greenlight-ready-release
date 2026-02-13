import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader" aria-label="Loading">
      <div className="circle-preloader" />
      <p className="preloader__text">Loading...</p>
    </section>
  );
}

export default Preloader;
