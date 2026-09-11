export type Service = {
  slug: string;
  index: string;
  kicker: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  bestFor: string[];
  facts: { value: string; label: string }[];
  steps: { title: string; text: string }[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "saso-saber",
    index: "01",
    kicker: "Saudi market access",
    title: "SASO / SABER certification support",
    shortTitle: "SASO / SABER",
    summary:
      "A clear, evidence-led route through Saudi product conformity requirements—from classification and technical review to SABER readiness.",
    intro:
      "Saudi Arabia's SALEEM programme uses the SABER platform to manage conformity requirements for imported products. Complia helps manufacturers, exporters, and importers understand the applicable technical regulations, assemble the right evidence, and move each application forward with fewer surprises.",
    image: "/assets/saso-logo.webp",
    imageAlt: "Saudi Standards, Metrology and Quality Organization mark",
    bestFor: [
      "Manufacturers entering Saudi Arabia",
      "Importers registering regulated products",
      "Exporters preparing recurring shipments",
    ],
    facts: [
      { value: "SALEEM", label: "Conformity programme" },
      { value: "SABER", label: "Digital platform" },
      { value: "2 stages", label: "Product + shipment" },
    ],
    steps: [
      { title: "Classify", text: "Identify the HS code, product risk level, and applicable Saudi technical regulation." },
      { title: "Prepare", text: "Compile test reports, product markings, manuals, declarations, and technical files." },
      { title: "Evaluate", text: "Review the evidence against the applicable conformity route and close any gaps." },
      { title: "Complete", text: "Support the SABER workflow for the product and its individual shipments." },
    ],
    sections: [
      {
        title: "A connected certification path",
        paragraphs: [
          "Regulated products generally require product-level conformity before a shipment certificate can be requested. The exact route depends on product classification, risk, and the technical regulation in force.",
          "Complia structures the process around the evidence reviewers need, helping teams avoid preventable delays caused by incomplete files, inconsistent labels, or outdated reports.",
        ],
        bullets: [
          "Product classification and regulation mapping",
          "Technical-document readiness review",
          "Test-report and marking assessment",
          "SABER application coordination",
          "Shipment-level documentation support",
        ],
      },
      {
        title: "Documents commonly requested",
        paragraphs: [
          "Requirements vary by product. A typical file can include accredited-laboratory reports, product images and labels, technical datasheets, manuals, specifications, declarations of conformity, and importer details.",
        ],
      },
    ],
    faq: [
      {
        question: "Is every product handled in the same way?",
        answer: "No. The applicable route depends on the product, HS code, risk category, and relevant Saudi technical regulation.",
      },
      {
        question: "Does one approval cover every shipment?",
        answer: "Product and shipment conformity are separate stages. A shipment certificate is handled for each consignment.",
      },
      {
        question: "Is Complia already SASO-notified?",
        answer: "Complia is NABCB-accredited to ISO/IEC 17065:2012 and is progressing toward SASO-notified certification-body recognition. We describe the current status transparently on our Accreditation page.",
      },
    ],
  },
  {
    slug: "pcoc-scoc",
    index: "02",
    kicker: "Product & shipment conformity",
    title: "PCoC & SCoC certification support",
    shortTitle: "PCoC & SCoC",
    summary:
      "Coordinate product-level and consignment-level conformity evidence for a smoother route to Saudi customs clearance.",
    intro:
      "The Product Certificate of Conformity (PCoC) confirms that a regulated product meets its applicable requirements. The Shipment Certificate of Conformity (SCoC) is required for each consignment entering Saudi Arabia. Complia helps keep both stages aligned.",
    image: "/assets/scoc-pcoc.webp",
    imageAlt: "Packages beside a shipment conformity checklist",
    bestFor: [
      "Regulated products on SABER",
      "Importers managing multiple shipments",
      "Teams aligning product and logistics files",
    ],
    facts: [
      { value: "1 year", label: "Typical PCoC validity" },
      { value: "Per shipment", label: "SCoC validity" },
      { value: "SABER", label: "Issue workflow" },
    ],
    steps: [
      { title: "Register", text: "The importer initiates the product request through the SABER platform." },
      { title: "Review", text: "Technical evidence, test reports, images, labels, and product data are assessed." },
      { title: "Product stage", text: "The applicable product conformity route is completed for the regulated item." },
      { title: "Shipment stage", text: "Each consignment is matched to its product records and shipment evidence." },
    ],
    sections: [
      {
        title: "Product Certificate of Conformity",
        paragraphs: [
          "A PCoC is used to demonstrate that a regulated product registered in SABER complies with the relevant technical regulation. It is normally valid for one year for the approved product.",
        ],
        bullets: [
          "Importer and product registration",
          "Applicable technical regulation",
          "Valid test reports and certificates",
          "Product images, markings, and labels",
          "Datasheets, specifications, and manuals",
        ],
      },
      {
        title: "Shipment Certificate of Conformity",
        paragraphs: [
          "An SCoC is required for each shipment, including consignments containing non-regulated products. It supports customs clearance by linking the shipment to the relevant product and conformity information.",
        ],
      },
    ],
    faq: [
      {
        question: "Can an SCoC be obtained before product registration?",
        answer: "For regulated products, the product conformity stage must be completed before the related shipment certificate can proceed.",
      },
      {
        question: "How long is a PCoC valid?",
        answer: "The existing programme information states that a PCoC is normally valid for one year. Current platform rules should always be checked for the specific product.",
      },
      {
        question: "Is an SCoC reusable?",
        answer: "No. It is issued for an individual consignment, so a new shipment requires a new SCoC workflow.",
      },
    ],
  },
  {
    slug: "energy-efficiency",
    index: "03",
    kicker: "Energy labelling",
    title: "SASO energy efficiency rating",
    shortTitle: "Energy Efficiency",
    summary:
      "Prepare regulated products for Saudi energy-efficiency registration, evidence review, and consumer labelling requirements.",
    intro:
      "Saudi energy-efficiency regulations require selected electrical products, vehicles, tyres, lighting products, and equipment to declare tested efficiency levels. Complia helps teams coordinate the technical evidence and registration steps behind the label.",
    image: "/assets/energy-rating.webp",
    imageAlt: "Energy efficiency rating scale from A to G",
    bestFor: [
      "Appliance manufacturers",
      "Lighting and motor suppliers",
      "Vehicle and tyre exporters",
    ],
    facts: [
      { value: "EER", label: "Efficiency rating" },
      { value: "1 year", label: "Typical validity" },
      { value: "Label", label: "Consumer visibility" },
    ],
    steps: [
      { title: "Scope", text: "Confirm that the model falls within an energy-efficiency regulation." },
      { title: "Test", text: "Review results against the relevant SASO standard and product category." },
      { title: "Register", text: "Prepare manufacturer, importer, model, and conformity information." },
      { title: "Label", text: "Complete the route to the approved efficiency label for the product." },
    ],
    sections: [
      {
        title: "Products represented in the programme",
        paragraphs: [
          "The legacy service information identifies several categories subject to energy-efficiency labelling. Applicability and current requirements must be checked for the exact model.",
        ],
        bullets: [
          "Refrigerators and freezers",
          "Small- and large-capacity air conditioners",
          "Washing machines and clothes dryers",
          "Electric motors, engines, and water heaters",
          "Lighting products, tyres, and new light vehicles",
        ],
      },
      {
        title: "What the label communicates",
        paragraphs: [
          "The label helps consumers understand model identity and energy performance. Programme information may include the product type, model, trademark, country of origin, specifications, and a verification QR code.",
        ],
      },
    ],
    faq: [
      {
        question: "What does an energy-efficiency rating measure?",
        answer: "It expresses the relationship between useful output and energy input, using the method defined for the relevant product category.",
      },
      {
        question: "Does every electrical product need an EER label?",
        answer: "No. The requirement applies to product categories covered by the relevant Saudi regulations.",
      },
      {
        question: "Can one label be used for a different model?",
        answer: "Model registration is based on the approved technical evidence. Changes in model or specification should be checked before a label is reused.",
      },
    ],
  },
  {
    slug: "iecee-recognition",
    index: "04",
    kicker: "Electrical product recognition",
    title: "SASO IECEE recognition support",
    shortTitle: "IECEE Recognition",
    summary:
      "Organise CB reports, declarations, product evidence, and importer records for products within Saudi IECEE scope.",
    intro:
      "Selected electrical and electronic products require a SASO IECEE Recognition Certificate before their SABER shipment request can be approved. Complia helps applicants assemble an internally consistent file and navigate the recognition workflow.",
    image: "/assets/iecee.webp",
    imageAlt: "SASO IECEE recognition mark",
    bestFor: [
      "Consumer electronics brands",
      "Electrical equipment manufacturers",
      "Saudi importers of IECEE products",
    ],
    facts: [
      { value: "1 year", label: "Typical validity" },
      { value: "5–10 days", label: "Indicative review time" },
      { value: "3 years", label: "CB report recency" },
    ],
    steps: [
      { title: "Confirm", text: "Check that the product is within the current SASO IECEE recognition list." },
      { title: "Compile", text: "Gather importer, manufacturer, CB certificate, report, images, and manuals." },
      { title: "Check", text: "Verify model numbers, standards, labels, plugs, and included accessories." },
      { title: "Submit", text: "Coordinate the application and respond to technical clarification requests." },
    ],
    sections: [
      {
        title: "Common product categories",
        paragraphs: [
          "The published service information covers a broad set of electrical and electronic products. The official list and enforcement dates should be confirmed when an application begins.",
        ],
        bullets: [
          "Mobile phones, accessories, power banks, and smart watches",
          "Lighting, LED lamps, televisions, and monitors",
          "Computers, laptops, tablets, and gaming consoles",
          "Dishwashers, kettles, coffee makers, and shaving devices",
          "Pumps, cables, chargers, control gear, and circuit breakers",
        ],
      },
      {
        title: "A typical evidence file",
        paragraphs: [
          "Applicants are generally asked for the Saudi commercial registration, relevant industrial licence, importer and manufacturer declarations, product and marking photographs, an Arabic or bilingual manual, and a current IECEE CB certificate and test report from an accredited laboratory.",
        ],
      },
    ],
    faq: [
      {
        question: "Can multiple models share one recognition certificate?",
        answer: "The source programme guidance allows this when the models are covered by exactly the same IECEE CB certificate and test report. The application should confirm current rules.",
      },
      {
        question: "Can multiple importers use the same certificate?",
        answer: "Recognition is linked to a specific importer's commercial registration, so separate importers generally require separate applications.",
      },
      {
        question: "How long does the process take?",
        answer: "The existing service information gives an indicative 5–10 working days after a complete submission, subject to technical questions or corrections.",
      },
    ],
  },
];

