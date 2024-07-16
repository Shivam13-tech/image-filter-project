import { useSelector } from "react-redux";

const ImageDisplay = () => {
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

  return (
    <div className="m-5 relative">
      <img
        src={images[selectedImageIndex].url}
        alt={`Selected Image`}
        className="w-[40vw] h-[50vh] border-2 border-blue-500 m-2"
        style={{
          filter: `
            sepia(${images[selectedImageIndex].filters.sepia}%)
            saturate(${images[selectedImageIndex].filters.saturate}%)
            grayscale(${images[selectedImageIndex].filters.grayscale}%)
            brightness(${images[selectedImageIndex].filters.brightness}%)
            contrast(${images[selectedImageIndex].filters.contrast}%)
          `,
        }}
      />
      <div
        style={{
          top: `${overlayText.position.y}px`,
          left: `${overlayText.position.x}px`,
        }}
        className="absolute p-2 rounded text-orange-500"
      >
        {overlayText.text}
      </div>
    </div>
  );
};

export default ImageDisplay;
