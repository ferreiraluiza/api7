import * as db from '../repository/musicaRepository.js';

import {Router} from "express";
const endpoints = Router();

endpoints.get('/API2/', async (req, resp)=>{
    try{
        let registros = await db.consultarMusica();
        resp.send(registros);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/API2/',async (req, resp) =>{
    try{
        let pessoa = req.body;
        let id = await db.inserirMusica(musica);

        resp.send({
            novoId: id
        })
    }

    catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.put('/API2/:id',async (req, resp) =>{
    try {
        let id= req.params.id;
        let pessoa=req.body;

        let linhasAfetadas = await db.alterarMusica(id, musica);
        if (linhasAfetadas >= 1){
            resp.send();
        }   
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
     }
     catch (err){
        resp.status(400).send({
            erro: err.message
        })
     }
})

endpoints.delete('/API2/:id', async (req,resp) =>{
    try{
        let id = req.params.id;

        let linhasAfetadas = await db.removerMusica(id);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        resp.status(400).send({
            erro:err.mesage
        })
    }
})

export default endpoints;