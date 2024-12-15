import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";
import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.jpg";

const tour = [
  {
    id: "01",
    title: "Kashmir Valley Expedition",
    city: "Srinagar",
    address: "Srinagar, Kashmir, India",
    distance: 200,
    price: 199,
    maxGroupSize: 15,
    desc: "Embark on an unforgettable journey through the picturesque Kashmir Valley. Cruise along Dal Lake, explore Mughal gardens, and admire the snow-capped peaks.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false
  },
  {
    id: "02",
    title: "Gujarat Heritage Trail",
    city: "Ahmedabad",
    address: "Ahmedabad, Gujarat, India",
    distance: 300,
    price: 149,
    maxGroupSize: 20,
    desc: "Discover the rich heritage of Gujarat as you explore ancient temples, stepwells, and palaces. Immerse yourself in the vibrant culture and architectural marvels.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg14,
    featured: false
  },
  {
    id: "03",
    title: "Andaman Island Adventure",
    city: "Port Blair",
    address: "Port Blair, Andaman and Nicobar Islands, India",
    distance: 500,
    price: 299,
    maxGroupSize: 20,
    desc: "Experience the ultimate adventure in the pristine Andaman Islands. Snorkel in crystal-clear waters, trek through lush forests, and relax on sun-kissed beaches.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false
  },
  {
    id: "04",
    title: "Goa Beach Party",
    city: "Goa",
    address: "Baga Beach, Goa, India",
    distance: 150,
    price: 79,
    maxGroupSize: 25,
    desc: "Join the ultimate beach party experience in Goa! Dance to the latest tunes, enjoy delicious cocktails, and soak up the vibrant atmosphere of Baga Beach.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false
  },
  {
    id: "05",
    title: "Varanasi Spiritual Tour",
    city: "Varanasi",
    address: "Varanasi, Uttar Pradesh, India",
    distance: 300,
    price: 109,
    maxGroupSize: 15,
    desc: "Embark on a spiritual journey to Varanasi, one of the oldest and holiest cities in India. Witness mesmerizing Ganga Aarti ceremonies and explore ancient temples.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false
  },
  {
    id: "06",
    title: "Tamil Nadu Temple Tour",
    city: "Chennai",
    address: "Chennai, Tamil Nadu, India",
    distance: 400,
    price: 129,
    maxGroupSize: 25,
    desc: "Explore the magnificent temples of Tamil Nadu, renowned for their architectural grandeur and spiritual significance. Visit Madurai, Thanjavur, and Rameswaram.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: false
  },
  {
    id: "07",
    title: "Westminster Bridge",
    city: "London",
    address: "Westminster Bridge Road, London SE1 7PD, United Kingdom",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Enjoy a scenic walk across the iconic Westminster Bridge and take in breathtaking views of the River Thames and London skyline.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true
  },  
  {
    id: "08",
    title: "Eiffel Tower",
    city: "Paris",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    distance: 500,
    price: 149,
    maxGroupSize: 15,
    desc: "Experience the majesty of the Eiffel Tower up close with a guided tour to the top. Enjoy panoramic views of Paris and learn about the tower's history.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true
  },
  {
    id: "09",
    title: "Bali Beach",
    city: "Bali",
    address: "Kuta Beach, Badung Regency, Bali, Indonesia",
    distance: 200,
    price: 69,
    maxGroupSize: 15,
    desc: "Relax on the pristine shores of Bali's famous Kuta Beach. Enjoy swimming, sunbathing, and stunning sunsets with a refreshing drink in hand.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true
  },
  {
    id: "10",
    title: "Statue of Liberty",
    city: "New York City",
    address: "Liberty Island, New York, NY 10004, United States",
    distance: 400,
    price: 129,
    maxGroupSize: 12,
    desc: "Embark on a ferry ride to Liberty Island and explore the iconic Statue of Liberty. Learn about its significance as a symbol of freedom and democracy.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true
  },
  {
    id: "11",
    title: "Bangkok Night Market",
    city: "Bangkok",
    address: "Bangkok, Thailand",
    distance: 300,
    price: 99,
    maxGroupSize: 20,
    desc: "Experience the vibrant atmosphere of Bangkok's bustling night markets. Explore stalls selling everything from local street food to trendy fashion.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true
  },  
  {
    id: "12",
    title: "Great Wall of China",
    city: "Beijing",
    address: "Huairou District, Beijing, China",
    distance: 1000,
    price: 199,
    maxGroupSize: 20,
    desc: "Walk along one of the greatest architectural wonders of the world, the Great Wall of China. Marvel at its vastness and rich history as you explore various sections.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true
  },
  {
    id: "13",
    title: "Mt. Fuji Hiking",
    city: "Tokyo",
    address: "Mount Fuji, Yamanashi Prefecture, Japan",
    distance: 600,
    price: 179,
    maxGroupSize: 10,
    desc: "Embark on an exhilarating hike up Japan's iconic Mt. Fuji. Enjoy breathtaking views of the surrounding landscape and immerse yourself in nature.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true
  },
  {
    id: "14",
    title: "Sydney Opera House",
    city: "Sydney",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
    distance: 250,
    price: 79,
    maxGroupSize: 8,
    desc: "Discover the architectural marvel of the Sydney Opera House on a guided tour. Learn about its design, construction, and cultural significance.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg15,
    featured: true
  },  
  {
    id: "15",
    title: "Hanoi Street Food",
    city: "Hanoi",
    address: "Hanoi, Vietnam",
    distance: 200,
    price: 59,
    maxGroupSize: 20,
    desc: "Indulge in the tantalizing flavors of Vietnamese cuisine on a street food adventure in Hanoi. Taste local specialties and savor authentic dishes.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true
  }
];

export default tour;
