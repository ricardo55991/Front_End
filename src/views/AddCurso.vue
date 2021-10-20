<template>
    <main>
        <div id="content">
            <h1>Novo Curso</h1>

            <form @submit.prevent="salvar">
                <div id="cursoArea">
                    <input type="text" placeholder="Título" v-model="curso.titulo">
                    <input type="text" placeholder="upload capa" v-model="curso.imagemCapa">
                    <input type="text" placeholder="Professor" v-model="curso.professor">
                    <input id="descricao" type="text" placeholder="Descrição" v-model="curso.cursoDescricao">
                </div>


                <button>salvar</button>
            </form>
        </div>
    </main>
</template>

<script>
import Curso from '../service/curso'

export default {
    name: 'AddCurso',
    data(){
        return{
            curso: {
                titulo: '',
                professor: '',
                imagemCapa: '',
                cursoDescricao: '',
            }
        }
    },
    methods:{
        salvar(){
            Curso.salvar(this.curso).then(resposta =>{
                alert('Salvo com sucesso!')
            });
        }
    }
}
</script>

<style scoped>
main {
    width: 100%;
    margin-top: 50px;
}

h1 {
  color: var(--color-text-pink);
  margin-bottom: 20px;
}

h3{
    color:var(--color-background-nav);
    margin-bottom: 20px;
}

#content{
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 80%;   
}

#cursoArea{
    display: flex;
    flex-direction: column;
}

#aulaArea{
    display: flex;
    flex-direction: column;
}

input{
    border: 1px solid #555;
    border-radius: 0px;
    margin-bottom: 15px;
    padding: 5px;
}

#descricao{
    padding-bottom: 50px;
}

button{
    width: 25%;
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    border: none;
    border-radius: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
}
</style>