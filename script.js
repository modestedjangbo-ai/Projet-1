/* =========================================================
   script.js — Le Bonheur Restaurant
   Fonctionnalités :
   - Popups (Boissons, Réservation, Commande)
   - Navbar dynamique au scroll
   - Lien actif selon la section visible
   - Scroll reveal (animation d'entrée des sections)
   - Toast notifications (remplace les alert())
   - Gestion des employés (ajout / suppression)
   ========================================================= */
 
/* ---------------------------------------------------------
   1. UTILITAIRE : TOAST NOTIFICATIONS
   Remplace les alert() natifs par des toasts élégants
--------------------------------------------------------- */
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
 
    const toast = document.createElement('div');
    toast.className = `toast-msg ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
 
    // Déclenche l'animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });
 
    // Disparait après 3 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
 
/* ---------------------------------------------------------
   2. POPUPS — Ouverture & Fermeture
--------------------------------------------------------- */
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
 
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.style.overflow = '';
}
 
function openReservation() {
    document.getElementById('reservationPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
 
function closeReservation() {
    document.getElementById('reservationPopup').style.display = 'none';
    document.body.style.overflow = '';
}
 
function openCommande() {
    document.getElementById('commandePopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
 
function closeCommande() {
    document.getElementById('commandePopup').style.display = 'none';
    document.body.style.overflow = '';
}
 
// Fermer un popup en cliquant sur l'arrière-plan
document.addEventListener('click', function (e) {
    const popups = ['popup', 'reservationPopup', 'commandePopup'];
    popups.forEach(id => {
        const el = document.getElementById(id);
        if (el && e.target === el) {
            el.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});
 
// Fermer les popups avec la touche Échap
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        ['popup', 'reservationPopup', 'commandePopup'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        document.body.style.overflow = '';
    }
});
 
/* ---------------------------------------------------------
   3. NAVBAR — Changement de style au scroll
--------------------------------------------------------- */
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
 
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
 
    highlightActiveNav();
});
 
/* ---------------------------------------------------------
   4. NAVIGATION ACTIVE — Met en surbrillance le lien
      correspondant à la section visible
--------------------------------------------------------- */
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentId = '';
 
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentId = section.getAttribute('id');
        }
    });
 
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
}
 
/* ---------------------------------------------------------
   5. SMOOTH SCROLL — Défilement doux vers les sections
--------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
 
/* ---------------------------------------------------------
   6. SCROLL REVEAL — Animation d'entrée des éléments
--------------------------------------------------------- */
function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.menu-card, .temoignage-card, .gallery-container img, .contact-info, .contact-form, .drink-item'
    );
 
    targets.forEach(el => el.classList.add('reveal'));
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Délai progressif pour un effet cascade
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    targets.forEach(el => observer.observe(el));
}
 
/* ---------------------------------------------------------
   7. GESTION DES EMPLOYÉS (RH)
   - Compteur de matricule automatique
   - Validation
   - Ajout dans le tableau
   - Suppression avec toast
   - Remplacement des alert() par des toasts
--------------------------------------------------------- */
let employeeCount = 1; // EMP-2026-001 déjà présent
 
function validerFormulaire() {
    const inputPrenom = document.getElementById('inputPrenom');
    const inputNom = document.getElementById('inputNom');
    const inputService = document.getElementById('inputService');
 
    let estValide = true;
 
    // Validation Prénom
    if (!inputPrenom || inputPrenom.value.trim() === '') {
        document.getElementById('errPrenom').classList.remove('d-none');
        estValide = false;
    } else {
        document.getElementById('errPrenom').classList.add('d-none');
    }
 
    // Validation Nom
    if (!inputNom || inputNom.value.trim() === '') {
        document.getElementById('errNom').classList.remove('d-none');
        estValide = false;
    } else {
        document.getElementById('errNom').classList.add('d-none');
    }
 
    // Validation Service
    if (!inputService || inputService.value === '') {
        document.getElementById('errService').classList.remove('d-none');
        estValide = false;
    } else {
        document.getElementById('errService').classList.add('d-none');
    }
 
    if (estValide) {
        employeeCount++;
        const matricule = `EMP-2026-${String(employeeCount).padStart(3, '0')}`;
 
        // Créer une nouvelle ligne dans le tableau
        const tbody = document.getElementById('employeeTableBody');
        const newRow = document.createElement('tr');
        newRow.style.animation = 'fadeIn 0.4s ease';
        newRow.innerHTML = `
            <td>${matricule}</td>
            <td>${escapeHtml(inputPrenom.value.trim())}</td>
            <td>${escapeHtml(inputNom.value.trim())}</td>
            <td>${escapeHtml(inputService.value)}</td>
            <td>
                <button class="btn btn-outline-danger btn-sm" onclick="supprimerEmploye(this)">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </td>
        `;
        tbody.appendChild(newRow);
 
        // Fermer le modal Bootstrap
        const modalEl = document.getElementById('modalEmploye');
        const instanceModal = bootstrap.Modal.getInstance(modalEl);
        if (instanceModal) instanceModal.hide();
 
        // Réinitialiser le formulaire
        document.getElementById('formAjout').reset();
 
        // Toast de succès
        showToast('✅ Employé enregistré avec succès !', 'success');
    }
}
 
function supprimerEmploye(bouton) {
    // Utilise un modal Bootstrap de confirmation au lieu de confirm()
    const row = bouton.closest('tr');
    const prenom = row.cells[1].textContent;
    const nom = row.cells[2].textContent;
 
    if (confirm(`Voulez-vous vraiment supprimer ${prenom} ${nom} ?`)) {
        row.style.transition = 'opacity 0.4s ease';
        row.style.opacity = '0';
        setTimeout(() => {
            row.remove();
            showToast(`🗑️ ${prenom} ${nom} a été supprimé.`, 'danger');
        }, 400);
    }
}
 
// Sécurité : évite les injections XSS dans le tableau
function escapeHtml(text) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}
 
/* ---------------------------------------------------------
   8. FORMULAIRES POPUPS — Feedback soumission
--------------------------------------------------------- */
function initFormFeedback() {
    // Formulaire réservation popup
    const formRes = document.querySelector('#reservationPopup .form-reservation');
    if (formRes) {
        formRes.addEventListener('submit', function (e) {
            e.preventDefault();
            closeReservation();
            showToast('✅ Réservation envoyée avec succès !', 'success');
            this.reset();
        });
    }
 
    // Formulaire commande popup
    const formCmd = document.querySelector('#commandePopup .form-reservation');
    if (formCmd) {
        formCmd.addEventListener('submit', function (e) {
            e.preventDefault();
            closeCommande();
            showToast('✅ Commande envoyée avec succès !', 'success');
            this.reset();
        });
    }
 
    // Formulaire contact
    const formContact = document.querySelector('.contact-form');
    if (formContact) {
        formContact.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast('✅ Message envoyé ! Nous vous répondrons rapidement.', 'success');
            this.reset();
        });
    }
 
    // Formulaire réservation section
    const formReservSection = document.querySelector('#reservation form');
    if (formReservSection) {
        formReservSection.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast('✅ Réservation confirmée ! À bientôt chez Le Bonheur.', 'success');
            this.reset();
        });
    }
}
 
/* ---------------------------------------------------------
   9. INITIALISATION — Lancement au chargement de la page
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initFormFeedback();
    highlightActiveNav();
});