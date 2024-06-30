function convertToRoman() {
    var num = document.getElementById('number').value;
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var romanized = "";

    if (num == "") {
        document.getElementById('output').innerHTML = "Please enter a valid number";
        return;
    }

    if (num <= 0) {
        document.getElementById('output').innerHTML = "Please enter a number greater than or equal to 1";
        return
    }

    if (num > 3999) {
        document.getElementById('output').innerHTML = "Please enter a number less than or equal to 3999";
        return
    }

    for (var i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            romanized += roman[i];
            num -= decimal[i];
        }
    }

    document.getElementById('output').innerHTML = romanized;
}