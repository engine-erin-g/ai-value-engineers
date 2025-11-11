// Galaxy Background Animation
function initGalaxy() {
    const canvas = document.getElementById('galaxyCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = Math.random() * canvas.width;
            this.size = Math.random() * 2;
            this.speed = Math.random() * 0.5 + 0.1;

            // Different star colors for variety
            const colors = [
                'rgba(255, 255, 255,',
                'rgba(173, 216, 255,', // Blue tint
                'rgba(255, 244, 229,', // Warm tint
                'rgba(200, 191, 231,', // Purple tint
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.z -= this.speed;

            if (this.z <= 0) {
                this.reset();
                this.z = canvas.width;
            }
        }

        draw() {
            const x = (this.x - canvas.width / 2) * (canvas.width / this.z);
            const y = (this.y - canvas.height / 2) * (canvas.width / this.z);
            const size = (canvas.width - this.z) / canvas.width * this.size;
            const opacity = Math.min((canvas.width - this.z) / canvas.width, 0.8);

            const screenX = x + canvas.width / 2;
            const screenY = y + canvas.height / 2;

            if (screenX >= 0 && screenX <= canvas.width && screenY >= 0 && screenY <= canvas.height) {
                ctx.fillStyle = this.color + opacity + ')';
                ctx.beginPath();
                ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
                ctx.fill();

                // Add glow effect for brighter stars
                if (opacity > 0.6) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color + '0.5)';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, size * 1.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
        }
    }

    // Create stars
    const stars = [];
    const numStars = 500;
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }

    // Animation loop
    function animate() {
        // Create trail effect
        ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Platform data with expertise information
const platforms = [
    {
        name: 'Celonis',
        logo: 'https://www.celonis.com/hubfs/2022_website/logos/celonis-logo-2023-color-black.svg',
        expertise: [
            'Process mining implementation and optimization',
            'Custom EMS apps development',
            'AI-powered process insights and automation',
            'Value stream analysis and optimization',
            'Integration with ERP systems (SAP, Oracle)'
        ]
    },
    {
        name: 'Palantir',
        logo: 'https://www.palantir.com/assets/xrfr7uokpv1b/2rFXi4Eyu2uYGguM6O8c8A/4c1d48a4a6d4c5e5c0c2e0c1a0d2c5c5/palantir-logo.svg',
        expertise: [
            'Foundry platform implementation',
            'Data integration and ontology design',
            'AI/ML model deployment on Palantir',
            'Custom analytics applications',
            'Enterprise data governance'
        ]
    },
    {
        name: 'Salesforce',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
        expertise: [
            'Einstein AI integration and customization',
            'Sales Cloud and Service Cloud optimization',
            'Custom AI models for CRM',
            'Workflow automation with AI',
            'Predictive analytics for sales forecasting'
        ]
    },
    {
        name: 'SAP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
        expertise: [
            'SAP AI Business Services integration',
            'S/4HANA intelligent automation',
            'ML-driven supply chain optimization',
            'Custom ABAP extensions with AI',
            'Process automation and RPA'
        ]
    },
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
        expertise: [
            'Azure AI and OpenAI integration',
            'Power Platform AI capabilities',
            'Dynamics 365 AI implementation',
            'Microsoft Copilot customization',
            'ML model deployment on Azure'
        ]
    },
    {
        name: 'ServiceNow',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg',
        expertise: [
            'AI-powered IT service management',
            'Predictive intelligence implementation',
            'Workflow automation with AI',
            'Virtual agent development',
            'Performance analytics optimization'
        ]
    },
    {
        name: 'Workday',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Workday_logo.svg',
        expertise: [
            'ML-driven workforce planning',
            'AI talent acquisition optimization',
            'Predictive analytics for HR',
            'Financial forecasting with AI',
            'Custom integration development'
        ]
    },
    {
        name: 'Oracle',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
        expertise: [
            'Oracle Cloud AI services integration',
            'Autonomous database optimization',
            'ERP process automation',
            'Predictive maintenance solutions',
            'Supply chain AI implementation'
        ]
    },
    {
        name: 'Snowflake',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
        expertise: [
            'Data warehouse optimization for AI',
            'ML model training on Snowflake',
            'Snowpark for Python AI pipelines',
            'Real-time data processing',
            'Cost optimization and governance'
        ]
    },
    {
        name: 'Databricks',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
        expertise: [
            'Lakehouse architecture design',
            'MLflow model deployment',
            'Large-scale data processing',
            'Real-time AI inference',
            'AutoML and feature engineering'
        ]
    },
    {
        name: 'Tableau',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
        expertise: [
            'AI-powered analytics dashboards',
            'Einstein Discovery integration',
            'Predictive modeling visualization',
            'Custom calculations and ML outputs',
            'Real-time data storytelling'
        ]
    },
    {
        name: 'PowerBI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        expertise: [
            'Azure ML integration',
            'AI-driven insights and narratives',
            'Custom R and Python visuals',
            'Automated ML model scoring',
            'Real-time streaming analytics'
        ]
    },
    {
        name: 'HubSpot',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
        expertise: [
            'Marketing automation with AI',
            'Lead scoring optimization',
            'Chatbot and conversational AI',
            'Predictive content recommendations',
            'Custom workflow automation'
        ]
    },
    {
        name: 'Zendesk',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg',
        expertise: [
            'AI-powered customer support',
            'Answer Bot implementation',
            'Sentiment analysis integration',
            'Automated ticket routing',
            'Customer satisfaction prediction'
        ]
    },
    {
        name: 'Slack',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
        expertise: [
            'AI chatbot development',
            'Workflow automation with AI',
            'Custom app integration',
            'Knowledge base automation',
            'Sentiment and engagement analysis'
        ]
    },
    {
        name: 'Atlassian',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Atlassian_logo.svg',
        expertise: [
            'Jira automation with AI',
            'Sprint planning optimization',
            'Bug prediction and classification',
            'Confluence content intelligence',
            'DevOps pipeline optimization'
        ]
    },
    {
        name: 'Monday.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Monday_logo.png',
        expertise: [
            'Workflow automation with AI',
            'Resource allocation optimization',
            'Project timeline prediction',
            'Custom integration development',
            'Performance analytics'
        ]
    },
    {
        name: 'Asana',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg',
        expertise: [
            'AI task prioritization',
            'Workload balancing',
            'Project risk assessment',
            'Automated status reporting',
            'Custom rule automation'
        ]
    },
    {
        name: 'DocuSign',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/DocuSign_logo.png',
        expertise: [
            'AI-powered document analysis',
            'Agreement workflow automation',
            'Contract intelligence',
            'Predictive sending',
            'Custom integration development'
        ]
    },
    {
        name: 'Adobe',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg',
        expertise: [
            'Adobe Sensei AI integration',
            'Content personalization',
            'Predictive analytics',
            'Marketing automation',
            'Experience optimization'
        ]
    },
    {
        name: 'Shopify',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
        expertise: [
            'Product recommendation engines',
            'Inventory optimization with AI',
            'Customer behavior prediction',
            'Fraud detection',
            'Dynamic pricing strategies'
        ]
    },
    {
        name: 'Stripe',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
        expertise: [
            'Fraud prevention with ML',
            'Revenue optimization',
            'Payment routing intelligence',
            'Customer lifecycle analysis',
            'Custom payment flows'
        ]
    },
    {
        name: 'Twilio',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg',
        expertise: [
            'Conversational AI implementation',
            'Sentiment analysis in communications',
            'Automated customer engagement',
            'Predictive dialing optimization',
            'Voice and chat AI integration'
        ]
    },
    {
        name: 'Zoom',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo.svg',
        expertise: [
            'Meeting insights and analytics',
            'Automated transcription and summary',
            'AI companion customization',
            'Virtual assistant integration',
            'Engagement scoring'
        ]
    },
    {
        name: 'Dropbox',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg',
        expertise: [
            'Content intelligence',
            'Smart document organization',
            'Automated workflows',
            'Search optimization',
            'Collaboration analytics'
        ]
    },
    {
        name: 'Box',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Box%2C_Inc._logo.svg',
        expertise: [
            'Box AI implementation',
            'Intelligent content management',
            'Automated classification',
            'Workflow automation',
            'Security and compliance AI'
        ]
    },
    {
        name: 'GitHub',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        expertise: [
            'Copilot integration and optimization',
            'Code review automation',
            'Security vulnerability detection',
            'CI/CD optimization with AI',
            'Developer productivity analytics'
        ]
    },
    {
        name: 'GitLab',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg',
        expertise: [
            'DevSecOps automation',
            'Code quality prediction',
            'CI/CD pipeline optimization',
            'Security scanning integration',
            'Resource allocation optimization'
        ]
    },
    {
        name: 'AWS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        expertise: [
            'SageMaker model deployment',
            'Bedrock foundation model integration',
            'Cost optimization with AI',
            'Infrastructure automation',
            'ML pipeline orchestration'
        ]
    },
    {
        name: 'Google Cloud',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
        expertise: [
            'Vertex AI implementation',
            'BigQuery ML optimization',
            'Custom model deployment',
            'Cloud cost optimization',
            'AI pipeline automation'
        ]
    },
    {
        name: 'IBM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        expertise: [
            'Watson AI integration',
            'Cloud Pak deployment',
            'AI governance implementation',
            'Enterprise AI strategy',
            'Hybrid cloud optimization'
        ]
    },
    {
        name: 'Notion',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
        expertise: [
            'Notion AI customization',
            'Knowledge base optimization',
            'Automated documentation',
            'Workflow intelligence',
            'Team productivity analytics'
        ]
    },
    {
        name: 'Airtable',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg',
        expertise: [
            'Automated workflow creation',
            'Data enrichment with AI',
            'Custom app development',
            'Predictive field population',
            'Integration automation'
        ]
    },
    {
        name: 'Miro',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Miro_logo.svg',
        expertise: [
            'Visual collaboration enhancement',
            'AI-powered brainstorming',
            'Automated board organization',
            'Meeting insights extraction',
            'Team collaboration analytics'
        ]
    },
    {
        name: 'Figma',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        expertise: [
            'Design automation with AI',
            'Component generation',
            'Accessibility optimization',
            'Design system intelligence',
            'Collaboration workflow enhancement'
        ]
    },
    {
        name: 'Intercom',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Intercom-logo.svg',
        expertise: [
            'Conversational AI implementation',
            'Customer engagement optimization',
            'Automated support workflows',
            'Predictive customer success',
            'Sentiment analysis integration'
        ]
    },
    {
        name: 'Mailchimp',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mailchimp_Logo.svg',
        expertise: [
            'Campaign optimization with AI',
            'Audience segmentation',
            'Content recommendations',
            'Send time optimization',
            'Predictive analytics'
        ]
    },
    {
        name: 'Zapier',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Zapier_logo.svg',
        expertise: [
            'Intelligent automation workflows',
            'AI-powered data transformation',
            'Smart error handling',
            'Conditional logic optimization',
            'Integration orchestration'
        ]
    },
    {
        name: 'QuickBooks',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/QuickBooks_logo.svg',
        expertise: [
            'Financial forecasting with AI',
            'Automated categorization',
            'Cash flow prediction',
            'Expense optimization',
            'Tax compliance automation'
        ]
    },
    {
        name: 'NetSuite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/NetSuite_logo.svg',
        expertise: [
            'ERP process automation',
            'Financial planning optimization',
            'Supply chain intelligence',
            'Revenue recognition automation',
            'Predictive analytics'
        ]
    },
    {
        name: 'Zoho',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Zoho_logo.svg',
        expertise: [
            'Zia AI implementation',
            'CRM automation',
            'Sales prediction',
            'Customer sentiment analysis',
            'Business intelligence'
        ]
    }
];

