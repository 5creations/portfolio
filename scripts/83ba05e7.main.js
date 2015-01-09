

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

     $("#home-btn").css("color","#fff")
    /* window scroll for tools */
    $(window).scroll(function(){
        // $(".skills-icon").stop().css("transform","rotate(360deg)");
        var r = $(".navbar").offset().top;

        var h = $(".section-hero").offset().top;
        var s = $(".section-skills").offset().top;
        var t = $(".section-tools").offset().top;
        var p = $(".section-process").offset().top;
        var w = $(".section-works").offset().top;
        var pr = $(".section-profile").offset().top;

        var rr = r;
        var st = s - 10;
        var ss = s + 100;

        // $("").css("color","red");
        $("#home-btn, #skills-btn,#tools-btn, #works-btn, #profile-btn").css("color","#666");

        if( r < s - 10) { 
            $("#home-btn").css("color","#fff");
        }  

        if(r > s -10  && r < t) { 
            $(".skills-inner-wrapper").css({"background":"#444","border-color":"#999"});
            $(".skills-icon").css("color","#90C7E2");
            $("#skills-btn").css("color","#fff")
        }  
        else{
            $(".skills-inner-wrapper").css({"background":"#444","border-color":"#555"});
            $(".skills-icon").css("color","#666")


        }  

        if(r > t - 10 && r < w ){    
            // $(".skills-icon").css("transform","rotate(360deg)");
            $(".tools-icon").css("color","#666");

            $(".tool-hc").css("width","80%");
            $(".tool-css").css("width","80%");
            $(".tool-sa").css("width","80%");
            $(".tool-bt").css("width","80%")
            
            $(".tool-ja").css("width","60%");
            $(".tool-jq").css("width","75%");
            $(".tool-bb").css("width","20%")
            

            $(".tool-wp").css("width","75%");
             $(".tool-dr").css("width","55%");
            $(".tool-php").css("width","40%");
            $(".tool-ko").css("width","30%");


            $(".tool-gi").css("width","75%")
            $("#tools-btn").css("color","#fff")


        }
        else{
            // $(".skills-icon").css("color","#666");
            $(".tools-icon").css("color","#666");
            $(".tool-bar__skill").css("width","20%")      
        };

        if(r > w - 10 && r < pr ){
            $("#works-btn").css("color","#fff")
        };
        if(r > pr - 10 ){
            $("#profile-btn").css("color","#fff")
        }        
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
    // $(".heading-main").flowtype({ minimum: 300,maximum: 1200,minFont: 12,maxFont: 50,fontRatio:10
    // });
    // $(".heading-mid").flowtype({ minimum: 200,maximum: 1000,minFont: 12,maxFont: 60,fontRatio:10
    // });