const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {


  createPet (pet){
    return (
      <Pet data={pet} key={pet.id} adopted={this.props.adopt}/>
    )
  }

  render() {
    return (
      <div className="ui cards">
      {this.props.pets.map( pet =>
        this.createPet(pet)
      )}
      </div>
    );
  }
}

module.exports = PetBrowser;
