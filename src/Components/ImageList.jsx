import { useSelector, useDispatch } from "react-redux";
import { selectImage } from "../Action/imageActions";

const ImageList = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.images);
  const selectedImageIndex = useSelector(
    (state) => state.image.selectedImageIndex
  );

  const handleImageSelect = (index) => {
    dispatch(selectImage(index));
  };

  return (
    <div className="flex flex-wrap justify-center max-w-[40vw] max-h-[30vh] overflow-y-auto p-2 border border-gray-200">
      {images.map((image, index) => (
        <div key={index} className="relative inline-block m-2">
          <img
            src={image.url}
            alt={`Image ${index}`}
            className={`w-24 h-24 cursor-pointer border ${
              index === selectedImageIndex
                ? "border-blue-500"
                : "border-transparent"
            }`}
            style={{
              filter: `
                sepia(${image.filters.sepia}%)
                saturate(${image.filters.saturate}%)
                grayscale(${image.filters.grayscale}%)
                brightness(${image.filters.brightness}%)
                contrast(${image.filters.contrast}%)
              `,
            }}
            onClick={() => handleImageSelect(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
