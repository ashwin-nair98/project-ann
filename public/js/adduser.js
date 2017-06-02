$(document).ready(function(){

  $('form').on('submit', function(){

      var user = $('form input');
      /*var user = {name: item.val()};*/
      console.log(user.name.val())
      return true;
      /*$.ajax({
        type: 'POST',
        url: '/adduser',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;
      */

  });

});
