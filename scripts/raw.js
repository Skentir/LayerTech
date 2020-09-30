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


  $('#updateForm').submit(function() {
        var raw = $("#updateRawMaterial").val();
        var supp = $("#updateSupp").val();
        var quantity = $("#updateQuantity").val();
        var unit = $("#updateUnit").val();
        var cost = $("#updateCost").val();
        var bought = $("#updateBought").val();
        var expiry = $("#updateExpiry").val();
        var location = $("#updateLocation").val();

        var object = {
            raw : raw,
            supplier : supp,
            expiry : expiry,
            bought : bought,
            quantity: quantity,
            location: location,
            unit: unit,
            cost: cost,
            location: location
        }
        
        $.ajax({
            type: "POST",
            data : JSON.stringify(object),
            processData: false,
            contentType: 'application/json',
            url: "/raw/updateStock/"+itemID,
        }).done(function(data){
            
            $("#"+itemID+".rawMaterial").val(raw);
            $("#"+itemID+".supplier").val(supp);
            $("#"+itemID+".dateBought").val(bought);
            $("#"+itemID+".quantity").val(quantity);
            $("#"+itemID+".unit").val(unit);
            $("#"+itemID+".cost").val(cost);
            $("#"+itemID+".expiry").val(expiry);
            $("#"+itemID+".location").val(location);
        });
    });
    
    $(".launchDelete").click(function(){
        var itemID = $(this).data('id');
        $.ajax({
            url: "/raw/deleteItem/"+itemID,
            type: 'DELETE'
        });
    });
});