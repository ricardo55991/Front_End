import api from "./api";

export default {
    getAulas() {
        return api.get('Aulas').then(res => {
            return res


        }).catch(error => {
            return error
        })
    },
    getAulasByCursoId(cursoId) {
        return api.get(`AulasPorCurso/${cursoId}`).then(res => {
            return res
        }).catch(error => {
            return error
        })
    },

    salvar(aula){
        return api.post('Aulas', aula)
    }
}