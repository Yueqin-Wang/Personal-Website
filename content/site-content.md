# Site Content

This file is the single source of truth for the website content.
Edit the JSON inside each section, then commit and push to `main` to publish the update.

## site

```json
{
  "kicker": "Yueqin Wang | Economics",
  "footerName": "Yueqin Wang",
  "footerLastUpdated": "March 30, 2026",
  "navigation": [
    { "href": "/", "label": "Home" },
    { "href": "/research", "label": "Research" },
    { "href": "/resume", "label": "CV" }
  ]
}
```

## home

```json
{
  "title": "Yueqin Wang",
  "subtitle": "Visiting Doctoral Student at the National School of Development, Peking University | PhD Candidate in Economics at Sichuan University",
  "hero": {
    "sectionTitle": "Research Profile",
    "paragraphs": [
      "I am currently a visiting doctoral student at the National School of Development, Peking University, where I work with Junjian Yi. I am also a PhD candidate in Western Economics at the School of Economics, Sichuan University, supervised by Shaoyang Zhao.",
      "My research interests lie in health economics and labor economics, with a particular focus on healthcare resource allocation, education and health outcomes, and the effects of digital platforms on household behavior and income."
    ],
    "tags": [
      "Health Economics",
      "Labor Economics",
      "Healthcare Resource Allocation",
      "Education and Health",
      "Digital Economy"
    ]
  },
  "profileImage": {
    "src": "/images/profile/avatar.jpg",
    "alt": "Illustrated avatar used on Yueqin Wang's personal website",
    "eyebrow": "Profile Visual",
    "caption": "An illustrated image from my personal collection used as the avatar of this website."
  },
  "ctaButtons": [
    { "href": "/research", "label": "View Research", "variant": "primary" },
    { "href": "/resume", "label": "View CV", "variant": "secondary" }
  ],
  "metaItems": [
    { "label": "Email", "value": "wangyueqin1228@163.com" },
    { "label": "Current Affiliation", "value": "National School of Development, Peking University" },
    { "label": "Degree Program", "value": "PhD in Economics, Sichuan University" },
    { "label": "Supervisors", "value": "Junjian Yi and Shaoyang Zhao" }
  ],
  "highlightsTitle": "Current Highlights",
  "highlights": [
    {
      "title": "Current Position",
      "description": "Visiting doctoral student at Peking University since September 2024 while continuing doctoral research at Sichuan University."
    },
    {
      "title": "Research Focus",
      "description": "Health economics, labor economics, healthcare delivery, educational inequality, and digital platforms in China."
    },
    {
      "title": "Recent Output",
      "description": "Recent publications examine e-commerce and household income, rural healthcare resource allocation, and the academic and health effects of online education."
    }
  ],
  "campusGalleryTitle": "Academic Journey",
  "campusGalleryIntro": "Three campuses that mark the major stages of my academic training and research life.",
  "campusGallery": [
    {
      "institution": "Peking University",
      "period": "2024 - Present",
      "role": "Visiting Doctoral Student, National School of Development",
      "description": "My current visiting appointment is based at Peking University, where I continue my work in health and labor economics.",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/0/07/Weiming_Lake%2C_Peking_University%2C_2011042202.jpg",
      "imageAlt": "Weiming Lake at Peking University",
      "creditLabel": "Huangdan2060 via Wikimedia Commons",
      "creditHref": "https://commons.wikimedia.org/wiki/File:Weiming_Lake,_Peking_University,_2011042202.jpg",
      "licenseLabel": "CC0"
    },
    {
      "institution": "Sichuan University",
      "period": "2022 - Present",
      "role": "PhD Candidate, School of Economics",
      "description": "At Sichuan University I pursue doctoral research in Western Economics and build on my earlier undergraduate training there.",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Jiang%27an_Campus_of_Sichuan_University.JPG",
      "imageAlt": "Jiang'an Campus of Sichuan University",
      "creditLabel": "Panzer VI-II via Wikimedia Commons",
      "creditHref": "https://commons.wikimedia.org/wiki/File:Jiang%27an_Campus_of_Sichuan_University.JPG",
      "licenseLabel": "CC BY-SA 4.0"
    },
    {
      "institution": "Central University of Finance and Economics",
      "period": "2018 - 2021",
      "role": "M.A. Student in Labor Economics",
      "description": "My master's training in labor economics at CUFE shaped many of the research questions that still motivate my work today.",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/68/CUFEMB.jpg",
      "imageAlt": "Main teaching building at the Central University of Finance and Economics",
      "creditLabel": "Steveny5997 via Wikimedia Commons",
      "creditHref": "https://commons.wikimedia.org/wiki/File:CUFEMB.jpg",
      "licenseLabel": "Public domain"
    }
  ],
  "featuredResearchTitle": "Selected Research",
  "featuredResearch": [
    {
      "title": "Start a business or get a job? Rethinking the impacts of e-commerce on household income in China",
      "meta": "Applied Economics, 2025",
      "summary": "This paper studies how e-commerce development changes household income composition and reshapes the choice between entrepreneurship and wage employment."
    },
    {
      "title": "Healthcare resource allocation and patient choice: evidence from rural China",
      "meta": "International Journal for Equity in Health, 2025",
      "summary": "This study examines how uneven healthcare resource allocation affects patient sorting and healthcare utilization in rural China."
    },
    {
      "title": "Academic and Health Outcomes of Online Education for Primary and Secondary Students: Evidence from COVID-19",
      "meta": "Journal of Comparative Economics, forthcoming",
      "summary": "This project evaluates the educational and health consequences of large-scale online learning during the pandemic."
    }
  ],
  "linksTitle": "Academic Links",
  "linkGroups": [
    {
      "title": "Institutions",
      "links": [
        {
          "label": "National School of Development, Peking University",
          "href": "https://www.nsd.pku.edu.cn/"
        },
        {
          "label": "School of Economics, Sichuan University",
          "href": "https://sesu.scu.edu.cn/"
        },
        {
          "label": "School of Economics, Central University of Finance and Economics",
          "href": "https://econ.cufe.edu.cn/"
        }
      ]
    },
    {
      "title": "Contact",
      "links": [
        {
          "label": "Email Yueqin Wang",
          "href": "mailto:wangyueqin1228@163.com"
        }
      ]
    }
  ]
}
```

