/* ========================================
   SRM Casablanca-Settat - Script v3
   Version: 20260130_192732
   ======================================== */

// DataLayer pour GTM
window.dataLayer = window.dataLayer || [];

// Fonction pour envoyer des events GTM
function trackEvent(eventName, eventParams) {
    dataLayer.push({
        'event': eventName,
        ...eventParams
    });
}

// Couleurs par thème
const colors = {
    blue: '#2196C9',
    green: '#43A047',
    orange: '#F5871F',
    gray: '#5F6368'
};

// Postes pour les Cadres (Bac+5)
const postesData = {
    ingenieur: {
        title: "Postes Ingénieur d'État",
        titleAr: "مناصب مهندس دولة",
        items: [
            { id: 1, titre: "Ingénieur Génie Civil", lien: "#" },
            { id: 2, titre: "Ingénieur Hydraulique", lien: "#" },
            { id: 3, titre: "Ingénieur Électromécanique", lien: "#" },
            { id: 4, titre: "Ingénieur Qualité", lien: "#" },
            { id: 5, titre: "Ingénieur Informatique", lien: "#" },
        ]
    },
    master: {
        title: "Postes Master",
        titleAr: "مناصب ماستر",
        items: [
            { id: 1, titre: "Chargé d'Études RH", lien: "#" },
            { id: 2, titre: "Contrôleur de Gestion", lien: "#" },
            { id: 3, titre: "Chargé de Communication", lien: "#" },
            { id: 4, titre: "Juriste", lien: "#" },
            { id: 5, titre: "Auditeur Interne", lien: "#" },
        ]
    }
};

// Profils pour Bac+2, Niveau Bac et CQP
const profilsData = {
    bac2: {
        title: "Profils Bac+2",
        titleAr: "تخصصات باك+2",
        items: [
            { id: 1, titre: "Technicien Spécialisé en Électromécanique", lien: "#" },
            { id: 2, titre: "Technicien Spécialisé en Génie Civil", lien: "#" },
            { id: 3, titre: "Technicien Spécialisé en Informatique", lien: "#" },
            { id: 4, titre: "Technicien Spécialisé en Comptabilité", lien: "#" },
            { id: 5, titre: "Technicien Spécialisé en GRH", lien: "#" },
        ]
    },
    technicien: {
        title: "Profils Niveau Bac",
        titleAr: "تخصصات مستوى الباكالوريا",
        items: [
            { id: 1, titre: "Technicien en Hydraulique", lien: "https://concours-recrutement.ma/offre-emploi-887.html" },
            { id: 2, titre: "Technicien en Électricité", lien: "#" },
            { id: 3, titre: "Technicien en Mécanique", lien: "#" },
            { id: 4, titre: "Agent Administratif", lien: "#" },
            { id: 5, titre: "Agent de Recouvrement", lien: "#" },
        ]
    },
    cqp: {
        title: "Profils CQP",
        titleAr: "تخصصات شهادة التأهيل المهني",
        items: [
            { id: 1, titre: "Agent de Réseau", lien: "#" },
            { id: 2, titre: "Agent d'Assainissement", lien: "#" },
            { id: 3, titre: "Agent de Production", lien: "#" },
            { id: 4, titre: "Agent Polyvalent", lien: "#" },
        ]
    }
};

