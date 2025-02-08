// Alert saat tombol diklik
document.getElementById("rButton").addEventListener("click", function () {
  alert("Aku benar-benar mengagumi kamu! 💖");
});

// Kirim request ke server saat website dibuka
fetch("/track");
