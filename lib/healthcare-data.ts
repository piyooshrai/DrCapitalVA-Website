export const agents = [
  { id: 1, name: 'Sarah Chen', nationality: 'American', image: '/agents/sarah.jpg' },
  { id: 2, name: 'Amara Okonkwo', nationality: 'British', image: '/agents/amara.jpg' },
  { id: 3, name: 'Leila Al-Mansouri', nationality: 'UAE', image: '/agents/leila.jpg' },
];

export const regions = [
  {
    name: 'United States',
    slug: 'usa',
    currency: 'USD',
    currencySymbol: '$',
    complianceFrameworks: ['HIPAA', 'HITECH'],
    cities: [
      {
        name: 'New York',
        slug: 'new-york',
        state: 'NY',
        timezone: 'EST',
        medicalDistricts: ['Manhattan Medical Mile', 'Brooklyn Hospital District', 'Long Island Medical Centers'],
        majorSystems: ['NYU Langone', 'Mount Sinai', 'NewYork-Presbyterian', 'Columbia Medical'],
        avgSalaries: { medicalReceptionist: 42000, medicalBiller: 48000, officeManager: 58000 },
        topSpecialties: ['primary-care', 'mental-health', 'cardiology', 'dermatology'],
        context: 'New York\'s dense healthcare market means fierce competition for front-desk talent. Medical receptionists in Manhattan command $42K+ and turnover is high.',
      },
      {
        name: 'Los Angeles',
        slug: 'los-angeles',
        state: 'CA',
        timezone: 'PST',
        medicalDistricts: ['Westside Medical Corridor', 'Downtown Medical Center', 'San Fernando Valley Health'],
        majorSystems: ['Cedars-Sinai', 'UCLA Health', 'Keck Medicine', 'Providence Health'],
        avgSalaries: { medicalReceptionist: 40000, medicalBiller: 46000, officeManager: 56000 },
        topSpecialties: ['primary-care', 'dermatology', 'orthopedics', 'pediatrics'],
        context: 'LA\'s sprawling healthcare market spans multiple districts. Costs are high and VA turnover impacts patient continuity.',
      },
      {
        name: 'Miami',
        slug: 'miami',
        state: 'FL',
        timezone: 'EST',
        medicalDistricts: ['Medical City', 'Wynwood Health Quarter', 'South Miami Hospital District'],
        majorSystems: ['Jackson Memorial', 'Baptist Health South Florida', 'Cleveland Clinic Florida', 'FIU Health'],
        avgSalaries: { medicalReceptionist: 36000, medicalBiller: 42000, officeManager: 50000 },
        topSpecialties: ['primary-care', 'cardiology', 'dermatology', 'dental'],
        context: 'Miami\'s diverse population requires bilingual support. Medical admin costs are lower than northeast but turnover is significant.',
      },
      {
        name: 'Chicago',
        slug: 'chicago',
        state: 'IL',
        timezone: 'CST',
        medicalDistricts: ['Illinois Medical District', 'Gold Coast Health Corridor', 'South Side Medical'],
        majorSystems: ['Northwestern Medicine', 'University of Chicago Medicine', 'Rush University', 'Advocate Aurora'],
        avgSalaries: { medicalReceptionist: 38000, medicalBiller: 44000, officeManager: 52000 },
        topSpecialties: ['primary-care', 'mental-health', 'cardiology', 'orthopedics'],
        context: 'Chicago\'s major academic medical centers drive high competition for skilled admin staff.',
      },
      {
        name: 'Houston',
        slug: 'houston',
        state: 'TX',
        timezone: 'CST',
        medicalDistricts: ['Texas Medical Center', 'Bellaire Health Quarter', 'Clear Lake Medical'],
        majorSystems: ['Memorial Hermann', 'Houston Methodist', 'UT Health', 'Ben Taub Hospital'],
        avgSalaries: { medicalReceptionist: 35000, medicalBiller: 40000, officeManager: 48000 },
        topSpecialties: ['primary-care', 'cardiology', 'orthopedics', 'dental'],
        context: 'Houston\'s Texas Medical Center is one of the largest in the world. High volume, distributed practices.',
      },
      {
        name: 'Dallas',
        slug: 'dallas',
        state: 'TX',
        timezone: 'CST',
        medicalDistricts: ['Medical District', 'Park Cities Health Corridor', 'Uptown Medical'],
        majorSystems: ['UT Southwestern', 'Baylor Scott & White', 'Texas Health Resources', 'Methodist Health System'],
        avgSalaries: { medicalReceptionist: 35000, medicalBiller: 40000, officeManager: 48000 },
        topSpecialties: ['primary-care', 'cardiology', 'orthopedics', 'pediatrics'],
        context: 'Dallas is a growing healthcare hub. Lower costs than coastal cities but rapid medical admin turnover.',
      },
      {
        name: 'Atlanta',
        slug: 'atlanta',
        state: 'GA',
        timezone: 'EST',
        medicalDistricts: ['Medical Center', 'Midtown Health Corridor', 'South Fulton Medical'],
        majorSystems: ['Emory Healthcare', 'Wellstar Health System', 'Grady Memorial', 'Children\'s Healthcare of Atlanta'],
        avgSalaries: { medicalReceptionist: 34000, medicalBiller: 39000, officeManager: 46000 },
        topSpecialties: ['primary-care', 'pediatrics', 'mental-health', 'dermatology'],
        context: 'Atlanta\'s growing healthcare market offers competitive opportunities but admin staff retention is challenging.',
      },
      {
        name: 'Tampa',
        slug: 'tampa',
        state: 'FL',
        timezone: 'EST',
        medicalDistricts: ['Medical Center', 'Carrollwood Health Quarter', 'Hyde Park Medical'],
        majorSystems: ['USF Health', 'BayCare Health System', 'Moffitt Cancer Center', 'Tampa General'],
        avgSalaries: { medicalReceptionist: 34000, medicalBiller: 39000, officeManager: 46000 },
        topSpecialties: ['primary-care', 'oncology', 'cardiology', 'dental'],
        context: 'Tampa\'s retiree population drives unique healthcare demand. Admin staff turnover impacts continuity.',
      },
      {
        name: 'Boston',
        slug: 'boston',
        state: 'MA',
        timezone: 'EST',
        medicalDistricts: ['Longwood Medical Area', 'Medical District', 'Cambridge Health Quarter'],
        majorSystems: ['Mass General', 'Brigham and Women\'s', 'Boston Medical Center', 'Children\'s Hospital Boston'],
        avgSalaries: { medicalReceptionist: 44000, medicalBiller: 51000, officeManager: 61000 },
        topSpecialties: ['primary-care', 'research-driven', 'specialty-care', 'academic'],
        context: 'Boston\'s major academic medical centers require highly trained admin staff. Salaries are among the highest nationally.',
      },
      {
        name: 'San Francisco',
        slug: 'san-francisco',
        state: 'CA',
        timezone: 'PST',
        medicalDistricts: ['Mission Bay', 'Financial District Medical', 'South Bay Health'],
        majorSystems: ['UCSF Health', 'Sutter Health', 'Kaiser Permanente', 'Stanford Health'],
        avgSalaries: { medicalReceptionist: 48000, medicalBiller: 55000, officeManager: 65000 },
        topSpecialties: ['primary-care', 'tech-integrated', 'cardiology', 'neurology'],
        context: 'San Francisco\'s tech-forward healthcare sector and high cost of living make admin staff expensive.',
      },
      {
        name: 'Denver',
        slug: 'denver',
        state: 'CO',
        timezone: 'MST',
        medicalDistricts: ['Medical Center', 'Downtown Health Corridor', 'Tech Center Medical'],
        majorSystems: ['UCHealth', 'Denver Health', 'HealthONE', 'National Jewish Health'],
        avgSalaries: { medicalReceptionist: 36000, medicalBiller: 42000, officeManager: 50000 },
        topSpecialties: ['primary-care', 'orthopedics', 'pulmonology', 'dermatology'],
        context: 'Denver\'s growing market and outdoor-oriented population create unique admin scheduling challenges.',
      },
      {
        name: 'Seattle',
        slug: 'seattle',
        state: 'WA',
        timezone: 'PST',
        medicalDistricts: ['U District Medical', 'Pioneer Square Health', 'Wallingford Health'],
        majorSystems: ['UW Medicine', 'Swedish Medical Center', 'Harborview Medical', 'Virginia Mason'],
        avgSalaries: { medicalReceptionist: 40000, medicalBiller: 46000, officeManager: 55000 },
        topSpecialties: ['primary-care', 'psychiatry', 'orthopedics', 'pediatrics'],
        context: 'Seattle\'s tech-influenced healthcare sector values automation but also skilled personal touch.',
      },
    ],
  },
  {
    name: 'United Kingdom',
    slug: 'uk',
    currency: 'GBP',
    currencySymbol: '£',
    complianceFrameworks: ['GDPR', 'CQC', 'NHS Compliance'],
    cities: [
      {
        name: 'London',
        slug: 'london',
        country: 'UK',
        timezone: 'GMT',
        medicalDistricts: ['Harley Street', 'King\'s Health Corridor', 'West End Medical'],
        majorSystems: ['NHS London', 'Barts Health NHS', 'Guy\'s and St Thomas\'', 'Imperial College Healthcare'],
        avgSalaries: { medicalReceptionist: 24000, medicalBiller: 28000, officeManager: 34000 },
        topSpecialties: ['primary-care', 'dentistry', 'mental-health', 'private-practice'],
        context: 'London\'s private and NHS blend creates unique admin demands. GDPR compliance is strict.',
      },
      {
        name: 'Manchester',
        slug: 'manchester',
        country: 'UK',
        timezone: 'GMT',
        medicalDistricts: ['Medical Quarter', 'City Centre Health', 'South Manchester'],
        majorSystems: ['Manchester University NHS', 'Stockport NHS', 'Pennine Care NHS'],
        avgSalaries: { medicalReceptionist: 21000, medicalBiller: 25000, officeManager: 31000 },
        topSpecialties: ['primary-care', 'mental-health', 'orthopedics', 'pediatrics'],
        context: 'Manchester\'s NHS-heavy market means standard compliance but cost-conscious practices.',
      },
      {
        name: 'Birmingham',
        slug: 'birmingham',
        country: 'UK',
        timezone: 'GMT',
        medicalDistricts: ['Medical Centre', 'City Centre Health', 'Midlands Medical'],
        majorSystems: ['University Hospitals Birmingham NHS', 'Heart of England NHS', 'Birmingham Community Healthcare'],
        avgSalaries: { medicalReceptionist: 20000, medicalBiller: 24000, officeManager: 30000 },
        topSpecialties: ['primary-care', 'dentistry', 'cardiac', 'orthopedics'],
        context: 'Birmingham\'s diverse population requires culturally aware admin support.',
      },
      {
        name: 'Edinburgh',
        slug: 'edinburgh',
        country: 'UK',
        timezone: 'GMT',
        medicalDistricts: ['Royal Mile Medical', 'Leith Health Corridor', 'South Edinburgh'],
        majorSystems: ['NHS Lothian', 'Royal Infirmary', 'Edinburgh Dental School'],
        avgSalaries: { medicalReceptionist: 22000, medicalBiller: 26000, officeManager: 32000 },
        topSpecialties: ['primary-care', 'dentistry', 'research-driven', 'academic'],
        context: 'Edinburgh\'s university-driven healthcare sector emphasizes accuracy and compliance.',
      },
      {
        name: 'Dublin',
        slug: 'dublin',
        country: 'Ireland',
        timezone: 'GMT',
        medicalDistricts: ['Temple Bar Health', 'South Dublin Medical', 'North Dublin'],
        majorSystems: ['St James\'s Hospital', 'Mater Misericordiae', 'Rotunda Hospital', 'Beaumont Hospital'],
        avgSalaries: { medicalReceptionist: 26000, medicalBiller: 30000, officeManager: 36000 },
        topSpecialties: ['primary-care', 'dentistry', 'mental-health', 'pediatrics'],
        context: 'Dublin\'s growing private healthcare market operates alongside public system.',
      },
    ],
  },
  {
    name: 'Middle East',
    slug: 'middle-east',
    currency: 'AED',
    currencySymbol: 'AED',
    complianceFrameworks: ['DHA', 'HAAD', 'MOH Compliance'],
    cities: [
      {
        name: 'Dubai',
        slug: 'dubai',
        country: 'UAE',
        timezone: 'GST',
        medicalDistricts: ['Dubai Healthcare City', 'Marina Medical', 'Downtown Medical'],
        majorSystems: ['Dubai Health Authority', 'NMC Health', 'American Hospital Dubai', 'Medicana International'],
        avgSalaries: { medicalReceptionist: 20000, medicalBiller: 24000, officeManager: 30000 },
        topSpecialties: ['primary-care', 'cosmetic-surgery', 'cardiology', 'dental'],
        context: 'Dubai\'s expat-heavy population requires multilingual admin support and luxury healthcare standards.',
      },
      {
        name: 'Abu Dhabi',
        slug: 'abu-dhabi',
        country: 'UAE',
        timezone: 'GST',
        medicalDistricts: ['Al Noor Island', 'Madinat Zayed Health', 'Mina Medical'],
        majorSystems: ['HAAD', 'Cleveland Clinic Abu Dhabi', 'Zayed Military Hospital', 'Mafraq Hospital'],
        avgSalaries: { medicalReceptionist: 21000, medicalBiller: 25000, officeManager: 31000 },
        topSpecialties: ['primary-care', 'cardiology', 'orthopedics', 'pediatrics'],
        context: 'Abu Dhabi\'s government healthcare system requires strict MOH compliance.',
      },
      {
        name: 'Riyadh',
        slug: 'riyadh',
        country: 'Saudi Arabia',
        timezone: 'AST',
        medicalDistricts: ['Medical District', 'Diplomatic Quarter Health', 'South Riyadh Medical'],
        majorSystems: ['MOH Hospitals', 'King Fahad Medical City', 'Dr. Sulaiman Al-Habib', 'Saudi German Hospital'],
        avgSalaries: { medicalReceptionist: 18000, medicalBiller: 22000, officeManager: 28000 },
        topSpecialties: ['primary-care', 'cardiology', 'orthopedics', 'nephrology'],
        context: 'Riyadh\'s Vision 2030 initiative is modernizing healthcare with new compliance standards.',
      },
      {
        name: 'Doha',
        slug: 'doha',
        country: 'Qatar',
        timezone: 'AST',
        medicalDistricts: ['Doha Medical City', 'Lusail Health', 'West Bay Medical'],
        majorSystems: ['Qatar Health Care', 'Hamad Medical Corporation', 'Primary Health Care', 'Sidra Medicine'],
        avgSalaries: { medicalReceptionist: 22000, medicalBiller: 26000, officeManager: 32000 },
        topSpecialties: ['primary-care', 'research-driven', 'cardiology', 'pediatrics'],
        context: 'Doha\'s world-class healthcare infrastructure demands high-standard admin support.',
      },
    ],
  },
  {
    name: 'Australia & New Zealand',
    slug: 'apac',
    currency: 'AUD',
    currencySymbol: 'A$',
    complianceFrameworks: ['AHPRA', 'Privacy Act', 'GDPR (for NZ)'],
    cities: [
      {
        name: 'Sydney',
        slug: 'sydney',
        country: 'Australia',
        timezone: 'AEDT',
        medicalDistricts: ['Eastern Suburbs Medical', 'Inner West Health', 'North Sydney Medical'],
        majorSystems: ['NSW Health', 'Prince of Wales Hospital', 'St Vincent\'s', 'Westmead Hospital'],
        avgSalaries: { medicalReceptionist: 50000, medicalBiller: 58000, officeManager: 68000 },
        topSpecialties: ['primary-care', 'cosmetic', 'cardiology', 'mental-health'],
        context: 'Sydney\'s expensive market makes VA support a cost-effective alternative to local hiring.',
      },
      {
        name: 'Melbourne',
        slug: 'melbourne',
        country: 'Australia',
        timezone: 'AEDT',
        medicalDistricts: ['Parkville Medical', 'Albert Park Health', 'Southbank Medical'],
        majorSystems: ['Victorian Health', 'Royal Melbourne Hospital', 'Peter MacCallum', 'St Vincent\'s Melbourne'],
        avgSalaries: { medicalReceptionist: 49000, medicalBiller: 57000, officeManager: 66000 },
        topSpecialties: ['primary-care', 'dental', 'orthopedics', 'cardiology'],
        context: 'Melbourne\'s vibrant healthcare scene includes leading medical research institutions.',
      },
      {
        name: 'Perth',
        slug: 'perth',
        country: 'Australia',
        timezone: 'AWST',
        medicalDistricts: ['Health Precinct', 'Northbridge Medical', 'Subiaco Health'],
        majorSystems: ['WA Health', 'Sir Charles Gairdner Hospital', 'Royal Perth Hospital', 'Fiona Stanley Hospital'],
        avgSalaries: { medicalReceptionist: 48000, medicalBiller: 55000, officeManager: 64000 },
        topSpecialties: ['primary-care', 'dental', 'orthopedics', 'pediatrics'],
        context: 'Perth\'s remote location makes reliable admin support critical for practice continuity.',
      },
      {
        name: 'Brisbane',
        slug: 'brisbane',
        country: 'Australia',
        timezone: 'AEST',
        medicalDistricts: ['Fortitude Valley Medical', 'South Bank Health', 'Indooroopilly Medical'],
        majorSystems: ['Queensland Health', 'Royal Brisbane Hospital', 'Princess Alexandra', 'Lady Cilento Hospital'],
        avgSalaries: { medicalReceptionist: 47000, medicalBiller: 54000, officeManager: 63000 },
        topSpecialties: ['primary-care', 'tropical-medicine', 'pediatrics', 'dermatology'],
        context: 'Brisbane\'s growing market has competitive admin talent costs.',
      },
      {
        name: 'Auckland',
        slug: 'auckland',
        country: 'New Zealand',
        timezone: 'NZDT',
        medicalDistricts: ['City Centre Medical', 'North Shore Health', 'South Auckland Medical'],
        majorSystems: ['Auckland DHB', 'North Shore Hospital', 'Waitemata DHB', 'Kids Health'],
        avgSalaries: { medicalReceptionist: 46000, medicalBiller: 53000, officeManager: 62000 },
        topSpecialties: ['primary-care', 'dental', 'mental-health', 'pediatrics'],
        context: 'Auckland\'s dual public-private healthcare system requires flexible admin support.',
      },
    ],
  },
];

