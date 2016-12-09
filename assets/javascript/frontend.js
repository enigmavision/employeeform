$(document).ready(function() {
    //confirm your js!
    console.log('JS is linked');
    //on click of get data button, populate our tables with our DB data.
    $('#getDataBtn').on('click', function() {
        //AJAX our DB with a GET request to a route we've set up.
        $.ajax({
            url: '/getMyData',
            method: 'GET'
        }).done(function(res) {
            //with the received response, do the following.

            //always check your data so you can parse through it.
            console.log(res);

            //delete old data from the table to avoid a long list of duplicates on your webpage.
            $('#dataTable').html('');

            //placeholder value to hold our upcoming table data.
            let dataToInsert = '';

            //loop through returned results of our ajax call and create table rows.

            for (let i = 0; i < res.length; i++) {
                dataToInsert +=
                    '<tr>' +
                    '<th>' + res[i].first_name + '</th>' +
                    '<th>' + res[i].last_name + '</th>' +
                    '<th>' + res[i].age + '</th>' +
                    '<th>' + res[i].enjoys + '<th>' +
                    '</tr>';
            }; //end loop

            //once loop is finished, shove all that data onto the page.
            $('#dataTable').html(dataToInsert);
            
        }); //end done
    }); //end click
}); //End document.ready
