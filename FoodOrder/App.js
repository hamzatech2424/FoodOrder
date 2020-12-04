


const Calcu = () =>{

let shawarma_id = document.getElementById("shawarma_id").value;
let Zinger_shawarma = document.getElementById("Zinger_shawarma").value;
let platter = document.getElementById("platter").value;
let zinger_burger = document.getElementById("zinger_burger").value;
let fries = document.getElementById("fries").value;
let roll = document.getElementById("roll").value;

// console.log(shawarma_id,Zinger_shawarma,platter,zinger_burger,fries,roll)

let shawarma_checkbox = document.getElementById("shawarma_checkbox");
let zingerShawarma_checkbox =document.getElementById("zingerShawarma_checkbox");
let platter_checkbox = document.getElementById("platter_checkbox");
let zingerBurger_checkbox = document.getElementById("zingerBurger_checkbox");
let fries_checkbox =document.getElementById("fries_checkbox");
let roll_checkbox = document.getElementById("roll_checkbox");

let Total = document.getElementById("Total")
let Discount = document.getElementById("Discount")
let GrandTotal = document.getElementById("GrandTotal")


if(shawarma_checkbox.checked == true || zingerShawarma_checkbox.checked == true || platter_checkbox.checked == true || zingerBurger_checkbox.checked == true
    || fries_checkbox.checked == true || roll_checkbox.checked == true ){

    let shawarmatotal = (shawarma_id * 120)
    let zingerShawarmatotal = (Zinger_shawarma * 180)
    let plattertotal = (platter * 180)
    let zingerburgermatotal = (zinger_burger * 150)
    let friestotal = (fries * 80)
    let rolltotal = (roll * 40)
    console.log(shawarmatotal)
    console.log(zingerShawarmatotal)
    console.log(plattertotal)
    console.log(zingerburgermatotal)
    console.log(friestotal)
    console.log(rolltotal)

    Total.innerHTML = (shawarmatotal+zingerShawarmatotal+plattertotal+zingerburgermatotal+friestotal+rolltotal)

    GrandTotal.innerHTML = Total.innerHTML;

    if(Total.innerHTML >= 600){
        let dicountoccur = (Total.innerHTML/100*5)
        Discount.innerHTML = -dicountoccur;
        GrandTotal.innerHTML = (Total.innerHTML - dicountoccur)
    }




}

else {
    alert("Kindly check the product and write Quantity")
}

// else if() {
//     alert("Kindly check the product and write Quantity")
// }


// else if(zingerShawarma_checkbox.checked == true){
//     let zingerShawarmatotal = (Zinger_shawarma * 180)
//     console.log(zingerShawarmatotal)
// }

// else if(platter_checkbox.checked == true){
//     let plattertotal = (platter * 180)
//     console.log(plattertotal)
// }

// else if(zingerBurger_checkbox.checked == true){
//     let zingerburgermatotal = (zinger_burger * 150)
//     console.log(zingerburgermatotal)
// }

// else if(fries_checkbox.checked == true){
//     let friestotal = (fries * 80)
//     console.log(friestotal)
// }

// else if(roll_checkbox == true){
//     let rolltotal = (roll * 40)
//     console.log(rolltotal)
// }



}