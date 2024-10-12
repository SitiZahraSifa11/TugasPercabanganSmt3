let noPung = 60
let posisi1 = ""
let posisi2 = ""
let posisi3 = ""

if (noPung %2 == 0 && noPung >= 50 && noPung <= 100){
    posisi1 = "Targer Attacker"
    posisi2 = "Berhak dipilih menjadi Captain Team"
}
else if(noPung % 2 === 0){
    posisi1 = "Target Attacker"
}
else if(noPung % 2 === 1 && noPung%3 ===0 && noPung % 5 === 0 && noPung > 90){
    posisi1 = "Defender"
    posisi2 = "Keeper"
    posisi3 = "Playmaker"
}
else if (noPung %2===1 && noPung %3 === 0 && noPung%5 === 0){
    posisi1 = "Defender"
    posisi2 = "Keeper"
}
else if(noPung % 2===1 && noPung > 90){
    posisi1 = "Defender"
    posisi2 = "Playmaker"
}
else if(noPung % 2 ===1){
    posisi1 = "Defender"
}
console.log(
    "Nomor punggung "+noPung+" digunakan oleh posisi:\n"+
    "Posisi ke_1 : "+posisi1+"\n"+
    "Posisi ke_2 : "+posisi2+"\n"+
    "Posisi ke_3 : "+posisi3+"\n"
)