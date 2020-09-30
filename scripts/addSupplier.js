$(document).ready(function() {

  var itemID;

    $(".filterName").click(function() {
        $(".inventorytable tbody tr").remove();
        $.ajax({
            type: "GET",
            url: "/suppliers/sortByName"
        }).done(function(data) {
            var res = "";
            data.forEach(function(entry) {
                var row = 
                    `<tr id={`+entry._id+`>
                        <td class="name">`+entry.name+`</td>
                        <td class="position">`+entry.position+`</td>
                        <td class="company">`+entry.companyName+`</td>
                        <td class="contact">`+entry.contactNo+`</td>
                        <td class="email">`+entry.email+`</td>
                        <td class="contract">`+entry.contractTerms+`</td>
                        <td class="notes">`+entry.notes+`</td>
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
  
  var deleteID;
    $(this).on('click','.launchDelete',function(){
        deleteID = $(this).data('id');
    });

    $(this).on('click','#btnDeleteItem',function(){
        $.ajax({
            url: "/suppliers/deleteItem/"+deleteID,
            type: 'DELETE'
        });
    });
});