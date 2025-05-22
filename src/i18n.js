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
    s1_m_hd: ` An All-in-one Digital Office Designed by and for Sports Agents!`,
    s1_text1: ` All your agency operations—streamlined in one smart platform. Built by sports agents for sports agents, THEO helps you stay ahead:
 Manage your players with precision, Anticipate contract deadlines and transfer windows, Collaborate with trusted clubs and fellow agents, Track deals and explore opportunities with unattached players, Build your own workspace and influence circle—your pad, your rules`,
    s1_text2: 'Finally, a digital hub where everything connects.',
    s1_text3: ' Stay sharp. Stay in control. Stay connected..',
    // Banner Section End
    
    
    // Plans Coming Soon Start
    s2_m_hd: 'Plans Coming Soon',
    s2_text1: 'We’re getting ready to launch your new solution',
    s2_text2: 'plans designed specifically for football agents.',
    s2_text3: 'From solo scouting to managing a full squad of elite ',
    s2_text4: 'talent — THEO is your new companion',
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
    s1_m_hd: 'Un bureau numérique tout-en-un conçu par et pour les agents sportifs !',
    s1_text1: `Toutes les opérations de votre agence, rationalisées sur une plateforme intelligente. Conçue par des agents sportifs pour des agents sportifs, THEO vous aide à garder une longueur d'avance :
Gérez vos joueurs avec précision, Anticipez les échéances des contrats et les périodes de transfert, Collaborez avec des clubs de confiance et d'autres agents, Suivez les transactions et explorez les opportunités avec des joueurs indépendants, Créez votre propre espace de travail et votre cercle d'influence : votre espace, vos règles
`,
    s1_text2: `Toutes les opérations de votre agence sont centralisées sur une plateforme unique et intelligente. Conçue par des agents sportifs pour des agents sportifs, THEO vous aide à garder une longueur d'avance :
Enfin, une plateforme numérique où tout est connecté.`,
    s1_text3: `Restez vigilant. Gardez le contrôle. Restez connecté.`,
    // Banner Section End

      // Plans Coming Soon Start
    s2_m_hd: 'Plans à venir',
    s2_text1: `Nous nous préparons à lancer votre nouvelle solution`,
    s2_text2: `plans conçus spécifiquement pour les agents de football.`,
    s2_text3: `Du repérage en solo à la gestion d'une équipe complète d'élite`,
    s2_text4: `talent — THEO est votre nouveau compagnon`,
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