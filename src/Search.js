import React, { Component } from "react";
import { products } from "./products";

const localproducts = products;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", len: 0, globalArray: localproducts };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  } // end constructor
  /** This is the method called when the search form box changes **/
  /** Javascript will create an event object for you **/
  onSearchFormChange(event) {
    // We re-assign the state variable called searchTerm
    // event is understood by Javascript to be a change to a UI item
    this.setState({ searchTerm: event.target.value });
    let sTerm = event.target.value; // typed in value
    let numChars = sTerm.length;
    this.setState({ len: numChars });
  }
  render() {
    return (
      <div className="App">
        <br></br>
        <b>{this.state.searchTerm}</b>

        <SearchForm
          searchTerm={this.state.searchTerm}
          onChange={this.onSearchFormChange}
        />
        <SearchResults
          searchTerm={this.state.searchTerm}
          globalArray={this.state.globalArray}
        />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

class SearchResults extends Component {
  // we need to write a filter function to perform our search
  // we will need to check the name and company and phone number
  // searchTerm is what is provided to us by the user in the text box
  productsFilterFunction(searchTerm) {
    return function (addrObject) {
      // convert everything to lower case for string matching
      let product = addrObject.Product.toLowerCase();
      let Instock = addrObject.Instock.toLowerCase();
      // no need to lower case numbers
      // we also check if the searchTerm is just blank space
      return (
        searchTerm !== "" &&
        (product.includes(searchTerm.toLowerCase()) ||
          Instock.includes(searchTerm.toLowerCase()))
      );
    };
  }

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    // let's calculate how many elements or obejcts are
    // in the array after the filter is applied.
    let numberResults = arrayPassedAsParameter.filter(
      this.productsFilterFunction(searchTermFromProps)
    ).length;

    return (
      <div className="SearchResultsDisplay">
        <hr />
        <h1>Search Results</h1>
        Number of Results found {numberResults}
        {arrayPassedAsParameter
          .filter(this.productsFilterFunction(searchTermFromProps))
          .map((a) => (
            <div key={a.Product}>
              <b>{a.Product}</b>, <i>{a.Instock}</i>
            </div>
          ))}
      </div>
    );
  }
} // close the SearchResults component

class SearchForm extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="SearchFormForm">
        <form>
          <b>Check Stock info here </b>
          <input
            type="text"
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
        </form>
        <hr />
      </div>
    );
  }
} // close the SearchForm Component

export default Search;
