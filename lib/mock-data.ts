// Mock data for when Sanity environment variables aren't set

export const mockQuote = {
  text: "الاتحاد الوطني المصري (ENSF) يشرف على جميع أنواع رياضات التزلج في مصر ويعزز نموها من المستوى الأساسي إلى النخبة. نحن ندعم الرياضيين، ننظم البطولات الوطنية، ونبني مجتمعا قويا لرياضة التزلج.",
  author: "الاتحاد المصري للتزلج"
}

export const mockDisciplines = [
  {
    _id: "discipline-1",
    name: "التزلج الفني",
    titleEn: "Figure Skating",
    slug: { current: "figure-skating" },
    description: "فئة الفنون في مسابقات الأداء، تجمع بين المهارات والموسيقى",
    icon: "ice-skate",
    image: {
      _type: "image",
      asset: {
        _ref: "image-1",
      },
    },
  },
  {
    _id: "discipline-2",
    name: "هوكي التزلج",
    titleEn: "Ice Hockey",
    slug: { current: "ice-hockey" },
    description: "فئة الهوكي في مسابقات الأداء، تجمع بين المهارات وسرعة الأداء",
    icon: "hockey",
    image: {
      _type: "image",
      asset: {
        _ref: "image-2",
      },
    },
  },
  {
    _id: "discipline-3",
    name: "انلاين فريستايل",
    titleEn: "Inline Freestyle",
    slug: { current: "inline-freestyle" },
    description: "تعرف على أحدث مهارات وحركات التزلج الحر على العجلات",
    icon: "inline",
    image: {
      _type: "image",
      asset: {
        _ref: "image-3",
      },
    },
  },
  {
    _id: "discipline-4",
    name: "سباقات السرعة",
    titleEn: "Speed Racing",
    slug: { current: "speed-racing" },
    description: "انطلق بأقصى سرعة في سباقات التزلج السريعة بين الأفراد والمجموعات",
    icon: "speed",
    image: {
      _type: "image",
      asset: {
        _ref: "image-4",
      },
    },
  },
]

export const mockEvents = [
  {
    _id: "event-1",
    title: "بطولة انلاين فريستايل المحلية 2026",
    slug: { current: "inline-freestyle-championship-2026" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-event-1",
      },
    },
    startDate: "2026-01-15T10:00:00.000Z",
    endDate: "2026-01-17T18:00:00.000Z",
    location: "مضمار القاهرة",
    excerpt: "بطولة محلية للتزلج الحر على العجلات للهواة والمحترفين",
    isRegistrationOpen: true,
    sportDisciplines: [
      {
        _id: "discipline-3",
        title: "انلاين فريستايل",
        slug: { current: "inline-freestyle" },
        icon: "inline",
      },
    ],
  },
  {
    _id: "event-2",
    title: "بطولة سباقات السرعة المحلية 2026",
    slug: { current: "speed-racing-championship-2026" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-event-2",
      },
    },
    startDate: "2026-02-10T09:00:00.000Z",
    endDate: "2026-02-12T17:00:00.000Z",
    location: "مضمار الإسكندرية",
    excerpt: "بطولة محلية لسباقات السرعة للهواة والمحترفين",
    isRegistrationOpen: true,
    sportDisciplines: [
      {
        _id: "discipline-4",
        title: "سباقات السرعة",
        slug: { current: "speed-racing" },
        icon: "speed",
      },
    ],
  },
  {
    _id: "event-3",
    title: "بطولة التزلج الفني 2026",
    slug: { current: "figure-skating-championship-2026" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-event-3",
      },
    },
    startDate: "2026-03-05T11:00:00.000Z",
    endDate: "2026-03-07T19:00:00.000Z",
    location: "صالة القاهرة",
    excerpt: "بطولة محلية للتزلج الفني للهواة والمحترفين",
    isRegistrationOpen: false,
    sportDisciplines: [
      {
        _id: "discipline-1",
        title: "التزلج الفني",
        slug: { current: "figure-skating" },
        icon: "ice-skate",
      },
    ],
  },
  {
    _id: "event-4",
    title: "بطولة هوكي التزلج 2026",
    slug: { current: "ice-hockey-championship-2026" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-event-4",
      },
    },
    startDate: "2026-04-20T10:00:00.000Z",
    endDate: "2026-04-22T18:00:00.000Z",
    location: "صالة الإسكندرية",
    excerpt: "بطولة محلية لهوكي التزلج للهواة والمحترفين",
    isRegistrationOpen: false,
    sportDisciplines: [
      {
        _id: "discipline-2",
        title: "هوكي التزلج",
        slug: { current: "ice-hockey" },
        icon: "hockey",
      },
    ],
  },
]

