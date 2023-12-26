import {
  categories1,
  categories10,
  categories11,
  categories12,
  categories4,
  categories5,
  categories7,
  categories8,
  categories9,
  girl1,
  hastag1,
  hastag2,
  hastag3,
  hastag4,
  hastag5,
  hastag6,
  hastag7,
  hastag8,
  whiteCar,
} from "../../assets/img"
import { RatioImages } from "../../components/RatioImages"
import { Icons } from "../Icons"

export const BreadcrumbDemo = [
  {
    key: 1,
    name: "Home",
    link: '/'
  },
  {
    key: 1,
    name: "ContactUs",
    link: '/'
  },
]

export const HasTagDemo = [
  {
    key: 1,
    Image: "https://images.unsplash.com/photo-1662353914951-e22538f1f34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "imageDemo"
  },
  {
    key: 2,
    Image: "https://images.unsplash.com/photo-1642302714792-3853c67b7717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    alt: "demo images"
  },
  {
    key: 1,
    Image: "https://images.unsplash.com/photo-1662353914951-e22538f1f34a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "imageDemo"
  },
  {
    key: 2,
    Image: "https://images.unsplash.com/photo-1642302714792-3853c67b7717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    alt: "demo images"
  },
]

export const mainHasTag = [
  {
    key: 1,
    image: hastag1,
    children: "#food",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 2,
    image: hastag2,
    children: "#animal",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 3,
    image: hastag3,
    children: "#car",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 4,
    image: hastag4,
    children: "#sport",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 5,
    image: hastag5,
    children: "#music",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 6,
    image: hastag6,
    children: "#technology",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 7,
    image: hastag7,
    children: "#abstract",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 8,
    image: hastag8,
    children: "#Nature",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 9,
    image: hastag7,
    children: "#abstract",
    alt: "abc",
    toLink: "abc",
  },
  {
    key: 10,
    image: hastag8,
    children: "#Nature",
    alt: "abc",
    toLink: "abc",
  },
]

/* => Footer Content */

export const footerInstagram = [
  {
    key: 1,
    images: categories1,
    alt: 'InstagramPic1',
  },
  {
    key: 2,
    images: categories7,
    alt: 'InstagramPic2',
  },
  {
    key: 3,
    images: categories8,
    alt: 'InstagramPic3',
  },
  {
    key: 4,
    images: categories5,
    alt: 'InstagramPic4',
  },
  {
    key: 5,
    images: categories9,
    alt: 'InstagramPic5',
  },
  {
    key: 6,
    images: categories10,
    alt: 'InstagramPic6',
  },
  {
    key: 7,
    images: categories11,
    alt: 'InstagramPic4',
  },
  {
    key: 8,
    images: categories12,
    alt: 'InstagramPic5',
  },
  {
    key: 9,
    images: categories4,
    alt: 'InstagramPic6',
  },
]

export const FooterCategories = [
  {
    key: 1,
    children: 'Culture',
    link: '#',
  },
  {
    key: 2,
    children: 'Fashion',
    link: '#',
  },
  {
    key: 3,
    children: 'Featured',
    link: '#',
  },
  {
    key: 4,
    children: 'Food',
    link: '#',
  },
  {
    key: 5,
    children: 'Healthy Living',
    link: '#',
  },
  {
    key: 6,
    children: 'Technology',
    link: '#',
  },
]

export const abc = [
  {
    key: 1,
    SwiperContent: <RatioImages src={whiteCar} />,

  },
  {
    key: 2,
    SwiperContent: "Hello",
  },
];

export const recentPost = [
  {
    key: 1,
    src: whiteCar,
    cardTitle: "How to Drive a Car Safely",
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    key: 2,
    src: girl1,
    cardTitle: "How to Drive a Car Safely How to Make Dance Music",
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    key: 3,
    src: hastag5,
    cardTitle: "How to Drive a Car Safely",
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    key: 4,
    src: categories10,
    cardTitle: "How to Drive a Car Safely How to Make Dance Music",
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
]

export const MegaNewsInfo = [
  {
    key: 1,
    content: 'email : Management@mega.news',
    icons: Icons.EmailIcon,
    link: "#",
  },
  {
    key: 2,
    content: 'Phone number : +1(234) 567-8910',
    icons: Icons.PhoneIcon,
    link: "#",
  },
  {
    key: 3,
    content: 'email : Management@mega.news',
    icons: Icons.FaxIcon,
    link: "#",
  },
  {
    key: 4,
    content: 'email : Management@mega.news',
    icons: Icons.LocationIcon,
    link: "#",
  },
]

export const TextEditorbutton = [
  {
    key: 1,
    PictureIcon: Icons.PictureIcon,
    content: "image",
  },
  {
    key: 2,
    PictureIcon: Icons.ColorPickerIcon,
    content: "color",
  },
  {
    key: 3,
    PictureIcon: Icons.TextIcon,
    content: "text",
  },
  {
    key: 4,
    PictureIcon: Icons.AlignIcon,
    content: "align",
  },
  {
    key: 5,
    PictureIcon: Icons.LinkIcon,
    content: "link",
  },
]