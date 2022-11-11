const typeOfBenefits = document.getElementsByName('typeOfBenefits');
const typeOfDevices = document.getElementsByName('typeOfDevices');
const typeOfHouse = document.getElementsByName('typeOfHouse');
const numberOfPeople = document.querySelector(".numberOfPeople");
const area = document.querySelector('.area');
const benefitDiscount = document.querySelector('.benefitDiscount');
const price = document.querySelector('.price');
const form = document.querySelector('.form')
const benefitsContainer = document.querySelector('.benefitsContainer')
const deviceContainer = document.querySelector('.deviceContainer')
const houseContainer = document.querySelector('.houseContainer')
const totalPrice = document.querySelector('.totalPrice')
let benefitArea = 0
let benefitNorm = 0
let toPayBenefit = 0
let socialArea = 0
let socialNorm = 0
let difference = 0
let toPay = 0
const benefitChoose = () => {
    for (i = 0; i < typeOfBenefits.length; i++) {
    if (typeOfBenefits[i].checked) {
        if (typeOfBenefits[i].value == 'Without') {
            benefitDiscount.setAttribute('disabled','disabled')
        }
        else{benefitDiscount.removeAttribute('disabled')}
        }
        
    }
    
}

const deviceChoose = () => {
    for (i = 0; i < typeOfDevices.length; i++) {
    if (typeOfDevices[i].checked) {
        return parseInt(typeOfDevices[i].value) 
    }
}
}
 const houseChoose = () => {
    for (i = 0; i < typeOfHouse.length; i++) {
    if (typeOfHouse[i].checked) {
        return parseFloat(typeOfHouse[i].value)
    }
}
}

const countingPrise = (e) => {
    e.preventDefault()
    benefitArea = 21 * numberOfPeople.value + 10.5
    if (benefitArea < area.value) {
        if (benefitDiscount.hasAttribute('disabled')) {
       benefitNorm = benefitArea * 11 }
    else { benefitNorm = benefitArea * 7 * houseChoose() + deviceChoose() * numberOfPeople.value  }
    toPayBenefit = benefitNorm * price.value * (1 - (benefitDiscount.value/100))
    socialArea = 13.65 * numberOfPeople.value + 35.22
    if (benefitDiscount.hasAttribute('disabled')) {
       socialNorm = socialArea * 11 }
    else { socialNorm = socialArea * 7 * houseChoose() + deviceChoose()  * numberOfPeople.value }
    difference = (socialNorm - benefitNorm) * price.value
    toPay = (difference + toPayBenefit)
    }
    else {
        if (benefitDiscount.hasAttribute('disabled')) {
       benefitNorm = area.value * 11 }
    else { benefitNorm = area.value * 7 * houseChoose() + deviceChoose() * numberOfPeople.value  }
    toPayBenefit = benefitNorm * price.value * (1 - (benefitDiscount.value/100))
    socialArea = 13.65 * numberOfPeople.value + 35.22
        if (socialArea < area.value) {
            if (benefitDiscount.hasAttribute('disabled')) {
       socialNorm = socialArea * 11 }
    else { socialNorm = socialArea * 7 * houseChoose() + deviceChoose()  * numberOfPeople.value }
    difference = (socialNorm - benefitNorm) * price.value
    toPay = (difference + toPayBenefit)
        }
        else {
            if (benefitDiscount.hasAttribute('disabled')) {
       socialNorm = area.value* 11 }
    else { socialNorm = area.value * 7 * houseChoose() + deviceChoose()  * numberOfPeople.value }
    difference = (socialNorm - benefitNorm) * price.value
    toPay = (difference + toPayBenefit)
        }
    }
totalPrice.value = toPay.toFixed(2)
}
 

deviceContainer.addEventListener('click',deviceChoose)
benefitsContainer.addEventListener('click', benefitChoose)
houseContainer.addEventListener('click',houseChoose)
form.addEventListener('submit',countingPrise)