var Task = require("./Task");

var task1 = new Task("Task for constructor");
var task2 = new Task("Task for modules");
var task3 = new Task("Task for singleton");
var task4 = new Task("Task for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();