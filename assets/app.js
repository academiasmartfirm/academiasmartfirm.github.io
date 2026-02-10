// Language dictionaries
const i18n = {
  en: {
    navHome: 'Home',
    navServices: 'Academic Services',
    navIndustry: 'Industry and Commercialization',
    navAbout: 'About',
    navTestimonials: 'Testimonials',
    navContact: 'Contact',

    heroTitle: 'Elevating Academic Excellence',
    heroSubtitle: 'Empowering universities and academic institutions to achieve global recognition through strategic consulting, journal indexing, and professional services.',
    heroCta: 'Discover Our Services',

    homeIntroTitle: 'Strategic Academic Growth',
    homeIntroText: 'We work with universities and research institutions across the region to strengthen rankings, improve research visibility, and build sustainable industry partnerships.',
    homeCardServicesTitle: 'Services',
    homeCardServicesText: 'Ranking improvement, journal indexing, translation, and research consulting delivered with measurable outcomes.',
    homeCardServicesBtn: 'See Services',
    homeCardIndustryTitle: 'Industry Collaboration',
    homeCardIndustryText: 'Neutral facilitation for partnerships, co-authored research, and program-level collaboration frameworks.',
    homeCardIndustryBtn: 'Explore Industry',
    homeCardAboutTitle: 'About ASF',
    homeCardAboutText: 'A focused team combining academic rigor and industry experience across the MENA region.',
    homeCardAboutBtn: 'Meet the Team',
    homeCardTestimonialsTitle: 'Testimonials',
    homeCardTestimonialsText: 'Real outcomes from universities across the region on indexing, rankings, and research quality.',
    homeCardTestimonialsBtn: 'Read Stories',

    servicesTitle: 'Our Services',
    servicesIntro: 'Academia Smart Firm provides a distinct array of services tailored for universities and academic journals, serving the MENA region with expert care.',
    service1Title: 'University Ranking Enhancement',
    service1Desc: 'Strategic consulting to improve your institution’s position in global ranking systems like THE, QS, and ARWU through data driven approaches and targeted improvements.',
    service2Title: 'Journal Indexing Services',
    service2Desc: 'Professional support for indexing academic journals in prestigious databases including Web of Science, Scopus, and regional indexes for Arabic publications.',
    service3Title: 'Translation and Proofreading',
    service3Desc: 'Expert linguistic services supporting both Arabic and English publications, ensuring the highest academic and linguistic standards for your research output.',
    service4Title: 'Research Consulting',
    service4Desc: 'Comprehensive guidance on research strategy, academic visibility enhancement, and international collaboration development to amplify your global presence.',

    servicesPageTitle: 'Services for Universities and Journals',
    servicesPageIntro: 'From ranking enhancement to research consulting, our services are designed to produce measurable outcomes and long-term institutional impact.',
    servicesFocusTitle: 'Focused Support Areas',
    focusIndexTitle: 'Journal Indexation (WoS & Scopus)',
    focusIndexIntro: 'We help journals and institutions meet indexation standards through structured editorial upgrades, ethical policy alignment, and measurable visibility improvements.',
    focusIndex1: 'Editorial and peer-review workflow audit with clear compliance checklist.',
    focusIndex2: 'Citation ethics, authorship integrity, and journal governance improvements.',
    focusIndex3: 'Issue regularity and metadata quality (DOI, references, indexing formats).',
    focusIndex4: 'Targeted visibility plan: discoverability, indexing readiness, and outreach.',
    focusIndex5: 'Mentoring for editors and reviewers to maintain long-term standards.',
    focusRankTitle: 'University Ranking and Research Impact',
    focusRankIntro: 'We design institution-wide strategies to improve ranking metrics, increase high-quality outputs, and grow citations sustainably.',
    focusRank1: 'Ranking diagnostics across THE, QS, and ARWU with gap analysis.',
    focusRank2: 'Research performance plans to grow WoS/Scopus outputs and co-authored papers.',
    focusRank3: 'Citation growth strategy: visibility, collaboration networks, and open-science practices.',
    focusRank4: 'Faculty capacity building on publishing strategy and research profiling.',
    focusRank5: 'KPI dashboards and governance to sustain year-over-year improvements.',
    focusRankNote: 'We also provide tailored consulting to align research themes with national priorities and industry needs, increasing relevance and impact.',
    focusResearchTitle: 'Research Consulting and Publication Growth',
    focusResearchIntro: 'We help universities build research pipelines that increase high-quality outputs, co-authorship, and publication consistency.',
    focusResearch1: 'Research theme mapping and publication strategy by discipline.',
    focusResearch2: 'Collaborative authoring support and international co-publication plans.',
    focusResearch3: 'Methodology clinics and manuscript readiness reviews.',
    focusResearch4: 'Research visibility and profiling across Scholar, ORCID, and institutional pages.',
    focusResearch5: 'Capacity building for early-career researchers and supervisors.',
    focusTranslationTitle: 'Scientific Translation and Language Services',
    focusTranslationIntro: 'We provide scientific translation and bilingual editing that preserves technical accuracy and improves publication readiness.',
    focusTranslation1: 'Subject-matter translation aligned to journal terminology and style.',
    focusTranslation2: 'Bilingual proofreading with terminology consistency checks.',
    focusTranslation3: 'Formatting support for journal submission requirements.',
    focusTranslation4: 'Abstract and keyword optimization for discoverability.',
    focusTranslation5: 'Optional pre-submission language review for high-impact journals.',
    servicesCalloutTitle: 'How We Work',
    servicesCalloutText: 'We begin with a diagnostic review, define clear objectives, and deliver a roadmap with milestones, ownership, and metrics.',
    servicesStep1: 'Baseline assessment and performance audit across rankings, publications, and partnerships.',
    servicesStep2: 'Targeted action plan with KPIs, timelines, and accountable teams.',
    servicesStep3: 'Ongoing coaching, reporting, and refinement to sustain long-term results.',

    industryTitle: 'Industry Collaboration and Commercialization',
    industryIntro1: 'Academia’s Smart Firm is an independent bridge between universities and industry, helping both sides identify, structure, and sustain collaborations that are academically credible and industrially relevant. We operate across disciplines and sectors, matching institutional strengths with real-world needs without promoting a single predefined partner.',
    industryIntro2: 'Our experience spans aviation, automotive, advanced manufacturing and metals, semiconductors and digital technologies, tourism and services, as well as social sciences and policy-oriented industries. This cross-sectoral approach enables diversified, resilient, and mission-aligned engagement.',
    industryNeutralStrong: 'Neutral facilitation.',
    industryNeutralText: 'We align expectations, governance, and continuity so partnerships deliver results over time.',
    sector1: 'Aviation',
    sector2: 'Automotive',
    sector3: 'Advanced Manufacturing',
    sector4: 'Semiconductors',
    sector5: 'Digital Technologies',
    sector6: 'Tourism & Services',
    sector7: 'Social Sciences & Policy',
    industryBenefitsTitle: 'What Universities Gain',
    benefit1: 'Stronger academic relevance grounded in real industrial and societal challenges.',
    benefit2: 'Enhanced international visibility through sustained collaboration with global industry actors.',
    benefit3: 'Improved research outputs, including co-authored papers and practice-informed questions.',
    benefit4: 'Expanded internal capacity via applied datasets, validation environments, and standards.',
    benefit5: 'Better positioning in assessments through demonstrated impact and engagement.',
    benefit6: 'New funding and sustainability pathways beyond fragmented projects.',
    industryEngagementTitle: 'Levels of Engagement We Facilitate',
    engage1: 'Co-hosted events, workshops, and flagship conferences.',
    engage2: 'Co-authored publications, white papers, and applied outputs.',
    engage3: 'Joint research projects aligned to industrial problem statements.',
    engage4: 'Co-supervised PhD and postdoctoral projects in industry-relevant themes.',
    engage5: 'Researcher mobility, fellowships, and industry internships.',
    engage6: 'Programme-level partnerships uniting multiple projects under one framework.',
    patentsTitle: 'Patent Licensing and Commercialization',
    patentsIntro: 'We help universities activate and monetize existing patent portfolios when internal capacity or market reach is limited. Our process is evidence-driven and designed to generate tangible returns.',
    patent1: 'Structured portfolio review led by subject-matter experts with academic and industry experience.',
    patent2: 'Recommendations on which patents to retain and protect, license actively, or release.',
    patent3: 'Strategic positioning toward industry segments with realistic commercial uptake.',
    patent4: 'Direct outreach to industry partners to explore licensing opportunities.',
    patent5: 'Support through negotiation and structuring focused on sustainable income.',
    patentsProofStrong: 'Proven outcomes.',
    patentsProofText: 'This approach has been implemented multiple times, generating licensing agreements and direct income for partner universities.',

    industryPageTitle: 'Industry Collaboration',
    industryPageIntro: 'We align academic strengths with real-world needs and build partnerships that last, from co-authored research to full program frameworks.',

    statsTitle: 'Our Impact',
    stat1Label: 'Journals Indexed',
    stat2Label: 'Years Experience',
    stat3Label: 'Universities Served',
    stat4Label: 'Countries Reached',

    aboutTitle: 'About Academia Smart Firm',
    aboutP1: 'Academia Smart Firm is a leading consulting firm dedicated to serving universities and research institutes across the MENA region.',
    aboutP2: 'Our mission is to empower academic entities to achieve their aspirations and amplify their global presence through strategic guidance and professional services.',
    exp1: 'Strategic university ranking improvement',
    exp2: 'Global database journal indexing',
    exp3: 'Professional translation and proofreading',
    exp4: 'Academic reputation enhancement',
    exp5: 'International collaboration facilitation',

    whyTitle: 'Why Choose ASF?',
    why1Title: 'Proven Track Record',
    why1Text: 'Over six years of experience with more than two hundred and fifty journals successfully indexed in global databases including Web of Science and Scopus.',
    why2Title: 'MENA Region Expertise',
    why2Text: 'Deep understanding of the academic landscape across the Middle East and North Africa with bilingual capabilities.',
    why3Title: 'Rapid Results',
    why3Text: 'Focused work on key indicators delivers measurable gains within twelve months.',
    why4Title: 'Dedicated Team',
    why4Text: 'A team of consultants linguists and researchers committed to your success.',
    why5Title: 'Comprehensive Support',
    why5Text: 'End to end services from discovery to implementation with ongoing guidance.',
    ctaBlockTitle: 'Ready to Transform Your Institution?',
    ctaBlockText: 'Join leading universities across the region who trust our team on their excellence journey.',

    aboutPageTitle: 'About Our Firm',
    aboutPageIntro: 'We combine academic rigor with industry know-how to deliver credible partnerships, high-quality research outcomes, and sustainable growth.',

    testimonialsTitle: 'What Our Clients Say',
    testimonial1Text: '“Your team guided us through every step of journal indexation. Our editorial policies, peer review workflow, and citation ethics were refined with clear checklists and mentoring. We achieved acceptance in a major database and built a sustainable roadmap for continuous quality.”',
    testimonial1Author: 'Associate Editor at a public university in Qatar',
    testimonial2Text: '“The workshop series for editors and reviewers was practical and energizing. Sessions on research visibility, submission quality, and ethics raised our standards right away. Turnaround times improved and author satisfaction increased within one semester.”',
    testimonial2Author: 'Journal Coordinator at a higher education institution in Bahrain',
    testimonial3Text: '“We received focused support on meeting indexation criteria along with campus workshops for department leaders and editorial boards. The mix of audits, coaching, and action plans helped our flagship journal reach the required benchmarks and strengthened our internal capabilities.”',
    testimonial3Author: 'Director of Research at a leading university in Saudi Arabia',

    testimonialsPageTitle: 'Client Testimonials',
    testimonialsPageIntro: 'Universities across the region trust us to improve visibility, strengthen rankings, and deliver measurable research outcomes.',

    contactTitle: 'Contact Academia Smart Firm',
    contactIntro: 'Tell us about your institution’s goals and we will respond with a tailored plan.',
    contactCard1Title: 'Initial Consultation',
    contactCard1Text: 'We review your goals, evaluate readiness, and outline the quickest path to impact with a clear scope and timeline.',
    contactCard2Title: 'Action Plan',
    contactCard2Text: 'Receive a tailored roadmap with milestones, KPIs, and governance tailored to your institution.',
    contactCard3Title: 'Long-Term Support',
    contactCard3Text: 'We stay engaged to ensure progress continues beyond initial projects with periodic reviews and optimization.',

    footerAbout: 'Empowering universities and academic institutions across the MENA region to achieve global recognition through strategic consulting and professional services.',
    footerServingTitle: 'Serving the MENA Region',
    footerServingText: 'Specialized expertise in both Arabic and English academic publications.',
    contactInfoTitle: 'Contact Information',
    addr1: 'The Meydan Grandstand',
    addr2: 'Sixth Floor Meydan Road',
    addr3: 'Nad Al Sheba Dubai UAE',

    formTitle: 'Get In Touch',
    labelName: 'Full Name *',
    labelEmail: 'Email Address *',
    labelOrg: 'Organization or Institution',
    labelService: 'Service of Interest',
    svcSelect: 'Select a service...',
    svcRanking: 'University Ranking Enhancement',
    svcIndexing: 'Journal Indexing Services',
    svcTranslation: 'Translation and Proofreading',
    svcConsulting: 'Research Consulting',
    svcIndustry: 'Industry Collaboration',
    svcPatents: 'Patent Licensing & Commercialization',
    svcOther: 'Other',
    labelMessage: 'Message *',
    phMessage: 'Tell us about your requirements...',
    btnSubmit: 'Send Message',

    errName: 'Please enter your full name.',
    errEmail: 'Please enter a valid email address.',
    errMessage: 'Please share a short summary of your needs.',
    formIncomplete: 'Please complete the highlighted fields.',
    formThanks: 'Thank you. Your email app will open now. If it does not, please email us at info@academiasmartfirm.com',

    rights: '© 2025 Academia Smart Firm. All rights reserved.'
  },

  ar: {
    navHome: 'الرئيسية',
    navServices: 'الخدمات الأكاديمية',
    navIndustry: 'الصناعة والتسويق التجاري',
    navAbout: 'من نحن',
    navTestimonials: 'آراء العملاء',
    navContact: 'تواصل معنا',

    heroTitle: 'الارتقاء بالتميز الأكاديمي',
    heroSubtitle: 'نمكن الجامعات والمؤسسات الأكاديمية من تحقيق حضور عالمي عبر الاستشارات الاستراتيجية وفهرسة المجلات والخدمات المهنية.',
    heroCta: 'استكشف خدماتنا',

    homeIntroTitle: 'نمو أكاديمي استراتيجي',
    homeIntroText: 'نعمل مع الجامعات ومؤسسات البحث في المنطقة لتعزيز التصنيفات ورفع ظهور البحث وبناء شراكات صناعية مستدامة.',
    homeCardServicesTitle: 'الخدمات',
    homeCardServicesText: 'تحسين التصنيف وفهرسة المجلات والترجمة والاستشارات البحثية بنتائج قابلة للقياس.',
    homeCardServicesBtn: 'عرض الخدمات',
    homeCardIndustryTitle: 'التعاون مع الصناعة',
    homeCardIndustryText: 'تسهيل محايد للشراكات والأبحاث المشتركة وأطر البرامج طويلة المدى.',
    homeCardIndustryBtn: 'استكشاف التعاون',
    homeCardAboutTitle: 'عن الشركة',
    homeCardAboutText: 'فريق متخصص يجمع بين الصرامة الأكاديمية والخبرة الصناعية في المنطقة.',
    homeCardAboutBtn: 'تعرف علينا',
    homeCardTestimonialsTitle: 'آراء العملاء',
    homeCardTestimonialsText: 'نتائج حقيقية من جامعات المنطقة في الفهرسة والتصنيف وجودة البحث.',
    homeCardTestimonialsBtn: 'اقرأ القصص',

    servicesTitle: 'خدماتنا',
    servicesIntro: 'تقدم أكاديميا سمارت فيرم مجموعة مميزة من الخدمات المصممة للجامعات والمجلات الأكاديمية مع تركيز خاص على منطقة الشرق الأوسط وشمال أفريقيا.',
    service1Title: 'تعزيز تصنيفات الجامعات',
    service1Desc: 'استشارات استراتيجية لتحسين موقع المؤسسة في أنظمة التصنيف العالمية مثل تايمز للتعليم العالي وكيو اس وشنغهاي بالاعتماد على البيانات والتحسينات المستهدفة.',
    service2Title: 'خدمات فهرسة المجلات',
    service2Desc: 'دعم مهني لفهرسة المجلات الأكاديمية في قواعد البيانات المرموقة بما فيها ويب اوف ساينس وسكوبس إضافة إلى الفهارس الإقليمية.',
    service3Title: 'الترجمة والمراجعة اللغوية',
    service3Desc: 'خدمات لغوية احترافية تدعم النشر العربي والإنجليزي مع الالتزام بأعلى المعايير الأكاديمية واللغوية.',
    service4Title: 'استشارات البحث العلمي',
    service4Desc: 'إرشاد شامل في استراتيجية البحث وتعزيز الظهور الأكاديمي وتطوير التعاون الدولي لرفع الحضور العالمي.',

    servicesPageTitle: 'الخدمات للجامعات والمجلات',
    servicesPageIntro: 'من تعزيز التصنيفات إلى الاستشارات البحثية، صممنا خدماتنا لتحقيق نتائج قابلة للقياس وأثر مؤسسي طويل المدى.',
    servicesFocusTitle: 'مجالات دعم مركزة',
    focusIndexTitle: 'فهرسة المجلات (ويب اوف ساينس وسكوبس)',
    focusIndexIntro: 'نساعد المجلات والمؤسسات على استيفاء معايير الفهرسة عبر تحسينات تحريرية منظمة ومواءمة سياسات النزاهة وزيادة الظهور.',
    focusIndex1: 'تدقيق شامل لسير العمل التحريري والتحكيم مع قائمة امتثال واضحة.',
    focusIndex2: 'تعزيز أخلاقيات الاستشهاد ونزاهة التأليف وحوكمة المجلة.',
    focusIndex3: 'انتظام الأعداد وجودة البيانات الوصفية (DOI والمراجع وصيغ الفهرسة).',
    focusIndex4: 'خطة ظهور مستهدفة: قابلية الاكتشاف والاستعداد للفهرسة والتواصل.',
    focusIndex5: 'توجيه للمحررين والمراجعين لضمان استدامة المعايير.',
    focusRankTitle: 'تصنيف الجامعات وأثر البحث العلمي',
    focusRankIntro: 'نصمم استراتيجيات مؤسسية لتحسين مؤشرات التصنيف وزيادة المخرجات عالية الجودة ونمو الاستشهادات بشكل مستدام.',
    focusRank1: 'تشخيص تصنيفي عبر THE وQS وARWU مع تحليل فجوات مفصل.',
    focusRank2: 'خطط أداء بحثي لزيادة مخرجات WoS وScopus والأبحاث المشتركة.',
    focusRank3: 'استراتيجية نمو الاستشهادات عبر الظهور والشراكات العلمية وممارسات الوصول المفتوح.',
    focusRank4: 'بناء قدرات أعضاء هيئة التدريس في استراتيجية النشر والملف البحثي.',
    focusRank5: 'لوحات مؤشرات وحوكمة لضمان التحسن السنوي المستمر.',
    focusRankNote: 'نقدم أيضا استشارات مخصصة لمواءمة محاور البحث مع الأولويات الوطنية واحتياجات الصناعة بما يزيد الأثر.',
    focusResearchTitle: 'الاستشارات البحثية وزيادة النشر',
    focusResearchIntro: 'نساعد الجامعات على بناء مسارات بحثية تزيد المخرجات عالية الجودة والتأليف المشترك واستمرارية النشر.',
    focusResearch1: 'رسم خرائط للمحاور البحثية واستراتيجية النشر حسب التخصص.',
    focusResearch2: 'دعم التأليف المشترك وخطط نشر دولية مشتركة.',
    focusResearch3: 'عيادات منهجية ومراجعات جاهزية المخطوطات.',
    focusResearch4: 'تعزيز الظهور والملف البحثي عبر Google Scholar وORCID والصفحات المؤسسية.',
    focusResearch5: 'بناء قدرات الباحثين الجدد والمشرفين.',
    focusTranslationTitle: 'الترجمة العلمية وخدمات اللغة',
    focusTranslationIntro: 'نقدم ترجمة علمية وتحريرا ثنائيا يحافظ على الدقة التقنية ويرفع جاهزية النشر.',
    focusTranslation1: 'ترجمة متخصصة متوافقة مع مصطلحات المجلات وأسلوبها.',
    focusTranslation2: 'تدقيق لغوي ثنائي مع اتساق المصطلحات.',
    focusTranslation3: 'دعم تنسيقي لمتطلبات تقديم المجلات.',
    focusTranslation4: 'تحسين الملخص والكلمات المفتاحية لزيادة الظهور.',
    focusTranslation5: 'مراجعة لغوية قبل التقديم للمجلات ذات الأثر العالي.',
    servicesCalloutTitle: 'كيف نعمل',
    servicesCalloutText: 'نبدأ بمراجعة تشخيصية ثم نحدد الأهداف ونقدم خارطة طريق واضحة بالمراحل والمسؤوليات ومؤشرات الأداء.',
    servicesStep1: 'تقييم أولي ومراجعة أداء تشمل التصنيفات والنشر والشراكات.',
    servicesStep2: 'خطة عمل مستهدفة بمؤشرات أداء وجداول زمنية ومسؤوليات واضحة.',
    servicesStep3: 'متابعة وتوجيه وتقارير دورية لضمان استدامة النتائج.',

    industryTitle: 'التعاون مع الصناعة والتسويق التجاري',
    industryIntro1: 'تعمل أكاديميا سمارت فيرم كحلقة وصل مستقلة بين الجامعات والصناعة، لمساعدة الطرفين على تحديد الشراكات وتنظيمها واستدامتها بما يضمن المصداقية الأكاديمية والملاءمة الصناعية. نعمل عبر تخصصات وقطاعات متعددة لنطابق نقاط القوة المؤسسية مع الاحتياجات الواقعية دون الترويج لشريك محدد.',
    industryIntro2: 'تمتد خبرتنا إلى الطيران والسيارات والتصنيع المتقدم والمعادن وأشباه الموصلات والتقنيات الرقمية والسياحة والخدمات، إضافة إلى العلوم الاجتماعية وصناعات السياسات العامة. يتيح هذا النهج تنوعا ومرونة وتوافقا مع الرسالة الأكاديمية على المدى الطويل.',
    industryNeutralStrong: 'تسهيل محايد.',
    industryNeutralText: 'نوائم التوقعات والحوكمة والاستمرارية لضمان نتائج مستدامة للشراكات.',
    sector1: 'الطيران',
    sector2: 'السيارات',
    sector3: 'التصنيع المتقدم',
    sector4: 'أشباه الموصلات',
    sector5: 'التقنيات الرقمية',
    sector6: 'السياحة والخدمات',
    sector7: 'العلوم الاجتماعية والسياسات',
    industryBenefitsTitle: 'مكاسب الجامعات',
    benefit1: 'تعزيز الملاءمة الأكاديمية بالارتباط بتحديات صناعية ومجتمعية حقيقية.',
    benefit2: 'رفع الظهور الدولي عبر تعاون مستدام مع جهات صناعية عالمية.',
    benefit3: 'تحسين المخرجات البحثية بما فيها الأبحاث المشتركة والأسئلة الميدانية.',
    benefit4: 'تطوير القدرات الداخلية عبر البيانات التطبيقية وبيئات التحقق والمعايير.',
    benefit5: 'تحسين الترتيب والتقييم عبر إبراز الأثر والتعاون.',
    benefit6: 'مسارات تمويل واستدامة جديدة بعيدا عن المشاريع المجزأة.',
    industryEngagementTitle: 'مستويات الشراكة التي نسهلها',
    engage1: 'فعاليات مشتركة وورش عمل ومؤتمرات محورية.',
    engage2: 'منشورات مشتركة وأوراق بيضاء ومخرجات تطبيقية.',
    engage3: 'مشاريع بحثية مشتركة مرتبطة بتحديات صناعية محددة.',
    engage4: 'إشراف مشترك على الدكتوراه وما بعد الدكتوراه ضمن محاور ذات صلة.',
    engage5: 'تنقل الباحثين وزمالات صناعية وتدريب عملي.',
    engage6: 'شراكات برامجية طويلة المدى تجمع عدة مشاريع ضمن إطار موحد.',
    patentsTitle: 'ترخيص البراءات والتسويق التجاري',
    patentsIntro: 'نساعد الجامعات على تفعيل محافظ البراءات الحالية وتحويلها إلى دخل مستدام عندما تكون القدرات الداخلية أو الوصول للسوق محدودا. نهجنا قائم على الأدلة ومصمم لتحقيق عوائد ملموسة.',
    patent1: 'مراجعة منظمة للمحفظة بقيادة خبراء ذوي خبرة أكاديمية وصناعية.',
    patent2: 'توصيات بشأن البراءات الواجب الاحتفاظ بها وحمايتها أو ترخيصها أو إتاحتها.',
    patent3: 'توجيه استراتيجي نحو قطاعات صناعية ذات فرص تجارية واقعية.',
    patent4: 'تواصل مباشر مع الشركاء الصناعيين لاستكشاف فرص الترخيص.',
    patent5: 'دعم في التفاوض وهيكلة الاتفاقيات بهدف تحقيق دخل مستدام.',
    patentsProofStrong: 'نتائج مثبتة.',
    patentsProofText: 'طُبّق هذا النهج عدة مرات وأسفر عن اتفاقيات ترخيص ودخل مباشر للجامعات الشريكة.',

    industryPageTitle: 'التعاون مع الصناعة',
    industryPageIntro: 'نوائم القدرات الأكاديمية مع احتياجات السوق ونبني شراكات طويلة المدى من النشر المشترك إلى البرامج المتكاملة.',

    statsTitle: ' قيمة تأثيرنا',
    stat1Label: 'مجلات مفهرسة',
    stat2Label: 'سنوات خبرة',
    stat3Label: 'جامعات مخدومة',
    stat4Label: 'دول وصلنا إليها',

    aboutTitle: 'من نحن',
    aboutP1: 'أكاديميا سمارت فيرم شركة استشارية رائدة تخدم الجامعات ومعاهد البحث في الشرق الأوسط وشمال أفريقيا.',
    aboutP2: 'رسالتنا تمكين الجهات الأكاديمية من تحقيق طموحاتها وتعزيز حضورها العالمي عبر التوجيه الاستراتيجي والخدمات المهنية.',
    exp1: 'تحسين التصنيف الجامعي',
    exp2: 'فهرسة المجلات في قواعد عالمية',
    exp3: 'ترجمة ومراجعة لغوية',
    exp4: 'تعزيز السمعة الأكاديمية',
    exp5: 'تيسير التعاون الدولي',

    whyTitle: 'لماذا تختار أكاديميا سمارت فيرم؟',
    why1Title: 'سجل مثبت',
    why1Text: 'أكثر من ست سنوات خبرة مع فهرسة ما يزيد على مئتين وخمسين مجلة في قواعد عالمية تشمل ويب اوف ساينس وسكوبس.',
    why2Title: 'خبرة عميقة في المنطقة',
    why2Text: 'فهم متقدم للمشهد الأكاديمي في الشرق الأوسط وشمال أفريقيا مع قدرة ثنائية اللغة.',
    why3Title: 'نتائج سريعة',
    why3Text: 'التركيز على المؤشرات الأساسية يحقق تحسنا ملموسا خلال اثني عشر شهرا.',
    why4Title: 'فريق مكرس',
    why4Text: 'فريق من المستشارين واللغويين والباحثين يعمل لنجاح مؤسستك.',
    why5Title: 'دعم شامل',
    why5Text: 'خدمات من البداية حتى التنفيذ مع إرشاد مستمر.',
    ctaBlockTitle: 'جاهزون لرفع أداء مؤسستك؟',
    ctaBlockText: 'انضم إلى جامعات رائدة في المنطقة تثق بفريقنا في رحلة التميز.',

    aboutPageTitle: 'نبذة عن الشركة',
    aboutPageIntro: 'نجمع بين الصرامة الأكاديمية والخبرة الصناعية لتقديم شراكات موثوقة ومخرجات بحثية عالية الجودة ونمو مستدام.',

    testimonialsTitle: 'آراء عملائنا',
    testimonial1Text: 'قدمت لكم فرقنا إرشادا في كل خطوة من فهرسة المجلة. حسّنا السياسات التحريرية وسير عمل المراجعة وأخلاقيات الاستشهاد عبر قوائم تحقق واضحة وتوجيه عملي. حصلنا على قبول في قاعدة بيانات كبرى ووضعنا خارطة طريق مستدامة للجودة المستمرة.',
    testimonial1Author: 'محرر مشارك في جامعة حكومية في قطر',
    testimonial2Text: 'كانت سلسلة الورش للمحررين والمراجعين عملية وملهمة. رفعت الجلسات حول إبراز البحث وجودة الإرسال والأخلاقيات معاييرنا فورا. تحسنت أزمنة المعالجة وارتفع رضا المؤلفين خلال فصل دراسي واحد.',
    testimonial2Author: 'منسق مجلة في مؤسسة تعليم عال في البحرين',
    testimonial3Text: 'تلقينا دعما مركزا لتحقيق معايير الفهرسة مع ورش في الحرم لقادة الأقسام وهيئات التحرير. أسهم مزيج المراجعات والتدريب وخطط العمل في بلوغ مجلتنا الرئيسة المعايير المطلوبة وعزّز قدراتنا الداخلية.',
    testimonial3Author: 'مدير البحث العلمي في جامعة رائدة في المملكة العربية السعودية',

    testimonialsPageTitle: 'شهادات العملاء',
    testimonialsPageIntro: 'تثق الجامعات في المنطقة بخبرتنا لتعزيز الظهور وتحسين التصنيف وتحقيق نتائج بحثية ملموسة.',

    contactTitle: 'تواصل مع أكاديميا سمارت فيرم',
    contactIntro: 'شاركنا أهداف مؤسستك وسنقدم لك خطة مخصصة.',
    contactCard1Title: 'استشارة أولية',
    contactCard1Text: 'نراجع أهدافك ونقيّم الجاهزية ونحدد أسرع طريق للأثر بنطاق واضح وجداول زمنية.',
    contactCard2Title: 'خطة عمل',
    contactCard2Text: 'خارطة طريق مخصصة بالمراحل ومؤشرات الأداء والحوكمة المناسبة لمؤسستك.',
    contactCard3Title: 'دعم طويل المدى',
    contactCard3Text: 'نبقى على تواصل لضمان استمرار التقدم عبر مراجعات دورية وتحسينات مستمرة.',

    footerAbout: 'نمكن الجامعات والمؤسسات الأكاديمية في المنطقة من تحقيق حضور عالمي عبر الاستشارات والخدمات المهنية.',
    footerServingTitle: 'نخدم الشرق الأوسط وشمال أفريقيا',
    footerServingText: 'خبرة متخصصة في النشر الأكاديمي بالعربية والإنجليزية.',
    contactInfoTitle: 'معلومات التواصل',
    addr1: 'فندق الميدان مبنى المدرج',
    addr2: 'الطابق السادس شارع الميدان',
    addr3: 'ند الشبا دبي الإمارات العربية المتحدة',

    formTitle: 'تواصل معنا',
    labelName: 'الاسم الكامل *',
    labelEmail: 'البريد الإلكتروني *',
    labelOrg: 'الجهة أو المؤسسة',
    labelService: 'الخدمة المطلوبة',
    svcSelect: 'اختر خدمة',
    svcRanking: 'تعزيز تصنيفات الجامعات',
    svcIndexing: 'فهرسة المجلات',
    svcTranslation: 'الترجمة والمراجعة',
    svcConsulting: 'استشارات البحث العلمي',
    svcIndustry: 'التعاون مع الصناعة',
    svcPatents: 'ترخيص البراءات والتسويق',
    svcOther: 'أخرى',
    labelMessage: 'الرسالة *',
    phMessage: 'حدثنا عن متطلباتك',
    btnSubmit: 'إرسال الرسالة',

    errName: 'يرجى إدخال الاسم الكامل.',
    errEmail: 'يرجى إدخال بريد صحيح.',
    errMessage: 'يرجى كتابة ملخص قصير لاحتياجاتك.',
    formIncomplete: 'يرجى استكمال الحقول المظللة.',
    formThanks: 'شكرا لك سوف يفتح تطبيق البريد الآن وإن لم يفتح يرجى مراسلتنا على info@academiasmartfirm.com',

    rights: 'جميع الحقوق محفوظة 2025 أكاديميا سمارت فيرم'
  }
};

