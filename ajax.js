document.addEventListener("DOMContentLoaded", function() {

   var button = document.querySelector('button');

  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'get',
  data: {},
  dataType: 'text'
});


});
