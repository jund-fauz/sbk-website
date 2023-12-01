let body = document.getElementsByTagName('BODY')[0]
let fc = document.getElementById('first-content')
let grafiti = document.getElementById('grafiti-sbk')
let sbk = document.getElementById('sbk')
grafiti.style.top = `${fc.offsetHeight - (grafiti.offsetHeight / 2)}px`
sbk.style.fontSize = `${body.offsetWidth / 425}rem`
const resize_observer = new ResizeObserver(function () {
    grafiti.style.top = `${fc.offsetHeight - (grafiti.offsetHeight / 2)}px`
    let bodyWidth = body.offsetWidth
    fc.style.height = bodyWidth >= 700 ? '492px' : `${bodyWidth * 2 / 3 + 25}px`
    grafiti.style.height = bodyWidth >= 900 ? '85px' : 'fit-content'
    sbk.style.fontSize = `${body.offsetWidth / 425}rem`
})
resize_observer.observe(body)