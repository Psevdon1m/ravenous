import React from "react";
import "./Business.css";

class Business extends React.Component {

  constructor(props){
    super(props)

    //this.onClick = this.onClick.bind(this)
  }
 

  apiKey= 'AIzaSyCM4VvxEviBjv-5jLyq8EQEI24Ep2464r0'
  
  
 

  //handleAddressClick(event) {}

  //let businessAddressLink = ``

   

  render() {
    const { business } = this.props;
    //let businessWebPage = business.url;
    let n = business.name;
    let name = n.replace(" ", "+");
    const urlToPlace = `https://www.google.com/maps/search/${name},${business.address},${business.lat},${business.long}`
    
    
    
    //console.log(businessWebPage)
    return (
      <div className="Business">
        <div className="image-container">
          <a href={business.url} target="_blank">
          <img src={business.imageSrc} alt='food-img' />
          </a>
          
        </div>
        <div className="Business-information">
          <div className="Business-address">
            <a href={urlToPlace} target='_blank'>{business.name}</a>
            <p>{business.city}<br></br>
               {business.address}<br></br>
               {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">Raiting: {business.rating}</h3>
            <p>Reviews: {business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
