export const getCompetenceData = ()=>{
    const experiences = [
        {
          type: 'stage/PFE',
          map: 'Faculté des sciences juridiques,économiques et sociales de Casablanca',
          date: 'Mai-Juin 2021',
          app: 'mobile'
          ,
          objective: 'Etude, Conception et réalisation d’une application mobile de gestion des réclamations et besoin des étudiants',
          tasks: [
            'Participer à des tâche de service informatique'
          ],
          technologies: [
            'reactnative', 'php', 'mysql', 'html', 'css', 'bootstrap', 'react', 'javascript', 'react'
          ]
    
        },
        {
          type: 'projet',
          map: 'Casablanca Mission Freelance',
          date: 'Mars 2021',
          app: 'site',
          objective: 'Créaction d’un application web pour l’achat des produit (coté client , coté admin) ',
          tasks: [
            'Gérer les traitements et les opérations pour chaque produit .'
          ],
          technologies: [
            'php', 'mysql', 'html', 'css', 'bootstrap', 'javascript'
          ]
    
        },
        {
          type: 'projet',
          map: 'Casablanca-Initiative',
          date: 'avril 2021',
          app: 'site',
          objective: 'Créaction d’un application web en collaboration avec l’association "wlidat el khir',
          tasks: [
            'Se produit a pour but à aider l’association à bien gérer et organiser les familles pauvres et leurs enfants et a bien les servir à tous les niveaux jusqu’on arrivons à leur trouver des solutions pour développer leurs revenus'
          ],
          technologies: [
            'php', 'laravel', 'mysql', 'html', 'css', 'bootstrap', 'javascript', 'react'
          ]
    
        },
        {
          type: 'projet',
          map: 'Casablanca-Initiative',
          date: 'Mars 2022',
          app: 'site',
          objective: 'Créaction d’un application web pour la creation d’un portfolio en ligne',
          tasks: [
            'Gérer le profile , les competences , les formation , les experiences et les langues'
          ],
          technologies: [
            'php', 'laravel', 'mysql', 'html', 'css', 'bootstrap', 'javascript'
          ]
    
        } ,
        {
          type: 'projet',
          map: 'Casablanca-Ecole',
          date: 'février 2021',
          app: 'site',
          objective: 'Gestion Cabinet Dentaire',
          tasks: [
            'Prendre des rendez-vous pour les clients' ,
            'Gérer les clients' , 
            'Gérer les traitements et les opérations pour chaque client' , 
            'Gérer les ordonnances du client'
          ],
          technologies: [
           'java' , 'mysql'
          ]
    
        } ,
        {
          type: 'PFE',
          map: 'Casablanca-Ecole',
          date: 'Avril-Mai 2020',
          app: 'site',
          objective: 'Mise en place de Contrôle d’accès avec système de reconnaissance faciale',
          tasks: [
            "Manipuler des matériaux et utiliser l'ordinateur Raspberry pi" ,
             "Se familiariser avec le système d'exploitation Raspbian, Langage python, l'internet des objet et l'intelligence artificielle" ,
             
            ],
          technologies: [
           'python' , 'html' , 'css' , 'bootstrap' , 'php' , 'mysql'
          ]
    
        } 
        
      ];

      return experiences;
}