var Stopwatch = function () {
  "use strict";
  
  var esto = this, running = false, laps = [], i_time, f_time, p_time, e_time;
  
  this.start = function () {
    esto.restart();
  };
  
  this.pause = function () {

  };
  
  this.stop = function () {
    f_time = new Date();
    f_time = f_time.getTime();
    running = false;
    return esto.getElapsedTime();
  };
  
  this.lap = function () {

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
};