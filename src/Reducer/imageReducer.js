// imageReducer.js

const initialState = {
  images: [
    {
      url: "https://picsum.photos/200/300",
      filters: {
        sepia: 0,
        saturate: 100,
        grayscale: 0,
        brightness: 100,
        contrast: 100,
      },
      overlayText: { text: "", position: { x: 0, y: 0 } },
    },
  ],
  selectedImageIndex: 0,
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        images: state.images.map((image, index) =>
          index === state.selectedImageIndex
            ? {
                ...image,
                filters: { ...image.filters, [action.filter]: action.value },
              }
            : image
        ),
      };
    case "SET_OVERLAY_TEXT":
      return {
        ...state,
        images: state.images.map((image, index) =>
          index === state.selectedImageIndex
            ? {
                ...image,
                overlayText: { ...image.overlayText, text: action.text },
              }
            : image
        ),
      };
    case "SET_OVERLAY_POSITION":
      return {
        ...state,
        images: state.images.map((image, index) =>
          index === state.selectedImageIndex
            ? {
                ...image,
                overlayText: {
                  ...image.overlayText,
                  position: action.position,
                },
              }
            : image
        ),
      };
    case "RESET_FILTERS":
      return {
        ...state,
        images: state.images.map((image, index) => {
          if (index === state.selectedImageIndex) {
            return {
              ...image,
              filters: {
                sepia: 0,
                saturate: 100,
                grayscale: 0,
                brightness: 100,
                contrast: 100,
              },
              overlayText: { text: "", position: { x: 0, y: 0 } },
            };
          } else {
            return image;
          }
        }),
      };
    case "ADD_IMAGE":
      return {
        ...state,
        images: [
          ...state.images,
          {
            url: action.url,
            filters: { ...initialState.images[0].filters },
            overlayText: { text: "", position: { x: 0, y: 0 } },
          },
        ],
      };
    case "SELECT_IMAGE":
      return {
        ...state,
        selectedImageIndex: action.index,
      };
    default:
      return state;
  }
};
