
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
              
              console.log(finalDate);
              $("#updateexpiry").val(finalDate);

          }).fail(function(){
              alert("Can't fetch this item.")
          });
    });
    
    $('#updateForm').submit(function() {
        console.log("Update called")
        var itemID = $(this).data('id');
        var productName = $("#updateproductname").val();
        var quantity = $("#updatequantity").val();
        var basePrice = $("#updatebaseprice").val();
        var sellingPrice = $("#updatesellingprice").val();
        var expiryDate = $("#updateexpiry").val();
        var location = $("#updatelocation").val();

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
             url: "/updateItem/"+itemID,
        }).done(function(data){
            $("#"+itemsID+".productName").val(productName);
            $("#"+itemID+".quantity").val(quantity);
            $("#"+itemID+".basePrice").val(basePrice);
            $("#"+itemID+".sellingPrice").val(sellingPrice);
            $("#"+itemID+".expiryDate").val(expiryDate);
            $("#"+itemID+".location").val(loca);
        });
    })

    
    // ADD PRODUCT 
    function addProduct(item, parentDiv){
        var rowDiv = document.createElement('div');
        var idCol = document.createElement('div');
        var prodNameCol = document.createElement('div');
        var exDateCol = document.createElement('div');
        var dateBoughtCol = document.createElement('div');
        var quantityCol = document.createElement('div');
        var basePriceCol = document.createElement('div');
        var sellPriceCol = document.createElement('div');

        var id = document.createElement('td');
        var prod = document.createElement('td');
        var exDate = document.createElement('td');
        var dateBought = document.createElement('td');
        var quantity = document.createElement('td');
        var basePrice = document.createElement('td');
        var sellPrice = document.createElement('td');

        $(rowDiv).addClass("inventorytable");

        $(id).text(item.id);
        $(prod).text(item.prod);
        $(exDate).text(item.exDate);
        $(dateBought).text(item.dateBought);
        $(quantity).text(item.quantity);
        $(basePrice).text(item.basePrice);
        $(sellPrice).text(item.sellPrice);

        idCol.append(id);
        prodNameCol.append(prodName);
        exDateCol.append(exDate);
        dateBoughtCol.append(dateBought);
        quantityCol.append(quantity);
        basePriceCol.append(basePrice);
        sellPriceCol.append(sellPrice);
        
        rowDiv.append(idCol);
        rowDiv.append(prodNameCol);
        rowDiv.append(exDateCol);
        rowDiv.append(dateBoughtCol);
        rowDiv.append(quantityCol);
        rowDiv.append(basePriceCol);
        rowDiv.append(sellPriceCol);

        parentDiv.append(rowDiv);
    };

    $.get('/inventory/getProducts', function(data, status){
        var productListContainer = $(products);

        data.forEach((item, i) => {
            addProducts(item, productListContainer);
        });
    });

    //change ID names to new format
    $('#products').click(function() {
        var id = $('#id').val();
        var prod = $('#prod').val();
        var exDate = $('#exDate').val();
        var dateBought = $('#dateBough').val();
        var quantity = $('#quantity').val();
        var basePrice = $('#basePrice').val();
        var sellPrice = $('#sellPrice').val(); 

        var newProduct = {
            id: id,
            prod: prod,
            exDate: exDate,
            dateBought: dateBought,
            quantity: quantity,
            basePrice: basePrice,
            sellPrice: sellPrice
        };

        //Change ID to match with new format
        $.post('/inventory/addProduct', newProduct, function(data, status){
            var productListContainer = $('#productList');
            addProduct(data, productListContainer);
        });

    });
    
});
