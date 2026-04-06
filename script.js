/***************globalité******/
*{
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif ;
    /***la taille des polices en REM**/
    font-size:1rem;
    box-sizing: border-box;
}
 
/*********************Navbar*********************/
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 5%;
    background: rgba(0,0,0,0.8);
    color: white;
    position: fixed;
    width: 100%;
    z-index: 1000;
}
 
.nav-links{
    list-style: none;
    display: flex;
}
 
.nav-links li{
    margin-left: 20px;
}
 
.nav-links a{
    text-decoration: none;
    color: white;
    font-size: 0.9rem;
    transition: 0.3s;
}
 
.nav-links a:hover{
    color: #ff6b6b;
}
 
/******** Style spécifique pour les icones dans le menu******/
.nav-links a i{
    margin-right: 8px;
    color: #ff6b6b;
    font-size: 0.85rem;
    transition: 0.3s;
}
 
/************* Effet au survol: l'icone peut aussi changer*****/
.nav-links a:hover i {
    transform: scale(1.2);
}
 
/*************Header / Hero*********/
.hero{
    background: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    height: 98vh;
}
 
.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: white;
}
 
.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}
 
.tagline{
    font-size:1.5rem;
    font-weight:700;
    text-shadow:0 4px 12px rgba(0,0,0,0.9);
    background:rgba(0,0,0,0.35);
    display:inline-block;
    padding:6px 12px;
    border-radius:6px;
}
 
.hero-content p:not(.tagline){
    font-size:1.2rem;
    text-shadow:0 3px 10px rgba(0,0,0,0.9);
    margin-top:10px;
    letter-spacing:0.5px;
}
 
/******Bouttons Call-to-action****/
.cta-buttons .btn {
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin: 0 10px;
    display: inline-block;
    transition: 0.3s;
}
 
.btn-primary {
    background-color: #ff6b6b;
    color: white;
}
 
.btn-secondary {
    border: 2px solid white;
    color: white;
}
 
.btn:hover {
    transform: translate(-3px);
    opacity: 0.9;
}
 
/***************** Responsive / Media queries **************/
@media ( max-width: 768px) {
    .navbar{
        flex-direction: column;
        padding: 10px;
    }
 
    .nav-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 15px;
        width: 100%;
    }
 
    .nav-links li {
        list-style: none;
        margin: 0;
        font-size: 0.75rem;
    }
 
    .hero {
        height: 100vh;
    }
 
    .hero-content h1 {
        font-size: 1.8rem;
    }
}
 
/* SECTION MENU */
.menu-section{
    padding: 80px 5%;
    text-align: center;
}
 
.menu-section h2{
    font-size: 2rem;
    margin-bottom: 40px;
}
 
.menu-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
}
 
.menu-card{
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s;
}
 
.menu-card img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
 
.menu-card h3{
    margin: 15px 0;
}
 
.menu-card p{
    padding: 0 15px;
    font-size: 0.9rem;
}
 
.menu-card span{
    display: block;
    margin: 15px 0;
    font-weight: bold;
    color: #ff6b6b;
}
 
.menu-card:hover{
    transform: translateY(-5px);
}
 
.menu-popup-btn{
    margin-top: 30px;
    padding: 12px 25px;
    border: none;
    background: #ff6b6b;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
 
/* POPUPS */
.popup{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.7);
    justify-content:center;
    align-items:center;
    z-index: 2000;
}
 
.popup-content{
    background:white;
    padding:30px;
    border-radius:10px;
    width:300px;
    text-align:center;
}
 
.popup-content ul{
    list-style:none;
    padding:0;
}
 
.close{
    cursor:pointer;
    font-size:20px;
    float:right;
}
 
.large-popup{
    width: 400px;
}
 
.form-reservation{
    display:flex;
    flex-direction:column;
    gap:10px;
}
 
.form-reservation input,
.form-reservation textarea{
    padding:10px;
    border-radius:5px;
    border:1px solid #ccc;
}
 
.form-reservation textarea{
    resize:none;
    height:80px;
}
 
.drink-item{
    display:flex;
    align-items:center;
    gap:15px;
    margin:15px 0;
}
 
.drink-item img{
    width:60px;
    height:60px;
    object-fit:cover;
    border-radius:10px;
}
 
/* GALERIE */
.gallery{
    padding:80px 5%;
    text-align:center;
}
 
.gallery-container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:20px;
}
 
.gallery-container img{
    width:100%;
    height:250px;
    object-fit:cover;
    border-radius:10px;
}
 
/* Responsive Galerie */
@media(max-width:768px){
    .menu-container{
        grid-template-columns:1fr;
    }
 
    .gallery-container{
        grid-template-columns: repeat(2,1fr);
    }
}
 
/* --- SECTION RÉSERVATION --- */
#reservation {
    padding: 60px 20px;
    background-color: #fdfcfb;
    text-align: center;
}
 
#reservation h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
}
 
.center {
    max-width: 700px;
    margin: 0 auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: left;
}
 
fieldset {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
}
 
legend {
    font-weight: bold;
    color: #e67e22;
    padding: 0 10px;
    font-size: 1.1rem;
}
 
