import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from  './component/Form';
import Recipes from './component/Recipes';

const  API_KEY = "6ae95702c1ffb036fd7d2372ed7e66c9";

class App extends Component {

state = {
  recipes: [] // array
}

  getRecipe = async(e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState ({
      recipes: data.recipes
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default App;
