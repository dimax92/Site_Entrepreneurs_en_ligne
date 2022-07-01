import React, { useRef, useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";

const Contenu = () => {

    const[nom, setNom] = useState();
    const[segments, setSegments] = useState();
    const[canaux, setCanaux] = useState();
    const[relations, setRelations] = useState();
    const[valeur, setValeur] = useState();
    const[activites, setActivites] = useState();
    const[ressources, setRessources] = useState();
    const[partenaires, setPartenaires] = useState();
    const[revenus, setRevenus] = useState();
    const[couts, setCouts] = useState();
    const[coordonnees, setCoordonnees] = useState();

    let { id } = useParams();

    function recevoirDonnees(id){
        axios.get("https://busimod.com/backend/public/api/entreprise/"+id)
        .then((result)=>{
            setNom(result.data.nom);
            setSegments(result.data.segments);
            setCanaux(result.data.canaux);
            setRelations(result.data.relations);
            setValeur(result.data.valeur);
            setActivites(result.data.activites);
            setRessources(result.data.ressources);
            setPartenaires(result.data.partenaires);
            setRevenus(result.data.revenus);
            setCouts(result.data.couts);
            setCoordonnees(result.data.coordonnees);
        })
        .catch((error)=>{})
    }

    useEffect(()=>{
        recevoirDonnees(id);
    },[]);
    
    return (
        <div className="divContenu">
            <Navigation/>
            <h1>{nom}</h1>
            <h2>Segments clients</h2>
            <p>{segments}</p>
            <h2>Canaux de distribution</h2>
            <p>{canaux}</p>
            <h2>Relations clients</h2>
            <p>{relations}</p>
            <h2>Proposition de valeur</h2>
            <p>{valeur}</p>
            <h2>Activites cles</h2>
            <p>{activites}</p>
            <h2>Ressources cles</h2>
            <p>{ressources}</p>
            <h2>Partenaires cles</h2>
            <p>{partenaires}</p>
            <h2>Structure de revenus</h2>
            <p>{revenus}</p>
            <h2>Structure de couts</h2>
            <p>{couts}</p>
            <h2>Coordonnees de contact</h2>
            <p>{coordonnees}</p>
        </div>
    )
}

export default Contenu;