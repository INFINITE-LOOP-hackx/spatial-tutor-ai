export type Hotspot = {
  id: string;
  name: string;
  /** World-space anchor of the marker */
  position: [number, number, number];
  category: string;
  summary: string;
  facts: string[];
};

export type SceneModule = {
  id: string;
  title: string;
  subject: string;
  tagline: string;
  description: string;
  level: "Foundation" | "Intermediate" | "Advanced";
  duration: string;
  accentLabel: string;
  /** Domain framing handed to the AI tutor as system context */
  tutorContext: string;
  camera: { position: [number, number, number]; target: [number, number, number] };
  hotspots: Hotspot[];
};

export const scenes: SceneModule[] = [
  {
    id: "cardiac",
    title: "The Human Heart",
    subject: "Anatomy & Physiology",
    tagline: "Four chambers, two circuits, one pump",
    description:
      "Walk around a sectioned cardiac model and interrogate every chamber, valve and great vessel. Follow deoxygenated blood from the vena cava to the lungs and back out through the aorta.",
    level: "Foundation",
    duration: "12 min guided",
    accentLabel: "Anatomy",
    tutorContext:
      "You are teaching human cardiac anatomy and physiology to an undergraduate health-science student. Use correct anatomical terminology (superior/inferior, anterior/posterior), relate structure to function, and mention clinically relevant details when useful.",
    camera: { position: [4.2, 2.6, 5.4], target: [0, 0.2, 0] },
    hotspots: [
      {
        id: "left-ventricle",
        name: "Left Ventricle",
        position: [-1.05, -0.85, 0.55],
        category: "Chamber",
        summary:
          "The high-pressure pump of the systemic circuit, with a myocardial wall roughly three times thicker than the right ventricle.",
        facts: [
          "Ejects ~70 mL per beat (stroke volume)",
          "Peak systolic pressure ≈ 120 mmHg",
          "Wall thickness ≈ 10–12 mm",
        ],
      },
      {
        id: "right-ventricle",
        name: "Right Ventricle",
        position: [1.15, -0.8, 0.6],
        category: "Chamber",
        summary:
          "A thin-walled, crescent-shaped chamber that drives blood a short distance into the low-resistance pulmonary circuit.",
        facts: ["Peak pressure ≈ 25 mmHg", "Wall thickness ≈ 3–5 mm", "Shares the interventricular septum"],
      },
      {
        id: "left-atrium",
        name: "Left Atrium",
        position: [-1.0, 0.95, -0.35],
        category: "Chamber",
        summary:
          "Receives oxygenated blood from four pulmonary veins and delivers it across the mitral valve during diastole.",
        facts: ["Most posterior cardiac chamber", "Atrial kick adds ~20% of filling", "Site of most atrial fibrillation"],
      },
      {
        id: "right-atrium",
        name: "Right Atrium",
        position: [1.1, 1.0, -0.3],
        category: "Chamber",
        summary:
          "Collection chamber for systemic venous return via the superior and inferior vena cava; houses the sinoatrial node.",
        facts: ["Contains the SA node pacemaker", "Normal pressure 2–6 mmHg", "Drains the coronary sinus"],
      },
      {
        id: "aorta",
        name: "Aortic Arch",
        position: [-0.35, 2.35, -0.1],
        category: "Great Vessel",
        summary:
          "The body's largest artery. Its elastic recoil during diastole maintains perfusion pressure between beats — the Windkessel effect.",
        facts: ["Diameter ≈ 25 mm at the root", "Gives off three arch branches", "Elastic lamellae store systolic energy"],
      },
      {
        id: "pulmonary-artery",
        name: "Pulmonary Trunk",
        position: [0.75, 2.15, 0.45],
        category: "Great Vessel",
        summary:
          "The only artery in the adult body carrying deoxygenated blood, bifurcating toward each lung for gas exchange.",
        facts: ["Splits into left and right branches", "Low resistance circuit", "Guarded by the pulmonary valve"],
      },
      {
        id: "coronary",
        name: "Coronary Arteries",
        position: [-1.55, 0.15, 1.05],
        category: "Perfusion",
        summary:
          "Vessels that perfuse the myocardium itself, filling paradoxically during diastole when the muscle relaxes.",
        facts: ["LAD supplies ~50% of the LV", "Occlusion → myocardial infarction", "Flow peaks in diastole"],
      },
      {
        id: "mitral-valve",
        name: "Mitral Valve",
        position: [-0.9, 0.2, 0.9],
        category: "Valve",
        summary:
          "The bicuspid atrioventricular valve, tethered by chordae tendineae to papillary muscles that prevent prolapse under pressure.",
        facts: ["Two leaflets, anterior and posterior", "Closure produces the S1 heart sound", "Area ≈ 4–6 cm²"],
      },
    ],
  },
  {
    id: "caffeine",
    title: "Caffeine, C₈H₁₀N₄O₂",
    subject: "Molecular Chemistry",
    tagline: "A purine alkaloid at true bond geometry",
    description:
      "Inspect a space-accurate caffeine molecule. Rotate through the fused xanthine ring system, probe individual atoms, and see why planarity and nitrogen lone pairs govern its receptor affinity.",
    level: "Intermediate",
    duration: "9 min guided",
    accentLabel: "Chemistry",
    tutorContext:
      "You are teaching organic and medicinal chemistry. Explain hybridisation, resonance, planarity, polarity and structure–activity relationships for the caffeine molecule at an undergraduate level.",
    camera: { position: [0, 1.4, 8.5], target: [0, 0, 0] },
    hotspots: [
      {
        id: "purine-core",
        name: "Fused Purine Core",
        position: [0, 0, 0],
        category: "Ring System",
        summary:
          "A pyrimidinedione fused to an imidazole ring. The entire bicycle is planar and aromatic in character, which lets caffeine stack into adenosine receptor pockets.",
        facts: ["Bicyclic xanthine scaffold", "Fully conjugated π system", "Planarity drives receptor binding"],
      },
      {
        id: "n-methyls",
        name: "Three N-Methyl Groups",
        position: [2.6, 1.5, 0],
        category: "Substituent",
        summary:
          "Methylation at N1, N3 and N7 blocks hydrogen-bond donation and raises lipophilicity — this is why caffeine crosses the blood–brain barrier easily.",
        facts: ["1,3,7-trimethylxanthine", "log P ≈ -0.07", "Removing methyls gives theobromine/theophylline"],
      },
      {
        id: "carbonyls",
        name: "Carbonyl Oxygens",
        position: [-2.9, 0.9, 0],
        category: "Functional Group",
        summary:
          "Two sp²-hybridised C=O groups act as strong hydrogen-bond acceptors and dominate the molecule's dipole moment.",
        facts: ["Both are amide-like carbonyls", "Key acceptors at the A2A receptor", "Dipole ≈ 3.6 D"],
      },
      {
        id: "imidazole-n",
        name: "Imidazole Nitrogen (N9)",
        position: [2.3, -1.6, 0],
        category: "Heteroatom",
        summary:
          "The unmethylated nitrogen keeps a lone pair in the ring plane — the weakly basic site responsible for caffeine's salt formation.",
        facts: ["pKa of conjugate acid ≈ 0.6", "sp² lone pair, in-plane", "Coordination site for metal complexes"],
      },
      {
        id: "planarity",
        name: "Molecular Plane",
        position: [0, -2.6, 0],
        category: "Geometry",
        summary:
          "Every ring atom lies within a fraction of an ångström of one plane, allowing π-stacking with aromatic residues such as phenylalanine.",
        facts: ["Bond angles ≈ 120°", "Stacks at ~3.4 Å spacing", "Explains crystal packing behaviour"],
      },
    ],
  },
  {
    id: "cathedral",
    title: "Gothic Cathedral Bay",
    subject: "Architectural History",
    tagline: "How stone learned to carry light",
    description:
      "Step inside a single structural bay of a High Gothic cathedral. Trace the load path from rib vault to flying buttress and understand why the wall could finally dissolve into glass.",
    level: "Advanced",
    duration: "14 min guided",
    accentLabel: "Architecture",
    tutorContext:
      "You are teaching Gothic architectural history and structural logic (c. 1140–1350). Reference real precedents such as Saint-Denis, Chartres, Amiens and Beauvais, and explain load paths in plain structural terms.",
    camera: { position: [9, 5.5, 12], target: [0, 4, 0] },
    hotspots: [
      {
        id: "rib-vault",
        name: "Quadripartite Rib Vault",
        position: [0, 10.4, 0],
        category: "Structure",
        summary:
          "Diagonal stone ribs channel the vault's weight into four discrete points instead of a continuous wall, freeing the bay between piers.",
        facts: ["Replaces heavy groin vaults", "Ribs built first as permanent centering", "Webbing can be thin infill"],
      },
      {
        id: "pointed-arch",
        name: "Pointed Arch",
        position: [0, 7.2, 3.1],
        category: "Structure",
        summary:
          "Steepening the arch redirects thrust downward rather than outward, and lets arches of different spans reach the same height.",
        facts: ["Reduces lateral thrust", "Decouples span from height", "Arrived via Islamic building traditions"],
      },
      {
        id: "compound-pier",
        name: "Compound Pier",
        position: [3.3, 3.0, 3.1],
        category: "Support",
        summary:
          "A bundle of engaged shafts, each visually continuing a rib above, so the structural diagram is legible from the floor.",
        facts: ["Shafts mirror vault ribs", "Carries concentrated point loads", "Expresses verticality"],
      },
      {
        id: "flying-buttress",
        name: "Flying Buttress",
        position: [6.6, 7.6, 0],
        category: "Support",
        summary:
          "An external half-arch that catches lateral vault thrust and walks it out to a weighted pier, keeping the nave wall free of mass.",
        facts: ["Pinnacles add stabilising weight", "Beauvais failed by overreaching", "Enables 40 m+ vault heights"],
      },
      {
        id: "clerestory",
        name: "Clerestory Window",
        position: [-3.3, 8.2, 0],
        category: "Light",
        summary:
          "With the wall relieved of load, the upper storey becomes tracery and glass — theology rendered as luminosity.",
        facts: ["Bar tracery after Reims", "Coloured light as divine metaphor", "Wall becomes a membrane"],
      },
      {
        id: "triforium",
        name: "Triforium",
        position: [-3.3, 5.6, 0],
        category: "Elevation",
        summary:
          "The shadowed middle storey of the three-part elevation, masking the aisle roof and setting up a rhythm of dark and light.",
        facts: ["Arcade → triforium → clerestory", "Often a narrow walkway", "Later glazed at Saint-Denis"],
      },
    ],
  },
];

export function getScene(id: string): SceneModule | undefined {
  return scenes.find((s) => s.id === id);
}
