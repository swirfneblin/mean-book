
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
	res.render('location-info', { 
		title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: -23.6023046,
                lng: -46.6427975
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 4,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

module.exports.addReview = function(req, res){
	res.render('location-review-form', { 
 		title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};