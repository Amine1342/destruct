import React from "react";

class Users extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h4 className="text-primary mt-3">Chanteur :</h4>
        <p className="text-success mt-3">
          <strong>Nom : </strong>
          {name}
          <br />
          <strong>Age : </strong>
          {age}
        </p>
      </div>
    );
  }
}

export default Users;
