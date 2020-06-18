import React from 'react';
import Categories from './components/categories.js';
import FederalStates from './components/federalstates.js';
import Menu from './components/menu.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "menu",
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
            }
        };
    }
    
    changeToView = (view) => {
        this.setState({currentView: view})
    }
    
    setFederalState = (ferderalStateName, ferderalStateState) => {
        let currentStates = this.state.federalStates;
        currentStates[ferderalStateName] = ferderalStateState;
        this.setState({federalStates: currentStates});
    }
    
    setCategory = (categoryName, categoryState) => {
        let currentCategories = this.state.categories;
        currentCategories[categoryName] = categoryState;
        this.setState({categories: currentCategories});
    }
    
    render() {
        switch(this.state.currentView) {
            case "categories": {
                return (
                    <Categories 
                        categories={this.state.categories} 
                        onCategoryChange={this.setCategory} 
                        changeToView = {this.changeToView}
                    />
                );
            }
            case "federalStates": {
                return (
                    <FederalStates 
                        federalStates={this.state.federalStates} 
                        onFederalStateChange={this.setFederalState} 
                        changeToView = {this.changeToView}
                    />
                );
            }
            case "menu": {
                return (
                    <Menu 
                        changeToView = {this.changeToView}
                    />
                );
            }
        }
    };
}

export default App;
