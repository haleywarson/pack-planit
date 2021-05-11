Trip.destroy_all
PackingList.destroy_all 

Trip.create([
    {
    name: "Mt. Zirkel Wilderness",
    location: "Walden, CO 80480",
    image: "https://cdn-assets.alltrails.com/uploads/photo/image/30268891/large_8bff4529da20d207850b64a03fbccf0d.jpg",
    start_date: 07-01-2008,
    end_date: 07-03-2008,
    category: "Backpacking",
    miles: 12,
    difficulty: "Moderate",
    rating: 4,
    notes: "Had slide waterfall!"
    }
])

PackingList.create([
    {
    name: "General backpacking list",
    list: [
        "Food",
        "Day pack", 
        "Backpack" ,
        "Tent",
        "Tent stakes", 
        "Sleeping bag",
        "Sleeping pad",
        "Pack cover",
        "Headlamp",
        "First aid kit",
        "Toilet paper" ,
        "Matches/flint" ,
        "Duct tape",
        "Knife/multi-tool",
        "Rope/cord/bungee",
        "Fuel" ,
        "Bear bag" ,
        "Pots" ,
        "Cups",
        "Utensils",
        "Water treatment device" ,
        "Trash bag",
        "Water bottles" ,
        "Water bladders" ,
        "Instant coffee",
        "Sunglasses" ,
        "Hat",
        "Rain gear" ,
        "Camp sandals" ,
        "Hiking shoes",
        "Hiking socks" ,
        "Sweatshirt" ,
        "Long underwear" ,
        "Gloves" ,
        "Swimsuit",
        "Bandanas",
        "Sunscreen" ,
        "Bug spray" ,
        "Wet wipes",
        "Toiletries",
        "Chapstick",
        "Deodorant",
        "Quick-dry towel",
        "Hand sanitizer",
        "Soap" ,
        "Season parks pass",
        "Map/directions",
        "Compass" ,
        "Cell phone",
        "Cash",
        "Book/entertainment",
        "Tarp"
    ]},
    {
    name: "General camping list",
    list: [
        "Food",
        "Foil",
        "Paper towel",
        "Tongs",
        "Camp chair",
        "Day pack", 
        "Backpack" ,
        "Tent",
        "Tent stakes", 
        "Sleeping bag",
        "Sleeping pad",
        "Hammock",
        "Hammock strings",
        "Pack cover",
        "Tarp",
        "Headlamp",
        "First aid kit",
        "Extra batteries",
        "Toilet paper" ,
        "Matches/flint" ,
        "Duct tape",
        "Knife/multi-tool",
        "Collapsible sink",
        "Rope/cord/bungee",
        "Lantern",
        "Fuel" ,
        "Bear bag" ,
        "Pots" ,
        "Cups",
        "Utensils",
        "Water treatment device" ,
        "Trash bag",
        "Water bottles" ,
        "Coffee maker",
        "Coffee filters",
        "Water bladders" ,
        "Sunglasses" ,
        "Hat",
        "Rain gear" ,
        "Camp sandals" ,
        "Hiking shoes",
        "Hiking socks" ,
        "Sweatshirt" ,
        "Long underwear" ,
        "Gloves" ,
        "Swimsuit",
        "Bandanas",
        "Sunscreen" ,
        "Bug spray" ,
        "Wet wipes",
        "Toiletries",
        "Chapstick",
        "Deodorant",
        "Quick-dry towel",
        "Hand sanitizer",
        "Soap" ,
        "Season parks pass",
        "Map/directions",
        "Compass" ,
        "Cell phone",
        "Cash",
        "Book/entertainment",
        "Picnic blanket"
    ]
    }
])
