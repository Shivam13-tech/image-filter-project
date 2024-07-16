export const setFilter = (filter, value) => ({
  type: "SET_FILTER",
  filter,
  value,
});

export const setOverlayText = (text) => ({
  type: "SET_OVERLAY_TEXT",
  text,
});

export const setOverlayPosition = (position) => ({
  type: "SET_OVERLAY_POSITION",
  position,
});

export const resetFilters = () => ({
  type: "RESET_FILTERS",
});

export const addImage = (url) => ({
  type: "ADD_IMAGE",
  url,
});

export const selectImage = (index) => ({
  type: "SELECT_IMAGE",
  index,
});
