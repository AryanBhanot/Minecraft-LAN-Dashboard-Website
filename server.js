// server.js
const express = require('express');
const { status } = require('minecraft-server-util');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// API endpoint to fetch Minecraft server status
app.get('/api/status', async (req, res) => {
  // Replace these with your actual LAN server details
  const host = '192.168.1.100'; // Example IP address of your Minecraft LAN server
  const port = 25565;          // Default Minecraft port

  try {
    const serverStatus = await status(host, port, { timeout: 5000 });
    res.json(serverStatus);
  } catch (error) {
    console.error('Error fetching server status:', error);
    res.status(500).json({ error: 'Unable to fetch server status' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
