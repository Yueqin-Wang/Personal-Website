# Site Content

This file is the single source of truth for the website content.
Edit the JSON inside each section, then commit and push to `main` to publish the update.

## site

```json
{
  "kicker": "Yueqin Wang | Personal Website",
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
  "title": "王玥琴 Yueqin Wang",
  "subtitle": "北京大学国家发展研究院交换博士生 | 四川大学经济学院博士生",
  "hero": {
    "sectionTitle": "Research Profile",
    "paragraphs": [
      "我目前在北京大学国家发展研究院进行交换学习，导师为易君健，同时在四川大学经济学院攻读西方经济学博士，导师为赵绍阳。",
      "研究主要集中在健康经济学与劳动经济学，尤其关注医疗资源配置、教育与健康的人力资本结果，以及数字经济对家庭收入与就业选择的影响。"
    ],
    "tags": [
      "Health Economics",
      "Labor Economics",
      "Medical Resource Allocation",
      "Education and Health",
      "Digital Economy"
    ]
  },
  "ctaButtons": [
    { "href": "/research", "label": "View Research", "variant": "primary" },
    { "href": "/resume", "label": "View CV", "variant": "secondary" }
  ],
  "metaItems": [
    { "label": "Email", "value": "wangyueqin1228@163.com" },
    { "label": "Current Position", "value": "Visiting Doctoral Student, NSD Peking University" },
    { "label": "Degree Program", "value": "PhD in Economics, Sichuan University" },
    { "label": "Supervisors", "value": "Junjian Yi / Shaoyang Zhao" }
  ],
  "highlightsTitle": "Current Highlights",
  "highlights": [
    {
      "title": "Forthcoming",
      "description": "Academic and Health Outcomes of Online Education for Primary and Secondary Students: Evidence from COVID-19 is forthcoming in the Journal of Comparative Economics."
    },
    {
      "title": "Current Working Paper",
      "description": "医院考核激励与医疗服务体系高质量发展 focuses on how hospital evaluation incentives shape medical service delivery."
    },
    {
      "title": "Recent Publications",
      "description": "Two 2025 publications study e-commerce and household income, as well as healthcare resource allocation and patient choice in rural China."
    }
  ],
  "featuredResearchTitle": "Selected Research",
  "featuredResearch": [
    {
      "title": "Start a business or get a job? Rethinking the impacts of e-commerce on household income in China",
      "meta": "Applied Economics, 2025",
      "summary": "Examines how e-commerce development reshapes household income composition and occupational choice in China."
    },
    {
      "title": "Healthcare resource allocation and patient choice: evidence from rural China",
      "meta": "International Journal for Equity in Health, 2025",
      "summary": "Studies healthcare access and patient sorting under uneven medical resource allocation in rural China."
    },
    {
      "title": "Academic and Health Outcomes of Online Education for Primary and Secondary Students: Evidence from COVID-19",
      "meta": "Journal of Comparative Economics, forthcoming",
      "summary": "Evaluates the academic and health consequences of large-scale online education during the pandemic."
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
  "subtitle": "已发表论文、工作论文与课题经历",
  "publishedTitle": "已发表论文",
  "publishedPapers": [
    {
      "title": "刺激消费政策的动态影响研究：来自家电下乡的证据",
      "meta": "张川川、王玥琴、杨汝岱，《经济学动态》2021 年第 12 期，第 110-123 页",
      "summary": "围绕家电下乡政策，分析刺激消费政策的动态影响及其传导机制。"
    },
    {
      "title": "教育减负、家庭教育投入与教育不平等",
      "meta": "张川川、王玥琴，《管理世界》2022 年第 9 期，第 83-95 页",
      "summary": "讨论教育减负政策如何影响家庭教育投入，并进一步作用于教育不平等。"
    },
    {
      "title": "Start a business or get a job? Rethinking the impacts of e-commerce on household income in China",
      "meta": "Yueqin Wang and Zizhe Zhang, Applied Economics, 2025, 1-18",
      "summary": "重新审视电子商务扩张对中国家庭收入与创业就业选择的影响。"
    },
    {
      "title": "Healthcare resource allocation and patient choice: evidence from rural China",
      "meta": "Shaoyang Zhao, Yueqin Wang, Yuxiao Chen, and Mei Zhou, International Journal for Equity in Health, 2025, 24(1): 87",
      "summary": "基于中国农村地区数据，研究医疗资源配置与患者就医选择之间的关系。"
    },
    {
      "title": "Academic and Health Outcomes of Online Education for Primary and Secondary Students: Evidence from COVID-19",
      "meta": "Yueqin Wang, Chuanchuan Zhang, and Junsen Zhang, Journal of Comparative Economics, forthcoming",
      "summary": "评估新冠疫情期间在线教育对中小学生学业与健康结果的影响。"
    }
  ],
  "workingTitle": "工作论文",
  "workingPapers": [
    {
      "title": "医院考核激励与医疗服务体系高质量发展",
      "meta": "赵绍阳、王玥琴、周魅",
      "summary": "关注医院绩效考核激励如何影响医疗服务体系运行与高质量发展。"
    }
  ],
  "projectsTitle": "课题研究",
  "projects": [
    {
      "time": "2022 - 2023",
      "title": "四川省基本医疗保险医疗服务项目支付情况梳理工作",
      "role": "项目主要参与人",
      "detail": "参与四川省医保支付项目梳理与研究支持工作。"
    },
    {
      "time": "2021.07 - 2021.12",
      "title": "贵州省医保基金收支预算科学编制技术规范和实施细则",
      "role": "贵州省医保局课题，项目参与人",
      "detail": "参与医保基金预算编制规范与实施细则的研究和撰写。"
    },
    {
      "time": "2018",
      "title": "家用电器对女性时间分配的影响：基于家电下乡政策的研究",
      "role": "中央财经大学研究生科研创新基金项目，项目负责人",
      "detail": "以家电下乡政策为背景，研究家用电器普及对女性时间配置的影响。"
    }
  ],
  "conferencesTitle": "学术会议",
  "conferences": [
    "中国工业经济“消费经济学研究前沿暨发挥消费基础性作用”学术研讨会",
    "香樟经济学（杭州）会议",
    "中国劳动经济学者论坛"
  ]
}
```

