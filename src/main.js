/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import './style.css';


$(document).ready(function() {


  (async () => {
    try {
      let response = await fetch(`https://bikeindex.org/api/v2/bikes_search/stolen?per_page=10`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      alert(jsonifiedResponse)
    } catch(e) {
      alert(e.message + ' --- ' + jsonifiedResponse);
    }
  })();

  // $('').click(function() {
    
  // });
  
});

/*
Application Id:

w5-bjwnD98pKvRiH1vbUNzlpJbSHDSk-nNgOzO94VXo
Secret:

1vS4JJ488XQ2yLjwUBB0ILkshIQds9HPu2m4N7tw5JM
Callback urls:
https://bikeindex.org/documentation/authorize
*/