## research

```json
{
  "title": "Research",
  "subtitle": "Publications, working paper, and research projects",
  "publishedTitle": "Published Papers",
  "publishedPapers": [
    {
      "title": "The Dynamic Effects of Consumption-Stimulus Policies: Evidence from the Home Appliances to the Countryside Program",
      "meta": "with Chuanchuan Zhang and Rudai Yang, Economic Perspectives, 2021 [in Chinese]",
      "summary": "This paper studies the dynamic effects of a major consumption-stimulus policy and the channels through which durable-goods subsidies affect household behavior."
    },
    {
      "title": "Reducing Academic Burden, Household Educational Investment, and Educational Inequality",
      "meta": "with Chuanchuan Zhang, Management World, 2022 [in Chinese]",
      "summary": "This paper investigates how policies aimed at reducing academic burden reshape family educational investment and influence educational inequality."
    },
    {
      "title": "Start a business or get a job? Rethinking the impacts of e-commerce on household income in China",
      "meta": "with Zizhe Zhang, Applied Economics, 2025",
      "summary": "This article reassesses the impact of e-commerce expansion on household income and occupational choice in China."
    },
    {
      "title": "Healthcare resource allocation and patient choice: evidence from rural China",
      "meta": "with Shaoyang Zhao, Yuxiao Chen, and Mei Zhou, International Journal for Equity in Health, 2025",
      "summary": "This study analyzes how healthcare resource distribution shapes patient choice in rural China."
    },
    {
      "title": "Academic and Health Outcomes of Online Education for Primary and Secondary Students: Evidence from COVID-19",
      "meta": "with Chuanchuan Zhang and Junsen Zhang, Journal of Comparative Economics, forthcoming",
      "summary": "This paper evaluates the academic and health consequences of online education for primary and secondary school students during COVID-19."
    }
  ],
  "workingTitle": "Working Paper",
  "workingPapers": [
    {
      "title": "Hospital Performance Incentives and the High-Quality Development of the Healthcare Service System",
      "meta": "with Shaoyang Zhao and Mei Zhou",
      "summary": "This project studies how hospital performance evaluation incentives affect service delivery and the broader quality of the healthcare system."
    }
  ],
  "projectsTitle": "Research Projects",
  "projects": [
    {
      "time": "2022 - 2023",
      "title": "Review of Medical Service Payment Items in the Basic Medical Insurance System of Sichuan Province",
      "role": "Major participant",
      "detail": "Contributed to the review and organization of payment items under Sichuan Province's basic medical insurance system."
    },
    {
      "time": "2021.07 - 2021.12",
      "title": "Technical Standards and Implementation Guidelines for Budgeting the Guizhou Medical Insurance Fund",
      "role": "Research participant",
      "detail": "Worked on project materials related to scientific budgeting standards and implementation guidelines for the Guizhou medical insurance fund."
    },
    {
      "time": "2018",
      "title": "Household Appliances and Women's Time Allocation: Evidence from the Home Appliances to the Countryside Program",
      "role": "Principal investigator, Graduate Research Innovation Fund, CUFE",
      "detail": "Led a student research project on how durable-goods adoption affects women's time allocation within the household."
    }
  ],
  "conferencesTitle": "Conference Participation",
  "conferences": [
    "Workshop on Frontiers of Consumer Economics Research and the Fundamental Role of Consumption",
    "Camphor Economics Conference (Hangzhou)",
    "China Labor Economists Forum"
  ]
}
```

