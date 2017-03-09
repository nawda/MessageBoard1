$('#register').on('submit', function(ev) {
  ev.preventDefault();
  let message = {
    username: $('#name').val(),
    message: $('#message').val()
  };
  console.log(message);
  $.ajax({
    type: 'POST',
    url: 'http://originmessages.herokuapp.com/messages',
    data: JSON.stringify(message),
    contentType:"application/json",
    dataType: "json"

  });
  return false;
});
