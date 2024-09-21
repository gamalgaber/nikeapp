import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