// Carousel variables
let carousel;
let carouselWrapper;
let icons = [];
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

// Generate color based on name for consistent branding
function getColorForPlatform(name) {
    const colors = {
        'Celonis': '#0091DA',
        'Palantir': '#101820',
        'Salesforce': '#00A1E0',
        'SAP': '#0FAAFF',
        'Microsoft': '#00A4EF',
        'ServiceNow': '#62D84E',
        'Workday': '#FF6B35',
        'Oracle': '#F80000',
        'Snowflake': '#29B5E8',
        'Databricks': '#FF3621',
        'Tableau': '#E97627',
        'PowerBI': '#F2C811',
        'HubSpot': '#FF7A59',
        'Zendesk': '#03363D',
        'Slack': '#4A154B',
        'Atlassian': '#0052CC',
        'Monday.com': '#FF3D57',
        'Asana': '#F06A6A',
        'DocuSign': '#FFB700',
        'Adobe': '#FF0000',
        'Shopify': '#96BF48',
        'Stripe': '#635BFF',
        'Twilio': '#F22F46',
        'Zoom': '#2D8CFF',
        'Dropbox': '#0061FF',
        'Box': '#0061D5',
        'GitHub': '#181717',
        'GitLab': '#FC6D26',
        'AWS': '#FF9900',
        'Google Cloud': '#4285F4',
        'IBM': '#0530AD',
        'Notion': '#000000',
        'Airtable': '#FCB400',
        'Miro': '#FFD02F',
        'Figma': '#F24E1E',
        'Intercom': '#1F8DED',
        'Mailchimp': '#FFE01B',
        'Zapier': '#FF4A00',
        'QuickBooks': '#2CA01C',
        'NetSuite': '#FF6700',
        'Zoho': '#F7941D'
    };
    return colors[name] || `hsl(${name.charCodeAt(0) * 7}, 70%, 50%)`;
}

