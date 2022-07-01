<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entreprises extends Model
{
    use HasFactory;
    protected $fillable = ["user_id", "nom", "segments", "canaux", "relations", "valeur", "activites", "ressources", "partenaires", "revenus", "couts", "coordonnees"];
}
