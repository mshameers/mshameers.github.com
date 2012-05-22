(function(window) {

    if(window.location.pathname.indexOf("projects") > -1) {
        $(".projects").show();
    }
    $(".trigger").bind("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
    $("#github").mouseover(function(e) {
        e.preventDefault(); 
        $(".github-text").text("@mshameer on Github");
    });
    $("#github").mouseout(function(e) {
        e.preventDefault();
        $(".github-text").text("");
    });
    $("#twitter").mouseover(function(e) {
        e.preventDefault(); 
        $(".twitter-text").text("@mshameer on Twitter");
    });
    $("#twitter").mouseout(function(e) {
        e.preventDefault();
        $(".twitter-text").text("");
    });
    $("#linkedin").mouseover(function(e) {
        e.preventDefault(); 
        $(".linkedin-text").text("@mshameers on LinkedIn");
    });
    $("#linkedin").mouseout(function(e) {
        e.preventDefault();
        $(".linkedin-text").text("");
    });
    $("#email").mouseover(function(e) {
        e.preventDefault(); 
        $(".email-text").text("msahmeers[at]gmail.com");
    });
    $("#email").mouseout(function(e) {
        e.preventDefault();
        $(".email-text").text("");
    });
     $("#facebook").mouseover(function(e) {
        e.preventDefault(); 
        $(".facebook-text").text("@mshameers on Facebook");
    });
    $("#facebook").mouseout(function(e) {
        e.preventDefault();
        $(".facebook-text").text("");
    });
    

})(window);
