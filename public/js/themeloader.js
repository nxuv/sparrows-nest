if (getOrInitCookie("dark-enabled", false) == "true") {
    document.head.innerHTML += '<link rel="stylesheet" href="/css/theme-dark.css" type="text/css"/>';
} else {
    document.head.innerHTML += '<link rel="stylesheet" href="/css/theme-light.css" type="text/css"/>';
}


