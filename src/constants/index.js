import { shieldTick, support, truckFast } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        id: 1,
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        id: 2,
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        id: 3,
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        id: 1,
        name: "$200.20",
        service: "$200.20",
    },
    {
        imgURL: shoe5,
        id: 2,
        name: "$200.20",
        service: "$210.20",
    },
    {
        imgURL: shoe6,
        id: 3,
        name: "$200.20",
        service: "$220.20",
    },
    {
        imgURL: shoe7,
        id: 4,
        name: "$200.20",
        service: "$230.20",
    },
    {
        imgURL: shoe7,
        id: 5,
        name: "$200.20",
        service: "$230.20",
    },
    {
        imgURL: shoe7,
        id: 6,
        name: "$200.20",
        service: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Panel Upgrades", link: "/" },
            { name: "Wiring", link: "/" },
            { name: "Home Security Systems", link: "/" },
            { name: "Pot Lights", link: "/" },
            { name: "Insulation", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About Us", link: "#about-us" },
            { name: "FAQs", link: "/" },
            { name: "Our Team", link: "/" },
            { name: "Testimonials", link: "#reviews" },
        ],
    },
    {
        title: "Get in Touch!",
        links: [
            { name: "email@email.com", link: "mailto:email@email.com" },
            { name: "+1 123-456-7890", link: "tel:+11234567890" },
        ],
    },
];