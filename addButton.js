const buttonAdd = `<div class="lu9bwd" jscontroller="Lg5HHc" jsaction="JIbuQc:EBwIVc"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb" data-is-touch-wrapper="true"><button class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc XUKGjd" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mouseover:.CLIENT" jsname="kw8uke" aria-label="Usar imagen del disco" data-google-tooltip="Usar imagen del disco" data-tooltip-position="top" data-tooltip-vertical-offset="12"><div class="VfPpkd-Jh9lGc"></div><span jsname="V67aGc" class="VfPpkd-vQzf8d" aria-hidden="true"><i class="google-material-icons VfPpkd-kBDsod Cz7ji" aria-hidden="true">add</i></span><div class="VfPpkd-RLmnJb"></div></button></div><input type="file" jsname="tif8Pe" jsaction="change:E7zRc" accept="image/jpeg, image/png" style="display: none;"></div>`;

let interval;
const func = () => {
    const alreadyAdded = document.getElementsByClassName('google-material-icons VfPpkd-kBDsod Cz7ji').length === 2;
    if (alreadyAdded) return clearInterval(interval);
    const list = document.querySelectorAll('.BLlSHe');
    if (list.length == 1) {
        list[0].insertAdjacentHTML('afterbegin', buttonAdd);
    }
}

interval = setInterval(func, 1000);