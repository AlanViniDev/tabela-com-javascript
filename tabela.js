<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<div id = "tabela"></div>
<script>
    
    var arrayID = ['1','2','3'];
    var arrayProduto = ['Café','Açucar','Molho de Tomate'];
    var arrayCategoria = ['Solidos','Solidos','Liquidos']
    var arrayDescricao = ['Produto em pó', 'Produto em pó','Produto liquido']
    var arrayTotal = [];
    arrayTotal.push({'array_1':arrayID,'array_2':arrayProduto,'array_3':arrayCategoria,'array_4':arrayDescricao});

    var lista = [];
    
        var tabela = document.getElementById("tabela");   
        arrayTotal.forEach(function (value,index){
        lista.push(`
        <tr>
        <td>${value.array_1.join('</br>')}</td>
        <td>${value.array_2.join('</br>')}</td>
        <td>${value.array_3.join('</br>')}</td>
        <td>${value.array_4.join('</br>')}</td>
        </tr>
        `)
        tabela.innerHTML = [`
            <table class='table table-dark'>
            <thead>
                <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Produto</th>
                <th scope='col'>Categoria</th>
                <th scope='col'>Descrição</th>
                </tr>
            </thead>
            <tbody>
            ${lista.join('')}
            </tbody>
            </table>
        `];
        });
</script>
