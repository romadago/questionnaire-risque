// Fichier : src/configurations/risque.ts

import { QuestionnaireConfig, Question } from './types.js';

const questions: Question[] = [
    // --- Situation Patrimoniale ---
    {
        id: 'q5_revenus',
        question: "Quels sont les revenus nets annuels de votre foyer ?",
        type: 'choix_unique',
        options: [
            { label: "Inférieur à 50 000 €", value: "a", points: 1 },
            { label: "Entre 50 000 et 100 000 €", value: "b", points: 2 },
            { label: "Au-delà de 100 000 €", value: "c", points: 3 },
        ],
    },
    {
        id: 'q6_epargne_mensuelle',
        question: "Combien pouvez-vous épargner chaque mois ?",
        type: 'choix_unique',
        options: [
            { label: "Moins de 500 €", value: "a", points: 1 },
            { label: "De 500 à 1 000 €", value: "b", points: 2 },
            { label: "Plus de 1 000 €", value: "c", points: 3 },
        ],
    },
    {
        id: 'q7_patrimoine_immo',
        question: "A combien estimez-vous votre patrimoine immobilier (emprunts déduits) ?",
        type: 'choix_unique',
        options: [
            { label: "Inférieur à 100 000 €", value: "a", points: 1 },
            { label: "Entre 100 000 et 500 000 €", value: "b", points: 2 },
            { label: "Au-delà de 500 000 €", value: "c", points: 3 },
        ],
    },
    {
        id: 'q8_patrimoine_financier',
        question: "À combien estimez-vous votre patrimoine financier (hors immobilier) ?",
        type: 'choix_unique',
        options: [
            { label: "Inférieur à 20 000 €", value: "a", points: 0 },
            { label: "Entre 20 000 et 100 000 €", value: "b", points: 1 },
            { label: "Au-delà de 100 000 €", value: "c", points: 2 },
        ],
    },
    {
        id: 'q12_depense_imprevue',
        question: "Si vous deviez faire face à une dépense importante et imprévue, pourriez-vous le faire avec vos seules liquidités ?",
        type: 'choix_unique',
        options: [
            { label: "Non", value: "non", points: 0 },
            { label: "Je ne sais pas", value: "nsp", points: 1 },
            { label: "Oui", value: "oui", points: 2 },
        ],
    },
    {
        id: 'q13_evolution_revenus',
        question: "Comment estimez-vous l'évolution de vos revenus futurs ?",
        type: 'choix_unique',
        options: [
            { label: "Ils pourraient baisser ou être instables", value: "a", points: 0 },
            { label: "Ils devraient rester à peu près stables", value: "b", points: 1 },
            { label: "Ils vont augmenter régulièrement", value: "c", points: 2 },
        ],
    },
    
    // --- Expérience et Connaissances ---
    {
        id: 'q17_experience_actions',
        question: "Votre expérience d'investissement en actions directes ?",
        type: 'choix_unique',
        options: [
            { label: "Aucune", value: "a", points: 0 },
            { label: "Une ou deux fois", value: "b", points: 1 },
            { label: "Régulière", value: "c", points: 2 },
        ],
    },
    {
        id: 'q19_experience_opcvm',
        question: "Votre expérience en OPCVM (Fonds, SICAV) ?",
        type: 'choix_unique',
        options: [
            { label: "Aucune", value: "a", points: 0 },
            { label: "Une ou deux fois", value: "b", points: 1 },
            { label: "Régulière", value: "c", points: 2 },
        ],
    },
    {
        id: 'q20_experience_scpi',
        question: "Votre expérience en immobilier financier (SCPI, OPCI) ?",
        type: 'choix_unique',
        options: [
            { label: "Aucune", value: "a", points: 0 },
            { label: "Une ou deux fois", value: "b", points: 1 },
            { label: "Régulière", value: "c", points: 2 },
        ],
    },
    {
        id: 'q22_reaction_perte_passee',
        question: "Si vous avez déjà perdu de l'argent sur un investissement, comment avez-vous réagi ?",
        type: 'choix_unique',
        options: [
            { label: "Jamais perdu d'argent / Cela m'a semblé anormal", value: "a", points: 0 },
            { label: "J'ai trouvé cela normal, le risque fait partie du jeu", value: "c", points: 2 },
        ],
    },
    {
        id: 'q25_connaissance_rendement',
        question: "Vrai ou Faux : Pour espérer un rendement élevé, il faut accepter un risque de perte en capital.",
        type: 'choix_unique',
        options: [{ label: "Vrai", value: "vrai", points: 2 },{ label: "Faux", value: "faux", points: 0 }, { label: "Je ne sais pas", value: "nsp", points: 0 }],
    },
    {
        id: 'q27_connaissance_diversification',
        question: "Vrai ou Faux : Un portefeuille diversifié est généralement moins risqué qu'un portefeuille concentré.",
        type: 'choix_unique',
        options: [{ label: "Vrai", value: "vrai", points: 2 },{ label: "Faux", value: "faux", points: 0 }, { label: "Je ne sais pas", value: "nsp", points: 0 }],
    },
    {
        id: 'q34_connaissance_volatilite',
        question: "Vrai ou Faux : La volatilité d'un fonds est un bon indicateur de son niveau de risque.",
        type: 'choix_unique',
        options: [{ label: "Vrai", value: "vrai", points: 2 },{ label: "Faux", value: "faux", points: 0 }, { label: "Je ne sais pas", value: "nsp", points: 0 }],
    },
     {
        id: 'q37_connaissance_blocage_av',
        question: "Vrai ou Faux : Dans un contrat d'assurance-vie, les fonds sont bloqués pendant huit ans.",
        type: 'choix_unique',
        options: [{ label: "Vrai", value: "vrai", points: 0 },{ label: "Faux", value: "faux", points: 1 }],
    },
     {
        id: 'q40_connaissance_scpi',
        question: "Vrai ou Faux : Une SCPI est un placement qui offre une garantie en capital.",
        type: 'choix_unique',
        options: [{ label: "Vrai", value: "vrai", points: 0 },{ label: "Faux", value: "faux", points: 1 }],
    },

    // --- Objectifs & Comportement ---
    {
        id: 'q_horizon_placement',
        question: "Quel est votre horizon de placement principal ?",
        type: 'choix_unique',
        options: [
            { label: "Court terme (Moins de 2 ans)", value: "a", points: 0 },
            { label: "Moyen terme (2 à 8 ans)", value: "b", points: 1 },
            { label: "Long terme (Plus de 8 ans)", value: "c", points: 2 },
        ],
    },
    {
        id: 'q_objectif_principal',
        question: "Quel est votre objectif principal ?",
        type: 'choix_unique',
        options: [
            { label: "Préserver mon capital avant tout", value: "a", points: 0 },
            { label: "Obtenir un complément de revenu", value: "b", points: 1 },
            { label: "Faire fructifier mon capital", value: "c", points: 2 },
        ],
    },
    {
        id: 'q42_reaction_perte_20pc',
        question: "Votre portefeuille perd 20% en trois mois. Quelle est votre réaction ?",
        type: 'choix_unique',
        options: [
            { label: "Je vends tout pour limiter les pertes.", value: "a", points: 0 },
            { label: "Je ne fais rien et j'attends le rebond.", value: "b", points: 2 },
            { label: "Je renforce ma position, c'est une opportunité.", value: "c", points: 3 },
        ],
    },
    {
        id: 'q44_attente_rebond',
        question: "Après une baisse, combien de temps attendez-vous pour retrouver votre mise initiale ?",
        type: 'choix_unique',
        options: [
            { label: "Moins de 1 an", value: "a", points: 0 },
            { label: "De 1 an à 3 ans", value: "b", points: 1 },
            { label: "Plus de 3 ans", value: "c", points: 2 },
        ],
    },
    {
        id: 'q46_choix_investissement',
        question: "Parmi ces couples perte/gain potentiels, lequel choisissez-vous ?",
        type: 'choix_unique',
        options: [
            { label: "Pire : 0% / Meilleur : +10%", value: "a", points: 0 },
            { label: "Pire : -10% / Meilleur : +30%", value: "b", points: 2 },
            { label: "Pire : -30% / Meilleur : +70%", value: "c", points: 4 },
        ],
    },
    // --- NOUVELLES QUESTIONS PROFESSIONNELLES ---
    {
        id: 'q_besoin_liquidite',
        question: "De quelle part de votre patrimoine financier pourriez-vous avoir besoin dans les 2 prochaines années ?",
        type: 'choix_unique',
        options: [
            { label: "Plus de 30%", value: "a", points: 0 },
            { label: "Entre 10% et 30%", value: "b", points: 1 },
            { label: "Moins de 10%", value: "c", points: 2 },
        ],
    },
    {
        id: 'q_source_patrimoine',
        question: "Quelle est la source principale de votre patrimoine financier actuel ?",
        type: 'choix_unique',
        options: [
            { label: "Héritage ou donation", value: "a", points: 1 },
            { label: "Épargne sur revenus salariés", value: "b", points: 2 },
            { label: "Revenus d'entrepreneur / profession libérale", value: "c", points: 3 },
            { label: "Plus-values de précédents investissements", value: "d", points: 3 },
        ],
    },
    {
        id: 'q_reaction_gain',
        question: "Votre investissement principal gagne 30% en un an. Que faites-vous ?",
        type: 'choix_unique',
        options: [
            { label: "Je vends tout pour sécuriser mes gains.", value: "a", points: 0 },
            { label: "Je vends une partie et laisse le reste courir.", value: "b", points: 1 },
            { label: "Je ne touche à rien, je suis sur le long terme.", value: "c", points: 2 },
        ],
    },
    {
        id: 'q_reaction_complexite',
        question: "Face à un produit financier que vous ne comprenez pas entièrement, que faites-vous ?",
        type: 'choix_unique',
        options: [
            { label: "Je n'investis pas.", value: "a", points: 0 },
            { label: "Je demande des explications à un conseiller avant de décider.", value: "b", points: 1 },
            { label: "J'investis une petite somme pour 'voir'.", value: "c", points: 2 },
        ],
    },
];

