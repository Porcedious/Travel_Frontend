import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class TravelDataService {
  private locations = [
    {//maldives
      id: 'maldives',
      name: 'Maldives',
      description: 'Tropical Luxury Island Escape',
      destinationName: 'maldives',
      number: '1',
      heroImage: 'https://res.cloudinary.com/djwss052h/image/upload/v1752073142/maldives_resort_stv7so.webp',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        '1,000+ coral islands with clear blue waters',
        'Top destination for snorkeling and luxury stays',
        'World’s lowest and flattest country',
      ],
      "introSection": {
        "title": "Explore the Maldives",
        "subtitle": "where paradise meets the sea",
        "description": "The Maldives is a tropical island paradise known for luxury overwater villas, white sand beaches, and crystal-clear waters. Perfect for honeymoons, snorkeling, and relaxing beach holidays, it's one of the world’s top luxury travel destinations.",
        "highlights": [
          {
            "icon": "🏝️",
            "title": "Islands",
            "value": "1,000+"
          },
          {
            "icon": "🐠",
            "title": "Coral Reefs",
            "value": "5+"
          },
          {
            "icon": "🏨",
            "title": "Overwater Villas",
            "value": "Luxury"
          },
          {
            "icon": "🤿",
            "title": "Snorkeling Spots",
            "value": "50+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "November to April"
          },
          {
            "label": "Language",
            "value": "Dhivehi (English widely spoken)"
          },
          {
            "label": "Currency",
            "value": "Maldivian Rufiyaa (MVR)"
          },
          {
            "label": "Time Zone",
            "value": "GMT+5"
          }
        ]
      },
      welcomeSection: {
        title: 'Discover the Magic of the Maldives',
        description: 'Welcome to the Maldives — where clear waters, white sands, and luxury stays create the perfect island escape.'
      },
      mappingDetails:
        [
          {
            mappingId: "maafushi",
            mapname: "MAAFUSHI",
            category: "Budget Island",
            mapdescription: "A popular local island offering budget guesthouses, water sports, and a real taste of Maldivian life. Perfect for travelers looking for affordable experiences without compromising on beauty.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Maafushi is one of the most popular local islands in the Maldives, offering a perfect blend of affordability and tropical beauty. Unlike the private resort islands, Maafushi gives travelers a chance to experience authentic Maldivian culture while enjoying activities like snorkeling, diving, jet skiing, and sandbank trips. With plenty of guesthouses and beachside cafés, it’s an ideal destination for backpackers and budget travelers who want the paradise experience without breaking the bank."
          },
          {
            mappingId: "male",
            mapname: "MALE",
            category: "Capital City",
            mapdescription: "The bustling capital of the Maldives known for its colorful buildings, local markets, and rich culture. Great for a quick day visit before heading to the islands.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Male, the capital of the Maldives, is a bustling, colorful city that offers a unique look into local life. Though small in size, the city is rich in culture, history, and architecture. Explore landmarks like the Grand Friday Mosque, the Maldives National Museum, and local markets filled with fresh seafood and tropical fruits. It’s often used as a transit stop, but well worth exploring if you want a glimpse beyond the beaches."
          },
          {
            mappingId: "hulhumale",
            mapname: "HULHUMALE",
            category: "Transit Hub",
            mapdescription: "A modern, planned island close to the airport — perfect for overnight stays. Offers a mix of city convenience and beach access.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Hulhumale is a reclaimed island connected to Male and the international airport, designed to ease travel and urban crowding. It's a convenient base for travelers arriving or departing, offering modern hotels, beach access, cafés, and sunset views. While not as remote or luxurious as other islands, Hulhumale provides a clean and peaceful atmosphere with easy access to the rest of the Maldives."
          },
          {
            mappingId: "vaadhoo",
            mapname: "VAADHOO ISLAND",
            category: "Natural Wonder",
            mapdescription: "Famous for the 'Sea of Stars' — a natural phenomenon where the beach glows blue at night. A magical sight that attracts photographers and nature lovers.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "baa-atoll",
            mapname: "BAA ATOLL",
            category: "UNESCO Biosphere",
            mapdescription: "A protected marine area known for its rich biodiversity and manta ray sightings. Perfect for eco-tourism, diving, and marine exploration.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich island traditions of the Maldives through local music, dance, crafts, and warm hospitality that reflects centuries of history and Islamic influence.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Explore Culture'
        },
        {
          title: 'History',
          description: 'Discover the Maldives’ unique past shaped by Indian, Arab, and Buddhist influences, with ancient mosques, coral-stone architecture, and seafaring heritage across the islands.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Discover History'
        },
        {
          title: 'Nature',
          description: 'Explore untouched beaches, vibrant coral reefs, turquoise lagoons, and tropical marine life — the Maldives is nature’s playground above and below the water.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Experience Nature'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//dubai
      id: 'dubai',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/djwss052h/image/upload/v1751275700/Untitled_design_r34wss.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Bali-Indonesia
      id: 'Indonesia',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com//image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Thailand
      id: 'Thailand',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com//image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Malaysia
      id: 'Malaysia',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
        title: 'Services We Provide in Dubai',
        description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
        services: [
          {
            icon: 'fas fa-drumstick-bite',
            title: 'Local Cuisine',
            description: 'Savor the exquisite local cuisine and dining experiences.'
          },
          {
            icon: 'fas fa-umbrella-beach',
            title: 'Beach Resorts',
            description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
          },
          {
            icon: 'fas fa-hiking',
            title: 'Adventure Tours',
            description: 'Join our adventure tours and explore the breathtaking landscapes.'
          },
          {
            icon: 'fas fa-mountain',
            title: 'Cultural Experiences',
            description: 'Immerse yourself in the rich cultural experiences and traditions.'
          }
        ]
      },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: '4D/3N'
    },
    {//Singapore
      id: 'Singapore',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
        title: 'Services We Provide in Dubai',
        description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
        services: [
          {
            icon: 'fas fa-drumstick-bite',
            title: 'Local Cuisine',imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",            description: 'Savor the exquisite local cuisine and dining experiences.'
          },
          {
            icon: 'fas fa-umbrella-beach',
            title: 'Beach Resorts',
            description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
          },
          {
            icon: 'fas fa-hiking',
            title: 'Adventure Tours',
            description: 'Join our adventure tours and explore the breathtaking landscapes.'
          },
          {
            icon: 'fas fa-mountain',
            title: 'Cultural Experiences',
            description: 'Immerse yourself in the rich cultural experiences and traditions.'
          }
        ]
      },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Turkey
      id: 'Turkey',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Mauritius
      id: 'Mauritius',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      }, mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
    {//Masai-mara
      id: 'Masai-mara',
      name: 'Dubai',
      description: 'A tropical paradise with lush jungles and serene beaches.',
      destinationName: 'bali',
      number: '1',
      heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
      destinationImage:
        [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
        ],
      topImages: [
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
        'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
      ],
      interestingFacts: [
        'Bali has over 20,000 temples.',
        'Known for its traditional Balinese dance performances.',
        'Ubud is the cultural heart of Bali.',
      ],
      "introSection": {
        "title": "Welcome to Dubai",
        "subtitle": "Discover the vibrant culture and stunning landscapes",
        "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
        "highlights": [
          {
            "icon": "🏖️",
            "title": "Beaches",
            "value": "10+"
          },
          {
            "icon": "🏞️",
            "title": "Parks",
            "value": "5+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          },
          {
            "icon": "🏛️",
            "title": "Museums",
            "value": "7+"
          }
        ],
        "quickFacts": [
          {
            "label": "Best Time to Visit",
            "value": "Spring"
          },
          {
            "label": "Language",
            "value": "English"
          },
          {
            "label": "Currency",
            "value": "USD"
          },
          {
            "label": "Time Zone",
            "value": "GMT-5"
          }
        ]
      },
      welcomeSection: {
        title: 'Welcome to Dubai',
        description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
      },
      mappingDetails:
        [
          {
            mappingId: "ubud",
            mapname: "UBUD",
            category: "Cultural Heart",
            mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
            image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "42%", left: "54%" },
            fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
          },
          {
            mappingId: "canggu",
            mapname: "CANGGU",
            category: "Surf Paradise",
            mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
            image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "47%", left: "37%" },
            fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
          },
          {
            mappingId: "gili-trawangan",
            mapname: "GILI TRAWANGAN",
            category: "Island Paradise",
            mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
            image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "35%", left: "83%" },
            fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
          },
          {
            mappingId: "nusa-penida",
            mapname: "NUSA PENIDA",
            category: "Hidden Gem",
            mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
            image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "65%", left: "63%" },
            fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
          },
          {
            mappingId: "seminyak",
            mapname: "SEMINYAK",
            category: "Luxury Beach",
            mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
            MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
            coordinates: { top: "52%", left: "41%" },
            fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
          }
        ],
      aboutItems: [
        {
          title: 'Culture',
          description: 'Experience the rich cultural heritage and traditions of Dubai.',
          imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'History',
          description: 'Explore the historical landmarks and stories that shaped Dubai.',
          imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
          buttonText: 'Read More'
        },
        {
          title: 'Nature',
          description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
          imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
          buttonText: 'Read More'
        }
      ],
      serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'adventure tours',
              description: 'join Our Adventure tours And explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'cultural experiences',
              description: 'immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",
            }
          ]
        },
      itinerary:
        [
          {
            day: 1,
            title: 'Arrival in Paradise',
            transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'No meals included',
            highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
            images: {
              places: [
                'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
          },
          {
            day: 2,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 3,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 4,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
          {
            day: 5,
            title: 'Nusa Penida Island Adventure',
            transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
            locations: [
              {
                name: 'Seminyak Beach',
                description: 'Beautiful beach with world-class surfing',
                images: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ]
              }
            ],
            accommodation: 'The Bali Dream Villa Seminyak',
            mealPlan: 'Breakfast + Lunch',
            highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
            images: {
              places: [
                'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
              ],
              hotel: [
                'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
              ]
            },
            hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
          },
        ],
      cost: 110000,
      duration: "4D/3N",
    },
  ];





  private trendylocations =
    [
      {//Vietnam
        id: 'Vietnam',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//France
        id: 'France',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ], "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//Switzerland
        id: 'Switzerland',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "Https://res.cloudinary.com/djwss052h/image/upload/v1752073141/maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//Georgia
        id: 'Georgia',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//Azarbaijan
        id: 'Azarbaijan',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//Japan
        id: 'Japan',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/Maldives_adventure_mbgilk.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/Maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/Maldives_adventure_mbgilk.jpg",
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.',
              imageUrl: "https://res.cloudinary.com/djwss052h/image/upload/v1752073141/Maldives_adventure_mbgilk.jpg",
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//Andaman
        id: 'Andaman',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
      {//SriLanka
        id: 'SriLanka',
        name: 'Dubai',
        description: 'A tropical paradise with lush jungles and serene beaches.',
        destinationName: 'bali',
        number: '1',
        heroImage: 'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752288/bali_4_ah3phz.jpg',
        destinationImage:
          [
            'https://res.cloudinary.com/dy6qrgrym/image/upload/v1741453341/cld-sample-2.jpg',
          ],
        topImages: [
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_1_ztquft.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752277/maldives_4_fioqla.jpg',
          'https://res.cloudinary.com/dy6qrgrym/image/upload/v1742752273/maldives_5_s4teo4.jpg',
        ],
        interestingFacts: [
          'Bali has over 20,000 temples.',
          'Known for its traditional Balinese dance performances.',
          'Ubud is the cultural heart of Bali.',
        ],
        "introSection": {
          "title": "Welcome to Dubai",
          "subtitle": "Discover the vibrant culture and stunning landscapes",
          "description": "Dubai is a city of wonders and adventures, offering a blend of traditional heritage and modern attractions. From its iconic skyline to beautiful beaches, Dubai promises an unforgettable experience.",
          "highlights": [
            {
              "icon": "🏖️",
              "title": "Beaches",
              "value": "10+"
            },
            {
              "icon": "🏞️",
              "title": "Parks",
              "value": "5+"
            },
            ,
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            },
            {
              "icon": "🏛️",
              "title": "Museums",
              "value": "7+"
            }
          ],
          "quickFacts": [
            {
              "label": "Best Time to Visit",
              "value": "Spring"
            },
            {
              "label": "Language",
              "value": "English"
            },
            {
              "label": "Currency",
              "value": "USD"
            },
            {
              "label": "Time Zone",
              "value": "GMT-5"
            }
          ]
        },
        welcomeSection: {
          title: 'Welcome to Dubai',
          description: 'Discover the vibrant culture and stunning landscapes of Dubai, a city of wonders and adventures.'
        },
        mappingDetails:
          [
            {
              mappingId: "ubud",
              mapname: "UBUD",
              category: "Cultural Heart",
              mapdescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life.",
              image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "42%", left: "54%" },
              fullDescription: "Ubud has been well documented by countless films, photographers, musicians, and writers. The picture-perfect Asian town is known for traditional crafts and dance. The tiny galleries and cafes are the perfect spots to unwind and take a pause from the chaotic life."
            },
            {
              mappingId: "canggu",
              mapname: "CANGGU",
              category: "Surf Paradise",
              mapdescription: "A laid-back beach town known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife. Perfect for surfers and digital nomads.",
              image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "47%", left: "37%" },
              fullDescription: "Canggu is a laid-back beach town that has become a hotspot for surfers, digital nomads, and travelers seeking a relaxed coastal vibe. Known for its world-class surf breaks, trendy beach clubs, and vibrant nightlife scene."
            },
            {
              mappingId: "gili-trawangan",
              mapname: "GILI TRAWANGAN",
              category: "Island Paradise",
              mapdescription: "The largest of the three Gili Islands, known for its pristine beaches, crystal-clear waters, and vibrant marine life. No motorized vehicles allowed.",
              image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "35%", left: "83%" },
              fullDescription: "Gili Trawangan is the largest and most developed of the three Gili Islands. Known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. The island maintains its charm with no motorized vehicles allowed."
            },
            {
              mappingId: "nusa-penida",
              mapname: "NUSA PENIDA",
              category: "Hidden Gem",
              mapdescription: "A rugged island southeast of Bali, famous for its dramatic cliffs, pristine beaches, and Instagram-worthy viewpoints like Kelingking Beach.",
              image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "65%", left: "63%" },
              fullDescription: "Nusa Penida is a rugged island located southeast of Bali, famous for its dramatic limestone cliffs, pristine beaches, and breathtaking viewpoints. Home to the iconic Kelingking Beach and Angel's Billabong."
            },
            {
              mappingId: "seminyak",
              mapname: "SEMINYAK",
              category: "Luxury Beach",
              mapdescription: "Bali's most sophisticated beach resort area, known for its upscale restaurants, luxury resorts, and stylish beach clubs with stunning sunset views.",
              image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400",
              MapLink: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400",
              coordinates: { top: "52%", left: "41%" },
              fullDescription: "Seminyak is Bali's most sophisticated and upscale beach resort area. Known for its luxury resorts, world-class restaurants, designer boutiques, and stylish beach clubs that offer stunning sunset views over the Indian Ocean."
            }
          ],
        aboutItems: [
          {
            title: 'Culture',
            description: 'Experience the rich cultural heritage and traditions of Dubai.',
            imageUrl: 'https://i.postimg.cc/FK4dtp7z/img-1.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'History',
            description: 'Explore the historical landmarks and stories that shaped Dubai.',
            imageUrl: 'https://i.postimg.cc/1XjnLZq1/about-2.jpg',
            buttonText: 'Read More'
          },
          {
            title: 'Nature',
            description: 'Enjoy the natural beauty and serene landscapes of Dubai.',
            imageUrl: 'https://i.postimg.cc/1X9r9PXg/about-3.jpg',
            buttonText: 'Read More'
          }
        ],
        serviceSection: {
          title: 'Services We Provide in Dubai',
          description: 'Explore the range of services we offer to make your stay in Dubai unforgettable.',
          services: [
            {
              icon: 'fas fa-drumstick-bite',
              title: 'Local Cuisine',
imageUrl: "Https://your-image-url.com/image.jpg",              description: 'savor the exquisite local cuisine and dining experiences.'
            },
            {
              icon: 'fas fa-umbrella-beach',
              title: 'Beach Resorts',
              description: 'Relax at our premium beach resorts and enjoy the sun and sea.'
            },
            {
              icon: 'fas fa-hiking',
              title: 'Adventure Tours',
              description: 'Join our adventure tours and explore the breathtaking landscapes.'
            },
            {
              icon: 'fas fa-mountain',
              title: 'Cultural Experiences',
              description: 'Immerse yourself in the rich cultural experiences and traditions.'
            }
          ]
        },
        itinerary:
          [
            {
              day: 1,
              title: 'Arrival in Paradise',
              transfers: 'Airport to Seminyak - The Bali Dream Villa Seminyak on Private Basis',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'No meals included',
              highlights: ['Private villa check-in', 'Seminyak exploration', 'Beach relaxation'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden']
            },
            {
              day: 2,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 3,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 4,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
            {
              day: 5,
              title: 'Nusa Penida Island Adventure',
              transfers: 'Full Day Nusa Penida Tour on SIC Basis Pick Up From Seminyak',
              locations: [
                {
                  name: 'Seminyak Beach',
                  description: 'Beautiful beach with world-class surfing',
                  images: [
                    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
                    'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                  ]
                }
              ],
              accommodation: 'The Bali Dream Villa Seminyak',
              mealPlan: 'Breakfast + Lunch',
              highlights: ['Snorkeling adventure', 'Instagram-worthy spots', 'Island hopping', 'Crystal clear waters'],
              images: {
                places: [
                  'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
                  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg'
                ],
                hotel: [
                  'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
                  'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg'
                ]
              },
              hotelPhotoLabels: ['Ocean View', 'Beachfront', 'Dining Area', 'Swimming Pool', 'Sunset Deck']
            },
          ],
        cost: 110000,
        duration: "4D/3N",
      },
    ];

  getHeroLocations() {
    return this.locations;
  }

  getTrendyLocations() {
    return this.trendylocations;
  }

  getHotelPhotoLabels(destinationId: string, day: number): string[] {
    const location = this.getLocationById(destinationId);
    if (location && location.itinerary && location.itinerary.length >= day) {
      return location.itinerary[day - 1].hotelPhotoLabels || [];
    }
    return [];
  }

  // ✅ Get Location by ID (Updated to use String IDs)
  getLocationById(id: string) {
    return (
      this.locations.find((location) => location.id.toLowerCase() === id.toLowerCase()) ||
      this.trendylocations.find((location) => location.id.toLowerCase() === id.toLowerCase()) ||
      null // Return null if not found in both arrays
    );
  }

  getAllLocations() {
    return [...this.locations, ...this.trendylocations];
  }
}
