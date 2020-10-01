$(document).ready(function() {
    var month = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
    var itemID;

    $(".filterDue").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/transactions/sortByDue"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var due = new Date(entry.dateDue);
                var finalDue= month[due.getMonth()]+ " " + due.getDate() +", "+due.getFullYear();
                var start = new Date(entry.dateStarted);
                var finalDate = month[start.getMonth()]+ " " + start.getDate() +", "+start.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="desc">`+entry.description+`</td>
                        <td class="date">`+finalDate+`</td>
                        <td class="due">`+finalDue+`</td>
                        <td class="amount"> Php `+ entry.amount+`</td>
                        <td class="type"> `+entry.type+`</td>
                        <td class="payee">`+entry.payee+`</td>
                        <td class="payer">`+entry.payer+`</td>
                        <td class="contact">`+entry.payerContact+`</td> 
                        <td class="notes">`+entry.notes+`</td>
                        <td>
                            <button class="button launchUpdate" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#updateModal">Update</button>
                        </td>
                        <td>
                            <button class="button launchDelete" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#deleteModal">Delete</button>
                        </td>
                    </tr>`
                $('.inventorytable tbody').append(row)
            });
        });
    });

    $(".filterDate").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/transactions/sortByStart"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var due = new Date(entry.dateDue);
                var finalDue= month[due.getMonth()]+ " " + due.getDate() +", "+due.getFullYear();
                var start = new Date(entry.dateStarted);
                var finalDate = month[start.getMonth()]+ " " + start.getDate() +", "+start.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="desc">`+entry.description+`</td>
                        <td class="date">`+finalDate+`</td>
                        <td class="due">`+finalDue+`</td>
                        <td class="amount"> Php `+ entry.amount+`</td>
                        <td class="type"> `+entry.type+`</td>
                        <td class="payee">`+entry.payee+`</td>
                        <td class="payer">`+entry.payer+`</td>
                        <td class="contact">`+entry.payerContact+`</td> 
                        <td class="notes">`+entry.notes+`</td>
                        <td>
                            <button class="button launchUpdate" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#updateModal">Update</button>
                        </td>
                        <td>
                            <button class="button launchDelete" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#deleteModal">Delete</button>
                        </td>
                    </tr>`
                $('.inventorytable tbody').append(row)
            });
        });
    });

    $(".filterAmount").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/transactions/sortByAmount"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var due = new Date(entry.dateDue);
                var finalDue= month[due.getMonth()]+ " " + due.getDate() +", "+due.getFullYear();
                var start = new Date(entry.dateStarted);
                var finalDate = month[start.getMonth()]+ " " + start.getDate() +", "+start.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="desc">`+entry.description+`</td>
                        <td class="date">`+finalDate+`</td>
                        <td class="due">`+finalDue+`</td>
                        <td class="amount"> Php `+ entry.amount+`</td>
                        <td class="type"> `+entry.type+`</td>
                        <td class="payee">`+entry.payee+`</td>
                        <td class="payer">`+entry.payer+`</td>
                        <td class="contact">`+entry.payerContact+`</td> 
                        <td class="notes">`+entry.notes+`</td>
                        <td>
                            <button class="button launchUpdate" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#updateModal">Update</button>
                        </td>
                        <td>
                            <button class="button launchDelete" data-id=`+entry._id+` type="button" data-toggle="modal" data-target="#deleteModal">Delete</button>
                        </td>
                    </tr>`
                $('.inventorytable tbody').append(row)
            });
        });
    });
     
    $(this).on('click',".launchUpdate",function(){
        itemID = $(this).data('id');
  
      $.ajax({
            type: "GET",
            url: "/transactions/getTransactionDetails/"+itemID,
          }).done(function(data) {
              $("#updateDesc").val(data.description);
              $("#updateAmount").val(data.amount);
              $("#updateType").val(data.type);
              $("#updatePayee").val(data.payee);
              $("#updatePayer").val(data.payer);
              $("#updateContact").val(data.payerContact);
              $("#updateNotes").val(data.notes);
              var parsedDate = new Date(data.dateStarted);
              var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + parsedDate.getDate()).slice(-2) ;
              $("#updateDate").val(finalDate);
              parsedDate = new Date(data.dateDue);
              finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + parsedDate.getDate()).slice(-2) ;
              $("#updateDue").val(finalDate);
          }).fail(function(){
              alert("Can't fetch this item.")
          });
    });


 // $('#updateForm').submit(function() {
  $(this).on('submit','#updateForm', function() {
    var desc = $("#updateDesc").val();
    var date = $("#updateDate").val();
    var due = $("#updateDue").val();
    var amount = $("#updateAmount").val();
    var type = $("#updateType").val();
    var payee = $("#updatePayee").val();
    var payer = $("#updatePayer").val();
    var contact = $("#updateContact").val();
    var notes = $("#updateNotes").val();

    console.log("Item" + itemID)

    var object = {
        description: desc,
        dateAdded: date,
        dateDue: due,
        amount: amount,
        type: type,
        payee: payee,
        payer: payer,
        payerContact: contact,
        notes: notes
    }
    
    $.ajax({
         type: "POST",
         data : JSON.stringify(object),
         processData: false,
         contentType: 'application/json',
         url: "/transactions/updateTransaction/"+itemID,
    }).done(function(data){
        $("#"+itemsID+".desc").val(desc);
        $("#"+itemID+".date").val(date);
        $("#"+itemID+".due").val(due);
        $("#"+itemID+".amount").val(amount);
        $("#"+itemID+".type").val(type);
        $("#"+itemID+".payee").val(payee);
        $("#"+itemID+".payer").val(payer);
        $("#"+itemID+".contact").val(contact);
        $("#"+itemID+".notes").val(notes);
    });
  })

  var deleteID;
  $(this).on('click',".launchDelete",function(){
      deleteID = $(this).data('id');
  });

  $(this).on('click',"#btnDeleteItem",function(){
      $.ajax({
          url: "/transactions/deleteItem/"+deleteID,
          type: 'DELETE'
      });
  });

  var suppNames = [];
    
    $.ajax({
        type: "GET",
        url: "/suppliers/getPersonNames",
    }).done(function (data) {
        console.log(data)
        for (var i=0; i < data.length; i++)
            suppNames.push(data[i].name)
        })
    .fail(function()  {
        alert("Sorry. Server unavailable. ");
    });

    $( "#updatePayee" ).autocomplete({
        source: suppNames
    });

    $('#autoName').autocomplete({
        source: suppNames
    });

});