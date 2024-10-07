import "../styles/HomePage.css"
import HeroComponent from "../components/home/HeroComponent"
import coffee from "../assets/coffee.mp4"

function HomePage() {
  return (

    <>
    <div className="HomePage">
      <div className="video_container">
      <video src={coffee} autoPlay loop muted width="800rem"></video>
      {<HeroComponent/>}

      </div>
</div>

    </>
  )
}

export default HomePage