<?php

namespace App\Models;

use CodeIgniter\Model;

class CaracteristicaModel extends Model
{

    protected $table = 'caracteristica';
    protected $primaryKey = 'idCaracteristica';
    protected $allowedFields = ['idArticulo', 'caracteristica_descripcion', 'valor', 'estado'];
    // protected $validationRules = [
    //     'caracteristica_descripcion' => 'required|min_length[3]|max_length[100]|is_unique[caracteristica.caracteristica_descripcion]',
    //     'valor' => 'required|min_length[2]|max_length[100]|is_unique[caracteristica.valor]',
    // ];
    protected $skipValidation = false;
    protected $validationMessages = [
        'caracteristica_descripcion' => [
            'required' => 'Campo caracteristica descripción es necesario'
        ],
        'valor' => [
            'required' => 'Campo valor descripción es necesario'
        ]
    ];
}
