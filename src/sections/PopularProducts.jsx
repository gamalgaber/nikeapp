import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section className="padding">
      <section id="products" className="max-container max-sm:mt-12 md:mx-5 verySmall:mx-3">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-le mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PopularProducts;
