import "./App.css"
import About from "./pages/about/about"
import Home from "./pages/home/home"
import Menu from "./pages/menu/menu"
import Chef from "./pages/chef's/chef"
import Hearder from "./components/header/hearder"
import Video from "./pages/video/video"
import OurLaurels from "./pages/OurLaurels/OurLaurels"
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery"
import FindUs from "./pages/findUs/findUs"
import Footer from "./pages/footer/footer"

function App() {

  return (
    <>
      <Hearder />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="menu"><Menu /></section>
      <section id="chef"><Chef /></section>
      <section><Video /></section>
      <section><OurLaurels /> </section>
      <section><PhotoGallery /> </section>
      <section id="find_us"><FindUs /></section>
      <section><Footer /></section>


    </>
  )
}

export default App
