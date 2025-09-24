import { type Language } from './language';

export interface NavigationItem {
  label: string;
  labelEl: string; // Greek label
  labelEn: string; // English label
  href?: string;
  external?: boolean; // Opens in new tab
  hasDropdown?: boolean;
  dropdownContent?: {
    title: string;
    titleEl: string;
    titleEn: string;
    columns: Array<{
      title: string;
      titleEl: string;
      titleEn: string;
      items: Array<{
        title: string;
        titleEl: string;
        titleEn: string;
        description?: string;
        descriptionEl?: string;
        descriptionEn?: string;
        href: string;
        icon?: React.ReactNode;
      }>;
    }>;
  };
}

const nav = [
  {
    path: '/',
    labelEl: 'Αρχική',
    labelEn: 'Home',
  },
  {
    labelEl: 'Η Εταιρεία μας',
    labelEn: 'Our Company',
    hasDropdown: true,
    dropdownContent: {
      titleEl: 'Η Εταιρεία μας',
      titleEn: 'Our Company',
      columns: [
        {
          titleEl: 'Σχετικά με εμάς',
          titleEn: 'About Us',
          items: [
            {
              path: '/ourcompany/overview',
              titleEl: 'Επισκόπηση Εταιρείας',
              titleEn: 'Company Overview',
              descriptionEl: 'Μάθετε για την αποστολή και τις αξίες μας',
              descriptionEn: 'Learn about our mission and values',
            },
            {
              path: '/ourcompany/history',
              titleEl: 'Η Ιστορία μας',
              titleEn: 'Our History',
              descriptionEl: 'Ανακαλύψτε το ταξίδι και τα ορόσημα μας',
              descriptionEn: 'Discover our journey and milestones',
            },
          ],
        },
        {
          titleEl: 'Το Όραμά μας',
          titleEn: 'Our Vision',
          items: [
            {
              path: '/vision/mission',
              titleEl: 'Δήλωση Αποστολής',
              titleEn: 'Mission Statement',
              descriptionEl: 'Η δέσμευσή μας για την αριστεία',
              descriptionEn: 'Our commitment to excellence',
            },
            {
              path: '/vision/goals',
              titleEl: 'Στρατηγικοί Στόχοι',
              titleEn: 'Strategic Goals',
              descriptionEl: 'Ο δρόμος μας για το μέλλον',
              descriptionEn: 'Our roadmap for the future',
            },
            {
              path: '/vision/sustainability',
              titleEl: 'Βιωσιμότητα',
              titleEn: 'Sustainability',
              descriptionEl: 'Περιβαλλοντική και κοινωνική ευθύνη',
              descriptionEn: 'Environmental and social responsibility',
            },
          ],
        },
      ],
    },
  },
  {
    labelEl: 'Υπηρεσίες',
    labelEn: 'Services',
    hasDropdown: true,
    dropdownContent: {
      titleEl: 'Οι Υπηρεσίες μας',
      titleEn: 'Our Services',
      columns: [
        {
          titleEl: 'Υπηρεσίες',
          titleEn: 'Services',
          items: [
            {
              path: '/services/public-sector-consulting',
              titleEl: 'Συμβουλευτικές υπηρεσίες στον δημόσιο τομέα',
              titleEn: 'Consulting services in the public sector',
              descriptionEl: 'Στρατηγική συμβουλή και συμβουλευτική για δημόσιους φορείς',
              descriptionEn: 'Strategic advisory and consulting for public institutions',
            },
            {
              path: '/services/technology',
              titleEl: 'Τεχνολογία και πληροφορική',
              titleEn: 'Technology and information technology',
              descriptionEl: 'Στρατηγική IT, ψηφιακός μετασχηματισμός και τεχνολογικές λύσεις',
              descriptionEn: 'IT strategy, digital transformation, and technology solutions',
            },
            {
              path: '/services/investment-management',
              titleEl: 'Διαχείριση επενδυτικών έργων',
              titleEn: 'Investment project management',
              descriptionEl: 'Ολοκληρωμένη εποπτεία και παράδοση έργων',
              descriptionEn: 'End-to-end project oversight and delivery',
            },
            {
              path: '/services/strategic-planning',
              titleEl: 'Στρατηγικός και λειτουργικός σχεδιασμός',
              titleEn: 'Strategic and operational planning',
              descriptionEl: 'Μακροπρόθεσμος στρατηγικός δρόμος και λειτουργική βελτιστοποίηση',
              descriptionEn: 'Long-term strategic roadmap and operational optimization',
            },
          ],
        },
        {
          titleEl: 'Υπηρεσίες',
          titleEn: 'Services',
          items: [
            {
              path: '/services/energy-studies',
              titleEl: 'Ενεργειακές μελέτες',
              titleEn: 'Energy studies',
              descriptionEl: 'Περιεκτική ανάλυση και μελέτες του ενεργειακού τομέα',
              descriptionEn: 'Comprehensive energy sector analysis and studies',
            },
            {
              path: '/services/quality-management',
              titleEl: 'Συστήματα Διαχείρισης Ποιότητας',
              titleEn: 'Quality Management Systems',
              descriptionEl: 'Εφαρμογή και πιστοποίηση συστημάτων ISO και ποιότητας',
              descriptionEn: 'ISO and quality system implementation and certification',
            },
            {
              path: '/services/feasibility-studies',
              titleEl: 'Μελέτες Σκοπιμότητας',
              titleEn: 'Feasibility Studies',
              descriptionEl: 'Συστηματική αξιολόγηση βιωσιμότητας και σκοπιμότητας έργων',
              descriptionEn: 'Thorough project viability and feasibility assessment',
            },
            {
              path: '/services/esg-strategy',
              titleEl: 'Στρατηγική & Εφαρμογή ESG',
              titleEn: 'ESG Strategy & Implementation',
              descriptionEl: 'Στρατηγική και εφαρμογή Περιβαλλοντικών, Κοινωνικών και Διακυβερνητικών θεμάτων',
              descriptionEn: 'Environmental, Social, and Governance strategy and implementation',
            },
          ],
        },
      ],
    },
  },
  {
    path: '/projects',
    labelEl: 'Έργα',
    labelEn: 'Projects',
  },
  {
    href: 'https://opuslearning.gr/',
    labelEl: 'E-learning',
    labelEn: 'E-learning',
    external: true,
  },
  {
    path: '/news',
    labelEl: 'Νέα',
    labelEn: 'News',
  },
];

