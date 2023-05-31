var contact = document.getElementById("formContact");

contact.addEventListener("submit", (e) => {
    e.preventDefault();

    var nama = document.getElementById("nama").value;
    var hp = document.getElementById("hp").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    var url = "https://web.whatsapp.com/send",
    phone = '6281252512160',
    text = "Selamat "
    ;

    if(nama != "" && email != ""){
        var tuj = url + '?phone='+ phone +
                '&text=' +
                '*Nama* : ' + nama + '%0A' +
                '*Email Address* : '+ email + '%0A' +
                '*Pesan* : '+ pesan  ;
        window.open(tuj,'_blank');
        contact.reset();

    }
});