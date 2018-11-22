AFRAME.registerComponent('bound-collider', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "bound1"){
                document.getElementById("cop").setAttribute("visible", "true")
                document.getElementById("safetyPrompt").setAttribute("visible", "true")
            }
            if (x = "portal1"){
                document.getElementById("portal1").setAttribute("visible", "false")
                document.getElementById("portal2").setAttribute("visible", "true")
            }
        })
    }
})

AFRAME.registerComponent('bound-collider2', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "portal2"){
                document.getElementById("portal2").setAttribute("visible", "false")
                document.getElementById("keepLeftPrompt").setAttribute("visible", "true")
                document.getElementById("portal3").setAttribute("visible", "true")
            }
        })
    }
})

AFRAME.registerComponent('bound-collider3', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "portal3"){
                document.getElementById("portal3").setAttribute("visible", "false")
                document.getElementById("portal4").setAttribute("visible", "true")
            }
        })
    }
})

AFRAME.registerComponent('bound-collider4', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "portal4"){
                document.getElementById("portal4").setAttribute("visible", "false")
                document.getElementById("portal5").setAttribute("visible", "true")
            }
        })
    }
})

AFRAME.registerComponent('bound-collider5', {
    init: function () {
        var x = this.el.getAttribute("id")
        var delayInMilliseconds = 5000; //1 second
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "portal5"){
                document.getElementById("portal5").setAttribute("visible", "false")
                setTimeout(function(){
                    stopCross()
                    document.getElementById("portal6").setAttribute("visible", "true")
                }, delayInMilliseconds);
            }
        })
    }
})

AFRAME.registerComponent('bound-collider6', {
    init: function () {
        var x = this.el.getAttribute("id")
        this.el.addEventListener("hitstart", (e) => {
            //Toggle Cop
            console.log(x + " has collided")
            if (x = "portal6"){
                document.getElementById("portal6").setAttribute("visible", "false")
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

function stopCross(){
    var cross1 = document.getElementById("crossing1")
    var cross2 = document.getElementById("crossing2")

    cross1.setAttribute("visible", "false")
    cross2.setAttribute("visible", "false")
}

function introPromptHide() {
    document.getElementById("introPrompt").setAttribute("visible", "false")
}

function safetyPromptHide() {
    document.getElementById("safetyPrompt").setAttribute("visible", "false")
}

function keepLeftPromptHide() {
    document.getElementById("keepLeftPrompt").setAttribute("visible", "false")
}

function continuePromptHide() {
    document.getElementById("continuePrompt").setAttribute("visible", "false")
}

function roadPromptHide() {
    document.getElementById("roadPrompt").setAttribute("visible", "false")
}

function trafficPromptHide() {
    document.getElementById("trafficPrompt").setAttribute("visible", "false")
}

function afterCrossPromptHide() {
    document.getElementById("afterCrossPrompt").setAttribute("visible", "false")
}

