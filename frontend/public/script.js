document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const dataMessage = document.getElementById('dataMessage');

    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', async () => {
            dataMessage.textContent = 'Cargando datos...';
            try {
                const response = await fetch('/api/data');
                const data = await response.json();
                dataMessage.textContent = `Mensaje de API: "${data.message}" (Timestamp: ${new Date(data.timestamp).toLocaleTimeString()})`;
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
                dataMessage.textContent = 'Error al cargar datos de la API.';
            }
        });
    }
});