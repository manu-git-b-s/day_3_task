const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);
  for (let i = 0; i < parsedData.length; i++) {
    console.log(parsedData[i].flags.png);
  }
};
