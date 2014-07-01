
/*

    @ custom jquery

*/
    /* hide nav after click on smaller devices */
    $(".nav-btn").click(function() {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });

    /* scrolling nav */
    $("#home-btn").click(function(){ 
        $('html, body').animate(
            { scrollTop: 0 }, 
            1000
        );
        return false;
     } );
    $("#skills-btn").click(function(){ 
        $('html, body').animate({
            scrollTop: $(".section-skills").offset().top
        }, 1000);
        return false;
     } );
    $("#tools-btn").click(function(){ 
        $('html, body').animate({
            scrollTop: $(".section-tools").offset().top
        }, 1000);
        return false;
     } );
    $("#works-btn").click(function(){ 
        $('html, body').animate({
            scrollTop: $(".section-works").offset().top
        }, 1000);
        return false;
     } );
    $("#profile-btn").click(function(){ 
        $('html, body').animate({
            scrollTop: $(".section-profile").offset().top
        }, 1000);
        return false;
     } );

    /* window scroll for tools */
    $(window).scroll(function(){
        // $(".skills-icon").stop().css("transform","rotate(360deg)");
        var r = $(".navbar").offset().top;
        var s = $(".section-skills").offset().top;

        var rr = r;
        var st = s - 10;
        var ss = s + 500;

        // if(r > s){
        if(r > st){ 
            $(".skills-inner-wrapper").css({"background":"#444","border-color":"#999"});
            $(".skills-icon").css("color","#90C7E2")
        }  
        else{
            $(".skills-inner-wrapper").css({"background":"#444","border-color":"#555"});
            $(".skills-icon").css("color","#666")
        }  

        if(r > ss){    
            // $(".skills-icon").css("transform","rotate(360deg)");
            $(".tools-icon").css("color","#666");

            $(".tool-hc").css("width","80%");
            $(".tool-sa").css("width","80%");
            $(".tool-bt").css("width","80%")
            
            $(".tool-ja").css("width","60%");
            $(".tool-jq").css("width","75%");
            $(".tool-bb").css("width","30%")
            

            $(".tool-wp").css("width","75%");
            $(".tool-php").css("width","35%");
            $(".tool-ko").css("width","60%");


            $(".tool-gi").css("width","75%")



        }
        else{
            // $(".skills-icon").css("color","#666");
            $(".tools-icon").css("color","#666");
            $(".tool-bar__skill").css("width","20%")      
        };
    });

    /* work pieces effect */
    $(".inner-wrapper-works").hover(
        function(){
            // var that = $(this);
            $(this).children().stop().animate(
                // {'top':"75px" },
                {"top":"0" },
                200
            )    
        },
        function(){
            // var that = $(this);
            $(this).children().stop().animate(
                // {'top':"75px" },
                {"top":"280px" },
                200
            )    
        }
    );

    $(".works-link").bind(
        {
            click:function(){
                var that = $(this);
                $(this).siblings(".inner-wrapper-works").children().stop().animate(
                    // {'top':"75px" },
                    {"top":"0", "color":"#90C7E2;" },
                    200,
                    function(){
                        // $(that).children().text("View Site");
                    }
                )
                return false;
            },
            mouseover: function(){
                var that = $(this);
                $(this).siblings(".inner-wrapper-works").children().stop().animate(
                    // {'top':"75px" },
                    {"top":"0" },
                    200,
                    function(){
                        // $(that).children().text("View Site");
                    }
                )
            },
            mouseleave: function(){
                var that = $(this);
                $(this).siblings(".inner-wrapper-works").children().stop().animate(
                
                    {"top":"280px" },
                    200,
                    function(){
                        // $(that).children().text("More Info");
                    }
                )  
            }

        }    
    );
    /*  text resize via flowtype plugin*/
    $(".heading-main").flowtype({ minimum: 300,maximum: 1200,minFont: 12,maxFont: 50,fontRatio:10
    });
    $(".heading-mid").flowtype({ minimum: 200,maximum: 1000,minFont: 12,maxFont: 60,fontRatio:10
    });