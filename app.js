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
      console.log(data.timezone);
      console.log(weather.getTime(data));

      setInterval(() => {
        ui.printDate(weather.getTime(data).dt);
      }, 1000);

      ui.sunDetails(
        weather.getTime(data).sunriseTime,
        weather.getTime(data).sunsetTime
      );
    });
  }

  country.value = "";
  city.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  weather.getWeather("kolkata", "India").then((data) => {
    ui.printDetails(data);
    console.log(data);
    console.log(weather.getTime(data));
    setInterval(() => {
      ui.printDate(weather.getTime(data).dt);
    }, 1000);
    ui.sunDetails(
      weather.getTime(data).sunriseTime,
      weather.getTime(data).sunsetTime
    );
  });
});
