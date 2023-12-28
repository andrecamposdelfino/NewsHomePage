import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import BannerImagens from "./components/imagens/BannerImagens"
import BannerNew from "./components/new/BannerNew"

import './index.css'

function App() {

  return (
    <>
      <Header />
      <div className="wrapper">
        <Banner />
        <BannerNew /> 
      </div> 
      <BannerImagens/>
    </>
  )
}

export default App
