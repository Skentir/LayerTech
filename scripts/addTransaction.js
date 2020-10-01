$(document).ready(function() {

    var itemID;
      // UPDATE PRODUCT
    $(".launchUpdate").click(function(){
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
              var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDate() + 1)).slice(-2);
              $("#updateDate").val(finalDate);
              parsedDate = new Date(data.dateDue);
              finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDate() + 1)).slice(-2);
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
});