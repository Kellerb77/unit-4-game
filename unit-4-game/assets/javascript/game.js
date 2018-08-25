var random_result;
var lost = 0;
var win = 0;
var previous = 0;

$(document).ready(function () {

    //$(".crystal").attr('class');

    var resetAndStart = function () {
        $(".crystals").empty();

        random_result = Math.floor(Math.random() * 69) + 30;

        var random = Math.floor(Math.random() * 11) + 1;

        $("#results").html('Random result: ');
        $("#results").on("click", function () {
            console.log("random_result")
        });
        
        for (var i = 0; i < 4; i++) {


            $("#crystals").empty();

            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', 
               "value": i + 1  
                //"data-random": random
            });
            //crystal.html(random);

            $(".crystals").append(crystal);
        }
    }

    resetAndStart();
    var reset = function () {

    }

    $(".crystal").on('click', function (event) {
        //var results;
        "value"= i + 1  
console.log(event.target);
        var num = ($parseInt(this).attr('data-random'));
        results += num;
        var results = num + 5;

        console.log(results);

        $("#previous".html(previous));

        if (previous > random_result) {
            lost--;

            $("#lost").html(lost);

            previous = 0;
            reseAndStart();
        }
        else if (previous === random_result) {
            win++;
            $("#win").html(win);



            previous = 0;
            resetAndStart();
        }

    });
});

//a game with 4 crystals and random results
//Every crystal needs to have a random number between 1-12
//when clicking any crystal it should add with the prevouis result until it equals random result
//if it is greater than randomn result decrement lost counter
//if it equals random number increment win counter
//a new randomn number should be generated every single time we win or lose to the 4 crystals and randomn number
//4 200 x 200 boxs
//randomn numbers in each green box
//green box is clickable and records the number in the box selected
//random number that is the objective to get too
//numbers add / player has 12 trys
//if math adds up to the objective number outside the boxes
// alert you win record win
//if object number is not reached alert you lose and record loss
//numbers all reset after the win/loss is recorded and game starts over
