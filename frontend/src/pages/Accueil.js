import React from "react";
import Navigation from "../components/Navigation";

const Accueil = () => {
    
    return(
        <div className="divAccueil">
        <Navigation/>
        <h1>Site gratuit de mise en ligne de Business Models</h1>
        <h2>Inscription</h2>
        <p>
            Pour vous inscrire il faut cliquer sur "Inscription" 
            dans la barre de navigation en haut de la page. Ensuite 
            vous aurez acces a un formulaire d'inscription. Vous 
            devez remplir le champ "Pseudo" avec un pseudonyme, le 
            champ "Email" avec votre adresse mail et le champ "Mot de passe" 
            avec un mot de passe (votre mot de passe doit contenir un minimum 
            de 8 caracteres, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere 
            speciale). Une fois que vous avez rempli tous les champs 
            vous devez cliquer sur le bouton "S'inscrire".
        </p>
        <h2>Connexion</h2>
        <p>
            Pour vous connecter il faut cliquer sur "Connexion" 
            dans la barre de navigation en haut de la page. Ensuite 
            vous aurez acces a un formulaire de connexion. Vous 
            devez remplir le champ "Email" avec votre adresse mail et le champ 
            "Mot de passe" avec votre mot de passe. Une fois que vous avez rempli 
            tous les champs vous devez cliquer sur le bouton "Se connecter".
        </p>
        <h2>Creer son Business Model</h2>
        <p>
            Pour creer son Business Model il faut cliquer sur "Creer son Business Model" 
            dans la barre de navigation en haut de la page. Ensuite vous 
            aurez acces a un formulaire de mise en ligne de votre Business Model. 
        </p>
        <h3>Segments de clientèle : pour qui ?</h3>
        <p>
            Les clients sont au cœur de votre projet. Sans client (qui paie le bon prix !), point de survie ! Indiquez ici votre cible ou vos segments de cible si vous en avez plusieurs, c’est-à-dire un groupe homogène de personnes / d’entreprises qui ont les mêmes besoins, que vous pouvez servir via le même canal de distribution, qui seront sensibles à la même communication, qui accepteront de payer le même prix et avec lesquels vous aurez le même type de relations.
            Distinguez clairement les différents type de clients si vous en avez (bénéficiaires, acheteurs, prescripteurs). Affinez ensuite chaque segment utilisateur identifié. Si vous avez utilisé le canvas « proposition de valeur », il vous suffit de recopier ce que vous avez défini.
            Pour comprendre les principes de segmentation, lisez le chapitre dédié à ce sujet.
        </p>
        <h3>Proposition de valeur : quoi et pourquoi ?</h3>
        <p>
            La proposition de valeur est votre offre, ainsi que ce qui fait que vos clients vont acheter votre produit / service plutôt que celui d’une autre entreprise. Il s’agit de la combinaison de produits et / ou de services qui répond aux besoins, exigences de votre cible / de vos segments de client (nouveauté, performance, prix, personnalisation, réduction de coûts, réduction de risque, accessibilité, prix, marque, design, utilité …). La composante “proposition de valeur” est indissociable de la composante “segment de clientèle”.
            Pour schématiser et pour faciliter la lecture par des tiers, indiquez 3 éléments :
            Votre offre (Une plate-forme de réservation de voyages pour personnes à mobilité réduite / Un restaurant traditionnel écologique).
            Les prestations / produits / services que vous proposez (Des hôtels, lieux de loisirs, centre de vacances accessibles aux personnes à mobilité réduite / Un menu "produits de saison bio et locaux" avec 3 entrées au choix, 3 plats au choix, 3 desserts au choix).
            La valeur ajoutée que vous proposez par-rapport aux autres acteurs et qui conduira les clients vont venir chez vous (Par exemple : la labellisation des lieux par des personnes à mobilité réduite / des menus respectueux de la nature et valorisant le savoir-faire des agriculteurs locaux).
            Si vous avez utilisé la matrice “proposition de valeur” (value proposition canvas), il vous suffit de recopier ce que vous avez défini.
            ​Pour comprendre les principes du couple "Produit - Marché", lisez le chapitre dédié à ce sujet.
        </p>
        <h3>Canaux : comment ?</h3>
        <p>Par quels canaux allez-vous faire connaître votre proposition de valeur ? Comment allez-vous aider vos clients à choisir votre proposition de valeur plutôt que celle d’un concurrent (et donc à évaluer votre proposition de valeur afin de décider qu’elle est meilleure que celle des concurrents) ? Comment allez-vous vendre vos produits / services (vente en ligne, magasins, grossiste….etc.) ? Quel système de SAV ? Quels seront vos points de contacts avec vos clients ?</p>
        <h3>Relations avec les clients : comment ?</h3>
        <p>Quel type de relations allez-vous établir avec votre cible / chacun des segments de votre cible (self-service, communautaire, assistance personnelle, SAV, co-création….etc.) ?</p>
        <h3>Ressources clés : avec quoi ?</h3>
        <p>
            Ce sont les ressources indispensables au fonctionnement de votre activité : locaux, matériels, machines, fonds financiers, ressources humaines, achats de compétences, logiciels, marque…
            Ces ressources doivent être en lien avec vos canaux de distribution, communication…etc. Posez-vous la question suivante : “Si je n’ai pas cette ressource, puis-je faire tourner mon entreprise ?”, si la réponse est “non”, c’est une ressource clé.
        </p>
        <h3>Activités clés : quoi ?</h3>
        <p>Ce sont les activités indispensables au fonctionnement de votre entreprise : la production, la gestion logistique, l’ingénierie, la gestion d’un site web… Posez-vous la question suivante : “Si je n’exerce pas cette activité, puis-je faire tourner mon entreprise ?”, si la réponse est “non”, c’est une activité-clé.</p>
        <h3>Partenariats clés : avec qui ?</h3>
        <p>
            Ce sont les intervenants stratégiques du projet : fournisseurs clés, partenaires clés… Des ressources que vous allez vous procurer grâce aux partenariats. Pour être sûr de vos choix, demandez-vous quelles sont vos motivations pour ces partenariats : l’optimisation (financière ou autre), les économies, la réduction des risques et des incertitudes, l’acquisition de ressources ou d’activités particulières ?
            Parfois, des partenaires sont aussi des clients. Posez-vous la question suivante “Si je n'ai pas ce partenaire, puis-je faire tourner mon entreprise ?”, si la réponse est “non”, c’est un partenaire-clé.
        </p>
        <h3>Flux de revenus : combien ?</h3>
        <p>Comment chacun de vos segments paiera-t-il ? Ponctuellement à chaque achat / location ? Sur abonnement ? En forfait annuel ? Prix fixes ou négociations possibles ? Un prix différent par cible ? Prix en fonction des enchères ? Prix en fonction des volumes vendus ? Si vous proposez un service gratuit à un segment de clients, lequel vous apportera des revenus ?</p>
        <h3>Structure des coûts : combien ?</h3>
        <p>Quels sont les coûts les plus importants ? Quelles sont les activités les plus coûteuses ? Quelles sont les ressources les plus coûteuses ?... Votre modèle est-il plutôt axé sur les coûts (faible structure de coûts, tarifs bas, automatisation maximum, sous-traitance intensive…) ou axé sur la valeur (focalisé sur la création de valeur, proposition de valeur haut de gamme) ?</p>       
        <h2>Modifier son Profil</h2>
        <p>
            Pour modifier son Profil il faut cliquer sur "Profil" 
            dans la barre de navigation en haut de la page. Pour modifier 
            son Profil il suffit de remplir le champ correspondant
            et appuyer sur le bouton "Modifier" du champ en question.
        </p>
        <h2>Desinscription</h2>
        <p>
            Pour se desinscrire il faut cliquer sur "Profil" 
            dans la barre de navigation en haut de la page. Pour 
            vous desinscrire appuyer sur le bouton "Se desinscrire" en bas de la page.
        </p>
        <h2>Rechercher un Business Model</h2>
        <p>
            Pour rechercher un Business Model il faut cliquer sur "Rechercher" 
            dans la barre de navigation en haut de la page. Remplissez 
            le champ de recherche avec votre requete puis cliquez sur "Rechercher".
        </p>
        <h2>Acceder a un Business Model</h2>
        <p>
            Pour acceder a un Business Model il faut cliquer sur un Business Model sous la barre de recherche.
        </p>
        </div>
    )
}

export default Accueil;