function applyLang(lang){
  const dict = i18n[lang] || i18n.en;
  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      el.textContent = dict[key];
    }
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] !== undefined){
      el.setAttribute('placeholder', dict[key]);
    }
  });
  // Direction and lang
  document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Toggle button state
  const btnEn = document.getElementById('btnEn');
  const btnAr = document.getElementById('btnAr');
  if(btnEn && btnAr){
    btnEn.classList.toggle('active', lang === 'en');
    btnAr.classList.toggle('active', lang === 'ar');
    btnEn.setAttribute('aria-pressed', String(lang === 'en'));
    btnAr.setAttribute('aria-pressed', String(lang === 'ar'));
  }
}

function initLang(){
  const saved = localStorage.getItem('asf-lang');
  const initial = saved || 'en';
  applyLang(initial);
  const btnEn = document.getElementById('btnEn');
  const btnAr = document.getElementById('btnAr');
  if(btnEn && btnAr){
    btnEn.addEventListener('click', () => { localStorage.setItem('asf-lang', 'en'); applyLang('en'); });
    btnAr.addEventListener('click', () => { localStorage.setItem('asf-lang', 'ar'); applyLang('ar'); });
  }
}

// Smooth scrolling for in-page anchors only
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initActiveLinks(){
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-panel a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === current) a.classList.add('active');
  });
}

