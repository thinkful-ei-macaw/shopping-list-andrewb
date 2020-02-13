/* eslint-disable indent */
'use strict';

$(function() {
  
  let list = $('.shopping-list');

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
  
    let newItem = `<li><span class="shopping-item">${item}</span>
                    <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                    </div>
                    </li>`;

    list.append(newItem);
    
    $('#shopping-list-entry').val('');
    
    });

list.on('click', '.shopping-item-toggle', function() {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

list.on('click', '.shopping-item-delete', function() {
      $(this).closest('li').remove();
});



  
  
});