import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBuilding, FaLaptopHouse } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { GiFamilyHouse, GiHouse } from "react-icons/gi";
import { MdHouse, MdOutlineVilla } from "react-icons/md";
// import house images
import House1 from './src/assets/img/houses/house1.png';
import House2 from './src/assets/img/houses/house2.png';
import House3 from './src/assets/img/houses/house3.png';
import House4 from './src/assets/img/houses/house4.png';
import House5 from './src/assets/img/houses/house5.png';
import House6 from './src/assets/img/houses/house6.png';
// import house large images
import House1Lg from './src/assets/img/houses/house1lg.png';
import House2Lg from './src/assets/img/houses/house2lg.png';
import House3Lg from './src/assets/img/houses/house3lg.png';
import House4Lg from './src/assets/img/houses/house4lg.png';
import House5Lg from './src/assets/img/houses/house5lg.png';
import House6Lg from './src/assets/img/houses/house6lg.png';

// import apartments images
import Apartment1 from './src/assets/img/apartments/a1.png';
import Apartment2 from './src/assets/img/apartments/a2.png';

// import apartments large images
import Apartment1Lg from './src/assets/img/apartments/a1lg.png';
import Apartment2Lg from './src/assets/img/apartments/a2lg.png';

export const NAV_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Porperty Listing",
    link: "/listing",
  },
];


export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House1,House2],
    imageLgs: [House1Lg,House2Lg],
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    carPark: '1',
    year: '2016',
    price: '110000'
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House2, House1],
    imageLgs: [House2Lg, House1Lg],
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    carPark: '1',
    year: '2016',
    price: '140000'
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House3,House1,House2],
    imageLgs: [House3Lg,House1Lg,House2Lg],
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    carPark: '1',
    year: '2016',
    price: '170000'
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House4, House3,House1,House2],
    imageLgs: [House4Lg, House3Lg,House1Lg,House2Lg],
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    carPark: '1',
    year: '2016',
    price: '200000'
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House5, House4, House3,House1,House2],
    imageLgs: [House5Lg, House4Lg, House3Lg,House1Lg,House2Lg],
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    carPark: '1',
    year: '2015',
    price: '210000'
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [House6, House5, House4, House3,House1,House2],
    imageLgs: [House6Lg, House5Lg, House4Lg, House3Lg,House1Lg,House2Lg],
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    carPark: '6200 sq ft',
    year: '2014',
    price: '220000'
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [Apartment1, House6, House5, House4, House3,House1,House2],
    imageLgs: [Apartment1Lg, House6Lg, House5Lg, House4Lg, House3Lg,House1Lg,House2Lg],
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    carPark: '1200 sq ft',
    year: '2012',
    price: '20000'
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    images: [Apartment2, Apartment1, House6, House5, House4, House3,House1,House2],
    imageLgs: [Apartment2Lg, Apartment1Lg, House6Lg, House5Lg, House4Lg, House3Lg,House1Lg,House2Lg],
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    carPark: '1000 sq ft',
    year: '2011',
    price: '30000'
  }
]



export const PROPERTIES = [
  {
    icon: GiHouse,
    type: "Apartment",
    count: "58 Properties",
  },
  {
    icon: MdOutlineVilla,
    type: "Villa",
    count: "35 Properties",
  },
  {
    icon: FaBuilding,
    type: "Condo",
    count: "42 Properties",
  },
  {
    icon: MdHouse,
    type: "Townhouse",
    count: "27 Properties",
  },
  {
    icon: FaHouseChimneyWindow,
    type: "Single Family Home",
    count: "63 Properties",
  },
  {
    icon: GiFamilyHouse,
    type: "Duplex",
    count: "18 Properties",
  },
  {
    icon: FaLaptopHouse,
    type: "Studio",
    count: "11 Properties",
  },
  {
    icon: BiSolidBuildingHouse,
    type: "Penthouse",
    count: "8 Properties",
  },
];

export const FEATURED = [
  {
    link: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Texas",
    price: "1400 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Adele",
    price: "1000 USD/month",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Poland",
    price: "1200 USD/month",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Denver",
    price: "800 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Brisbane",
    price: "1500 USD/month",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Team",
    price: "1800 USD/month",
    tag: "Popular",
  },
];

export const QUALITIES = [
  {
    title: "25",
    description: "Years of successful experience ",
  },
  {
    title: "10",
    description: "Operational in 10 countries",
  },
  {
    title: "3000+ ",
    description: "Served clients worldwide",
  },
  {
    title: "200+",
    description: "Dedicated team members",
  },
];

export const DESTINATIONS = [
  {
    link: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "New York",
  },
  {
    link: "https://images.unsplash.com/photo-1634400139456-292e44ca5327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcyUyMHZlZ2FzfGVufDB8fDB8fHww",
    text: "Las Vegas",
  },
  {
    link: "https://images.unsplash.com/photo-1540155945626-66eacf57fcb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8fDA%3D",
    text: "Los Angeles",
  },
  {
    link: "https://images.unsplash.com/photo-1534050359320-02900022671e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuJTIwZnJhbnNpY298ZW58MHx8MHx8fDA%3D",
    text: "San Francisco",
  },
];

export const TESTIMONIALS = [
  {
    text: "Sehome Real Estate made our home buying experience incredible. Their team was not only professional but also incredibly knowledgeable about the local market. We found our dream home, and the entire process was seamless. Thank you, Sehome Real Estate!",
    name: "Pablo Montaya",
    src: "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg",
    company: "CEO - Bella Homes",
  },
  {
    text: "I can't speak highly enough about Sehome Real Estate. As a first-time homebuyer, I had many questions, and their team patiently guided me through every step. Their commitment to client satisfaction and expertise in the real estate market set them apart.",
    name: "Aditya Mishra",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    company: "Founder - Eden Ajency",
  },
  {
    text: "Selling our property with Sehome Real Estate was the best decision we made. Their marketing strategies are innovative, and their negotiation skills are top-notch. We not only got a great deal but also felt supported throughout the entire process. Highly recommend!",
    name: "Sam Udotonga",
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg",
    company: "Founder - Castle Lane Pvt. Ltd",
  },
];
