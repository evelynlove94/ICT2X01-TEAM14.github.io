AFRAME.registerState({
  initialState: {
    pedestrians: 0,
    vehicles: 0,
    day: "Day",
    obstacles: 0
  },

  handlers: {
    decreasePedestrians: function (state, action) {
      if (state.pedestrians != 0) {
        state.pedestrians -= action.pedestriansCount;
      }
    },

    increasePedestrians: function (state, action) {
      if (state.pedestrians < 5) {
        state.pedestrians += action.pedestriansCount;
      }
    },

    decreaseVehicles: function (state, action) {
      if (state.vehicles != 0) {
        state.vehicles -= action.vehiclesCount;
      }
    },

    increaseVehicles: function (state, action) {
      if (state.vehicles < 3) {
        state.vehicles += action.vehiclesCount;
      }
    },

    toggleDay: function (state, action) {
      if (state.day = "Night"){
        state.day = "Day"
      }
    },

    toggleNight: function (state, action) {
      if (state.day = "Day"){
        state.day = "Night"
      }
    },

    decreaseObstacles: function (state, action) {
      if (state.obstacles != 0) {
        state.obstacles -= action.obstaclesCount;
      }
    },

    increaseObstacles: function (state, action) {
      if (state.obstacles < 7) {
        state.obstacles += action.obstaclesCount;
      }
    },
  }
});