# YELP! Duck Duck Go instant local

Lookup for a place in yelp using duckduckgo instant script

## Requirements

```node >= 8```

## Installation

```npm i```

## Usage

```node index.js "{PLACE_NAME}" "{LOCATION}"```

### Usage example:

```node index.js "Ghazal Arabian Food" "Florianópolis, Santa Catarina"```

### Example Output:

```json
    {
        "signal": "medium",
        "local_source": "exact_match",
        "results": [
            {
                "exact_match": 0,
                "returned_categories": [
                    [
                        "Food Trucks",
                        "foodtrucks"
                    ],
                    [
                        "Vegan",
                        "vegan"
                    ],
                    [
                        "Arabian",
                        "arabian"
                    ]
                ],
                "phone": "+55 (48) 99901-6916",
                "photoURL": "https://www.yelp.com/biz_photos/ghazal-arabian-food-florian%C3%B3polis?adjust_creative=dWJMtmYxpd5N5yoyzSuhtA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=dWJMtmYxpd5N5yoyzSuhtA",
                "url": "https://www.yelp.com/biz/ghazal-arabian-food-florian%C3%B3polis?adjust_creative=dWJMtmYxpd5N5yoyzSuhtA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=dWJMtmYxpd5N5yoyzSuhtA",
                "id": "ghazal-arabian-food-florianópolis",
                "coordinates": {
                    "longitude": -48.45697,
                    "latitude": -27.4287
                },
                "image": "https://s3-media3.fl.yelpcdn.com/bphoto/FRwKImoWsrJFIEVesIKpZQ/ls.jpg",
                "distance": 21526.4228176427,
                "address_lines": [
                    "R. Madre Maria Vilac, 1490",
                    "Central Park",
                    "Florianópolis - SC 88054-001",
                    "Brazil"
                ],
                "id_words": [
                    "ghazal",
                    "arabian",
                    "food",
                    "florianópolis"
                ],
                "name": "Ghazal Arabian Food",
                "neighborhood": "",
                "review_detail": [],
                "reviews": 0,
                "thumbnails": [
                    "https://s3-media3.fl.yelpcdn.com/bphoto/T6NW7lpRvXSBEuHh3cHA9Q/ms.jpg",
                    "https://s3-media4.fl.yelpcdn.com/bphoto/4fN401jZgdC7ZDKj3O13OA/ms.jpg",
                    "https://s3-media2.fl.yelpcdn.com/bphoto/zzInQu9FzSIwtIhSoS-bDg/ms.jpg"
                ],
                "closed": false,
                "menu": "",
                "rating": 0,
                "price": 0,
                "boosted": 0,
                "engine": "Yelp",
                "hours": {
                    "Thu": "6:30pm-11:00pm",
                    "Mon": "6:30pm-11:00pm",
                    "Wed": "6:30pm-11:00pm",
                    "Sun": "6:30pm-11:00pm",
                    "Fri": "6:30pm-11:00pm",
                    "Sat": "6:30pm-11:00pm",
                    "Tue": "6:30pm-11:00pm"
                },
                "address": "R. Madre Maria Vilac, 1490, Central Park, Florianópolis - SC 88054-001, Brazil",
                "city": "Florianópolis"
            }
        ],
        "proximity": 1,
        "vqd": {
            "Ghazal%20Arabian%20Food": "111388234582231074290475707584048214721"
        },
        "query": "Ghazal Arabian Food",
        "ads": [],
        "more_at": "http://www.yelp.com/search?find_desc=ghazal%20arabian%20food&find_loc=%2D27.5904%2C%2D48.5758"
    }
```