function initMobileMenu(){
  const btn = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-panel');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', e => {
    if (!panel.classList.contains('open')) return;
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    panel.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  });
}

// Fade in on scroll
function initFadeIn(){
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, observerOptions);
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Header effect
function initHeader(){
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });
}

// Form behavior (contact page)
function initForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;

  const byId = id => document.getElementById(id);
  const emailOK = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const alertBox = byId('formAlert');
  const submitBtn = byId('submitBtn');

  function setError(input, msgId, show) {
    const msgEl = byId(msgId);
    if (show) {
      input.classList.add('input-error');
      msgEl.classList.add('active');
    } else {
      input.classList.remove('input-error');
      msgEl.classList.remove('active');
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = byId('name');
    const email = byId('email');
    const org = byId('organization');
    const service = byId('service');
    const message = byId('message');

    let valid = true;

    if (!name.value.trim()) { setError(name, 'err-name', true); valid = false; } else { setError(name, 'err-name', false); }
    if (!emailOK(email.value.trim())) { setError(email, 'err-email', true); valid = false; } else { setError(email, 'err-email', false); }
    if (!message.value.trim()) { setError(message, 'err-message', true); valid = false; } else { setError(message, 'err-message', false); }

    // Current language
    const lang = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    const dict = i18n[lang];

    if (!valid) {
      alertBox.textContent = dict.formIncomplete;
      alertBox.classList.add('show');
      return;
    }

    const emailBody =
      `Name: ${encodeURIComponent(name.value.trim())}%0D%0A` +
      `Email: ${encodeURIComponent(email.value.trim())}%0D%0A` +
      `Organization: ${encodeURIComponent(org.value.trim() || (lang === 'ar' ? 'غير محدد' : 'Not specified'))}%0D%0A` +
      `Service of Interest: ${encodeURIComponent(service.value || (lang === 'ar' ? 'غير محدد' : 'Not specified'))}%0D%0A%0D%0A` +
      `Message:%0D%0A${encodeURIComponent(message.value.trim())}`;

    const subjectBase = lang === 'ar' ? 'رسالة من نموذج التواصل' : 'Contact Form Submission';
    const mailtoLink = `mailto:info@academiasmartfirm.com?subject=${encodeURIComponent(subjectBase)}&body=${emailBody}`;

    submitBtn.setAttribute('disabled', 'true');
    alertBox.textContent = dict.formThanks;
    alertBox.classList.add('show');

    window.location.href = mailtoLink;

    setTimeout(() => {
      submitBtn.removeAttribute('disabled');
      form.reset();
    }, 800);
  });

  ['name','email','message'].forEach(id => {
    byId(id).addEventListener('input', () => {
      alertBox.classList.remove('show');
    });
  });
}

