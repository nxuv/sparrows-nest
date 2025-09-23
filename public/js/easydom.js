/** Queries element by css selector
 * @param {string} what
 * @returns {HTMLElement|HTMLElement[]}
 */
const $ = function(what) {
    let el = document.querySelectorAll(what);
    if (el.length == 1) return el[0];
    return el;
}

/** Creates new element and appends it to parent if defined
 * @param {string} what
 * @param {HTMLElement=} parent
 * @returns {HTMLElement}
 */
function create(name, parent = null) {
    let el = document.createElement(name);
    if (parent != null) parent.append(el);
    return el;
}

/** Enables element
 * @param {HTMLElement} what
 * @returns {void}
 */
function enable(what) {
    what.disabled = false;
}

/** Disables element
 * @param {HTMLElement} what
 * @returns {void}
 */
function disable(what) {
    what.disabled = true;
}

/** @private */
let __originalDisplayModes = {};

/** Hides element
 * @param {HTMLElement} what
 * @returns {void}
 */
function hide(what) {
    __originalDisplayModes[what] = what.style["display"] ?? "block";
    if (__originalDisplayModes[what] == "none") __originalDisplayModes[what] = "block";
    what.style["display"] = "none";
}

/** Shows element
 * @param {HTMLElement} what
 * @returns {void}
 */
function show(what) {
    what.style["display"] = __originalDisplayModes[what] ?? "block";
}

/** Sanitizes string to safe text format
 * @param {string} str
 * @returns {string}
 */
function sanitizeToString(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


/** Checks if string is valid css color
 * @param {string} col
 * @returns {boolean}
 */
function isValidColor(color){
    return CSS.supports("color", color);
}

/** Maps dictionary of attributes
 * @param {HTMLElement} element - Element to map to
 * @param {Object.<string, any>} attributes - Object with attributes to map
 */
function attrMap(element, attributes) {
    for (let attr of Object.keys(attributes)) {
        element.setAttribute(attr.toString(), attributes[attr]);
    }
}

/** Maps dictionary of css rules
 * @param {HTMLElement} element - Element to map to
 * @param {Object.<string, any>} css - Object with rules to map
 */
function cssMap(element, css) {
    for (let rule of Object.keys(css)) {
        element.style[rule.toString()] = css[rule];
    }
}

/** Performs HTTP request
 * @param {{url: string|URL, type: ("POST"|"GET"|"PATCH"|"DELETE"), headers: Object.<string, string>, body: JSON}} request
 * @returns {Promise<Response>}
 */
async function curl(request) {
    let req;
    if (request.type == "GET" || request.type == "DELETE") {
        req = new Request(request.url, {
            method: request.type,
            headers: request.headers
        });
    } else {
        req = new Request(request.url, {
            method: request.type,
            headers: request.headers,
            body: JSON.stringify(request.body)
        });
    }
    return fetch(req);
}

/** Calls `callback` when page is loaded
 * @param {any} callback - Callback to call
 */
function onContentLoaded(callback) {
    document.addEventListener("DOMContentLoaded", callback);
}

