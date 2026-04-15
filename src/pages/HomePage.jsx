import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero image.jpg";

export default function HomePage() {
  return (
    <>
      <section className="heroSection">
        <img
          src={heroImage}
          alt="Beautifully decorated cakes"
          className="heroImage"
        />
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1 className="heroHeading">Munamii Cakery</h1>
          <p className="heroSubheading">Cupcakes &amp; wedding cakes!</p>
          <Link to="/products" className="ctaButton">
            View Products
          </Link>
        </div>
      </section>

      <section className="aboutSection">
        <h2 className="sectionTitle">About Us</h2>
        <p className="aboutText">
          At Munamii Cakery, we craft every cake and cupcake with love, using
          the finest ingredients to make your special moments even sweeter. We
          have been in the pastry market for 8 years.
        </p>
      </section>
    </>
  );
}
