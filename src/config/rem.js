(function (doc, win) {
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = () => {
        let clientWdith = docEl.clientWidth
        if (!clientWdith) return;
        docEl.style.fontSize = 20 * (clientWdith / 320) + 'px'
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)