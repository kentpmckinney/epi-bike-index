import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


$(document).ready(function () {

  (async () => {
    try {
      let response = await fetch(`https://bikeindex.org/api/v3/bikes_search/stolen?per_page=10`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      for (let bike of jsonifiedResponse.bikes) {
        $('#results').append(`${bike.serial}<br>`);
      }
    } catch (e) {
      alert(e.message);
    }
  })();

});