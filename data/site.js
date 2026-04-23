window.SITE_DATA = {
  profile: {
    name: "Jeonguk Kang",
    title: "AI Robotics Engineer",
    subtitle:
      "AI Robotics Engineer at Samsung Electronics, working on humanoid whole-body control, loco-manipulation, and sim-to-real adaptation for deployable robotic systems.",
    intro:
      "Jeonguk Kang is an AI Robotics Engineer at Samsung Electronics, where he develops control and learning frameworks for humanoid robots with a focus on whole-body control, loco-manipulation, and sim-to-real adaptation for real-world deployment. His research aims to build reliable and scalable control pipelines for embodied robotic systems operating in complex environments, with particular interest in reinforcement learning for humanoid control, state estimation, and practical approaches to narrowing the sim-to-real gap.",
    image: "assets/profile_kju.png",
    cv: "assets/CV_Jungwook_Kang.pdf"
  },
  links: {
    github: "#",
    scholar: "https://scholar.google.co.kr/citations?user=ND5M6A4AAAAJ&hl=ko",
    linkedin: "https://www.linkedin.com/in/jeonguk-kang-089950264",
    email: "mailto:kju8765@gmail.com"
  },
  about: {
    paragraphs: [
      "Jeonguk Kang is currently an AI Robotics Engineer at Samsung Electronics, where he develops control and learning frameworks for humanoid robots with a focus on whole-body control, loco-manipulation, and sim-to-real adaptation for real-world deployment. He previously served as a Post-doctoral Researcher at Korea Institute of Science and Technology (KIST) after completing his Ph.D. in Mechanical Engineering at Korea Advanced Institute of Science and Technology (KAIST).",
      "His research aims to build reliable and scalable control pipelines for embodied robotic systems operating in complex real-world environments, with particular interest in reinforcement learning for humanoid control, state estimation, and practical approaches to narrowing the sim-to-real gap."
    ],
    areas: [
      "Humanoid Robot",
      "Loco-Manipulation",
      "State Estimation",
      "Whole-Body Control",
      "Sim-to-Real",
      "Reinforcement Learning"
    ]
  },
  research: [
    {
      title: "Robust Legged Locomotion under External Disturbances",
      description:
        "Research on robust locomotion control for legged robots under external disturbances and uncertain contact, including disturbance-aware control, gait adaptation, and agile locomotion.",
      tags: ["Legged Robotics", "MPC", "Whole-Body Control"],
      media: "assets/research/legged.mp4"
    },
    {
      title: "State Estimation and External Wrench Estimation",
      description:
        "Research on state estimation and external wrench estimation for legged robots using sensing and optimization-based inference for improved robot awareness and robust control.",
      tags: ["Estimation", "Legged Robotics", "Optimization"],
      media: "assets/research/estimation.mp4"
    },
    {
      title: "Whole-Body Control for Wearable Robots and Exoskeletons",
      description:
        "Research on whole-body control and assistance strategies for wearable robots and exoskeletons, including lifting assistance and lower-limb support.",
      tags: ["Exoskeleton", "Whole-Body Control", "Human-Robot Interaction"],
      media: "assets/research/exoskeleton.mp4"
    },
    {
      title: "Learning-Based Robot Control and Sim-to-Real",
      description:
        "Research on reinforcement learning and deployment-oriented robot control pipelines, combining model-based control and learning-based adaptation for robust real-world performance.",
      tags: ["Reinforcement Learning", "Sim-to-Real", "Robust Control"],
      media: "assets/research/sim2real.mp4"
    },
    {
      title: "Award-Winning Robotic Systems",
      description:
        "Robotic system development highlighted by major recognitions, including competition-winning and award-winning work.",
      tags: ["Competition", "Systems", "Recognition"],
      media: "assets/research/awards.mp4",
      awards: [
        "1st Place, IEEE IROS 2025 Workshop Wheeled-Legged Robot Competition",
        "Best System Paper Award, IEEE RITA 2024"
      ]
    }
  ],
  projects: [
    {
      title: "Whole-body control of a hybrid bipedal robot based on pneumatic and electric actuation",
      summary:
        "Research on hybrid bipedal locomotion and whole-body control using combined pneumatic and electric actuation for coordinated robot motion.",
      period: "12.2018 - 12.2021",
      role: "Research Contributor",
      tech: "Hybrid Bipedal Robotics, Whole-Body Control, Actuation"
    },
    {
      title: "Development of Modular Exoskeleton Technology for Gait Assistance",
      summary:
        "Development of modular wearable robotics technology for gait support, assistance strategy design, and deployable lower-limb interaction control.",
      period: "06.2019 - 02.2024",
      role: "Project Lead",
      tech: "ROS, C++, Python, Whole-Body Control"
    },
    {
      title: "Development of a Quadruped Robot Platform for Seawater Pipeline Inspection",
      summary:
        "Research and development of a quadruped mobile platform for navigation, disturbance handling, and inspection tasks in constrained industrial scenes.",
      period: "06.2020 - 02.2023",
      role: "Research Contributor",
      tech: "Legged Robotics, State Estimation, MPC"
    },
    {
      title: "Hip Assistance Technology Using Wearable Exo-suit",
      summary:
        "Assistive control and hardware integration for wearable exo-suit systems focused on effective hip support and practical user interaction.",
      period: "03.2024 - 12.2024",
      role: "Research Contributor",
      tech: "Wearable Robotics, Control, Human Assistance"
    },
    {
      title: "Robotic Manipulation for Healthcare: Automated Ultrasound Scanning",
      summary:
        "Confidential robotics project related to manipulation capabilities for healthcare-oriented applications and real-world robotic deployment.",
      period: "02.2025 - Present",
      role: "Research Engineer",
      tech: "Manipulation, Perception, Motion Planning",
      confidential: true
    }
  ],
  cv: {
    experience: [
      "Staff Engineer, Samsung Electronics, Future Robot AI Group (03.2025 - Present)",
      "Post-doctoral Researcher, Korea Institute of Science and Technology (KIST) (03.2024 - 02.2025)"
    ],
    education: [
      "Ph.D. in Mechanical Engineering, Korea Advanced Institute of Science and Technology (KAIST) (03.2020 - 02.2024)",
      "M.S. in Mechanical Engineering, Korea Advanced Institute of Science and Technology (KAIST) (03.2018 - 02.2020)",
      "B.S. in Mechanical Engineering, Korea Advanced Institute of Science and Technology (KAIST) (03.2013 - 02.2018)",
      "Exchange Student, Karlsruhe Institute of Technology (KIT), Germany (09.2016 - 02.2017)"
    ],
    honors: [
      "1st Place, IEEE IROS 2025 Workshop: Wheeled-Legged Robot Competition",
      "Best System Paper Award, IEEE RITA 2024"
    ],
    publications: [
      "VIEW: Visual-Inertial External Wrench Estimator for Legged Robot. IEEE RA-L, 2023",
      "External Force Adaptive Control in Legged Robots Through Footstep Optimization and Disturbance Feedback. IEEE Access, 2024",
      "Dynamic Obstacle Aware Contact Force Control Using Sampling Based MPC and Admittance Controller. IEEE RA-L, 2025",
      "Dynamics-Aware Reinforcement Learning for Drift-Inspired Fast Turning in Quadrupedal Locomotion. IEEE RA-L, 2025"
    ],
    skills: [
      "Languages: C++, Python",
      "Tools: ROS, Matlab/Simulink",
      "OS: Windows, Linux (Ubuntu)"
    ]
  }
};
