import { Header } from "./components/Header/Header";
import Light from '../src/assets/light.svg'
import './Global.css'

export function App() {

  return (
    <div id="app">
      <img src={Light} id="light-left" />
      <img src={Light} id="light-right" />
      <img src={Light} id="light-right" />

      <Header/>

    </div>
  )
}
