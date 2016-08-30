db.locations.save({
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    coords: [-23.6023046, -46.6427975],
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
    }]
})


db.locations.find().select('name reviews').pretty()

db.locations.update({
    name: 'Starcups' 
},{
    $push: {
      reviews: {
                id: ObjectId(),
                author: 'Charles Damasceno',
                rating: 4,
                timestamp: new Date("Jul 21, 2015"),
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }
    }
})