import React, {Component} from 'react';

class User extends Component {

  constructor(props){
    super(props);
    this.state={
      name: "Victor"
    }
  }

  changeState(){
    this.setState({
      name: "Victor Emerick"
    });
  }

  render(){
    return (
      <div>
        <div>
            Nome: {this.props.name}
        </div>
        <div>
            Foto: <img src={this.props.name}/>
        </div>
        <button onClick={changeState}>Nome Completo</button>
      </div>
    );
  }
}

export default User;