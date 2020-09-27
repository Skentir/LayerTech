$(document).ready(function() {

    // UPDATE PRODUCT
  $(".launchUpdate").click(function(){
      var itemID = $(this).data('id');

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
  /*
  $('#updateForm').submit(function() {
      console.log("Update called")
      var itemID = $(this).data('id');
      var productName = $("#updateproductname").val();
      var quantity = $("#updatequantity").val();
      var basePrice = $("#updatebaseprice").val();
      var sellingPrice = $("#updatesellingprice").val();
      var expiryDate = $("#updateexpiry").val();
      var location = $("#updatelocation").val();
      console.log("Location " + location);

      var object = {
          name: productName,
          quantity: quantity,
          base: basePrice,
          selling: sellingPrice,
          expiry: expiryDate,
          location: location
      }
      
      $.ajax({
           type: "POST",
           data : JSON.stringify(object),
           processData: false,
           contentType: 'application/json',
           url: "/inventory/updateItem/"+itemID,
      }).done(function(data){
          $("#"+itemsID+".productName").val(productName);
          $("#"+itemID+".quantity").val(quantity);
          $("#"+itemID+".basePrice").val(basePrice);
          $("#"+itemID+".sellingPrice").val(sellingPrice);
          $("#"+itemID+".expiryDate").val(expiryDate);
          $("#"+itemID+".location").val(loca);
      });
  }) */
});