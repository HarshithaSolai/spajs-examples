spa.$('viewData', {
  require: 'dataStore',

  data: {
    "id": 1,
    "first_name": "Cordey",
    "last_name": "Janous",
    "email": "cjanous0@guardian.co.uk",
    "gender": "Female"
  }

});

spa.$extend('viewData', {

  getTitle: function( gender ) {
    return {'Male': 'Mr.', 'Female': 'Ms.'}[gender];
  }

});