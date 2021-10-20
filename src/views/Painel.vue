<template>
  <main>
    <div id="introduction">
        <h1>Painel Administrativo</h1>
        <p>Educação financeira é tudo de bom</p>
    </div>

    <div id="introTable">
      <table>
        <div id="theadDiv">
          <thead>
            <tr>
              <th>Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
        </div>

        <tbody>
          <tr v-for="curso of curso" :key="curso.cursoID">
            <td>{{ curso.titulo }}</td>
            <div id="buttons">
              <td>
                <button @click="editar(curso)" id="editarBtn">
                  editar
                </button>
                <button @click="deleteCurso(curso)" id="excluirBtn">
                  excluir
                </button>
              </td>
            </div>
          </tr>
        </tbody>
      </table>
      <div id="divAdicionar">
        <a href="/AddCurso" id="adicionarBtn">
            adicionar curso
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import  Curso from "../service/curso";

export default {
    name:"Painel",
    data(){
        return {
            curso: []
        }
    },
    mounted() {
        Curso.getCursos().then(res =>{
            this.curso = res.data;
        }).catch(error => {
        return console.log(error);
      });
    }
}
</script>

<style scoped>
main {
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

h1 {
  color: var(--color-text-pink);
}

#introduction{
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: left;
    margin-bottom: 100px;
}

#introTable{
    display: flex;
    flex-direction: column;
    width: 80%;
}

table{
    display: flex;
    flex-direction: column;
    width: 100%;
}

tbody{
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

#theadDiv{
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #989898;
}

button{
    margin-right: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    cursor: pointer;
    border: none;
    border-radius: 0px;
}

#buttons{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: right;
}

#editarBtn{
    color: var(--color-text-light);
    background-color: var(--color-btn-yellow);
}

#excluirBtn{
    color: var(--color-text-light);
    background-color: var(--color-btn-red);
}

#divAdicionar{
    margin-top: 20px;
}

#adicionarBtn{
    color: var(--color-background-nav);
    cursor: pointer;
}
</style>