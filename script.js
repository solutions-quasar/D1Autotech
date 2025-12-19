// Hardcoded content to avoid CORS issues when opening file:// locally
const siteContent = {
    "_comment": "EDITING GUIDE: This file controls the website content. Change text inside the quotes. Do not break the syntax (commas, braces).",
    "company_info": {
        "name": "D1 Autotech Ltd.",
        "logo_image": "assets/images/d1-logo.jpg",
        "phone": "(506) 872-2024",
        "email": "info@d1autotech.com",
        "address": "591 Ferdinand Blvd, Dieppe, NB, Canada",
        "map_link": "https://maps.google.com/?q=591+Ferdinand+Blvd,+Dieppe,+NB,+Canada",
        "facebook": "https://www.facebook.com/d1.autotech.ltd/",
        "booking_link": "#contact"
    },
    "hero": {
        "headline": "Precision service for European, exotic & luxury vehicles.",
        "subhead": "Diagnostics, repair, and performance prep in Dieppe, NB.",
        "hero_image": "assets/images/hero-ferrari.jpg",
        "cta_primary": "Call (506) 872-2024",
        "cta_secondary": "Request Appointment",
        "trust_chips": [
            "Dealer-level diagnostics",
            "Clear communication",
            "Premium care"
        ]
    },
    "services": [
        { "title": "Complete vehicle check-up", "description": "" },
        { "title": "High-performance driving vehicle preparation", "description": "" },
        { "title": "Motor Vehicle Inspection station", "description": "" },
        { "title": "Dealer-level computer diagnostics", "description": "" },
        { "title": "Preventive maintenance", "description": "" },
        { "title": "OEM-quality parts", "description": "" },
        { "title": "Drivability diagnostic", "description": "" },
        { "title": "Synthetic oil changes and warranty-approved maintenance", "description": "" },
        { "title": "Steering and suspension", "description": "" },
        { "title": "Low profile tire mounting and balancing", "description": "" },
        { "title": "Brake repair and replacement", "description": "" },
        { "title": "Engine timing components", "description": "" }
    ],
    "how_it_works": {
        "steps": [
            {
                "title": "Describe the Issue",
                "detail": "Call us or use the form to tell us what's going on with your vehicle."
            },
            {
                "title": "Diagnose & Confirm",
                "detail": "We bring your car in, diagnose the root cause, and explain the fix clearly."
            },
            {
                "title": "Repair & Drive",
                "detail": "We perform precision repairs, quality check, and get you back on the road."
            }
        ]
    },
    "gallery": [
        "assets/images/hero-ferrari.jpg",
        "assets/images/work-exhaust.jpg",
        "assets/images/service-diagnostics.jpg",
        "assets/images/location-exterior.jpg",
        "assets/images/310225971_106780628881819_900903078335523923_n.jpg",
        "assets/images/481985855_619114217655967_8922319088735024456_n.jpg",
        "assets/images/482081975_618535977713791_4859700661309359976_n.jpg",
        "assets/images/482193023_619277150973007_5465940921135020776_n.jpg",
        "assets/images/482209862_620930637474325_6545866894111550622_n.jpg",
        "assets/images/482215174_622055137361875_6011716415018276136_n.jpg",
        "assets/images/482238807_620929414141114_5912747754148650258_n.jpg",
        "assets/images/482245027_625273820373340_7102306278412448825_n.jpg",
        "assets/images/482269960_618535981047124_8606583955973082804_n.jpg",
        "assets/images/482345796_619111264322929_5165640408216853210_n.jpg",
        "assets/images/483864893_622754410625281_440237816963926089_n.jpg",
        "assets/images/485377838_629025209998201_3152119709184019195_n.jpg",
        "assets/images/489539731_644080841825971_810988158693778836_n.jpg",
        "assets/images/491442595_18025783232663938_5585044676275674532_n.jpg",
        "assets/images/503459015_683722184528503_6825130122854545310_n.jpg",
        "assets/images/507139089_692908043609917_3261704001280698205_n.jpg",
        "assets/images/534914346_744903545077033_5311119243839487255_n.jpg",
        "assets/images/536270143_753183547582366_7170083178144879981_n.jpg",
        "assets/images/536273917_753183550915699_4062665685696567768_n.jpg",
        "assets/images/540728164_753183557582365_2688749470887215397_n.jpg",
        "assets/images/565671939_792972366936817_1919073757880728420_n.jpg",
        "assets/images/568141683_796474016586652_1974222675607501767_n.jpg",
        "assets/images/596609152_837471219153598_3486776994907087203_n.jpg",
        "assets/images/598387630_837471215820265_6570299393363112959_n.jpg"
    ],
    "testimonials": [
        {
            "text": "Incredible service. They diagnosed my BMW when two other shops couldn't. Highly recommended.",
            "author": "Local Client"
        },
        {
            "text": "Professional, clean shop, and clear communication. D1 is the only place I trust with my Porsche.",
            "author": "Enthusiast Driver"
        },
        {
            "text": "Great experience. Fast turnaround and fair pricing for luxury car service in Dieppe.",
            "author": "Satisfied Customer"
        }
    ],
    "location": {
        "hours": [
            {
                "day": "Monday - Friday",
                "time": "8:00 AM - 5:00 PM"
            },
            {
                "day": "Saturday",
                "time": "Closed"
            },
            {
                "day": "Sunday",
                "time": "Closed"
            }
        ],
        "service_area": "Serving Dieppe, Moncton, Riverview & surrounding areas."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Instead of fetch, we use the local variable
    loadContent(siteContent);
    setupMobileMenu();
    setupLightbox();
});

