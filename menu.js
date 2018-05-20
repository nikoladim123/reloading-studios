var nav_tablet_switch = document.getElementById('nav-tablet-switch');
var nav_drop_menu_tablet = document.getElementById('nav-drop-menu-tablet');
var swch = 0;

nav_tablet_switch.onclick = function(){
  if(swch === 0){
    nav_drop_menu_tablet.style.display = "block";
    nav_tablet_switch.style.opacity = "1";
    swch = 1;
    return;
  }
  if(swch === 1){
    nav_drop_menu_tablet.style.display = "none";
    nav_tablet_switch.style.opacity = "0";
    swch = 0;
    return;
  }

};
