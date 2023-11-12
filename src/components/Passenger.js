import React from 'react';
import './Passenger.css'

class RideForm extends React.Component {
  handleAskForFare = () => {
    // Logic for asking the passenger how much they are willing to pay
    alert('How much are you willing to pay for this ride?');
  };

  handleCancel = () => {
    // Logic for canceling the ride
    alert('Ride canceled.');
  };

  render() {
    return (
      <div>
        <h2>Ride Request Form</h2>
        <form>
          {/* Add your form fields here as needed */}
          <label>
            How much are you willing to pay for this ride?
            <input type="text" />
          </label>
          <br />
          <button type="button" onClick={this.handleAskForFare}>
            Ask for Fare
          </button>
          <button type="button" onClick={this.handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default RideForm;