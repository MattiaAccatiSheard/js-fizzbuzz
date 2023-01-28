const fizzbuzzEl = document.getElementById("fizzbuzz")

for (let i = 1; i <= 100; i++){

    let liItem

    if (i % 15 == 0){
        console.log("FizzBuzz");
        liItem = `<li class="box">FizzBuzz</li>`;

    } else if (i % 5 == 0){
        console.log("Buzz");
        liItem = `<li class="box">Buzz</li>`;

    } else if (i % 3 == 0) {
        console.log("Fizz");
        liItem = `<li class="box">Fizz</li>`;

    } else {
        console.log(i);
        liItem = `<li class="box">${i}</li>`;
    }

    fizzbuzzEl.innerHTML += liItem
    
}