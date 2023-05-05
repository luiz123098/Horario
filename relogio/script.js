function loadding() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    var body = document.body.style.backgroundColor
    msg.innerHTML = `Agora são ${hour} horas.`
    if(hour >= 0 && hour < 12) {
        img.src = 'img/dia.png'
        document.body.style.background = '#87b4e0'
    }else if(hour >= 12 && hour < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#cd6217'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#44020e'
    }
}