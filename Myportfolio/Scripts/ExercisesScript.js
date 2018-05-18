
$("#ex1num1").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num2").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num3").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num4").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num5").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#factornum").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num1").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#fbnum2").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
//I need a reference to the btnEx1 button
        $("#btnEx1").click(function () {
                //Collect the data
                var num1 = Number($("#ex1num1").val());
                var num2 = Number($("#ex1num2").val());
                var num3 = Number($("#ex1num3").val());
                var num4 = +($("#ex1num4").val());
                var num5 = +($("#ex1num5").val());
            
                var result = "Sum: " + (num1 + num2 + num3 + num4 + num5);
                result += " and the Largest is:" + Math.max(num1, num2, num3, num4, num5);
                var result2 = "The Lowest number is " + Math.min(num1, num2, num3, num4, num5);
                var result3 = "The product of all the numbers is " + (num1 * num2 * num3 * num4 * num5);
                var result4 = "The mean is " + ((num1 + num2 + num3 + num4 + num5) / 5);
                
            
        //Output a result to the results p tag
        $("#ex1output").text(result);
        $("#ex2output").text(result2);
        $("#ex3output").text(result3);
        $("#ex4output").text(result4);
    })
            $("#btnEx2").click(function () {

                var num = Number($("#factornum").val());
        var j = num;
                for (i = 1; i < num; i++) {
            j = i * j;

        }
        var output = j + " is the factorial of " + num;
        $("#joutput2").text(output);
    })
            $("#btnEx3").click(function () {
                var fizz = Number($("#fbnum1").val());
        var buzz = Number($("#fbnum2").val());
        var identity = [];
        //Step 2: Write a For loop
                for (var i = 1; i <= 100; i++) {
                    //Use the modulus operator AND each of the user inputs to determine whether to write
                    // Fizz, Buzz, FizzBuzz or the value of loop

                    if (i % fizz == 0 && i % buzz == 0)
            identity.push("FizzBuzz");
        else if (i % fizz == 0)
            identity.push("Fizz");
        else if (i % buzz == 0)
            identity.push("Buzz");
        else
            identity.push(i);
    }
        //if(loop % userinput1 == 0 && loop % userinput2 == 0)
        //result += "FizzBuzz,";
        //else if (loop % userinput1 == 0)
        //result += "Fizz,";
        //else if (loop % userinput2 ==0)
        //result += "Buzz,";
        //else
        //result += loop + ", ";
   

    //Don't forget to remove the trailing comma...

    //Step 3: Write out the Fizz Buzz string
    $("#fizzout").text(identity.toString());


})
            $("#btnEx4").click(function () {

                var line = $("#sentence").val();
        var reversel = line.split("").reverse().join("");
        var tfans;
                if (line == reversel) {
            tfans = line + " is a pallandine";
        $("#joutput4").text(tfans);
                } else {
            tfans = line + " is NOT a pallandine";
        $("#joutput4").text(tfans);
    }

    })