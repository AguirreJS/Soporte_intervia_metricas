



// loadingOverlay.js
function showLoadingOverlay() {
    // Crear el div del overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
  
    // Crear el div del mensaje
    const messageDiv = document.createElement('div');
    messageDiv.style.color = 'white';
    messageDiv.style.fontSize = '36px'; // Tamaño de letra más grande
    messageDiv.className = 'loading-text';  // Agrega una clase para estilizar
    messageDiv.innerText = 'Cargando';
  
    // Crear los puntos con animación
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.className = `dot dot-${i + 1}`;  // Agrega una clase para cada punto
      dot.innerText = '.';
      messageDiv.appendChild(dot);
    }
  
    // Anexar el mensaje al overlay y luego el overlay al cuerpo del documento
    overlay.appendChild(messageDiv);
    document.body.appendChild(overlay);
  
    // Remover el overlay después de 3 segundos
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 3000);
  }
  
  export default showLoadingOverlay;
  