function showPostes(segment, color) {
    const data = postesData[segment];
    if (!data) return;

    // Track event: ouverture segment
    trackEvent('segment_click', {
        'segment_type': 'postes',
        'segment_name': segment,
        'segment_title': data.title
    });

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalHeader = document.querySelector('.modal-header');

    // Appliquer la couleur
    modalHeader.style.background = colors[color] || colors.blue;
    modal.setAttribute('data-color', color);

    modalTitle.textContent = data.title;

    const list = document.createElement('div');
    list.className = 'items-list';
    data.items.forEach(poste => {
        const card = document.createElement('a');
        card.href = poste.lien;
        card.className = 'item-card';
        card.target = '_blank';
        card.onclick = function() { trackPosteClick(segment, poste.titre); };

        const info = document.createElement('div');
        info.className = 'item-info';
        const h4 = document.createElement('h4');
        h4.textContent = poste.titre;
        info.appendChild(h4);

        const action = document.createElement('div');
        action.className = 'item-action';
        const frLabel = document.createElement('span');
        frLabel.textContent = 'Postuler';
        action.appendChild(frLabel);
        action.insertAdjacentHTML('beforeend', '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>');

        card.appendChild(info);
        card.appendChild(action);
        list.appendChild(card);
    });

    modalBody.replaceChildren(list);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showProfils(segment, color) {
    const data = profilsData[segment];
    if (!data) return;

    // Track event: ouverture segment
    trackEvent('segment_click', {
        'segment_type': 'profils',
        'segment_name': segment,
        'segment_title': data.title
    });

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalHeader = document.querySelector('.modal-header');

    // Appliquer la couleur
    modalHeader.style.background = colors[color] || colors.blue;
    modal.setAttribute('data-color', color);

    modalTitle.textContent = data.title;

    const list = document.createElement('div');
    list.className = 'items-list';
    data.items.forEach(profil => {
        const card = document.createElement('a');
        card.href = profil.lien;
        card.className = 'item-card';
        card.target = '_blank';
        card.onclick = function() { trackProfilClick(segment, profil.titre); };

        const info = document.createElement('div');
        info.className = 'item-info';
        const h4 = document.createElement('h4');
        h4.textContent = profil.titre;
        info.appendChild(h4);

        const action = document.createElement('div');
        action.className = 'item-action';
        const frLabel = document.createElement('span');
        frLabel.textContent = 'Postuler';
        action.appendChild(frLabel);
        action.insertAdjacentHTML('beforeend', '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>');

        card.appendChild(info);
        card.appendChild(action);
        list.appendChild(card);
    });

    modalBody.replaceChildren(list);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Track clic sur un poste
function trackPosteClick(segment, posteTitle) {
    trackEvent('poste_click', {
        'segment_name': segment,
        'poste_title': posteTitle
    });
}

// Track clic sur un profil
function trackProfilClick(segment, profilTitle) {
    trackEvent('profil_click', {
        'segment_name': segment,
        'profil_title': profilTitle
    });
}

// Track changement d'onglet FR/AR
function trackTabChange(lang) {
    trackEvent('tab_change', {
        'language': lang
    });
}

// ========================================
// Barre de recherche - suggestions
// ========================================

function buildSearchIndex() {
    const index = [];

    const niveauLabels = {
        ingenieur: { label: "Ingénieur d'État", color: "blue" },
        master: { label: "Master", color: "blue" }
    };
    for (const [key, data] of Object.entries(postesData)) {
        const niveau = niveauLabels[key];
        data.items.forEach(item => {
            index.push({
                titre: item.titre,
                lien: item.lien,
                niveau: niveau.label,
                color: niveau.color
            });
        });
    }

    const profilLabels = {
        bac2: { label: "Bac+2", color: "green" },
        technicien: { label: "Technicien", color: "orange" },
        cqp: { label: "CQP", color: "gray" }
    };
    for (const [key, data] of Object.entries(profilsData)) {
        const niveau = profilLabels[key];
        data.items.forEach(item => {
            index.push({
                titre: item.titre,
                lien: item.lien,
                niveau: niveau.label,
                color: niveau.color
            });
        });
    }

    return index;
}

const searchIndex = buildSearchIndex();

function createSuggestionItem(item) {
    const link = document.createElement('a');
    link.href = item.lien;
    link.target = '_blank';
    link.className = 'suggestion-item';
    link.dataset.titre = item.titre;

    const name = document.createElement('span');
    name.className = 'suggestion-name';
    name.textContent = item.titre;

    const badge = document.createElement('span');
    badge.className = 'suggestion-badge ' + item.color;
    badge.textContent = item.niveau;

    link.appendChild(name);
    link.appendChild(badge);
    return link;
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-poste');
    const suggestionsBox = document.getElementById('search-suggestions');

    if (!searchInput || !suggestionsBox) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        suggestionsBox.replaceChildren();

        if (query.length === 0) {
            suggestionsBox.classList.remove('active');
            return;
        }

        const results = searchIndex.filter(item =>
            item.titre.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            const noResult = document.createElement('div');
            noResult.className = 'search-no-result';
            noResult.textContent = 'Aucun poste trouvé';
            suggestionsBox.appendChild(noResult);
            suggestionsBox.classList.add('active');
            return;
        }

        results.forEach(item => {
            suggestionsBox.appendChild(createSuggestionItem(item));
        });

        suggestionsBox.classList.add('active');
    });

    // Fermer les suggestions au clic en dehors
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.remove('active');
        }
    });

    // Track clic sur suggestion
    suggestionsBox.addEventListener('click', function(e) {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            trackEvent('search_suggestion_click', {
                'poste_title': item.dataset.titre
            });
        }
    });
});

