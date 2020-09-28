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
});