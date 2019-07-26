// Allow clicking tags
$(document).ready(() => {
    // Home page: home.html
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

    // Blog page: blog.html
    $('.post__summary__tags__tag').on('click', (e) => {
        let link = $(e.target).attr("goto");
        window.location.replace(link);
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
    });
    $('.post-container .post').on('click', (e) => {
        // Find the correct .post class surrounding whatever is clicked
        let block = $(e.target);
        while (!block.attr("goto")) {
            block = block.parent()
        }
        let link = block.attr("goto");
        window.location.replace(link);
    });
});
