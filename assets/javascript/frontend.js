$(document).ready(function(){
  console.log('JS is linked');

  $('#getDataBtn').on('click', function(){
    $.ajax({
      url:'/getMyData',
      method:'GET'
    }).done(function(res){
      console.log(res);

      $('#dataTable').html('');

      let dataToInsert='';

      for(let i=0; i<res.length; i++){
        dataToInsert += '<tr>'
        '<th>' + res[i].first_name + '<th>'
        '<tr>' + '<th>' + res[i].last_name + '<th>'+
        '<tr>' + '<th>' + res[i].age + '<th>'+
        '<tr>' + '<th>' + res[i].enjoys + '<th>' +
      }

      //end loop
      

  });//end done
});//end click
}); //end ready
