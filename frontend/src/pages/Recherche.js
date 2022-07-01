import React, {useState, useEffect} from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const Recherche = () => {
    const[data, setData] = useState([]);

    function recevoirDonnees(){
        axios.get("https://busimod.com/backend/public/api/entreprise")
        .then((result)=>{
            setData(result.data);
        })
        .catch((error)=>{})
    };

    function remplacementEspacesTirets(espaces){
        let espacesSplit=espaces.split(" ");
        let nouveauEspaces=[];
        for(let i=0; i<=espacesSplit.length-1; i++){
            if(espacesSplit[i]!==""){
                nouveauEspaces.push(espacesSplit[i]);
            }
        };
        return nouveauEspaces.join("-");
    };

    function rechercheDonnees(recherche){
        axios.post("https://busimod.com/backend/public/api/recherche/-"+recherche)
                .then((result)=>{
                    setData(result.data);
                })
                .catch((error)=>{})
    };

    useEffect(()=>{recevoirDonnees()},[]);

    return (
        <div className="divRecherche">
            <Navigation/>
            <form>
                <input id="inputRecherche" className="divRecherche__inputRecherche" type="text"></input>
                <button onClick={(e)=>{
                    e.preventDefault();
                    rechercheDonnees(remplacementEspacesTirets(document.querySelector("#inputRecherche").value));
                }}>Rechercher</button>
            </form>
            <div className="divRecherche__divMap">
                {data.map((resultat)=>{
                    return(
                        <a href={remplacementEspacesTirets(resultat.nom)+"-"+resultat.id}>
                            <p>{resultat.nom}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Recherche;