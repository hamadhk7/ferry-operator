// File: data/operators.ts
import { Operator } from '@/types';

export const operators: Operator[] = [
  {
    id: 'blue-star-ferries',
    name: 'Blue Star Ferries',
    logo: '/images/blue-star-ferries.png',
    rating: 4.5,
    customersCount: 1342,
    operatesIn: ['Greece'],
    flags: ['greece'],
    vesselsNumber: 8,
    ferryTypes: {
      normal: 8,
      highSpeed: 0,
    },
    popularVessels: [
      { name: 'Blue Star Delos', link: '#' },
      { name: 'Blue Star Naxos', link: '#' },
    ],
    description: [
      'Blue Star Ferries is currently the biggest ferry company in Greece.',
      'It is a member of Attica Group, one of the most significant companies in the Greek shipping industry.',
      'Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc), Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 30 destinations in total. Even though Blue Star...',
    ],
  },
  {
    id: 'seajets',
    name: 'Seajets',
    logo: '/images/seajets.png',
    rating: 4,
    customersCount: 2467,
    operatesIn: ['Greece'],
    flags: ['greece'],
    vesselsNumber: 17,
    ferryTypes: {
      normal: 10,
      highSpeed: 7,
    },
    popularVessels: [
      { name: 'Worldchampion Jet', link: '#' },
      { name: 'Seajet 2', link: '#' },
    ],
    description: [
      'Seajets is the biggest company of high-speed vessels of the Aegean Sea.',
      'It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services.',
      'The company\'s passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.',
      'Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrio) and other ports of the mainland (Thessaloniki, Kavala, Alexandroupoli) and...',
    ],
  },
  {
    id: 'anek-superfast',
    name: 'Anek-Superfast',
    logo: '/images/anek-superfast.png',
    rating: 4,
    customersCount: 667,
    operatesIn: ['Greece', 'Italy'],
    flags: ['greece', 'italy'],
    vesselsNumber: 5,
    ferryTypes: {
      normal: 5,
      highSpeed: 0,
    },
    popularVessels: [
      { name: 'Superfast XI', link: '#' },
      { name: 'Superfast XII', link: '#' },
    ],
    description: [
      'Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries.',
      'The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology.',
      'The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also Italy with Greece from the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and...',
    ],
  },
];