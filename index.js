
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
        '--x', (
            e.clientX+window.scrollX
        )
        + 'px'
    );
    document.documentElement.style.setProperty (
        '--y', (
            e.clientY+window.scrollY
        )
        + 'px'
    );
}


function lightswitch() {
    let light = document.querySelector(".showcase")
    light.style.backgroundColor = "#fff"    
    changeCursor()
}

function changeCursor() {
    document.getElementById("cursor").setAttribute("id", "defaultcursor")
    document.getElementById("nocursor").setAttribute("id", "defaultcursor")
}
