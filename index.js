const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const lista = document.getElementById("lista");
const overlay = document.getElementById("overlay");
const criarTarefa= document.getElementById("criarTarefa");
const busca = document.getElementById("busca");

function abrirModal() {
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}

function fecharModal(){
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}

function buscarTarefas() {
     fetch("http://localhost:20011/tarefas")
        .then(response=>response.json())
        .then(response=> {
            inserirTarefas(response);
        });
} buscarTarefas();

function inserirTarefas(listaDeTarefas) {
    if(listaDeTarefas.length > 0) {
        lista.innerHTML = ""
        listaDeTarefas.map(tarefa => {
            lista.innerHTML+= `
            <li>
                <h5>${tarefa.titulo}</h5>
                <p>${tarefa.descricao}</p>
                <div class="actions">
                    <box-icon name="trash" size="sm" onclick="deletarTarefa(${tarefa.id})"></box-icon>
                  </div>
                </li>
            `
        });
    }
}

function novaTarefa(event){
    event.preventDefault();

        let tarefa={
            titulo: titulo.value,
            descricao: descricao.value,
        };
        
        fetch("http://localhost:20011/tarefas",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(tarefa)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            fecharModal();

            document.getElementById("busca").value = "";

            buscarTarefas();
            alert("Tarefa criada com sucesso!");
            let form =document.querySelector("#criarTarefa form");
            form.reset();
        })
        .catch(error => {
            console.error("Erro ao criar tarefa", error);
        });
}
 
function deletarTarefa(id) {
    fetch(`http://localhost:20011/tarefas/${id}`,{
        method: "DELETE"
    })
    .then(response => response.json())
    .then(response => {
        alert("Tarefa Deletada.");
        console.log(response);
        buscarTarefas();
    })
    .catch(error => {
        console.error("Erro ao deletar tarefa", error);
        buscarTarefas();
    });
}

function pesquisarTarefa() {
    let lis = document.querySelectorAll("ul li");
    let busca = document.getElementById("busca");

    if(busca.value.length > 0) {
        lis.forEach(li => {
            let tituloTarefa = li.querySelector("h5").innerText.toLowerCase();
            let termoBusca = busca.value.toLowerCase();

            if(!tituloTarefa.includes(termoBusca)) {
                li.style.display = "none";
            
            }else {
                li.style.display = "block";
                
            }
        });
    } else {
        lis.forEach(li => {
            li.style.display = "block";
        });
    }
}