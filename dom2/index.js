//Adding classes with jQuery;;
$("h1").addClass("big-title");

//manipulating text with jQuery;;
$("h1").text("Harsh Choudhary");

//manipulating aatributes using jQuery;;
$("a").attr("href","https://www.bing.com/");

//Adding Event Listener
$("button").on("click",function(){
    alert("Hello");
});

$(".mine").click(function(){
    alert("mine class clicked");
})

// keyboard event listener

$("input").keypress(function(event){
    alert(event.key);
});