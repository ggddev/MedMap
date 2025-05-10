function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");//busca a section no HTML com o id que está ali

    let campoPesquisa = document.getElementById("campo-pesquisa").value;//busca o id que foi informado no HTML

    if(campoPesquisa == ""){
        section.innerHTML = "Nenhum resultado encontrado"; //aqui fazemos uma estrutura condicional, se o id campo-pesquisa estiver vazio, ele irá retornar a linha 7 
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase(); //aqui fazemos com que tudo o que o usuário digitar no ID campo-pesquisa, fique em minusculo

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for(let dado of dados){//nessa linha, criamos algo parecido com um objeto de Java, mas em JS
        titulo = dado.titulo.toLowerCase();// e nessas 3 linhas a seguir, nós atribuimos essas variaveis criadas aqui nesse arquivo, no arquivo 'data.js'
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){ //nesse IF, nós estamos dizendo assim: se o que estiver no titulo, ou na descrição, ou nas tags estiver também no id campo-pesquisa, ele irá executar as instruções abaixo

            //+= significa que ele irá somar o registro da var com o que virá depois e retornará o resultado 
            resultados += `
            <div class="item-resultado">
                <h2> ${dado.titulo}</h2>
                <p class="descricao-meta"> ${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Ir para o Maps</a>
            </div>
            `
            //lá em cima, foi criada a variavel 'resultados', aqui estamos atribuindo a ela uma <div> que irá mostrar o titulo do que irá retornar, a descrição e o link para mais informações. Ou seja, essa variavel 'resultados' irá ser inserida no HTML, e irá aparecer quando o usuário pesquisar algo e esse algo pesquisado estiver em nosso 'banco de dados'
        }
    }

    if(!resultados){//estamos dizendo que se o que conter no id campo-pesquisa não bater com o que está no nosso mini BD, a variavel resultados irá retornar a linha abaixo
        resultados = "Nenhum lugar foi localizado :(";
    }

    section.innerHTML = resultados; //aqui adicionamos ao HTML a variavel 'resultados'
}