// ========================================
// Carousel
// ========================================

let currentSlide = 0;
let carouselLang = 'fr';
let carouselInterval = null;
const totalSlides = 4;

function goToSlide(index) {
    currentSlide = index;
    var slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === currentSlide);
    });
    updateDots();
}

var carouselHovered = false;

function goToSlideManual(index) {
    clearInterval(carouselInterval);
    goToSlide(index);
    if (!carouselHovered) startAutoSlide();
}

function carouselNext() {
    goToSlide((currentSlide + 1) % totalSlides);
}

function carouselPrev() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function carouselNextManual() {
    goToSlideManual((currentSlide + 1) % totalSlides);
}

function carouselPrevManual() {
    goToSlideManual((currentSlide - 1 + totalSlides) % totalSlides);
}

function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function toggleCarouselLang() {
    carouselLang = carouselLang === 'fr' ? 'ar' : 'fr';

    // Toggle button
    var frOption = document.querySelector('.lang-option.lang-fr');
    var arOption = document.querySelector('.lang-option.lang-ar');
    frOption.classList.toggle('active', carouselLang === 'fr');
    arOption.classList.toggle('active', carouselLang === 'ar');

    // Toggle slide contents
    var frSlides = document.querySelectorAll('.slide-fr');
    var arSlides = document.querySelectorAll('.slide-ar');
    frSlides.forEach(function(el) { el.style.display = carouselLang === 'fr' ? '' : 'none'; });
    arSlides.forEach(function(el) { el.style.display = carouselLang === 'ar' ? '' : 'none'; });

    // Toggle map titles
    var mapTitleFr = document.querySelector('.map-title-fr');
    var mapTitleAr = document.querySelector('.map-title-ar');
    if (mapTitleFr) mapTitleFr.style.display = carouselLang === 'fr' ? '' : 'none';
    if (mapTitleAr) mapTitleAr.style.display = carouselLang === 'ar' ? '' : 'none';

    trackEvent('carousel_lang_toggle', { 'language': carouselLang });
}

function startAutoSlide() {
    carouselInterval = setInterval(carouselNext, 6000);
}

function resetAutoSlide() {
    clearInterval(carouselInterval);
}

// Données besoins PR 2026 par province
var regionData = {
    'Casablanca': {
        total: 488,
        profils: [['Électricité', 242], ['Hydraulique', 100], ['Gestion', 48], ['Électromécanique', 14], ['Laboratoire', 14], ['Automatisme', 11], ['Informatique', 6], ['RH', 6], ['Logistique', 6], ['Qualité & Sécurité', 5]]
    },
    'Sidi Bennour': {
        total: 81,
        profils: [['Électricité', 40], ['Hydraulique', 19], ['Gestion', 11], ['Logistique', 3], ['Électromécanique', 2], ['Hydrocurage', 2]]
    },
    'Benslimane': {
        total: 78,
        profils: [['Électricité', 36], ['Hydraulique', 27], ['Gestion', 11], ['Logistique', 2], ['Achat', 1], ['Droit', 1]]
    },
    'Nouaceur': {
        total: 71,
        profils: [['Hydraulique', 42], ['Électricité', 17], ['Gestion', 9], ['Logistique', 2], ['Secrétariat', 1]]
    },
    'Settat': {
        total: 67,
        profils: [['Électricité', 36], ['Gestion', 14], ['Hydraulique', 11], ['Hydrocurage', 2], ['Achat', 1], ['Infirmerie', 1]]
    },
    'Berrechid': {
        total: 64,
        profils: [['Électricité', 25], ['Hydraulique', 18], ['Gestion', 10], ['Hydrocurage', 7], ['Électromécanique', 1], ['Logistique', 1]]
    },
    'Médiouna': {
        total: 62,
        profils: [['Hydraulique', 32], ['Électricité', 24], ['Gestion', 3], ['Logistique', 1], ['Secrétariat', 1], ['Informatique', 1]]
    },
    'El Jadida': {
        total: 53,
        profils: [['Électricité', 26], ['Hydraulique', 20], ['Gestion', 7]]
    },
    'Mohammedia': {
        total: 37,
        profils: [['Électricité', 25], ['Hydraulique', 7], ['Gestion', 5]]
    }
};

