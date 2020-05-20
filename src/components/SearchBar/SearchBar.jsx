import React from "react";
import "./SearchBar.css";
import Yelp from '../../util/Yelp'
import Business from "../Business/Business";



class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlekeyPress = this.handlekeyPress.bind(this);
  

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    }; 

    
  }


  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy){
      return 'active';
    } else {
      return '';
    };
  }


  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
      }, () => {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
   
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
    
  }

  

   handlekeyPress(event){

    let locationsToAlert = ["San Diego", " Chicago" ," Paris" ," Philadelphia" ," Denver" ," Vancouver" ," San Francisco" ," Dallas" ," Berlin" ," New York", " Los Angeles", " Washington", " DC", " Atlanta", " Toronto", " Honolulu", " Miami", " San Jose", " Dublin", " Detroit", " Saint Louis", " Palo Alto", " Austin", " Houston", " Seattle", " Boston", " Minneapolis", " Las Vegas", " London", " Madrid", " Amsterdam", " Portland", " Oakland"]

    let locations = ["san diego", "chicago" ,"paris" ,"philadelphia" ,"denver" ,"vancouver" ,"san francisco" ,"dallas" ,"berlin" ,"new york", "los angeles", "washington", "dc", "atlanta", "toronto", "honolulu", "miami", "san jose", "dublin", "detroit", "saint louis", "palo alto", "austin", "houston", "seattle", "boston", "minneapolis", "las vegas", "london", "madrid", "amsterdam", "portland", "oakland"]

    if(event.key === "Enter") {
      if( locations.indexOf(this.state.location.toLowerCase()) === -1) {
        alert(`This location is unavaialble, please choose one of these: ${locationsToAlert}`)
      } else {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }
  }
}

  handleSearch(event){
    let locationsToAlert = ["San Diego", " Chicago" ," Paris" ," Philadelphia" ," Denver" ," Vancouver" ," San Francisco" ," Dallas" ," Berlin" ," New York", " Los Angeles", " Washington", " DC", " Atlanta", " Toronto", " Honolulu", " Miami", " San Jose", " Dublin", " Detroit", " Saint Louis", " Palo Alto", " Austin", " Houston", " Seattle", " Boston", " Minneapolis", " Las Vegas", " London", " Madrid", " Amsterdam", " Portland", " Oakland"]

    let locations = ["san diego ", "chicago " ,"paris " ,"philadelphia " ,"denver " ,"vancouver " ,"san francisco " ,"dallas " ,"berlin " ,"new york ", "los angeles ", "washington ", "dc ", "atlanta ", "toronto ", "honolulu ", "miami ", "san jose ", "dublin ", "detroit ", "saint louis ", "palo alto ", "austin ", "houston ", "seattle ", "boston ", "minneapolis ", "las vegas ", "london ", "madrid ", "amsterdam ", "portland ", "oakland "];

    if(locations.indexOf(this.state.location.toLowerCase()) === -1){
      alert(`This location is unavaialble, please choose one of these: ${locationsToAlert}`)
    }else {
      
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault();
    }
    
  }


   renderSortByOptions() {
      
    if(this.state.location && this.state.term) {
      
      return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li 
        className={this.getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}
        onClick={
          this.handleSortByChange.bind(this, sortByOptionValue)
          
        }> {sortByOption}</li>;
      });
    }
     
  }

  
  render() {
    return (
      <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
         {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange={this.handleTermChange} placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange}
        onKeyPress={this.handlekeyPress}
        placeholder="Where? US/Europe" />
      </div>
      <div className="SearchBar-submit">
        <a onClick={this.handleSearch}>Let's Go</a>
      </div>
    </div>
    );
  }

}



export default SearchBar;
