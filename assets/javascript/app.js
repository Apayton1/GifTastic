$(document).ready(function () {

    // DECLARING THE ARRAY OF TOPICS 

    var topics = ["Willy Wonka and the Chocolate Factory", "The Land Before Time", "Bambi", "The Lion King", "Space Jam", "Shrek", "Tangled", "MeanGirls", "How to Train a Dragon",
        "Grinch", "Minions", "Frozen", "Toy Story"];




    // STORING THE URL IN A VARIABLE




    function buttonMaker() {
        for (var i = 0; i < topics.length; i++) {

            $("#buttonDiv").append(`<button class="Btn" data-movie-name="${topics[i]}">${topics[i]} </button>`);

            //$("button").attr("data-movieName", topics[i]);
            // $("button").text(topics[i]);


            console.log(buttonMaker)
        }
    }


    buttonMaker();

    $(document).on("click", ".Btn", function () {

        var type = $(this).attr("data-movie-name");
        console.log(type);

        var fullUrl = "https://api.giphy.com/v1/stickers/search?api_key=dlowSjzyWCiYRD42rwX0NqX7GCc2I8N2&q=" + type +
            "&limit=10&rating=G&lang=en";
        $("#gifHolder").empty();
        $.ajax({
            url: fullUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {

                var imageStill = (response.data[i].images['480w_still'].url);
                console.log(imageStill, "Still");
                
                var imageRating = (response.data[i].rating);
                console.log(imageRating);

                var imageAnimated = (response.data[i].images["preview"].mp4);
                console.log(imageAnimated,"Animation");
                

               
                var image = $(`<img  src="${imageStill}"></img>`);
                var rateMe = $("<p></p>");
                rateMe.text(imageRating);
            

                $("#gifHolder").append(image);
                $("#gifHolder").append(imageRating);
               

                $(image).on("click", function(){
                    
                    console.log("YOU CLICKED ME");

            })
        }
        });






    });

    $("#submitButton").on("click", function (e) {
        e.preventDefault();
        var newButton = $("#newMovie").val();
        console.log(newButton);
        $("#buttonDiv").empty();
        $("#gifHolder").empty();

        topics.push(newButton);

        buttonMaker();
        console.log("clicked");
    })


})