## resume

```json
{
  "title": "CV",
  "subtitle": "教育背景、研究方向与学术经历",
  "profileTitle": "个人概览",
  "summary": "健康经济学与劳动经济学方向博士生，当前在北京大学国家发展研究院交换学习。网站内容依据简历整理，站内提供 PDF 简历下载。",
  "profileItems": [
    { "label": "Email", "value": "wangyueqin1228@163.com" },
    { "label": "Affiliation", "value": "National School of Development, Peking University" },
    { "label": "Program", "value": "PhD in Economics, Sichuan University" },
    { "label": "Research Fields", "value": "Health Economics, Labor Economics" }
  ],
  "downloadHref": "/wang-yueqin-cv.pdf",
  "downloadLabel": "Download PDF CV",
  "educationTitle": "教育背景",
  "education": [
    {
      "time": "2024.09 - 至今",
      "institution": "北京大学国家发展研究院",
      "detail": "交换博士生，导师：易君健"
    },
    {
      "time": "2022.09 - 至今",
      "institution": "四川大学经济学院",
      "detail": "西方经济学博士，导师：赵绍阳"
    },
    {
      "time": "2018.09 - 2021.06",
      "institution": "中央财经大学经济学院",
      "detail": "劳动经济学硕士，导师：张川川"
    },
    {
      "time": "2016.03 - 2018.06",
      "institution": "四川大学经济学院",
      "detail": "金融学本科二学位"
    },
    {
      "time": "2014.09 - 2018.06",
      "institution": "四川大学建筑与环境学院",
      "detail": "环境工程本科"
    }
  ],
  "fieldsTitle": "研究领域",
  "fields": [
    "健康经济学",
    "劳动经济学"
  ],
  "honorsTitle": "奖励荣誉",
  "honors": [
    "中央财经大学研究生学业奖学金（2018、2019、2020）",
    "四川大学单项二等奖（2015）"
  ],
  "skillsTitle": "技能与特长",
  "skills": [
    "英语：雅思 6.5，具备较强的英文文献阅读与写作能力",
    "软件：熟练使用 Stata，掌握 R 的基础研究分析",
    "兴趣：登山，骑行"
  ],
  "experienceTitle": "研究与课题经历",
  "experience": [
    "四川省基本医疗保险医疗服务项目支付情况梳理工作，项目主要参与人（2022 - 2023）",
    "《贵州省医保基金收支预算科学编制技术规范和实施细则》，项目参与人（2021.07 - 2021.12）",
    "《家用电器对女性时间分配的影响：基于家电下乡政策的研究》，项目负责人（2018）"
  ],
  "conferenceTitle": "学术会议",
  "conferenceItems": [
    "中国工业经济“消费经济学研究前沿暨发挥消费基础性作用”学术研讨会",
    "香樟经济学（杭州）会议",
    "中国劳动经济学者论坛"
  ]
}
```
