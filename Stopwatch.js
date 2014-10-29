var Stopwatch = function () {
  "use strict";
  
  var esto = this, running = false, laps = [], i_time, f_time, p_time, e_time;
  
  this.start = function () {
    esto.restart();
  };
  
  this.pause = function () {
    if (running) {
      p_time = new Date();
      p_time = p_time.getTime();
    }
  };
  
  this.resume = function () {
  
  };
  
  this.stop = function () {
    f_time = new Date();
    f_time = f_time.getTime();
    running = false;
    return esto.getElapsedTime();
  };
  
  this.lap = function () {
    esto.pause();
    laps[laps.length] = esto.getLapTime();
    return laps[laps.length - 1];
  };
  
  this.getLap = function (l) {
    return laps[l];
  };
  
  this.restart = function () {
    p_time = 0;
    i_time = new Date();
    i_time = i_time.getTime();
    running = true;
  };
  
  this.getElapsedTime = function () {
    return f_time - i_time - p_time;
  };
  
  this.getLapTime = function () {
    return p_time - i_time;
  };
};