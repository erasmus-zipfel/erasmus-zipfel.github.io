
window.addEventListener('resize', setSize1);

function setSize1() {
    var h = window.innerHeight;
/*    window.alert(h); */
    var h1 = (h * 0.08) + 'px';
    var h2 = (h * 0.22) + 'px';
    var f = ((h / 800.0) * 100) + '%';
    
    document.getElementById('text01').style.fontSize = f;
    document.getElementById('text02').style.fontSize = f;
    document.getElementById('text01').style.paddingTop = h1;
    document.getElementById('text01').style.paddingBottom = h1;
    document.getElementById('text02').style.paddingTop = h2;
    document.getElementById('text02').style.paddingBottom = h2;   
}

function xtri() {
    var r = (Math.random() + Math.random()) * 0.5;
    return Math.round((r * 80) + 10) + '%';
}

var bgImg = [ "jpeg_3/073_prinzipien_am_morgen_Kachel.jpg", "jpeg_3/073_prinzipien_am_morgen.jpg",
    "jpeg_3/074_t_strom_Kachel.jpg", "jpeg_3/074_t_strom.jpg",
    "jpeg_3/075_maeander_Kachel.jpg", "jpeg_3/075_maeander.jpg",
    "jpeg_3/076_w_metaphysik_Kachel.jpg", "jpeg_3/076_w_metaphysik.jpg",
    "jpeg_3/077_strauss_voll_wuensche_Kachel.jpg", "jpeg_3/077_strauss_voll_wuensche.jpg",
    "jpeg_3/078_kompendium_der_wuensche_Kachel.jpg", "jpeg_3/078_kompendium_der_wuensche.jpg",
    "jpeg_3/079_ki_pri_Kachel.jpg", "jpeg_3/079_ki_pri.jpg",
    "jpeg_3/082_n_zurZeit_Kachel.jpg", "jpeg_3/082_n_zurZeit.jpg",
    "jpeg_3/083_erzaehlung_n_Kachel.jpg", "jpeg_3/083_erzaehlung_n.jpg",
    "jpeg_3/084_magische_und_geheimnisvolle_fahrt_Kachel.jpg", "jpeg_3/084_magische_und_geheimnisvolle_fahrt.jpg",
    "jpeg_3/085_verlaessliche_magie_Kachel.jpg", "jpeg_3/085_verlaessliche_magie.jpg",
    "jpeg_3/086_morgens_durchgehen_Kachel.jpg", "jpeg_3/086_morgens_durchgehen.jpg",
    "jpeg_3/087_golderfindung_Kachel.jpg","jpeg_3/087_golderfindung.jpg",
    "jpeg_3/088_monderfindung_Kachel.jpg","jpeg_3/088_monderfindung.jpg",
    "jpeg_3/089_gluecksfuegung_Kachel.jpg","jpeg_3/089_gluecksfuegung.jpg",
    "jpeg_3/090_das_b_vom_h_Kachel.jpg","jpeg_3/090_das_b_vom_h.jpg",
    "jpeg_3/091_w_wahrheit_Kachel.jpg","jpeg_3/091_w_wahrheit.jpg"];
    
function init() {
    var a;
    var b = Math.floor(Math.random() * Math.floor(bgImg.length));
    while (1) {
        a = Math.floor(Math.random() * Math.floor(bgImg.length));
        if (a != b) break;
    }
    document.getElementById('text01').style.backgroundImage = "url(" + bgImg[a] + ")";
    document.getElementById('text02').style.backgroundImage = "url(" + bgImg[b] + ")";
    document.getElementById('text01').style.backgroundPosition = xtri() + ' ' + xtri();
    document.getElementById('text02').style.backgroundPosition = xtri() + ' ' + xtri();
    setSize1();
}
