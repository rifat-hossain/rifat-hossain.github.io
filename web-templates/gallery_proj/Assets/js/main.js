$(document).ready(function () {
      //MODAL
      $(".modal").delay(3000).slideDown(800);
      $(".jsearch").delay(3000).fadeOut(800);
    $(".close").click(function(){
        $(".modal").hide();
        $(".jsearch").show();
        $("nav").css({background: "black"});
      });

      //Search
    var elm_class = ".jsearch";
    var isfull = false;
    $(window).scroll(function () {
		if ($(this).scrollTop() > 140 && isfull == false) {
            $(elm_class).animate({width: '80%'});
            isfull = true;
		} else if($(this).scrollTop() <= 140 && isfull == true) {
            $(elm_class).animate({width: '60%'});
            isfull = false;
		};
      });

      $(".closebtn").click(function(){
            $("#mySidebar").css({width: '0px'});
            $("#main").css({marginLeft: '0px'});
      });
      $(".openbtn").click(function(){
            $("#mySidebar").css({width: '250px'});
            $("#main").css({marginLeft: '250px'});
      });
});


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px 
function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }*/