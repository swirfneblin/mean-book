
module.exports.homeList = function(req, res){
	res.render('locations-list', { 
		title : 'Loc8r - Find places to work with wifi near you',
		pageHeader : {
			title : 'Loc8r',
			strapline : 'Find places to work with wifi near you'   
		},
		sidebar: "Loc8r helps places to work with and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations:[
			{
				name: 'Starcups',
				address: '125 High Street, Reading RG6 1PS',
				rating: 3,
				facilities: ['Hot Drink', 'Food', 'Premium wifi'],
				distance: '100m'
			},
			{
				name: 'Cafe hero',
				address: '125 High Street, Reading RG6 1PS',
				rating: 4,
				facilities: ['Hot Drink', 'Food', 'Premium wifi'],
				distance: '200m'
			},
			{
				name: 'Burguer Queen',
				address: '125 High Street, Reading RG6 1PS',
				rating: 2,
				facilities: ['Food', 'Premium wifi'],
				distance: '250m'
			}
		]
	});
};

module.exports.locationInfo = function(req, res){
	res.render('location-info', { title : 'Location info'});
};

module.exports.addReview = function(req, res){
	res.render('location-review-form', { title : 'Add review'});
};