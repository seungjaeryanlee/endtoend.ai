// Used in 2019-01-31-obstacle-tower-3.md
const ACTION_TO_DESCRIPTION = {
    '0 0 0 0': 'Do nothing.',
    '0 0 0 1': 'Move right.',
    '0 0 0 2': 'Move left.',
    '0 0 1 0': 'Jump.',
    '0 0 1 1': 'Jump right.',
    '0 0 1 2': 'Jump left.',
    '0 1 0 0': 'Turn camera counterclockwise.',
    '0 1 0 1': 'Turn camera counterclockwise while moving right.',
    '0 1 0 2': 'Turn camera counterclockwise while moving left.',
    '0 1 1 0': 'Turn camera counterclockwise while jumping.',
    '0 1 1 1': 'Turn camera counterclockwise while jumping right.',
    '0 1 1 2': 'Turn camera counterclockwise while jumping left.',
    '0 2 0 0': 'Turn camera clockwise.',
    '0 2 0 1': 'Turn camera clockwise while moving right.',
    '0 2 0 2': 'Turn camera clockwise while moving left.',
    '0 2 1 0': 'Turn camera clockwise while jumping.',
    '0 2 1 1': 'Turn camera clockwise while jumping right.',
    '0 2 1 2': 'Turn camera clockwise while jumping left.',
    '1 0 0 0': 'Move forward.',
    '1 0 0 1': 'Move forward right.',
    '1 0 0 2': 'Move forward left.',
    '1 0 1 0': 'Jump forward.',
    '1 0 1 1': 'Jump forward right.',
    '1 0 1 2': 'Jump forward left.',
    '1 1 0 0': 'Turn camera counterclockwise while moving forward.',
    '1 1 0 1': 'Turn camera counterclockwise while moving forward right.',
    '1 1 0 2': 'Turn camera counterclockwise while moving forward left.',
    '1 1 1 0': 'Turn camera counterclockwise while jumping forward.',
    '1 1 1 1': 'Turn camera counterclockwise while jumping forward right.',
    '1 1 1 2': 'Turn camera counterclockwise while jumping forward left.',
    '1 2 0 0': 'Turn camera clockwise while moving forward.',
    '1 2 0 1': 'Turn camera clockwise while moving forward right.',
    '1 2 0 2': 'Turn camera clockwise while moving forward left.',
    '1 2 1 0': 'Turn camera clockwise while jumping forward.',
    '1 2 1 1': 'Turn camera clockwise while jumping forward right.',
    '1 2 1 2': 'Turn camera clockwise while jumping forward left.',
    '2 0 0 0': 'Move backward.',
    '2 0 0 1': 'Move backward right.',
    '2 0 0 2': 'Move backward left.',
    '2 0 1 0': 'Jump backward.',
    '2 0 1 1': 'Jump backward right.',
    '2 0 1 2': 'Jump backward left.',
    '2 1 0 0': 'Turn camera counterclockwise while moving backward.',
    '2 1 0 1': 'Turn camera counterclockwise while moving backward right.',
    '2 1 0 2': 'Turn camera counterclockwise while moving backward left.',
    '2 1 1 0': 'Turn camera counterclockwise while jumping backward.',
    '2 1 1 1': 'Turn camera counterclockwise while jumping backward right.',
    '2 1 1 2': 'Turn camera counterclockwise while jumping backward left.',
    '2 2 0 0': 'Turn camera clockwise while moving backward.',
    '2 2 0 1': 'Turn camera clockwise while moving backward right.',
    '2 2 0 2': 'Turn camera clockwise while moving backward left.',
    '2 2 1 0': 'Turn camera clockwise while jumping backward.',
    '2 2 1 1': 'Turn camera clockwise while jumping backward right.',
    '2 2 1 2': 'Turn camera clockwise while jumping backward left.',
}

$( document ).ready(function() {
    $('#action-interpreter').on('input', function(e) {
        const actionText = $('#action-interpreter').val();
        var description = "Wrong format: input should be four numbers. (ex: '0 0 0 0')";
        if(actionText in ACTION_TO_DESCRIPTION) {
            description = ACTION_TO_DESCRIPTION[actionText];
        }
        $('#action-interpretation').text(description);
    });
});
