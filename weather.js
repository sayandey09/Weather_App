class Weather {
  constructor() {
    this.clientId = "c1abe675b14ce745112592a85a39d0cb";
  }

  async getWeather(cityName, countryName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${this.clientId}&units=metric`
    );

    const res = await response.json();
    return res;
  }

  getTime(timezone) {
    const nowInLocalTime = Date.now() + 1000 * (timezone / 3600);
    const millitime = new Date(nowInLocalTime);
    const dateFormat = millitime.toLocaleString();

    let day = millitime.toLocaleString("en-US", { weekday: "long" });
    let month = millitime.toLocaleString("en-US", { month: "long" });
    let date = millitime.toLocaleString("en-US", { day: "numeric" });
    let year = millitime.toLocaleString("en-US", { year: "numeric" });
    let hours = millitime.toLocaleString("en-US", { hour: "numeric" });
    let minutes = millitime.toLocaleString("en-US", { minute: "numeric" });

    return `${day} ${date} ${month} ${year} ${hours} : ${minutes} Minute`;
  }
}
