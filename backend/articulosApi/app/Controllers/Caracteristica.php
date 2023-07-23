<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\CaracteristicaModel;
use App\Models\ArticuloModel;

class Caracteristica extends ResourceController
{

    public function __construct()
    {
        $this->model = $this->setModel(new CaracteristicaModel());
    }

    public function mostrarCaracteristicas($id = null)
    {
        try {

            $caracteristica = new CaracteristicaModel();
            $articulo = new ArticuloModel();
            $articulos = $articulo->where('idArticulo', $id, 'estado', 1)->findAll();
            if ($articulos) {
                $caracteristicas = $caracteristica->where('idArticulo', $id, 'estado', 1)->findAll();
                return $this->respond($caracteristicas);
            }
            return $this->respond();
        } catch (\Exception $error) {
            return $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function agregarCaracteristica()
    {
        try {

            $caracteristica = $this->request->getJSON();
            if ($this->model->insert($caracteristica)) :

                $caracteristica->idCaracteristica = $this->model->insertID();
                return $this->respondCreated($caracteristica);

            else :
                return $this->failValidationErrors($this->model->validation->listErrors());
            endif;
        } catch (\Exception $e) {
            $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function eliminarCaracteristica($id = null)
    {

        try {

            if ($id == null)
                return $this->failValidationErrors('No se encontro caracteristica');

            $caracteristicaVerificado = $this->model->find($id);

            if ($caracteristicaVerificado == null)

                return $this->failNotFound('No se ha encontrado una caracteristica con el id: ' . $id);

            $data = [
                'estado' => 0,
            ];

            if ($this->model->update($id, $data)) :

                return $this->respondUpdated($data);
            else :
                return $this->failValidationErrors($this->model->validation->listErrors());
            endif;
        } catch (\Exception $e) {
            $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }
}
