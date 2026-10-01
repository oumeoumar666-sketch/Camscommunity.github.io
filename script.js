const menuButton=document.getElementById("menuButton");const navLinks=document.getElementById("navLinks");menuButton.addEventListener("click",()=>navLinks.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));

// Remplace cette valeur par le lien public de ton APK.
const APK_URL = "https://drive.google.com/file/d/1Z9rhp7FkrSYiu0cD_oi8UgvyoWV9R4JF/view?usp=sharing";

// Remplace par ton numéro WhatsApp international sans + ni espaces.
const WHATSAPP_NUMBER="224610828649";

document.getElementById("downloadButton").addEventListener("click",(e)=>{if(APK_URL==="#"){e.preventDefault();alert("Le lien de téléchargement de l'APK n'est pas encore configuré.");}else{e.currentTarget.href=APK_URL;}});

document.getElementById("whatsappButton").addEventListener("click",(e)=>{e.preventDefault();if(WHATSAPP_NUMBER==="224610828649"){alert("Configure d'abord ton numéro WhatsApp dans script.js.");return;}const message=encodeURIComponent("Bonjour Cams Community, je souhaite avoir des informations sur Ma Boutique.");window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank");});
