let nilaiCoding = 20;
let nilaiInterview = "B";
let hasilCoding = "";
let hasilInterview = "";


if (nilaiCoding > 80 && nilaiCoding <= 100) {
    hasilCoding = "LOLOS";
    console.log("Hasil Tes Coding : "+hasilCoding);
}
else if (nilaiCoding >= 60 && nilaiCoding<=80) {
    hasilCoding="DI PERTIMBANGKAN";
    console.log("Hasil Tes Coding : " + hasilCoding);
} 
else {
    hasilCoding="GAGAL";
    console.log("Hasil Tes Coding : "+hasilCoding);
}

 
if (nilaiInterview =="A" || nilaiInterview =="B") {
    hasilInterview = "LOLOS";
    console.log ("Hasil Interview : " + hasilInterview);
} else {
    hasilInterview = "GAGAL";
    console.log ("Hasil Interview : "+hasilInterview);
}

if ((hasilCoding == "LOLOS" || hasilCoding=="DI PERTIMBANGKAN") && hasilInterview =="LOLOS") {
    console.log ("Selamat Kamu Berhasil Menjadi Calon Programmer");
} else {
    console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer" );
}
