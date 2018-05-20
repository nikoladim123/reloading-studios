var nav_tablet_switch = document.querySelector('#nav-tablet-switch');
var nav_drop_menu_tablet = document.querySelector('#nav-drop-menu-tablet');
var swch = 0;

nav_tablet_switch.onclick = function(){
  if(swch === 0){
    nav_drop_menu_tablet.style.display = "block";
    swch = 1;
  }
  if(swch === 1){
    nav_drop_menu_tablet.style.display = "none";
    swch = 0;
  }
};

var bla = prompt('blabla');
bla();
