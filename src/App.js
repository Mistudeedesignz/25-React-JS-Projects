import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImagesSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* "Accordian Component" */}
      {/* <Accordian /> */}

      {/* "Random color component" */}
      {/* <RandomColor /> */}

      {/* "Star Rating component"  */}
      {/* <StarRating noOfStars={10} /> */}

      {/* "Image Slider component"  */}
      <ImagesSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
