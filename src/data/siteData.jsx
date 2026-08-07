import {
  Accessibility,
  Building2,
  Factory,
  HeartPulse,
  Home,
  RefreshCw,
  Settings,
  ShieldCheck,
  Siren,
  Users,
} from 'lucide-react';
import passengerImg from '../assets/premium_lift.png';
import homeImg from '../assets/home_lift.png';
import hospitalImg from '../assets/hospital_lift.png';
import freightImg from '../assets/goods_lift.png';
import observationImg from '../assets/observation-glass-lift.png';
import commercialImg from '../assets/It.png';
import accessibilityImg from '../assets/accessibility-wheelchair-lift.png';
import warehouseImg from '../assets/ware.png';
import hospitalityImg from '../assets/hotel.png';
import industrialImg from '../assets/frigh.png';
import galleryGold from '../assets/gallery-gold-luxe.png';
import gallerySteel from '../assets/gallery-cool-steel.png';
import galleryWalnut from '../assets/gallery-walnut-villa.png';
import galleryPanoramic from '../assets/gallery-panoramic.png';
import rSteelsLogo from '../assets/client-logos/r-steels-cements.png';
import isaivaniLogo from '../assets/client-logos/isaivani-constructions.png';
import urbanVibesLogo from '../assets/client-logos/urban-vibes-mall.png';

export const businessDetails = {
  website: 'www.tridentelevatingsolutions.com',
  email: 'info@tridentelevatingsolutions.com',
  customerCare: '+91 99163 69998 / +91 99163 79998',
  customerCareHref: '+919916369998',
  customerCareNumbers: [
    { label: '+91 99163 69998', href: '+919916369998' },
    { label: '+91 99163 79998', href: '+919916379998' },
  ],
  whatsapp: '+91 99163 69998',
  whatsappHref: '919916369998',
  factoryAddress: 'No. 347, Rajarajeshwari Layout, Begur-Koppa Road, Mylasandra Dinne, Bangalore - 560068.',
  factoryMapQuery: 'Trident Elevating Solutions, Begur - Koppa Rd, Mylsandra Dinne, Bettadasanapura, Bengaluru, Mylasandra, Karnataka 560068',
  branchAddress: 'Urban Vibes Mall, 20th Main Road, near Maruthi Nagar Main Road, Chikka Madivala, BTM 1st Stage, Bengaluru - 560029',
};

export const products = [
  {
    slug: 'passenger-elevators',
    title: 'Passenger Elevators',
    eyebrow: 'Everyday Mobility',
    description: 'Efficient vertical mobility designed for apartments, offices, hotels and mixed-use buildings.',
    detail: 'Configured around traffic, capacity, travel, energy performance and interior expectations.',
    icon: <Users size={24} />,
    image: passengerImg,
  },
  {
    slug: 'home-elevators',
    title: 'Home Elevators',
    eyebrow: 'Private Residences',
    description: 'Quiet, space-conscious elevator solutions created for villas, bungalows and existing homes.',
    detail: 'Planned around available space, access, civil requirements, comfort and architectural character.',
    icon: <Home size={24} />,
    image: homeImg,
  },
  {
    slug: 'hospital-elevators',
    title: 'Hospital Elevators',
    eyebrow: 'Healthcare Movement',
    description: 'Purpose-planned movement for patients, stretchers, attendants and medical teams.',
    detail: 'Cabin dimensions, door width, levelling accuracy and operational flow receive careful attention.',
    icon: <HeartPulse size={24} />,
    image: hospitalImg,
  },
  {
    slug: 'goods-freight-lifts',
    title: 'Goods & Freight Lifts',
    eyebrow: 'Heavy-Duty Transport',
    description: 'Robust vertical transport for factories, warehouses, kitchens and commercial operations.',
    detail: 'Designed around load, loading method, duty cycle, controls and site conditions.',
    icon: <Factory size={24} />,
    image: freightImg,
  },
  {
    slug: 'observation-elevators',
    title: 'Observation Elevators',
    eyebrow: 'Architectural Statement',
    description: 'Panoramic elevator concepts that make vertical movement part of the building experience.',
    detail: 'Glass, structure, lighting and finishes are coordinated with the surrounding architecture.',
    icon: <Building2 size={24} />,
    image: observationImg,
  },
  {
    slug: 'accessibility-solutions',
    title: 'Accessibility Solutions',
    eyebrow: 'Inclusive Movement',
    description: 'Practical mobility for elderly users, wheelchair users and inclusive environments.',
    detail: 'A site assessment determines the most appropriate platform or elevator configuration.',
    icon: <Accessibility size={24} />,
    image: accessibilityImg,
  },
];

