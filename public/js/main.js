const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");
const temp_rel_value = document.getElementById("temp_rel_value");
const datahide = document.querySelector(".middle_layer ");

const getInfo = async (event) => {
  event.preventDefault();
  let cityval = cityName.value;

  if (cityval === "") {
    city_name.innerHTML = `Plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f80989a84c01ff50d2a9554f6c986483`;
      const respones = await fetch(url);
      const data = await respones.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
      temp_rel_value.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      // conditon to check sunny or cloudy

      if (tempMood == "Clear") {
        temp_status.innerHTML = '<i class="fa fa-sun" style=" color: #eeec68"></i>';
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML = '<i class="fa fa-cloud" style="color: #f1f2f6"></i>';
      } else if (tempMood == "Rain") {
        temp_status.innerHTML = '<i class="fa-solid fa-cloud-bolt" style=" color: #a4b0be"></i>';
      } else {
        temp_status.innerHTML = '<i class="fa fa-cloud" style=" color: #f1f2f6"></i>';
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = `Plz Enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
