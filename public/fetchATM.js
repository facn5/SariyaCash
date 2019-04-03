/*obj = {
  country,
  city
}
*/

function getATMLoc(requestObj){
  fetch('/atmloc?country='+requestObj.country+'&city='+requestObj.city)
  .then(
    function(response) {
      if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
          response.status);
      }
      JSON.parse(response);
      // response.json()
      .then(function(data) {
        // console.log(data);
        return data;
        // console.log(countries);
      })
    }

  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
