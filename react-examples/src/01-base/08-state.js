import React, {Component} from 'react';

export default class App extends Component
{
    state = {
        //addToFavText: 'Add to favourite',
        shouldAddToFavourite: true
    }

    render()
    {
        return (
            <div>
                <h1>Welcome to React</h1>
                <button onClick={() => {
                    this.setState({
                        shouldAddToFavourite: !this.state.shouldAddToFavourite
                    })

                    if (this.state.shouldAddToFavourite) {
                        console.log('Add to favourite');
                    } else {
                        console.log('Remove from favourite');
                    }
                }
                }>{this.state.shouldAddToFavourite ? 'Add to favourite' : 'Remove from favourite'}</button>
            </div>
        );
    }
}