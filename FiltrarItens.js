//Função de Filtragem
function filtraItens(category) {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all') {
            item.classList.add('show');
        } else {
            item.classList.toggle('show', item.classList.contains(category));
        }
    });
}

filtraItens('all'); // Exibe todos os itens inicialmente
