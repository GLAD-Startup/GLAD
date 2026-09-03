export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  clientName: string;
  quote: string;
  outcome: string;
  avatarSrc: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '01',
    name: 'Prayas NGO Team',
    role: 'Community Leaders · Prayas NGO',
    company: 'Prayas NGO',
    clientName: 'Prayas NGO',
    quote:
      "The Prayas mobile app, public website, and admin portal transformed how we coordinate blood donations and medical equipment lending. It's now the complete backbone of our operations.",
    outcome: '10,000+ Community Reach',
    avatarSrc: '/clients/prayas.jpg',
    verified: true,
  },
  {
    id: '02',
    name: 'Rakesh Khetan',
    role: 'Owner & Operator · GLA Canteen',
    company: 'GLA Canteen',
    clientName: 'GLA Canteen',
    quote:
      'GLAD Studio’s Canteen Inventory & Customer Management app transformed our daily stock tracking, customer billing, and kitchen procurement, giving us live visibility across every counter and eliminating wastage.',
    outcome: 'Zero Stock Discrepancies',
    avatarSrc: '/clients/gla-canteen.png',
    verified: true,
  },
  {
    id: '03',
    name: 'Nitesh Khandelwal',
    role: 'Founder & Director · Earth Travels India',
    company: 'Earth Travels India',
    clientName: 'Earth Travels India',
    quote:
      'The website developed for Earth Travels India presents our travel packages and services beautifully, significantly elevating our online presence.',
    outcome: '3x Online Inquiries',
    avatarSrc: '/clients/earth-travels.png',
    verified: true,
  },
];