label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #444;
}
 
input[type="text"],
input[type="tel"],
input[type="email"],
input[type="date"],
input[type="time"],
input[type="number"],
textarea {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}
 
input:focus, textarea:focus {
    border-color: #e67e22;
    box-shadow: 0 0 8px rgba(230, 126, 34, 0.2);
    outline: none;
}
 
textarea {
    resize: vertical;
    min-height: 100px;
}
 
input[type="submit"] {
    background-color: #e67e22;
    color: white;
    width: 100%;
    padding: 18px;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}
 
input[type="submit"]:hover {
    background-color: #d35400;
}
 
@media (max-width: 600px) {
    .center {
        padding: 20px;
    }
 
    #reservation h2 {
        font-size: 1.5rem;
    }
}
 
/* TÉMOIGNAGES */
.temoignages{
    padding:80px 5%;
    text-align:center;
    background:#f5f5f5;
}
 
.temoignage-container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
    margin-top:40px;
}
 
.temoignage-card{
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
}
 
.temoignage-card img{
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
    margin-bottom:10px;
}
 
.temoignage-card h3{
    margin-bottom:10px;
}
 
.temoignage-card p{
    font-size:0.9rem;
}
 
/* CONTACT */
.contact{
    padding:80px 5%;
    text-align:center;
}
 
.contact-container{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:40px;
    margin-top:40px;
}
 
.contact-info p{
    margin:15px 0;
    font-size:1rem;
}
 
.contact-info a{
    text-decoration:none;
    color:#333;
}
 
.contact-form{
    display:flex;
    flex-direction:column;
    gap:10px;
}
 
.contact-form input,
.contact-form textarea{
    padding:10px;
    border-radius:5px;
    border:1px solid #ccc;
}
 
.contact-form textarea{
    height:100px;
}
 
.map{
    margin-top:40px;
    border-radius:10px;
    overflow:hidden;
}
 
/* FOOTER */
.footer{
    background:#111;
    color:white;
    padding:60px 5% 20px;
}
 
.footer-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:40px;
}
 
.footer-logo{
    color:#ff7a00;
    margin-bottom:15px;
}
 
.footer-section h3{
    margin-bottom:15px;
    color:#ff7a00;
}
 
.footer-section ul{
    list-style:none;
}
 
.footer-section ul li{
    margin-bottom:8px;
}
 
.footer-section a{
    text-decoration:none;
    color:white;
    font-size:0.9rem;
    transition:0.3s;
}
 
.footer-section a:hover{
    color:#ff7a00;
}
 
.social-icons{
    display:flex;
    gap:15px;
    margin-top:10px;
}
 
.social-icons a{
    font-size:1.2rem;
    color:white;
    transition:0.3s;
}
 
.social-icons a:hover{
    color:#ff7a00;
    transform:scale(1.2);
}
 
.footer-bottom{
    text-align:center;
    margin-top:40px;
    border-top:1px solid #444;
    padding-top:15px;
    font-size:0.8rem;
}
 
/* ANIMATIONS CARTES */
.menu-card,
.temoignage-card,
.gallery-container img{
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
 
.menu-card:hover,
.temoignage-card:hover,
.gallery-container img:hover{
    transform: translateY(-10px);
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
}
 
/* WHATSAPP FLOTTANT */
.whatsapp{
    position:fixed;
    bottom:20px;
    right:20px;
    background:#25D366;
    color:white;
    font-size:30px;
    padding:15px;
    border-radius:50%;
    text-align:center;
    z-index:1000;
}
 
/* GESTION RH - Améliorations Bootstrap */
#gestion-rh .card-header {
    border-bottom: 2px solid #ff6b6b;
}
 
#gestion-rh .btn-warning {
    background-color: #ff6b6b !important;
    border-color: #ff6b6b !important;
}
 
#gestion-rh .table thead {
    background-color: #f9f9f9;
}
 
#gestion-rh .badge {
    font-size: 0.75rem;
    padding: 5px 10px;
    border-radius: 20px;
}
 
/* Toast notification */
#toast-container {
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 9999;
}
 
.toast-msg {
    background: #333;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
 
.toast-msg.show {
    opacity: 1;
    transform: translateY(0);
}
 
.toast-msg.success {
    border-left: 4px solid #28a745;
}
 
.toast-msg.danger {
    border-left: 4px solid #dc3545;
}
 
/* Scroll reveal animation */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
 
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
 
/* Navbar scroll effect */
.navbar.scrolled {
    background: rgba(0,0,0,0.97);
    padding: 15px 5%;
    box-shadow: 0 2px 20px rgba(0,0,0,0.5);
    transition: all 0.3s ease;
}
 
/* Active nav link */
.nav-links a.active {
    color: #ff6b6b;
    border-bottom: 2px solid #ff6b6b;
    padding-bottom: 2px;
}
 
/* Section headings style */
.menu-section h2,
.gallery h2,
.temoignages h2,
.contact h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
}
 
.menu-section h2::after,
.gallery h2::after,
.temoignages h2::after,
.contact h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #ff6b6b;
    border-radius: 2px;
}