// Initialize carousel
function initCarousel() {
    carousel = document.getElementById('platformCarousel');
    carouselWrapper = carousel.parentElement;

    platforms.forEach((platform, index) => {
        const icon = document.createElement('div');
        icon.className = 'platform-icon';
        icon.dataset.index = index;

        // Create logo container with color background
        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';
        logoContainer.style.background = getColorForPlatform(platform.name);
        logoContainer.style.borderRadius = '12px';
        logoContainer.style.display = 'flex';
        logoContainer.style.alignItems = 'center';
        logoContainer.style.justifyContent = 'center';
        logoContainer.style.overflow = 'hidden';

        // Create actual logo image
        const img = document.createElement('img');
        img.src = platform.logo;
        img.alt = platform.name;
        img.style.width = '80%';
        img.style.height = '80%';
        img.style.objectFit = 'contain';
        img.crossOrigin = 'anonymous';

        // Fallback to initials if logo fails to load
        img.onerror = function() {
            this.style.display = 'none';
            const initials = document.createElement('div');
            initials.style.color = 'white';
            initials.style.fontWeight = 'bold';
            initials.style.fontSize = '1.5rem';
            initials.style.textShadow = '0 2px 4px rgba(0,0,0,0.2)';

            // Smart initials - handle different formats
            let initialsText = '';
            if (platform.name.includes('.')) {
                initialsText = platform.name.split('.')[0].substring(0, 2).toUpperCase();
            } else if (platform.name.includes(' ')) {
                const words = platform.name.split(' ');
                initialsText = words.map(w => w[0]).join('').substring(0, 2).toUpperCase();
            } else {
                initialsText = platform.name.substring(0, 2).toUpperCase();
            }

            initials.textContent = initialsText;
            logoContainer.appendChild(initials);
        };

        logoContainer.appendChild(img);

        const label = document.createElement('span');
        label.textContent = platform.name;

        icon.appendChild(logoContainer);
        icon.appendChild(label);
        icon.addEventListener('click', () => openModal(platform));

        carousel.appendChild(icon);
        icons.push(icon);
    });

    // Set initial position to center first item
    currentIndex = 0;
    updateCarousel();
    setupDragging();
    setupNavButtons();
}

