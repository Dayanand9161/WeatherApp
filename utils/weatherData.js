const request=require('request');

const openWeatherMap={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"15c95e8b8775593d0077f5a67e6fa5a6",
};

const weatherData = (address,callback)=>{
    const url =
        openWeatherMap.BASE_URL + 
        encodeURIComponent(address) + 
        "&APPID=" + 
        openWeatherMap.SECRET_KEY;

        request({url,json:true},(error,data) =>{
            if(error){
                callback(true, "Unable to fetch data please try again" +error);
            }
            callback(false,data?.body);
        })
}
module.exports=weatherData;