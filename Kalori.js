let lamaLari = 15
let lamaPushUp = 10
let lamaPlank = ""

const KaloriLariPerMenit = 60/5
const KaloriPushUpPermenit = 200/30
const KaloriPlankPerMenit = 5

let totalKalLari = lamaLari * KaloriLariPerMenit
let totalKalPushUp = lamaPushUp * KaloriPushUpPermenit
let totalKalPlank = lamaPlank * KaloriPlankPerMenit

let totalKalori = totalKalLari + totalKalPlank + totalKalPushUp

console.log("Total kalori yang terbakar setelah olahraga:");
console.log("Lari: " + totalKalLari + " kalori");
console.log("Push-up: " + totalKalPushUp + " kalori");
console.log("Plank: " + totalKalPlank + " kalori");
console.log("Total kalori yang terbakar: " + totalKalori + " kalori");