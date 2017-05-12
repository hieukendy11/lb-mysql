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
	  name : 'Tình Cảm',
	  desciption : 'Phim tình cảm'
      
    },
    {
	  name : 'Hành Động',
	  desciption : 'Phim hành động'
    },
	{
	  name : 'Võ Thuật',
	  desciption : 'Phim võ thuật'
    },
	{
	  name : 'Kiếm Hiệp',
	  desciption : 'Phim Kiếm hiệp'
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
		title: 'Dặc vụ SHIELD 4',
		subtitle: 'Agents of SHIELD Session 4',
		infor: 'Thông tin fiml',
		videolink: "http://aaaaa",
		imagelink: "http://aaaaa",
		view: 1000,
		rate : 8,
		categoryId : 1
    },
    {
		title: 'Mũi Tên Xanh 5',
		subtitle: 'Arrow Session 5',
		infor: 'Thông tin fiml',
		videolink: "http://aaaaa",
		imagelink: "http://aaaaa",
		view: 1000,
		rate : 9,
		categoryId : 1
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