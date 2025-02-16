// public/script.js
async function fetchServerStatus() {
    try {
      const response = await fetch('/api/status');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const statusData = await response.json();
  
      // Update the UI with server data
      const statusDiv = document.getElementById('status');
      statusDiv.innerHTML = `
        <p><strong>Players:</strong> ${statusData.players.online} / ${statusData.players.max}</p>
        <p><strong>MOTD:</strong> ${statusData.motd.clean}</p>
      `;
    } catch (error) {
      console.error('Error fetching server status:', error);
      document.getElementById('status').innerHTML = `<p>Error fetching server status</p>`;
    }
  }
  
  // Fetch status immediately, then every 10 seconds
  fetchServerStatus();
  setInterval(fetchServerStatus, 10000);
  