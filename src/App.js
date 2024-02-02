import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImagesSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";
import QRCodeGenerator from "./components/qr-code-generator/index.jsx";
import LightDarkMode from "./components/light-dark-mode/index.jsx";

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
      {/* <ImagesSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"} 
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}

      {/* light and dark theme switch */}
      <LightDarkMode />

</div>
  );
}

export default App;
