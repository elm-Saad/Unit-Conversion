
const convertBtn = document.getElementById('fire-Convert');
const inputNum = document.getElementById('num-input');
const displayLengthD = document.getElementById('length-display-D');
const displayLengthI = document.getElementById('length-display-I');
const displayVolumeD = document.getElementById('volume-display-D');
const displayVolumeI = document.getElementById('volume-display-I');
const displayMassD = document.getElementById('Mass-display-D');
const displayMassI = document.getElementById('Mass-display-I');

convertBtn.addEventListener('click', function(){
    let numberToConvert =Number(inputNum.value);
    mainConvert(numberToConvert);
   
});

function mainConvert(num){
    displayLength(num);
    displayVolume(num);
    displayMass(num);
}
function lengthConvert(num){
    //1 meter = 3.281 feet
    let feet = (1 * num)/(3.281);
    let meter = (3.281 * num) / 1 ;
    return [meter.toFixed(3) , feet.toFixed(3)];

}
function displayLength(num){
    displayLengthD.textContent = `${num} meters = ${lengthConvert(num)[0]} feet`;
    displayLengthI.textContent = `${num} feet = ${lengthConvert(num)[1]} meters`;
}
function volumeConvert(num){
    //1 liter = 0.264 gallon
    let gallon = (1 * num)/(0.264);
    let liter = (0.264 * num) / 1 ;
    return [liter.toFixed(3) , gallon.toFixed(3)];
    
}
function displayVolume(num){
    displayVolumeD.textContent = `${num} liters = ${volumeConvert(num)[0]} gallons`;
    displayVolumeI.textContent = `${num} gallons = ${volumeConvert(num)[1]} liters`;    
}
function massConvert(num){
    //1 kilogram = 2.204 pound
    let pound= (1 * num)/(2.204);
    let kilogram = (2.204 * num) / 1 ;
    return [kilogram.toFixed(3) , pound.toFixed(3)];
}
function displayMass(num){
    displayMassD.textContent =`${num} kilos = ${massConvert(num)[0]} pounds`;
    displayMassI.textContent =`${num} pounds = ${massConvert(num)[1]} kilos`;
}
