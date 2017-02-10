app.controller('PersonController', function (PersonService){
  var ctrl = this;
   ctrl.array = [];
   ctrl.person = {};
//update and display all the Persons or people

ctrl.getNames = function(){
  PersonService.getNames().then(function(res){
   ctrl.array = res;
  })
}

ctrl.getNames();

//add to names to the database
ctrl.addNames = function() {
  PersonService.addNames(ctrl.person).then(function(res){
    console.log("Error getting a response", res);
    ctrl.getNames();
  })
}

ctrl.updateNames = function(person) {
  PersonService.updateNames(person).then(function(res){
    console.log("Error updating names", res);
  })
}

ctrl.deleteNames = function(id){
  PersonService.deleteNames(id).then(function(res){
    console.log();
    ctrl.getNames();
  })
}




//delete names from the database






});
