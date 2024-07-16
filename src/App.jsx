import ImageDisplay from "./Components/ImageDisplay";
import ImageList from "./Components/ImageList";
import Filters from "./Components/Filters";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <ImageDisplay />
        <ImageList />
      </div>
      <Filters />
    </div>
  );
}

export default App;
