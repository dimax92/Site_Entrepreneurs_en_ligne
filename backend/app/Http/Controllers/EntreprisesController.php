<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entreprises;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class EntreprisesController extends Controller
{
    //
    public function store(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            "nom" => "required|string",
            "segments" => "required|string",
            "canaux" => "required|string",
            "relations" => "required|string",
            "valeur" => "required|string",
            "activites" => "required|string",
            "ressources" => "required|string",
            "partenaires" => "required|string",
            "revenus" => "required|string",
            "couts" => "required|string",
            "coordonnees" => "required|string"
            ]
        );

        if($validator->fails()){
            return response()->json($validator->errors(), 401);       
        }

        $entreprises = Entreprises::create([
            "user_id" => $id,
            "nom" => $request->input("nom"),
            "segments" => $request->input("segments"),
            "canaux" => $request->input("canaux"),
            "relations" => $request->input("relations"),
            "valeur" => $request->input("valeur"),
            "activites" => $request->input("activites"),
            "ressources" => $request->input("ressources"),
            "partenaires" => $request->input("partenaires"),
            "revenus" => $request->input("revenus"),
            "couts" => $request->input("couts"),
            "coordonnees" => $request->input("coordonnees"),
        ]);
        return response()->json(["message" => "Business model cree avec succes"], 201);
    }

    public function index()
    {
        return Entreprises::all();
    }

    public function search(Request $request, $search)
    {
        if($search !== "-"){
            return DB::select("SELECT * FROM `entreprises` WHERE filtre_recherche(REPLACE('$search', '-', ' '), CONCAT(`nom`, ' ', `segments`, ' ', `canaux`, ' ', `relations`, ' ', `valeur`, ' ', `activites`, ' ', `ressources`, ' ', `partenaires`)) = 10 ");
        }else{
            return DB::select("SELECT * FROM `entreprises` ");
        }
    }

    public function show($id)
    {
        $entreprises = Entreprises::findOrFail($id);
        return $entreprises;
    }

    public function update(Request $request, $id)
    {
        $userIdRequete = intval($request->input("user_id"));

        $entreprises = Entreprises::firstWhere('id','=',$id);

        $userIdUpdate = $entreprises->user_id;

        $validator = Validator::make($request->all(),[
            "nom" => "required|string",
            "segments" => "required|string",
            "canaux" => "required|string",
            "relations" => "required|string",
            "valeur" => "required|string",
            "activites" => "required|string",
            "ressources" => "required|string",
            "partenaires" => "required|string",
            "revenus" => "required|string",
            "couts" => "required|string",
            "coordonnees" => "required|string"
            ]
        );

        if($validator->fails()){
            return response()->json($validator->errors(), 401);       
        }

        if($userIdRequete === $userIdUpdate){
            $entreprises->update([
                "nom" => $request->input("nom"),
                "segments" => $request->input("segments"),
                "canaux" => $request->input("canaux"),
                "relations" => $request->input("relations"),
                "valeur" => $request->input("valeur"),
                "activites" => $request->input("activites"),
                "ressources" => $request->input("ressources"),
                "partenaires" => $request->input("partenaires"),
                "revenus" => $request->input("revenus"),
                "couts" => $request->input("couts"),
                "coordonnees" => $request->input("coordonnees"),
            ]);
            return response()->json(["message" => "modifier"], 201);  
        }else{
            return response()->json(["message" => "vous n'etes pas autorise"], 401);  
        }

    }

    public function destroy(Request $request, $id)
    {
        $userIdRequete = intval($request->input("user_id"));
        $entreprises = Entreprises::firstWhere('id','=',$id);
        $userIdUpdate = $entreprises->user_id;

        if($userIdRequete === $userIdUpdate){
            $entreprises->delete();
            return response()->json(["message" => "supprimer"], 201);  
        }else{
            return response()->json(["message" => "echec suppression"], 401);  
        }
    }

    public function mesEntreprises($id)
    {
        return DB::select("SELECT * FROM `entreprises` WHERE `user_id` = '$id' ");
    }

}