export const services = [
  {
    title: 'New Installation',
    number: '01',
    icon: <ShieldCheck size={28} />,
    text: 'Site assessment, technical selection, design coordination, installation planning, testing and handover.',
  },
  {
    title: 'Preventive Maintenance',
    number: '02',
    icon: <Settings size={28} />,
    text: 'Planned inspection and maintenance programs shaped around equipment, usage and operational needs.',
  },
  {
    title: 'Breakdown Support',
    number: '03',
    icon: <Siren size={28} />,
    text: 'A clear service channel for fault reporting, response coordination, diagnosis and corrective work.',
  },
  {
    title: 'Modernization',
    number: '04',
    icon: <RefreshCw size={28} />,
    text: 'Assessment-led upgrades for ageing controls, drives, fixtures, doors, cabins and safety systems.',
  },
];

export const clients = [
  { id: 1, name: 'R Steels and Cements', sector: 'Building Materials', logo: rSteelsLogo },
  { id: 2, name: 'Isaivani Constructions', sector: 'Construction', logo: isaivaniLogo },
  { id: 3, name: 'Urban Vibes Mall (BTM Layout)', sector: 'Retail', logo: urbanVibesLogo },
];

export const galleryItems = [
  { id: 1, category: 'Hospitality', title: 'Midnight Gold', subtitle: 'Champagne metal, smoked mirror and warm linear light', image: galleryGold, concept: true },
  { id: 2, category: 'Commercial', title: 'Azure Line', subtitle: 'Stone, stainless steel and cool architectural light', image: gallerySteel, concept: true },
  { id: 3, category: 'Residential', title: 'Walnut Residence', subtitle: 'Warm timber, satin brass and soft ambient lighting', image: galleryWalnut, concept: true },
  { id: 4, category: 'Hospitality', title: 'Panoramic Halo', subtitle: 'Curved glass, twilight views and a luminous ceiling', image: galleryPanoramic, concept: true },
  { id: 5, category: 'Commercial', title: 'Glass Observation Lift', subtitle: 'Transparent shaft, black steel structure and panoramic movement', image: observationImg },
  { id: 6, category: 'Commercial', title: 'Executive Tower', subtitle: 'A polished arrival experience for the workplace', image: commercialImg },
  { id: 7, category: 'Industrial', title: 'Heavy-Duty Freight', subtitle: 'Practical movement engineered around demanding loads', image: industrialImg },
  { id: 8, category: 'Hospitality', title: 'Grand Lobby', subtitle: 'A welcoming passenger elevator for premium spaces', image: hospitalityImg },
  { id: 9, category: 'Industrial', title: 'Warehouse Mobility', subtitle: 'Reliable goods movement for everyday operations', image: warehouseImg },
  { id: 10, category: 'Residential', title: 'Compact Home Lift', subtitle: 'Space-conscious comfort for private living', image: homeImg },
];

export const faqs = [
  {
    question: 'Which elevator is suitable for my building?',
    answer: 'The right system depends on building type, number of floors, expected traffic, available shaft space, capacity, usage pattern and design goals. A requirement discussion and site assessment should happen before a configuration is selected.',
  },
  {
    question: 'Can a lift be added to an existing home or building?',
    answer: 'Often yes. Feasibility depends on structure, available space, access, pit and overhead conditions, electrical provision and applicable approvals. A site assessment is the correct first step.',
  },
  {
    question: 'What information is needed for an initial proposal?',
    answer: 'Share the project location, building type, number of floors or stops, preferred capacity, approximate shaft dimensions if available, project stage and expected timeline.',
  },
  {
    question: 'Do you provide maintenance and modernization?',
    answer: 'Yes. Trident supports preventive maintenance, repairs and modernization in addition to new installation. Final service coverage and scope are confirmed after equipment and location assessment.',
  },
  {
    question: 'How long does installation take?',
    answer: 'The timeline varies by lift type, number of stops, customization, manufacturing scope, site readiness and approvals. A project-specific schedule is prepared with the final proposal.',
  },
  {
    question: 'Can the elevator cabin be customized?',
    answer: 'Cabin walls, flooring, ceilings, lighting, doors, fixtures and selected accessibility features can be discussed according to the chosen system and technical constraints.',
  },
];
