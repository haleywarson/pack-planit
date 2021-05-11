Trip.destroy_all

Trip.create([
    {
    name: "Maroon Bells",
    location: "Vail",
    start_date: 04-01-2020,
    end_date: 04-03-2020,
    category: "Camping",
    length: 12,
    difficulty: "Difficult",
    rating: 4 
    },
    {
    name: "Aspenglow",
    location: "Aspen",
    start_date: 05-01-2020,
    end_date: 05-03-2020,
    category: "Backpacking",
    length: 10,
    difficulty: "Moderate",
    rating: 3 
    },
    {
    name: "Flatirons",
    location: "Boulder",
    start_date: 06-01-2020,
    end_date: 06-03-2020,
    category: "Backpacking",
    length: 6,
    difficulty: "Easy",
    rating: 2 
    }
])