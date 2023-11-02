const products = [
    {
        "id": 1,
        "name": "Dogteur Premium sans céréales chat stérilisé 6 kg",
        "image": "../img/product/product1.jpg",
        "description": "Les croquettes Dogteur sans céréales pour chats stérilisé constituent une alimentation complète et équilibrée avec 60 % de poulet, thon et saumon, sans céréales pour maintenir un poids de forme et une bonne santé du système urinaire. Ces croquettes sont hautement digestibles adaptées aux chats sensibles. Croquettes pour chat",
        "price": "46",
        "refuge_id": 1
    },
    {
        "id": 2,
        "name": "Beaphar Friandises herbe à chat bien être 35 g",
        "image": "../img/product/product2.jpg",
        "description": "La Friandise Beaphar Bien être est un délicieux en-cas croustillant fourré de pâte à l’herbe à chat. Il contient toutes les vitamines et les minéraux essentiels pour garder votre chat en pleine forme.",
        "price": 2,
        "refuge_id": 1
    },
    {
        "id": 3,
        "name": "Etrille carde petit modèle",
        "image": "../img/product/product3.jpg",
        "description": "Cette étrille carde possède un manche en bois avec dents métal, vous permettant de brosser et démêler les poils de votre chat.",
        "price": 2,
        "refuge_id": 1
    },
    {
        "id": 4,
        "name": "Croci Bâtonnets chat poulet thon coco 50 g",
        "image": "../img/product/product4.jpg",
        "description": "Les bâtonnets de chez Croci sont de succulentes friandises pour votre chat. Cette gourmandise est un bâtonnet à mâcher que votre compagnon va adorer, elle est idéale pour lui faire passer un bon moment.",
        "price": 4,
        "refuge_id": 1
    },
    {
        "id": 5,
        "name": "Specific Chat FKW Kidney Support 7 x 100 grs",
        "image": "../img/product/product5.jpg",
        "description": "Specific FKW Kidney Support aliment diététique complet pour le soutien de la fonction rénale.",
        "price": "11",
        "refuge_id": 1
    },
    {
        "id": "6",
        "name": "Hill's Prescription Diet Feline S/D 1.5 kg",
        "image": "../img/product/product6.jpg",
        "description": "Les croquettes Hill's Prescription Diet Feline S/D offrent une alimentation diététique complète à votre chat. Cette nutrition a été spécialement formulée pour aider à dissoudre les cristaux et les calculs de struvite chez les chats.",
        "price": "22",
        "refuge_id": 1
    },
    {
        "id": "7",
        "name": "Specific Chat FJW Joint Support",
        "image": "../img/product/product7.jpg",
        "description": "Specific Chat FJW Joint Support soutien le métabolisme des articulations en cas d'ostéoarthrose chez les chats adultes et seniors.",
        "price": "10",
        "refuge_id": 1
    },
    {
        "id": "8",
        "name": "Trixie l'arbre à chat Baza gris 50 cm",
        "image": "../img/product/product8.jpg",
        "description": "L'arbre à chat Baza est un véritable 4 en 1 pour votre chat. Cet arbre à chat permettra à votre chat de faire ses griffes, de se reposer en hauteur, ou de se détendre et de prendre soin de son pelage grâce à l'arche de massage qu'il contient.",
        "price": "42",
        "refuge_id": 1
    },
    {
        "id": "9",
        "name": "Specific Organic Diet adult pour chat au poisson 8x100 grs",
        "image": "../img/product/product9.jpg",
        "description": "Specific Organic Diet de chez Dechra est un aliment complet et équilibré destiné aux chats adultes. Cet aliment est constitué d'au moins 95% d'ingrédients d'origine biologique contrôlée.",
        "price": "15",
        "refuge_id": 1
    },
    {
        "id": "10",
        "name": "Dogteur Confort Urinaire Bio chien 100 g",
        "image": "../img/product/product10.jpg",
        "description": "Dogteur Confort Urinaire Bio est un complément alimentaire naturel à base de plantes afin de soutenir la fonction urinaire du chien.",
        "price": "18",
        "refuge_id": 2
    },
    {
        "id": "11",
        "name": "Friandises sans céréales à la volaille pour chien 100 g",
        "image": "../img/product/product11.jpg",
        "description": "Les friandises sans céréales à la volaille pour chien contiennent 80% de volaille, hautement digestibles et savoureuses pour le plus grand plaisir de votre chien ! Sa texture croquante aide à promouvoir une bonne hygiène dentaire. Hypoallergéniques, elles conviennent même aux chiens les plus sensibles (sans blé ni gluten de blé).",
        "price": 3,
        "refuge_id": 2
    },
    {
        "id": "12",
        "name": "Kong Stretchezz Jumbo Leopard",
        "image": "../img/product/product12.jpg",
        "description": "Kong Stretchezz Jumbo Leopard est un jouet XL pour amuser votre chien pendant des heures bruissement de papier froissé",
        "price": "16",
        "refuge_id": 2
    },
    {
        "id": "13",
        "name": "Zolux écuelle Merenda bleu 225 ml",
        "image": "../img/product/product13.jpg",
        "description": "L'écuelle Merenda est une gamelle en inox et antidérapante pour garantir un confort à votre chien lors de la prise de ses repas.",
        "price": 4,
        "refuge_id": 2
    },
    {
        "id": "14",
        "name": "Flexadin Advanced Boswellia 60 bouchées",
        "image": "../img/product/product14.jpg",
        "description": "Flexadin Advanced (avec Boswellia) est un aliment complémentaire diététique enrichi en UC-II ayant pour objectif le soutien du métabolisme des articulations en cas d’ostéo-arthrose du chien et de Boswellia serrata, une plante aux vertus antiinflammatoires et antidouleurs naturelles. 1 comprimé par jour quelque soit le poids du chien. Il se donne comme une friandise.",
        "price": "49",
        "refuge_id": 2
    },
    {
        "id": "15",
        "name": "Yarrah Bio Multi Biscuits Végétariens 250 grs",
        "image": "../img/product/product15.jpg",
        "description": "Les Multi-Biscuits Véga Yarrah pour chiens sont enrichis en algues marines, en spiruline, en levure et en malt. Ils proposent trois goûts différents par paquet et peuvent être donnés à tous les chiens.",
        "price": 4,
        "refuge_id": 2
    },
    {
        "id": "16",
        "name": "Flexadin Plus petit chien < 10 kg 90 bouchées",
        "image": "../img/product/product16.jpg",
        "description": "Flexadin Plus est un complément diététique pour chat et petits chiens ayant pour objectif le soutien du métabolisme des articulations en cas d’ostéo-arthrose.",
        "price": "35",
        "refuge_id": 2
    },
    {
        "id": "17",
        "name": "Flexadin Advanced Boswellia 30 bouchées",
        "image": "../img/product/product17.jpg",
        "description": "Flexadin Advanced (avec Boswellia) est un aliment complémentaire diététique enrichi en UC-II ayant pour objectif le soutien du métabolisme des articulations en cas d’ostéo-arthrose du chien et de Boswellia serrata, une plante aux vertus antiinflammatoires et antidouleurs naturelles. 1 comprimé par jour quelque soit le poids du chien. Il se donne comme une friandise.",
        "price": "30",
        "refuge_id": 2
    },
    {
        "id": "18",
        "name": "Dogteur shampooing PRO Soufre et Camphre 500 ml",
        "image": "../img/product/product18.jpg",
        "description": "Le shampooing PRO Dogteur Soufre et Camphre est un shampooing professionnel haut de gamme hypoallergenique spécialement conçu pour permettre l’élimination de manière naturelle des puces chez le chien.",
        "price": "16",
        "refuge_id": 2
    },
    {
        "id": "19",
        "name": "Zolux Crunchy Stick Chinchilla eglantine / groseille 115 g",
        "image": "../img/product/product19.jpg",
        "description": "Fabriquées à partir d'ingrédients naturels et vitaminiques, les baguettes Crunchy Sticks ont été spécialement conçues pour l'alimentation complémentaire des petits mammifères.",
        "price": 3,
        "refuge_id": 3
    },
    {
        "id": "20",
        "name": "Foin Selective Timothy Hay 2 kg",
        "image": "../img/product/product20.jpg",
        "description": "Le Foin Selective Timothy Hay est un aliment complémentaire pour lapin. Il est riche en fibres et en protéines pour permettre un bon équilibre alimentaire.",
        "price": "16",
        "refuge_id": 3
    },
    {
        "id": "21",
        "name": "Trixie Boîte de transport Pico 30 × 21 × 23 cm",
        "image": "../img/product/product21.jpg",
        "description": "Trixie Boîte de transport Pico est idéal pour le transport de votre cochon d'inde ou de votre lapin. Cette boîte possède des fentes laissant passer l'air et permettra à votre petit animal de voyager avec confort et sécurité.",
        "price": "10",
        "refuge_id": 3
    },
    {
        "id": "22",
        "name": "Versele Laga Chinchilla Nature 2.3 kg",
        "image": "../img/product/product22.jpg",
        "description": "Versele Laga Chinchilla Nature est un aliment complet répondant aux besoins alimentaires des chinchillas.",
        "price": "12",
        "refuge_id": 3
    },
    {
        "id": 23,
        "name": "Litière Chambiose Zolux 30 L",
        "image": "../img/product/product23.jpg",
        "description": "La Litière Chambiose est un produit à l'efficacité durable : absorbe 5 fois son volume et capte les odeurs, reste sèche en surface et ne colle pas aux pattes. C'est une litière végétale 100% biodégradable !",
        "price": "9",
        "refuge_id": 3
    },
    {
        "id": "24",
        "name": "Versele Laga Chinchilla Complete 500 gr",
        "image": "../img/product/product24.jpg",
        "description": "Chinchilla Complete est un aliment complet et savoureux pour chinchillas, composé à 100 % de croquettes extrudées, légères à digérer.",
        "price": 5,
        "refuge_id": 3
    },
    {
        "id": "25",
        "name": "Amtra Clean 150 ml",
        "image": "../img/product/product25.jpg",
        "description": "Le produit Clean de chez Amtra est un purificateur d'eau naturel pour aquariums. Il va limiter la pollution de l'eau et permettre de réduire les changements d'eau jusqu'à 50%.",
        "price": "10",
        "refuge_id": 4
    },
    {
        "id": "26",
        "name": "Amtra Axorb 525 g",
        "image": "../img/product/product26.jpg",
        "description": "Axorb de chez Amtra est un charbon actif d'origine minérale. Il va éliminer les résidus de médicaments après le traitement, les substances nocives, les polluants organiques, les pesticides, les odeurs, les colorants, le chlore, l'ozone et de nombreux métaux lourds. Il va rendre l'eau de votre aquarium pure et cristalline.",
        "price": "13",
        "refuge_id": 4
    },
    {
        "id": "27",
        "name": "Amtra granulés Oranda pro 100 ml",
        "image": "../img/product/product27.jpg",
        "description": "Oranda Pro de chez Amtra est de la nourriture en granulés pour poissons rouges, oriflamme et koi conservés en aquarium. Il s'agit d'un aliment complet qui va renforcer le système immunitaire de votre poisson.",
        "price": 4,
        "refuge_id": 4
    },
    {
        "id": "28",
        "name": "Tetra Goldfish 1 l",
        "image": "../img/product/product28.jpg",
        "description": "Tetra Goldfish est un aliment complet en flocons de grande qualité pour tous vos poissons rouges et d'eau froide. Il s'agit d'un mélange de flocons idéalement équilibrés pour assurer une alimentation diversifiée et variée.",
        "price": "14",
        "refuge_id": 4
    },
    {
        "id": "29",
        "name": "Tetra Goldfish Holiday 2x12 g",
        "image": "../img/product/product29.jpg",
        "description": "Tetra Goldfish Holiday est un aliment complet en bloc gélifié spécialement conçu pour nourrir jusqu'à 14 jours tous vos poissons rouges et d'eau froide ! Il est composé de Daphnies naturelles, vitamines et oligo-éléments essentiels, acides aminés et minéraux.",
        "price": 4,
        "refuge_id": 4
    }
]

export default products;