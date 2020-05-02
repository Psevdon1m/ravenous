let client_id = 'elu1QQPaAD_1dVQHtM6EPw';

let API_key = 'YzyUZg7_gboQtOkgmAoUYOi7GWJtHUw0RcTfZ4RrS2hny72sU6i2TThekysM9kiJoUWg6mMdZZmC574m8d1AmsAuLu74zolT2sA9GAP-7_uuk6YT3G8sJGVOepCtXnYx'

export const Yelp = {
    search(term, location, sortBy){
        let url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        //Here I am using CORS Anywhere Api to bypass CORS restrictions 
        let CORS_url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`

        console.log(CORS_url)

        return fetch(CORS_url, {headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${API_key}`
            
    
    }}).then((response) => {
            return response.json()
        } ).then(jsonResponse => {
            try{
                if (jsonResponse.businesses) {

                   return jsonResponse.businesses.map(business => {
                        return{
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                           
                        
                    })
                }
            } catch(e){
                console.log(e);
            }
            
        })
    }
}

