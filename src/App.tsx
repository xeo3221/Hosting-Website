import { Header } from "./components/Header";
import { Companies } from "./components/Companies";
import { Why } from "./components/Why";
import { Reviews } from "./components/Reviews";
import { Roadmap } from "./components/Roadmap";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";

const App = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Companies />
      <Why />
      <Roadmap />
      <Reviews />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
