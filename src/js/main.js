import refs from './refs.js';
import template_countryList from '../template/countryList.hbs';
import template_country from '../template/country.hbs';
import { errorMsg, infoMsg } from './msg.js';

function renderResult(data) {
  refs.mainDiv.innerHTML = '';
  console.log(data);
  // Если найден один вариант то рисуем его
  if (data.length == 1) {
    //
    //
    let country = template_country({
      name: data[0].name,
      name: data[0].name,
      capital: data[0].capital,
      region: data[0].region,
      population: data[0].population,
      flag: data[0].flag,
    });
    //
    //
    refs.mainDiv.innerHTML = country;
    //
  } else if (data.length < 10) {
    // Если найдено от 2 до 10 то выводис список
    const countryArr = data.map(element => {
      return element.name;
    });
    //
    let li_country = template_countryList({
      country: countryArr,
    });
    //
    refs.mainDiv.innerHTML = li_country;
    //
  } else {
    // если более 10 вариантов выподим инфо сообшение
    infoMsg(data.length);
  }
}
function fetchCountry() {
  if (this.value.length > 1)
    fetch(`https://restcountries.eu/rest/v2/name/${this.value.toLowerCase()}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status == '404') {
          console.log('ERROR 404');
          errorMsg(data);
        } else {
          renderResult(data);
        }
      })
      .catch(data => {
        console.log(data);
      });
}
function debounce(f, ms) {
  // нашел реализацию в интеренете
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

export { debounce, fetchCountry };
