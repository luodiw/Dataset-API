var search = req.query.search;
  var query = { deleted: false, active: true };

  if (search) {
    var searchQuery = ".*" + search + ".*";
    _.extend(query, { name: { $regex: searchQuery, $options: 'i' } });
  }

  console.log(query);

  Product.find(query, function(err, products) {
    res.render('discover', {
      title: 'Discover',
      products: products,
      category: category,
      search: search
    });
  });
};

app.get('/discover/search', discover.discover);

div.row
  div.col-lg-6
  div.col-lg-6(style='text-align: right;')
    div.col-sm-6
      form(action="/discover/search")
        .input-group
          input.form-control(type="text" name="search" placeholder="Search" value=search)
          span.input-group-btn
            button.btn.btn-primary(type='submit' style='border-right: 0px;') Go!