## resume

```json
{
  "title": "CV",
  "subtitle": "Education, research interests, and academic experience",
  "profileTitle": "Overview",
  "summary": "I am a PhD candidate in economics working at the intersection of health economics and labor economics. This page provides an English overview of my academic background, research experience, and skills.",
  "profileItems": [
    { "label": "Email", "value": "wangyueqin1228@163.com" },
    { "label": "Current Affiliation", "value": "National School of Development, Peking University" },
    { "label": "Degree Program", "value": "PhD in Economics, Sichuan University" },
    { "label": "Research Fields", "value": "Health Economics and Labor Economics" }
  ],
  "downloadHref": "/wang-yueqin-cv.pdf",
  "downloadLabel": "Download PDF CV",
  "educationTitle": "Education",
  "education": [
    {
      "time": "2024.09 - Present",
      "institution": "Peking University, National School of Development",
      "detail": "Visiting Doctoral Student. Supervisor: Junjian Yi."
    },
    {
      "time": "2022.09 - Present",
      "institution": "Sichuan University, School of Economics",
      "detail": "PhD Candidate in Western Economics. Supervisor: Shaoyang Zhao."
    },
    {
      "time": "2018.09 - 2021.06",
      "institution": "Central University of Finance and Economics, School of Economics",
      "detail": "M.A. in Labor Economics. Supervisor: Chuanchuan Zhang."
    },
    {
      "time": "2016.03 - 2018.06",
      "institution": "Sichuan University, School of Economics",
      "detail": "Second Bachelor's Degree in Finance."
    },
    {
      "time": "2014.09 - 2018.06",
      "institution": "Sichuan University, College of Architecture and Environment",
      "detail": "B.Eng. in Environmental Engineering."
    }
  ],
  "fieldsTitle": "Research Fields",
  "fields": [
    "Health Economics",
    "Labor Economics"
  ],
  "honorsTitle": "Honors and Awards",
  "honors": [
    "Graduate Academic Scholarship, Central University of Finance and Economics (2018, 2019, 2020)",
    "Second Prize, Special Merit Award, Sichuan University (2015)"
  ],
  "skillsTitle": "Skills",
  "skills": [
    "English: IELTS 6.5; strong academic reading and writing ability in English",
    "Software: Stata (advanced), R (working knowledge)",
    "Interests: hiking and cycling"
  ],
  "experienceTitle": "Research Experience",
  "experience": [
    "Review of medical service payment items in the basic medical insurance system of Sichuan Province, major participant (2022 - 2023)",
    "Technical standards and implementation guidelines for budgeting the Guizhou medical insurance fund, research participant (2021.07 - 2021.12)",
    "Household appliances and women's time allocation: evidence from the Home Appliances to the Countryside Program, principal investigator (2018)"
  ],
  "conferenceTitle": "Conference Participation",
  "conferenceItems": [
    "Workshop on Frontiers of Consumer Economics Research and the Fundamental Role of Consumption",
    "Camphor Economics Conference (Hangzhou)",
    "China Labor Economists Forum"
  ]
}
```
