import con from "../repository/connection.js";

export async function inserirMusica(musica){
    const comando = `
        insert into tb_lista_negra(nm_musica, ds_artista, url_musica, dt_lançamento, qtd_vizualizacoes, hr_duracao, dt_destque, ds_idioma)
        values(?, ? , ?, ?, ?)`
    
    const resposta = await con.query(comando, [musica.nome, musica.artista, musica.musica, musica.lançamento, pessoa.vizualizacoes, musica.duracao, musica.destque, musica.idioma])
    let info = resposta[0]

    return info.insertId
}

export async function consultarListaNegra(){
    const comando = `
        select id_musica        id,
            nm_musica           nome,
            ds_artista          artista,
            url_musica          musica,
            dt_lançamento       lançamento,
            qtd_vizualizacoes   vizualizacao,
            hr_duracao          duracao,
            dt_destque          destque,
            ds_idioma           idioma
        
        from td_musica`

    let resposta = await con.query(comando)
    let registros = resposta[0]

    return registros
}

export async function alteraMusica(pessoa, id){
    const comando = `
        update from td_musica
        set   nm_musica =?
        ds_artista      =?
        url_musica      =?
        dt_lançamento   =?
        qtd_vizualizacoes =?
        hr_duracao      =?
        dt_destque      =?
        ds_idioma       =?
        where id_musica = ?  
        `
        let resposta = await con.query(comando, [musica.nome, musica.artista, musica.musica, musica.lançamento, pessoa.vizualizacoes, musica.duracao, musica.destque, musica.idioma, id])

        let info = resposta[0]
        return info.affectedRows
    
}

export async function removerMusica(id){
    const comando = `
            delete from td_musica
            where id_musica = ?
            `
    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    return info.affectedRows  
}