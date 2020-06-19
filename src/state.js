import { createStore } from "redux";

// Action types
export const CHANGE_TO_VIEW = "changeToView";
export const TOGGLE_CATEGORY = "toggleCategory";
export const TOGGLE_FEDERAL_STATE = "toggleFederalState";

export function changeToView(view) {
    return { type: CHANGE_TO_VIEW, view }
};

export function toggleCategory(category) {
    return { type: TOGGLE_CATEGORY, category }
};

export function toggleFederalState(federalState) {
    return { type: TOGGLE_FEDERAL_STATE, federalState }
};

export const VIEWS = {
    MENU: "menu",
    CATEGORIES: "categories",
    FEDERAL_STATES: "federalStates",
};

const initialState = {
    currentView: VIEWS.MENU,
    federalStates: {
        "Baden-Württemberg": false,
        "Bayern": false,
        "Berlin": true, 
        "Brandenburg": false,
        "Bremen": false,
        "Hamburg": false,
        "Hessen": false,
        "Mecklenburg-Vorpommern": false,
        "Niedersachsen": false,
        "Nordrhein-Westfalen": false,
        "Rheinland-Pfalz": false,
        "Saarland": false,
        "Sachsen": false,
        "Sachsen-Anhalt": false,
        "Schleswig-Holstein": false,
        "Thüringen": false,
    },
    categories: {
        "Kontaktbeschränkungen": true,
        "Veranstaltungen & Kultur": true,
        "Schulen & Kitas": true,
    },
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_TO_VIEW: 
            return {
            ...state, currentView: action.view
            };
            
        case TOGGLE_FEDERAL_STATE:
            let federalState = action.federalState;
            var current = state.federalStates[federalState];
            let federalStates = Object.assign({}, state.federalStates);
            federalStates[federalState] = !current;

            return {
            ...state, federalStates: federalStates
            };
            
        case TOGGLE_CATEGORY:
            let category = action.category;
            var current = state.categories[category];
            let categories = Object.assign({}, state.categories);
            categories[category] = !current;

            return {
            ...state, categories: categories
            };
            
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;