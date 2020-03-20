/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import './style.css';


$(document).ready(function() {


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
        $('#results').append(`${bike.serial}<br>`)
      }
      // $('#results').append(jsonifiedResponse.bikes[0].serial);
    } catch(e) {
      alert(e.message);
    }
  })();

  
});