"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var registerLink = $('#registerLink');
    var loginLink    = $('#loginLink');
    var logoutLink   = $('#logoutLink');

    var addItemForm  = $('#addItemForm');
    var resetBtn     = $('#resetBtn');
    var errMsg       = $('#errMsg');
    var itemName     = $('#itemName');
    var description  = $('#description');
    var itemsDiv     = $('#itemsDiv');
    var itemsList    = $('#itemsList');
    
    function getAllItems() {
        itemsList.html('');

        $.getJSON(`/items?username=${$('#userNameSpan').html()}`, function() {
        })
        .done(function(items) {
            if (items.length > 0) {
                $.each(items, (indx, item ) => {
                    addItemToPage(item._id, item.name, item.desc)
                });
            }
        })
        .fail(function(err) {
          // Ignore
        });
    }

    function addItemToPage(id, name, desc) {
        var tr = $('<tr>');
        var nameTd = $(`<td>${name}</td>`);
        var descTd = $(`<td>${desc}</td>`);
        var a = document.createElement('a');

        a.setAttribute('href', `/items/${id}`);
        a.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        $(a).click((e) => {
            e.preventDefault();

            // AJAX DELETE TBD
            alert('Functionality not yet implemented!');
        });
        
        var deleteTd = $(`<td class="delete"></td>`);
        deleteTd.append(a);
        tr.append(nameTd);
        tr.append(descTd);
        tr.append(deleteTd);
        itemsList.append(tr);

        description.val('');
        itemName.val('');
        itemName.focus();
    }
    
    function addNewItem(id, name, desc) {
        var data = {};
        data.username = $('#userNameSpan').html();
        data.name     = name;
        data.desc     = desc;

        // POST new Item to DB
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/items/'
        })
        .done(function(res) {
            addItemToPage(res._id, name, desc);
        })
        .fail(function(res) {
            var msg = '';
            
            if (res.status === 400) {
                msg = '<br />Error: An Item with this name already exists.';
            }
            
            errMsg.html(`Add Item failed. Please try again.${msg}`);
            errMsg.show();
        });
    }
    
    // Bind Event Handlers
    logoutLink.click(function(e) {
        e.preventDefault();
        document.location.href="/users/logout";
    });

    resetBtn.click(function() {
        // clear fields
        errMsg.html('');
        errMsg.hide();
        // position cursor
        itemName.focus();
    });
    
    addItemForm.submit(function(event) {
        event.preventDefault();
        
        errMsg.html('');
        errMsg.hide();
        
        var data = {};
        data.username = $('#userNameSpan').html();
        data.itemname = itemName.val().trim();
        data.description = description.val().trim();
        
      // AJAX POST
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/lists/'
      })
      .done(function(res) {
        // Item successfully persisted on server
        addNewItem(0, itemName.val().trim(), description.val().trim());

        itemName.focus();
      })
      .fail(function(res) {
        errMsg.html(`Error:  Unable to save Item ${data.itemname} to list.`);
        errMsg.show();
        itemName.focus();
      });
    });
    
    registerLink.hide();
    loginLink.hide();
    logoutLink.show();
    
	$("table").tablesorter({
		theme: 'blue',
        headers: { 0: { sorter: false}, 1: { sorter: false}, 2: { sorter: false} }
    });
    
    $('#homeContainer').removeClass('hidden');
    $('#itemsDiv').removeClass('hidden');

    getAllItems();
});
