let addCard = 1;
let totalPrice = 0;

const addBtn = document.querySelectorAll(".add-btn");
addBtn.forEach(value => {
    value.addEventListener("click", (arr) => {
        let btn = arr.target;
        // tiket price
        let priceCard = value.parentNode.children[1].children[0].innerText;
        let tiketPrice = parseFloat(priceCard)
        // tiketText
        let tiketText = value.parentNode.children[0].innerText;



        // total budget
        const budget = document.getElementById("budget");
        let budgetTotal = parseInt(budget.innerText)

        if ((budgetTotal - tiketPrice) < 0) {
            alert("Please earn more")
            return
        }
        budget.innerText = budgetTotal - tiketPrice



        // tiketContainer
        tiketContainer(tiketText, tiketPrice)
        // toral tiketPrice
        totalTicekPrice(tiketPrice)

        // addCard
        innerTextFun("cart-count", addCard)
        addCard++;



    
    })
})





const grandItem = document.getElementById("grand-total");
// console.log()
let grandValue = parseInt(grandItem.innerText);
console.log(grandValue)
function grandTotal (value){
    if(value === "bus"){
        grandItem.innerText = grandValue + 100;
    }else if(value === "train"){
        grandItem.innerText = grandValue - 100;
    }else if(value === "flight"){
        grandItem.innerText = grandValue + 500;
    }
}



function totalTicekPrice(price) {
    totalPrice += price;
    innerTextFun("total-cost", totalPrice)

    grandValue += price;
    innerTextFun("grand-total", grandValue)

}

// 


function tiketContainer(tiketText, tiketPrice) {
    const id = document.getElementById("selected-place-container");
    let create = document.createElement("li");
    // span create
    let span1 = document.createElement("span");
    span1.innerText = tiketText;
    let span2 = document.createElement("span");
    span2.innerText = tiketPrice;
    create.append(span1, span2)

    id.appendChild(create)
}





function innerTextFun(id, value) {
    let element = document.getElementById(id);
    element.innerText = value;
}