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
    kicker: "SASO certification / SABER certificate",
    title: "SASO / SABER Certification",
    shortTitle: "SASO / SABER Certification",
    summary:
      "Looking for a SASO Certification for Saudi Arabia? Complia is preparing to support importers and exporters through the SASO certification process and the SABER certification system.",
    intro:
      "Complia is in the process of becoming a SASO-notified body. Once notification is complete, that recognition would authorize Complia to issue SASO Certifications for products and shipments destined for the Kingdom of Saudi Arabia. The SASO Certificate of Conformity is a mandatory requirement for all regulated consignments entering the Saudi market, ensuring compliance with the quality and safety standards established by the Saudi Standards, Metrology, and Quality Organization (SASO).",
    image: "/assets/saso-logo.webp",
    imageAlt: "Saudi Standards, Metrology and Quality Organization mark",
    bestFor: [
      "Importers registered on the SABER platform",
      "Products under SASO technical regulations",
      "Regulated and non-regulated consignments",
    ],
    facts: [
      { value: "2019", label: "SALEEM launched" },
      { value: "SABER", label: "Online system" },
      { value: "2", label: "Certificate stages" },
    ],
    steps: [
      { title: "Register", text: "Importers are required to register on the SABER platform." },
      { title: "Prepare", text: "Make sure to have all the necessary documents in place when applying for a SABER Certificate KSA." },
      { title: "Product certificate", text: "Products under the SASO technical regulations need a Product Certificate of Conformity." },
      { title: "Shipment certificate", text: "Every regulated and non-regulated consignment must have a Shipment Certificate of Conformity." },
    ],
    sections: [
      {
        title: "What is the SASO Certificate of Conformity?",
        paragraphs: [
          "The Saudi Standards, Metrology, and Quality Organization (SASO) launched the Saudi Product Safety Program, SALEEM, in 2019. Saleem derived from the Arabic word for “safety” to ensure products meet strict national quality and safety standards.",
          "As part of this initiative, SABER was introduced as a supervised digital platform that enables businesses, government entities, and individuals to register both imported and locally manufactured products and obtain the necessary conformity certificates with efficiency and transparency.",
          "To facilitate smooth customs clearance into Saudi Arabia, exporters are required to present a Product & Shipment Certificate of Conformity, serving as technical proof that both the product and shipment comply with SASO’s regulatory requirements.",
        ],
      },
      {
        title: "SASO Certificate Saudi Arabia — Requirements",
        paragraphs: [
          "SASO certification is indispensable for any product allowed in Saudi Arabia. There are some points to remember when planning to apply for and obtain SABER certificates.",
        ],
        bullets: [
          "Importers are required to register on the SABER platform.",
          "Factory audits of SASO-regulated products can be done only by a notified SASO certification body.",
          "Products under the SASO technical regulations need both Product and Shipment Certificates of Conformity.",
          "Importers are required to produce self-declaration and shipment SASO certificates for non-regulated products.",
          "Make sure to have all the necessary documents in place when applying for a SABER Certificate KSA (product and shipment).",
          "Failure to deliver the shipment certificate upon arrival of the consignment in Saudi Arabia would result in the cancellation of the import, and the consignment will have to be re-exported.",
        ],
      },
      {
        title: "SALEEM and SABER Saudi Arabia",
        paragraphs: [
          "“SALEEM” is the name of the Saudi Arabian Product Safety Program, administered by the Saudi Standards, Metrology, and Quality Organization (SASO). The SALEEM Saudi Arabia program focuses on ensuring the quality of products sold in Saudi Arabia, hence the name. The Arabic word SALEEM means “without risk” or “without danger” to the user, the community, or the environment. SABER Saudi Arabia is an online system used by SALEEM to ensure that all products and shipments comply with the program’s standards.",
          "As a platform, SABER facilitates the electronic acquisition of the Certificate of Conformity and Certificate of Shipment Conformity necessary for the entry of imported and domestically manufactured consumer goods into the Saudi market, called the Saber Certification Saudi Arabia. The hub’s purpose is to safeguard businesses against fraudulent activity and guarantee that consumers can buy products without worrying about their well-being.",
          "Since January 1, 2019, importers have been required to enter SABER, register the regulated items, and select one of the certifying organizations allowed by SASO to submit a certification request before importing products into the nation. Therefore, SABER offers two distinct certificates to certify products and shipments.",
        ],
      },
      {
        title: "SASO Shipment Certificate of Conformity",
        paragraphs: [
          "Every Saudi Arabia consignment is required to produce a Shipment Certificate of Conformity. The SASO shipment certificate is valid per consignment.",
          "The SASO Shipment Certificate is issued through the SABER platform by an authorized SASO body for regulated products.",
          "On July 1, 2020, the SABER platform and FASAH system were linked together for a smoother and faster movement of imports in Saudi Arabia. The integration helps in the automatic verification of shipment certificates. A printed copy of the SASO SABER certificate is not necessary upon arrival.",
        ],
        bullets: [
          "Product Certificate of Conformity or self-declaration (in case of non-regulated products)",
          "Commercial invoice, packing list, bill of lading, or airway bill",
        ],
      },
      {
        title: "SASO Product Certificate of Conformity",
        paragraphs: [
          "SASO has set specific quality checks and standards for products imported to Saudi Arabia. Every product falling under the SASO regulation must pass quality checks to be eligible for a SASO Certificate for the product.",
          "The Product certificate is issued through the SABER platform after certification documents are satisfactory and comply with the SASO technical regulations. The generation of the SABER certificate is testimony to the product’s compliance with the SASO guidelines.",
        ],
        bullets: [
          "The Product Certificate is applicable for one year.",
          "Safety Test report from ISO 17025 accredited laboratory",
          "Actual product photos with clear markings, labeling, and packaging",
          "Factory Business License",
        ],
      },
      {
        title: "SABER Platform and SABER Certification Saudi Arabia",
        paragraphs: [
          "The Saudi Standards, Metrology, and Quality Organization (SASO) developed an online conformity assessment system, SABER, in January 2019. This platform helps importers get their products regulated by SASO tested and factory audited by certification bodies authorized by SASO and receive their SABER certification for products and shipments online. Importers can also request a SABER shipment certificate and a self-declaration for non-regulated products.",
          "The SABER platform integrated with the FASAH system on July 1, 2020. That led to automatic shipment certificate verification, and the importer does not need to produce a printed copy of the certificate for customs clearance.",
        ],
      },
    ],
    faq: [
      {
        question: "What does SALEEM mean?",
        answer: "The Arabic word SALEEM means “without risk” or “without danger” to the user, the community, or the environment.",
      },
      {
        question: "Does every consignment require a Shipment Certificate of Conformity?",
        answer: "Every consignment, both regulated and non-regulated, must have a Shipment Certificate of Conformity. The certificate is valid per consignment.",
      },
      {
        question: "Is Complia already SASO-notified?",
        answer: "Complia is NABCB-accredited to ISO/IEC 17065:2012 under certificate PC 050 and is progressing toward recognition as an official SASO-notified Certification Body.",
      },
    ],
  },
  {
    slug: "pcoc-scoc",
    index: "02",
    kicker: "Product & shipment conformity",
    title: "PCoC & SCoC",
    shortTitle: "PCoC & SCoC",
    summary:
      "To ensure your products have a seamless entry into the Saudi market, they must meet the SASO quality and safety standards through the applicable Product Certificate of Conformity and Shipment Certificate of Conformity routes.",
    intro:
      "SASO has listed a category of items imported to Saudi Arabia under technical regulations. These products must adhere to the quality specifications and safety standards SASO sets. For seamless customs clearance, all regulated products need a SASO Product Certificate of Conformity.",
    image: "/assets/scoc-pcoc.webp",
    imageAlt: "Packages beside a shipment conformity checklist",
    bestFor: [
      "Products under SASO technical regulations",
      "Every regulated and non-regulated shipment",
      "Low-risk products using an importer declaration",
    ],
    facts: [
      { value: "1 year", label: "Typical PCoC validity" },
      { value: "Per shipment", label: "SCoC validity" },
      { value: "SABER", label: "Issue workflow" },
    ],
    steps: [
      { title: "Importer request", text: "The responsibility of initiating the process to acquire a PCoC lies entirely with the importer." },
      { title: "Document evaluation", text: "Test reports, product images, markings, labels, datasheets, specifications, manuals, and product information are evaluated." },
      { title: "PCoC", text: "A Product Certificate of Conformity verifies that regulated products are registered in SABER and comply with relevant Technical Regulations." },
      { title: "SCoC", text: "A Shipment Certificate of Conformity is necessary to clear customs for every shipment." },
    ],
    sections: [
      {
        title: "Product Certificate of Conformity",
        paragraphs: [
          "It is necessary to present the Product Certificate of Conformity, also known as the PCoC, to verify that your products have been registered inside SABER and comply with any relevant Technical Regulations. After it is issued, the PCoC has a validity period of one year. The responsibility of initiating the process to acquire a PCoC lies entirely with the importer.",
          "It is impossible to acquire a Shipment Certificate of Conformity (SCoC) if the PCoC registration has not already been completed. On the other hand, an SCoC is necessary to clear customs for every shipment.",
        ],
        bullets: [
          "Items that are seen as ‘risky’ require the PCoC to confirm their compliance with SASO’s quality and safety standards.",
          "Certain products may need additional certificates such as the IECEE Recognition Certificate or Water Efficiency Label Certificate.",
          "Low-risk products that are not subject to technical regulations can proceed with a declaration form submitted by the importer.",
        ],
      },
      {
        title: "Shipment Certificate of Conformity",
        paragraphs: [
          "Every consignment that reaches the port of Saudi Arabia requires a Shipment Certificate of Conformity for customs clearance. Every consignment is bound to adhere to the regulations and guidelines set by SASO, and an SCoC is the technical proof of the same.",
          "It is to be noted that all products, regulated and non-regulated, must have a Shipment Certificate of Conformity. The certificate is valid per consignment. The Shipment Certificate of Conformity is issued through the SABER platform once the test reports and other certification documents are satisfactory and in compliance with SASO regulations.",
          "A PCoC is valid for a year and an SCoC is only valid per shipment. Every time you are sending a shipment you will need to file for a new SCoC.",
        ],
      },
      {
        title: "SASO SALEEM Scheme",
        paragraphs: [
          "SASO (Saudi Standards, Metrology and Quality Organization) developed a Certification system under the Saudi Safety Program to issue conformity certificates for products under various Technical Regulations.",
          "COMPLIA’s accredited certification scheme scope includes Technical Regulations Machinery Safety Part 1—Portable and Hand-oriented Machines, Technical Regulation for Low Voltage Electrical Equipments and Appliances, and Technical Regulation for Telecommunications Devices.",
          "The evaluation activities are aligned as per the regulations issued by SASO in the Technical Regulations.",
        ],
      },
      {
        title: "Certification Evaluation and Decision Procedures",
        paragraphs: [
          "COMPLIA evaluates the following documents to comply with the relevant certification requirements. Certification shall be granted only if the products comply with the relevant SASO Certification requirements.",
          "Any non-compliance to the certification requirements found during the evaluation or otherwise shall be reason for withdrawal, suspension or rejection of certification. Document requirements vary as per the certification requirements.",
        ],
        bullets: [
          "The test report(s) issued by an ISO/IEC 17025 accredited testing laboratory with the corresponding accreditation scope within 3 years validity",
          "Product images containing clear marking and labels of the product sample(s) to be certified",
          "Information on the Technical Datasheets, Specifications, Manuals, etc.",
          "All information, both technical and non-technical, of the product to be certified (Product information)",
        ],
      },
      {
        title: "COMPLIA financial support and general information on the fees",
        paragraphs: [
          "COMPLIA’s certification activities are financially supported by its parent company, Complia Services Limited. This support ensures that our operations remain impartial, consistent, and independent, with adequate resources to carry out all certification functions effectively.",
          "In addition, COMPLIA generates revenue through fees charged to applicants and certified clients for the provision of certification services. These fees are determined based on the scope, complexity, and duration of the certification process and are communicated transparently to all clients in advance.",
          "For more information on our fee structure or to request a quotation, please contact us.",
        ],
      },
      {
        title: "Rights, duties, complaints, and appeals",
        paragraphs: [
          "The applicant/client’s rights and obligations, restrictions and limitations for the use of COMPLIA name, certification mark, logos, etc. are described in the Certification Agreement (CQF-02 Annex A).",
          "Clients can submit feedback, complaints, or appeals by emailing feedback@complia.services, and COMPLIA will respond within three working days. For more information please refer to COMPLIA complaints & appeal procedure.",
        ],
      },
    ],
    faq: [
      {
        question: "Can an SCoC be obtained before product registration?",
        answer: "It is impossible to acquire a Shipment Certificate of Conformity if the PCoC registration has not already been completed for a regulated product.",
      },
      {
        question: "How long is a PCoC valid?",
        answer: "A Product Certificate of Conformity is valid for one year for the approved product.",
      },
      {
        question: "Is an SCoC reusable?",
        answer: "No. An SCoC is only valid per shipment. Every time you are sending a shipment you will need to file for a new SCoC.",
      },
    ],
  },
  {
    slug: "energy-efficiency",
    index: "03",
    kicker: "Energy efficiency labelling",
    title: "SASO Energy Efficiency Rating Certificate",
    shortTitle: "Energy Efficiency Rating",
    summary:
      "New Energy Efficiency Labelling Regulations have been released for various electrical and electronic products by the Saudi Standards, Metrology, and Quality Organization (SASO).",
    intro:
      "Before entering the Saudi Arabian market, manufacturers and importers must check that their goods follow the recently implemented regulations. According to the new Energy Efficiency Labelling Regulations (EER), regulated products are required to identify their level of energy efficiency.",
    image: "/assets/energy-rating.webp",
    imageAlt: "Energy efficiency rating scale from A to G",
    bestFor: [
      "Electrical and electronic products",
      "Manufacturers and importers",
      "Products listed by SASO for energy labelling",
    ],
    facts: [
      { value: "EER", label: "Efficiency rating" },
      { value: "1 year", label: "Typical validity" },
      { value: "Label", label: "Consumer visibility" },
    ],
    steps: [
      { title: "Check scope", text: "Manufacturers and importers must check that their goods follow the Energy Efficiency Labelling Regulations." },
      { title: "Declare", text: "Regulated products must declare their energy consumption and efficiency levels." },
      { title: "Register", text: "After successfully registering the unit in the system, the label reflects the efficiency and level of energy consumption." },
      { title: "Label", text: "The awareness card is installed on the product, denoting its level of energy efficiency." },
    ],
    sections: [
      {
        title: "Products requiring an Energy Efficiency Rating",
        paragraphs: [
          "According to the new Energy Efficiency Labelling Regulations, the following types of products are required to identify their level of energy efficiency:",
        ],
        bullets: [
          "Refrigerators – freezers",
          "Air conditioners (small and large capacity)",
          "Washing machines",
          "Electric motors",
          "Cloth dryers",
          "Water heaters",
          "Electric engines",
          "Lighting products",
          "Tires",
          "New light vehicles",
        ],
      },
      {
        title: "Understanding Energy Efficiency Rating",
        paragraphs: [
          "Energy efficiency implies “using less energy to offer the same output.” It is not only about how little energy a device consumes but also about striking a balance between the energy demand and the supply. The Energy Efficiency Rating/Ratio of a unit is the ratio of the output power to the input power of the unit.",
          "The SASO Energy Efficiency Rating Certificate aims to test the imported products against the requirements set by SASO to rationalize and increase the energy efficiency in production and consumption to preserve the KSA natural resources and economic and social welfare of the KSA. The Energy Efficiency Rating Certificate is issued to products imported to Saudi Arabia after a satisfactory examination of their energy efficiency levels against the SASO technical regulations.",
        ],
      },
      {
        title: "Regulations on Energy Efficiency Labelling",
        paragraphs: [
          "The SASO Energy Efficiency Rating system is a labeling system that informs consumers about the efficiency and energy consumption of an electric appliance. After successfully registering the unit in the system, the label reflects the efficiency and level of energy consumption. The system generates an energy efficiency label which is an awareness card for the consumer and is installed on the product denoting its level of energy efficiency.",
          "An energy efficiency label has the following information displayed on the product:",
        ],
        bullets: [
          "Type of product",
          "Product specifications",
          "QR Code",
          "Trademark",
          "Place of origin",
          "Model number",
          "Quantity of products purchased annually",
        ],
      },
      {
        title: "SASO EER Certification for Saudi Arabia",
        paragraphs: [
          "All electric and electronic products falling under the listed category by SASO must declare their energy consumption and efficiency levels through the Energy Efficiency label for seamless customs clearance. It is an additional but mandatory certification for the products under this list set by SASO.",
        ],
        bullets: [
          "A declaration of conformity from both the importer and the manufacturer is required.",
          "The use of labels is restricted to only regulated products.",
          "SASO EER Certificate is valid for one year, except Air Conditioners which can get an EER Certification for more than one year.",
          "It is a must for the product to comply with the SASO regulations and labeling standards.",
          "The organization is responsible for payments and facilitating acquiring a model sample to confirm the product’s compliance with the standards.",
          "The organization is responsible for bearing the cost of applying to SASO.",
        ],
      },
    ],
    faq: [
      {
        question: "What does an energy-efficiency rating measure?",
        answer: "The Energy Efficiency Rating/Ratio of a unit is the ratio of the output power to the input power of the unit.",
      },
      {
        question: "Does every electrical product need an EER label?",
        answer: "The use of labels is restricted to regulated products falling under the categories listed by SASO.",
      },
      {
        question: "How long is a SASO EER Certificate valid?",
        answer: "A SASO EER Certificate is valid for one year, except Air Conditioners which can get an EER Certification for more than one year.",
      },
    ],
  },
  {
    slug: "iecee-recognition",
    index: "04",
    kicker: "Electrical product recognition",
    title: "SASO IECEE Recognition Certificate",
    shortTitle: "SASO IECEE Recognition",
    summary:
      "Selected products require a SASO IECEE Recognition Certificate in Saudi Arabia before a SABER Shipment Certificate of Conformity request can be approved.",
    intro:
      "The Saudi Organization for Standardization, Metrology, and Quality (SASO) announced on March 10, 2021, a list of products for which it became essential to acquire the IECEE national recognition certificate beginning on July 1, 2021.",
    image: "/assets/iecee.webp",
    imageAlt: "SASO IECEE recognition mark",
    bestFor: [
      "Products with an IECEE CB Test Report and CB Certificate",
      "Saudi importers and manufacturers",
      "Products requiring SABER Shipment CoC approval",
    ],
    facts: [
      { value: "1 year", label: "Typical validity" },
      { value: "5–10 days", label: "Indicative review time" },
      { value: "3 years", label: "CB report recency" },
    ],
    steps: [
      { title: "Confirm", text: "Check that the product is included in the current list requiring a SASO IECEE certificate." },
      { title: "Compile", text: "Submit the industrial license, commercial registration, declarations, photographs, manual, CB report, and CB certificate." },
      { title: "Review", text: "SASO reviews the application and may raise additional questions or request amendments." },
      { title: "Issue", text: "Once SASO approves the application, the certificate is issued and the product is listed in the SASO database." },
    ],
    sections: [
      {
        title: "Products that require the SASO IECEE Recognition Certificate",
        paragraphs: [
          "SASO certification bodies cannot approve SABER Shipment CoC requests for the listed items after the enforcement dates without a valid SASO IECEE Recognition Certificate for the products, even if they have an existing SABER Product CoC.",
          "Below is a list of products requiring the SASO IECEE certificate in Saudi Arabia:",
        ],
        bullets: [
          "Electrical pump (up to 5 hp)",
          "Mobile phones and accessories",
          "Power bank",
          "Smart watch",
          "Lighting and its parts",
          "Television and monitor",
          "Dishwasher",
          "E-cigarette",
          "PV product",
          "Desktop personal computer (PC)",
          "LED lamps",
          "Laptops and tablets",
          "Electric water kettle",
          "Coffee maker",
          "Electric cable",
          "Charger cables for mobile phones",
          "Shaving device",
          "Control gear light",
          "Electrical circuit breaker",
          "Video game consoles and accessories (controllers, wireless headphones, chargers and accessories)",
        ],
      },
      {
        title: "Steps of issuing a SASO IECEE Recognition Certificate",
        paragraphs: [
          "To obtain an IECEE recognition certificate, the following documents must be submitted:",
        ],
        bullets: [
          "Industrial license (if the applicant is a manufacturer)",
          "Saudi commercial registration license",
          "Declaration of conformity forms filled by importer and manufacturer",
          "Product photos, product measurements, marking label and pictures of the plug",
          "User manual in Arabic or Arabic and English",
          "Product CB test report and CB certificate as per the latest IEC standard or SASO-approved standard version, from an IECEE accredited laboratory and within 3 years validity",
        ],
      },
      {
        title: "When a charger is included with the product",
        paragraphs: [
          "In case a charger is included with the product, the following documents are also required:",
        ],
        bullets: [
          "Detailed product pictures",
          "CB certificate for the charger",
          "CB test report of the charger",
        ],
      },
      {
        title: "Validity, timing, models, and importers",
        paragraphs: [
          "Once SASO reviews and approves the application, the SASO IECEE Recognition Certificate is issued and the product is listed in the SASO database.",
          "A SASO IECEE Recognition Certificate is valid for 1 year from the date of issue.",
          "After submission of all the required documents, it takes approximately 5 to 10 working days for the certificate to be issued. This can vary if SASO has additional questions about the product or if any amendments to the application are required.",
          "It is possible to certify more than 1 model number under the same SASO IECEE Recognition Certificate—as long as the products are listed on exactly the same IECEE CB Test Report and IECEE CB Certificate.",
          "When a SASO IECEE Recognition Certificate is issued, it is registered and linked to one specific importer’s Commercial Registration number. Only that importer can use it. Different importers of exactly the same product each require their own SASO IECEE Recognition Certificate.",
        ],
      },
    ],
    faq: [
      {
        question: "Can multiple models share one recognition certificate?",
        answer: "It is possible when the products are listed on exactly the same IECEE CB Test Report and IECEE CB Certificate.",
      },
      {
        question: "Can multiple importers use the same certificate?",
        answer: "No. The certificate is linked to one specific importer’s Commercial Registration number, so each individual importer requires a separate certificate.",
      },
      {
        question: "How long does the process take?",
        answer: "After submission of all required documents, it takes approximately 5 to 10 working days. This can vary if SASO has additional questions or amendments are required.",
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