// Testimonials slider
function initTestimonials(){
  const track = document.querySelector('.ts-track');
  const slides = Array.from(document.querySelectorAll('.ts-slide'));
  const prev = document.querySelector('.ts-prev');
  const next = document.querySelector('.ts-next');
  const dots = Array.from(document.querySelectorAll('.ts-dot'));
  if(!track || slides.length === 0) return;

  let index = 0;

  function currentDir(){
    const d = document.documentElement.getAttribute('dir');
    return d === 'ar' || d === 'rtl' ? 'rtl' : 'ltr';
  }

  function update(){
    const sign = currentDir() === 'rtl' ? 1 : -1;
    track.style.transform = `translateX(${sign * index * 100}%)`;
    dots.forEach((d,i)=>{
      d.classList.toggle('active', i === index);
      d.setAttribute('aria-selected', String(i === index));
    });
  }

  function go(delta){
    index = (index + delta + slides.length) % slides.length;
    update();
  }

  prev.addEventListener('click', ()=> go(-1));
  next.addEventListener('click', ()=> go(1));
  dots.forEach((d,i)=> d.addEventListener('click', ()=> { index = i; update(); }));

  // Keyboard support
  window.addEventListener('keydown', e=>{
    if(e.key === 'ArrowLeft') go(-1);
    if(e.key === 'ArrowRight') go(1);
  });

  // React to language direction changes
  const obs = new MutationObserver(update);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

  // Optional auto advance
  let timer = setInterval(()=> go(1), 7000);
  const ts = document.querySelector('.ts');
  if (ts) {
    ['mousedown','touchstart','keydown','focusin'].forEach(evt=>{
      ts.addEventListener(evt, ()=> { clearInterval(timer); }, { once:true });
    });
  }

  update();
}

// Init
initLang();
initSmoothScroll();
initActiveLinks();
initMobileMenu();
initFadeIn();
initHeader();
initForm();
initTestimonials();
