app.service('PersonService', function ($http) {

  //get request
  this.getNames = function() {
    return $http.get('/person').then(function(res){
      console.log('Response from the db', res);
      return res.data;
    }).catch(function(err){
      console.log("Got an error form the db", err);
    });
  };
  //post request
  this.addNames = function(person){
    return $http.post('/person', person).then(function(res){
      console.log('Response from the post', res);
      return res.data;
    }).catch(function(err){
      console.log('Got an error from the post', err);
    });
  };
  //put request
  this.updateNames = function(person){
    return $http.put('/person', person).then(function(res){
      console.log('Response from the update', res);
      return res.data;
    }).catch(function(err){
      console.log('Got an error from th update', err);
    });
  };

  //delete request
  this.deleteNames = function(id){
    return $http.delete('/person/' + id).then(function(res){
      console.log('Response from the delete');
    }).catch(function(err){
      console.log("Got an error from the delete", err);
    });
  };


});
