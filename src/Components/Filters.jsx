import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  setOverlayText,
  setOverlayPosition,
  resetFilters,
  addImage,
} from "../Action/imageActions";

const Filters = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.images);
  const selectedImageIndex = useSelector(
    (state) => state.image.selectedImageIndex
  );
  const overlayText = useSelector((state) => {
    const selectedImage = state.image.images[selectedImageIndex];
    return selectedImage
      ? selectedImage.overlayText
      : { text: "", position: { x: 0, y: 0 } };
  });

  const handleFilterChange = (filter, value) => {
    dispatch(setFilter(filter, value));
  };

  const handleOverlayTextChange = (e) => {
    dispatch(setOverlayText(e.target.value));
  };

  const handleOverlayPositionChange = (x, y) => {
    dispatch(setOverlayPosition({ x, y }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const handleAddImage = () => {
    const id = uuidv4();
    const randomWidth = Math.floor(Math.random() * (400 - 200) + 200);
    const randomHeight = Math.floor(Math.random() * (400 - 200) + 200);
    const imageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}?id=${id}`;
    dispatch(addImage(imageUrl));
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={handleAddImage}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add New Image
        </button>
        <button
          onClick={handleReset}
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset Filters
        </button>
      </div>
      <div className="mb-2">
        <label className="block">Overlay Text:</label>
        <input
          type="text"
          value={overlayText.text}
          onChange={handleOverlayTextChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">X:</label>
        <input
          type="number"
          value={overlayText.position.x}
          onChange={(e) =>
            handleOverlayPositionChange(e.target.value, overlayText.position.y)
          }
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Y:</label>
        <input
          type="number"
          value={overlayText.position.y}
          onChange={(e) =>
            handleOverlayPositionChange(overlayText.position.x, e.target.value)
          }
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Sepia:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={images[selectedImageIndex].filters.sepia}
          onChange={(e) => handleFilterChange("sepia", e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Saturate:</label>
        <input
          type="range"
          min="0"
          max="200"
          value={images[selectedImageIndex].filters.saturate}
          onChange={(e) => handleFilterChange("saturate", e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Grayscale:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={images[selectedImageIndex].filters.grayscale}
          onChange={(e) => handleFilterChange("grayscale", e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Brightness:</label>
        <input
          type="range"
          min="50"
          max="150"
          value={images[selectedImageIndex].filters.brightness}
          onChange={(e) => handleFilterChange("brightness", e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Contrast:</label>
        <input
          type="range"
          min="50"
          max="150"
          value={images[selectedImageIndex].filters.contrast}
          onChange={(e) => handleFilterChange("contrast", e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Filters;
