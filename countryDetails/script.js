const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onload = () => {
  const parsedData = JSON.parse(xhr.response);
  console.log(parsedData.map((country) => country));
  console.log(parsedData.map((country) => country.name.common));
};
