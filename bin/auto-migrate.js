// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.filmDS;
ds.automigrate('account', function(err) {
  if (err) throw err;

  var accounts = [
    {
	  name : 'Hieu 111',
      email: 'john.doe@ibm.com'
      
    },
    {
	  name : 'Hieu 2222',
      email: 'jane.doe@ibm.com'
    },
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.account.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});

ds.automigrate('category', function(err) {
  if (err) throw err;

  var categorys = [
    {
	  name : 'category 111'
      
    },
    {
	  name : 'category 2222'
    },
  ];
  var count = categorys.length;
  categorys.forEach(function(category) {
    app.models.category.create(category, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});

ds.automigrate('film', function(err) {
  if (err) throw err;

  var films = [
    {
		title : 'film 1',
		desciption : "desciption 1111",
		url : "url 111",
		categoryId : 1
    },
    {
		title : 'film 2',
		desciption : "desciption 2222",
		url : "url 222",
		categoryId : 2
    },
  ];
  var count = films.length;
  films.forEach(function(film) {
    app.models.film.create(film, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});