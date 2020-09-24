
$(document).ready(function() {

     // UPDATE PRODUCT
     $(".launchUpdate").click(function(){
        console.log("Update btn launch");
        var itemID = $(this).data('id');

      $.ajax({
            type: "GET",
            url: "/getItemDetails/"+itemID,
          }).done(function(data) {
              alert("This item is " + data.productName)
          }).fail(function(){
              alert("Can't fetch this item.")
          });
      });
    /*
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

    $.get('getProducts', function(data, status){
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
        $.post('addProduct', newProduct, function(data, status){
            var productListContainer = $('#productList');
            addProduct(data, productListContainer);
        });
    });
    */
});
