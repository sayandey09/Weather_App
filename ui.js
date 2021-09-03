class Ui {
  constructor() {
    this.location = document.getElementById("location");
    this.temperature = document.getElementById("temperature");
    this.feelLike = document.getElementById("feelLike");
    this.humidity = document.getElementById("humidity");
    this.windDirection = document.getElementById("windDirection");
    this.windSpeed = document.getElementById("windSpeed");
    this.icon = document.getElementById("w-icon");
    this.desc = document.getElementById("desc");
    this.errAlert = document.querySelector(".errAlert");
  }

  printDetails(info) {
    console.log("from");
    console.log(info);
    this.location.textContent = `${info.name} || ${info.sys.country} `;

    this.temperature.textContent = `Temperature : ${info.main.temp} °C`;
    this.feelLike.textContent = `Feels Like : ${info.main.feels_like} °C`;

    this.humidity.textContent = `Humidity : ${info.main.humidity} % `;

    this.windDirection.textContent = `Wind Direction : ${info.wind.deg} degrees `;

    this.windSpeed.textContent = `Wind Speed : ${info.wind.speed} meters/sec`;

    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    );

    this.desc.textContent = `${info.weather[0].description}`;
  }
  displayErr(msg) {
    this.errAlert.style.display = "block";
    this.errAlert.children[0].textContent = msg;

    setTimeout(() => {
      this.errAlert.style.display = "none";
    }, 3000);
  }
}
