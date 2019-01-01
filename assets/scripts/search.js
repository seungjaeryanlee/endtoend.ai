function doSearch() {
    $('#papers .paper').each(function() {
        if ($(this).find('.paper__info__title').text().toLowerCase().includes($('#papers-search-box').val().toLowerCase())) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
