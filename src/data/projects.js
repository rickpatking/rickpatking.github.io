export const projects = [
  {
    id: 1,
    title: "NBA Lineups Analysis Dashboard",
    description: "Built an end-to-end data pipeline analyzing NBA lineup performance based on player combinations. Pulled game data from the NBA API, processed play-by-play data into lineup-based stints, and stored results in PostgreSQL. Designed SQL views to calculate player and team metrics such as net rating, assist-to-turnover ratio, and impact. Built an interactive Power BI dashboard to visualize lineup efficiency and highlight best-performing player combinations.",
    technologies: ["Python", "PostgreSQL", "SQL", "Power BI", "NBA API"],
    github: "https://github.com/RickPatKing",
    demo: null,
    image: null,
  },
  {
    id: 2,
    title: "Transfer Portal Basketball Predictor",
    description: "Developed a statistical model with 80% accuracy predicting the success of NCAA basketball transfers. Managed the full pipeline: data collection, cleaning, feature engineering, model training, and evaluation. Applied correlation analysis, logistic regression, and random forest classifiers to identify key predictive metrics.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/RickPatKing",
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: "Safe Pathfinding with Voronoi Diagrams",
    description: "Built a computational geometry program to compute safe and efficient routes while avoiding high-risk areas. Implemented Voronoi diagram generation to partition maps into navigable regions and used Dijkstra's algorithm for optimal pathfinding. Collaborated on integration of risk mapping and UI components.",
    technologies: ["C++", "Computational Geometry", "Dijkstra's Algorithm"],
    github: "https://github.com/RickPatKing",
    demo: null,
    image: null,
  },
];

export const skills = {
  languages: ["Python", "SQL", "R", "C++"],
  libraries: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
  tools: ["Power BI", "PostgreSQL", "Git/GitHub", "Excel"],
  certificates: ["NVIDIA: Fundamentals of Deep Learning (Nov 2024)"],
};

export const experience = [
  {
    title: "Workshop Coordinator",
    organization: "Data Science and Informatics Club",
    period: "Fall 2025 - Present",
    description: [
      "Organized and led hands-on workshops to develop core data science and programming skills among students",
      "Developed learning materials, guided peers through coding exercises, and supported members in applying concepts to real projects",
      "Coordinate with other officers to expand engagement and foster a growing community of data scientists",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Data Science",
  school: "University of Florida",
  location: "Gainesville, FL",
  period: "Fall 2024 - Spring 2027",
  gpa: "4.0/4.0",
  coursework: ["STA 3100", "MAS 3114", "MAD 2502"],
};

export const personalInfo = {
  name: "Patrick King",
  title: "Data Science Student",
  email: "patrickking@ufl.edu",
  phone: "518-860-6191",
  github: "https://github.com/RickPatKing",
  linkedin: "https://linkedin.com/in/patrickking0",
};
