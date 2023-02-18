import { Header } from "./components/Header/Header";
import { TextMain } from "./designs/Text.style";
import { Coffee } from "./designs/Coffee.style";
import { Loading } from "./components/loading/Loading";
import Light from '../src/assets/light.png';
import CoffeeImg from '../src/assets/imgCoffee.png';
import GreatCoder from '../src/assets/great-coder.png';
import { useEffect, useState } from "react";
import './Global.css'

export function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState({
    lightLeft: false,
    lightRight1: false,
    lightRight2: false,
    coffeeImg: false
  });
  
  useEffect(() => {
    if (Object.values(imagesLoaded).every((value) => value)) {
      setIsLoading(false)
    }
  }, [imagesLoaded] )
  
  const handleOnLoad = (imageKey) => {
    setImagesLoaded((prevState) => ({ ...prevState, [imageKey]: true }))
  }
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, [imagesLoaded]);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      { isLoading ? (
        <div className="loading">
          <Loading/>
        </div>
      ) : (
        <div id="app">
          <img src={Light} className="light-left" onLoad={() => handleOnLoad('lightLeft')}/>
          <img src={Light} className="light-right" onLoad={() => handleOnLoad('lightRight1')}/>
          <img src={Light} className="light-right" onLoad={() => handleOnLoad('lightRight2')}/>

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
      )}
    </>
  )
}
