// utils/stateUtils.js
export const updateState = (prevState, key, value) => ({
  ...prevState,
  [key]: value,
});

export const editDataObject = (setDataApp, key, value) => {
  setDataApp((prevData) => updateState(prevData, key, value));
};