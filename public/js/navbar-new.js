// -- //

if (getOrInitCookie("dark-enabled", false) == "true") {
    document.head.innerHTML += '<link rel="stylesheet" href="/css/theme-dark.css" type="text/css"/>';
} else {
    document.head.innerHTML += '<link rel="stylesheet" href="/css/theme-light.css" type="text/css"/>';
}

let $navbar = $(`
    <div id="navbar">
        <a class="navitem" href="/index.html">HOME</a>
        <a class="navitem" href="/html/games.html">GAMES</a>
        <a class="navitem" href="/html/books.html">BOOKS</a>
        <a class="navitem" href="/html/music.html">MUSIC</a>
        <a class="navitem" href="/html/mods.html">MODS</a>
        <a class="navitem" href="/html/contact.html">CONTACT</a>
        <a class="navitem" href="/html/about.html">ABOUT</a>
        <a class="navitem" href="/html/links.html">LINKS</a>
        <button class="navitem" id="theme-button"></button>
    </div>
    `);

let $style = $(`<link rel="stylesheet" href="/css/navbar.css" />`);

let $footer = $(`
    <div id="footer">
        <div id="footer-top"></div>
        <div id="footer-bottom"></div>
    </div>
    `);


$("body").prepend($navbar);
$("body").append($footer);
$("head").append($style);

$("#theme-button").on("click", function() {
    let c = getCookie("dark-enabled");
    if (c == "false") c = true; else c = false;
    setCookie("dark-enabled", c, 365);
    window.location.reload();
});

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i in ca) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function getOrInitCookie(cname, cdef) {
    let c = getCookie(cname);
    if (c == "" || c == null) {
        c = cdef;
        setCookie(cname, c, 365);
    }
    return c;
}

// let path = window.location.pathname;
// let page = path.split("/").pop();
// let count = $("#navbar").children().length;
// console.log(count);
// for (let i = 0; i < count; i ++) {
//     let $e = $(`#navbar > a:eq(${i})`);
//     console.log($e);
//     console.log($e.prop("href"));
//     console.log($e.prop("href").split("/").pop());
//     if ($e.prop("href").split("/").pop() == page ) {
//         $e.prop("id", "current-page");
//         break;
//     }
// }

