
window.addEventListener('resize', setSize);

function setSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (h < w) {
        document.getElementById('offs').style.width = (w - h) * 0.5;
        w = h;
    }
    else { 
        document.getElementById('offs').style.width = 0;
    }
    h = w * 0.025;
    w = w * 0.925;
    document.getElementById('i1').style.width = h; 
    document.getElementById('i2').style.width = h;
    document.getElementById('i3').style.width = w;
    document.getElementById('i4').style.width = h;
}