// Update carousel position and highlight center item
function updateCarousel(smooth = true) {
    const containerWidth = carouselWrapper.offsetWidth;
    const iconWidth = 140; // Width of icon
    const gap = 40; // Gap between icons
    const itemWidth = iconWidth + gap;

    // Calculate position to center the current item
    const offset = containerWidth / 2 - iconWidth / 2 - (currentIndex * itemWidth);

    carousel.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
    carousel.style.transform = `translateX(${offset}px)`;

    // Update classes for center highlighting
    icons.forEach((icon, index) => {
        icon.classList.remove('center', 'near-center');

        if (index === currentIndex) {
            icon.classList.add('center');
        } else if (Math.abs(index - currentIndex) === 1) {
            icon.classList.add('near-center');
        }
    });
}

// Setup dragging
function setupDragging() {
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('touchmove', drag);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('mouseleave', dragEnd);
    carousel.addEventListener('touchend', dragEnd);
}

function dragStart(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    prevTranslate = currentTranslate;
    carousel.style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const currentPosition = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startX;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;

    // Determine if we should go to next or previous
    if (movedBy < -50 && currentIndex < platforms.length - 1) {
        currentIndex++;
    } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex--;
    }

    currentTranslate = 0;
    prevTranslate = 0;
    updateCarousel();
}

// Setup navigation buttons
function setupNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < platforms.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
}

// Modal functionality
function openModal(platform) {
    const modal = document.getElementById('platformModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${platform.logo}" alt="${platform.name}" class="modal-icon" onerror="this.style.display='none'">
            <h2>${platform.name}</h2>
        </div>
        <div class="modal-body">
            <h3>Our Expertise</h3>
            <ul>
                ${platform.expertise.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border-color); color: var(--text-light);">
                Ready to implement AI with ${platform.name}? <a href="#contact" style="color: var(--primary-color); font-weight: 600;">Get in touch</a> and we'll show you the value first.
            </p>
        </div>
    `;

    modal.style.display = 'block';

    // Close modal when clicking the X or outside
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.style.display = 'none';
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            platforms: document.getElementById('platforms').value,
            message: document.getElementById('message').value
        };

        // Create mailto link
        const subject = encodeURIComponent(`AI Implementation Inquiry from ${formData.company}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Platforms: ${formData.platforms}

Message:
${formData.message}
        `);

        window.location.href = `mailto:er.ndrio@gmail.com?subject=${subject}&body=${body}`;

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Opening your email client... Thank you for your interest!';
        form.appendChild(successMsg);

        // Reset form
        setTimeout(() => {
            form.reset();
            successMsg.remove();
        }, 3000);
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initGalaxy();
    initCarousel();
    setupContactForm();
    setupSmoothScrolling();
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel(false);
    }, 250);
});
