jQuery(document).on('best_in_place:datepicker', function(event, bip, element) {
  // Display the Bootstrap datepicker popup
  jQuery(element).find('input')
    .datepicker()
    .on('hide', function(){
        bip.update();
    })
    .on('changeDate', function(){
        $(this).datepicker('hide');
    })
    .datepicker('show');
});
