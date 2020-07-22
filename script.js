





function main(){


    //document.querySelector(".text").innerHTML = "This is the JavaScript Way";
    $(".text").html("This is the JQuery Way");
    
    let counter = 0;
    setInterval(function(){
        counter = counter +1;
        $(".timer").html(counter);
    },1000 )

}

/*document.querySelector(".redbull").addEventListener("click", function(){
    document.querySelector("#othertext").innerHTML= "It gives you wings";
});*/


$(".redbull").on("click",function(){
    $("#othertext").html("It gives you wings, JQuery Style");
    $(".text").html(
        `<button class="newButton">Hi I'm a new Button</button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IjMESxJdWkg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    );
});


$( "#clickme" ).click(function() {
    $( "#book" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });


  let correctName = "Terra";
  let correctPassword = "1234";


  $("#loginForm").submit(function(){
    let name = $("#name").val();
    let password = $("#password").val();
    if(name=== correctName &&  password===correctPassword){
        alert("Login Success");
    } else{
        $("#name").val("");
     $("#password").val("");
     alert("Incorrect Username or Password");
    }




  })


$(main);