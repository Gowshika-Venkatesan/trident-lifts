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
import observationImg from '../assets/Lux.png';
import commercialImg from '../assets/It.png';
import warehouseImg from '../assets/ware.png';
import hospitalityImg from '../assets/hotel.png';
import industrialImg from '../assets/frigh.png';

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
    image: commercialImg,
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

export const galleryItems = [
  { id: 1, category: 'Residential', title: 'Luxury home elevator', image: observationImg },
  { id: 2, category: 'Commercial', title: 'Contemporary office elevator', image: commercialImg },
  { id: 3, category: 'Industrial', title: 'Heavy-duty freight system', image: industrialImg },
  { id: 4, category: 'Hospitality', title: 'Hotel passenger elevator', image: hospitalityImg },
  { id: 5, category: 'Industrial', title: 'Warehouse goods lift', image: warehouseImg },
  { id: 6, category: 'Residential', title: 'Private residence elevator', image: homeImg },
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