function loadContent(data) {
    // Apply Company Info generally if needed, or mostly specific sections below
    updateLogo(data.company_info);
    populateHero(data.hero, data.gallery);
    populateServices(data.services);
    populateHowItWorks(data.how_it_works);
    populateGallery(data.gallery);
    populateReviews(data.testimonials);
    populateLocations(data.location, data.company_info);
    populateFooter(data.company_info);
}

function updateLogo(company) {
    if (company.logo_image) {
        const logoEl = document.querySelector('.logo');
        if (logoEl) {
            // Replace text with image
            logoEl.innerHTML = `<img src="${company.logo_image}" alt="${company.name}" style="height: 90px; width: auto;">`;
            logoEl.style.display = 'flex';
            logoEl.style.alignItems = 'center';
        }
    }
}

function populateHero(hero, gallery) {
    document.getElementById('hero-headline').textContent = hero.headline;
    document.getElementById('hero-subhead').textContent = hero.subhead;

    document.getElementById('hero-cta-primary').textContent = hero.cta_primary;
    document.getElementById('hero-cta-secondary').textContent = hero.cta_secondary;

    // Trust Chips
    const chipsContainer = document.getElementById('hero-chips');
    chipsContainer.innerHTML = '';
    hero.trust_chips.forEach(chip => {
        const span = document.createElement('span');
        span.className = 'hero-chip';
        span.textContent = chip;
        chipsContainer.appendChild(span);
    });

    // Hero Image
    const bgImage = hero.hero_image || (gallery && gallery.length > 0 ? gallery[0] : null);
    if (bgImage) {
        const imgEl = document.getElementById('hero-img');
        if (imgEl) {
            imgEl.src = bgImage;
        }
    }
}

function populateServices(services) {
    const container = document.getElementById('services-grid');
    container.innerHTML = '';
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.innerHTML = `
            <h3 class="service-title">${service.title}</h3>
        `;
        container.appendChild(div);
    });
}

function populateHowItWorks(data) {
    const container = document.getElementById('steps-grid');
    container.innerHTML = '';
    data.steps.forEach((step, index) => {
        const div = document.createElement('div');
        div.className = 'step-item';
        div.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <h3 class="step-title">${step.title}</h3>
            <p class="step-detail">${step.detail}</p>
        `;
        container.appendChild(div);
    });
}

function populateGallery(images) {
    const container = document.getElementById('gallery-grid');
    container.innerHTML = '';
    // Limit to 12 images for performance
    const displayImages = images.slice(0, 12);
    displayImages.forEach(src => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.onclick = () => openLightbox(src);

        const img = document.createElement('img');
        img.src = src;
        img.alt = "D1 Autotech Work";
        img.loading = "lazy";

        div.appendChild(img);
        container.appendChild(div);
    });
}

function populateReviews(reviews) {
    const container = document.getElementById('reviews-grid');
    container.innerHTML = '';
    reviews.forEach(review => {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
            <div class="review-content">
                <p class="review-text">${review.text}</p>
                <p class="review-author">- ${review.author}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function populateLocations(location, company) {
    document.getElementById('contact-address').textContent = location.service_area ? `${company.address}` : company.address;

    // Wire up links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => link.href = `tel:${company.phone.replace(/[^0-9]/g, '')}`);
    document.getElementById('contact-email').textContent = company.email;
    document.getElementById('contact-email').href = `mailto:${company.email}`;

    // Hours
    const table = document.getElementById('hours-table');
    table.innerHTML = '';
    location.hours.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.day}</td><td>${row.time}</td>`;
        table.appendChild(tr);
    });
}

function populateFooter(company) {
    document.getElementById('year').textContent = new Date().getFullYear();
    // Could add address/phone here too if needed
}

/* MOBILE MENU */
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const links = document.querySelectorAll('.mobile-nav-overlay a');

    // Open
    btn.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    // Close Button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }

    // Close on Link Click
    links.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    });
}

/* LIGHTBOX */
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.classList.add('active');
}
