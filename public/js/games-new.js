/* -------------------------------------------------------------------------- */
/*                               Simple carousel                              */
/* -------------------------------------------------------------------------- */

let currentItem = 0;
let maxItem = 0;
let boxes = [];

onContentLoaded(() => {
    boxes = $(".gamedesc");
    maxItem = boxes.length;

    if (window.location.hash) {
        currentItem = parseInt(window.location.hash.substring(1) - 1);
    }
    showItem(currentItem);

    $("#button-left").addEventListener("click", function() {
        moveItems(-1);
    });

    $("#button-right").addEventListener("click", function() {
        moveItems(1);
    });
})

function moveItems(dir) {
    currentItem += dir;
    if (currentItem >= maxItem) currentItem = 0;
    if (currentItem < 0) currentItem = maxItem - 1;
    showItem(currentItem);
}

function showItem(num) {
    window.location.hash = `#${num + 1}`;
    for (let el of boxes) hide(el);

    show(boxes[num]);
}

