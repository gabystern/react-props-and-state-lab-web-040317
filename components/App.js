import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [{id:1, name:'matt', age: 3, weight: 10, gender:'male', type: 'dog', isAdopted: false}, {id:2, name: 'matt2', age: 3, weight: 10, gender: 'male', type: 'dog', isAdopted:false}],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.createAdoptedPet = this.createAdoptedPet.bind(this)

  }

  createAdoptedPet(id){
    this.setState(function(previousState){
      return {
        adoptedPets: [...previousState.adoptedPets, id]
      }
    })
  }


  render() {
    debugger
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adopt={this.createAdoptedPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
