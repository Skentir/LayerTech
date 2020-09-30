$(document).ready(function() {

  var itemID;
    // UPDATE PRODUCT
  $(".launchUpdate").click(function(){
      itemID = $(this).data('id');

    $.ajax({
          type: "GET",
          url: "/suppliers/getSupplierDetails/"+itemID,
        }).done(function(data) {
            $("#updateSuppName").val(data.name);
            $("#updatePosition").val(data.position);
            $("#updateCompany").val(data.companyName);
            $("#updateContact").val(data.contactNo);
            $("#updateEmail").val(data.email);
            $("#updateTerms").val(data.contractTerms);
            $("#updateNotes").val(data.notes);
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
  
   // DELETE PRODUCT
   $(".launchDelete").click(function(){
      var itemID = $(this).data('id');
      $.ajax({
        url: "/suppliers/deleteItem/"+itemID,
        type: 'DELETE'
      });
  });
});