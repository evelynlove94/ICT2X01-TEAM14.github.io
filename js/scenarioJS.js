AFRAME.registerComponent('bound-collider', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            // Collision ! increment the score
            console.log(x + " has collided")
        if (x = "bound1"){
            document.getElementById("cop").setAttribute("visible", "true")
        }
        })
    }
})

function safetyToggle() {
    var vest = document.getElementById("vestCheck");
    var helmet = document.getElementById("helmetCheck");
    console.log(vest)
    if (vest.visible = 'false') {
        vest.setAttribute('visible', 'true')
        helmet.setAttribute('visible', 'true')
    }
}