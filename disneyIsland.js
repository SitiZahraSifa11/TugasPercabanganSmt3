let umur = 10
let tinggi = 140
let tarif = 0
if(umur <= 1){
    console.log("Dilarang masuk")
}
else if(umur > 1 && umur <= 3){
    tarif = 30000
    if (tinggi > 70 ){
        tarif += 10000
    }
    console.log ("Tarif yang harus dibayar untuk umur "+umur+" tahun dengan tinggi badan "+tinggi+" cm adalah Rp."+tarif)
}
else if(umur > 3 && umur <= 7){
    tarif = 40000
    if (tinggi > 120){
        tarif += 15000
    }
    console.log ("Tarif yang harus dibayar untuk umur "+umur+" tahun dengan tinggi badan "+tinggi+" cm adalah Rp."+tarif)
}
else if(umur > 7 && umur <=10){
    tarif = 50000
    if(tinggi > 150 ){
        tarif += 20000
    }
    console.log ("Tarif yang harus dibayar untuk umur "+umur+" tahun dengan tinggi badan "+tinggi+" cm adalah Rp."+tarif)
}
else if(umur > 10 ){
    tarif = 80000
    console.log ("Tarif yang harus dibayar untuk umur "+umur+" tahun dengan tinggi badan "+tinggi+" cm adalah Rp."+tarif)
}
