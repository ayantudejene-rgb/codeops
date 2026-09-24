export const symptomsData = [
  {
    id: 1,
    title: "Fever",
    icon: "🤒",
    causes: [
      "Viral or bacterial infections (flu, cold, typhoid)",
      "Dehydration or heat exhaustion",
      "Inflammatory conditions",
      "Teething in children"
    ],
    actions: [
      "Rest and avoid strenuous activity",
      "Drink plenty of water or oral rehydration salts",
      "Take a lukewarm sponge bath (not cold!)",
      "Monitor temperature every 4 hours"
    ],
    warning: "If temperature exceeds 39.5°C (103°F), lasts more than 3 days, or is accompanied by stiff neck or confusion – seek urgent care.",
    isEmergency: true,
    color: "#DC2626"
  },
  {
    id: 2,
    title: "Headache",
    icon: "🤕",
    causes: [
      "Tension or stress",
      "Dehydration or skipping meals",
      "Lack of sleep or eye strain",
      "Sinus congestion or migraine"
    ],
    actions: [
      "Rest in a quiet, dark room",
      "Apply a cold or warm compress to the forehead",
      "Stay hydrated – drink water slowly",
      "Over-the-counter pain relief if safe for you"
    ],
    warning: "If it's a sudden 'thunderclap' headache, follows a head injury, or is accompanied by slurred speech – go to the ER immediately.",
    isEmergency: true,
    color: "#F59E0B"
  },
  {
    id: 3,
    title: "Breathing",
    icon: "🫁",
    causes: [
      "Asthma or allergic reaction",
      "Respiratory infections (pneumonia, bronchitis)",
      "Anxiety or panic attack",
      "Smoke or dust inhalation"
    ],
    actions: [
      "Sit upright to open the airways",
      "Use an inhaler if prescribed",
      "Breathe slowly through pursed lips",
      "Avoid triggers (smoke, strong smells)"
    ],
    warning: "If you are gasping, can't speak full sentences, or lips turn blue – this is a life-threatening emergency!",
    isEmergency: true,
    color: "#7C3AED"
  },
  {
    id: 4,
    title: "Stomach",
    icon: "🤢",
    causes: [
      "Food poisoning or contaminated water",
      "Gastroenteritis (stomach flu)",
      "Indigestion or overeating",
      "Stress or anxiety"
    ],
    actions: [
      "Rest your stomach – avoid solid food for a few hours",
      "Sip clear fluids (water, broth) frequently",
      "Eat bland foods (banana, rice, toast) once nausea subsides",
      "Use a hot water bottle for cramps"
    ],
    warning: "If there's severe pain, blood in vomit/stool, or high fever – see a doctor immediately.",
    isEmergency: false,
    color: "#10B981"
  }
];