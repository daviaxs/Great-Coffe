import { Header } from "./components/Header/Header";
import { TextMain } from "./designs/Text.style";
import { Coffee } from "./designs/Coffee.style";
import Light from '../src/assets/light.png';
import CoffeeImg from '../src/assets/imgCoffee.png';
import GreatCoder from '../src/assets/great-coder.png';
import './Global.css'

export function App() {
  return (

    <div id="app">
      <img src={Light} className="light-left" onLoad={() => handleOnLoad('lightLeft')} />
      <img src={Light} className="light-right" onLoad={() => handleOnLoad('lightRight1')} />
      <img src={Light} className="light-right" onLoad={() => handleOnLoad('lightRight2')} />

      <Header />

      <TextMain className="textMain">
        Great Coffee
      </TextMain>

      <TextMain className="textMainSecundary">
        <img src={GreatCoder} alt="" />
      </TextMain>

      <Coffee id="coffeeImg" >
        <img src={CoffeeImg} alt="" onLoad={() => handleOnLoad('coffeeImg')} />
      </Coffee>
    </div>
  )
}
