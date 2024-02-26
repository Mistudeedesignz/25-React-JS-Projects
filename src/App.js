import "./App.css";
// import FeatureFlags from "./components/feature-flag";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
// import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
// import UseWindowResizeTest from "./components/use-window-resize/test";
// import SearchAutocomplete from "./components/search-autocomplete-with-api";
// import TicTacToe from "./components/tic-tac-toe";
// import Accordian from "./components/accordian";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImagesSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data.js";
// import QRCodeGenerator from "./components/qr-code-generator/index.jsx";
// import LightDarkMode from "./components/light-dark-mode/index.jsx";
// import ScrollIndicator from "./components/scroll-indicator/index.jsx";
// import TabTest from "./components/custom-tabs/tab-test.jsx";
// import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
// import GithubProfileFind from "./components/github-profile-finder/index.jsx";


function App() {
  return (
    <div className="App">
     {/* "Accordian Component"  */}
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
      {/* <LightDarkMode /> */}

     {/* Scroll Indicator Components */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs Components */}
      {/* <TabTest /> */}

       
       {/* Custom Modal Components */}
       {/* <ModalTest /> */}

       {/* Github Profile Finder Components */}
       {/* <GithubProfileFind /> */}

       {/* Search Autocomplete */}
       {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe */}
       {/* <TicTacToe/>   */}

       {/* Feature Flag Implementation */}
       {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>   */}

      {/* useEffect: Custom Hook */} 
      {/* <UseFetchHookTest /> */}

       {/* Use Onclick Outside Custom Hook */}
       <UseOnclickOutsideTest />

        {/* Use Window Resize Hook Test */}
        {/* <UseWindowResizeTest /> */}



    </div>
  );
}

export default App;