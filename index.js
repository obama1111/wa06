let dataJson = localStorage.getItem("wa06_pw")
let thisData = JSON.parse(dataJson) || {
    fb: "",
    gm: "",
    ya: "",
}
 

document.getElementById("fb-input").value = thisData.fb
document.getElementById("gm-input").value = thisData.gm
document.getElementById("ya-input").value = thisData.ya

// set enent for save button
let saveButton = document.getElementById("save-button")
saveButton.addEventListener("click", saveData) 

function saveData() {
    let fb = document.getElementById("fb-input").value
    let gm = document.getElementById("gm-input").value 
    let ya = document.getElementById("ya-input").value 

    let thisData = {fb,gm,ya}
    let thisDataJson = JSON.stringify(thisData)
    localStorage.setItem("wa06_pw", thisDataJson)
    alert("save!!")
}