export const mockNews = [
  {
    _id: "news-1",
    title: "الاتحاد المصري للتزلج يحتفي بأبطال الموسم في حفل نجاح",
    slug: { current: "new-generation-of-egyptian-skaters" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-news-1",
      },
    },
    images: [
      {
        _type: "image",
        asset: {
          _ref: "image-news-1-detail",
        },
      },
    ],
    publishedAt: "2025-12-01T10:00:00.000Z",
    excerpt: "افتتاحية تخصص الفخر بالإنجازات",
    readTime: 5,
    categories: [{ title: "أخبار" }],
    sportDisciplines: [
      {
        title: "التزلج الفني",
        slug: { current: "figure-skating" },
      },
    ],
    author: {
      name: "حسن إبراهيم",
      image: {
        _type: "image",
        asset: {
          _ref: "author-image-1",
        },
      },
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: 'لقد أصبحت فيها هذه المنافسة والإنجاز نظام الاتحاد المصري للتزلج سمة أساسية لهذا الموسم، حيث تكللت بنجاحات رياضية كبيرة. الآن، وبعد انتهاء البطولات المحلية المصرية، أصبحت استعدادات الفرق الوطنية في أوج قوتها للمشاركة في البطولات الدولية القادمة. لا يمكننا إلا أن نفخر بما حققه "نجوم المضمار" هذا الموسم، حيث حصدنا الألقاب الذي طالما حلمنا لها في مختلف التخصصات الرياضية وبأعداد المنية للشباب، الأطفال والمبتدئين والمحترفين، والذين باتوا مستعدين للوصول إلى هذه المحطة.',
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "الاتحاد المصري للتزلج سجل نجاح كبير في هذه البطولة (الاستثنائية)، رئيس الاتحاد أشاد بالجهود المبذولة من قبل المدربين والإداريين والحكام والموظفين الذي ساهموا في إنجاح هذا الموسم، وأكد على أن هذه المنافسات كانت تحضيرا للبطولات الدولية والإقليمية القادمة التي سيشارك فيها المنتخب الوطني، وأكد على أهمية دعم ومساندة أبطالنا الرياضيين، وأنهم فخر للوطن.",
          },
        ],
      },
    ],
  },
  {
    _id: "news-2",
    title: "نجوم التزلج المصريون يتألقون في بطولة دولية",
    slug: { current: "egyptian-skaters-shine-in-international-championship" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-news-2",
      },
    },
    publishedAt: "2025-11-15T10:00:00.000Z",
    excerpt: "إنجازات مصرية مشرفة في البطولة الدولية",
    readTime: 4,
    categories: [{ title: "أخبار" }],
    sportDisciplines: [
      {
        title: "سباقات السرعة",
        slug: { current: "speed-racing" },
      },
    ],
    author: { name: "سارة أحمد" },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "حقق نجوم التزلج المصريون نتائج مبهرة في البطولة الدولية التي أقيمت في إيطاليا، مما يؤكد تطور مستوى هذه الرياضة في مصر.",
          },
        ],
      },
    ],
  },
  {
    _id: "news-3",
    title: "الاتحاد المصري للتزلج يحتفي بالأبطال الموسميين في حفل بهيج",
    slug: { current: "egyptian-skating-federation-celebrates-seasonal-champions" },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-news-3",
      },
    },
    publishedAt: "2025-10-20T10:00:00.000Z",
    excerpt: "تكريم أبطال الموسم في حفل كبير",
    readTime: 3,
    categories: [{ title: "فعاليات" }],
    sportDisciplines: [
      {
        title: "هوكي التزلج",
        slug: { current: "ice-hockey" },
      },
    ],
    author: { name: "محمد علي" },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "أقام الاتحاد المصري للتزلج حفلاً بهيجاً لتكريم الأبطال الموسميين في مختلف فئات التزلج، وذلك بحضور عدد كبير من المسؤولين والرياضيين.",
          },
        ],
      },
    ],
  },
]

