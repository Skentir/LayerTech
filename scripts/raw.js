$(document).ready(function(){
  
    var itemID;

    $(".filterRawMaterial").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/raw/sortByRawMaterial"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="rawMaterial">`+ entry.rawMaterial +`</td>
                        <td class="supplier">`+ entry.supplier +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td>`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="location">`+entry.location+`</td> 
                        <td class="unit">Php `+ entry.unit+`</td>
                        <td class="cost">Php `+entry.cost+`</td>
                       
                        
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


  //$('#updateForm').submit(function() {
    $(this).on('submit','#updateForm', function() {
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
    
    var deleteID;
    $(".launchDelete").click(function(){
        deleteID = $(this).data('id');
    });

    $("#btnDeleteItem").click(function(){
        $.ajax({
            url: "/raw/deleteItem/"+deleteID,
            type: 'DELETE'
        });
    });
});

