$( document ).ready(function() {
    $(".eatit").on("click", function(){
        $.ajax({
            url:`/burgers/eat/${$(this).attr("data-id")}`,
            method: "PUT"
        }).then(function(data){
            console.log("Then data: " + data);
            location.reload();
        });
        
    });
});