import { createStore } from 'redux';

import { VIEWS } from './constants'
import tasks from './tasks'



// Action types
export const CHANGE_TO_VIEW = "changeToView";
export const TOGGLE_CATEGORY = "toggleCategory";
export const TOGGLE_FEDERAL_STATE = "toggleFederalState";
export const GIVE_ANSWER = "giveAnswer";
export const END_TASK = "endTask";
export const RESET_QUIZ = "resetQuiz";

export function changeToView(view) {
    return { type: CHANGE_TO_VIEW, view }
};

export function toggleCategory(category) {
    return { type: TOGGLE_CATEGORY, category }
};

export function toggleFederalState(federalState) {
    return { type: TOGGLE_FEDERAL_STATE, federalState }
};

export function giveAnswer(answerIndex) {
    return { type: GIVE_ANSWER, answerIndex }
};

export function endTask(payload) {
    return { type: END_TASK, payload}
};

export function resetQuiz() {
    return { type: RESET_QUIZ }
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
        "Veranstaltungen & Kultur": true,
        "Schulen & Kitas": true,
        "Gastronomie": true,
        "Einzelhandel": true,
        "Kontaktbeschränkungen": true,
        "Mobilität & Verkehr": true,
        "Krankenhäuser & Pflege": true,
        "Sport & Freizeit": true,
        "Gottesdienste": true,
        "Einreisen": true,
        "Hochschulen & Wissenschaft": true,
        "Verhalten im Verdachtsfall": true,
    },
    tasks: tasks,
    numberOfTasks: tasks.length,
    currentTask: tasks[0],
    currentTaskIndex: 0,
    currentTaskAnswered: false,
    score: 0,
    quizFinished: false,
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
            
        case GIVE_ANSWER:
            let answerIndex = action.answerIndex;
            var currentTask = state.currentTask;
            currentTask.answerIndex = answerIndex;
            let newTasks = {...state.tasks, currentTask}
            let score = state.score;
            
            if (currentTask.correctAnswerIndex == answerIndex) {
                score += 1;
            }
            
            return {
                ...state, tasks: newTasks, currentTaskAnswered: true, score: score,
            }
            
        case END_TASK:
            let currentTaskIndex = state.currentTaskIndex + 1;
            var currentTask = state.currentTask;
            let currentTaskAnswered = false;
            let quizFinished = currentTaskIndex >= state.numberOfTasks;
            let currentView = state.currentView;
            if (quizFinished) {
                currentView = VIEWS.RESULT;
            } else {
                currentTask = state.tasks[currentTaskIndex];
            }
            
            return {
                ...state, 
                currentTaskIndex: currentTaskIndex, 
                currentTask: currentTask,
                quizFinished: quizFinished,
                currentTaskAnswered: currentTaskAnswered,
                currentView: currentView,
            }
            
        case RESET_QUIZ:
            return {
                ...state, 
                tasks: initialState.tasks,
                currentTask: initialState.tasks[0],
                currentTaskIndex: 0,
                currentTaskAnswered: false,
                score: 0,
                quizFinished: false,
            }
            
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;