function createUrl(path: string, lang: Language) {
  if (lang === 'en') {
    return '/en' + path;
  }
  return path;
}

export function getNavigationItems(language: Language): NavigationItem[] {
  return nav.map((item) => {
    const newItem: NavigationItem = {
      label: language === 'el' ? item.labelEl : item.labelEn,
      labelEl: item.labelEl,
      labelEn: item.labelEn,
      external: item.external,
      hasDropdown: item.hasDropdown,
    };

    if (item.path) {
      newItem.href = createUrl(item.path, language);
    } else if (item.href) {
      newItem.href = item.href;
    }

    if (item.dropdownContent) {
      newItem.dropdownContent = {
        title: language === 'el' ? item.dropdownContent.titleEl : item.dropdownContent.titleEn,
        titleEl: item.dropdownContent.titleEl,
        titleEn: item.dropdownContent.titleEn,
        columns: item.dropdownContent.columns.map((col) => ({
          title: language === 'el' ? col.titleEl : col.titleEn,
          titleEl: col.titleEl,
          titleEn: col.titleEn,
          items: col.items.map((subItem) => ({
            href: createUrl(subItem.path, language),
            title: language === 'el' ? subItem.titleEl : subItem.titleEn,
            titleEl: subItem.titleEl,
            titleEn: subItem.titleEn,
            description: language === 'el' ? subItem.descriptionEl : subItem.descriptionEn,
            descriptionEl: subItem.descriptionEl,
            descriptionEn: subItem.descriptionEn,
          })),
        })),
      };
    }

    return newItem;
  });
}