export interface ActivityHost {
  name: string
  avatar: string
  role: string
  activitiesHosted: number
}

export interface Activity {
  slug: string
  title: string
  tagline: string
  image: string
  alt: string
  description: string
  aboutSections: string[]
  whoItsFor: string[]
  location: string
  city: string
  date: string
  time: string
  spotsLeft: number
  totalSpots: number
  membersGoing: number
  category: string
  host: ActivityHost
  tags: string[]
  highlights: { icon: string; label: string; value: string }[]
}

export const activities: Activity[] = [
  {
    slug: "board-games",
    title: "Board Games",
    tagline: "Strategy nights and friendly rivalries",
    image: "/images/activity-board-games.png",
    alt: "Friends playing a board game together in a cozy cafe",
    description:
      "Dive into an evening of strategy, laughter, and friendly competition. Our board game nights bring together seasoned strategists and casual players alike for an unforgettable social experience. Whether you're into Catan, Codenames, or classic card games — there's a table waiting for you.",
    aboutSections: [
      "Every session features a curated selection of 15+ games ranging from quick party games to deep strategy titles. Our experienced hosts guide newcomers through rules and help form balanced groups.",
      "Snacks and beverages are provided, and the cozy café atmosphere makes it easy to relax, connect, and make new friends over a shared love of tabletop gaming.",
    ],
    whoItsFor: [
      "Anyone who loves games — no experience needed",
      "People looking to make new friends in a low-pressure setting",
      "Strategy enthusiasts and casual players alike",
      "Ages 21–45, all backgrounds welcome",
    ],
    location: "The Board Room Café, Koramangala",
    city: "Bangalore",
    date: "Every Saturday",
    time: "6:00 PM – 10:00 PM",
    spotsLeft: 6,
    totalSpots: 20,
    membersGoing: 14,
    category: "Games & Social",
    host: {
      name: "Arjun Mehta",
      avatar: "/images/activity-board-games.png",
      role: "Community Host",
      activitiesHosted: 48,
    },
    tags: ["Board Games", "Social", "Indoor", "Weekly", "Beginner Friendly"],
    highlights: [
      { icon: "🎲", label: "Games Available", value: "15+" },
      { icon: "👥", label: "Avg Group Size", value: "12–20" },
      { icon: "🔄", label: "Frequency", value: "Weekly" },
      { icon: "☕", label: "Refreshments", value: "Included" },
    ],
  },
  {
    slug: "bike-rides",
    title: "Bike Rides",
    tagline: "Group rides through the city at golden hour",
    image: "/images/activity-bike-rides.png",
    alt: "A group of friends cycling through the city at sunset",
    description:
      "Experience your city like never before on our golden-hour group rides. Pedal through scenic routes, discover hidden neighborhoods, and feel the wind as the sun paints the sky. Whether you're a weekend warrior or a daily commuter, these rides are about connection, not competition.",
    aboutSections: [
      "Each ride covers 15–25 km through carefully scouted routes that mix urban landmarks with hidden gems. We ride at a comfortable conversational pace — no one gets left behind.",
      "Post-ride, we regroup at a local café or juice bar for refreshments and conversations. It's the perfect blend of adventure and community.",
    ],
    whoItsFor: [
      "Casual and recreational cyclists (bring your own bike or rent one)",
      "Anyone curious about exploring the city on two wheels",
      "Fitness-minded people who prefer social workouts",
      "Ages 18–50, all fitness levels",
    ],
    location: "Cubbon Park Main Gate",
    city: "Bangalore",
    date: "Sundays & Wednesdays",
    time: "5:30 PM – 7:30 PM",
    spotsLeft: 4,
    totalSpots: 25,
    membersGoing: 21,
    category: "Fitness & Outdoors",
    host: {
      name: "Priya Kapoor",
      avatar: "/images/activity-bike-rides.png",
      role: "Ride Leader",
      activitiesHosted: 62,
    },
    tags: ["Cycling", "Outdoors", "Fitness", "Sunset", "Social"],
    highlights: [
      { icon: "🚴", label: "Distance", value: "15–25 km" },
      { icon: "🌅", label: "Best Part", value: "Golden Hour" },
      { icon: "📍", label: "Routes", value: "Curated" },
      { icon: "🥤", label: "Post-ride", value: "Café hangout" },
    ],
  },
  {
    slug: "coffee-meetups",
    title: "Coffee Meetups",
    tagline: "Slow mornings and real conversations",
    image: "/images/activity-coffee.png",
    alt: "Two people talking over coffee at a sunlit cafe",
    description:
      "Start your weekend right with meaningful conversations over expertly brewed coffee. Our coffee meetups are designed for those who value depth over small talk. Each session has a gentle theme — from life goals to travel stories — to spark genuine connections.",
    aboutSections: [
      "Held at carefully chosen specialty cafés, each meetup features a curated conversation theme and icebreaker activities. Groups are kept intentionally small (6–10 people) to ensure everyone feels heard.",
      "Whether you're new to the city or just looking for deeper friendships, these relaxed morning sessions are the perfect antidote to the loneliness epidemic.",
    ],
    whoItsFor: [
      "Introverts and extroverts who crave meaningful connection",
      "Remote workers looking for real-world social outlets",
      "Anyone new to the city wanting to build a friend group",
      "Coffee lovers and conversation enthusiasts",
    ],
    location: "Third Wave Coffee, Indiranagar",
    city: "Bangalore",
    date: "Every Sunday",
    time: "10:00 AM – 12:00 PM",
    spotsLeft: 3,
    totalSpots: 10,
    membersGoing: 7,
    category: "Social & Conversation",
    host: {
      name: "Sneha Iyer",
      avatar: "/images/activity-coffee.png",
      role: "Conversation Host",
      activitiesHosted: 35,
    },
    tags: ["Coffee", "Conversations", "Morning", "Intimate", "Weekly"],
    highlights: [
      { icon: "☕", label: "Coffee", value: "Specialty" },
      { icon: "💬", label: "Format", value: "Themed talks" },
      { icon: "👤", label: "Group Size", value: "6–10" },
      { icon: "🕐", label: "Duration", value: "2 hours" },
    ],
  },
  {
    slug: "concerts",
    title: "Concerts",
    tagline: "Live music with people who get it",
    image: "/images/activity-concerts.png",
    alt: "Friends enjoying a live concert together",
    description:
      "Never go to a concert alone again. Our concert crew discovers the best live performances in the city — from indie acts in intimate venues to rooftop electronica nights. We organize group tickets, pre-show meetups, and post-show hangouts so you experience music the way it was meant to be: together.",
    aboutSections: [
      "Each month, our music curators hand-pick 3–4 events across genres — indie, jazz, electronic, Bollywood live, and more. Members vote on which shows to attend as a group.",
      "Pre-show meetups happen at a nearby spot for food and drinks, and post-show we often carry the energy to a late-night café or rooftop. It's a full-evening social experience, not just a ticket.",
    ],
    whoItsFor: [
      "Music lovers of all genres",
      "People who enjoy nightlife but want a safe, social group to go with",
      "Anyone who's tired of missing concerts because they have 'no one to go with'",
      "Ages 21–40",
    ],
    location: "Various Venues",
    city: "Bangalore",
    date: "2–3 times per month",
    time: "7:00 PM onwards",
    spotsLeft: 12,
    totalSpots: 30,
    membersGoing: 18,
    category: "Music & Nightlife",
    host: {
      name: "Rohan Das",
      avatar: "/images/activity-concerts.png",
      role: "Music Curator",
      activitiesHosted: 29,
    },
    tags: ["Live Music", "Nightlife", "Social", "Group Tickets", "Monthly"],
    highlights: [
      { icon: "🎵", label: "Genres", value: "All types" },
      { icon: "🎫", label: "Tickets", value: "Group rates" },
      { icon: "🍕", label: "Pre-show", value: "Dinner meetup" },
      { icon: "🌙", label: "Post-show", value: "Hangout spot" },
    ],
  },
  {
    slug: "book-clubs",
    title: "Book Clubs",
    tagline: "Stories worth talking about",
    image: "/images/activity-book-club.png",
    alt: "A book club gathering in a cozy living room",
    description:
      "Join a community of curious readers who believe the best books deserve great conversations. Each month, we pick a compelling read — spanning fiction, non-fiction, memoirs, and emerging voices — and come together for a rich, facilitated discussion that goes beyond surface-level reviews.",
    aboutSections: [
      "Our book club isn't your typical 'did you like it?' group. Facilitated by trained discussion leaders, sessions explore themes, authorial intent, and personal reflections that make each meeting feel like a mini literature salon.",
      "We rotate between cozy cafés and members' homes, keeping the atmosphere warm and intimate. Light snacks and chai are always part of the deal.",
    ],
    whoItsFor: [
      "Avid and aspiring readers",
      "People who enjoy thoughtful discussion and diverse perspectives",
      "Anyone looking for an intellectual yet relaxed social circle",
      "All genres welcome — from sci-fi fans to literary fiction lovers",
    ],
    location: "Rotating – Cafés & Member Homes",
    city: "Bangalore",
    date: "Last Sunday of every month",
    time: "4:00 PM – 6:30 PM",
    spotsLeft: 5,
    totalSpots: 15,
    membersGoing: 10,
    category: "Books & Learning",
    host: {
      name: "Kavya Sharma",
      avatar: "/images/activity-book-club.png",
      role: "Book Club Lead",
      activitiesHosted: 24,
    },
    tags: ["Reading", "Discussion", "Monthly", "Intellectual", "Cozy"],
    highlights: [
      { icon: "📚", label: "Books/Year", value: "12" },
      { icon: "🗣️", label: "Format", value: "Facilitated" },
      { icon: "🏠", label: "Venue", value: "Rotating" },
      { icon: "🍵", label: "Snacks", value: "Included" },
    ],
  },
  {
    slug: "brunches",
    title: "Brunches",
    tagline: "Weekend tables that fill themselves",
    image: "/images/activity-brunch.png",
    alt: "Friends sharing a weekend brunch at a sunlit table",
    description:
      "The best friendships are built over good food. Our weekend brunches bring together foodies and social butterflies at the city's most talked-about restaurants and hidden gems. Come hungry, leave with new friends and restaurant recommendations that'll last all month.",
    aboutSections: [
      "Each brunch is at a different restaurant — from trendy new openings to beloved local favorites. We negotiate set menus or recommend the best dishes so you get the full experience without the decision fatigue.",
      "Tables are arranged for easy mingling with conversation cards and icebreakers. Whether you come solo or with a friend, you'll leave feeling like you've known everyone for years.",
    ],
    whoItsFor: [
      "Foodies and restaurant explorers",
      "Social people who love meeting others over meals",
      "Anyone who wants their weekends to feel full and connected",
      "Solo diners looking for company",
    ],
    location: "Rotating – Top Restaurants",
    city: "Bangalore",
    date: "Every other Saturday",
    time: "11:00 AM – 1:30 PM",
    spotsLeft: 8,
    totalSpots: 16,
    membersGoing: 8,
    category: "Food & Social",
    host: {
      name: "Ananya Reddy",
      avatar: "/images/activity-brunch.png",
      role: "Foodie Host",
      activitiesHosted: 41,
    },
    tags: ["Brunch", "Food", "Weekend", "Restaurant Hopping", "Social"],
    highlights: [
      { icon: "🍳", label: "Cuisine", value: "Rotating" },
      { icon: "📍", label: "Restaurants", value: "Curated" },
      { icon: "🪑", label: "Group Size", value: "10–16" },
      { icon: "💰", label: "Split Bill", value: "Easy pay" },
    ],
  },
]

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug)
}

export function getAllActivitySlugs(): string[] {
  return activities.map((a) => a.slug)
}
