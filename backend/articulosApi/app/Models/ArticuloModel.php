<?php

namespace App\Models;

use CodeIgniter\Model;

class ArticuloModel extends Model
{

    protected $table = 'articulo';
    protected $primaryKey = 'idArticulo';
    protected $allowedFields = ['codigo', 'nombre', 'categoria', 'estado'];
    protected $validationRules = [
        'codigo' => 'required|min_length[2]|max_length[100]',
        'nombre' => 'required|min_length[2]|max_length[100]',
        'categoria' => 'required|min_length[2]|max_length[100]',
    ];
    protected $skipValidation = false;
    protected $validationMessages = [
        'codigo' => [
            'required' => 'Campo código es necesario'
        ],
        'nombre' => [
            'required' => 'Campo nombre es necesario'
        ],
        'categoria' => [
            'required' => 'Campo categoria es necesario'
        ]
    ];
}
