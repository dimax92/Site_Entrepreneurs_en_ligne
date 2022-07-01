import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useCookies } from 'react-cookie';

const MesEvenements = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const[data, setData] = useState([]);
    const[reponse,setReponse] = useState();

    function recevoirDonnees(){
        axios.get("https://busimod.com/backend/public/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
        .then((response)=>{
            axios.get("https://busimod.com/backend/public/api/mesentreprises/"+response.data, {
                headers: {
                    'Authorization': "Bearer "+cookies.token
                  }
            })
            .then((result)=>{
                setData(result.data)
            })
            .catch((error)=>{})
        })
        .catch((error)=>{})
    }

    useEffect(()=>{
        recevoirDonnees();
    },[]);

    function creationDonneesSuppression(id){
        const data = new FormData();
        data.append('user_id', id);
        return data;
    }

    function suppressionDonnees(id){
        axios.get("https://busimod.com/backend/public/api/profile", {
            headers: {
                'Authorization': "Bearer "+cookies.token
              }
        })
        .then((response)=>{
            axios.post("https://busimod.com/backend/public/api/suppression/"+id, creationDonneesSuppression(response.data), {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': "Bearer "+cookies.token
                }
            })
            .then(function (result) {
                setReponse(<p className="messageValidation">Suppression Business Model reussi</p>);
                document.location.href='https://busimod.com/MesEntreprises';
            })
            .catch(function (error) {
                setReponse(<p className="messageErreur">Echec suppression Business Model</p>);
            });
        })
    }
    
    return (
        <div className="divMesEntreprises">
            <Navigation/>
            {reponse}
            <div className="divMesEntreprises__entreprisesMap">
            {data.map((resultat)=>{
                return(
                    <div className="divMesEntreprises__entreprisesMap__entreprise">
                        <p>{resultat.nom}</p>
                        <div className="divMesEntreprises__entreprisesMap__entreprise__supprimerModifier">
                        <a href={"Modification/"+resultat.id}>
                            <button>Modifier</button>
                        </a>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            suppressionDonnees(resultat.id);
                        }}>Supprimer</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MesEvenements;