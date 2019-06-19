$(function (){
   $('body > header .nav_three .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   $('body > header .nav_three .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
   });
   
   isNavBarHidden = true;
   $('#menu_icon').click(function (){
       if(isNavBarHidden){
           $('body > header .nav_three .nav_bar').fadeIn("slow"); 
           isNavBarHidden = false;
       }
        else{
            $('body > header .nav_three .nav_bar').fadeOut("slow"); 
           isNavBarHidden = true;
        }
   });
});
