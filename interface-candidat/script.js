/* ========================================
   SRM Casablanca-Settat - Interface Candidat
   Script JavaScript
   ======================================== */

// ========================================
// Configuration des données
// ========================================

// Postes pour les Cadres (Bac+5) - Annonces par POSTE
const postesData = {
    ingenieur: {
        title: "Postes Ingénieur d'État",
        items: [
            { id: 1, titre: "Ingénieur Génie Civil", description: "Direction Technique", lien: "#" },
            { id: 2, titre: "Ingénieur Hydraulique", description: "Direction Exploitation", lien: "#" },
            { id: 3, titre: "Ingénieur Électromécanique", description: "Direction Maintenance", lien: "#" },
            { id: 4, titre: "Ingénieur Qualité", description: "Direction Qualité & Environnement", lien: "#" },
            { id: 5, titre: "Ingénieur Informatique", description: "Direction SI", lien: "#" },
            // Ajouter les postes ici
        ]
    },
    master: {
        title: "Postes Master / Bac+5",
        items: [
            { id: 1, titre: "Chargé d'Études RH", description: "Direction RH", lien: "#" },
            { id: 2, titre: "Contrôleur de Gestion", description: "Direction Financière", lien: "#" },
            { id: 3, titre: "Chargé de Communication", description: "Direction Communication", lien: "#" },
            { id: 4, titre: "Juriste", description: "Direction Juridique", lien: "#" },
            { id: 5, titre: "Auditeur Interne", description: "Direction Audit", lien: "#" },
            // Ajouter les postes ici
        ]
    }
};

// Profils pour les Bac+2, Niveau Bac et CQP - Annonces par PROFIL
const profilsData = {
    bac2: {
        title: "Profils Technicien Spécialisé (Bac+2)",
        items: [
            { id: 1, titre: "Technicien Spécialisé en Électromécanique", description: "Maintenance des équipements", lien: "#" },
            { id: 2, titre: "Technicien Spécialisé en Génie Civil", description: "Travaux et construction", lien: "#" },
            { id: 3, titre: "Technicien Spécialisé en Informatique", description: "Support et développement", lien: "#" },
            { id: 4, titre: "Technicien Spécialisé en Comptabilité", description: "Gestion comptable", lien: "#" },
            { id: 5, titre: "Technicien Spécialisé en GRH", description: "Gestion des ressources humaines", lien: "#" },
            // Ajouter les profils ici
        ]
    },
    technicien: {
        title: "Profils Technicien (Niveau Bac)",
        items: [
            { id: 1, titre: "Technicien en Hydraulique", description: "Eau, Froid & Climatisation, Plomberie", lien: "#" },
            { id: 2, titre: "Technicien en Électricité", description: "Installation et maintenance électrique", lien: "#" },
            { id: 3, titre: "Technicien en Mécanique", description: "Maintenance mécanique", lien: "#" },
            { id: 4, titre: "Agent Administratif", description: "Gestion administrative", lien: "#" },
            { id: 5, titre: "Agent de Recouvrement", description: "Gestion des impayés", lien: "#" },
            // Ajouter les profils ici
        ]
    },
    cqp: {
        title: "Profils CQP (Certificat de Qualification Professionnelle)",
        items: [
            { id: 1, titre: "Agent de Réseau", description: "Maintenance réseau eau potable", lien: "#" },
            { id: 2, titre: "Agent d'Assainissement", description: "Maintenance réseau assainissement", lien: "#" },
            { id: 3, titre: "Agent de Production", description: "Station de traitement", lien: "#" },
            { id: 4, titre: "Agent Polyvalent", description: "Travaux divers", lien: "#" },
            // Ajouter les profils ici
        ]
    }
};

// ========================================
// Fonctions de gestion de la modal
// ========================================

function showPostes(segment) {
    const data = postesData[segment];
    if (!data) {
        console.error('Segment non trouvé:', segment);
        return;
    }

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = data.title;

    let html = '<div class="postes-list">';
    data.items.forEach(poste => {
        html += `
            <div class="poste-item">
                <div class="poste-info">
                    <h4>${poste.titre}</h4>
                    <p>${poste.description}</p>
                </div>
                <a href="${poste.lien}" target="_blank" class="btn-candidater">
                    Postuler
                </a>
            </div>
        `;
    });
    html += '</div>';

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showProfils(segment) {
    const data = profilsData[segment];
    if (!data) {
        console.error('Segment non trouvé:', segment);
        return;
    }

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = data.title;

    let html = '<div class="profils-list">';
    data.items.forEach(profil => {
        html += `
            <div class="profil-item">
                <div class="profil-info">
                    <h4>${profil.titre}</h4>
                    <p>${profil.description}</p>
                </div>
                <a href="${profil.lien}" target="_blank" class="btn-candidater">
                    Postuler
                </a>
            </div>
        `;
    });
    html += '</div>';

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fermer la modal en cliquant à l'extérieur
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// ========================================
// Fonction pour mettre à jour les liens ATS
// À utiliser quand les liens seront fournis
// ========================================

function updateLiensATS(segment, type, liens) {
    // type: 'postes' ou 'profils'
    // liens: tableau d'objets { id: X, lien: 'URL' }

    const data = type === 'postes' ? postesData[segment] : profilsData[segment];

    if (!data) {
        console.error('Segment non trouvé:', segment);
        return;
    }

    liens.forEach(item => {
        const found = data.items.find(p => p.id === item.id);
        if (found) {
            found.lien = item.lien;
        }
    });

    console.log(`Liens mis à jour pour ${segment}`);
}

// ========================================
// Exemple d'utilisation pour mettre à jour les liens
// ========================================

/*
// Quand tu auras les liens, utilise cette fonction :

updateLiensATS('ingenieur', 'postes', [
    { id: 1, lien: 'https://votre-ats.com/poste/ing-gc' },
    { id: 2, lien: 'https://votre-ats.com/poste/ing-hydro' },
    // etc.
]);

updateLiensATS('technicien', 'profils', [
    { id: 1, lien: 'https://votre-ats.com/profil/tech-hydraulique' },
    { id: 2, lien: 'https://votre-ats.com/profil/tech-elec' },
    // etc.
]);
*/
