//
const weather = new Weather();
const ui = new Ui();

const country = document.getElementById("country"),
  city = document.getElementById("city");
//

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(country.value, city.value);
  if (country.value === "" || city.value === "") {
    // console.log("enter data");

    ui.displayErr("Please fill both field");
  } else {
    weather.getWeather(city.value, country.value).then((data) => {
      ui.printDetails(data);
    });
  }

  country.value = "";
  city.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  weather.getWeather("kolkata", "India").then((data) => {
    ui.printDetails(data);
    setInterval(() => {
      document.getElementById("time").textContent = weather.getTime(
        data.timezone
      );
    }, 1000);
  });
});
