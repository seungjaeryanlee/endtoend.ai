$(document).ready(() => {
    // Home page: index.md
    $('.featured-card__tags__tag').on('click', (e) => {
        let link = $(e.target).attr("goto");
        window.location.replace(link);
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
    });
    $('.featured-card').on('click', (e) => {
        let link = $('.featured-card').attr("goto");
        window.location.replace(link);
    });
});
