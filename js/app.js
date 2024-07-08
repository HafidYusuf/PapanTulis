var tabs = $(".tab");
for (var i = 0; i < tabs.length; i++) {
    tabs.click(function(){
        $('.tab').removeClass("tab-active")
        $(this).addClass("tab-active")
    })
}

var topic = $(".topic-header");
for (var i = 0; i < topic.length; i++) {
    topic.click(function(){
        $(this).parent(".topic-container").toggleClass("topic-container-closed")
    })
}

var options = $(".option-answer");
for (var i = 0; i < options.length; i++) {
    options.click(function(){
        $('.option-answer').removeClass("option-answer-selected")
        $(this).toggleClass("option-answer-selected")
        $('.button-disabled').removeClass("button-disabled")
    })
}


$(".AI-helper").click(function(){
    $(this).addClass("AI-helper-answered");
    setTimeout(function(){$(".AI-helper-answer").css("display","block")}, 2000);
    setTimeout(function(){$(".loading-AI").css("display","none")}, 2000);
})

$(".flag").click(function(){
    $(this).toggleClass("flag-active")
})