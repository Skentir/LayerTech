$(document).ready(function(){
  
    var itemID;

  $(".launchUpdate").click(function(){
      itemID = $(this).data('id');

    $.ajax({
          type: "GET",
          url: "/raw/getStockDetails/"+itemID,
        }).done(function(data) {
            $("#updateRawMaterial").val(data.rawMaterial);
            $("#updateQuantity").val(data.quantity);
            $("#updateSupp").val(data.supplier);
            $("#updateUnit").val(data.unit);
            $("#updateCost").val(data.cost);
            $("#updateLocation").val(data.location);
            var parsedDate = new Date(data.dateBought);
            var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDay() + 1)).slice(-2);
            $("#updateBought").val(finalDate);
            parsedDate = new Date(data.expirationDate);
            finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + (parsedDate.getDay() + 1)).slice(-2);
            $("#updateExpiry").val(finalDate);
        }).fail(function(){
            alert("Can't fetch this item.")
        });
  });
    
    
    
    
    
    
})