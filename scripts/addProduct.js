
$(document).ready(function() {
    var month = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
    var itemID;

    $(".filterName").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortByName"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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

    $(".filterExpiry").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortByExpiry"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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

    $(".filterDateBought").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortByDateBought"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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

    $(".filterBasePrice").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortByBasePrice"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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

    $(".filterSellingPrice").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortBySellingPrice"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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

    $(".filterQuantity").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/inventory/sortByQuantity"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var expiry = new Date(entry.expirationDate);
                var finalExpiry= month[expiry.getMonth()]+ " " + expiry.getDate() +", "+expiry.getFullYear();
                var bought = new Date(entry.dateBought);
                var finalBought = month[bought.getMonth()]+ " " + bought.getDate() +", "+bought.getFullYear();
                var row = 
                    `<tr id=`+entry._id+`>
                        <td class="productName">`+ entry.productName +`</td>
                        <td class="expiry">`+ finalExpiry+`</td>
                        <td> class="bought"`+ finalBought+`</td>
                        <td class="quantity">`+entry.quantity+`</td>
                        <td class="basePrice">Php `+entry.basePrice+`</td>
                        <td class="sellingPrice">Php `+ entry.sellingPrice+`</td>
                        <td class="location">`+entry.location+`</td>
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



      // UPDATE PRODUCT
    $(this).on('click','.launchUpdate',function(){
        itemID = $(this).data('id');

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
              var finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + parsedDate.getDate()).slice(-2);
              $("#updateexpiry").val(finalDate);
              parsedDate = new Date(data.dateBought);
              finalDate = parsedDate.getFullYear() + "-" + ("0" + (parsedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + parsedDate.getDate()).slice(-2);
              $("#updatebought").val(finalDate);
          }).fail(function(){
              alert("Can't fetch this item.")
          });
    });
    
    //$('#updateForm').submit(function() {
    $(this).on('submit','#updateForm', function() {
        console.log("ID" + itemID)
        var productName = $("#updateproductname").val();
        var quantity = $("#updatequantity").val();
        var basePrice = $("#updatebaseprice").val();
        var sellingPrice = $("#updatesellingprice").val();
        var expiryDate = $("#updateexpiry").val();
        var bought = $("#updatebought").val();
        var location = $("#updatelocation").val();

        var object = {
            name: productName,
            quantity: quantity,
            base: basePrice,
            selling: sellingPrice,
            expiry: expiryDate,
            bought: bought,
            location: location
        }
        
        const diffTime = expiry-bought;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if ((diffDays) > 0) {
            $.ajax({
                type: "POST",
                data : JSON.stringify(object),
                processData: false,
                contentType: 'application/json',
                url: "/inventory/updateItem/"+itemID,
            }).done(function(data){
            
                $("#"+itemID+".productName").val(productName);
                $("#"+itemID+".quantity").val(quantity);
                $("#"+itemID+".basePrice").val(basePrice);
                $("#"+itemID+".sellingPrice").val(sellingPrice);
                $("#"+itemID+".expiry").val(expiryDate);
                $("#"+itemID+".bought").val(bought);
                $("#"+itemID+".location").val(location);
            });
        } else
            alert("Illegal Date")
    })

    var deleteID;
    $(this).on('click','.launchDelete',function(){
        deleteID = $(this).data('id');
    });

    $(this).on('click','#btnDeleteItem',function(){
        $.ajax({
            url: "/inventory/deleteItem/"+deleteID,
            type: 'DELETE'
        });
    });

    
});