export const services = [
  {
    name: 'Patient Scheduling',
    slug: 'patient-scheduling',
    shortDesc: 'Appointment booking, reminders, no-show management',
    primaryKeyword: 'patient scheduling virtual assistant',
    tools: ['athenahealth', 'epic', 'eclinicalworks', 'kareo', 'drchrono'],
    relatedSpecialties: ['primary-care', 'dental', 'cardiology', 'dermatology'],
  },
  {
    name: 'Medical Billing Support',
    slug: 'medical-billing',
    shortDesc: 'Insurance verification, claims, denials, revenue cycle',
    primaryKeyword: 'medical billing virtual assistant',
    tools: ['athenahealth', 'kareo', 'drchrono'],
    relatedSpecialties: ['primary-care', 'multi-location'],
  },
  {
    name: 'Patient Follow-Up',
    slug: 'patient-follow-up',
    shortDesc: 'Post-visit calls, reminders, care plan adherence',
    primaryKeyword: 'patient follow up virtual assistant',
    tools: ['practice-fusion', 'epic', 'athenahealth'],
    relatedSpecialties: ['primary-care', 'cardiology', 'orthopedics'],
  },
  {
    name: 'Intake Management',
    slug: 'intake-management',
    shortDesc: 'New patient registration, insurance, medical history',
    primaryKeyword: 'patient intake virtual assistant',
    tools: ['eclinicalworks', 'epic', 'kareo'],
    relatedSpecialties: ['primary-care', 'dental', 'pediatrics'],
  },
  {
    name: 'Referral Coordination',
    slug: 'referral-coordination',
    shortDesc: 'Specialist referrals, authorizations, records transfer',
    primaryKeyword: 'referral coordination virtual assistant',
    tools: ['epic', 'athenahealth', 'eclinicalworks'],
    relatedSpecialties: ['primary-care', 'cardiology', 'orthopedics'],
  },
  {
    name: 'Telehealth Support',
    slug: 'telehealth-support',
    shortDesc: 'Virtual visit scheduling, tech support, documentation',
    primaryKeyword: 'telehealth virtual assistant',
    tools: ['doxy-me', 'epic', 'athenahealth'],
    relatedSpecialties: ['mental-health', 'primary-care', 'pediatrics'],
  },
];

