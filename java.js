const toggleBtn = document.getElementById('perlihatkan');
const daftarDiv = document.getElementById('jadwalDiv');


toggleBtn.addEventListener('click', function() {
    if (daftarDiv.style.display === 'block') {
        daftarDiv.style.display = 'none';
    } else {
        daftarDiv.style.display = 'block';}
    });
        
        // Fungsi untuk mengubah cellpadding tabel jika lebar layar <= 720px
        function ubahCellpadding() {
            var table = document.getElementById("tabel");
            var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (screenWidth <= 720) {
            // Jika lebar layar <= 720px, ubah nilai cellpadding menjadi 10
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].style.padding = "6px";
                }
            }
            } else {
            // Jika lebar layar > 720px, kembalikan nilai cellpadding menjadi 10
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].style.padding = "10px";
                }
            }
            }
        }

        // Panggil fungsi saat halaman pertama kali dimuat dan saat ukuran layar berubah
        window.onload = ubahCellpadding;
        window.onresize = ubahCellpadding;

