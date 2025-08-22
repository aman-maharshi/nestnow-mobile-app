import icons from "./icons"
import images from "./images"

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan
  }
]

export const featured = [
  {
    id: "1",
    name: "Luxury Penthouse",
    type: "Penthouse",
    price: 8500,
    rating: 4.9,
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    image: images.newYork,
    category: "penthouse",
    description:
      "Stunning luxury penthouse with panoramic city views. Features high-end finishes, private terrace, and exclusive amenities. Perfect for those seeking the ultimate urban luxury experience.",
    address: "1235 Park Avenue, Manhattan, New York, NY 10021",
    agent: {
      name: "Michael Chen",
      email: "michael.chen@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Gym", "Pool", "Concierge", "Private Terrace"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Jennifer Lopez",
        rating: 5,
        review: "Absolutely breathtaking penthouse! The views are incredible and the amenities are world-class.",
        date: "2024-01-20",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "David Wilson",
        rating: 5,
        review: "The best property I've ever stayed in. Everything is perfect from the location to the finishes.",
        date: "2024-01-18",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "2",
    name: "Modern Villa",
    type: "Villa",
    price: 12000,
    rating: 4.8,
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    image: images.japan,
    category: "villa",
    description:
      "Contemporary villa with stunning architecture and luxurious amenities. Features a private pool, home theater, and beautiful gardens. Ideal for families who appreciate modern design and privacy.",
    address: "456 Sunset Boulevard, Beverly Hills, Los Angeles, CA 90210",
    agent: {
      name: "Sarah Johnson",
      email: "sarah.johnson@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Gym", "Pool", "Home Theater", "Garden", "Security"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Emma Thompson",
        rating: 5,
        review: "This villa exceeded all expectations. The design is stunning and the location is perfect.",
        date: "2024-01-22",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Robert Davis",
        rating: 4,
        review: "Beautiful property with great amenities. The pool area is fantastic for entertaining.",
        date: "2024-01-19",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "3",
    name: "Waterfront Condo",
    type: "Condo",
    price: 6200,
    rating: 4.7,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    image: images.london,
    category: "condo",
    description:
      "Beautiful waterfront condo with stunning ocean views. Features modern appliances, balcony access, and beachfront location. Perfect for those who love the ocean and modern living.",
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    agent: {
      name: "Carlos Rodriguez",
      email: "carlos.rodriguez@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Gym", "Pool", "Beach Access", "Balcony"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Maria Garcia",
        rating: 5,
        review: "The ocean views are absolutely incredible! This condo is perfect for beach lovers.",
        date: "2024-01-21",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "James Brown",
        rating: 4,
        review: "Great location and beautiful property. The amenities are top-notch.",
        date: "2024-01-17",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "4",
    name: "Historic Townhouse",
    type: "Townhouse",
    price: 9800,
    rating: 4.6,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    image: images.mumbai,
    category: "townhouse",
    description:
      "Charming historic townhouse with modern updates. Features original architectural details, private garden, and elegant finishes. Perfect for those who appreciate history and character.",
    address: "321 M Street, Georgetown, Washington, DC 20007",
    agent: {
      name: "Amanda Foster",
      email: "amanda.foster@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Garden", "Fireplace", "Original Details", "Security"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Thomas Anderson",
        rating: 5,
        review: "This townhouse has so much character! The historic details are beautifully preserved.",
        date: "2024-01-23",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Lisa Chen",
        rating: 4,
        review: "Beautiful property with great location. The garden is perfect for outdoor dining.",
        date: "2024-01-20",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
]

export const ourRecommendation = [
  {
    id: "5",
    name: "Cozy Studio",
    type: "Studio",
    price: 2800,
    rating: 4.5,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: images.italy,
    category: "studio",
    description:
      "Charming studio apartment perfect for singles or couples. Features efficient use of space, modern appliances, and a great location. Ideal for those starting their urban journey.",
    address: "567 Bedford Avenue, Brooklyn, NY 11211",
    agent: {
      name: "Rachel Green",
      email: "rachel.green@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Laundry", "Gym", "Roof Access", "Pet Friendly"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Alex Turner",
        rating: 5,
        review: "Perfect studio for my needs. The space is well-designed and the location is fantastic.",
        date: "2024-01-19",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Sophie Martin",
        rating: 4,
        review: "Great little studio with everything I need. The building amenities are a nice bonus.",
        date: "2024-01-16",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "6",
    name: "Family House",
    type: "House",
    price: 4200,
    rating: 4.4,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: images.kashmir,
    category: "house",
    description:
      "Spacious family home with large backyard and modern amenities. Features open floor plan, updated kitchen, and plenty of storage. Perfect for growing families who need space and comfort.",
    address: "890 Oak Street, Austin, TX 78701",
    agent: {
      name: "Mark Johnson",
      email: "mark.johnson@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Garden", "Storage", "Updated Kitchen", "Pet Friendly"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Jennifer Smith",
        rating: 5,
        review: "Perfect family home! The backyard is huge and the kids love the space.",
        date: "2024-01-18",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Mike Wilson",
        rating: 4,
        review: "Great house with lots of room. The kitchen is beautiful and well-equipped.",
        date: "2024-01-15",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "7",
    name: "Downtown Loft",
    type: "Loft",
    price: 3600,
    rating: 4.3,
    bedrooms: 1,
    bathrooms: 1,
    area: 1200,
    image: images.london,
    category: "loft",
    description:
      "Industrial-style loft in the heart of downtown. Features exposed brick, high ceilings, and modern finishes. Perfect for creative professionals who love urban living.",
    address: "234 Michigan Avenue, Chicago, IL 60601",
    agent: {
      name: "David Kim",
      email: "david.kim@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Gym", "Exposed Brick", "High Ceilings", "Pet Friendly"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Sarah Miller",
        rating: 5,
        review: "Love the industrial aesthetic! The exposed brick and high ceilings give it so much character.",
        date: "2024-01-17",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Chris Taylor",
        rating: 4,
        review: "Great loft with perfect location. The space is well-designed and very comfortable.",
        date: "2024-01-14",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "8",
    name: "Garden Apartment",
    type: "Apartment",
    price: 3100,
    rating: 4.2,
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    image: images.mumbai,
    category: "apartment",
    description:
      "Charming garden apartment with private outdoor space. Features updated kitchen, hardwood floors, and beautiful landscaping. Perfect for those who love nature and outdoor living.",
    address: "567 Pine Street, Seattle, WA 98101",
    agent: {
      name: "Emily Davis",
      email: "emily.davis@nestnow.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    facilities: ["WiFi", "Parking", "Garden", "Hardwood Floors", "Updated Kitchen", "Balcony"],
    gallery: [
      { $id: "1", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "2", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "3", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" },
      { $id: "4", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop" }
    ],
    reviews: [
      {
        $id: "1",
        user: "Lisa Wang",
        rating: 4,
        review: "Beautiful garden apartment with great outdoor space. The landscaping is lovely.",
        date: "2024-01-16",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        $id: "2",
        user: "Tom Anderson",
        rating: 4,
        review: "Nice apartment with good amenities. The location is convenient and quiet.",
        date: "2024-01-13",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  }
]

// allProperties combines featured and ourRecommendation
export const allProperties = [...featured, ...ourRecommendation]

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house"
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat"
  }
]

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" }
]

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar
  },
  {
    title: "Payments",
    icon: icons.wallet
  },
  {
    title: "Profile",
    icon: icons.person
  },
  {
    title: "Notifications",
    icon: icons.bell
  },
  {
    title: "Security",
    icon: icons.shield
  },
  {
    title: "Help Center",
    icon: icons.info
  },
  {
    title: "Invite Friends",
    icon: icons.people
  }
]

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry
  },
  {
    title: "Car Parking",
    icon: icons.carPark
  },
  {
    title: "Sports Center",
    icon: icons.run
  },
  {
    title: "Cutlery",
    icon: icons.cutlery
  },
  {
    title: "Gym",
    icon: icons.dumbell
  },
  {
    title: "Swimming pool",
    icon: icons.swim
  },
  {
    title: "Wifi",
    icon: icons.wifi
  },
  {
    title: "Pet Center",
    icon: icons.dog
  }
]

export const gallery = [
  {
    id: 1,
    image: images.newYork
  },
  {
    id: 2,
    image: images.japan
  },
  {
    id: 3,
    image: images.newYork
  },
  {
    id: 4,
    image: images.japan
  },
  {
    id: 5,
    image: images.newYork
  },
  {
    id: 6,
    image: images.japan
  }
]
