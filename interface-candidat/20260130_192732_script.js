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

// Postes Bac+5
const postesData = {
    ingenieur: {
        title: "Postes Ingénieur d'État",
        titleAr: "مناصب مهندس دولة",
        items: [
            { id: 954, titre: "Ingénieur Automaticien", lien: "https://concours-recrutement.ma/offre-emploi-954.html" },
            { id: 901, titre: "Ingénieur Electricité", lien: "https://concours-recrutement.ma/offre-emploi-901.html" },
            { id: 917, titre: "Ingénieur Formation Eau et assainissement", lien: "https://concours-recrutement.ma/offre-emploi-917.html" },
            { id: 918, titre: "Ingénieur Formation Eau et assainissement (Dessalement et Déminéralisation)", lien: "https://concours-recrutement.ma/offre-emploi-918.html" },
            { id: 956, titre: "Ingénieur Formation éléctricité", lien: "https://concours-recrutement.ma/offre-emploi-956.html" },
            { id: 923, titre: "Ingénieur Hydraulique", lien: "https://concours-recrutement.ma/offre-emploi-923.html" },
            { id: 898, titre: "Ingénieur Maintenance Electricité", lien: "https://concours-recrutement.ma/offre-emploi-898.html" },
            { id: 940, titre: "Ingénieur Système", lien: "https://concours-recrutement.ma/offre-emploi-940.html" },
            { id: 936, titre: "Ingénieur Sécurité SI", lien: "https://concours-recrutement.ma/offre-emploi-936.html" },
        ]
    },
    master: {
        title: "Postes Master",
        titleAr: "مناصب ماستر",
        items: [
            { id: 890, titre: "Acheteur", lien: "https://concours-recrutement.ma/offre-emploi-890.html" },
            { id: 914, titre: "Acheteur Eau Assainissement liquide", lien: "https://concours-recrutement.ma/offre-emploi-914.html" },
            { id: 897, titre: "Acheteur électricité", lien: "https://concours-recrutement.ma/offre-emploi-897.html" },
            { id: 939, titre: "Administrateur Fonctionnel Clientèle", lien: "https://concours-recrutement.ma/offre-emploi-939.html" },
            { id: 937, titre: "Administrateur Relations Datacenter", lien: "https://concours-recrutement.ma/offre-emploi-937.html" },
            { id: 938, titre: "Administrateur des Bases de Données", lien: "https://concours-recrutement.ma/offre-emploi-938.html" },
            { id: 1005, titre: "Animateur Suivi des Performances", lien: "https://concours-recrutement.ma/offre-emploi-1005.html" },
            { id: 1004, titre: "Auditeur Interne (Profil Electricité)", lien: "https://concours-recrutement.ma/offre-emploi-1004.html" },
            { id: 925, titre: "Chargé d'Affaires Assainissement Liquide", lien: "https://concours-recrutement.ma/offre-emploi-925.html" },
            { id: 929, titre: "Chargé d'affaire grands comptes", lien: "https://concours-recrutement.ma/offre-emploi-929.html" },
            { id: 905, titre: "Chargé d'affaire électricité", lien: "https://concours-recrutement.ma/offre-emploi-905.html" },
            { id: 926, titre: "Chargé d'affaires Eau Potable", lien: "https://concours-recrutement.ma/offre-emploi-926.html" },
            { id: 1003, titre: "Chargé d'agence", lien: "https://concours-recrutement.ma/offre-emploi-1003.html" },
            { id: 957, titre: "Chef d'Agence", lien: "https://concours-recrutement.ma/offre-emploi-957.html" },
            { id: 1002, titre: "Chef de Division Comptage et fraudes", lien: "https://concours-recrutement.ma/offre-emploi-1002.html" },
            { id: 1000, titre: "Chef de Division Entretien Et Maintenance Electricité", lien: "https://concours-recrutement.ma/offre-emploi-1000.html" },
            { id: 1001, titre: "Chef de Division Entretien et maintenance des ouvrages et réseaux d'eau", lien: "https://concours-recrutement.ma/offre-emploi-1001.html" },
            { id: 999, titre: "Chef de Division Gestion des Patrimoines", lien: "https://concours-recrutement.ma/offre-emploi-999.html" },
            { id: 997, titre: "Chef de Division Laboratoire de contrôle de la qualité des eaux et des boues", lien: "https://concours-recrutement.ma/offre-emploi-997.html" },
            { id: 996, titre: "Chef de Division Normalisation Eau Potable", lien: "https://concours-recrutement.ma/offre-emploi-996.html" },
            { id: 995, titre: "Chef de Division Travaux Clients Particuliers", lien: "https://concours-recrutement.ma/offre-emploi-995.html" },
            { id: 994, titre: "Chef de Division Travaux Remboursables", lien: "https://concours-recrutement.ma/offre-emploi-994.html" },
            { id: 904, titre: "Chef de Projet Travaux Electricité", lien: "https://concours-recrutement.ma/offre-emploi-904.html" },
            { id: 910, titre: "Chef de Projets Clientèle", lien: "https://concours-recrutement.ma/offre-emploi-910.html" },
            { id: 986, titre: "Chef de Service Entretien et Maintenance Réseau Primaire", lien: "https://concours-recrutement.ma/offre-emploi-986.html" },
            { id: 984, titre: "Chef de Service Etudes & Travaux Ouvrage Electricité", lien: "https://concours-recrutement.ma/offre-emploi-984.html" },
            { id: 982, titre: "Chef de Service Exploitation Stations d'Epuration", lien: "https://concours-recrutement.ma/offre-emploi-982.html" },
            { id: 983, titre: "Chef de Service Exploitation des Ouvrages et stations de pompage", lien: "https://concours-recrutement.ma/offre-emploi-983.html" },
            { id: 981, titre: "Chef de Service Gestion Clients", lien: "https://concours-recrutement.ma/offre-emploi-981.html" },
            { id: 979, titre: "Chef de Service Gestion des Installations et Télégestion", lien: "https://concours-recrutement.ma/offre-emploi-979.html" },
            { id: 976, titre: "Chef de Service Hydrocurage", lien: "https://concours-recrutement.ma/offre-emploi-976.html" },
            { id: 974, titre: "Chef de Service Maintenance Electrique et Automatisme", lien: "https://concours-recrutement.ma/offre-emploi-974.html" },
            { id: 972, titre: "Chef de Service Maintenance préventive des Ouvrages et Stations de pompage", lien: "https://concours-recrutement.ma/offre-emploi-972.html" },
            { id: 973, titre: "Chef de Service Maintenance électromécanique", lien: "https://concours-recrutement.ma/offre-emploi-973.html" },
            { id: 971, titre: "Chef de Service Mise à Jour SIG", lien: "https://concours-recrutement.ma/offre-emploi-971.html" },
            { id: 969, titre: "Chef de Service Relève & Facturation", lien: "https://concours-recrutement.ma/offre-emploi-969.html" },
            { id: 970, titre: "Chef de Service Récpetion des Ouvrages et Réseaux", lien: "https://concours-recrutement.ma/offre-emploi-970.html" },
            { id: 968, titre: "Chef de Service Travaux Branchement", lien: "https://concours-recrutement.ma/offre-emploi-968.html" },
            { id: 953, titre: "Chef de projet SIG", lien: "https://concours-recrutement.ma/offre-emploi-953.html" },
            { id: 993, titre: "Chef de projet Organisation", lien: "https://concours-recrutement.ma/offre-emploi-993.html" },
            { id: 950, titre: "Chef de projet Paie", lien: "https://concours-recrutement.ma/offre-emploi-950.html" },
            { id: 992, titre: "Chef de projet RH", lien: "https://concours-recrutement.ma/offre-emploi-992.html" },
            { id: 920, titre: "Chef de projet Schéma directeur eau et Assainissement liquide", lien: "https://concours-recrutement.ma/offre-emploi-920.html" },
            { id: 915, titre: "Chef de projet patrimoine eau et assainissement", lien: "https://concours-recrutement.ma/offre-emploi-915.html" },
            { id: 900, titre: "Chef de projet patrimoine électricité", lien: "https://concours-recrutement.ma/offre-emploi-900.html" },
            { id: 916, titre: "Chef de projet planification Assainissement liquide", lien: "https://concours-recrutement.ma/offre-emploi-916.html" },
            { id: 903, titre: "Chef de projet planification Electricité", lien: "https://concours-recrutement.ma/offre-emploi-903.html" },
            { id: 921, titre: "Chef de projet travaux Assainissement liquide", lien: "https://concours-recrutement.ma/offre-emploi-921.html" },
            { id: 922, titre: "Chef de projet travaux Eau", lien: "https://concours-recrutement.ma/offre-emploi-922.html" },
            { id: 924, titre: "Chef de projet étude Assainissement liquide", lien: "https://concours-recrutement.ma/offre-emploi-924.html" },
            { id: 919, titre: "Chef de projet étude Eau", lien: "https://concours-recrutement.ma/offre-emploi-919.html" },
            { id: 899, titre: "Chef de projet étude électricité", lien: "https://concours-recrutement.ma/offre-emploi-899.html" },
            { id: 991, titre: "Chef de service Comptabilité Générale", lien: "https://concours-recrutement.ma/offre-emploi-991.html" },
            { id: 987, titre: "Chef de service Entretien et Maintenance Réseau (Electricité)", lien: "https://concours-recrutement.ma/offre-emploi-987.html" },
            { id: 980, titre: "Chef de service Gestion de la Dette", lien: "https://concours-recrutement.ma/offre-emploi-980.html" },
            { id: 975, titre: "Chef de service Ingénierie Financière et Financement", lien: "https://concours-recrutement.ma/offre-emploi-975.html" },
            { id: 990, titre: "Chef de service curage et maintenance préventive réseau desserte", lien: "https://concours-recrutement.ma/offre-emploi-990.html" },
            { id: 989, titre: "Chef de service entretien et maintenance des réseaux", lien: "https://concours-recrutement.ma/offre-emploi-989.html" },
            { id: 988, titre: "Chef de service entretien et maintenance des réseaux desserte", lien: "https://concours-recrutement.ma/offre-emploi-988.html" },
            { id: 978, titre: "Chef de service gestion et conduite des ouvrages eau potable", lien: "https://concours-recrutement.ma/offre-emploi-978.html" },
            { id: 977, titre: "Chef de service gestion et conduite réseau (Electricité)", lien: "https://concours-recrutement.ma/offre-emploi-977.html" },
            { id: 985, titre: "Chef de service étude et travaux lotissements et MT", lien: "https://concours-recrutement.ma/offre-emploi-985.html" },
            { id: 967, titre: "Conseiller Qualité et Sécurité", lien: "https://concours-recrutement.ma/offre-emploi-967.html" },
            { id: 966, titre: "Conseiller Recrutement", lien: "https://concours-recrutement.ma/offre-emploi-966.html" },
            { id: 965, titre: "Conseiller Sureté", lien: "https://concours-recrutement.ma/offre-emploi-965.html" },
            { id: 962, titre: "Contrôleur Permanent", lien: "https://concours-recrutement.ma/offre-emploi-962.html" },
            { id: 964, titre: "Contrôleur de gestion", lien: "https://concours-recrutement.ma/offre-emploi-964.html" },
            { id: 963, titre: "Contrôleur de gestion sociale", lien: "https://concours-recrutement.ma/offre-emploi-963.html" },
            { id: 948, titre: "Coordinateur Suivi des Performances", lien: "https://concours-recrutement.ma/offre-emploi-948.html" },
            { id: 911, titre: "Coordinateur en charge du Suivi des Contrats et des Conventions Spécifiques", lien: "https://concours-recrutement.ma/offre-emploi-911.html" },
            { id: 935, titre: "Data analyst", lien: "https://concours-recrutement.ma/offre-emploi-935.html" },
            { id: 893, titre: "Gestionnaire Contentieux et Recouvrement", lien: "https://concours-recrutement.ma/offre-emploi-893.html" },
            { id: 928, titre: "Gestionnaire zone de fraudes", lien: "https://concours-recrutement.ma/offre-emploi-928.html" },
            { id: 961, titre: "Médecin de Travail", lien: "https://concours-recrutement.ma/offre-emploi-961.html" },
            { id: 958, titre: "Responsable Laboratoire équipement de surveillance et de mesure électricité", lien: "https://concours-recrutement.ma/offre-emploi-958.html" },
            { id: 959, titre: "Responsable RH", lien: "https://concours-recrutement.ma/offre-emploi-959.html" },
            { id: 932, titre: "Superviseur Bureau Méthode", lien: "https://concours-recrutement.ma/offre-emploi-932.html" },
            { id: 902, titre: "Superviseur Contrôle de commande Postes Sources", lien: "https://concours-recrutement.ma/offre-emploi-902.html" },
            { id: 889, titre: "Superviseur Facturation Grands Comptes", lien: "https://concours-recrutement.ma/offre-emploi-889.html" },
            { id: 960, titre: "Superviseur Laboratoire de Contrôle de la Qualité de l'Eau Potable", lien: "https://concours-recrutement.ma/offre-emploi-960.html" },
        ]
    },
};