export const mockEventDetail = {
  _id: "event-1",
  title: "بطولة انلاين فريستايل المحلية 2026",
  slug: { current: "inline-freestyle-championship-2026" },
  mainImage: {
    _type: "image",
    asset: {
      _ref: "image-event-1",
    },
  },
  images: [
    {
      _type: "image",
      asset: {
        _ref: "image-event-1-detail-1",
      },
    },
    {
      _type: "image",
      asset: {
        _ref: "image-event-1-detail-2",
      },
    },
  ],
  startDate: "2026-01-15T10:00:00.000Z",
  endDate: "2026-01-17T18:00:00.000Z",
  location: "مضمار القاهرة",
  locationDetails: "256A شارع الهرم، القاهرة، مصر",
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "يدعوكم الاتحاد المصري للتزلج للمشاركة في بطولة انلاين فريستايل المحلية لعام 2026، والتي ستقام في الخامس عشر من يناير وعلى مدار ثلاثة أيام على المستوى المحلي. نرحب بكل المتسابقين والمشجعين... ستكون بطولتكم وفرصتكم للتألق في عالم التزلج الحر في مصر!",
        },
      ],
    },
  ],
  excerpt: "بطولة محلية للتزلج الحر على العجلات للهواة والمحترفين",
  registrationUrl: "https://example.com/register",
  registrationEndDate: "2026-01-10T23:59:59.000Z",
  isRegistrationOpen: true,
  keyDetails: [
    "اسم الحدث: بطولة انلاين فريستايل المحلية لعام 2026",
    "الموعد: 15-17 يناير 2026",
    "أوقات السباق: من الساعة 10 صباحاً حتى 6 مساءً",
    "فئات المشاركة: جميع الفئات العمرية ومستويات الهواة",
    "شروط التسجيل: يجب أن يكون المتسابق مسجلاً في الاتحاد المصري للتزلج",
  ],
  whyParticipate: [
    "فرصة قوية للتنافس مع أفضل لاعبي التزلج الحر في مصر وتحسين مهاراتك",
    "تطوير مهاراتك التنافسية في بيئة احترافية تساعد في تطوير مواهبك وتكتسب خبرة جديدة",
    "فرصة للتأهل للبطولات الدولية والمشاركة في فعاليات وبطولات أكبر",
    "الاحتكاك بالأبطال والخبراء في مجال التزلج الحر للتعلم منهم والوصول إلى المنافسة الرياضية",
    "جوائز قيمة: سيتم تقديم جوائز للفائزين والمتميزين في مختلف الفئات",
  ],
  registrationSteps: [
    "التسجيل عبر الموقع الإلكتروني للاتحاد المصري للتزلج",
    "دفع رسوم التسجيل",
    "تقديم شهادة طبية تثبت اللياقة البدنية",
    "الحضور قبل موعد البطولة بساعة على الأقل",
  ],
  additionalInfo: [
    "جميع المتسابقين: سيتم تزويدهم بالمعلومات التفصيلية قبل موعد البطولة بوقت كافٍ",
    "أولياء الأمور: ستخضع المسابقات لقواعد الاتحاد الدولي للتزلج وإجراءات الأمن والسلامة",
    "الإعلاميون والصحافة: سيتم توفير معلومات عن جلسات الإعلام والتصريحات الصحفية بالقرب من موعد الحدث",
    "المتطوعون: إذا كنت ترغب في المساعدة كمتطوع، يرجى التواصل معنا عبر البريد الإلكتروني",
  ],
  sportDisciplines: [
    {
      _id: "discipline-3",
      title: "انلاين فريستايل",
      slug: { current: "inline-freestyle" },
      icon: "inline",
    },
  ],
  categories: [{ title: "بطولات محلية", slug: { current: "local-championships" } }],
  relatedEvents: [
    {
      _id: "event-2",
      title: "بطولة سباقات السرعة المحلية 2026",
      slug: { current: "speed-racing-championship-2026" },
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-event-2",
        },
      },
      startDate: "2026-02-10T09:00:00.000Z",
      location: "مضمار الإسكندرية",
    },
    {
      _id: "event-3",
      title: "بطولة التزلج الفني 2026",
      slug: { current: "figure-skating-championship-2026" },
      mainImage: {
        _type: "image",
        asset: {
          _ref: "image-event-3",
        },
      },
      startDate: "2026-03-05T11:00:00.000Z",
      location: "صالة القاهرة",
    },
  ],
}

export const mockImageMap: Record<string, string> = {
  "image-1": "/event-1.png",
  "image-2": "/event-2.png",
  "image-3": "/event-3.png",
  "image-4": "/event-4.png",
  "image-event-1": "/event-1.png",
  "image-event-2": "/event-2.png",
  "image-event-3": "/event-3.png",
  "image-event-4": "/event-4.png",
  "image-news-1": "/hero-1.png",
  "image-news-2": "/event-5.png",
  "image-news-3": "/event-6.png",
  "image-news-1-detail": "/event-7.png",
  "author-image-1": "/placeholder-user.jpg",
}

