document.querySelector("#theme-button").addEventListener("click", function() {
    let c = getCookie("dark-enabled");
    if (c == "false") c = true; else c = false;
    setCookie("dark-enabled", c, 365);
    window.location.reload();
});

