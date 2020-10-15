import { TOGGLE_CAT, TOGGLE_SHOW_CATEGORIES, KEYWORD_INPUT, SET_LOCATION } from "../constants";

export const initialState = {
  allCategories: [
    { title: "IT and telecommunications", qt: 4440, id: 0, checked: false, top: true },
    { title: "Sales and commerce", qt: 3062, id: 1, checked: false, top: true },
    { title: "Production, construction and trade", qt: 2586, id: 2, checked: false, top: true },
    { title: "Management / executive and strategic management", qt: 1982, id: 3, checked: false, top: true },
    { title: "Other", qt: 3636, id: 4, checked: false, top: true },
    { title: "Engineering / technical", qt: 2652, id: 5, checked: false, top: true },
    { title: "Health, medical and social", qt: 2130, id: 6, checked: false, top: true },
    { title: "Finance and accounting", qt: 1979, id: 7, checked: false, top: true },
    { title: "Not categorized", qt: 1468, id: 8, checked: false, top: false },
    { title: "Banking, insurance and financial services", qt: 1342, id: 9, checked: false, top: false },
    { title: "Purchasing and transport", qt: 719, id: 10, checked: false, top: false },
    { title: "Administration", qt: 1439, id: 11, checked: false, top: false },
    { title: "Marketing and advertising", qt: 1304, id: 12, checked: false, top: false },
    { title: "Training", qt: 547, id: 13, checked: false, top: false },
    { title: " logistics", qt: 719, id: 14, checked: false, top: false },
    { title: "Ausiness administration", qt: 1439, id: 15, checked: false, top: false },
    { title: "Advertising", qt: 1304, id: 16, checked: false, top: false },
    { title: "instruction", qt: 547, id: 17, checked: false, top: false }
  ],
  showCategories: false,
  keyword: "",
  locationList: [],
  location: "",
  loading: false,
  fetchingError: ""
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CAT:
      const newCategories = state.allCategories.map(category => {
        if (parseInt(action.payload) === category.id) {
          return { ...category, checked: !category.checked };
        }
        return category;
      });

      return {
        ...state,
        allCategories: newCategories
      };
    case TOGGLE_SHOW_CATEGORIES:
      return {
        ...state,
        showCategories: !state.showCategories
      };
    case KEYWORD_INPUT:
      return {
        ...state,
        keyword: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};
