import api from "./api";

export default {
    getCursos() {
        return api.get('Cursos').then(res => {
            return res


        }).catch(error => {
            return error
        })
    },
    getCursoById(cursoId) {
        return api.get(`Cursos/${cursoId}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },

    salvar(curso){
        return api.post('Cursos', curso)
    },
    
    apagar(curso){
        return api.delete('Cursos', {data: curso})
    }
}