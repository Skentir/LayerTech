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
              var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDay() + 1)).slice(-2);
              $("#updateDate").val(finalDate);
          }).fail(function(){
              alert("Can't fetch this item.")
          });
    });


  $('#updateForm').submit(function() {
    var desc = $("#updateDesc").val();
    var date = $("#updateDate").val();
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
        $("#"+itemID+".amount").val(amount);
        $("#"+itemID+".type").val(type);
        $("#"+itemID+".payee").val(payee);
        $("#"+itemID+".payer").val(payer);
        $("#"+itemID+".contact").val(contact);
        $("#"+itemID+".notes").val(notes);
    });
}) 
});