// Profils Bac+2, Niveau Bac+2 et CQP
const profilsData = {
    bac2: {
        title: "Profils Bac+2",
        titleAr: "تخصصات باك+2",
        items: [
            { id: 891, titre: "Technicien BAC+2 en Automatisme", lien: "https://concours-recrutement.ma/offre-emploi-891.html" },
            { id: 894, titre: "Technicien BAC+2 en Electricité", lien: "https://concours-recrutement.ma/offre-emploi-894.html" },
            { id: 906, titre: "Technicien BAC+2 en Electromécanique", lien: "https://concours-recrutement.ma/offre-emploi-906.html" },
            { id: 909, titre: "Technicien BAC+2 en Gestion", lien: "https://concours-recrutement.ma/offre-emploi-909.html" },
            { id: 908, titre: "Technicien BAC+2 en Génie Civil", lien: "https://concours-recrutement.ma/offre-emploi-908.html" },
            { id: 1007, titre: "Technicien BAC+2 en Hydraulique", lien: "https://concours-recrutement.ma/offre-emploi-1007.html" },
            { id: 934, titre: "Technicien BAC+2 en Informatique", lien: "https://concours-recrutement.ma/offre-emploi-934.html" },
            { id: 945, titre: "Technicien BAC+2 en Logistique", lien: "https://concours-recrutement.ma/offre-emploi-945.html" },
            { id: 941, titre: "Technicien BAC+2 en Microbiologie", lien: "https://concours-recrutement.ma/offre-emploi-941.html" },
            { id: 952, titre: "Technicien BAC+2 en SIG", lien: "https://concours-recrutement.ma/offre-emploi-952.html" },
            { id: 951, titre: "Technicien BAC+2 en Secrétariat", lien: "https://concours-recrutement.ma/offre-emploi-951.html" },
            { id: 942, titre: "Technicien BAC+2 en chimie industrielle", lien: "https://concours-recrutement.ma/offre-emploi-942.html" },
            { id: 949, titre: "Technicien BAC+2 en ressources humaines", lien: "https://concours-recrutement.ma/offre-emploi-949.html" },
            { id: 892, titre: "BAC+2 en droit", lien: "https://concours-recrutement.ma/offre-emploi-892.html" },
            { id: 933, titre: "BAC+2 en Infirmerie", lien: "https://concours-recrutement.ma/offre-emploi-933.html" },
        ]
    },
    technicien: {
        title: "Profils Niveau Bac+2",
        titleAr: "تخصصات مستوى باك+2",
        items: [
            { id: 896, titre: "Technicien NIVEAU BAC+2 en Electricité", lien: "https://concours-recrutement.ma/offre-emploi-896.html" },
            { id: 907, titre: "Technicien NIVEAU BAC+2 en Electromécanique", lien: "https://concours-recrutement.ma/offre-emploi-907.html" },
            { id: 946, titre: "Technicien NIVEAU BAC+2 en Logistique", lien: "https://concours-recrutement.ma/offre-emploi-946.html" },
            { id: 947, titre: "Technicien NIVEAU BAC+2 en Mécanique", lien: "https://concours-recrutement.ma/offre-emploi-947.html" },
        ]
    },
    cqp: {
        title: "Profils CQP",
        titleAr: "تخصصات شهادة التأهيل المهني",
        items: [
            { id: 913, titre: "CQP en Hydraulique", lien: "https://concours-recrutement.ma/offre-emploi-913.html" },
            { id: 955, titre: "Chauffeur (Permis B)", lien: "https://concours-recrutement.ma/offre-emploi-955.html" },
            { id: 930, titre: "Chauffeur Opérateur Hydrocurage (Permis C)", lien: "https://concours-recrutement.ma/offre-emploi-930.html" },
        ]
    },
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
