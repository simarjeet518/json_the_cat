const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName,(error,response,body)=>{
    if (error) {
      callback(error,null);
    } else if (response.statusCode  === 200) {
      const data = JSON.parse(body);
      
      if (data.length >= 1) {
        const desc = data[0].description;
        callback(null,desc);
      } else {
        // const  desc = `Requested breed ${breedName} is  not found`;
         const error = "details not found"
         callback(error,null);
      }
      
      
    }
  });


};
module.exports = {fetchBreedDescription};