// Les profils de risque ont été réajustés pour le nouveau scoring
const results = [
    {
        min: 0,
        max: 17,
        label: "Profil Prudent",
        imageSrc: "/prudent.jpg",
        description: "Votre profil privilégie la sécurité et la préservation du capital. Les solutions à faible risque, même avec un rendement modéré, sont les plus adaptées à vos objectifs."
    },
    {
        min: 18,
        max: 35,
        label: "Profil Équilibré",
        imageSrc: "/equilibre.jpg",
        description: "Vous recherchez un bon compromis entre la sécurité et la performance. Un portefeuille diversifié, alliant des actifs garantis et une part d'actifs plus dynamiques, correspond à votre approche."
    },
    {
        min: 36,
        max: 52, // Nouveau score maximum possible
        label: "Profil Dynamique",
        imageSrc: "/dynamique.jpg",
        description: "Vous êtes prêt à accepter une part de risque plus importante pour viser un rendement potentiellement plus élevé. Votre horizon de temps et votre connaissance des marchés vous permettent d'envisager des placements plus offensifs."
    }
];

export const configRisque: QuestionnaireConfig = {
    id: 'questionnaire-risque',
    titre: 'Définissez votre Profil d\'Investisseur',
    stockageId: 'reponses_profil_risque',
    questions: questions,
    results: results
};
