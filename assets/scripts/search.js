function doSearch() {
    $('#papers .paper').each(function() {
        if ($(this).find('.paper__info__title').text().includes($('#papers-search-box').val())) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
