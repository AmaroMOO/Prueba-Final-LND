fetch('cfgs.json')
    .then(response => response.json())
    .then(data => {
        const ciclos = data.ciclos;
        const main = document.querySelector('main');

        const table = document.createElement('table');
        table.border = 1;

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['Posición', 'Nombre', 'Familia profesional'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        ciclos.forEach(ciclo => {
            const row = document.createElement('tr');
            [ciclo.posicion, ciclo.nombre, ciclo.familia_profesional].forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        main.appendChild(table);
    })
    .catch(error => {
        console.error('Error cargando los datos:', error);
    });