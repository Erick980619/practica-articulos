<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ArticuloModel;

use function PHPUnit\Framework\isEmpty;

class Articulo extends ResourceController
{

    public function __construct()
    {
        $this->model = $this->setModel(new ArticuloModel());
    }

    public function mostrarArticulos()
    {
        try {
            $articulo = new ArticuloModel();
            $articulos = $articulo->where('estado', 1)->findAll();
            return $this->respond($articulos);
        } catch (\Exception $error) {
            return $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function mostrarCategorias()
    {
        try {
            $articulo = new ArticuloModel();

            $articulo->select('categoria');
            $articulo->distinct();
            $articulo->where('estado', 1);
            $articulo->orderBy('categoria', 'asc');
            $articulos = $articulo->findAll();
            return $this->respond($articulos);
        } catch (\Exception $error) {
            return $this->failServerError('Ha ocurrido un error en el servidor' . $error);
        }
    }

    public function consultarArticulos($codigo, $nombre, $categoria)
    {
        $articulo = new ArticuloModel();

        if ($codigo !== 'null') {
            $articulo->like('codigo', $codigo);
        }

        if ($nombre !== 'null') {
            $articulo->like('nombre', $nombre);
        }

        if ($categoria !== 'null') {
            $articulo->where('categoria', $categoria);
        }



        $articulos = $articulo->where('estado', 1)->findAll();



        return $this->respond($articulos);
    }

    public function visualizarArticulo($id = null)
    {
        try {

            if ($id == null)
                return $this->failServerError('No se encontro articulo');


            $articulo = $this->model->where('estado', 1)->find($id);

            if ($articulo == null)
                return $this->failNotFound('No se ha encontrado un articulo con el id: ' . $id);


            return $this->respond($articulo);
        } catch (\Exception $e) {
            $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function agregarArticulo()
    {

        try {

            $articulo = $this->request->getJSON();

            if ($this->model->insert($articulo)) :

                $articulo->idArticulo = $this->model->insertID();
                $response = [
                    'status'   => 201,
                    'error'    => null,
                    'messages' => [
                        'success' => 'Se guardo correct'
                    ]
                ];
                return $this->respondCreated($response);

            else :
                return $this->failValidationErrors($this->model->validation->listErrors());
            endif;
        } catch (\Exception $e) {
            $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function actualizarArticulo($id = null)
    {
        try {

            if ($id == null)
                return $this->failValidationErrors('No se encontro articulo');

            $articuloVerificado = $this->model->find($id);

            if ($articuloVerificado == null)

                return $this->failNotFound('No se ha encontrado un articulo con el id: ' . $id);


            $articulo = $this->request->getJSON();

            if ($this->model->update($id, $articulo)) :

                $articulo->idarticulo = $id;
                return $this->respondUpdated($articulo);
            else :
                return $this->failValidationErrors($this->model->validation->listErrors());
            endif;
        } catch (\Exception $e) {
            $this->failServerError('Ha ocurrido un error en el servidor');
        }
    }

    public function eliminarArticulo($id = null)
    {
        try {

            if ($id == null)
                return $this->failValidationErrors('No se encontro articulo');

            $articuloVerificado = $this->model->find($id);

            if ($articuloVerificado == null)

                return $this->failNotFound('No se ha encontrado un articulo con el id: ' . $id);
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
