function compute(){
    var principal = document.getElementById("principal").value;
    var interest = document.getElementById("rate").value;
    var time = document.getElementById("years").value;
    var amount = principal * time * interest/100;
    var year = new Date().getFullYear() + parseInt(time);
    // var amount = parseInt(principal) + interest;

    if(principal <= 0){
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
    }else{
        document.getElementById("result").innerHTML = 
        "If you deposit <mark>" + principal + "</mark>, \<br>\
        at an interest rate of <mark>" + interest + "%</mark>. \<br>\
        You will receive an amount of <mark>" + amount + "</mark>, <br>\
        in the year <mark>" + year + "</mark>.<br>";

        //Increase div height onclick
        var element = document.getElementById("maindiv");
        element.classList.toggle("divHeight", true);
    }
}

function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateVal + "%";
}