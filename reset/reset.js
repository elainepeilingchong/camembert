if (Meteor.isServer) {
    Meteor.methods({
         reset: function () {
            var p1 = {
                _id: "c0a0",
                name: "Langkawi Sky Bridge",
                nature: "place",
                pictures: ["/images/Langkawi/Place/01a.jpg", "/images/Langkawi/Place/01b.jpg","/images/Langkawi/Place/01c.jpg"],
                comments: [],
                description: "The Langkawi Sky Bridge is located at the 'end' of the Cable Car ride. One of the island’s highlights, it is a 410ft-long curved pedestrian bridge above Mount Mat Cinchang. It may sound like a cliché but it is really true - the views from here are simply stunning - great for those Kodak moments! Located 2,300ft above sea level, the Sky Bridge is easily accessible by the Langkawi Cable Car. The journey to the top starts out at the Oriental Village in the upper northwest of Langkawi Island, near Pantai Kok. Once the cable car gets going it gets a little chilly as winds flow through the ventilation slits at the top, so put on a sweater beforehand."
            };
            var p2 = {
                _id: "c0a1",
                name: "Dataran Lang (Eagle Square)",
                nature: "place",
               pictures: ["/images/Langkawi/Place/02a.jpg", "/images/Langkawi/Place/02b.jpg","/images/Langkawi/Place/02c.jpg"],
                comments: [],
                description: "Also known as Eagle Square, Dataran Lang is one of Langkawi’s best known manmade attractions, a large sculpture of an eagle poised to take flight. A sight that greets visitors to the island via ferry, the 12 metre-tall statue is one of the island’s most instantly recognizable monuments. Located at the southeast corner of Pulau Langkawi, besides offering beautiful views of Kuah Bay, Dataran Lang has beautiful miniature fountains, terraces and bridges, making it the ideal place for those postcard-perfect holiday photos. The square is a good place to watch ferries ply across the harbour but plan a trip here early in the morning or late in the evening when the sun is at its least intense."
            };
             var p3 = {
                _id: "c0a2",
                name: "Langkawi Cable Car",
                nature: "place",
               pictures: ["/images/Langkawi/Place/03a.jpg", "/images/Langkawi/Place/03b.jpg","/images/Langkawi/Place/03c.jpg"],
                comments: [],
                description: "The entrance for the Langkawi Cable Car, which takes visitors all the way up to Mount Mat Cincang, Langkawi’s second highest peak,  is located in The Oriental Village in the upper northwest of Langkawi Island, near Pantai Kok. Entering the village and passing through the pleasant oriental garden and souvenir shops, visitors make their payment at a counter before stepping onto an escalator which brings them to the cable-car pedestal. Once in, Langkawi Cable Car ascends; you’ll begin to notice the temperature dropping and a windy breeze begin flowing into the cabin through ventilation slits at the top."
            };
            var p4 = {
                _id: "c0a3",
                name: "Underwater World Langkawi",
                nature: "place",
               pictures: ["/images/Langkawi/Place/04a.jpg", "/images/Langkawi/Place/04b.jpg","/images/Langkawi/Place/04c.jpg"],
                comments: [],
                description: "Spread across nearly six acres, Underwater World Langkawi is one of the island’s best-known attractions. Located at the southern end of Pantai Cenang (almost at the border of Pantai Tengah), beside the Zon duty-free shopping centre, it is Malaysia’s largest aquarium. The huge white-washed structure houses more than 200 different species of marine and freshwater fish including harbour seals, rockhopper penguins, sharks, giant rays and the enormous Amazonian arapaima – the biggest freshwater fish in the world. Once you enter the air-conditioned interior, Araipamas (the world's largest freshwater fish) can be seen in a medium-sized tank in front of the entrance door. The complex is divided into three sections: Tropical Rainforest, Temperate and Sub-Antarctic. The Sub-Antarctic was probably the most popular section – the ‘penguin-arium’ houses cute little rockhopper and black-footed penguins that cause quite a few people to crowd around the exhibit to get a good look. "
            };
            var p5 = {
                _id: "c0a4",
                name: "Pulau Payar Marine Park",
                nature: "place",
               pictures: ["/images/Langkawi/Place/05a.jpg", "/images/Langkawi/Place/05b.jpg","/images/Langkawi/Place/05c.jpg"],
                comments: [],
                description: "Pulau Payar Marine Park is a popular site for snorkelling and diving enthusiasts keen on exploring Langkawi’s undersea action. Just 30km south of the main island, it is about 45 minutes away from the Kuah jetty point and you can take either a catamaran or a speedboat to get here. Comprising four islands, the largest of which is Pulau Payar, and three smaller isles (Pulau Kaca, Pulau Lembu and Pulau Segantang) this marine park is spread over two nautical miles. None of these islands are inhabited and are strictly regulated by the Fisheries Department of Kedah to maintain their pristine condition."
            };
            var e1 = {
                _id: "c0a5",
                name: "Langkawi Squid Challenge",
                nature: "event",
                pictures: ["/images/Langkawi/Event/21.jpg"],
                comments: [],
                description: "Come March, Langkawi is the right place to get yourself jigging as many squid as you can while winning attractive prizes. At night, the brightly lit Andaman Sea attracts the squids  to the surface while participants enjoy the calm and cool sea breeze. An unforgettable experience to the newcomers and surely for regulars.",
                dateStart: new Date('2017-3-10'),
                dateEnd: new Date('2017-3-10')
            };
            var e2 = {
                _id: "c0a6",
                name: "Langkawi Netball League",
                nature: "event",
                pictures: ["/images/Langkawi/Event/22.jpg"],
                comments: [],
                description: "The netball tournament will foster closer relationship among the ladies in the communities. This will encourage a healthy life style and the first ever tournament to be held on the island competing for LADA Puspanita Cup.",
                dateStart: new Date('2017-3-15'),
                dateEnd: new Date('2017-4-15')
            };
            var e3 = {
                _id: "c0a7",
                name: "Langkawi International Maritime & Aerospace Exhibition (LIMA)",
                nature: "event",
                pictures: ["/images/Langkawi/Event/21.jpg"],
                comments: [],
                description: "This biannual event was first held in 1991, since then LIMA has become the most influential military exhibition in Asia to showcase the advance and latest hardware capability. Trade fair on aerospace and marine equipment will also be held at MIEC and Awana Cruise Jetty in March. With over 500 exhibitors, 65 ships and 110 aircrafts from 36 countries, certainly LIMA is an event not to be missed.",
                dateStart: new Date('2017-3-21'),
                dateEnd: new Date('2017-3-25')
            };
            var p6 = {
                _id: "c0a8",
                name: "Grand Aquarium Saint-Malo",
                nature: "place",
               pictures: ["/images/Langkawi/Place/05a.jpg", "/images/Langkawi/Place/05b.jpg","/images/Langkawi/Place/05c.jpg"],
                comments: [],
                description: "Come dream at the Grand Aquarium of Saint Malo ! The aquarium presents 8 themed exhibition rooms from cold abyssal waters to warm tropical waters, a two-hour visit to discover our 50 fish tanks, 10 000 fishes and more than 600 species. The wildlife is colorful, with strange and surprising fish. Dive head first into a deep sea exploration on board the Abyssal Descender, a true-to-life simulator and a unique worldwide attraction."
            };
                var p7 = {
                _id: "c0a9",
                name: "FORT DU PETIT BÉ",
                nature: "place",
               pictures: ["/images/stMalo/Place/02a.jpg", "/images/stMalo/Place/02b.jpg","/images/stMalo/Place/02c.jpg"],
                comments: [],
                description: "Relive the golden era of the Corsair City: authentic anchored battleship, this Vauban fortress of the 17th century is exceptionally located in the Bay of Saint-Malo; from Cap Fréhel to the peninsula of Varde, through the estuary of Rance, it offers an unforgettable view of the Emerald Coast. As a simple visitor or as a master of ceremonies, you will be amazed by the strong character of this original site. Open to the public throughout the year depending on the tides.Access at low tide only"
            };
               var e4 = {
                _id: "c0a10",
                name: "BALADES SUR LE LITTORAL - AU CŒUR DES GRANDES MARÉES",
                nature: "event",
                pictures: ["/images/stMalo/Event/21a.jpg"],
                comments: [],
                description: "Saint-Vincent Esplanade In walk on the open beaches by the highest tides in Europe, the naturalist guide accompanies you from the beach to the fan to the island of Grand Be to explore the landscapes and ecosystems that reveals the low tide. After becoming interested in different species, the expert will explain the tides. Port of suitable footwear recommended. ",
                dateStart: new Date('2017-11-4'),
                dateEnd: new Date('2017-11-4')
            };
            
            Activities.remove({})
            Activities.insert(p1);
            Activities.insert(p2);
            Activities.insert(p3);
            Activities.insert(p4);
            Activities.insert(p5);
            Activities.insert(e1);
            Activities.insert(e2);
            Activities.insert(e3);
            Activities.insert(p6);
            Activities.insert(p7);
            Activities.insert(e4);


            // **** cities
            var langkawi = {
                _id: "c0",
                name: 'Langkawi',
                coordinates: {
                    long: "99.8",
                    lat: "6.35"
                },
                description: "Langkawi is an archipelago made up of 99 islands on Malaysia’s west coast. Surrounded by turquoise sea, the interior of the main island is a mixture of picturesque paddy fields and jungle-clad hills. If you’re intent on carting off duty-free alcohol, cigarettes and chocolate, then this is the place to be. Still, nature lovers will find the island just as agreeable as the shoreline is fringed by powder-fine sand and swaying coconut trees. The island is especially recognised for its excellent diving opportunities and this tropical gem hides a treasure trove of other exciting holiday opportunities. From the expansive Underwater World Langkawi along Pantai Cenang to the soaring Cable Car in Pantai Kok, Langkawi is an electrifying locale that keeps visitors coming back for more. ",
                picture: '/images/Langkawi/ExtraImage/00a.jpg',
                activities: [{
                    _id: p1._id,
                    name: p1.name,
                    nature: p1.nature,
                    picture: p1.pictures[0]
  }, {
                    _id: p2._id,
                    name: p2.name,
                    nature: p2.nature,
                    picture: p2.pictures[0]
  },{
                    _id: p3._id,
                    name: p3.name,
                    nature: p3.nature,
                    picture: p3.pictures[0]
  },{
                    _id: p4._id,
                    name: p4.name,
                    nature: p4.nature,
                    picture: p4.pictures[0]
  } ,{
                    _id: p5._id,
                    name: p5.name,
                    nature: p5.nature,
                    picture: p5.pictures[0]
  } , {
                    _id: e1._id,
                    name: e1.name,
                    nature: e1.nature,
                    picture: e1.pictures[0]
  }, {
                    _id: e2._id,
                    name: e2.name,
                    nature: e2.nature,
                    picture: e2.pictures[0]
  }, {
                    _id: e3._id,
                    name: e3.name,
                    nature: e3.nature,
                    picture: e3.pictures[0]
  }]
            };
            var stM = {
                _id: "c1",
                name: 'Saint-Malo',
                coordinates: {
                    long: "2.0257",
                    lat: "48.6493"
                },
                description: "Saint-Malo is a coastal city in Brittany, in France's northwest. Tall granite walls surround the old town, which was once a stronghold for privateers (pirates approved by the king). The Saint-Malo Cathedral, in the center of the old town, is built in Romanesque and Gothic styles and features stained-glass windows depicting city history. Nearby is La Demeure de Corsaire, an 18th-century privateer’s house and museum.",
                picture: '/images/stMalo/ExtraImage/00a.jpg',
                activities: [{
                    _id: p1._id,
                    name: p1.name,
                    nature: p1.nature,
                    picture: p1.pictures[0]
  }, {
                    _id: p2._id,
                    name: p2.name,
                    nature: p2.nature,
                    picture: p2.pictures[0]
  },{
                    _id: p3._id,
                    name: p3.name,
                    nature: p3.nature,
                    picture: p3.pictures[0]
  }, {
                    _id: e4._id,
                    name: e4.name,
                    nature: e4.nature,
                    picture: e4.pictures[0]
  }]
            };
            Cities.remove({});
            Cities.insert(langkawi);
            Cities.insert(stM);
    }});
};