function buildTooltipContent(name, data) {
    var header = document.createElement('div');
    header.className = 'map-tooltip-header';
    var headerName = document.createElement('span');
    headerName.textContent = name;
    header.appendChild(headerName);
    var count = document.createElement('span');
    count.className = 'map-tooltip-count';
    count.textContent = data.total + ' postes';
    header.appendChild(count);

    var body = document.createElement('div');
    body.className = 'map-tooltip-body';

    // Show top 6 profils max
    var maxItems = Math.min(data.profils.length, 6);
    for (var i = 0; i < maxItems; i++) {
        var p = data.profils[i];
        var row = document.createElement('div');
        row.className = 'map-tooltip-row';
        var label = document.createElement('span');
        label.className = 'map-tooltip-label';
        label.textContent = p[0];
        var nb = document.createElement('span');
        nb.className = 'map-tooltip-nb';
        nb.textContent = p[1];
        row.appendChild(label);
        row.appendChild(nb);
        body.appendChild(row);
    }

    if (data.profils.length > 6) {
        var more = document.createElement('div');
        more.className = 'map-tooltip-more';
        more.textContent = '+ ' + (data.profils.length - 6) + ' autres profils';
        body.appendChild(more);
    }

    return { header: header, body: body };
}

// Load map SVG
function loadMapSvg() {
    var container = document.getElementById('map-container');
    if (!container) return;

    var tooltip = document.getElementById('map-tooltip');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'map-region.svg', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var parser = new DOMParser();
            var svgDoc = parser.parseFromString(xhr.responseText, 'image/svg+xml');
            var svg = svgDoc.documentElement;
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.style.width = '100%';
            svg.style.height = 'auto';
            container.appendChild(svg);

            var paths = svg.querySelectorAll('.province-path');
            paths.forEach(function(path) {
                path.addEventListener('mouseenter', function(e) {
                    var name = this.getAttribute('data-name');
                    if (!name || !regionData[name]) return;
                    this.style.opacity = '0.85';

                    var data = regionData[name];
                    var content = buildTooltipContent(name, data);
                    tooltip.replaceChildren(content.header, content.body);
                    tooltip.classList.add('visible');
                });

                path.addEventListener('mousemove', function(e) {
                    var x = e.clientX + 15;
                    var y = e.clientY - 10;
                    // Empêcher le tooltip de sortir de l'écran
                    if (x + 280 > window.innerWidth) x = e.clientX - 290;
                    if (y + 200 > window.innerHeight) y = e.clientY - 200;
                    tooltip.style.left = x + 'px';
                    tooltip.style.top = y + 'px';
                });

                path.addEventListener('mouseleave', function() {
                    this.style.opacity = '1';
                    tooltip.classList.remove('visible');
                });
            });
        }
    };
    xhr.send();
}

// Init carousel on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Set first slide active
    var firstSlide = document.querySelector('.carousel-slide[data-slide="0"]');
    if (firstSlide) firstSlide.classList.add('active');
    loadMapSvg();
    startAutoSlide();

    // Pause auto-slide on hover
    var carouselSection = document.querySelector('.info-map-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', function() {
            carouselHovered = true;
            clearInterval(carouselInterval);
        });
        carouselSection.addEventListener('mouseleave', function() {
            carouselHovered = false;
            startAutoSlide();
        });
    }
});

// Fermer avec Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        var suggestionsBox = document.getElementById('search-suggestions');
        if (suggestionsBox) suggestionsBox.classList.remove('active');
    }
});
