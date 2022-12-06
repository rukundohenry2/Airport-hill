var prevScrollpos = window.pageYOffset
        function toggleMobileMenu(){
            document.querySelector('#menuitem').classList.toggle('show')
            document.body.style.overflowX = "hidden"
        }
        
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                console.log("pull the menu bar out")
                document.getElementById("topmen").style.top = "0"
            } else {
                document.getElementById("topmen").style.top = "-12vh"
                console.log("make bar disappear")
            }
            prevScrollpos = currentScrollPos
        }