import React, { Component } from "react";
//import Validation from "./Validation";
import "bootstrap/dist/css/bootstrap.css";

class Validate extends Component {
  constructor(props) {
    super(props);

    // notice that formErrors is an object with
    // two properties.
    this.state = {
      name: "",
      addOne: "",
      addTwo: "",
      eirCode: "",
      cardName: "",
      cardNumber: "",
      expiry: "",
      ccv: "",
      formErrors: {
        name: "",
        addOne: "",
        addTwo: "",
        eirCode: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        ccv: ""
      },
      addOneValid: false,
      nameValid: false,
      addTwoValid: false,
      eirCodeValid: false,
      cardNameValid: false,
      cardNumberValid: false,
      expiryValid: false,
      ccvValid: false,
      formValid: false
    };

    this.handleChangeNameBox = this.handleChangeNameBox.bind(this);
    this.handleChangeAddOneBox = this.handleChangeAddOneBox.bind(this);
    this.handleChangeAddTwoBox = this.handleChangeAddTwoBox.bind(this);
    this.handleChangeEirCodeBox = this.handleChangeEirCodeBox.bind(this);
    this.handleChangeCardNameBox = this.handleChangeCardNameBox.bind(this);
    this.handleChangeCardNumberBox = this.handleChangeCardNumberBox.bind(this);
    this.handleChangeExpiryBox = this.handleChangeExpiryBox.bind(this);
    this.handleChangeCcvBox = this.handleChangeCcvBox.bind(this);

    this.checkoutButtonClick = this.checkoutButtonClick.bind(this);
  }
  // name box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeNameBox(event) {
    this.setState({ name: event.target.value });
    this.validateName(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeAddOneBox(event) {
    this.setState({ addOne: event.target.value });
    this.validateAddOne(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeAddTwoBox(event) {
    this.setState({ addTwo: event.target.value });
    this.validateAddTwo(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeEirCodeBox(event) {
    this.setState({ eirCode: event.target.value });
    this.validateEirCode(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeCardNameBox(event) {
    this.setState({ cardName: event.target.value });
    this.validateCardName(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeCardNumberBox(event) {
    this.setState({ cardNumber: event.target.value });
    this.validateCardNumber(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeExpiryBox(event) {
    this.setState({ expiry: event.target.value });
    this.validateExpiry(event.target.value);
  }

  // account box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  handleChangeCcvBox(event) {
    this.setState({ ccv: event.target.value });
    this.validateCcv(event.target.value);
  }

  // Validation of the name box.
  // This can be as simple or complex as our application require
  // We will just check if the name is 6 or more chars long
  validateName(name) {
    let localFormErrors = this.state.formErrors;

    if (name.length < 6) {
      localFormErrors.name = "The name is too short";
    } // we have a simple valid name.
    else {
      localFormErrors.name = "";
      this.setState({ nameValid: true });
    }
    // set the state variable for form errors (name updated)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form.
    this.validateForm();
  }
  // Validation of the account box.
  // This can be as simple or complex as our application require
  // We will just check if the number is 6 or more chars long
  // and of course that it is an integer number. No other chars
  validateAddOne(addOne) {
    let localFormErrors = this.state.formErrors;
    this.setState({ addOneValid: false });
    if (addOne.length < 6) {
      localFormErrors.addOne = "The address is too short";
    } else if (isNaN(addOne)) {
      localFormErrors.addOne = "";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(addOne)) {
      // Here we use a regular expression
      localFormErrors.addOne = "The address is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.addOne = "";
      this.setState({ addOneValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateAddTwo(addTwo) {
    let localFormErrors = this.state.formErrors;
    this.setState({ addTwoValid: false });
    if (addTwo.length < 6) {
      localFormErrors.addTwo = "The address is too short";
    } else if (isNaN(addTwo)) {
      localFormErrors.addTwo = "The address is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(addTwo)) {
      // Here we use a regular expression
      localFormErrors.addTwo = "The address is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.addTwo = "";
      this.setState({ addTwoValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateEirCode(eirCode) {
    let localFormErrors = this.state.formErrors;
    this.setState({ eirCodeValid: false });
    if (eirCode.length < 7) {
      localFormErrors.eirCode = "The address is too short";
    } else if (isNaN(eirCode)) {
      localFormErrors.eirCode = "The address is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(eirCode)) {
      // Here we use a regular expression
      localFormErrors.eirCode = "The address is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.eirCode = "";
      this.setState({ eirCodeValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateCardName(cardName) {
    let localFormErrors = this.state.formErrors;
    this.setState({ cardNameValid: false });
    if (cardName.length < 7) {
      localFormErrors.cardName = "The number is too short";
    } else if (isNaN(cardName)) {
      localFormErrors.cardName = "The number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(cardName)) {
      // Here we use a regular expression
      localFormErrors.cardName = "The address is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.cardName = "";
      this.setState({ cardNameValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateCardNumber(cardNumber) {
    let localFormErrors = this.state.formErrors;
    this.setState({ cardNumberValid: false });
    if (cardNumber.length < 7) {
      localFormErrors.cardNumber = "The number is too short";
    } else if (isNaN(cardNumber)) {
      localFormErrors.cardNumber = "The number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(cardNumber)) {
      // Here we use a regular expression
      localFormErrors.cardNumber = "The number is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.cardNumber = "";
      this.setState({ cardNumberValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateExpiry(expiry) {
    let localFormErrors = this.state.formErrors;
    this.setState({ expiryValid: false });
    if (expiry.length < 7) {
      localFormErrors.expiry = "The number is too short";
    } else if (isNaN(expiry)) {
      localFormErrors.expiry = "The number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(expiry)) {
      // Here we use a regular expression
      localFormErrors.expiry = "The number is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.expiry = "";
      this.setState({ expiryValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  validateCcv(ccv) {
    let localFormErrors = this.state.formErrors;
    this.setState({ ccvValid: false });
    if (ccv.length < 2) {
      localFormErrors.ccv = "The number is too short";
    } else if (isNaN(ccv)) {
      localFormErrors.ccv = "The number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(ccv)) {
      // Here we use a regular expression
      localFormErrors.ccv = "The number is not actually valid (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.ccv = "";
      this.setState({ ccvValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  // This validation method just checks if both the name
  // and the account number is correct.
  validateForm() {
    this.setState({
      formValid:
        this.state.addOneValid &&
        this.state.nameValid &&
        this.state.addTwoValid &&
        this.state.eirCodeValid &&
        this.state.cardNameValid &&
        this.state.cardNumberValid &&
        this.state.expiryValid &&
        this.state.ccvValid
    });
  }

  checkoutButtonClick() {
    // Do something with the data you have captured.
    console.log(this.state.name);
    console.log(this.state.name);
    console.log(this.state.addOne);
    console.log(this.state.addTwo);
    console.log(this.state.cardName);
    console.log(this.state.cardNumber);
    console.log(this.state.expiry);
    console.log(this.state.ccv);
    console.log(this.state.eirCode);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="alert alert-primary">
          <h2>Checkout</h2>

          <form>
            <div className="form-group">
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.name}
                  name="getName"
                  onChange={this.handleChangeNameBox}
                />
              </label>
              <label>
                Address 1 :
                <input
                  type="text"
                  value={this.state.addOne}
                  name="getAddOne"
                  onChange={this.handleChangeAddOneBox}
                />
              </label>
              <label>
                Address 2
                <input
                  type="text"
                  value={this.state.addTwo}
                  name="getNum"
                  onChange={this.handleChangeAddTwoBox}
                />
              </label>
              <label>
                Eircode :
                <input
                  type="text"
                  value={this.state.eirCode}
                  name="getNum"
                  onChange={this.handleChangeEirCodeBox}
                />
              </label>
              <label>
                Card Name :
                <input
                  type="text"
                  value={this.state.cardName}
                  name="getNum"
                  onChange={this.handleChangeCardNameBox}
                />
              </label>
              <label>
                Card Number :
                <input
                  type="text"
                  value={this.state.cardNumber}
                  name="getNum"
                  onChange={this.handleChangeCardNumberBox}
                />
              </label>
              <label>
                Expiry Date :
                <input
                  type="text"
                  value={this.state.expiry}
                  name="getNum"
                  onChange={this.handleChangeExpiryBox}
                />
              </label>
              <label>
                CCV :
                <input
                  type="text"
                  value={this.state.ccv}
                  name="getNum"
                  onChange={this.handleChangeCcvBox}
                />
              </label>
              <br />

              <button
                disabled={this.state.formValid}
                onClick={this.checkoutButtonClick}
                type="button"
                class="btn btn-warning btn-lg"
              >
                Checkout
              </button>
            </div>
          </form>
          {/* Invoke the Validation component to display error messages */}
          <Validation formErrors={this.state.formErrors} />
        </div>
      </div>
    ); // end of return
  } // end of render()
}

//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
// You can obviously make this Component as stylish as you required
// Here, we go for a basic print out of the error message.
class Validation extends Component {
  render() {
    // Obtain the formErrors from props
    // Remember the App has this.state.formErrors which is a JSON
    // object holding error messages for us about the form
    const formErrorsLocal = this.props.formErrors;
    return (
      <div className="container-fluid">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.name}</strong>
        </div>
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.accNum}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default Validate;
// end of App class
