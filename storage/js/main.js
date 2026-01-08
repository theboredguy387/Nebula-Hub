// Main JavaScript for Nebula Hub

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Nebula Hub initialized');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('nebula_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Load saved server
    const savedServer = localStorage.getItem('nebula_server') || 'auto';
    const serverSelect = document.getElementById('serverSelect');
    if (serverSelect) {
        serverSelect.value = savedServer;
    }
});

// Theme switching
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nebula_theme', theme);
}

// Navigation
function navigateTo(page) {
    window.location.href = page;
}

// Search games
function searchGames() {
    const searchTerm = document.getElementById('gameSearch').value.toLowerCase();
    const gameItems = document.querySelectorAll('.game-item');
    
    gameItems.forEach(item => {
        const gameName = item.querySelector('h3').textContent.toLowerCase();
        const gameDesc = item.querySelector('p').textContent.toLowerCase();
        
        if (gameName.includes(searchTerm) || gameDesc.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Load game
function loadGame(gameUrl, gameName) {
    localStorage.setItem('lastGame', gameUrl);
    localStorage.setItem('lastGameName', gameName);
    window.location.href = `/iframe.html?url=${encodeURIComponent(gameUrl)}&name=${encodeURIComponent(gameName)}`;
}

// Quick navigation
function quickNav(url) {
    window.location.href = `/proxy.html?url=${encodeURIComponent(url)}`;
}
