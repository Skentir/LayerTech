
$(document).ready(function() {

      // UPDATE PRODUCT
    $(".launchUpdate").click(function(){
        var itemID = $(this).data('id');

      $.ajax({
            type: "GET",
            url: "/inventory/getItemDetails/"+itemID,
          }).done(function(data) {
              $("#updateproductname").val(data.productName);
              $("#updatequantity").val(data.quantity);
              $("#updatebaseprice").val(data.basePrice);
              $("#updatesellingprice").val(data.sellingPrice);
              $("#updatelocation").val(data.location);
              $("#updateForm").attr('data-id', data._id);
              var parsedDate = new Date(data.expirationDate);
              var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDay() + 1)).slice(-2);
              $("#updateexpiry").val(finalDate);

          }).fail(function(){
              alert("Can't fetch this item.")
          });
    });

    $('#updateForm').submit(function() {
        console.log("Update called")
        var itemID = $(this).data('id');
        console.log("ID" + itemID)
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
    })

    var deleteID;
    $(".launchDelete").click(function(){
        deleteID = $(this).data('id');
    });

    $("#btnDeleteItem").click(function(){
        $.ajax({
            url: "/inventory/deleteItem/"+deleteID,
            type: 'DELETE'
        });
    });

    
});
