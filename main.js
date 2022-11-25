document.body.onload= function() {
    let texts = new Array();
    texts.push("This is my gift to you");
    texts.push("I hope you like it");
    texts.push("3");
    texts.push("2");
    texts.push("1");

    let point = 0;
    let text = document.querySelector('#text');

    function changeText() {
        text.innerHTML = texts[point]
        if (point < ( texts.length - 1)) {
            point++
        } else {
            point = 0;
        }
    }

    textInterval = setInterval(changeText, 1500);
    changeText();
    
    const btn = document.querySelector('#btn');

    setTimeout(() => {
        btn.style.display = "block";
        text.style.display = 'none';
    }, 7000);

    btn.addEventListener('click', () => {
        document.querySelector('#msc').play();
        document.body.style.backgroundImage = "url('rick.gif')";
        document.querySelector('.main').style.display = "none";
        setInterval(() => {
            document.querySelector('.rr').style.display = "block";
        }, 1500);
    })

}