export const specialties = [
  { name: 'Primary Care', slug: 'primary-care' },
  { name: 'Dental', slug: 'dental' },
  { name: 'Mental Health', slug: 'mental-health' },
  { name: 'Cardiology', slug: 'cardiology' },
  { name: 'Orthopedics', slug: 'orthopedics' },
  { name: 'Dermatology', slug: 'dermatology' },
  { name: 'Pediatrics', slug: 'pediatrics' },
  { name: 'Multi-Location', slug: 'multi-location' },
];

export const tools = [
  { name: 'Athenahealth', slug: 'athenahealth', category: 'Practice Management & EHR' },
  { name: 'Epic', slug: 'epic', category: 'Enterprise EHR' },
  { name: 'eClinicalWorks', slug: 'eclinicalworks', category: 'Practice Management & EHR' },
  { name: 'Kareo', slug: 'kareo', category: 'Cloud-Based EHR & Billing' },
  { name: 'DrChrono', slug: 'drchrono', category: 'Cloud-Based EHR' },
  { name: 'Practice Fusion', slug: 'practice-fusion', category: 'Cloud-Based EHR' },
];

export const competitors = [
  {
    name: 'Hello Rache',
    slug: 'hello-rache',
    price: '$9.50/hr (~$1,520/mo full-time)',
    contract: 'Month-to-month',
    hipaaCompliant: true,
    dedicatedVA: true,
    clientManager: false,
    backgroundCheck: 'Internal screening',
    backupVA: false,
  },
  {
    name: 'ScribeEMR',
    slug: 'scribeemr',
    price: '$8-12/hr',
    contract: 'Custom',
    hipaaCompliant: true,
    dedicatedVA: false,
    clientManager: false,
    backgroundCheck: 'Unknown',
    backupVA: false,
  },
  {
    name: 'Athena (VA Service)',
    slug: 'athena-health-va',
    price: '$3,000+/mo',
    contract: '12-month lock-in',
    hipaaCompliant: true,
    dedicatedVA: true,
    clientManager: true,
    backgroundCheck: 'Unknown',
    backupVA: true,
  },
  {
    name: 'MyOutDesk',
    slug: 'myoutdesk-healthcare',
    price: '$1,200-2,500/mo',
    contract: 'Custom',
    hipaaCompliant: false,
    dedicatedVA: true,
    clientManager: false,
    backgroundCheck: 'Basic',
    backupVA: false,
  },
  {
    name: 'Generic VA Agencies',
    slug: 'generic-va-agencies',
    price: '$500-2,000/mo',
    contract: 'Variable',
    hipaaCompliant: false,
    dedicatedVA: true,
    clientManager: false,
    backgroundCheck: 'Basic',
    backupVA: false,
  },
];

export function getRegion(slug: string) {
  return regions.find(r => r.slug === slug);
}

export function getCity(regionSlug: string, citySlug: string) {
  const region = getRegion(regionSlug);
  return region?.cities.find(c => c.slug === citySlug);
}

export function getService(slug: string) {
  return services.find(s => s.slug === slug);
}

export function getSpecialty(slug: string) {
  return specialties.find(s => s.slug === slug);
}

export function getCompetitor(slug: string) {
  return competitors.find(c => c.slug === slug);
}

export function getTool(slug: string) {
  return tools.find(t => t.slug === slug);
}

export function getRandomAgent() {
  return agents[Math.floor(Math.random() * agents.length)];
}

export function getAllCityServicePages() {
  const pages = [];
  for (const region of regions) {
    for (const city of region.cities) {
      for (const service of services) {
        pages.push({
          region: region.slug,
          city: city.slug,
          service: service.slug,
          regionName: region.name,
          cityName: city.name,
          serviceName: service.name,
        });
      }
    }
  }
  return pages;
}
