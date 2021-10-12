import illustrationHero from "./assets/illustration-hero.svg";
import iconMusic from "./assets/icon-music.svg";
import Button from "./button";
const App = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-10/12 max-w-md m-auto shadow-2xl">
      <img src={illustrationHero} alt="" />
      <div className="p-4">
        <h2 className="text-2xl text-center font-black my-6 text-gray-800">
          Order Summary
        </h2>
        <p className="text-center  text-gray-400">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex gap-4 items-center my-4 bg-gray-100 rounded-lg p-4">
          <img src={iconMusic} alt="" />
          <div>
            <h5 className="font-black">Annual Plan</h5>
            <span className="text-gray-500">$59.99/year</span>
          </div>
          <a className="font-black ml-auto text-blue-600 underline" href="/">
            Change
          </a>
        </div>

        <Button
          text="Proceed to Payment"
          className="bg-blue-800 text-white shadow-lg hover:bg-indigo-400 transition duration-500"
        ></Button>
        <Button text="Cancel Order" className="text-gray-600"></Button>
      </div>
    </div>
  );
};

export default App;
