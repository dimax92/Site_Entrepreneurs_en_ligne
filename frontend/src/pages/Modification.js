import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useCookies } from 'react-cookie';

const Modification = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const[reponse,setReponse] = useState();
    const[reponseNom,setReponseNom] = useState();
    const[reponseSegments,setReponseSegments] = useState();
    const[reponseCanaux,setReponseCanaux] = useState();
    const[reponseRelations,setReponseRelations] = useState();
    const[reponseValeur,setReponseValeur] = useState();
    const[reponseActivites,setReponseActivites] = useState();
    const[reponseRessources,setReponseRessources] = useState();
    const[reponsePartenaires,setReponsePartenaires] = useState();
    const[reponseRevenus,setReponseRevenus] = useState();
    const[reponseCouts,setReponseCouts] = useState();
    const[reponseCoordonnees,setReponseCoordonnees] = useState();

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

    function messageValidation(){
        setReponse(<p className="messageValidation">Business Model modifie</p>)
        setReponseNom();
        setReponseSegments();
        setReponseCanaux();
        setReponseRelations();
        setReponseValeur();
        setReponseActivites();
        setReponseRessources();
        setReponsePartenaires();
        setReponseRevenus();
        setReponseCouts();
        setReponseCoordonnees();
    }
  
    function messageErreur(error){
        setReponse(<p className="messageErreur">Echec modification Business Model</p>)
        if(error.response.data.nom){
            setReponseNom(<p className="messageErreurInput">{error.response.data.nom}</p>)
        }else{
            setReponseNom()
        }if(error.response.data.segments){
            setReponseSegments(<p className="messageErreurInput">{error.response.data.segments}</p>)
        }else{
            setReponseSegments()
        }if(error.response.data.canaux){
            setReponseCanaux(<p className="messageErreurInput">{error.response.data.canaux}</p>)
        }else{
            setReponseCanaux()
        }if(error.response.data.relations){
            setReponseRelations(<p className="messageErreurInput">{error.response.data.relations}</p>)
        }else{
            setReponseRelations()
        }if(error.response.data.valeur){
            setReponseValeur(<p className="messageErreurInput">{error.response.data.valeur}</p>)
        }else{
            setReponseValeur()
        }if(error.response.data.activites){
            setReponseActivites(<p className="messageErreurInput">{error.response.data.activites}</p>)
        }else{
            setReponseActivites()
        }if(error.response.data.ressources){
            setReponseRessources(<p className="messageErreurInput">{error.response.data.ressources}</p>)
        }else{
            setReponseRessources()
        }if(error.response.data.partenaires){
            setReponsePartenaires(<p className="messageErreurInput">{error.response.data.partenaires}</p>)
        }else{
            setReponsePartenaires()
        }if(error.response.data.revenus){
            setReponseRevenus(<p className="messageErreurInput">{error.response.data.revenus}</p>)
        }else{
            setReponseRevenus()
        }if(error.response.data.couts){
            setReponseCouts(<p className="messageErreurInput">{error.response.data.couts}</p>)
        }else{
            setReponseCouts()
        }if(error.response.data.coordonnees){
            setReponseCoordonnees(<p className="messageErreurInput">{error.response.data.coordonnees}</p>)
        }else{
            setReponseCoordonnees()
        }
    }

    function creationDonnees(user_id){
        let nom = document.querySelector("#nom").value;
        let segments = document.querySelector("#segments").value;
        let canaux = document.querySelector("#canaux").value;
        let relations = document.querySelector("#relations").value;
        let valeur = document.querySelector("#valeur").value;
        let activites = document.querySelector("#activites").value;
        let ressources = document.querySelector("#ressources").value;
        let partenaires = document.querySelector("#partenaires").value;
        let revenus = document.querySelector("#revenus").value;
        let couts = document.querySelector("#couts").value;
        let coordonnees = document.querySelector("#coordonnees").value;

        const data = new FormData();
        data.append('user_id', user_id)
        data.append('nom', nom);
        data.append('segments', segments);
        data.append('canaux', canaux);
        data.append('relations', relations);
        data.append('valeur', valeur);
        data.append('activites', activites);
        data.append('ressources', ressources);
        data.append('partenaires', partenaires);
        data.append('revenus', revenus);
        data.append('couts', couts);
        data.append('coordonnees', coordonnees);

        return data;
    }

    function envoiDonnees(){
        axios.get("https://busimod.com/backend/public/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
        .then(function (reponse) {
                axios.post("https://busimod.com/backend/public/api/modification/"+id, creationDonnees(reponse.data), {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        'Authorization': "Bearer "+cookies.token
                    }
                })
                .then(function (resultat) { 
                    messageValidation();
                })
                .catch(function (error) {
                    messageErreur(error);
                });
        })
        .catch(function (error) {
        });
    }
    
    return (
        <div className="divModification">
            <Navigation/>
            {reponse}
            <form className="divModification__formulaire">
                <label for="nom">Nom de l'entreprise</label>
                {reponseNom}
                <input id="nom" className="nom" defaultValue={nom}></input>
                <label for="segments">Segments clients</label>
                {reponseSegments}
                <textarea id="segments" className="segments" defaultValue={segments}></textarea>
                <label for="canaux">Canaux de distribution</label>
                {reponseCanaux}
                <textarea id="canaux" className="canaux" defaultValue={canaux}></textarea>
                <label for="relations">Relations clients</label>
                {reponseRelations}
                <textarea id="relations" className="relations" defaultValue={relations}></textarea>
                <label for="valeur">Proposition de valeur</label>
                {reponseValeur}
                <textarea id="valeur" className="valeur" defaultValue={valeur}></textarea>
                <label for="activites">Activites cles</label>
                {reponseActivites}
                <textarea id="activites" className="activites" defaultValue={activites}></textarea>
                <label for="ressources">Ressources cles</label>
                {reponseRessources}
                <textarea id="ressources" className="ressources" defaultValue={ressources}></textarea>
                <label for="partenaires">Partenaires cles</label>
                {reponsePartenaires}
                <textarea id="partenaires" className="partenaires" defaultValue={partenaires}></textarea>
                <label for="revenus">Structure de revenus</label>
                {reponseRevenus}
                <textarea id="revenus" className="revenus" defaultValue={revenus}></textarea>
                <label for="couts">Structure de couts</label>
                {reponseCouts}
                <textarea id="couts" className="couts" defaultValue={couts}></textarea>
                <label for="coordonnees">Coordonnees de contact</label>
                {reponseCoordonnees}
                <input id="coordonnees" className="coordonnees" defaultValue={coordonnees}></input>
                <button className="divModification__formulaire__boutonEvenement" onClick={(e)=>{
                    e.preventDefault();
                    envoiDonnees();
                }}>Modifier</button>
            </form>
        </div>
    )
}

export default Modification;