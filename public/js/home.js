"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var registerLink = $('#registerLink');
    var loginLink    = $('#loginLink');
    var logoutLink  = $('#logoutLink');

    var addItemForm  = $('#addItemForm');
    var resetBtn     = $('#resetBtn');
    var errMsg       = $('#errMsg');
    var itemName     = $('#itemName');
    var description  = $('#description');
    var itemsDiv     = $('#itemsDiv');
    var itemsList    = $('#itemsList');
    
    function getAllItems() {
        itemsList.html('');
        
        // AJAX GET TBD
    }
    
    function addNewItem(id, name, desc) {
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
    
    // Bind Event Handlers
    logoutLink.click(function(e) {
        e.preventDefault();

        // call funct in utils.js
        removeLoginStatus($('#userNameSpan').text(), false, '/') ;
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
        data.itemName = itemName.val().trim();
        data.description = description.val().trim();
        
        // AJAX POST TBD
        addNewItem(0, itemName.val().trim(), description.val().trim());
    });
    
    getAllItems();
    
    registerLink.hide();
    loginLink.hide();
    logoutLink.show();
    
	$("table").tablesorter({
		theme: 'blue',
        headers: { 0: { sorter: false}, 1: { sorter: false}, 2: { sorter: false} }
    });
    
    // There really should be localStorage support...
    if (localStorargeSupported()) {
        if (getLoginStatus()) {
            $('#userNameSpan').text(getPersistedUserName());
            $('#homeContainer').removeClass('hidden');
        } else {
            document.location.href = '/error.html';
        }
    } else { // but, just in case...
        $('#homeContainer').removeClass('hidden');
    }
});
