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
    var name = $("#updateSuppName").val();
    var position = $("#updatePosition").val();
    var company = $("#updateCompany").val();
    var contact = $("#updateContact").val();
    var email = $("#updateEmail").val();
    var contract = $("#updateTerms").val();
    var notes = $("#updateNotes").val();

    console.log("Item" + itemID)

    var object = {
        name: name,
        position: position,
        company: company,
        contactNo: contact,
        email: email,
        contract: contract,
        notes: notes
    }
    
    $.ajax({
         type: "POST",
         data : JSON.stringify(object),
         processData: false,
         contentType: 'application/json',
         url: "/suppliers/updateSupplier/"+itemID,
    }).done(function(data){
        $("#"+itemsID+".name").val(name);
        $("#"+itemID+".position").val(position);
        $("#"+itemID+".company").val(company);
        $("#"+itemID+".contact").val(contact);
        $("#"+itemID+".email").val(email);
        $("#"+itemID+".contract").val(contract);
        $("#"+itemID+".notes").val(notes);
    });
}) 
});