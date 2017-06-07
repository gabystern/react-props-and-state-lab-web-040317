const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name,
      gender: this.props.data.gender,
      type: this.props.data.type,
      age: this.props.data.age,
      weight: this.props.data.weight,
      isAdopted: this.props.data.isAdopted
    }
    this.handleClick = this.handleClick.bind(this)
    }

handleClick(event){
  this.setState({
    isAdopted: true
  })
  this.props.adopted(this.state.id)
}


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.state.name}
          (gender: {this.state.gender === 'male' ? '♂' : '♀'}) </a>
          <div className="meta">
            <span className="date">Type: {this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
