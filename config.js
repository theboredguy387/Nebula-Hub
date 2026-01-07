const _CONFIG = {
    wispurl: (location.protocol === 'https:' ? 'wss' : 'ws') + '://' + location.host + '/wisp/',
    bareurl: (location.protocol === 'https:' ? 'https' : 'http') + '://' + location.host + '/bare/',
    prefix: '/scram/',
    encodeUrl: function(url) {
        return btoa(url);
    },
    decodeUrl: function(encoded) {
        return atob(encoded);
    },
    servers: {
        'auto': { name: 'Auto', flag: '', location: 'Auto-select' },
        'us-east': { name: 'US East', flag: '', location: 'New York' },
        'us-west': { name: 'US West', flag: '', location: 'Los Angeles' },
        'europe': { name: 'Europe', flag: '', location: 'London' },
        'asia': { name: 'Asia', flag: '', location: 'Tokyo' },
        'australia': { name: 'Australia', flag: '', location: 'Sydney' }
    },
    defaultServer: 'auto'
};

// Save to localStorage
if (typeof localStorage !== 'undefined') {
    if (!localStorage.getItem('nebula_config')) {
        localStorage.setItem('nebula_config', JSON.stringify(_CONFIG));
    }
}
