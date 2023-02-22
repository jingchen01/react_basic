import React, { Component } from "react";

export default class App extends Component {
  state = {
    //addToFavText: 'Add to favourite',
    shouldAddToFavourite: true,
  };

  constructor() {
    super();
    this.state = {
      shouldAddToFavourite_constructor: false,
      username: "User-1",
      username2: "User-2",
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <button
          onClick={() => {
            this.setState({
              shouldAddToFavourite: !this.state.shouldAddToFavourite,
            });

            if (this.state.shouldAddToFavourite) {
              console.log("Add to favourite");
            } else {
              console.log("Remove from favourite");
            }
          }}
        >
          {this.state.shouldAddToFavourite
            ? "Add to favourite"
            : "Remove from favourite"}{" "}
          by {this.state.username}
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({
              shouldAddToFavourite_constructor:
                !this.state.shouldAddToFavourite_constructor,
            });

            if (this.state.shouldAddToFavourite_constructor) {
              console.log("Add to favourite (with state from constructor)");
            } else {
              console.log(
                "Remove from favourite (with state from constructor)"
              );
            }
          }}
        >
          {this.state.shouldAddToFavourite_constructor
            ? "Add to favourite"
            : "Remove from favourite"}{" "}
          by {this.state.username2}
        </button>
      </div>
    );
  }
}