export const marketGroups = [
  {
    region: "Africa",
    note: "Product conformity, inspection, and pre-export routes across key African markets.",
    countries: [
      "Algeria",
      "Botswana",
      "Cameroon",
      "Republic of Congo",
      "Democratic Republic of Congo",
      "Egypt",
      "Ethiopia",
      "Gabon",
      "Ghana",
      "Ivory Coast",
      "Morocco",
      "Mozambique",
      "Tanzania",
      "Uganda",
    ],
  },
  {
    region: "Middle East",
    note: "Market-entry support for regulated products across Gulf and regional programmes.",
    countries: [
      "Iraq",
      "Kuwait",
      "The Kurdistan Region",
      "Qatar",
      "Saudi Arabia",
      "United Arab Emirates",
    ],
  },
  {
    region: "Eurasia",
    note: "Conformity guidance for products entering Eurasian regulatory environments.",
    countries: ["Russia"],
  },
];

export const industryGroups = [
  {
    title: "Chemicals & materials",
    items: [
      "Agrochemicals & pesticides",
      "Basic & industrial chemicals",
      "Dyes & detergents",
      "Lubricants & greases",
      "Nanomaterials",
      "Petrochemicals",
      "Polymers & plastics",
      "Specialty chemicals",
    ],
  },
  {
    title: "Built environment & industry",
    items: [
      "Building & construction",
      "Hazardous locations",
      "Industrial equipment",
      "Life safety & security",
      "Manufacturing",
    ],
  },
  {
    title: "Energy & commodities",
    items: [
      "Agriculture",
      "Biofuels",
      "Coal & solid fuels",
      "Hydrogen",
      "Minerals",
      "Nuclear",
      "Oil & gas",
      "Power equipment",
      "Power generation",
      "Power transmission & distribution",
      "Solar",
      "Wind, wave & tidal",
    ],
  },
  {
    title: "Consumer & healthcare",
    items: [
      "Beauty & personal care",
      "Food",
      "Medical devices",
      "Pharmaceuticals",
      "Hospitality & tourism",
    ],
  },
  {
    title: "Government & trade",
    items: ["Customs services", "Import & export", "Public sector"],
  },
  {
    title: "Transportation",
    items: ["Aerospace", "Automotive", "Marine", "Rail", "Space"],
  },
  {
    title: "Products & technology",
    items: [
      "Accessories",
      "Appliances",
      "Batteries",
      "Footwear",
      "Furniture",
      "Housewares & home decor",
      "HVACR",
      "IT & communications",
      "Internet of Things & software",
      "Lighting",
      "Machinery & tools",
      "Medical products",
      "Packaging",
      "Retail",
      "Sporting goods",
      "Textiles & apparel",
      "Wireless products",
    ],
  },
];

