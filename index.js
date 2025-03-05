var menu_toggle = document.querySelector('.menu_toggle');
var menu = document.querySelector('.menu');
var menu_toggle_span = document.querySelector('.menu_toggle span');

menu_toggle.onclick = function () {
 alert("vous avez cliqué sur le menu")
 menu_toggle.classList('active');
 menu_toggle_span.classList('active');
 menu.classList.toggle('responsive');
}
