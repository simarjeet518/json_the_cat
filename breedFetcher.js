const request = require('request');

const argv = process.argv;
const breed = argv[2];
const requestAPI = request("https://api.thecatapi.com/v1/breeds/search?q=" + breed,(error,response,body)=>{
  if (error) {
    console.log(error);
  } else if (response.statusCode  === 200) {
    const data = JSON.parse(body);
  
    if (data.length >= 1) {
      console.log(data[0].description);
    } else {
      console.log(`Requested breed ${breed} is  not found`);
    }
    
  }
});
requestAPI;