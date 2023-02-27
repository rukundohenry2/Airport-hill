
function toggleMobileMenu(){
    document.querySelector('#menuitem').classList.toggle('show')
    document.body.style.overflowX = "hidden"
}

var prevScrollpos = window.pageYOffset;
console.log("henry in the building")
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if( currentScrollPos<100){
        document.getElementById("topmen").style.top = "0"
    }
    else{
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("topmen").style.top = "0"
        } else {
            document.getElementById("topmen").style.top = "-12vh"
        }
    }
    
    prevScrollpos = currentScrollPos
}