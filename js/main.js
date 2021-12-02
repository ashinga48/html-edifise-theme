/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var load_home = function(){
   $(".edifise_text,.LogoHolder,.overlay").hide(0);
//   
//   $("img.lazy").lazyload();
}

$("document").ready(function(){
    setTimeout(function(){
        load_home();
    },4000);
    
    
    $('.mainNav .collapsible').collapsible({
      
    });
  
    $("#nav-mobile .menu-item-has-children > a").click(function(e){
        e.preventDefault(); 
    });
    $("#slide-out .menu-item-has-children > ul").slideUp(200);
    $("#slide-out .menu-item-has-children > a").click(function(e){
        e.preventDefault(); 
        $(this).parent().children("ul").slideToggle(200);
    });
    $('.mainmenu').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
      );
});