export const contact = {
  phoneDisplay: "+91 95995 93141",
  phoneHref: "+919599593141",
  whatsapp: "919599593141",
  feedbackEmail: "feedback@complia.services",
  address:
    "H. No. 9, Second Floor, Paschim Vihar Extn., Paschim Vihar, West Delhi, New Delhi, Delhi, India 110063",
  hours: "Monday–Friday · 9:30 am–5:30 pm",
};

export const legalPages = {
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "Migrated from the previous Complia website",
    intro:
      "This policy explains the types of information Complia may collect through its website, why it is used, and the choices available to visitors.",
    sections: [
      {
        title: "Information we collect",
        paragraphs: [
          "When you contact Complia, we may receive information such as your name, organisation, email address, phone number, message, attachments, and any other information you choose to provide. The reason for requesting personal information will be made clear when it is requested.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Information may be used to provide, operate, maintain, improve, and understand the website; respond to enquiries; provide service updates; prevent fraud; and support relevant communications.",
        ],
      },
      {
        title: "Logs and cookies",
        paragraphs: [
          "Hosting and analytics systems may record technical information such as IP address, browser type, internet service provider, timestamps, referring pages, and site activity. Cookies may store visitor preferences and help improve the website experience.",
        ],
      },
      {
        title: "Your data rights",
        paragraphs: [
          "Subject to applicable law, you may request access, correction, completion, deletion, or withdrawal of consent relating to your personal information, and may raise a complaint with the appropriate authority.",
        ],
      },
      {
        title: "Children's information",
        paragraphs: [
          "Complia does not knowingly collect personally identifiable information from children under 18. If you believe a child has provided such information, contact Complia so that it can be removed promptly.",
        ],
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    updated: "Migrated from the previous Complia website",
    intro:
      "These terms govern access to the Complia website and its information, resources, and services. Using the website indicates acceptance of these terms and the Privacy Policy.",
    sections: [
      {
        title: "Responsible use",
        paragraphs: [
          "Visitors must use the website and its resources only for lawful, authorised purposes. Attempts to disrupt services, obtain unauthorised access, harvest user information, impersonate others, automate misuse, or reproduce protected materials are prohibited.",
        ],
      },
      {
        title: "Service timelines",
        paragraphs: [
          "Certification and regulatory-service timelines are estimates and may depend on government departments, platforms, laboratories, applicants, and other third parties outside Complia's control.",
        ],
      },
      {
        title: "Payments, cancellations, and refunds",
        paragraphs: [
          "The existing policy states that payments are generally non-refundable, while exceptional refund requests may be considered case by case. Approved refunds are credited within the stated processing period. Questions should be raised promptly through the published feedback channel.",
        ],
      },
      {
        title: "Third-party links",
        paragraphs: [
          "Complia may link to services it does not own or control and is not responsible for their content, policies, or practices. Visitors should review the terms and privacy policies of third-party websites they use.",
        ],
      },
      {
        title: "Liability and termination",
        paragraphs: [
          "Access may be suspended or terminated where these terms are breached. To the maximum extent permitted by law, Complia excludes liability for indirect or consequential losses connected with use of, or inability to use, the website or third-party services.",
        ],
      },
    ],
  },
  "regulatory-disclaimer": {
    title: "Regulatory Disclaimer",
    updated: "Important service information",
    intro:
      "Regulatory requirements can change and always depend on the exact product, destination, classification, evidence, and rules in force at the time of application.",
    sections: [
      {
        title: "No automatic approval",
        paragraphs: [
          "Information on this website is general guidance and does not guarantee certification, registration, customs clearance, or acceptance by a regulator. Decisions remain with the responsible authority or authorised conformity body.",
        ],
      },
      {
        title: "Verify current requirements",
        paragraphs: [
          "Applicants should confirm the latest technical regulations, standards, platform rules, fees, evidence requirements, and enforcement dates for their specific product before acting.",
        ],
      },
      {
        title: "Accreditation status",
        paragraphs: [
          "Complia Regulatory Services Private Limited is accredited by NABCB to ISO/IEC 17065:2012 under certificate PC 050 for its published scope. Complia is progressing toward SASO-notified certification-body recognition and does not present that notification as complete.",
        ],
      },
    ],
  },
} as const;

export type LegalSlug = keyof typeof legalPages;
