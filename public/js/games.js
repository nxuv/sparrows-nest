/* -------------------------------------------------------------------------- */
/*                               Simple carousel                              */
/* -------------------------------------------------------------------------- */

let currentItem = 0;
let maxItem = 0;

addItem("https://data-sparrow.itch.io/fist-world-volga", "/img/games/volga.png", descriptionVolga, true);
addItem("https://data-sparrow.itch.io/tremerine-sea-of-the-stars", "/img/games/tremerine.png", descriptionTremerine);
addItem("https://data-sparrow.itch.io/shardana-hydro-trail-gp", "/img/games/shardana.png", descriptionShardana);
addItem("https://data-sparrow.itch.io/sirius-treacherous-reaches", "/img/games/sirius.png", descriptionSirius);
addItem("https://datasparrow.itch.io/rebuilding-triunfo", "/img/games/triunfo.png", descriptionTriunfo);
addItem("https://datasparrow.itch.io/roman-blasters", "/img/games/roman.png", descriptionRoman);
addItem("https://datasparrow.itch.io/sulay-rally-raid", "/img/games/sulay.png", descriptionSulay);
addItem("", "/img/games/lutesse.png", descriptionLutesse);

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
        <p><a href="${link}">Buy Game</a></p>
        ${gamedescr}
        </div>`);
    }

    $("#gamebox").append($elem);
    $("#descbox").append($desc);

    maxItem++;
}
