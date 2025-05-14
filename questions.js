// Structure de données pour les questions du quiz BI
const quizQuestions = [
    // Questions avec une seule réponse correcte
    {
        question: "La Business Intelligence est :",
        options: [
            "Un ensemble de technologies permettant de collecter, stocker, transformer et analyser les données de l'entreprise",
            "Un logiciel commercial vendu par Microsoft",
            "Un concept marketing sans application réelle",
            "Une méthode de programmation orientée objet"
        ],
        correctAnswer: 0,
        explanation: "La Business Intelligence est l'ensemble des technologies et processus permettant de collecter, stocker, transformer et analyser les données de l'entreprise pour aider à la prise de décision."
    },
    {
        question: "ETL signifie :",
        options: [
            "Enterprise Technical Language",
            "Extract, Transform, Load",
            "Extract, Transfer, Link",
            "Enterprise Technology Learning"
        ],
        correctAnswer: 1,
        explanation: "ETL signifie Extract, Transform, Load (Extraire, Transformer, Charger), qui est un processus utilisé pour collecter des données de diverses sources, les transformer et les charger dans un entrepôt de données."
    },
    {
        question: "Un Data Warehouse est :",
        options: [
            "Un logiciel de stockage de données",
            "Une méthode d'analyse statistique",
            "Un entrepôt centralisé qui stocke des données intégrées provenant de plusieurs sources",
            "Une base de données relationnelle standard"
        ],
        correctAnswer: 2,
        explanation: "Un Data Warehouse (entrepôt de données) est un système centralisé qui stocke des données intégrées provenant de plusieurs sources pour faciliter l'analyse et la prise de décision."
    },
    {
        question: "Qu'est-ce qu'un KPI dans le contexte de la Business Intelligence ?",
        options: [
            "Key Performance Indicator - indicateur clé de performance",
            "Knowledge Process Integration - intégration des processus de connaissance",
            "Key Project Implementation - implémentation de projets clés",
            "Knowledge Performance Index - indice de performance des connaissances"
        ],
        correctAnswer: 0,
        explanation: "KPI signifie Key Performance Indicator (indicateur clé de performance). Il s'agit d'une mesure quantifiable utilisée pour évaluer la performance d'une organisation par rapport à ses objectifs stratégiques."
    },
    {
        question: "Quelle est la principale différence entre l'OLTP et l'OLAP ?",
        options: [
            "L'OLTP est utilisé pour les analyses statistiques tandis que l'OLAP est utilisé pour les transactions bancaires",
            "L'OLTP traite les opérations quotidiennes tandis que l'OLAP est optimisé pour l'analyse de données",
            "L'OLTP utilise des bases de données NoSQL tandis que l'OLAP utilise uniquement SQL",
            "L'OLTP est un langage de programmation tandis que l'OLAP est un format de fichier"
        ],
        correctAnswer: 1,
        explanation: "L'OLTP (Online Transaction Processing) est conçu pour gérer les transactions quotidiennes en temps réel, tandis que l'OLAP (Online Analytical Processing) est optimisé pour l'analyse complexe de grandes quantités de données historiques."
    },
    // Questions avec plusieurs réponses correctes
    {
        question: "Quelles sont les caractéristiques d'un bon Data Warehouse ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Il est orienté sujet (subject-oriented)",
            "Il contient uniquement des données transactionnelles",
            "Il est intégré et cohérent",
            "Il est variable dans le temps (non historisé)"
        ],
        correctAnswer: [0, 2],
        explanation: "Un bon Data Warehouse est orienté sujet (organisé autour des sujets métier majeurs) et intégré (données cohérentes provenant de sources diverses). Il n'est pas limité aux données transactionnelles et conserve l'historique des données (non variable dans le temps)."
    },
    {
        question: "Quelles sont les dimensions couramment utilisées en analyse multidimensionnelle ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Temps",
            "Lieu/géographie",
            "Fait",
            "Client/produit"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Les dimensions courantes incluent le temps, la géographie/lieu, et client/produit. Le 'fait' n'est pas une dimension mais représente les mesures ou métriques à analyser selon ces dimensions."
    },
    {
        question: "Quels sont les composants typiques d'une solution BI ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "ETL",
            "Data Warehouse",
            "Serveur d'application uniquement",
            "Outils de reporting et tableaux de bord"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Une solution BI typique comprend des processus ETL, un Data Warehouse et des outils de reporting/visualisation. Le serveur d'application n'est pas spécifique à la BI."
    },
    {
        question: "Qu'est-ce que le Data Mining ?",
        options: [
            "L'extraction physique de disques durs dans les centres de données",
            "La programmation de requêtes SQL complexes",
            "Le processus d'exploration de grandes quantités de données pour découvrir des modèles et des relations",
            "La sauvegarde régulière des données d'entreprise"
        ],
        correctAnswer: 2,
        explanation: "Le Data Mining (exploration de données) est le processus d'analyse de grandes quantités de données pour découvrir des modèles, corrélations et tendances significatives qui ne seraient pas facilement identifiables autrement."
    },
    {
        question: "Qu'est-ce qu'une dimension dans un modèle multidimensionnel ?",
        options: [
            "La taille physique d'une base de données",
            "Une perspective d'analyse des données comme le temps, le lieu, ou le produit",
            "Le nombre de colonnes dans une table de base de données",
            "La profondeur d'un arbre de décision"
        ],
        correctAnswer: 1,
        explanation: "Dans un modèle multidimensionnel, une dimension représente une perspective selon laquelle les données peuvent être analysées, comme le temps, le lieu, le produit ou le client."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quelles sont les opérations typiques dans l'analyse OLAP ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Drill-down",
            "Slice and Dice",
            "Normalisation",
            "Roll-up"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Les opérations OLAP typiques comprennent drill-down (zoom avant sur les détails), roll-up (agrégation à un niveau supérieur) et slice-and-dice (filtrer et pivoter les données). La normalisation est un concept de modélisation de bases de données relationnelles, pas une opération OLAP."
    },
    {
        question: "Qu'est-ce qu'un fait (fact) dans un modèle en étoile ?",
        options: [
            "Une information vérifiée par un expert métier",
            "Une donnée numérique mesurable qui peut être analysée selon différentes dimensions",
            "Une règle métier définie dans le système",
            "Une contrainte d'intégrité dans la base de données"
        ],
        correctAnswer: 1,
        explanation: "Dans un modèle en étoile, une table de faits contient les mesures numériques (ou faits) qui peuvent être analysées selon les dimensions associées. Ces mesures sont généralement des valeurs additives comme les ventes, les quantités ou les coûts."
    },
    {
        question: "Quel est le rôle principal d'un tableau de bord (dashboard) en BI ?",
        options: [
            "Stocker des données de manière sécurisée",
            "Exécuter des calculs complexes",
            "Présenter visuellement les KPIs et les informations clés pour faciliter la prise de décision",
            "Remplacer les rapports traditionnels par des formulaires interactifs"
        ],
        correctAnswer: 2,
        explanation: "Un tableau de bord en BI permet de présenter visuellement et de manière synthétique les indicateurs clés de performance (KPIs) et autres informations critiques pour aider à la prise de décision rapide."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quelles sont les caractéristiques du Big Data ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Volume (grandes quantités de données)",
            "Variété (différents types de données)",
            "Vélocité (vitesse de génération et de traitement)",
            "Validité (toutes les données sont vérifiées et correctes)"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Le Big Data est caractérisé par les '3V' principaux : Volume (grandes quantités), Variété (structurées et non structurées), et Vélocité (génération rapide). La validité n'est pas une caractéristique inhérente - au contraire, la qualité des données est souvent un défi dans les environnements Big Data."
    },
    {
        question: "Qu'est-ce que le 'Data Cleansing' (nettoyage des données) ?",
        options: [
            "La suppression définitive des données obsolètes",
            "Le cryptage des données sensibles",
            "Le processus d'identification et de correction des erreurs et incohérences dans les données",
            "La compression des données pour économiser de l'espace de stockage"
        ],
        correctAnswer: 2,
        explanation: "Le Data Cleansing est le processus qui consiste à détecter et corriger (ou supprimer) les erreurs, incohérences et imprécisions dans un ensemble de données afin d'améliorer sa qualité."
    },
    {
        question: "Qu'est-ce qu'une Data Mart ?",
        options: [
            "Un magasin spécialisé dans la vente de matériel informatique",
            "Un sous-ensemble d'un Data Warehouse orienté vers un métier ou une fonction spécifique",
            "Une base de données temporaire utilisée pendant la phase ETL",
            "Une plateforme d'échange de données entre entreprises"
        ],
        correctAnswer: 1,
        explanation: "Un Data Mart est un sous-ensemble d'un entrepôt de données (Data Warehouse) qui se concentre sur un domaine fonctionnel spécifique de l'entreprise (comme les ventes, les finances ou le marketing)."
    },
    {
        question: "Qu'est-ce que la Business Analytics par rapport à la Business Intelligence ?",
        options: [
            "C'est exactement la même chose, les termes sont interchangeables",
            "La Business Analytics se concentre sur l'analyse prédictive et prescriptive tandis que la BI est plus descriptive",
            "La Business Analytics est une ancienne appellation de la Business Intelligence",
            "La Business Analytics s'applique uniquement aux grandes entreprises, la BI aux PME"
        ],
        correctAnswer: 1,
        explanation: "Bien que liées, la Business Intelligence se concentre généralement sur l'analyse descriptive (que s'est-il passé?) tandis que la Business Analytics va plus loin avec des analyses prédictives (que pourrait-il se passer?) et prescriptives (que devrait-on faire?)."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quels types d'analyses font partie de la Business Analytics ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Analyse descriptive",
            "Analyse prédictive",
            "Analyse prescriptive",
            "Analyse rétrospective uniquement"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "La Business Analytics comprend l'analyse descriptive (que s'est-il passé ?), prédictive (que pourrait-il se passer ?) et prescriptive (que devrait-on faire ?). L'analyse rétrospective est un autre terme pour l'analyse descriptive, mais elle n'est pas la seule composante."
    },
    {
        question: "Qu'est-ce que le schéma en flocon de neige (snowflake schema) ?",
        options: [
            "Une visualisation de données en forme d'arbre",
            "Une extension du schéma en étoile où les tables de dimensions sont normalisées en plusieurs tables",
            "Un algorithme de clustering pour l'analyse de données",
            "Un type de graphique utilisé pour visualiser des données hiérarchiques"
        ],
        correctAnswer: 1,
        explanation: "Le schéma en flocon de neige est une extension du schéma en étoile où les tables de dimensions sont normalisées en plusieurs tables reliées, ce qui réduit la redondance mais augmente la complexité des jointures."
    },
    {
        question: "Qu'est-ce que le 'Self-Service BI' ?",
        options: [
            "Un système BI qui se met à jour automatiquement",
            "Une approche permettant aux utilisateurs métiers d'accéder et d'analyser les données sans l'aide du département IT",
            "Un logiciel BI open-source",
            "Un système BI qui ne nécessite pas de serveur dédié"
        ],
        correctAnswer: 1,
        explanation: "Le Self-Service BI est une approche qui permet aux utilisateurs non techniques (utilisateurs métiers) de créer leurs propres rapports, analyses et visualisations sans dépendre du département informatique."
    },
    {
        question: "Quelle est la différence principale entre les données structurées et non structurées ?",
        options: [
            "Les données structurées sont stockées dans des formats propriétaires tandis que les données non structurées sont en open source",
            "Les données structurées ont un schéma prédéfini et sont organisées dans des tables ou des bases de données, les données non structurées n'ont pas de format prédéfini",
            "Les données structurées sont plus récentes que les données non structurées",
            "Les données structurées sont toujours numériques, les données non structurées sont textuelles"
        ],
        correctAnswer: 1,
        explanation: "Les données structurées suivent un format ou schéma prédéfini et peuvent être facilement stockées dans des bases de données relationnelles. Les données non structurées (comme les e-mails, vidéos, médias sociaux) n'ont pas de format prédéfini et sont plus difficiles à analyser avec des outils traditionnels."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quelles sont les sources typiques de données non structurées ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Médias sociaux",
            "Fichiers audio et vidéo",
            "Tables SQL",
            "E-mails et documents texte"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Les données non structurées proviennent principalement des médias sociaux, fichiers audio/vidéo, e-mails et documents texte. Les tables SQL contiennent des données structurées avec un schéma défini."
    },
    {
        question: "Qu'est-ce qu'une métrique (ou mesure) dans un contexte BI ?",
        options: [
            "Un standard industriel pour mesurer la performance des outils BI",
            "Une valeur numérique qui peut être agrégée (somme, moyenne, etc.)",
            "Un équivalent métrique du système impérial",
            "Un indicateur de la taille d'une base de données"
        ],
        correctAnswer: 1,
        explanation: "Dans un contexte BI, une métrique est une valeur numérique qui peut être mesurée et agrégée (additionnée, moyennée, etc.) comme les ventes, les revenus ou les quantités. Ces métriques sont analysées selon différentes dimensions."
    },
    {
        question: "Quel est l'intérêt principal de la visualisation de données en BI ?",
        options: [
            "Rendre les rapports plus attractifs visuellement",
            "Économiser de l'espace dans les rapports imprimés",
            "Faciliter la compréhension des tendances et relations dans les données complexes",
            "Réduire les coûts de développement des applications BI"
        ],
        correctAnswer: 2,
        explanation: "La visualisation des données permet de transformer des informations complexes en représentations visuelles facilement compréhensibles, aidant ainsi à identifier rapidement des tendances, modèles et anomalies qui seraient difficiles à repérer dans des formats tabulaires."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quels types de visualisations sont couramment utilisés en BI ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Graphiques à barres et histogrammes",
            "Diagrammes de dispersion",
            "Cartes thermiques",
            "Schémas de bases de données"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Les visualisations courantes en BI incluent les graphiques à barres, histogrammes, diagrammes de dispersion et cartes thermiques. Les schémas de bases de données sont des outils de conception, pas des visualisations analytiques."
    },
    {
        question: "Qu'est-ce que le 'Data Governance' ?",
        options: [
            "Un système de gestion des droits d'auteur sur les données",
            "L'ensemble des processus, politiques et standards qui assurent la qualité, la sécurité et la conformité des données",
            "Un type particulier de base de données pour les données gouvernementales",
            "Un système de vote électronique pour les prises de décision basées sur les données"
        ],
        correctAnswer: 1,
        explanation: "La Data Governance (gouvernance des données) est l'ensemble des processus, politiques, rôles et standards qui garantissent que les données d'une organisation sont précises, cohérentes, sécurisées et utilisées de manière responsable et conforme aux réglementations."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quels aspects sont couverts par la Data Governance ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Qualité des données",
            "Sécurité et confidentialité",
            "Conformité réglementaire",
            "Programmation des applications"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "La Data Governance couvre la qualité des données, la sécurité et confidentialité, ainsi que la conformité réglementaire. La programmation des applications relève du développement logiciel, pas de la gouvernance des données."
    },
    {
        question: "Qu'est-ce que l'intelligence artificielle apporte à la Business Intelligence moderne ?",
        options: [
            "Uniquement une automatisation des tâches répétitives",
            "Des analyses prédictives avancées, une détection d'anomalies et des insights automatisés",
            "Simplement un terme marketing sans application réelle",
            "Elle remplace complètement les analystes humains"
        ],
        correctAnswer: 1,
        explanation: "L'IA enrichit la BI moderne avec des capacités d'analyse prédictive et prescriptive avancées, la détection automatique d'anomalies, l'identification de tendances, les insights automatisés et le traitement du langage naturel pour interroger les données."
    },
    {
        question: "Qu'est-ce que le 'Data Lake' ?",
        options: [
            "Un système de sauvegarde redondant pour les données critiques",
            "Un référentiel centralisé qui permet de stocker de grands volumes de données brutes dans leur format natif",
            "Un type spécifique de Data Warehouse optimisé pour le Big Data",
            "Une interface graphique pour visualiser les flux de données dans l'entreprise"
        ],
        correctAnswer: 1,
        explanation: "Un Data Lake est un référentiel centralisé qui permet de stocker d'énormes volumes de données brutes dans leur format natif (structuré, semi-structuré ou non structuré) jusqu'à ce qu'elles soient nécessaires pour analyse."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quels sont les avantages d'un Data Lake par rapport à un Data Warehouse traditionnel ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Capacité à stocker des données non structurées",
            "Schema-on-read vs. schema-on-write",
            "Plus grande évolutivité",
            "Intégration automatique des données"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Les Data Lakes offrent l'avantage de stocker facilement des données non structurées, utilisent une approche schema-on-read (plus flexible que le schema-on-write des Data Warehouses) et sont généralement plus évolutifs. Ils ne fournissent pas automatiquement l'intégration des données, qui est souvent plus complexe que dans un Data Warehouse traditionnel."
    },
    {
        question: "Qu'est-ce qu'une analyse OLAP ?",
        options: [
            "Online Linear Analysis Program - un type d'analyse statistique",
            "Online Analytical Processing - un système pour analyser rapidement des données multidimensionnelles",
            "Optimized Logical Analytical Procedure - une méthode d'optimisation des requêtes",
            "Operational Level Analysis Protocol - un standard pour analyser les performances opérationnelles"
        ],
        correctAnswer: 1,
        explanation: "OLAP (Online Analytical Processing) est une technologie qui permet aux utilisateurs d'analyser rapidement des données multidimensionnelles selon plusieurs perspectives à travers des opérations comme drill-down, roll-up, slice, dice et pivot."
    },
    {
        question: "Dans un schéma en étoile, quel est le rôle de la table de faits ?",
        options: [
            "Stocker les clés primaires de toutes les tables de dimensions",
            "Contenir les métriques et mesures ainsi que les clés étrangères vers les dimensions",
            "Définir les contraintes d'intégrité référentielle",
            "Sauvegarder les métadonnées du modèle dimensionnel"
        ],
        correctAnswer: 1,
        explanation: "Dans un schéma en étoile, la table de faits centrale contient les mesures numériques (métriques) de l'activité ainsi que les clés étrangères qui permettent de relier ces mesures aux différentes tables de dimensions."
    },
    {
        question: "Quelle est la principale fonction d'un ETL dans une architecture BI ?",
        options: [
            "Extraire les données des bases de données sources, les transformer pour répondre aux besoins analytiques et les charger dans un entrepôt de données",
            "Évaluer la taille et le type des données avant leur exploitation",
            "Effectuer des tests logiciels sur les applications BI",
            "Établir les liens entre les différentes tables d'une base de données"
        ],
        correctAnswer: 0,
        explanation: "ETL (Extract, Transform, Load) est un processus qui permet d'extraire les données de diverses sources, de les transformer pour les nettoyer et les formater selon les besoins, puis de les charger dans un entrepôt de données pour l'analyse."
    },
    // Question avec plusieurs réponses correctes
    {
        question: "Quelles sont les phases typiques d'un processus ETL ? (Sélectionnez toutes les réponses correctes)",
        options: [
            "Extraction des données depuis diverses sources",
            "Transformation (nettoyage, formatage, etc.)",
            "Chargement dans l'entrepôt de données",
            "Prise de décision automatique"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "Les phases typiques d'un processus ETL sont l'extraction (depuis diverses sources), la transformation (nettoyage, formatage, agrégation) et le chargement (dans un entrepôt de données). La prise de décision automatique n'est pas une phase de l'ETL mais une application potentielle des données après leur traitement."
    },
    {
        question: "Qu'est-ce que le MDX (MultiDimensional eXpressions) ?",
        options: [
            "Un langage de présentation de données comme HTML",
            "Un langage de requête conçu pour interroger des bases de données multidimensionnelles",
            "Un format de fichier pour échanger des données OLAP",
            "Une méthode d'indexation pour les bases de données NoSQL"
        ],
        correctAnswer: 1,
        explanation: "MDX (MultiDimensional eXpressions) est un langage de requête conçu spécifiquement pour interroger des structures de données multidimensionnelles et des cubes OLAP, tout comme SQL est utilisé pour interroger des bases de données relationnelles."
    },
    {
        question: "Qu'est-ce qu'un cube OLAP ?",
        options: [
            "Un objet physique en trois dimensions utilisé pour visualiser des données",
            "Une structure de données multidimensionnelle qui organise les données de manière à faciliter l'analyse interactive",
            "Un type spécifique de base de données SQL Server",
            "Un graphique tridimensionnel utilisé dans les tableaux de bord BI"
        ],
        correctAnswer: 1,
        explanation: "Un cube OLAP est une structure de données multidimensionnelle qui organise les informations autour des dimensions et des faits pour permettre une analyse rapide et interactive selon différentes perspectives."
    },
    {
        question: "Qu'est-ce que la latence des données dans un contexte BI ?",
        options: [
            "Le temps nécessaire pour afficher un rapport après avoir soumis une requête",
            "Le délai entre la création d'une donnée dans le système source et sa disponibilité pour l'analyse dans le système BI",
            "La période pendant laquelle les données restent pertinentes",
            "L'intervalle de temps entre deux mises à jour du data warehouse"
        ],
        correctAnswer: 1,
        explanation: "La latence des données fait référence au délai entre le moment où un événement se produit dans un système source et le moment où cette information est disponible pour l'analyse dans le système BI. Une latence plus faible permet des analyses plus actuelles."
    },
    {
        question: "Qu'est-ce que le 'data storytelling' dans le contexte de la Business Intelligence ?",
        options: [
            "Une technique de fiction basée sur des données réelles",
            "L'art de raconter une histoire cohérente et convaincante à partir des données pour aider à la prise de décision",
            "Une méthode de présentation chronologique des données historiques",
            "Un format de rapport financier standardisé"
        ],
        correctAnswer: 1,
        explanation: "Le data storytelling est l'art de présenter les données dans un récit cohérent qui met en évidence les insights importants, contextualise les informations et guide la prise de décision de manière plus convaincante qu'une simple présentation de chiffres."
    },
    {
        question: "Quelle est la différence entre le Data Warehouse et le Data Mart ?",
        options: [
            "Le Data Warehouse est plus ancien que le Data Mart",
            "Le Data Warehouse est centralisé et couvre toute l'entreprise, tandis que le Data Mart se concentre sur un domaine métier spécifique",
            "Le Data Mart utilise uniquement des bases de données NoSQL, tandis que le Data Warehouse utilise des bases SQL",
            "Le Data Warehouse est uniquement en cloud, tandis que le Data Mart est toujours on-premise"
        ],
        correctAnswer: 1,
        explanation: "Un Data Warehouse est un référentiel centralisé qui stocke les données intégrées de toute l'entreprise, tandis qu'un Data Mart est un sous-ensemble du Data Warehouse qui se concentre sur un domaine fonctionnel spécifique comme les ventes, le marketing ou les finances."
    },
    {
        question: "Qu'est-ce que le 'ROI' (Return On Investment) dans un projet BI ?",
        options: [
            "La relation entre les coûts d'un projet BI et les bénéfices qu'il génère",
            "Rate of Implementation - le taux de succès de l'implémentation d'une solution BI",
            "Relevance of Information - la pertinence des données utilisées dans un système BI",
            "Range of Integration - l'étendue de l'intégration d'une solution BI avec d'autres systèmes"
        ],
        correctAnswer: 0,
        explanation: "Le ROI (Return On Investment ou Retour sur Investissement) dans un projet BI mesure la rentabilité de l'investissement en comparant les bénéfices financiers générés par le projet aux coûts engagés pour sa mise en œuvre et sa maintenance."
    },
    {
        question: "Qu'est-ce que le 'drill-down' dans un contexte OLAP ?",
        options: [
            "Une technique de forage de données pour extraire des informations des disques durs",
            "Une navigation du général au particulier, permettant d'accéder à des niveaux de détail plus fins dans les données",
            "Une méthode pour réduire la taille d'un cube OLAP",
            "Une procédure d'archivage des données obsolètes"
        ],
        correctAnswer: 1,
        explanation: "Le 'drill-down' est une fonctionnalité OLAP qui permet à l'utilisateur de naviguer d'une vue générale des données vers un niveau de détail plus fin, par exemple en passant de données annuelles à des données trimestrielles puis mensuelles."
    }
];

// Cette fonction mélange les questions pour qu'elles apparaissent dans un ordre aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour obtenir un sous-ensemble limité de questions aléatoires
const getRandomQuestions = (limit = 20) => {
    // On mélange toutes les questions
    const shuffled = shuffleArray([...quizQuestions]);
    // On renvoie seulement les 20 premières (ou le nombre spécifié)
    return shuffled.slice(0, Math.min(limit, shuffled.length));
}; 