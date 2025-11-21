import React from 'react';
import { Truck, Package, Map, Users, FileText, ShieldCheck, Anchor, Bus, Car } from 'lucide-react';
import { Qualification, Service, Stat, Testimonial } from './types';

// Core Qualifications Data
export const QUALIFICATIONS: Qualification[] = [
  // Legacy SAQA
  {
    id: 'prof-driving',
    category: 'Legacy SAQA',
    saqaId: '50285',
    title: 'National Cert: Professional Driving',
    nqfLevel: 3,
    description: 'Ensures competent professional driving, improving earning capacity and transport professionalism.'
  },
  {
    id: 'freight-handling',
    category: 'Legacy SAQA',
    saqaId: '57831',
    title: 'National Cert: Freight Handling',
    nqfLevel: 3,
    description: 'Provides integrated practical/theoretical grounding in freight handling (Warehousing, Port Ops).'
  },
  // QCTO Occupational
  {
    id: 'bus-driver',
    category: 'QCTO Occupational',
    saqaId: '94202',
    title: 'Occupational Cert: Bus Driver',
    nqfLevel: 3,
    description: 'Safely transport passengers, handle luggage/emergencies, focusing on energy efficiency.'
  },
  {
    id: 'taxi-driver',
    category: 'QCTO Occupational',
    saqaId: '94024',
    title: 'Occupational Cert: Taxi Driver',
    nqfLevel: 3,
    description: 'Professional driving, servicing customers, managing routing, and compliance.'
  },
  {
    id: 'truck-driver',
    category: 'QCTO Occupational',
    saqaId: '93793',
    title: 'Occupational Cert: Truck Driver',
    nqfLevel: 3,
    description: 'Operate heavy trucks (>3.5T GVM), plan trips, and ensure energy efficiency/road safety.'
  },
  {
    id: 'freight-handler-qcto',
    category: 'QCTO Occupational',
    saqaId: '96396',
    title: 'Occupational Cert: Freight Handler',
    nqfLevel: 3,
    description: 'Receives, allocates, stores, picks, reconciles, and dispatches freight through a facility.'
  },
  {
    id: 'transport-clerk',
    category: 'QCTO Occupational',
    saqaId: '94025',
    title: 'Occupational Cert: Transport Clerk',
    nqfLevel: 4,
    description: 'Plan schedules, allocate drivers, monitor trips, and compile management reports.'
  },
  {
    id: 'clearing-forwarding',
    category: 'QCTO Occupational',
    saqaId: '96368',
    title: 'Occupational Cert: Clearing & Forwarding Agent',
    nqfLevel: 5,
    description: 'Manages customs, compliance, import/export formalities for international cargo movement.'
  },
  {
    id: 'supply-chain',
    category: 'QCTO Occupational',
    saqaId: '110942',
    title: 'Occupational Cert: Supply Chain Practitioner',
    nqfLevel: 5,
    description: 'Develops and coordinates operational schedules and manages supplier/customer relationships.'
  }
];

// Additional Services List
export const SPECIALIZED_TRAINING: Service[] = [
  {
    id: 'legislative',
    title: 'Accredited Legislative Courses',
    items: [
      'First Aid (Advanced Responder)',
      'Basic Fire Fighting',
      'Health & Safety in the Workplace',
      'Convey Dangerous Goods'
    ],
    icon: <ShieldCheck className="w-6 h-6 text-tiespro-orange" />
  },
  {
    id: 'skills-programs',
    title: 'Extended Skills Programs',
    items: [
      'Assessor, Facilitator & Moderator Training',
      'Project Management (Generic)',
      'Conflict, Time & Stress Management'
    ],
    icon: <Users className="w-6 h-6 text-tiespro-orange" />
  },
  {
    id: 'technical-trades',
    title: 'Technical & Trade Skills',
    items: [
      'Fabrication & Welding',
      'Bricklaying, Tiling & Carpentry',
      'Communication & Numeracy (NQF 1-4)'
    ],
    icon: <Map className="w-6 h-6 text-tiespro-orange" />
  }
];

export const STATS: Stat[] = [
  { id: 1, value: '100%', label: 'Black Owned', subLabel: '60% Woman Owned (PDI)' },
  { id: 2, value: '18+', label: 'Years Experience', subLabel: 'Est. June 2005' },
  { id: 3, value: 'TETA', label: 'Accredited', subLabel: 'TETA06-157' },
  { id: 4, value: 'QCTO', label: 'Accredited', subLabel: 'AC-TTC250124162532' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mkhize",
    role: "HR Manager",
    company: "LogiTrans KZN",
    content: "Tiespro transformed our fleet's safety record. Their professional driving learnerships are thorough and practical.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "David Naidoo",
    role: "Operations Director",
    company: "Coastal Freight",
    content: "The TETA accredited courses have helped us secure major contracts. Compliance is no longer a headache for us.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Thabo Cele",
    role: "Fleet Supervisor",
    company: "Durban Metro Logistics",
    content: "Excellent facilitators who understand the industry. Our drivers came back motivated and more skilled.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export const CONTACT_INFO = {
  phone: '031 205 0384',
  cell: '065 682 6615',
  email: 'info@tiespro.co.za',
  address: '1 Mirka, 63 Eighth Avenue, Windermere, Durban, 4001'
};