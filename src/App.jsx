import { Header } from "./components/Header/Header";
import { TextMain } from "./designs/Texts.style";
import { Coffee } from "./designs/Coffee.style";
import Light from '../src/assets/light.png';
import CoffeeImg from '../src/assets/imgCoffee.png';
import GreatCoder from '../src/assets/great-coder.png';
import './Global.css'

export function App() {
  return (

    <div id="app">
      <img src={Light} className="light-bottom" />

      <Header />

      <main>
        <TextMain>
          Great Coffee
        </TextMain>
        <img className="textImg" src={GreatCoder} alt="Copos de café" />
      </main>

      <Coffee id="coffeeImg" >
        <img src={CoffeeImg} alt="Copo de café"/>
      </Coffee>
    </div>
  )
}
