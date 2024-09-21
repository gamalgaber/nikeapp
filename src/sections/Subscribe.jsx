import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="padding-x sm:py-32 py-16 w-full">
      <section
        className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        id="contact-us"
      >
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up Form
          <span className="text-coral-red"> Updates </span>& newsletter
        </h3>
        <div className="lg:max-2-[40%] w-full flex items-center justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray sm:rounded-full">
          <input type="text" placeholder="subscribe@nike.com" className="input"/>
          <div className="flex max-sm:justify-center items-center max-sm:w-full">
            <Button label="sign up" fullWidth />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
