//1) Incrementando o contador no console
//Imagine que você está desenvolvendo um aplicativo web interativo e deseja implementar uma funcionalidade de contagem. Cada vez que um botão é clicado, um contador deve ser incrementado em 1, e o valor atualizado do contador deve ser exibido no console do navegador. Sua tarefa é criar esta funcionalidade utilizando JavaScript.
const allBtn = document.querySelectorAll('.btn')

let n = 0;
function click() {
    n = n + 1;
    console.log(`Counting: ${n}`);
}

for (i = 0; i < allBtn.length; i++) {
    const btn = allBtn[i];
    btn.onclick = click;
}


