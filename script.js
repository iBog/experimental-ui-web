// Localization data
const translations = {
    en: {
        "nav.features": "Features",
        "nav.news": "News",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.social": "Social",
        "nav.legal": "Legal Info",
        "nav.download": "Download Now",
        "nav.theme": "Theme",
        "hero.title": "Reception App",
        "hero.subtitle": "Make your business easier",
        "hero.description": "Streamline your business operations with our innovative mobile solution. Experience efficiency like never before.",
        "hero.download": "Download Now",
        "hero.learnMore": "Learn More",
        "features.title": "Key Features",
        "features.description": "Comprehensive features designed to streamline your business operations",
        
        // Core Management Features
        "features.core.title": "Core Management Features",
        "features.core.client.title": "Client Management",
        "features.core.client.description": "Add, edit, search, and manage client profiles with detailed information",
        "features.core.appointment.title": "Visit/Appointment Scheduling",
        "features.core.appointment.description": "Create, manage, and track appointments with pricing and procedures",
        "features.core.calendar.title": "Calendar Integration",
        "features.core.calendar.description": "Visual calendar view with appointment scheduling and management",
        "features.core.timeline.title": "Timeline View",
        "features.core.timeline.description": "Chronological activity feed showing all visits and client interactions",
        "features.core.search.title": "Contact Search",
        "features.core.search.description": "Advanced search functionality across all clients and visits",
        "features.core.financial.title": "Financial Tracking",
        "features.core.financial.description": "Revenue reports, statistics, and earnings analysis by period",
        
        // Data Management & Storage
        "features.data.title": "Data Management & Storage",
        "features.data.sqlite.title": "SQLite Database",
        "features.data.sqlite.description": "Local data storage with full CRUD operations",
        "features.data.backup.title": "Data Import/Export",
        "features.data.backup.description": "Backup and restore functionality with ZIP file support",
        "features.data.csv.title": "CSV Export",
        "features.data.csv.description": "Export client, visit, and financial data to CSV format",
        "features.data.legacy.title": "Legacy Import Support",
        "features.data.legacy.description": "Import data from older backup formats",
        "features.data.inventory.title": "Inventory Management",
        "features.data.inventory.description": "Track storage items, quantities, expiration dates, and locations",
        "features.data.files.title": "File Management",
        "features.data.files.description": "Attach and organize files to clients and visits",
        
        // Media & Documentation
        "features.media.title": "Media & Documentation",
        "features.media.gallery.title": "Photo Gallery",
        "features.media.gallery.description": "Camera integration for visit photos with full-screen viewing",
        "features.media.attachments.title": "File Attachments",
        "features.media.attachments.description": "Attach documents, images, and files to client records",
        "features.media.thumbnails.title": "Photo Thumbnails",
        "features.media.thumbnails.description": "Grid view of photos with quick access",
        "features.media.viewer.title": "Image Gallery",
        "features.media.viewer.description": "Full-screen photo viewer with navigation",
        "features.media.qr.title": "QR Code Scanner",
        "features.media.qr.description": "Built-in QR/barcode scanner for quick data entry",
        
        // User Interface & Experience
        "features.ui.title": "User Interface & Experience",
        "features.ui.material.title": "Material 3 Design",
        "features.ui.material.description": "Modern, clean interface following Google's design standards",
        "features.ui.theme.title": "Light/Dark Theme",
        "features.ui.theme.description": "Complete theming system with custom brand colors",
        "features.ui.multilang.title": "Multi-language Support",
        "features.ui.multilang.description": "Internationalization with English and Russian languages",
        "features.ui.responsive.title": "Responsive Layout",
        "features.ui.responsive.description": "Adapts to different screen sizes and orientations",
        "features.ui.speeddial.title": "Speed Dial Actions",
        "features.ui.speeddial.description": "Quick floating action buttons for common tasks",
        "features.ui.tables.title": "Smart Data Tables",
        "features.ui.tables.description": "Sortable, filterable tables with customizable columns",
        
        // Analytics & Reporting
        "features.analytics.title": "Analytics & Reporting",
        "features.analytics.financial.title": "Financial Reports",
        "features.analytics.financial.description": "Revenue tracking by week, month, quarter, or year",
        "features.analytics.clients.title": "Client Statistics",
        "features.analytics.clients.description": "New client acquisition tracking",
        "features.analytics.procedures.title": "Procedure Analytics",
        "features.analytics.procedures.description": "Popular services and revenue by treatment type",
        "features.analytics.trends.title": "Visit Trends",
        "features.analytics.trends.description": "Appointment patterns and frequency analysis",
        "features.analytics.export.title": "Export Reports",
        "features.analytics.export.description": "Generate and export financial and activity reports",
        
        // Security & Cross-Platform
        "features.security.title": "Security & Cross-Platform",
        "features.security.activation.title": "Device Activation",
        "features.security.activation.description": "Secure app activation with unique device codes",
        "features.security.trial.title": "Trial Period Management",
        "features.security.trial.description": "30-day trial with expiration tracking",
        "features.security.storage.title": "Secure Storage",
        "features.security.storage.description": "Encrypted storage for sensitive data",
        "features.security.crossplatform.title": "Cross-Platform Support",
        "features.security.crossplatform.description": "Android, Windows, macOS, and Linux compatibility",
        "features.security.mobile.title": "Mobile Optimization",
        "features.security.mobile.description": "Camera integration, gallery access, and touch optimization",
        "about.title": "About Reception App",
        "about.subtitle": "Your ultimate assistant for managing clients and appointments!",
        "about.description": "Perfect for cosmetologists, massage therapists, hairdressers, nail artists, barbershops, hotels, restaurants, doctors, dentists, and small businesses.",
        "about.featuresTitle": "Key Features:",
        "about.feature1": "✅ Easy client database management",
        "about.feature2": "✅ Flexible appointment scheduling",
        "about.feature3": "✅ Finances: track payments, generate daily/weekly/monthly reports",
        "about.feature4": "✅ Progress photos & visit history",
        "about.feature5": "✅ Quick search across all records",
        "about.cta": "Replace paper notebooks and sticky notes with a smart digital solution! 📱💼",
        "about.action": "Download now and work with ease!",
        "footer.description": "Making business operations simpler and more efficient for everyone.",
        "footer.product": "Product",
        "footer.features": "Features",
        "footer.pricing": "Pricing",
        "footer.updates": "Updates",
        "footer.company": "Company",
        "footer.about": "About",
        "footer.careers": "Careers",
        "footer.contact": "Contact",
        "footer.feedback": "Feedback",
        "footer.legal": "Legal",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.license": "License Agreement",
        "footer.copyright": "© 2025 ExperimentalUI. All rights reserved.",
        // Feedback form translations
        "feedback.title": "Send us your feedback",
        "feedback.description": "We'd love to hear from you! Your feedback helps us improve.",
        "feedback.name": "Name:",
        "feedback.email": "Email:",
        "feedback.message": "Message:",
        "feedback.cancel": "Cancel",
        "feedback.submit": "Submit",
        // Privacy Policy translations
        "privacy.backToHome": "Back to Home",
        "privacy.title": "Privacy Policy",
        "privacy.subtitle": "Your privacy is important to us",
        "privacy.section0.title": "Application Overview",
        "privacy.section0.content1": "Reception App is a primarily offline mobile application designed for business management and productivity. The app operates locally on your device and does not require internet connectivity for core functionality.",
        "privacy.section0.content2": "Limited online features include: contacting our support team and opening external website URLs through your device's default browser. All data processing and storage occurs locally on your device.",
        "privacy.section1.title": "Information We Collect",
        "privacy.section1.content1": "Information We Do NOT Collect: Reception App does not collect, store, or transmit personal information, user data, or device information to our servers. We do not track your usage, location, or personal activities within the app.",
        "privacy.section1.content2": "Limited Collection: We may receive basic technical information only when you voluntarily contact our support team via email. This may include information you choose to share about technical issues or feedback.",
        "privacy.section1.content3": "Local Data: All your business data, settings, and app usage information is stored locally on your device and remains under your complete control.",
        "privacy.section2.title": "How Your Data is Handled",
        "privacy.section2.intro": "Reception App operates with a privacy-first approach:",
        "privacy.section2.item1": "All data processing occurs locally on your device",
        "privacy.section2.item2": "No data synchronization or cloud storage services",
        "privacy.section2.item3": "No user analytics or tracking mechanisms",
        "privacy.section2.item4": "No advertising networks or third-party data sharing",
        "privacy.section2.item5": "Support communications are handled manually and securely",
        "privacy.section2.item6": "External URLs open in your device's browser with standard web privacy policies",
        "privacy.section3.title": "Third-Party Services",
        "privacy.section3.content1": "Reception App does not integrate with third-party analytics, advertising, or data collection services. The app does not use cookies, tracking pixels, or similar technologies.",
        "privacy.section3.content2": "When you choose to open external website links, those websites may have their own privacy policies and data collection practices that are independent of Reception App.",
        "privacy.section4.title": "Data Security and User Responsibility",
        "privacy.section4.content1": "Your Responsibility: Since all data is stored locally on your device, the security of your information depends entirely on your device's security measures, including screen locks, device encryption, and access controls.",
        "privacy.section4.content2": "Our Commitment: We design Reception App with security best practices, including secure coding standards and regular security reviews. However, we cannot control or guarantee the security of your device or operating system.",
        "privacy.section4.content3": "Recommendations: We strongly recommend using device encryption, strong passwords/PINs, and keeping your operating system updated to protect your data.",
        "privacy.section5.title": "User Control and Data Ownership",
        "privacy.section5.content1": "You have complete ownership and control over all data within Reception App. You can access, modify, export, or delete your data at any time through the app's interface.",
        "privacy.section5.content2": "Since data is stored locally, uninstalling the app will permanently remove all associated data from your device. We recommend creating backups if you wish to preserve your information.",
        "privacy.section6.title": "Children's Privacy and Family Safety",
        "privacy.section6.content1": "Reception App is designed to be family-friendly and safe for users of all ages. Since we do not collect personal information, there are no specific age restrictions for app usage.",
        "privacy.section6.content2": "Parents and guardians remain responsible for supervising their children's use of the app and ensuring appropriate device security measures are in place.",
        "privacy.section7.title": "Changes to This Policy",
        "privacy.section7.content": "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the \"Last Updated\" date.",
        "privacy.section8.title": "Contact Us",
        "privacy.section8.content": "If you have any questions about this privacy policy, please contact us at support@experimentalui.com or through our app's support section.",
        "privacy.lastUpdated": "Last updated: June 26, 2025",
        // Terms of Service translations
        "terms.backToHome": "Back to Home",
        "terms.title": "Terms of Service",
        "terms.subtitle": "Please read these terms carefully",
        "terms.section1.title": "Acceptance of Terms",
        "terms.section1.content1": "By downloading, installing, or using the Reception mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our app.",
        "terms.section1.content2": "These terms constitute a legally binding agreement between you and Reception. We reserve the right to update these terms at any time without prior notice.",
        "terms.section2.title": "Description of Service",
        "terms.section2.content1": "Reception is a mobile application designed to help businesses streamline their operations and improve efficiency. Our service includes features for business management, analytics, team collaboration, and more.",
        "terms.section2.content2": "We reserve the right to modify, suspend, or discontinue any part of our service at any time with or without notice.",
        "terms.section3.title": "User Accounts",
        "terms.section3.content1": "To use certain features of our app, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        "terms.section3.content2": "You agree to provide accurate, current, and complete information when creating your account and to update such information to keep it accurate, current, and complete.",
        "terms.section4.title": "Acceptable Use",
        "terms.section4.intro": "You agree not to use our service to:",
        "terms.section4.item1": "Violate any applicable laws or regulations",
        "terms.section4.item2": "Infringe upon the rights of others",
        "terms.section4.item3": "Transmit harmful, offensive, or inappropriate content",
        "terms.section4.item4": "Attempt to gain unauthorized access to our systems",
        "terms.section4.item5": "Interfere with the proper functioning of our service",
        "terms.section4.item6": "Use our service for any commercial purpose without our express consent",
        "terms.section4.item7": "Share, distribute, or create content involving minors in any inappropriate manner",
        "terms.section4.item8": "Upload, transmit, or distribute sexual, violent, toxic, harassing, or intolerant content",
        "terms.section4.item9": "Engage in any form of harassment, bullying, or discriminatory behavior",
        "terms.section4.item10": "Post content that promotes violence, self-harm, or illegal activities",
        "terms.section4a.title": "Child Protection and Safety",
        "terms.section4a.content1": "ExperimentalUI maintains a zero-tolerance policy regarding child exploitation, abuse, or any inappropriate content involving minors. We are committed to providing a safe environment that protects children and complies with all applicable child protection laws and platform policies, including Google Play Families Policies.",
        "terms.section4a.content2": "Reception App is designed to be family-friendly and appropriate for users of all ages. We strictly prohibit any content, behavior, or use of our service that could endanger, exploit, or harm children in any way.",
        "terms.section4a.content3": "If you encounter any content or behavior that violates our child protection policies, please report it immediately through our support channels. We will investigate all reports promptly and take appropriate action, including removing content and suspending or terminating accounts as necessary.",
        "terms.section4b.title": "Prohibited Content Policy",
        "terms.section4b.intro": "Reception App maintains strict content standards. The following types of content are strictly prohibited:",
        "terms.section4b.item1": "Sexual Content: Any sexually explicit, suggestive, or adult content including nudity, sexual acts, or sexually oriented material",
        "terms.section4b.item2": "Violent Content: Graphic violence, gore, torture, cruelty, or content that promotes or glorifies violence",
        "terms.section4b.item3": "Toxic Content: Content that promotes harmful substances, self-harm, dangerous activities, or unhealthy behaviors",
        "terms.section4b.item4": "Harassment: Bullying, stalking, threatening, intimidating, or targeting individuals or groups for abuse",
        "terms.section4b.item5": "Hate Speech: Content that promotes hatred, discrimination, or intolerance based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics",
        "terms.section4b.item6": "Illegal Activities: Content that promotes, facilitates, or provides instructions for illegal activities",
        "terms.section4b.item7": "Misinformation: False, misleading, or deceptive information that could cause harm",
        "terms.section4b.enforcement": "ExperimentalUI reserves the right to remove any content that violates these policies and to suspend or terminate accounts of users who repeatedly violate our content standards. We may report illegal content to appropriate authorities as required by law.",
        "terms.section5.title": "Intellectual Property",
        "terms.section5.content1": "The Reception app and all its content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.",
        "terms.section5.content2": "You are granted a limited, non-exclusive, non-transferable license to use our app for your personal or business purposes in accordance with these terms.",
        "terms.section6.title": "Privacy",
        "terms.section6.content": "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our service, to understand our practices.",
        "terms.section7.title": "Disclaimers",
        "terms.section7.content1": "Our service is provided \"as is\" and \"as available\" without any warranties of any kind, either express or implied. We do not warrant that our service will be uninterrupted, error-free, or completely secure.",
        "terms.section7.content2": "We are not responsible for any loss of data, business interruption, or other damages that may result from your use of our service.",
        "terms.section8.title": "Limitation of Liability",
        "terms.section8.content": "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
        "terms.section9.title": "Termination",
        "terms.section9.content1": "We may terminate or suspend your access to our service immediately, without prior notice, for any reason, including if you breach these terms.",
        "terms.section9.content2": "You may stop using our service at any time. Upon termination, your right to use our service will cease immediately.",
        "terms.section10.title": "Governing Law",
        "terms.section10.content": "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.",
        "terms.section11.title": "Contact Information",
        "terms.section11.content": "If you have any questions about these Terms of Service, please contact us at legal@reception-app.com or through our app's support section.",
        "terms.lastUpdated": "Last updated: January 1, 2024",
        // License Agreement translations
        "license.backToHome": "Back to Home",
        "license.title": "License Agreement",
        "license.subtitle": "End User License Agreement (EULA)",
        "license.section1.title": "Grant of License",
        "license.section1.content1": "Subject to the terms and conditions of this Agreement, Reception grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Reception mobile application solely for your personal or internal business purposes.",
        "license.section1.content2": "This license is granted for the term specified in your subscription or until terminated in accordance with this Agreement.",
        "license.section2.title": "Restrictions",
        "license.section2.intro": "You agree that you will not, and will not permit others to:",
        "license.section2.item1": "License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the app",
        "license.section2.item2": "Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the app",
        "license.section2.item3": "Remove, alter or obscure any proprietary notice (including copyright and trademark notices) on the app",
        "license.section2.item4": "Use the app for any illegal or unauthorized purpose or violate any local, state, national or international law",
        "license.section2.item5": "Copy the app except as expressly permitted in this Agreement",
        "license.section3.title": "Intellectual Property Rights",
        "license.section3.content1": "The Reception application, including all copyrights, patents, trademarks, trade secrets and other intellectual property rights are, and shall remain, the sole and exclusive property of Reception and its licensors.",
        "license.section3.content2": "The structure, organization, and code of the app are valuable trade secrets and confidential information of Reception.",
        "license.section4.title": "User Data",
        "license.section4.content1": "You retain all rights to your data that you input, upload, or create within the app. However, you grant Reception a license to use, store, and process this data solely for the purpose of providing the service.",
        "license.section4.content2": "Reception will handle your data in accordance with our Privacy Policy and applicable data protection laws.",
        "license.section5.title": "Updates and Modifications",
        "license.section5.content1": "Reception may provide updates, patches, or new versions of the app from time to time. These updates may be automatically downloaded and installed on your device.",
        "license.section5.content2": "By using the app, you agree to receive such updates and acknowledge that the terms of this Agreement will apply to all updates.",
        "license.section6.title": "Subscription and Payment",
        "license.section6.content1": "Certain features of the app may require a paid subscription. Payment terms and subscription details will be provided at the time of purchase.",
        "license.section6.content2": "Subscription fees are non-refundable except as expressly stated in our refund policy or as required by applicable law.",
        "license.section7.title": "Termination",
        "license.section7.content1": "This Agreement is effective until terminated. You may terminate this Agreement at any time by deleting the app and ceasing all use.",
        "license.section7.content2": "Reception may terminate this Agreement immediately if you fail to comply with any term of this Agreement. Upon termination, you must cease all use of the app and delete all copies.",
        "license.section8.title": "Disclaimer of Warranties",
        "license.section8.content1": "The app is provided \"AS IS\" and \"AS AVAILABLE\" without warranty of any kind. Reception disclaims all warranties, whether express, implied, statutory or otherwise.",
        "license.section8.content2": "Reception does not warrant that the app will be uninterrupted, error-free, or free of viruses or other harmful components.",
        "license.section9.title": "Limitation of Liability",
        "license.section9.content": "In no event shall Reception be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
        "license.section10.title": "Governing Law and Dispute Resolution",
        "license.section10.content1": "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which Reception is established.",
        "license.section10.content2": "Any disputes arising from this Agreement shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration authority.",
        "license.section11.title": "Contact Information",
        "license.section11.content": "If you have any questions about this License Agreement, please contact us at legal@reception-app.com or through our app's support section.",
        "license.lastUpdated": "Last updated: January 1, 2024",
        
        // News section translations
        "news.title": "Latest News",
        "news.description": "Stay updated with the latest Reception App developments and announcements",
        "news.month.june": "Jun",
        "news.item1.title": "Reception App v2.5 Released",
        "news.item1.excerpt": "New inventory management features, enhanced reporting capabilities, and improved dark theme support.",
        "news.item2.title": "Cross-Platform Support Expanded",
        "news.item2.excerpt": "Reception App now supports Linux and macOS, bringing our productivity tools to more platforms.",
        "news.item3.title": "New Security Features",
        "news.item3.excerpt": "Enhanced data encryption and secure storage implementation for better protection of client information.",
        "news.tags.release": "Release",
        "news.tags.features": "Features",
        "news.tags.platforms": "Platforms",
        "news.tags.update": "Update",
        "news.tags.security": "Security",
        "news.tags.privacy": "Privacy",
        
        // Dynamic news items
        "news.dynamic.item1.title": "Reception Local v0.7.11 Released",
        "news.dynamic.item1.content": "We're excited to announce the release of Reception Local v0.7.11!\n\nFirst platforms for testing - Android, Windows, MacOS (Mac M1-M4)",
        "news.dynamic.item2.title": "Site launch", 
        "news.dynamic.item2.content": "First version of the this site was launched",
        
        // Empty card translations
        "news.empty.title": "Latest News",
        "news.empty.description": "Stay tuned for the latest updates and announcements",
        
        // Interface translations
        "interface.appTitle": "Reception App",
        "interface.clients": "Clients",
        "interface.finance": "Finance",
        "interface.nameColumn": "Name",
        "interface.timeColumn": "Time",
        "interface.year": "Year",
        "interface.newClients": "New Clients",
        "interface.totalVisits": "Total Visits",
        "interface.revenue": "Revenue",
        "interface.client1": "Anna Petrova",
        "interface.client2": "Maria Ivanova",
        "interface.client3": "Elena Kozlova",
        "interface.client4": "Irina Smirnova"
    },
    ru: {
        "nav.features": "Возможности",
        "nav.news": "Новости",
        "nav.about": "О нас",
        "nav.contact": "Контакты",
        "nav.social": "Социальные сети",
        "nav.legal": "Правовая информация",
        "nav.download": "Скачать",
        "nav.theme": "Тема",
        "hero.title": "Reception App",
        "hero.subtitle": "Упростите ваш бизнес",
        "hero.description": "Оптимизируйте бизнес-процессы с помощью нашего инновационного мобильного решения. Испытайте эффективность как никогда раньше.",
        "hero.download": "Скачать",
        "hero.learnMore": "Узнать больше",
        "features.title": "Основные возможности",
        "features.description": "Комплексные функции для оптимизации бизнес-процессов",
        
        // Core Management Features - Russian
        "features.core.title": "Основные функции управления",
        "features.core.client.title": "Управление клиентами",
        "features.core.client.description": "Добавление, редактирование, поиск и управление профилями клиентов с подробной информацией",
        "features.core.appointment.title": "Планирование визитов/записей",
        "features.core.appointment.description": "Создание, управление и отслеживание записей с ценами и процедурами",
        "features.core.calendar.title": "Интеграция календаря",
        "features.core.calendar.description": "Визуальный календарь с планированием и управлением записями",
        "features.core.timeline.title": "Просмотр хронологии",
        "features.core.timeline.description": "Хронологическая лента активности всех визитов и взаимодействий с клиентами",
        "features.core.search.title": "Поиск контактов",
        "features.core.search.description": "Расширенный поиск по всем клиентам и визитам",
        "features.core.financial.title": "Финансовый учет",
        "features.core.financial.description": "Отчеты о доходах, статистика и анализ прибыли по периодам",
        
        // Data Management & Storage - Russian
        "features.data.title": "Управление и хранение данных",
        "features.data.sqlite.title": "База данных SQLite",
        "features.data.sqlite.description": "Локальное хранение данных с полными CRUD операциями",
        "features.data.backup.title": "Импорт/экспорт данных",
        "features.data.backup.description": "Функции резервного копирования и восстановления с поддержкой ZIP файлов",
        "features.data.csv.title": "Экспорт CSV",
        "features.data.csv.description": "Экспорт данных клиентов, визитов и финансов в формат CSV",
        "features.data.legacy.title": "Поддержка legacy импорта",
        "features.data.legacy.description": "Импорт данных из старых форматов резервных копий",
        "features.data.inventory.title": "Управление складом",
        "features.data.inventory.description": "Отслеживание товаров, количества, сроков годности и местоположения",
        "features.data.files.title": "Управление файлами",
        "features.data.files.description": "Прикрепление и организация файлов к клиентам и визитам",
        
        // Media & Documentation - Russian
        "features.media.title": "Медиа и документация",
        "features.media.gallery.title": "Фотогалерея",
        "features.media.gallery.description": "Интеграция камеры для фото визитов с полноэкранным просмотром",
        "features.media.attachments.title": "Файловые вложения",
        "features.media.attachments.description": "Прикрепление документов, изображений и файлов к записям клиентов",
        "features.media.thumbnails.title": "Миниатюры фото",
        "features.media.thumbnails.description": "Сетка фотографий с быстрым доступом",
        "features.media.viewer.title": "Галерея изображений",
        "features.media.viewer.description": "Полноэкранный просмотр фото с навигацией",
        "features.media.qr.title": "Сканер QR кодов",
        "features.media.qr.description": "Встроенный QR/штрих-код сканер для быстрого ввода данных",
        
        // User Interface & Experience - Russian
        "features.ui.title": "Интерфейс и пользовательский опыт",
        "features.ui.material.title": "Material 3 дизайн",
        "features.ui.material.description": "Современный, чистый интерфейс по стандартам дизайна Google",
        "features.ui.theme.title": "Светлая/темная тема",
        "features.ui.theme.description": "Полная система тем с фирменными цветами",
        "features.ui.multilang.title": "Многоязычная поддержка",
        "features.ui.multilang.description": "Интернационализация с поддержкой английского и русского языков",
        "features.ui.responsive.title": "Адаптивный макет",
        "features.ui.responsive.description": "Адаптация к различным размерам и ориентации экрана",
        "features.ui.speeddial.title": "Быстрые действия",
        "features.ui.speeddial.description": "Плавающие кнопки быстрых действий для частых задач",
        "features.ui.tables.title": "Умные таблицы данных",
        "features.ui.tables.description": "Сортируемые, фильтруемые таблицы с настраиваемыми столбцами",
        
        // Analytics & Reporting - Russian
        "features.analytics.title": "Аналитика и отчеты",
        "features.analytics.financial.title": "Финансовые отчеты",
        "features.analytics.financial.description": "Отслеживание доходов по неделям, месяцам, кварталам или годам",
        "features.analytics.clients.title": "Статистика клиентов",
        "features.analytics.clients.description": "Отслеживание привлечения новых клиентов",
        "features.analytics.procedures.title": "Аналитика процедур",
        "features.analytics.procedures.description": "Популярные услуги и доходы по типам процедур",
        "features.analytics.trends.title": "Тренды визитов",
        "features.analytics.trends.description": "Анализ паттернов и частоты записей",
        "features.analytics.export.title": "Экспорт отчетов",
        "features.analytics.export.description": "Генерация и экспорт финансовых отчетов и отчетов активности",
        
        // Security & Cross-Platform - Russian
        "features.security.title": "Безопасность и кроссплатформенность",
        "features.security.activation.title": "Активация устройства",
        "features.security.activation.description": "Безопасная активация приложения с уникальными кодами устройств",
        "features.security.trial.title": "Управление пробным периодом",
        "features.security.trial.description": "30-дневный пробный период с отслеживанием истечения",
        "features.security.storage.title": "Безопасное хранение",
        "features.security.storage.description": "Зашифрованное хранение конфиденциальных данных",
        "features.security.crossplatform.title": "Кроссплатформенная поддержка",
        "features.security.crossplatform.description": "Совместимость с Android, Windows, macOS и Linux",
        "features.security.mobile.title": "Мобильная оптимизация",
        "features.security.mobile.description": "Интеграция камеры, доступ к галерее и сенсорная оптимизация",
        "about.title": "О Reception App",
        "about.subtitle": "Ваш идеальный помощник для управления клиентами и записями!",
        "about.description": "Подходит для косметологов, массажистов, парикмахеров, мастеров маникюра, барбершопов, отелей, ресторанов, врачей, стоматологов и малого бизнеса.",
        "about.featuresTitle": "Возможности:",
        "about.feature1": "✅ Удобное ведение базы клиентов",
        "about.feature2": "✅ Запись на прием с гибким расписанием",
        "about.feature3": "✅ Финансы: учет платежей, отчеты за день/неделю/месяц",
        "about.feature4": "✅ Фотоотчеты и история посещений",
        "about.feature5": "✅ Быстрый поиск по всем данным",
        "about.cta": "Замените бумажные блокноты и стикеры на удобное цифровое решение! 📱💼",
        "about.action": "Скачайте и работайте с комфортом!",
        "footer.description": "Делаем бизнес-операции проще и эффективнее для всех.",
        "footer.product": "Продукт",
        "footer.features": "Возможности",
        "footer.pricing": "Цены",
        "footer.updates": "Обновления",
        "footer.company": "Компания",
        "footer.about": "О нас",
        "footer.careers": "Карьера",
        "footer.contact": "Контакты",
        "footer.feedback": "Обратная связь",
        "footer.legal": "Правовая информация",
        "footer.privacy": "Политика конфиденциальности",
        "footer.terms": "Условия использования",
        "footer.license": "Лицензионное соглашение",
        "footer.copyright": "© 2025 ExperimentalUI. Все права защищены.",
        // Privacy Policy Russian translations
        "privacy.backToHome": "Вернуться на главную",
        "privacy.title": "Политика конфиденциальности",
        "privacy.subtitle": "Ваша конфиденциальность важна для нас",
        "privacy.section0.title": "Обзор приложения",
        "privacy.section0.content1": "Reception App - это преимущественно офлайн мобильное приложение, предназначенное для управления бизнесом и повышения продуктивности. Приложение работает локально на вашем устройстве и не требует подключения к интернету для основного функционала.",
        "privacy.section0.content2": "Ограниченные онлайн-функции включают: связь с нашей службой поддержки и открытие внешних URL-адресов через браузер вашего устройства по умолчанию. Вся обработка и хранение данных происходит локально на вашем устройстве.",
        "privacy.section1.title": "Информация, которую мы собираем",
        "privacy.section1.content1": "Информация, которую мы НЕ собираем: Reception App не собирает, не хранит и не передает личную информацию, пользовательские данные или информацию об устройстве на наши серверы. Мы не отслеживаем ваше использование, местоположение или личную активность в приложении.",
        "privacy.section1.content2": "Ограниченный сбор: Мы можем получать базовую техническую информацию только когда вы добровольно связываетесь с нашей службой поддержки по электронной почте. Это может включать информацию, которую вы решите предоставить о технических проблемах или отзывах.",
        "privacy.section1.content3": "Локальные данные: Все ваши бизнес-данные, настройки и информация об использовании приложения хранятся локально на вашем устройстве и остаются под вашим полным контролем.",
        "privacy.section2.title": "Как обрабатываются ваши данные",
        "privacy.section2.intro": "Reception App работает с подходом \"конфиденциальность прежде всего\":",
        "privacy.section2.item1": "Вся обработка данных происходит локально на вашем устройстве",
        "privacy.section2.item2": "Нет синхронизации данных или облачных сервисов хранения",
        "privacy.section2.item3": "Нет аналитики пользователей или механизмов отслеживания",
        "privacy.section2.item4": "Нет рекламных сетей или обмена данными с третьими лицами",
        "privacy.section2.item5": "Связь с поддержкой обрабатывается вручную и безопасно",
        "privacy.section2.item6": "Внешние URL открываются в браузере вашего устройства со стандартными политиками веб-конфиденциальности",
        "privacy.section3.title": "Сторонние сервисы",
        "privacy.section3.content1": "Reception App не интегрируется со сторонними аналитическими, рекламными или сервисами сбора данных. Приложение не использует cookies, пиксели отслеживания или аналогичные технологии.",
        "privacy.section3.content2": "Когда вы решаете открыть внешние ссылки на веб-сайты, эти веб-сайты могут иметь свои собственные политики конфиденциальности и практики сбора данных, которые независимы от Reception App.",
        "privacy.section4.title": "Безопасность данных и ответственность пользователя",
        "privacy.section4.content1": "Ваша ответственность: Поскольку все данные хранятся локально на вашем устройстве, безопасность вашей информации полностью зависит от мер безопасности вашего устройства, включая блокировку экрана, шифрование устройства и контроль доступа.",
        "privacy.section4.content2": "Наши обязательства: Мы разрабатываем Reception App с соблюдением лучших практик безопасности, включая стандарты безопасного кодирования и регулярные проверки безопасности. Однако мы не можем контролировать или гарантировать безопасность вашего устройства или операционной системы.",
        "privacy.section4.content3": "Рекомендации: Мы настоятельно рекомендуем использовать шифрование устройства, надежные пароли/PIN-коды и поддерживать вашу операционную систему в актуальном состоянии для защиты ваших данных.",
        "privacy.section5.title": "Пользовательский контроль и владение данными",
        "privacy.section5.content1": "Вы имеете полную собственность и контроль над всеми данными в Reception App. Вы можете получать доступ, изменять, экспортировать или удалять ваши данные в любое время через интерфейс приложения.",
        "privacy.section5.content2": "Поскольку данные хранятся локально, удаление приложения навсегда удалит все связанные данные с вашего устройства. Мы рекомендуем создавать резервные копии, если вы хотите сохранить вашу информацию.",
        "privacy.section6.title": "Конфиденциальность детей и семейная безопасность",
        "privacy.section6.content1": "Reception App разработан как семейно-дружественный и безопасный для пользователей всех возрастов. Поскольку мы не собираем личную информацию, нет конкретных возрастных ограничений для использования приложения.",
        "privacy.section6.content2": "Родители и опекуны остаются ответственными за надзор за использованием приложения их детьми и обеспечение соответствующих мер безопасности устройства.",
        "privacy.section7.title": "Изменения в этой политике",
        "privacy.section7.content": "Мы можем время от времени обновлять эту политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую политику на этой странице и обновив дату \"Последнее обновление\".",
        "privacy.section8.title": "Свяжитесь с нами",
        "privacy.section8.content": "Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу support@experimentalui.com или через раздел поддержки нашего приложения.",
        "privacy.lastUpdated": "Последнее обновление: 26 Июня 2025 г.",
        // Terms of Service Russian translations
        "terms.backToHome": "Вернуться на главную",
        "terms.title": "Условия использования",
        "terms.subtitle": "Пожалуйста, внимательно прочитайте эти условия",
        "terms.section1.title": "Принятие условий",
        "terms.section1.content1": "Загружая, устанавливая или используя мобильное приложение Reception, вы соглашаетесь соблюдать эти Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте наше приложение.",
        "terms.section1.content2": "Эти условия составляют юридически обязательное соглашение между вами и Reception. Мы оставляем за собой право обновлять эти условия в любое время без предварительного уведомления.",
        "terms.section2.title": "Описание услуги",
        "terms.section2.content1": "Reception - это мобильное приложение, предназначенное для помощи предприятиям в оптимизации их операций и повышении эффективности. Наша услуга включает функции для управления бизнесом, аналитики, командного сотрудничества и многого другого.",
        "terms.section2.content2": "Мы оставляем за собой право изменять, приостанавливать или прекращать любую часть нашей услуги в любое время с уведомлением или без него.",
        "terms.section3.title": "Учетные записи пользователей",
        "terms.section3.content1": "Для использования некоторых функций нашего приложения вам может потребоваться создать учетную запись. Вы несете ответственность за сохранение конфиденциальности учетных данных вашей учетной записи и за все действия, происходящие под вашей учетной записью.",
        "terms.section3.content2": "Вы соглашаетесь предоставлять точную, актуальную и полную информацию при создании учетной записи и обновлять такую информацию, чтобы она оставалась точной, актуальной и полной.",
        "terms.section4.title": "Допустимое использование",
        "terms.section4.intro": "Вы соглашаетесь не использовать нашу услугу для:",
        "terms.section4.item1": "Нарушения любых применимых законов или правил",
        "terms.section4.item2": "Нарушения прав других лиц",
        "terms.section4.item3": "Передачи вредного, оскорбительного или неподходящего контента",
        "terms.section4.item4": "Попыток получения несанкционированного доступа к нашим системам",
        "terms.section4.item5": "Вмешательства в правильное функционирование нашей услуги",
        "terms.section4.item6": "Использования нашей услуги в коммерческих целях без нашего явного согласия",
        "terms.section4.item7": "Обмена, распространения или создания контента с участием несовершеннолетних в любой неподобающей форме",
        "terms.section4.item8": "Загрузки, передачи или распространения сексуального, насильственного, токсичного, харассмент или нетерпимого контента",
        "terms.section4.item9": "Участия в любых формах харассмента, буллинга или дискриминационного поведения",
        "terms.section4.item10": "Размещения контента, который продвигает насилие, самоповреждение или незаконные действия",
        "terms.section4a.title": "Защита и безопасность детей",
        "terms.section4a.content1": "ExperimentalUI придерживается политики нулевой терпимости в отношении эксплуатации детей, жестокого обращения или любого неподобающего контента с участием несовершеннолетних. Мы привержены созданию безопасной среды, которая защищает детей и соответствует всем применимым законам о защите детей и политикам платформ, включая политики Google Play для семей.",
        "terms.section4a.content2": "Reception App разработан как семейно-дружественный и подходящий для пользователей всех возрастов. Мы строго запрещаем любой контент, поведение или использование нашего сервиса, которое может угрожать, эксплуатировать или наносить вред детям любым способом.",
        "terms.section4a.content3": "Если вы столкнулись с контентом или поведением, нарушающим наши политики защиты детей, немедленно сообщите об этом через наши каналы поддержки. Мы оперативно расследуем все сообщения и принимаем соответствующие меры, включая удаление контента и приостановку или прекращение учетных записей по мере необходимости.",
        "terms.section4b.title": "Политика запрещенного контента",
        "terms.section4b.intro": "Reception App поддерживает строгие стандарты контента. Следующие типы контента строго запрещены:",
        "terms.section4b.item1": "Сексуальный контент: Любой сексуально явный, намекающий или взрослый контент, включая наготу, сексуальные акты или сексуально ориентированный материал",
        "terms.section4b.item2": "Насильственный контент: Графическое насилие, жестокость, пытки, садизм или контент, который продвигает или прославляет насилие",
        "terms.section4b.item3": "Токсичный контент: Контент, который продвигает вредные вещества, самоповреждение, опасные действия или нездоровое поведение",
        "terms.section4b.item4": "Харассмент: Буллинг, преследование, угрозы, запугивание или направленное на отдельных лиц или группы злоупотребление",
        "terms.section4b.item5": "Язык вражды: Контент, который продвигает ненависть, дискриминацию или нетерпимость на основе расы, этнической принадлежности, религии, пола, сексуальной ориентации, инвалидности или других защищенных характеристик",
        "terms.section4b.item6": "Незаконные действия: Контент, который продвигает, способствует или предоставляет инструкции для незаконных действий",
        "terms.section4b.item7": "Дезинформация: Ложная, вводящая в заблуждение или обманчивая информация, которая может причинить вред",
        "terms.section4b.enforcement": "ExperimentalUI оставляет за собой право удалять любой контент, нарушающий эти политики, и приостанавливать или прекращать учетные записи пользователей, которые неоднократно нарушают наши стандарты контента. Мы можем сообщать о незаконном контенте соответствующим органам власти, как того требует закон.",
        "terms.section5.title": "Интеллектуальная собственность",
        "terms.section5.content1": "Приложение Reception и весь его контент, функции и возможности принадлежат нам и защищены международными законами об авторском праве, товарных знаках и другой интеллектуальной собственности.",
        "terms.section5.content2": "Вам предоставляется ограниченная, неисключительная, непередаваемая лицензия на использование нашего приложения для ваших личных или деловых целей в соответствии с этими условиями.",
        "terms.section6.title": "Конфиденциальность",
        "terms.section6.content": "Ваша конфиденциальность важна для нас. Пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности, которая также регулирует использование вами нашей услуги, чтобы понять наши практики.",
        "terms.section7.title": "Отказ от ответственности",
        "terms.section7.content1": "Наша услуга предоставляется \"как есть\" и \"как доступно\" без каких-либо гарантий любого рода, явных или подразумеваемых. Мы не гарантируем, что наша услуга будет непрерывной, безошибочной или полностью безопасной.",
        "terms.section7.content2": "Мы не несем ответственности за любую потерю данных, прерывание бизнеса или другие ущербы, которые могут возникнуть в результате использования вами нашей услуги.",
        "terms.section8.title": "Ограничение ответственности",
        "terms.section8.content": "В максимальной степени, разрешенной законом, мы не несем ответственности за любые косвенные, случайные, особые, последующие или штрафные ущербы, или любую потерю прибыли или доходов, понесенных прямо или косвенно.",
        "terms.section9.title": "Прекращение",
        "terms.section9.content1": "Мы можем прекратить или приостановить ваш доступ к нашей услуге немедленно, без предварительного уведомления, по любой причине, включая нарушение вами этих условий.",
        "terms.section9.content2": "Вы можете прекратить использование нашей услуги в любое время. После прекращения ваше право на использование нашей услуги немедленно прекращается.",
        "terms.section10.title": "Применимое право",
        "terms.section10.content": "Эти условия регулируются и толкуются в соответствии с законами юрисдикции, в которой создана наша компания, без учета положений о коллизии права.",
        "terms.section11.title": "Контактная информация",
        "terms.section11.content": "Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами по адресу legal@reception-app.com или через раздел поддержки нашего приложения.",
        "terms.lastUpdated": "Последнее обновление: 1 января 2024 г.",
        // License Agreement Russian translations
        "license.backToHome": "Вернуться на главную",
        "license.title": "Лицензионное соглашение",
        "license.subtitle": "Лицензионное соглашение конечного пользователя (EULA)",
        "license.section1.title": "Предоставление лицензии",
        "license.section1.content1": "В соответствии с условиями данного Соглашения Reception предоставляет вам ограниченную, неисключительную, непередаваемую, отзывную лицензию на загрузку, установку и использование мобильного приложения Reception исключительно для ваших личных или внутренних деловых целей.",
        "license.section1.content2": "Эта лицензия предоставляется на срок, указанный в вашей подписке, или до прекращения в соответствии с данным Соглашением.",
        "license.section2.title": "Ограничения",
        "license.section2.intro": "Вы соглашаетесь, что не будете и не позволите другим:",
        "license.section2.item1": "Лицензировать, продавать, сдавать в аренду, предоставлять в лизинг, назначать, распространять, передавать, размещать, передавать на аутсорсинг, раскрывать или иным образом коммерчески эксплуатировать приложение",
        "license.section2.item2": "Изменять, создавать производные работы, разбирать, расшифровывать, реверс-компилировать или реверс-инжинирить любую часть приложения",
        "license.section2.item3": "Удалять, изменять или скрывать любые проприетарные уведомления (включая уведомления об авторских правах и товарных знаках) в приложении",
        "license.section2.item4": "Использовать приложение для любых незаконных или неразрешенных целей или нарушать любые местные, государственные, национальные или международные законы",
        "license.section2.item5": "Копировать приложение, за исключением случаев, прямо разрешенных в данном Соглашении",
        "license.section3.title": "Права интеллектуальной собственности",
        "license.section3.content1": "Приложение Reception, включая все авторские права, патенты, товарные знаки, коммерческие тайны и другие права интеллектуальной собственности, являются и остаются исключительной собственностью Reception и ее лицензиаров.",
        "license.section3.content2": "Структура, организация и код приложения являются ценными коммерческими тайнами и конфиденциальной информацией Reception.",
        "license.section4.title": "Пользовательские данные",
        "license.section4.content1": "Вы сохраняете все права на свои данные, которые вы вводите, загружаете или создаете в приложении. Однако вы предоставляете Reception лицензию на использование, хранение и обработку этих данных исключительно с целью предоставления услуги.",
        "license.section4.content2": "Reception будет обрабатывать ваши данные в соответствии с нашей Политикой конфиденциальности и применимыми законами о защите данных.",
        "license.section5.title": "Обновления и модификации",
        "license.section5.content1": "Reception может время от времени предоставлять обновления, патчи или новые версии приложения. Эти обновления могут автоматически загружаться и устанавливаться на ваше устройство.",
        "license.section5.content2": "Используя приложение, вы соглашаетесь получать такие обновления и признаете, что условия данного Соглашения будут применяться ко всем обновлениям.",
        "license.section6.title": "Подписка и оплата",
        "license.section6.content1": "Некоторые функции приложения могут требовать платной подписки. Условия оплаты и подробности подписки будут предоставлены во время покупки.",
        "license.section6.content2": "Плата за подписку не подлежит возврату, за исключением случаев, прямо указанных в нашей политике возврата или требуемых применимым законодательством.",
        "license.section7.title": "Прекращение",
        "license.section7.content1": "Данное Соглашение действует до прекращения. Вы можете прекратить это Соглашение в любое время, удалив приложение и прекратив всякое использование.",
        "license.section7.content2": "Reception может немедленно прекратить это Соглашение, если вы не соблюдаете какое-либо условие данного Соглашения. После прекращения вы должны прекратить всякое использование приложения и удалить все копии.",
        "license.section8.title": "Отказ от гарантий",
        "license.section8.content1": "Приложение предоставляется \"КАК ЕСТЬ\" и \"КАК ДОСТУПНО\" без гарантий любого рода. Reception отказывается от всех гарантий, будь то явных, подразумеваемых, установленных законом или иных.",
        "license.section8.content2": "Reception не гарантирует, что приложение будет непрерывным, безошибочным или свободным от вирусов или других вредных компонентов.",
        "license.section9.title": "Ограничение ответственности",
        "license.section9.content": "Ни при каких обстоятельствах Reception не несет ответственности за любые косвенные, случайные, особые, последующие или штрафные ущербы, включая, без ограничений, потерю прибыли, данных, использования, доброй воли или других нематериальных потерь.",
        "license.section10.title": "Применимое право и разрешение споров",
        "license.section10.content1": "Данное Соглашение регулируется и толкуется в соответствии с законами юрисдикции, в которой создана Reception.",
        "license.section10.content2": "Любые споры, возникающие из данного Соглашения, должны разрешаться посредством обязательного арбитража в соответствии с правилами соответствующего арбитражного органа.",
        "license.section11.title": "Контактная информация",
        "license.section11.content": "Если у вас есть вопросы об этом Лицензионном соглашении, пожалуйста, свяжитесь с нами по адресу legal@reception-app.com или через раздел поддержки нашего приложения.",
        "license.lastUpdated": "Последнее обновление: 1 января 2024 г.",
        
        // Feedback form translations - Russian
        "feedback.title": "Отправьте нам отзыв",
        "feedback.description": "Мы будем рады услышать от вас! Ваши отзывы помогают нам улучшаться.",
        "feedback.name": "Имя:",
        "feedback.email": "Email:",
        "feedback.message": "Сообщение:",
        "feedback.cancel": "Отмена",
        "feedback.submit": "Отправить",
        
        // News section translations - Russian
        "news.title": "Последние новости",
        "news.description": "Будьте в курсе последних разработок и объявлений Reception App",
        "news.month.june": "Июн",
        "news.item1.title": "Выпущена Reception App v2.5",
        "news.item1.excerpt": "Новые функции управления складом, улучшенные возможности отчетности и улучшенная поддержка темной темы.",
        "news.item2.title": "Расширена кроссплатформенная поддержка",
        "news.item2.excerpt": "Reception App теперь поддерживает Linux и macOS, предоставляя наши инструменты продуктивности на большем количестве платформ.",
        "news.item3.title": "Новые функции безопасности",
        "news.item3.excerpt": "Улучшенное шифрование данных и безопасное хранение для лучшей защиты информации о клиентах.",
        "news.tags.release": "Релиз",
        "news.tags.features": "Функции",
        "news.tags.platforms": "Платформы",
        "news.tags.update": "Обновление",
        "news.tags.security": "Безопасность",
        "news.tags.privacy": "Конфиденциальность",
        
        // Dynamic news items - Russian
        "news.dynamic.item1.title": "Выпущена Reception Local v0.7.11",
        "news.dynamic.item1.content": "Мы рады объявить о выпуске Reception Local v0.7.11!\n\nПервые платформы для тестирования - Android, Windows, MacOS (Ноутбуки Mac M1-M4)",
        "news.dynamic.item2.title": "Запущан сайт",
        "news.dynamic.item2.content": "Первая версия сайта запущена",
        
        // Empty card translations - Russian
        "news.empty.title": "Последние новости",
        "news.empty.description": "Следите за последними обновлениями и объявлениями",
        
        // Interface translations - Russian
        "interface.appTitle": "Reception App",
        "interface.clients": "Клиенты",
        "interface.finance": "Финансы",
        "interface.nameColumn": "Имя",
        "interface.timeColumn": "Время",
        "interface.year": "Год",
        "interface.newClients": "Новые клиенты",
        "interface.totalVisits": "Всего визитов",
        "interface.revenue": "Доходы",
        "interface.client1": "Анна Петрова",
        "interface.client2": "Мария Иванова",
        "interface.client3": "Елена Козлова",
        "interface.client4": "Ирина Смирнова"
    }
};

