/* -------------------------------------------------------------------------- */
/*                               Simple carousel                              */
/* -------------------------------------------------------------------------- */

let currentItem = 0;
let maxItem = 0;

addItem("https://datasparrow.itch.io/orientation-an-introductory-zinelet-to-psycho-patrol-r", "/img/books/psycho-patrol.png", descriptionPPR, false);

showItem(0);

resizeGame();

$("#button-left").on("click", function() {
    moveItems(-1);
});

$("#button-right").on("click", function() {
    moveItems(1);
});

$( window ).on("resize", function() {
    resizeGame();
});

function resizeGame() {
    $("#carousel").css("height", window.innerWidth / 6);
    $("#carousel").css("min-height", window.innerWidth / 6);
    $("#carousel").css("max-height", window.innerWidth / 6);
}

function moveItems(dir) {
    currentItem += dir;
    if (currentItem >= maxItem) currentItem = 0;
    if (currentItem < 0) currentItem = maxItem - 1;
    showItem(currentItem);
}

function showItem(num) {
    $("#gamebox > *").hide();
    $("#descbox > *").hide();

    $(`#gamebox > *:eq(${num})`).show();
    $(`#descbox > *:eq(${num})`).show();
}

/**
 * Adds item to GameBox
 * @param {String} link Link to game
 * @param {String} imagepath Path to game image
 * @param {String} gamedescr Markdown of game description
 */
function addItem(link, imagepath, gamedescr, grayscale = false) {
    let $elem = $(`
    <img class="gameimg ${grayscale ? "img-bw":""}" src="${imagepath}"/>
    `);

    let $desc;
    if (link == "") {
        $desc = $(`
        <div class="gamedesc pjs-markdown">
        <p><a style="color:red;">TBA</a></p>
        ${gamedescr}
        </div>`);
    } else {
        $desc = $(`<div class="gamedesc pjs-markdown">
        <p><a href="${link}">Get Now!</a></p>
        ${gamedescr}
        </div>`);
    }

    $("#gamebox").append($elem);
    $("#descbox").append($desc);

    maxItem++;
}
