// Keep project status and outcomes honest. Add real metrics only after measuring them.
export const projects = [
  {
    slug: 'travelmate-ai',
    title: 'TravelMateAI',
    status: 'completed',
    featured: true,
    tags: ['Gemma 4', 'Natural Language', 'Travel Technology'],
    summary: 'A hackathon prototype exploring how natural-language travel requests and flight-arrival information can help coordinate airport cab bookings.',
    metrics: {},
    github: 'https://github.com/VegirajuMahaveerVarma/hacktoberfest-hack-day-2026/blob/submission/travelmateai-stormbreakers/travelmateai_stormbreakers.md',
    demo: '',
    sections: {
      Problem: 'Airport transfers can be difficult to coordinate when travellers need transportation to match their flight arrival.',
      Approach: 'The StormBreakers team explored a natural-language workflow that extracts trip details and uses flight-arrival context to plan a cab-booking flow. Gemma 4 was part of the project approach.',
      Results: 'Built as a Hacktoberfest Hack Day prototype in Hyderabad. The linked submission documents the project and team approach; this portfolio does not claim a production booking integration.',
      Learned: 'The project provided hands-on practice in shaping an AI feature around a concrete user workflow and communicating a project under hackathon constraints.'
    }
  },
  {
    slug: 'vanam',
    title: 'Vanam — Offline AI Field Guide',
    status: 'in-progress',
    featured: true,
    tags: ['Kotlin', 'Jetpack Compose', 'Offline-first'],
    summary: 'An Android field-guide concept designed for outdoor discovery, local notes, and brief AI-assisted guidance without requiring a network connection.',
    metrics: {},
    github: 'https://github.com/VegirajuMahaveerVarma/Vanam',
    demo: '',
    sections: {
      Problem: 'Outdoor exploration often happens where connectivity is unreliable, and a useful field guide should not require people to stay on their screens.',
      Approach: 'Vanam is being built as a native Android application with Kotlin and Jetpack Compose. The planned local-first architecture uses on-device storage for field notes and discoveries, with a focus on keeping location data on the device.',
      Results: 'This is an ongoing project. Features and implementation details may change as development continues; no unverified accuracy or performance figures are claimed.',
      Learned: 'The project explores privacy-aware, offline-first mobile design and how to make AI a small supporting feature rather than the centre of the experience.'
    }
  },
  {
    slug: 'docucraft',
    title: 'DocuCraft',
    status: 'in-progress',
    featured: true,
    tags: ['Kotlin', 'Android', 'Document Scanning'],
    summary: 'A native Android document-scanner project focused on local document storage, scanning workflows, and user-controlled PDF export.',
    metrics: {},
    github: 'https://github.com/VegirajuMahaveerVarma/DocuCraft',
    demo: '',
    sections: {
      Problem: 'People need a convenient way to digitize paper documents without making cloud storage a requirement.',
      Approach: 'DocuCraft is being developed as a Kotlin-native Android app. The product direction prioritizes private app storage and export to folders chosen by the user. Advanced scanning capabilities such as edge detection, crop adjustment, image enhancement, and multi-page PDF workflows are part of the implementation goals.',
      Results: 'The project is in progress. Planned scanning capabilities should be treated as work in progress until they are implemented and tested in the app.',
      Learned: 'The project focuses on native Android development, local-first storage, and the details required to make a document-scanning workflow feel reliable.'
    }
  },
  {
    slug: 'actify',
    title: 'ACTIFY — Action Intelligence',
    status: 'in-progress',
    featured: true,
    tags: ['Flutter', 'FastAPI', 'AI Productivity'],
    summary: 'An AI-powered productivity app concept for turning captured information into structured tasks, priorities, schedules, and a next best action.',
    metrics: {},
    github: 'https://github.com/VegirajuMahaveerVarma/ACTIFY',
    demo: '',
    sections: {
      Problem: 'Useful information can be scattered across screenshots, documents, voice notes, and text, making it difficult to decide what to do next.',
      Approach: 'The repository describes a phone-first workflow: capture information, extract structured details with AI, then use deterministic application logic for prioritization, scheduling, and replanning.',
      Results: 'The repository is under development. This page describes the project direction and does not imply that every listed MVP feature is complete.',
      Learned: 'ACTIFY explores the boundary between AI-assisted information extraction and predictable application logic for tasks and schedules.'
    }
  }
];