// News data array - easily add new news items here
const newsData = [
    {
        id: 1,
        date: "2025-07-07",
        titleKey: "news.dynamic.item1.title",
        contentKey: "news.dynamic.item1.content",
        tags: ["news.tags.release", "news.tags.features"],
        image: null // Optional image URL
    },
    {
        id: 2,
        date: "2025-06-25",
        titleKey: "news.dynamic.item2.title", 
        contentKey: "news.dynamic.item2.content",
        tags: ["news.tags.platforms", "news.tags.update"],
        image: "images/reception-logo.png" // Example with image
    }
];

class ReceptionWebsite {
    constructor() {
        this.currentLanguage = 'ru';
        this.currentTheme = 'light';
        this.isMobileMenuOpen = false;
        this.currentSlide = 0;
        this.maxVisibleCards = 4;
        this.totalSlides = 0;
        this.currentScreen = 0;
        this.phoneInterfaceInterval = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupLanguageSystem();
        this.setupThemeSystem();
        this.setupScrollAnimations();
        this.setupHeaderScroll();
        this.renderNews();
        this.setupCarousel();
        this.setupImageModal();
        this.setupPhoneInterface();
        this.loadLanguage(this.currentLanguage);
        this.loadTheme(this.currentTheme);
    }

    setupEventListeners() {
        // Language switcher (desktop and mobile)
        document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });

        // Theme switcher
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Mobile theme switcher
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Mobile menu item clicks
        document.querySelectorAll('.mobile-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Special handling for mobile download button
                if (item.classList.contains('download-btn')) {
                    e.preventDefault();
                    // Find the primary button and scroll to it
                    const primaryBtn = document.querySelector('.primary-btn');
                    if (primaryBtn) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = primaryBtn.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Close mobile menu when item is clicked
                if (this.isMobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
        });

        // Logo click to scroll to top
        const logoLink = document.getElementById('logo-link');
        if (logoLink) {
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (this.isMobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
        });

        // Feedback modal
        const feedbackLink = document.getElementById('feedback-link');
        if (feedbackLink) {
            feedbackLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showFeedbackModal();
            });
        }

        // CTA button clicks (exclude feedback submit button)
        document.querySelectorAll('.cta-btn, .primary-btn').forEach(btn => {
            // Skip feedback submit button
            if (!btn.classList.contains('feedback-submit-btn')) {
                btn.addEventListener('click', () => {
                    this.handleDownloadClick();
                });
            }
        });

        // Learn More button click
        document.querySelectorAll('.secondary-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = featuresSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Feature card hover animations
        this.setupFeatureCardAnimations();

        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Scroll event for header transparency
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    setupLanguageSystem() {
        // Set initial active language button (desktop and mobile)
        document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    switchLanguage(lang) {
        if (lang !== this.currentLanguage) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.loadLanguage(lang);
            
            // Update active language button (desktop and mobile)
            document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }
    }

    loadLanguage(lang) {
        const langData = translations[lang] || translations.en;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });
        
        // Re-render news to update translations
        this.renderNews();
    }

    renderNews() {
        const newsContainer = document.querySelector('.news-grid');
        if (!newsContainer) return;

        // Sort news by date (newest first)
        const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear existing content
        newsContainer.innerHTML = '';
        
        // Get current language translations
        const langData = translations[this.currentLanguage] || translations.en;
        
        // Render each news item (no empty card)
        sortedNews.forEach((newsItem, index) => {
            const newsCard = this.createNewsCard(newsItem, langData, index);
            newsContainer.appendChild(newsCard);
        });
        
        this.totalSlides = sortedNews.length;
        this.currentSlide = 0; // Start at position 0 to show latest news first
        
        // Apply stacked positioning immediately after DOM update
        setTimeout(() => {
            this.updateStackedCards();
        }, 10);
    }

    createNewsCard(newsItem, langData, index) {
        const article = document.createElement('article');
        article.className = 'news-card';
        
        const dateObj = new Date(newsItem.date);
        const fullDate = dateObj.toLocaleDateString(this.currentLanguage === 'ru' ? 'ru-RU' : 'en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        const title = langData[newsItem.titleKey] || newsItem.titleKey;
        const content = langData[newsItem.contentKey] || newsItem.contentKey;
        
        article.innerHTML = `
            <div class="news-card-content">
                <div class="news-card-header">
                    <h3 class="news-card-title">${title}</h3>
                    <div class="news-date-badge">
                        ${fullDate}
                    </div>
                </div>
                <div class="news-card-body">
                    <div class="news-card-main">
                        <div class="news-card-left">
                            <p class="news-card-text">${content}</p>
                            <div class="news-card-tags">
                                ${newsItem.tags.map(tagKey => `<span class="news-tag">${langData[tagKey] || tagKey}</span>`).join('')}
                            </div>
                        </div>
                        ${newsItem.image ? `
                            <div class="news-card-right">
                                <div class="news-image" data-image="${newsItem.image}" data-title="${title}">
                                    <img src="${newsItem.image}" alt="${title}" />
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        return article;
    }



    setupCarousel() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Handle window resize for responsive slides
        window.addEventListener('resize', () => {
            this.handleCarouselResize();
        });
        
        this.handleCarouselResize();
    }

    handleCarouselResize() {
        // No need to change visible cards for stacked layout
        this.updateStackedCards();
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateStackedCards(true);
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateStackedCards(true);
        }
    }

    updateStackedCards(animated = false) {
        const newsCards = document.querySelectorAll('.news-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (!newsCards.length) return;
        
        if (animated) {
            // Add transition animation class
            newsCards.forEach(card => {
                card.classList.add('transitioning');
            });
            
            // Remove transition class after animation
            setTimeout(() => {
                newsCards.forEach(card => {
                    card.classList.remove('transitioning');
                });
            }, 400);
        }
        
        // Remove all position classes
        newsCards.forEach(card => {
            card.classList.remove('card-0', 'card-1', 'card-2', 'card-3', 'card-hidden');
        });
        
        // Apply stacking positions based on current slide
        newsCards.forEach((card, index) => {
            const position = index - this.currentSlide;
            
            if (position === 0) {
                card.classList.add('card-0');
            } else if (position === 1) {
                card.classList.add('card-1');
            } else if (position === 2) {
                card.classList.add('card-2');
            } else if (position === 3) {
                card.classList.add('card-3');
            } else {
                card.classList.add('card-hidden');
            }
        });
        
        // Update button states
        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentSlide >= this.totalSlides - 1;
        }
        
        this.updateCarouselIndicators();
    }

    updateCarouselIndicators() {
        const indicatorsContainer = document.getElementById('carouselIndicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${i === this.currentSlide ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                this.currentSlide = i;
                this.updateStackedCards(true);
            });
            indicatorsContainer.appendChild(dot);
        }
    }

    setupImageModal() {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('imageModalClose');
        
        if (!modal || !modalImage || !closeBtn) return;
        
        // Close modal on close button click
        closeBtn.addEventListener('click', () => {
            this.closeImageModal();
        });
        
        // Close modal on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeImageModal();
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeImageModal();
            }
        });
        
        // Handle image clicks
        document.addEventListener('click', (e) => {
            const newsImage = e.target.closest('.news-image');
            if (newsImage) {
                const imageSrc = newsImage.dataset.image;
                const title = newsImage.dataset.title;
                this.openImageModal(imageSrc, title);
            }
        });
    }

    openImageModal(imageSrc, title) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        
        if (modal && modalImage) {
            modalImage.src = imageSrc;
            modalImage.alt = title;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeImageModal() {
        const modal = document.getElementById('imageModal');
        
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupPhoneInterface() {
        const screens = document.querySelectorAll('.interface-screen');
        if (screens.length === 0) return;

        // Start the automatic switching
        this.phoneInterfaceInterval = setInterval(() => {
            this.switchPhoneScreen();
        }, 5000);

        // Initial setup - make sure first screen is active
        screens.forEach((screen, index) => {
            screen.classList.toggle('active', index === 0);
        });
    }

    switchPhoneScreen() {
        const screens = document.querySelectorAll('.interface-screen');
        if (screens.length === 0) return;

        // Remove active class from current screen
        screens[this.currentScreen].classList.remove('active');

        // Move to next screen
        this.currentScreen = (this.currentScreen + 1) % screens.length;

        // Add active class to new screen
        screens[this.currentScreen].classList.add('active');

        // Restart animations for the new screen
        this.restartScreenAnimations(screens[this.currentScreen]);
    }

    restartScreenAnimations(screen) {
        // Force restart animations by temporarily removing and adding animation classes
        const animatedElements = screen.querySelectorAll('.interface-card, .table-row');
        animatedElements.forEach(element => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
        });
    }

    setupThemeSystem() {
        // Set initial theme button state
        this.updateThemeButton();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.currentTheme = newTheme;
        this.loadTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    loadTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeButton();
    }

    updateThemeButton() {
        const themeIcon = document.getElementById('theme-icon');
        const mobileThemeIcon = document.getElementById('mobile-theme-icon');
        
        if (themeIcon) {
            if (this.currentTheme === 'dark') {
                themeIcon.className = 'fas fa-moon';
            } else {
                themeIcon.className = 'fas fa-sun';
            }
        }
        
        if (mobileThemeIcon) {
            if (this.currentTheme === 'dark') {
                mobileThemeIcon.className = 'fas fa-moon';
            } else {
                mobileThemeIcon.className = 'fas fa-sun';
            }
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (this.isMobileMenuOpen) {
            mobileMenu.classList.add('open');
            mobileToggle.classList.add('active');
        } else {
            mobileMenu.classList.remove('open');
            mobileToggle.classList.remove('active');
        }
    }

    handleResize() {
        // Optional: Close mobile menu on large screen resize if desired
        // Removed automatic close to allow menu on desktop
    }

    handleScroll() {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = '';
        }
    }

    setupHeaderScroll() {
        // Initial header state
        this.handleScroll();
    }

    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .about-content, .stat').forEach(el => {
            observer.observe(el);
        });
    }

    setupFeatureCardAnimations() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach((card, index) => {
            // Stagger animation delay
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-12px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    handleDownloadClick() {
        // Always show download modal for all platforms including mobile
        this.showDownloadModal();
    }

    showDownloadModal() {
        // Create and show download modal for desktop users
        const modal = document.createElement('div');
        modal.className = 'download-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Download Reception App</h3>
                        <p>Choose your preferred platform to download Reception App</p>
                    </div>
                    
                    <div class="download-buttons">
                        <!-- App Store -->
                        <a href="#" class="store-btn app-store" onclick="alert('Reception App will be available on the App Store soon!')">
                            <div class="store-icon">
                                <img src="images/app-store-icon.png" alt="App Store">
                            </div>
                            <div class="store-info">
                                <div class="store-subtitle">Download on the</div>
                                <div class="store-title">App Store</div>
                            </div>
                        </a>
                        
                        <!-- Google Play -->
                        <a href="#" class="store-btn google-play" onclick="alert('Reception App will be available on Google Play soon!')">
                            <div class="store-icon">
                                <img src="images/google-play-icon.png" alt="Google Play">
                            </div>
                            <div class="store-info">
                                <div class="store-subtitle">GET IT ON</div>
                                <div class="store-title">Google Play</div>
                            </div>
                        </a>
                        
                        <!-- Huawei AppGallery -->
                        <a href="#" class="store-btn huawei-store" onclick="alert('Reception App will be available on AppGallery soon!')">
                            <div class="store-icon">
                                <img src="images/huawei-appgallery-icon.png" alt="AppGallery">
                            </div>
                            <div class="store-info">
                                <div class="store-subtitle">EXPLORE IT ON</div>
                                <div class="store-title">AppGallery</div>
                            </div>
                        </a>
                        
                        <!-- RuStore -->
                        <a href="#" class="store-btn ru-store" onclick="alert('Reception App will be available on RuStore soon!')">
                            <div class="store-icon">
                                <img src="images/rustore-icon.png" alt="RuStore">
                            </div>
                            <div class="store-info">
                                <div class="store-title single-line">RuStore</div>
                            </div>
                        </a>
                        
                        <!-- Direct Download -->
                        <a href="#" class="store-btn direct-download" onclick="handleDirectDownload()">
                            <div class="store-icon direct-icon">
                                <i class="fas fa-download"></i>
                            </div>
                            <div class="store-info">
                                <div class="store-subtitle">DIRECT DOWNLOAD</div>
                                <div class="store-title" id="direct-download-title">Download</div>
                            </div>
                            <div class="platform-status" id="platform-status">
                                <span class="status-badge coming-soon">Coming Soon</span>
                            </div>
                        </a>
                        
                        <!-- Platform Downloads -->
                        <div class="platform-downloads">
                            <h4>All Platforms:</h4>
                            <div class="platform-list" id="platform-list">
                                <!-- Platform status will be populated by JavaScript -->
                            </div>
                        </div>
                    </div>
                    

                    
                    <button class="close-modal">&times;</button>
                </div>
            </div>
        `;
        
        // Modal styles are now handled by CSS file
        document.body.appendChild(modal);
        
        // Update direct download button based on platform
        this.updateDirectDownloadButton();
        
        // Update platform status list
        this.updatePlatformStatusList();
        
        // Close modal handlers
        const closeModal = () => {
            document.body.removeChild(modal);
        };
        
        modal.querySelector('.close-modal').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target.className === 'modal-overlay') {
                closeModal();
            }
        });
        
        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    detectPlatform() {
        const userAgent = navigator.userAgent.toLowerCase();
        const platform = navigator.platform.toLowerCase();
        
        if (userAgent.includes('android')) {
            return 'android';
        } else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
            return 'ios';
        } else if (platform.includes('mac') || userAgent.includes('macintosh')) {
            return 'macos';
        } else if (platform.includes('win') || userAgent.includes('windows')) {
            return 'windows';
        } else if (platform.includes('linux') || userAgent.includes('linux')) {
            return 'linux';
        } else {
            return 'unknown';
        }
    }

    updateDirectDownloadButton() {
        const platform = this.detectPlatform();
        const titleElement = document.getElementById('direct-download-title');
        const statusElement = document.getElementById('platform-status');
        const releases = this.getAvailableReleases();
        const isMobile = this.isMobileDevice();
        
        if (titleElement) {
            const release = releases[platform];
            if (release && release.available) {
                // Show version info for available releases
                switch (platform) {
                    case 'windows':
                        titleElement.textContent = 'Windows Setup';
                        break;
                    case 'macos':
                        titleElement.textContent = isMobile ? 'macOS v0.7.11' : 'macOS v0.7.11';
                        break;
                    case 'android':
                        titleElement.textContent = isMobile ? 'Android APK' : 'Android v0.7.11';
                        break;
                    case 'linux':
                        titleElement.textContent = 'Linux AppImage';
                        break;
                    default:
                        titleElement.textContent = 'Download';
                }
            } else {
                // Show generic names for unavailable releases
                switch (platform) {
                    case 'windows':
                        titleElement.textContent = 'Windows Setup';
                        break;
                    case 'macos':
                        titleElement.textContent = 'macOS DMG';
                        break;
                    case 'android':
                        titleElement.textContent = 'Android APK';
                        break;
                    case 'linux':
                        titleElement.textContent = 'Linux AppImage';
                        break;
                    default:
                        titleElement.textContent = 'Download';
                }
            }
        }
        
        // Update platform status badge
        if (statusElement && releases[platform]) {
            const isAvailable = releases[platform].available;
            const badge = statusElement.querySelector('.status-badge');
            if (badge) {
                badge.textContent = isAvailable ? 'Available' : 'Coming Soon';
                badge.className = `status-badge ${isAvailable ? 'available' : 'coming-soon'}`;
            }
        }
    }

    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    updatePlatformStatusList() {
        const platformListElement = document.getElementById('platform-list');
        if (!platformListElement) return;
        
        const releases = this.getAvailableReleases();
        const platformOrder = ['windows', 'macos', 'android'];
        
        let listHTML = '';
        platformOrder.forEach(platformKey => {
            const release = releases[platformKey];
            if (release) {
                const isAvailable = release.available;
                listHTML += `
                    <div class="platform-item">
                        <div class="platform-info">
                            <span class="platform-name">${release.platform}</span>
                            <span class="platform-desc">${release.description}</span>
                        </div>
                        <span class="status-badge ${isAvailable ? 'available' : 'coming-soon'}">
                            ${isAvailable ? 'Available' : 'Coming Soon'}
                        </span>
                    </div>
                `;
            }
        });
        
        platformListElement.innerHTML = listHTML;
        
        // Add styles for platform list
        if (!document.getElementById('platform-styles')) {
            const style = document.createElement('style');
            style.id = 'platform-styles';
            style.textContent = `
                .platform-downloads {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                
                .platform-downloads h4 {
                    margin: 0 0 15px 0;
                    color: #333;
                    font-size: 16px;
                    font-weight: 600;
                }
                
                .platform-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }
                
                .platform-item:last-child {
                    border-bottom: none;
                }
                
                .platform-info {
                    display: flex;
                    flex-direction: column;
                }
                
                .platform-name {
                    font-weight: 500;
                    color: #333;
                    font-size: 14px;
                }
                
                .platform-desc {
                    font-size: 12px;
                    color: #666;
                    margin-top: 2px;
                }
                
                .status-badge {
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .status-badge.available {
                    background: #10b981;
                    color: white;
                }
                
                .status-badge.coming-soon {
                    background: #f59e0b;
                    color: white;
                }
                
                .platform-status {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
                
                .store-btn {
                    position: relative;
                }
                
                [data-theme="dark"] .platform-downloads h4 {
                    color: #fff;
                }
                
                [data-theme="dark"] .platform-name {
                    color: #fff;
                }
                
                [data-theme="dark"] .platform-desc {
                    color: #ccc;
                }
            `;
            document.head.appendChild(style);
        }
    }

    getDirectDownloadUrl() {
        const platform = this.detectPlatform();
        
        // Local releases folder URLs
        const downloadUrls = {
            windows: './releases/windows/ReceptionLocal-windows-setup-0.7.11.exe',
            macos: './releases/macos/ReceptionLocal-0.7.11.dmg',
            android: './releases/android/Reception-Local-0.7.11.apk',
            linux: './releases/linux/reception-app-linux.appimage'
        };
        
        return downloadUrls[platform] || '#';
    }

    // Check if download file exists
    async checkFileExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            // If HEAD request fails (common in local development), 
            // try a GET request with range header to minimize data transfer
            try {
                const response = await fetch(url, { 
                    method: 'GET',
                    headers: { 'Range': 'bytes=0-0' }
                });
                return response.ok || response.status === 206; // 206 = Partial Content
            } catch (fallbackError) {
                // For local development, assume files exist if they're marked as available
                // This handles cases where CORS blocks file existence checks
                console.warn('File existence check failed, assuming file exists for local development:', url);
                return true;
            }
        }
    }

    // Get available releases
    getAvailableReleases() {
        return {
            windows: {
                available: true, // Windows build is now available
                url: './releases/windows/ReceptionLocal-windows-setup-0.7.11.exe',
                fileName: 'ReceptionLocal-windows-setup-0.7.11.exe',
                platform: 'Windows',
                description: 'Windows installer (64-bit) - v0.7.11'
            },
            macos: {
                available: true, // macOS build is now available
                url: './releases/macos/ReceptionLocal-0.7.11.dmg',
                fileName: 'ReceptionLocal-0.7.11.dmg',
                platform: 'macOS',
                description: 'macOS disk image (Intel & Apple Silicon) - v0.7.11'
            },
            android: {
                available: true, // Android build is now available
                url: './releases/android/Reception-Local-0.7.11.apk',
                fileName: 'Reception-Local-0.7.11.apk',
                platform: 'Android',
                description: 'Android application package - v0.7.11'
            }
        };
    }

    showFeedbackModal() {
        const modal = document.getElementById('feedbackModal');
        if (!modal) return;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Setup modal close handlers
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset form
            const form = modal.querySelector('.feedback-form');
            if (form) {
                form.reset();
            }
        };

        // Close button
        const closeBtn = document.getElementById('feedbackModalClose');
        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }

        // Cancel button
        const cancelBtn = document.getElementById('cancelFeedback');
        if (cancelBtn) {
            cancelBtn.onclick = closeModal;
        }

        // Click outside modal
        modal.onclick = (e) => {
            if (e.target === modal || e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        };

        // Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // Form submission
        const form = modal.querySelector('.feedback-form');
        if (form) {
            form.onsubmit = (e) => {
                // Let the form submit naturally to FabForm
                setTimeout(closeModal, 1000); // Close modal after brief delay
            };
        }
    }
}

// Global function for direct download button
async function handleDirectDownload() {
    const website = window.receptionWebsite;
    if (website) {
        const platform = website.detectPlatform();
        const downloadUrl = website.getDirectDownloadUrl();
        const releases = website.getAvailableReleases();
        
        if (downloadUrl !== '#' && releases[platform]) {
            const release = releases[platform];
            
            if (release.available) {
                // Platform is marked as available, initiate download
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = release.fileName;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Show success message
                showDownloadStatus('success', `Downloading ${release.platform} version...`);
            } else {
                // Platform is not available yet
                showDownloadStatus('info', `${release.platform} version is coming soon!\n\nWe're working on bringing Reception App to ${release.platform}. Check back later for updates.`);
            }
        } else {
            showDownloadStatus('warning', 'Direct download is not available for your platform yet.');
        }
    }
}

// Function to show download status messages
function showDownloadStatus(type, message) {
    // Create status notification
    const notification = document.createElement('div');
    notification.className = `download-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '<i class="fas fa-download"></i>' : 
                  type === 'info' ? '<i class="fas fa-info-circle"></i>' : 
                  '<i class="fas fa-exclamation-triangle"></i>'}
            </div>
            <div class="notification-text">${message}</div>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .download-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            animation: slideIn 0.3s ease-out;
        }
        
        .download-notification.success {
            background: #10b981;
            color: white;
        }
        
        .download-notification.info {
            background: #3b82f6;
            color: white;
        }
        
        .download-notification.warning {
            background: #f59e0b;
            color: white;
        }
        
        .notification-content {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 18px;
            margin-top: 2px;
        }
        
        .notification-text {
            flex: 1;
            white-space: pre-line;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            margin-left: 10px;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Close notification
    const closeNotification = () => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
            if (style.parentNode) {
                document.head.removeChild(style);
            }
        }, 300);
    };
    
    notification.querySelector('.notification-close').addEventListener('click', closeNotification);
    
    // Auto close after 5 seconds
    setTimeout(closeNotification, 5000);
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.receptionWebsite = new ReceptionWebsite();
});

// Add CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .feature-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .feature-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none !important;
        }
        
        .nav-menu.mobile-open {
            display: flex !important;
        }
    }
`;

document.head.appendChild(animationStyles); 