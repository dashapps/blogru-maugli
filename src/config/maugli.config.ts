// MAUGLI_CONFIG_VERSION — config version for CLI/automation compatibility
export const MAUGLI_CONFIG_VERSION = '0.3';
// Main configuration interface for the Maugli project
export interface MaugliConfig {
  // Show example/demo content (for CLI/empty blog setup)
  showExamples?: boolean;
  // Default author ID (used if no author is specified)
  defaultAuthorId?: string;
  // Show authors without articles (default: true)
  showAuthorsWithoutArticles?: boolean;
  // Config version for CLI/automation compatibility
  configVersion?: string;
  // Automation settings for integration with Maugli farm (not used on frontend)
  automation?: {
    farmName?: string;           // Name of the farm/channel for integration
    farmChannelId?: string;      // Blog/channel ID for Maugli farm integration
    farmAuthorIds?: string[];    // Array of farm author IDs for API
    farmRubricIds?: string[];    // Array of farm rubric IDs for API
    farmProductIds?: string[];   // Array of farm product IDs for API
    farmProjectIds?: string[];   // Array of farm project/case IDs for API
  };
  // Repository settings for deployment
  repository?: {
    url?: string; // User's repository URL for Netlify deployment button
    netlifyEnabled?: boolean; // Enable Netlify deployment button (default: true)
  };
  // Brand and logo settings
  brand: {
    name: string; // Brand name
    description: string; // Brand description
    logoLight: string; // Logo for navigation (light theme). Used for dark theme if logoDark is not specified.
    logoDark?: string; // Logo for navigation (dark theme). If not specified, logoLight is used.
    logoHref?: string; // Logo link (main site). If not specified, links to blog index.
    logoBreadcrumbsLight: string; // Logo for breadcrumbs (light theme). Used for dark theme if logoBreadcrumbsDark is not specified.
    logoBreadcrumbsDark?: string; // Logo for breadcrumbs (dark theme). If not specified, logoBreadcrumbsLight is used.
  };
  // SEO and Open Graph settings
  seo: {
    titleSuffix: string; // Suffix for page titles
    defaultImage: string; // Default image for SEO
    author: string; // Default author (getter)
    jsonld?: Record<string, any>; // JSON-LD structured data
  };
  // Default images for various entities
  defaultBlogImage: string; // Default blog image
  defaultProductImage: string; // Default product image
  defaultProjectImage: string; // Default project/case image
  defaultAuthorImage: string; // Default author image
  defaultRubricImage: string; // Default rubric/category image
  // Feature toggles
  features: {
    enableSubscribe: boolean; // Enable subscribe block
    enableMultiLang: boolean; // Enable multilingual support
    enableFAQ: boolean; // Enable FAQ block
    enableRSS: boolean; // Enable RSS feed
  };
  // Progressive Web App settings
  pwa?: {
    themeColor?: string; // Theme color for the PWA manifest
    backgroundColor?: string; // Background color for the PWA manifest
    icons?: Array<{ src: string; sizes: string; type: string; purpose?: string }>; // Icons for the PWA manifest
  };
  // Control display of tags/rubrics
  // Theme switcher
  enableThemeSwitcher?: boolean; // Enable theme switcher (true by default)
  // Social and contact links (displayed in the footer)
  links?: Record<string, string>; // Social/contact links for footer
  navLinks?: Array<{ key: string; label: string; href: string }>; // Navigation links
  // Language and copyright
  defaultLang?: string; // Default language code
  copyright?: string; // Copyright string
  // Page titles for different sections
  pageTitles?: Record<string, string>; // Custom page titles
  // Subscribe block settings
  subscribe?: {
    enabled?: boolean; // Enable subscribe block
    heading?: string; // Subscribe heading
    mutedText?: string; // Subscribe muted text
    formUrl?: string; // Subscribe form URL
  };
  // Author and language switcher
  showAuthorArticleCount?: boolean; // Show article count for author
  showLangSwitcher?: boolean; // Show language switcher
  // Control display of tags/rubrics
  showOnlyRubricsTags?: boolean; // true — show only rubrics, false — show all tags
  langLinks?: Record<string, string>; // External links for each language
  authorsDescription?: string; // Authors block description (override localization)
  // Template and security
  isProTemplate?: boolean; // Is this a pro template
  secretKey?: string; // Secret key for pro features
  // Home page title override
  indexTitle?: string; // Custom title for index page
}
// Main exported configuration object for the Maugli project
export const maugliConfig: MaugliConfig = {
  "configVersion": "0.3",
  "showExamples": true,
  "brand": {
    "name": "Maugli",
    "description": "Content farm for smart automation",
    "logoLight": "/logoblog-icon.svg",
    "logoHref": "https://maugli.cfd",
    "logoBreadcrumbsLight": "/logo-icon.svg"
  },
  "automation": {
    "farmName": "maugli_team",
    "farmChannelId": "",
    "farmAuthorIds": [],
    "farmRubricIds": [],
    "farmProductIds": [],
    "farmProjectIds": []
  },
  "enableThemeSwitcher": true,
  "seo": {
    "titleSuffix": " — Maugli",
    "defaultImage": "/default-image.webp",
    "author": "default-autor",
    "jsonld": {
      "organization": {
        "name": "Maugli AI Editorial System",
        "url": "https://maugli.cfd/",
        "logo": "https://maugli.cfd/images/logo.svg",
        "sameAs": [
          "https://www.linkedin.com/company/maugli-ai-editorial-system/",
          "https://x.com/DZorina97078",
          "https://t.me/maugli_channel"
        ],
        "contact": {
          "email": "info@maugli.cfd",
          "contactType": "customer support"
        }
      },
      "website": {
        "name": "Maugli AI Editorial System",
        "url": "https://maugli.cfd/",
        "searchTemplate": "https://maugli.cfd/search?q={search_term_string}"
      },
      "articleDefaults": {
        "publisher": "Maugli AI Editorial System",
        "author": "Игорь Соколов",
        "image": "https://maugli.cfd/images/default-article.jpg",
        "language": "maugliConfig.defaultLang"
      },
      "schema": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Maugli",
        "url": "https://maugli.cfd/ru",
        "logo": "https://maugli.cfd/logoblog-icon.svg",
        "founder": "Daria Zorina"
      }
    }
  },
  "defaultBlogImage": "src/assets/img/default/blog_default.webp",
  "defaultProductImage": "src/assets/img/default/product_default.webp",
  "defaultProjectImage": "src/assets/img/default/project_default.webp",
  "defaultAuthorImage": "src/assets/img/default/autor_default.webp",
  "defaultRubricImage": "src/assets/img/default/rubric_default.webp",
  "features": {
    "enableSubscribe": true,
    "enableMultiLang": false,
    "enableFAQ": true,
    "enableRSS": true
  },
  "showOnlyRubricsTags": true,
  "links": {
    "products": "/products",
    "about": "/about",
    "email": "mailto:info@maugli.cfd",
    "telegram": "https://t.me/mauglibot",
    "mastodon": "",
    "medium": "https://medium.com/@maugli",
    "bluesky": "",
    "reddit": "",
    "linkedin": "https://linkedin.com/company/maugli",
    "twitter": "https://twitter.com/mauglibot"
  },
  "navLinks": [
    {
      "key": "blog",
      "label": "",
      "href": "/"
    },
    {
      "key": "products",
      "label": "",
      "href": "/products"
    },
    {
      "key": "projects",
      "label": "",
      "href": "/projects"
    },
    {
      "key": "authors",
      "label": "",
      "href": "/authors"
    },
    {
      "key": "tags",
      "label": "",
      "href": "/tags"
    }
  ],
  "defaultLang": "ru",
  "copyright": "© Maugli, 2025. All rights reserved.",
  "pageTitles": {
    "home": "https://maugli.cfd",
    "products": "",
    "authors": "",
    "tags": ""
  },
  "subscribe": {
    "enabled": false,
    "heading": "",
    "mutedText": "",
    "formUrl": "https://your-form-url.com"
  },
  "defaultAuthorId": "default-autor",
  "showAuthorsWithoutArticles": true,
  "showAuthorArticleCount": true,
  "showLangSwitcher": true,
  "langLinks": {
    "ru": "https://blogru.maugli.cfd",
    "en": "https://blog.maugli.cfd",
    "es": "https://maugli.cfd/es",
    "de": "https://maugli.cfd/de",
    "pt": "",
    "fr": "",
    "zh": "",
    "ja": ""
  },
  "authorsDescription": "",
  "indexTitle": "Maugli Блог",
  "isProTemplate": false,
  "secretKey": "0000-0000-0000-0000-0000",
  "pwa": {
    "themeColor": "#0cbf11",
    "backgroundColor": "#ffffff",
    "icons": [
      {
        "src": "/icon-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  "repository": {
    "url": "https://github.com/dashapps/blogru-maugli",
    "netlifyEnabled": true
  }
};
