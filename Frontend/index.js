const calculate = () => {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;

    fetch("http://localhost:3000/calculate.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            number1,
            number2,
            operation
        }
        ) 
    }).then(res => {
        return res.json();
    })
        .then(resData => {
            document.getElementById("calculated").innerHTML = resData;
        })
            .catch(error => console.log(error));
}