export const mockHeroSlides = [
  {
    _id: "hero-1",
    title: "الاتحاد المصري للتزلج",
    subtitle: "الموقع الرسمي للاتحاد المصري للتزلج",
    image: {
      asset: {
        url: "/hero-1.png",
      },
    },
    ctaText: "تعرف علينا",
    ctaLink: "/about",
    order: 1,
  },
  {
    _id: "hero-2",
    title: "أحدث الفعاليات",
    subtitle: "تابع أهم بطولات التزلج في مصر",
    image: {
      asset: {
        url: "/event-hero.png",
      },
    },
    ctaText: "جدول الفعاليات",
    ctaLink: "/events",
    order: 2,
  },
]

export const mockSiteSettings = {
  siteName: "الاتحاد المصري للتزلج",
  siteDescription: "الموقع الرسمي للاتحاد المصري للتزلج",
  logo: {
    asset: {
      url: "/logo.png",
    },
  },
  favicon: {
    asset: {
      url: "/favicon.ico",
    },
  },
}

export const mockRegulations = {
  hero: {
    title: "اللوائح والقوانين",
    subtitle: "جميع القوانين واللوائح المنظمة لأنشطة الاتحاد المصري للتزلج",
    backgroundImage: {
      asset: {
        url: "/hero-1.png",
      },
    },
  },
  tableOfContents: [
    { id: "general-regulations", title: "اللوائح العامة" },
    { id: "discipline-regulations", title: "لوائح الرياضات" },
    { id: "anti-doping", title: "مكافحة المنشطات" },
    { id: "upcoming-amendments", title: "التعديلات القادمة" },
    { id: "download", title: "تحميل اللوائح" },
    { id: "contact", title: "تواصل معنا" },
  ],
  generalRegulations: {
    title: "اللوائح العامة",
    description: "القوانين الأساسية التي تحكم جميع أنشطة الاتحاد المصري للتزلج",
    regulations: [
      {
        icon: "Users",
        title: "شروط الأهلية",
        items: [
          "يجب أن يكون المتسابق مسجلاً في الاتحاد المصري للتزلج",
          "تقديم شهادة طبية تثبت اللياقة البدنية",
          "دفع رسوم العضوية السنوية",
        ],
      },
      {
        icon: "Shield",
        title: "قواعد السلوك",
        items: [
          "احترام الحكام والمنافسين والجمهور",
          "الالتزام بالزي الرسمي المعتمد",
        ],
      },
    ],
  },
  disciplineRegulations: {
    title: "لوائح الرياضات",
    description: "القوانين الفنية لكل رياضة تحت مظلة الاتحاد",
    disciplines: [
      {
        name: "سباق السرعة",
        items: ["قواعد البدء والخطوط", "طريقة التمرير في السباقات", "الجزاءات الفنية"],
      },
      {
        name: "التزلج الفني",
        items: ["نظام التقييم والدرجات", "المواصفات الفنية للملابس", "معايير الموسيقى"],
      },
    ],
  },
  antiDopingRegulations: {
    sections: [
      {
        icon: "Shield",
        title: "الامتثال لوادا (WADA)",
        content: ["الالتزام الكامل بقواعد الوكالة العالمية لمكافحة المنشطات", "تطبيق القائمة المحظورة المحدثة سنوياً"],
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
    ],
    importantNotice: {
      title: "تحذير مهم للرياضيين",
      content: "الرياضي مسؤول بشكل كامل عن أي مادة توجد في جسمه.",
      contactPhone: "+20 100 123 4580",
      contactEmail: "antidoping@ensf.com",
    },
  },
  upcomingAmendments: {
    amendments: [
      {
        title: "تعديلات قوانين السباق 2026",
        date: "2026-01-01",
        description: "تعديل قواعد خط البداية لزيادة العدالة.",
      },
    ],
  },
  documents: [
    { title: "اللائحة الأساسية للاتحاد", type: "PDF", size: "2.4 MB", link: "#" },
    { title: "لائحة المسابقات الوطنية", type: "PDF", size: "1.8 MB", link: "#" },
  ],
  contacts: [
    {
      icon: "FileQuestion",
      title: "الاستفسارات العامة",
      description: "لأي استفسارات عن اللوائح والقوانين",
      email: "regulations@ensf.com",
      phone: "+20 100 123 4567",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: "Scale",
      title: "اللجنة القانونية",
      description: "للاستئنافات والقضايا القانونية",
      email: "legal@ensf.com",
      phone: "+20 100 123 4569",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ],
}
