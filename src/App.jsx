import { Header } from "./components/Header/Header";
import Light from '../src/assets/light.png';
import CoffeeImg from '../src/assets/imgCoffee.png';
import GreatCoder from '../src/assets/great-coder.png';
import { TextMain } from "./designs/Text.style";
import { Coffee } from "./designs/Coffee.style";
import './Global.css'

export function App() {

  return (
    <div id="app">
      <img src={Light} id="light-left" />
      <img src={Light} id="light-right" />
      <img src={Light} id="light-right" />

      <Header />

      <TextMain className="textMain">
        Great Coffee
      </TextMain>
      <TextMain className="textMainSecundary">
       <img src={GreatCoder} alt="" />
      </TextMain>
      <Coffee id="coffeeImg">
        <img src={CoffeeImg} alt="" />
      </Coffee>

    </div>
  )
}
