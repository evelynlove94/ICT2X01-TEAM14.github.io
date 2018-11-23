AFRAME.registerComponent('decrease-pedestrians', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('decreasePedestrians', { pedestriansCount: 1 });
        });
    }
});

AFRAME.registerComponent('increase-pedestrians', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('increasePedestrians', { pedestriansCount: 1 });
        });
    }
});

AFRAME.registerComponent('decrease-vehicles', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('decreaseVehicles', { vehiclesCount: 1 });
        });
    }
});

AFRAME.registerComponent('increase-vehicles', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('increaseVehicles', { vehiclesCount: 1 });
        });
    }
});

AFRAME.registerComponent('toggle-day', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('toggleDay');
        });
    }
});

AFRAME.registerComponent('toggle-night', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('toggleNight');
        });
    }
});

AFRAME.registerComponent('decrease-obstacles', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('decreaseObstacles', { obstaclesCount: 1 });
        });
    }
});

AFRAME.registerComponent('increase-obstacles', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
            el.sceneEl.emit('increaseObstacles', { obstaclesCount: 1 });
        });
    }
});

AFRAME.registerComponent('hello-world', {
    init: function () {
        if (document.getElementById('tutorialScene').selected = true) {
            console.log("Hello World");
        }
    }
});

function playButton() {
    console.log("SELECT VEHICLE")
    if (document.getElementById('playButton').selected = true) {
        window.location.href = "playVehicle.html";
    }
}

function scenarioButton() {
    console.log("SELECT SCENARIO")
    if (document.getElementById('scenarioButton').selected = true) {
        window.location.href = "playScenario.html";
    }
}

function tutorialButton() {
    console.log("TUTORIAL SCENE ACTIVE")
    if (document.getElementById('tutorialButton').selected = true) {
        window.location.href = "tutorial.html";
    }
}

function loginButton() {
    console.log("LOGIN SUCCESS")
    if (document.getElementById('loginButton').selected = true) {
        window.location.href = "login.html";
    }
}

function editSceneSelection() {
    console.log("SELECT SCENARIO TO EDIT")
    if (document.getElementById('SCTFLogin').selected = true) {
        window.location.href = "selectEditScenario.html";
    }
}

function editScene() {
    console.log("EDITING IN PROGRESS")
    if (document.getElementById('editScenarioSelection').selected = true) {
        window.location.href = "editScenario.html";
    }
}

function quitButton() {
    console.log("GAME QUIT EXECUTED")
    if (document.getElementById('quitButton').selected = true) {
        window.location.href = "quit.html";
    }
}

function backButton() {
    console.log("BACK BUTTON PRESSED")
    if (document.getElementById('backButton').selected = true) {
        window.location.href = "index.html";
    }
}

function sctfBack() {
    console.log("SCTF BACK BUTTON PRESSED")
    if (document.getElementById('sctfBackButton').selected = true) {
        window.location.href = "selectEditScenario.html";
    }
}

function scenarioBack() {
    console.log("SCENARIO BACK BUTTON PRESSED")
    if (document.getElementById('scenarioBackButton').selected = true) {
        window.location.href = "playVehicle.html";
    }
}

function selectedBicycle() {
    console.log("BICYCLE SELECTED")
    window.location.href = "playScenario.html";
}

function selectedScooter() {
    console.log("E-SCOOTER SELECTED")
    window.location.href = "playScenarioB.html";
}

function roadCycleScene() {
    console.log("PLAYING ROAD CYCLE LEVEL")
    window.location.href = "roadCycle.html";
}

function roadCycleScene2() {
    console.log("PLAYING ROAD CYCLE LEVEL")
    window.location.href = "roadCycleScooter.html";
}

function pathCyclingScene() {
    console.log("PLAYING PATH CYCLE LEVEL")
    window.location.href = "CyclingPath.html";
}

function zebraPathScene() {
    console.log("PLAYING ZEBRA PATH")
    window.location.href = "ZebraPath.html";
}

function showCutSceneOne() {
    console.log("PLAY CUTSCENE")
    if (document.getElementById("quiz1-answerTrue").selected = true) {
        document.getElementById("vidPlayer").setAttribute("visible", "true")
        document.getElementById("quiz1-answerTrue").setAttribute("visible", "false")
        document.getElementById("quiz1-answerFalse").setAttribute("visible", "false")
        document.getElementById("quiz1-question").setAttribute("visible", "false")
    }
}

function pauseCutSceneOne() {
    console.log("HIDE CUTSCENE")
    if (document.getElementById("play").selected = true) {
        console.log('hello')
        document.getElementById("control-close").setAttribute("visible", "true")
    }

    if (document.getElementById("pause").selected = true) {
        console.log('bye')
        document.getElementById("control-close").setAttribute("visible", "true")
    }
}