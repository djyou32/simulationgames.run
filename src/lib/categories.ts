export type Category = {
  slug: string;
  name: string;
  shortName: string;
  mainUrl: string;
  image: string;
  accent: string;
  title: string;
  description: string;
  intro: string;
  value: string;
  features: string[];
  picks: string[];
  faq: { question: string; answer: string }[];
};

export const SITE_URL = "https://simulationgames.run";
export const MAIN_SITE_URL = "https://simulation-games.com";

export const categories: Category[] = [
  {
    slug: "life-simulator-games",
    name: "Life Simulator Games",
    shortName: "Life Sims",
    mainUrl: `${MAIN_SITE_URL}/life-simulator-games`,
    image: "/images/life.png",
    accent: "#2f6f4e",
    title: "Life Simulator Games Guide: Build a Second Life Online",
    description:
      "Explore life simulator games, what makes life sims fun, and where to play curated browser-based life simulation games for free.",
    intro:
      "Life simulator games turn everyday choices into playful stories. You can design a character, manage a home, build relationships, try new routines, and watch a virtual life respond to the decisions you make.",
    value:
      "This genre works because it gives players freedom without demanding a perfect score. The best life sims are open-ended, personal, and easy to revisit for a short session or a longer story.",
    features: [
      "Character creation and personal style choices",
      "Homes, rooms, families, pets, and social stories",
      "Progression through routines, goals, jobs, and milestones",
      "A gentle sandbox pace that rewards creativity",
    ],
    picks: ["family life sims", "avatar makers", "pet life games", "home design simulators"],
    faq: [
      {
        question: "What are life simulator games?",
        answer:
          "Life simulator games are games where players guide a virtual person, family, pet, or community through daily choices, relationships, homes, and long-term goals.",
      },
      {
        question: "Where can I play life simulator games online?",
        answer:
          "You can browse a curated browser collection on Simulation Games, including life sims that work without a download.",
      },
    ],
  },
  {
    slug: "relaxing-simulation-games",
    name: "Relaxing Simulation Games",
    shortName: "Relaxing Sims",
    mainUrl: `${MAIN_SITE_URL}/relaxing-simulation-games`,
    image: "/images/relaxing.png",
    accent: "#4f6fb5",
    title: "Relaxing Simulation Games: Calm, Cozy Browser Sims",
    description:
      "Find relaxing simulation games for cozy play sessions, stress-free tasks, slow progression, and calming browser gameplay.",
    intro:
      "Relaxing simulation games are built around comfort. Instead of pressure, they focus on tidy tasks, soft goals, pleasing loops, and small moments of progress that feel good to complete.",
    value:
      "They are ideal when players want something interactive but not intense: a farm to tend, a room to arrange, a shop to organize, or a simple world that lets them move at their own pace.",
    features: [
      "Low-pressure objectives with little or no failure state",
      "Satisfying loops such as cleaning, gardening, crafting, or decorating",
      "Readable controls for desktop and mobile play",
      "Warm visual themes and steady progression",
    ],
    picks: ["cozy farm sims", "cleaning games", "decorating games", "gentle management sims"],
    faq: [
      {
        question: "What makes a simulation game relaxing?",
        answer:
          "A relaxing simulation game usually avoids harsh timers and penalties, then replaces pressure with simple tasks, cozy visuals, and steady rewards.",
      },
      {
        question: "Are relaxing simulation games good for short breaks?",
        answer:
          "Yes. Many relaxing sims are easy to pause and return to, making them useful for quick breaks or quiet evening play.",
      },
    ],
  },
  {
    slug: "driving-simulation-games",
    name: "Driving Simulation Games",
    shortName: "Driving Sims",
    mainUrl: `${MAIN_SITE_URL}/driving-simulation-games`,
    image: "/images/driving.jpg",
    accent: "#c45a2d",
    title: "Driving Simulation Games: Cars, Trucks, Parking and Roads",
    description:
      "Discover driving simulation games for parking, racing, cruising, truck handling, police chases, and free browser vehicle play.",
    intro:
      "Driving simulation games put the feel of a vehicle at the center of play. Some focus on precise parking, others on high-speed roads, off-road tracks, city traffic, or heavy truck control.",
    value:
      "A strong driving sim makes every turn, brake, and drift feel meaningful. Browser driving games are especially useful because players can try different vehicle styles instantly.",
    features: [
      "Car, truck, taxi, bus, buggy, and off-road vehicle challenges",
      "Parking precision, traffic awareness, and open-road cruising",
      "Physics-driven movement with skill-based control",
      "Fast access without installation",
    ],
    picks: ["parking simulators", "truck sims", "off-road driving", "city traffic games"],
    faq: [
      {
        question: "What types of driving simulation games are popular?",
        answer:
          "Popular types include parking simulators, truck driving games, traffic driving games, off-road vehicle sims, and open-city driving challenges.",
      },
      {
        question: "Can I play driving simulation games in a browser?",
        answer:
          "Yes. Simulation Games curates browser-based driving sims that can be played online without installing a separate game client.",
      },
    ],
  },
  {
    slug: "farming-simulation-games",
    name: "Farming Simulation Games",
    shortName: "Farming Sims",
    mainUrl: `${MAIN_SITE_URL}/farming-simulation-games`,
    image: "/images/farming.jpg",
    accent: "#5f7f35",
    title: "Farming Simulation Games: Grow, Harvest and Manage",
    description:
      "Learn about farming simulation games, from crop growing and tractors to farm business management and cozy harvest games.",
    intro:
      "Farming simulation games make progress visible. A field starts empty, crops grow, machines move, resources improve, and a small farm can become a thriving operation.",
    value:
      "The appeal comes from rhythm: plant, wait, harvest, upgrade, and repeat. Some farm sims are cozy and decorative, while others lean into business strategy and machine control.",
    features: [
      "Crop planting, watering, harvesting, and selling",
      "Tractor, plow, and farm equipment gameplay",
      "Farm expansion, upgrades, and resource planning",
      "A mix of cozy pacing and management strategy",
    ],
    picks: ["tractor games", "garden sims", "farm business games", "harvest simulators"],
    faq: [
      {
        question: "Why are farming simulation games so popular?",
        answer:
          "They combine relaxing repetition with visible growth, giving players a clear sense of progress as their land, crops, and tools improve.",
      },
      {
        question: "Do farming simulation games require downloads?",
        answer:
          "Many modern farming sims can be played directly in the browser. The main Simulation Games site collects free online options.",
      },
    ],
  },
  {
    slug: "job-simulator-games",
    name: "Job Simulator Games",
    shortName: "Job Sims",
    mainUrl: `${MAIN_SITE_URL}/job-simulator-games`,
    image: "/images/job.png",
    accent: "#8368b3",
    title: "Job Simulator Games: Try Careers and Work Challenges",
    description:
      "Explore job simulator games that let players run shops, repair cars, cook food, manage businesses, and test virtual careers online.",
    intro:
      "Job simulator games turn work into a set of clear, satisfying systems. Players can cook, clean, repair, drive, serve customers, build businesses, and improve through practice.",
    value:
      "The fun is in mastery. A good career sim makes ordinary tasks feel tactile and meaningful, then adds upgrades, deadlines, customers, and better tools.",
    features: [
      "Hands-on work tasks with visible results",
      "Restaurants, stores, garages, airports, hotels, and service jobs",
      "Career progression through upgrades and better efficiency",
      "Light educational value through role-play and systems thinking",
    ],
    picks: ["restaurant sims", "mechanic games", "store management", "service job games"],
    faq: [
      {
        question: "What are job simulator games?",
        answer:
          "Job simulator games let players perform virtual work tasks, such as cooking, repairing, cleaning, driving, managing stores, or operating professional equipment.",
      },
      {
        question: "Are job simulator games only for serious players?",
        answer:
          "No. Many job sims are casual and funny, while others offer deeper management and skill-based challenges.",
      },
    ],
  },
  {
    slug: "scenario-simulator-games",
    name: "Scenario Simulator Games",
    shortName: "Scenario Sims",
    mainUrl: `${MAIN_SITE_URL}/scenario-simulator-games`,
    image: "/images/scenario.png",
    accent: "#2c7a86",
    title: "Scenario Simulator Games: What-If Challenges Online",
    description:
      "Browse scenario simulator game ideas covering tactical choices, survival situations, city problems, emergencies, and mission-based simulations.",
    intro:
      "Scenario simulator games ask a simple question: what would you do if this happened? They drop players into a focused situation and make every decision part of the outcome.",
    value:
      "These games are useful for players who enjoy solving problems under constraints. Instead of open-ended routine, the pleasure comes from reading the situation and choosing a path.",
    features: [
      "Mission-based goals with clear outcomes",
      "Tactical choices, survival pressure, or unusual problems",
      "Systems that react to player decisions",
      "Replay value through alternate approaches",
    ],
    picks: ["survival scenarios", "city problem sims", "mission games", "decision simulators"],
    faq: [
      {
        question: "How are scenario simulator games different from life sims?",
        answer:
          "Life sims are usually broad and open-ended. Scenario sims focus on a specific situation, mission, or problem with a clearer objective.",
      },
      {
        question: "Where can I find scenario simulator games?",
        answer:
          "The main Simulation Games category page collects scenario sims that are playable online in the browser.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
