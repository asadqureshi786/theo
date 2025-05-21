import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // Common
    get_notified: 'Get notified',
    notify_me : 'Notify Me',
    all_footer : '2025 © THEO All rights reserved.',
    follow : 'Follow Us: welcome',
    email : 'Email',
    
    // Banner Section Start
    s1_m_hd: `An All-in-One Digital Office Built for Sports Agents!`,
    s1_text1: 'All your agent activities—in one powerful platform. Connect with clubs, manage players, track deals, collaborate with agents, and stay updated',
    s1_text2: 'with market moves—everything you need, finally in one place.',
    // Banner Section End
    
    
    // Plans Coming Soon Start
    s2_m_hd: 'Plans Coming Soon',
    s2_text1: 'We’re getting ready to launch flexible subscription.',
    s2_text2: 'plans designed specifically for football agents.',
    s2_text3: 'From solo scouting to managing a full squad of elite.',
    s2_text4: 'talent — THEO has you covered.',
    // Plans Coming Soon End

    // Start Managing Start
    s3_m_hd: 'Start Managing Your Players Today',
    s3_text1: 'Get full access to your agency tools with a THEO subscription.',
    s3_text2: `Stay in the loop. Drop your email & get early updates.`,
    // Start Managing End
},
fr: {
    // Common
    get_notified : 'être averti',
    notify_me : 'prévenez-moi',
    all_footer : '2025 © THEO Tous droits réservés.',
    follow : 'Suivez-nous : bienvenue.',
    email : 'E-mail',
   
    
    // Banner Section Start
    s1_m_hd: 'Un bureau numérique tout-en-un conçu pour les agents sportifs !',
    s1_text1: 'Toutes les activités de vos agents sur une plateforme unique et performante. Connectez-vous aux clubs, gérez les joueurs, suivez les contrats, collaborez avec les agents et restez informé.',
    s1_text2: 'avec les mouvements du marché : tout ce dont vous avez besoin, enfin au même endroit.',
    s1_text3: `Du repérage en solo à la gestion d'une équipe complète d'élite`,
    // Banner Section End

      // Plans Coming Soon Start
    s2_m_hd: 'Plans à venir',
    s2_text1: `Nous nous préparons à lancer l’abonnement flexible.`,
    s2_text2: `plans conçus spécifiquement pour les agents de football.`,
    s2_text3: `Du repérage en solo à la gestion d'une équipe complète d'élite`,
    s2_text4: `talent — THEO has you covered.`,
    // Plans Coming Soon End


    //  Start Managing Start
    s3_m_hd: `Commencez à gérer vos joueurs dès aujourd'hui`,
    s3_text1: `Obtenez un accès complet aux outils de votre agence avec un abonnement THEO.`,
    s3_text2: `Restez informés. Laissez-nous votre adresse e-mail et recevez les dernières nouvelles en avant-première.
`,
    // Start Managing End
}
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages
})

export default i18n