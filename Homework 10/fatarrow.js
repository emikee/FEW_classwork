// Test it here: https://jsfiddle.net/maasha/z65c1znn/
var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach(function(task) {
        alert(this.name + " wants to " + task);
      });
    }
  };
  
  bunny.showTasks();
  // [object Window] wants to transform
  // [object Window] wants to eat cake
  // [object Window] wants to blow kisses
  
  // please note, in jsfiddle the [object Window] is named 'result' within inner functions of methods.