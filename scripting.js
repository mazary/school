document.getElementById('btnTareas').addEventListener('click', () => {
  const lista = document.getElementById('listaTareas');
  if (lista.style.display === 'none') {
    lista.style.display = 'block';
    document.getElementById('btnTareas').textContent = 'Ocultar tareas';
  } else {
    lista.style.display = 'none';
    document.getElementById('btnTareas').textContent = 'Mostrar tareas';
  }
});
