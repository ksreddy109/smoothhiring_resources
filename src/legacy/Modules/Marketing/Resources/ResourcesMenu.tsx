import { useEffect } from 'react';

declare global {
  interface Window {
    SH_MENU_INITIALIZED?: boolean;
  }
}

export const ResourcesMenu = () => {
  useEffect(() => {
    if (document.getElementById('sh-menu-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'sh-menu-script';
    script.innerHTML = `
    (function() {
    if (window.SH_MENU_INITIALIZED) return;
    window.SH_MENU_INITIALIZED = true;
    
    const MENU_CONFIG = {
        logo: {
            text: "SmoothHiring",
            tagline: "Hire Better, Faster, Smarter",
            icon: "fa-users",
            url: "https://smoothhiring.com"
        },
        
        menus: {
            product: {
                title: "Product",
                sections: [
                    {
                        title: "Platform",
                        items: [
                            { name: "All Features", icon: "fa-th", url: "https://smoothhiring.com/all-features/" },
                            { name: "Job Posting", icon: "fa-bullhorn", url: "https://smoothhiring.com/job-distribution-software/" },
                            { name: "ATS", icon: "fa-desktop", url: "https://smoothhiring.com/applicant-tracking-system-software/" },
                        ]
                    },
                    {
                        title: "Intelligent Tools",
                        items: [
                            { name: "SmoothHiring AI", icon: "fa-robot", url: "https://smoothhiring.com/smoothhiring-ai/" },
                            { name: "Smart Matching", icon: "fa-magic", url: "https://smoothhiring.com/smart-candidate-matching-ats" },
                            { name: "Automation", icon: "fa-bolt", url: "https://smoothhiring.com/recruiting-automations-ai-ats" },
                            { name: "Auto Screening", icon: "fa-filter", url: "https://smoothhiring.com/smart-candidate-matching-ats" },
                        ]
                    },
                    {
                        title: "Source & Attract",
                        items: [
                            { name: "Multi-Job Posting", icon: "fa-sitemap", url: "https://smoothhiring.com/job-distribution-software/" },
                            { name: "Job Advertisement", icon: "fa-bullhorn", url: "https://smoothhiring.com/advertising-jobs/" },
                            { name: "Career Pages", icon: "fa-globe", url: "https://smoothhiring.com/careers-pages/" }
                        ]
                    },
                    {
                        title: "Assess & Evaluate",
                        items: [
                            { name: "Predictive Analytics", icon: "fa-chart-line", url: "https://smoothhiring.com/predictive-analytics/" },
                            { name: "Behavioral Assessments", icon: "fa-user-cog", url: "https://smoothhiring.com/behavioral-assessments/" },
                            { name: "Video Assessments", icon: "fa-video", url: "https://smoothhiring.com/video-assessments/" }
                        ]
                    },
                    {
                        title: "Manage & Hire",
                        items: [
                            { name: "Interview Management", icon: "fa-calendar-alt", url: "https://smoothhiring.com/interview-scheduling-software/" },
                            { name: "Onboarding", icon: "fa-user-plus", url: "https://smoothhiring.com/onboarding/" }
                        ]
                    },
                ],
                brainFeatures: [
                    "Get 5x Applicants",
                    "Multi-Job Posting & Sponsor Jobs",
                    "Video Assessments",
                    "Behavioral Assessments",
                    "AI Features",
                    "Dedicated Account Managers"
                ],
                brainTitle: "SmoothHiring Recruiting Suite"
            },
            
            resources: {
                title: "Resources",
                sections: [
                    {
                        title: "Templates & Tools",
                        items: [
                            { name: "Job Descriptions", icon: "fa-file-alt", url: "/resources/ai-job-description", description: "Professional templates for effective job postings" },
                            { name: "Interview Kits", icon: "fa-briefcase", url: "/resources/ai-interview-kit", description: "Structured interview guides and evaluation forms" },
                            { name: "HR Templates", icon: "fa-clipboard-list", url: "/resources", description: "Ready-to-use HR documents and workflows" }
                        ]
                    },
                    {
                        title: "Support & Learning",
                        items: [
                            { name: "Help Center", icon: "fa-question-circle", url: "https://help.smoothhiring.com/help", description: "Comprehensive guides and troubleshooting" },
                            { name: "Case Studies", icon: "fa-lightbulb", url: "https://smoothhiring.com/case-studies/", description: "Success stories and best practices" },
                            { name: "Blogs", icon: "fa-newspaper", url: "https://smoothhiring.com/blog/", description: "Latest insights and industry trends" },
                            { name: "FAQs", icon: "fa-comments", url: "https://smoothhiring.com/frequently-asked-questions/", description: "Quick answers to common questions" }
                        ]
                    }
                ],
                brainFeatures: [
                    "Get 5x Applicants",
                    "Multi-Job Posting & Sponsor Jobs",
                    "Video Assessments",
                    "Behavioral Assessments",
                    "AI Features",
                    "Dedicated Account Managers"
                ],
                brainTitle: "SmoothHiring Recruiting Suite"
            }
        },
        
        simpleLinks: [
            { name: "Pricing", url: "https://smoothhiring.com/pricing/" }
        ],
        
        actions: [
            { name: "Schedule Demo", url: "https://calendly.com/admin-1ue9/30min", type: "outline" },
            { name: "Log In", url: "https://app.smoothhiring.com/accounts/login", type: "outline" },
            { name: "Sign Up", url: "https://app.smoothhiring.com/accounts/sign-up", type: "primary", icon: "fa-rocket" }
        ],
        
        footerActions: [
            { name: "Contact Sales", icon: "fa-comments", url: "mailto:sales@smoothhiring.com" },
            { name: "Watch demo", icon: "fa-play", url: "https://www.youtube.com/watch?v=0G-WWsNUCMs" }
        ]
    };
    
    function renderMenu() {
        const nav = document.querySelector('.sh-menu-container .nav-links');
        if (!nav) return;
        
        Object.entries(MENU_CONFIG.menus).forEach(([key, menu]) => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            
            const hasBrainFeatures = menu.brainFeatures && menu.brainFeatures.length > 0;
            const isResources = key === 'resources';
            
            if (isResources) {
                const allItems = menu.sections.flatMap(section => section.items);
                
                li.innerHTML = \`
                    <a class="nav-link">
                        \${menu.title}
                        <i class="fas fa-chevron-down chevron"></i>
                    </a>
                    <div class="mega-dropdown">
                        <div class="mega-content resources-content">
                            <div class="resources-mega-main">
                                \${allItems.map(item => \`
                                    <a href="\${item.url}" class="resource-card">
                                        <div class="resource-card-header">
                                            <div class="resource-card-icon">
                                                <i class="fas \${item.icon}"></i>
                                            </div>
                                            <h4 class="resource-card-title">\${item.name}</h4>
                                        </div>
                                        <p class="resource-card-description">\${item.description}</p>
                                    </a>
                                \`).join('')}
                            </div>
                            \${hasBrainFeatures ? \`
                            <div class="brain-section">
                                <div class="brain-title">
                                    <i class="fas fa-brain"></i>
                                    <span>\${menu.brainTitle || 'Powered by SmoothHiring AI'}</span>
                                </div>
                                <ul class="brain-features">
                                    \${menu.brainFeatures.map(feature => \`
                                        <li class="brain-feature">
                                            <i class="fas fa-check"></i>
                                            <span>\${feature}</span>
                                        </li>
                                    \`).join('')}
                                </ul>
                                <a href="https://calendly.com/admin-1ue9/30min" class="schedule-demo-btn green">Schedule Demo</a>
                            </div>
                            \` : ''}
                        </div>
                        <div class="dropdown-footer">
                            \${MENU_CONFIG.footerActions.map(action => \`
                                <a href="\${action.url}" class="footer-action">
                                    <i class="fas \${action.icon}"></i>
                                    <span>\${action.name}</span>
                                </a>
                            \`).join('')}
                        </div>
                    </div>
                \`;
            } else {
                li.innerHTML = \`
                    <a class="nav-link">
                        \${menu.title}
                        <i class="fas fa-chevron-down chevron"></i>
                    </a>
                    <div class="mega-dropdown">
                        <div class="mega-content">
                            <div class="mega-main">
                                \${menu.sections.map(section => \`
                                    <div class="mega-section">
                                        <h3 class="section-title">\${section.title}</h3>
                                        <ul class="section-links">
                                            \${section.items.map(item => \`
                                                <li class="section-link">
                                                    <a href="\${item.url}">
                                                        \${item.logo ? 
                                                            \`<img src="\${item.logo}" alt="\${item.name}" class="link-logo" />\` : 
                                                            \`<i class="fas \${item.icon} link-icon"></i>\`
                                                        }
                                                        <span>\${item.name}</span>
                                                    </a>
                                                </li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                \`).join('')}
                            </div>
                            \${hasBrainFeatures ? \`
                            <div class="brain-section">
                                <div class="brain-title">
                                    <i class="fas fa-brain"></i>
                                    <span>\${menu.brainTitle || 'Powered by SmoothHiring AI'}</span>
                                </div>
                                <ul class="brain-features">
                                    \${menu.brainFeatures.map(feature => \`
                                        <li class="brain-feature">
                                            <i class="fas fa-check"></i>
                                            <span>\${feature}</span>
                                        </li>
                                    \`).join('')}
                                </ul>
                                <a href="https://calendly.com/admin-1ue9/30min" class="schedule-demo-btn green">Schedule Demo</a>
                            </div>
                            \` : ''}
                        </div>
                        <div class="dropdown-footer">
                            \${MENU_CONFIG.footerActions.map(action => \`
                                <a href="\${action.url}" class="footer-action">
                                    <i class="fas \${action.icon}"></i>
                                    <span>\${action.name}</span>
                                </a>
                            \`).join('')}
                        </div>
                    </div>
                \`;
            }
            
            nav.appendChild(li);
        });
        
        MENU_CONFIG.simpleLinks.forEach(link => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.innerHTML = \`<a href="\${link.url}" class="nav-link">\${link.name}</a>\`;
            nav.appendChild(li);
        });
    }
    
    function renderActions() {
        const actions = document.querySelector('.sh-menu-container .actions-section');
        if (!actions) return;
        
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'actions-toggle-container';
        
        MENU_CONFIG.actions.forEach(action => {
            const a = document.createElement('a');
            a.href = action.url;
            let className = 'action-toggle-btn';
            if (action.type === 'primary') className += ' active';
            if (action.type === 'demo') className += ' demo';
            a.className = className;
            
            if (action.icon) {
                a.innerHTML = \`<i class="fas \${action.icon}"></i> \${action.name}\`;
            } else {
                a.textContent = action.name;
            }
            
            toggleContainer.appendChild(a);
        });
        
        actions.appendChild(toggleContainer);
    }
    
    function renderMobileMenu() {
        const mobileNav = document.getElementById('mobile-nav-links');
        if (!mobileNav) return;
        
        Object.entries(MENU_CONFIG.menus).forEach(([key, menu]) => {
            const li = document.createElement('li');
            li.className = 'mobile-nav-item';
            
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'mobile-nav-link';
            link.innerHTML = \`
                <span>\${menu.title}</span>
                <i class="fas fa-chevron-right"></i>
            \`;
            
            const submenu = document.createElement('div');
            submenu.className = 'mobile-submenu';
            
            menu.sections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'mobile-submenu-section';
                
                const sectionTitle = document.createElement('h4');
                sectionTitle.className = 'mobile-submenu-title';
                sectionTitle.textContent = section.title;
                sectionDiv.appendChild(sectionTitle);
                
                section.items.forEach(item => {
                    const itemLink = document.createElement('a');
                    itemLink.href = item.url;
                    itemLink.className = 'mobile-submenu-link';
                    itemLink.innerHTML = \`
                        \${item.logo ? 
                            \`<img src="\${item.logo}" alt="\${item.name}" class="mobile-submenu-icon" />\` : 
                            \`<i class="fas \${item.icon}"></i>\`
                        }
                        <span>\${item.name}</span>
                    \`;
                    sectionDiv.appendChild(itemLink);
                });
                
                submenu.appendChild(sectionDiv);
            });
            
            li.appendChild(link);
            li.appendChild(submenu);
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                li.classList.toggle('active');
                
                document.querySelectorAll('.sh-menu-container .mobile-nav-item').forEach(item => {
                    if (item !== li) {
                        item.classList.remove('active');
                    }
                });
            });
            
            mobileNav.appendChild(li);
        });
        
        MENU_CONFIG.simpleLinks.forEach(link => {
            const li = document.createElement('li');
            li.className = 'mobile-nav-item';
            li.innerHTML = \`
                <a href="\${link.url}" class="mobile-nav-link">
                    <span>\${link.name}</span>
                </a>
            \`;
            mobileNav.appendChild(li);
        });
    }
    
    function toggleMobileMenu() {
        const overlay = document.querySelector('.sh-menu-container .mobile-menu-overlay');
        const panel = document.querySelector('.sh-menu-container .mobile-menu-panel');
        const mobileToggle = document.querySelector('.sh-menu-container .mobile-toggle');
        
        if (overlay && panel && mobileToggle) {
            if (overlay.classList.contains('active')) {
                overlay.classList.remove('active');
                panel.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                overlay.classList.add('active');
                panel.classList.add('active');
                mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        }
    }
    
    function closeMobileMenu() {
        const overlay = document.querySelector('.sh-menu-container .mobile-menu-overlay');
        const panel = document.querySelector('.sh-menu-container .mobile-menu-panel');
        const mobileToggle = document.querySelector('.sh-menu-container .mobile-toggle');
        
        if (overlay && panel && mobileToggle) {
            overlay.classList.remove('active');
            panel.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
    
    function toggleMenu(navItem) {
        document.querySelectorAll('.sh-menu-container .nav-item').forEach(item => {
            if (item !== navItem) {
                item.classList.remove('active');
            }
        });
        
        navItem.classList.toggle('active');
    }
    
    if (document.querySelector('.sh-menu-container')) {
        renderMenu();
        renderActions();
        renderMobileMenu();
        
        const mobileToggle = document.querySelector('.sh-menu-container .mobile-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', toggleMobileMenu);
        }
        
        const overlay = document.querySelector('.sh-menu-container .mobile-menu-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
        
        const closeBtn = document.querySelector('.sh-menu-container .mobile-menu-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobileMenu);
        }
        
        const navItems = document.querySelectorAll('.sh-menu-container .nav-item');
        navItems.forEach(navItem => {
            const navLink = navItem.querySelector('.nav-link');
            if (navLink && navItem.querySelector('.mega-dropdown')) {
                navLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleMenu(navItem);
                });
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.sh-menu-container .nav-item')) {
                document.querySelectorAll('.sh-menu-container .nav-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }
    })();
    `;

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('sh-menu-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.SH_MENU_INITIALIZED = false;
    };
  }, []);

  return (
    <>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .sh-menu-container,
        .sh-menu-container *,
        .sh-menu-container *::before,
        .sh-menu-container *::after {
            --primary-green: #74C05A;
            --dark-green: #66a84a;
            --text-dark: #2c3e50;
            --text-light: #7f8c8d;
            --glass-bg: rgba(255, 255, 255, 0.9);
            --glass-border: rgba(255, 255, 255, 0.3);
            --hover-bg: rgba(116, 192, 90, 0.08);
            --purple: #6c5ce7;
            box-sizing: border-box;
        }

        .sh-menu-container * {
            margin: 0;
            padding: 0;
        }

        .sh-menu-container .mega-menu-wrapper,
        .sh-menu-container .mobile-menu-panel {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .sh-menu-container .mega-menu-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            width: 100%;
        }

        .sh-menu-container .logo-section {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sh-menu-container .logo {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }

        .sh-menu-container .logo-icon {
            width: 100%;
            height: 30px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .sh-menu-container .logo-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .sh-menu-container .logo-text {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-dark);
        }

        .sh-menu-container .logo-tagline {
            font-size: 12px;
            color: var(--text-light);
            padding-left: 12px;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .sh-menu-container .nav-section {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 8px 16px;
            flex: 0 0 auto;
        }

        .sh-menu-container .nav-links {
            display: flex;
            list-style: none;
            gap: 4px;
            align-items: center;
        }

        .sh-menu-container .nav-item {
            position: relative;
        }

        .sh-menu-container .nav-link {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 10px 18px;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            border-radius: 8px;
            cursor: pointer;
            white-space: nowrap;
        }

        .sh-menu-container .nav-link:hover {
            background: var(--hover-bg);
            color: var(--primary-green);
            cursor: pointer;
        }

        .sh-menu-container .chevron {
            font-size: 10px;
        }

        .sh-menu-container .nav-item.active .chevron {
            transform: rotate(180deg);
        }

        .sh-menu-container .actions-section {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .sh-menu-container .actions-toggle-container {
            display: flex;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 4px;
            gap: 2px;
        }

        .sh-menu-container .action-toggle-btn {
            background: transparent;
            border: none;
            border-radius: 8px;
            padding: 12px 20px;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            white-space: nowrap;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sh-menu-container .action-toggle-btn:hover {
            color: var(--primary-green);
        }

        .sh-menu-container .action-toggle-btn i {
            font-size: 14px;
            margin-right: 4px;
        }

        .sh-menu-container .action-toggle-btn.active {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            color: white;
            box-shadow: 0 2px 8px rgba(116, 192, 90, 0.3);
        }

        .sh-menu-container .action-toggle-btn.active:hover {
            box-shadow: 0 4px 16px rgba(116, 192, 90, 0.4);
        }

        .sh-menu-container .mega-dropdown {
            position: fixed;
            top: calc(100% + 8px);
            left: 63%;
            transform: translateX(-50%);
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 24px;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
            padding: 0;
            width: 1070px;
            z-index: 1000;
            display: none;
            flex-direction: column;
        }

        .sh-menu-container .nav-item.active .mega-dropdown {
            display: flex;
        }

        .sh-menu-container .nav-item {
            position: relative;
        }

        .sh-menu-container .nav-item.active .nav-link {
            background: var(--hover-bg);
            color: var(--primary-green);
        }

        .sh-menu-container .mega-content {
            display: grid;
            grid-template-columns: 1fr 280px;
            gap: 16px;
            padding: 40px;
            flex: 1;
        }

        .sh-menu-container .mega-main {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .sh-menu-container .mega-section {
            min-width: 0;
        }

        .sh-menu-container .brain-section {
            background: white;
            padding: 24px;
            border-radius: 16px;
            position: relative;
            border: 2px solid transparent;
            background-clip: padding-box;
        }

        .sh-menu-container .brain-section::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            padding: 2px;
            background: linear-gradient(135deg, #74C05A 0%, #0ea5e9 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
        }

        .sh-menu-container .brain-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 16px;
        }

        .sh-menu-container .brain-title i {
            background: linear-gradient(135deg, #74C05A 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sh-menu-container .brain-features {
            list-style: none;
            margin-bottom: 20px;
        }

        .sh-menu-container .brain-feature {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--text-dark);
        }

        .sh-menu-container .brain-feature i {
            background: linear-gradient(135deg, #74C05A 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 12px;
        }

        .sh-menu-container .learn-more-btn {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }

        .sh-menu-container .learn-more-btn:hover {
            background: linear-gradient(135deg, #5a9f4a 0%, #66a84a 100%);
        }

        .sh-menu-container .schedule-demo-btn {
            background: linear-gradient(135deg, #74C05A 0%, #0ea5e9 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            margin-top: 16px;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .sh-menu-container .schedule-demo-btn:hover {
            box-shadow: 0 4px 12px rgba(116, 192, 90, 0.3);
        }

        .sh-menu-container .schedule-demo-btn.green {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
        }

        .sh-menu-container .schedule-demo-btn.green:hover {
            background: linear-gradient(135deg, #5a9f4a 0%, #66a84a 100%);
            box-shadow: 0 4px 12px rgba(116, 192, 90, 0.4);
        }

        .sh-menu-container .dropdown-footer {
            display: flex;
            justify-content: center;
            gap: 32px;
            padding: 24px 40px;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
            background: white;
            border-radius: 0 0 24px 24px;
        }

        .sh-menu-container .footer-action {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            padding: 8px 16px;
            border-radius: 8px;
        }

        .sh-menu-container .footer-action:hover {
            background: var(--hover-bg);
            color: var(--primary-green);
        }

        .sh-menu-container .footer-action i {
            font-size: 12px;
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sh-menu-container .section-title {
            font-size: 13px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
        }

        .sh-menu-container .section-links {
            list-style: none;
        }

        .sh-menu-container .section-link {
            margin-bottom: 1px;
        }

        .sh-menu-container .section-link a {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px 12px;
            color: var(--text-dark);
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
        }

        .sh-menu-container .section-link a:hover {
            background: var(--hover-bg);
            color: var(--primary-green);
        }

        .sh-menu-container .link-icon {
            font-size: 16px;
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            width: 18px;
            text-align: center;
        }

        .sh-menu-container .section-link a:hover .link-icon {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sh-menu-container .link-logo {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }

        .sh-menu-container .resource-card {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 0;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .sh-menu-container .resource-card:hover {
            border-color: var(--primary-green);
            box-shadow: 0 4px 16px rgba(116, 192, 90, 0.15);
            text-decoration: none;
            color: inherit;
        }

        .sh-menu-container .resource-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sh-menu-container .resource-card-icon {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            background: linear-gradient(135deg, rgba(116, 192, 90, 0.1) 0%, rgba(116, 192, 90, 0.05) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .sh-menu-container .resource-card-icon i {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sh-menu-container .resource-card-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 0;
        }

        .sh-menu-container .resource-card-description {
            font-size: 0.75rem;
            color: var(--text-light);
            line-height: 1.4;
            margin: 0;
        }

        .sh-menu-container .resources-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
        }

        .sh-menu-container .resources-mega-main {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px 12px;
        }

        .sh-menu-container .resources-content {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 32px;
            padding: 32px;
        }

        .sh-menu-container .mobile-toggle {
            display: none;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 12px 16px;
            font-size: 20px;
            color: var(--text-dark);
            cursor: pointer;
        }

        .sh-menu-container .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
        }

        .sh-menu-container .mobile-menu-overlay.active {
            display: block;
        }

        .sh-menu-container .mobile-menu-panel {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 1000;
            overflow-y: auto;
            padding: 20px;
            display: none;
        }

        .sh-menu-container .mobile-menu-panel.active {
            display: block;
        }

        .sh-menu-container .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 30px;
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 30px;
        }

        .sh-menu-container .mobile-menu-logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sh-menu-container .mobile-menu-close {
            background: none;
            border: none;
            font-size: 24px;
            color: #6b7280;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
        }

        .sh-menu-container .mobile-menu-close:hover {
            background: #f3f4f6;
        }

        .sh-menu-container .mobile-nav-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .sh-menu-container .mobile-nav-item {
            margin-bottom: 12px;
        }

        .sh-menu-container .mobile-nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 20px;
            color: #374151;
            text-decoration: none;
            border-radius: 12px;
            background: #f9fafb;
            font-size: 16px;
            font-weight: 500;
        }

        .sh-menu-container .mobile-nav-link:hover {
            background: #e5e7eb;
            color: var(--primary-green);
        }

        .sh-menu-container .mobile-nav-link.active {
            background: var(--hover-bg);
            color: var(--primary-green);
        }

        .sh-menu-container .mobile-nav-item.active .mobile-nav-link {
            background: var(--hover-bg);
            color: var(--primary-green);
        }

        .sh-menu-container .mobile-nav-item.active .mobile-nav-link i {
            transform: rotate(90deg);
        }

        .sh-menu-container .mobile-submenu {
            display: none;
            background: #f9fafb;
            border-radius: 12px;
            margin-top: 8px;
        }

        .sh-menu-container .mobile-nav-item.active .mobile-submenu {
            display: block;
            padding: 16px;
        }

        .sh-menu-container .mobile-submenu-section {
            margin-bottom: 20px;
        }

        .sh-menu-container .mobile-submenu-section:last-child {
            margin-bottom: 0;
        }

        .sh-menu-container .mobile-submenu-title {
            font-size: 12px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .sh-menu-container .mobile-submenu-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            color: #374151;
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 4px;
        }

        .sh-menu-container .mobile-submenu-link:hover {
            background: white;
            color: var(--primary-green);
        }

        .sh-menu-container .mobile-submenu-link i {
            font-size: 14px;
            color: var(--primary-green);
            width: 18px;
        }

        .sh-menu-container .mobile-submenu-icon {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }

        .sh-menu-container .mobile-actions {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e5e7eb;
        }

        .sh-menu-container .mobile-action-btn {
            display: block;
            width: 100%;
            padding: 16px 20px;
            margin-bottom: 12px;
            text-align: center;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
        }

        .sh-menu-container .mobile-action-btn i {
            font-size: 14px;
            margin-right: 6px;
        }

        .sh-menu-container .mobile-action-btn.outline {
            background: white;
            color: #374151;
            border: 2px solid #e5e7eb;
        }

        .sh-menu-container .mobile-action-btn.outline:hover {
            border-color: var(--primary-green);
            color: var(--primary-green);
        }

        .sh-menu-container .mobile-action-btn.primary {
            background: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%);
            color: white;
            border: none;
        }

        .sh-menu-container .mobile-action-btn.primary:hover {
            box-shadow: 0 8px 24px rgba(116, 192, 90, 0.4);
        }

        @media (max-width: 1024px) {
            .sh-menu-container .nav-section {
                display: none;
            }
            
            .sh-menu-container .actions-section {
                display: flex;
                gap: 8px;
            }
            
            .sh-menu-container .actions-toggle-container {
                display: none;
            }
            
            .sh-menu-container .mobile-toggle {
                display: block;
            }

            .sh-menu-container .mega-content {
                grid-template-columns: 1fr;
            }

            .sh-menu-container .mega-main {
                grid-template-columns: repeat(2, 1fr);
            }

            .sh-menu-container .resources-mega-main {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .sh-menu-container .resources-content {
                grid-template-columns: 1fr;
                gap: 24px;
            }
            
            .sh-menu-container .brain-section {
                border-left: none;
                border-top: 3px solid;
                border-image: linear-gradient(135deg, var(--primary-green) 0%, #74C05A 70%, #5a9f4a 100%) 1;
                border-radius: 0 0 24px 24px;
            }

            .sh-menu-container .mega-dropdown {
                width: 95vw;
                left: 2.5vw;
                transform: none;
            }
        }
      `,
        }}
      />

      <div className='sh-menu-container'>
        <nav className='mega-menu-wrapper'>
          <div className='logo-section'>
            <a href='https://smoothhiring.com' className='logo'>
              <div className='logo-icon'>
                <img src='https://smoothhiring.com/wp-content/uploads/2024/07/SH_AI_Logo.png' alt='SmoothHiring AI Logo' />
              </div>
            </a>
          </div>

          <div className='nav-section'>
            <ul className='nav-links'></ul>
          </div>

          <div className='actions-section'></div>

          <button className='mobile-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </nav>

        <div className='mobile-menu-overlay'></div>

        <div className='mobile-menu-panel'>
          <div className='mobile-menu-header'>
            <div className='mobile-menu-logo'>
              <a href='https://smoothhiring.com' className='logo'>
                <div className='logo-icon'>
                  <img src='https://smoothhiring.com/wp-content/uploads/2024/07/SH_AI_Logo.png' alt='SmoothHiring AI Logo' />
                </div>
              </a>
            </div>
            <button className='mobile-menu-close'>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <ul className='mobile-nav-links' id='mobile-nav-links'></ul>

          <div className='mobile-actions'>
            <a href='https://calendly.com/admin-1ue9/30min' className='mobile-action-btn outline'>
              Schedule Demo
            </a>
            <a href='https://app.smoothhiring.com/accounts/login' className='mobile-action-btn outline'>
              Log In
            </a>
            <a href='https://app.smoothhiring.com/accounts/sign-up' className='mobile-action-btn primary'>
              <i className='fas fa-rocket'></i> Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
