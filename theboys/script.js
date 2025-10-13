// The Boys - Extreme Content Streaming Platform
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functions
    setupFilters();
    setupFavorites();
    setupHistory();
    setupMobileMenu();
    setupVideos();
    
    // Initially hide all sections except video section
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show home by default (just the video section)
    document.querySelector('.menu a.active').addEventListener('click', function(e) {
        e.preventDefault();
        showSection(null); // Show only video section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Function to show specific sections
function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the video section always
    document.getElementById('video-section').style.display = 'flex';
    
    // If a specific section was requested, show it
    if (sectionId) {
        document.getElementById(sectionId).style.display = 'block';
        // Scroll to the section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update active menu item
    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
        if (sectionId && link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        } else if (!sectionId && link.getAttribute('href') === '#') {
            link.classList.add('active');
        }
    });
}

// Function to scroll to videos section
function scrollToVideos() {
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// Global variables
let selectedVideoEmbed = null;
let isAdPlaying = false;
let adTimer = null;
let adDuration = 10; // 10 seconds total ad duration
let skipDelay = 2; // Show skip button after 2 seconds

// Setup video click events
function setupVideos() {
    const videosContainer = document.getElementById('videos-container');
    
    // Use event delegation for better performance
    videosContainer.addEventListener('click', function(e) {
        // Find closest video element (if any)
        const video = e.target.closest('.video');
        if (!video) return; // Not clicked on a video
        
        // Don't process if clicked on favorite button
        if (e.target.closest('.favorite-btn')) return;
        
        // Set active class
        document.querySelector('.video.active')?.classList.remove('active');
        video.classList.add('active');
        
        // Get embed code
        const embedCode = video.dataset.embed;
        if (!embedCode) return;
        
        // Extract title from embed code
        const titleMatch = embedCode.match(/<br>(.+)$/);
        const videoTitle = titleMatch ? titleMatch[1] : 'Untitled Video';
        
        // Store the selected video embed
        selectedVideoEmbed = embedCode;
        
        // Show ad before playing the video
        showAd();
        
        // Save to watch history
        const videoName = video.querySelector('.video-info h3').textContent;
        const videoImg = video.querySelector('.video-thumbnail img').src;
        const category = video.querySelector('.video-category').textContent;
        
        addToHistory(videoName, embedCode, videoImg, category);
    });
}

// Function to play the embedded video
function playVideo(embedCode) {
    const videoPlayer = document.getElementById('video-player');
    
    // Clear any existing content
    videoPlayer.innerHTML = '';
    
    // Extract the iframe part from the embed code
    const iframeMatch = embedCode.match(/<iframe[^>]+><\/iframe>/);
    if (iframeMatch) {
        // Insert the iframe
        videoPlayer.innerHTML = iframeMatch[0];
        
        // Make the iframe responsive
        const iframe = videoPlayer.querySelector('iframe');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
        }
    } else {
        // If no iframe found, show error message
        videoPlayer.innerHTML = `
            <div class="placeholder-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Error loading video</p>
            </div>
        `;
    }
}

// Ad system functions
function showAd() {
    // Don't show ad if one is already playing
    if (isAdPlaying) return;
    isAdPlaying = true;
    
    // Reset timer
    adDuration = 10;
    
    // Get ad container and elements
    const adContainer = document.getElementById('adContainer');
    const adContent = document.getElementById('adContent');
    const adTimer = document.getElementById('adTimer');
    const skipAdBtn = document.getElementById('skipAdBtn');
    
    // Clear any existing ad content
    adContent.innerHTML = '';
    
    // Use an image ad
    const adImage = document.createElement('img');
    adImage.src = '../favicon.jpg'; // Your ad image
    adImage.alt = 'Advertisement';
    adImage.style.width = '100%';
    adImage.style.height = '100%';
    adImage.style.objectFit = 'contain';
    adContent.appendChild(adImage);
    
    // Update timer display
    adTimer.textContent = adDuration;
    
    // Show ad container
    adContainer.style.display = 'flex';
    
    // Hide skip button initially
    skipAdBtn.style.display = 'none';
    
    // Start the ad timer
    startAdTimer();
    
    // Show skip button after delay
    setTimeout(() => {
        skipAdBtn.style.display = 'block';
    }, skipDelay * 1000);
    
    // Add click event for skip button
    skipAdBtn.onclick = skipAd;
}

function startAdTimer() {
    // Clear any existing timer
    if (adTimer) clearInterval(adTimer);
    
    // Get timer element
    const timerElement = document.getElementById('adTimer');
    
    // Start new timer
    adTimer = setInterval(() => {
        adDuration--;
        
        // Update timer display
        timerElement.textContent = adDuration;
        
        // When timer reaches 0, end the ad
        if (adDuration <= 0) {
            endAd();
        }
    }, 1000);
}

function skipAd() {
    // Skip the current ad
    endAd();
}

function endAd() {
    // Clear the timer
    if (adTimer) {
        clearInterval(adTimer);
        adTimer = null;
    }
    
    // Hide ad container
    const adContainer = document.getElementById('adContainer');
    adContainer.style.display = 'none';
    
    // Reset ad playing flag
    isAdPlaying = false;
    
    // Play the selected video
    if (selectedVideoEmbed) {
        playVideo(selectedVideoEmbed);
        selectedVideoEmbed = null; // Reset selected video
    }
}

// Setup filters functionality
function setupFilters() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('categoryFilter');
    const favoritesToggle = document.getElementById('favoritesToggle');
    
    // Define the filter function globally so it can be called from elsewhere
    window.applyFilters = function() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const showOnlyFavorites = favoritesToggle.classList.contains('active');
        
        // Get favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // Filter videos
        document.querySelectorAll('.video').forEach(video => {
            const videoTitle = video.querySelector('.video-info h3').textContent.toLowerCase();
            const videoCategory = video.dataset.category;
            const videoEmbed = video.dataset.embed;
            
            // Check if video matches all filters
            const matchesSearch = videoTitle.includes(searchTerm);
            const matchesCategory = category === 'all' || videoCategory === category;
            const matchesFavorites = !showOnlyFavorites || favorites.includes(videoEmbed);
            
            // Show or hide based on filters
            if (matchesSearch && matchesCategory && matchesFavorites) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    };
    
    // Add event listeners
    searchInput.addEventListener('input', window.applyFilters);
    categoryFilter.addEventListener('change', window.applyFilters);
    favoritesToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        window.applyFilters();
    });
}

// Setup favorites functionality
function setupFavorites() {
    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Set initial state for favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const video = btn.closest('.video');
        const videoEmbed = video.dataset.embed;
        
        // Set initial heart state
        if (favorites.includes(videoEmbed)) {
            btn.querySelector('i').classList.remove('fa-regular');
            btn.querySelector('i').classList.add('fa-solid');
        }
        
        // Add click event
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent video click
            
            const icon = this.querySelector('i');
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            if (icon.classList.contains('fa-solid')) {
                // Remove from favorites
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                
                // Update localStorage
                favorites = favorites.filter(embed => embed !== videoEmbed);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            } else {
                // Add to favorites
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                
                // Update localStorage
                if (!favorites.includes(videoEmbed)) {
                    favorites.push(videoEmbed);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                }
            }
            
            // Apply filters if favorites filter is on
            if (document.getElementById('favoritesToggle').classList.contains('active')) {
                window.applyFilters();
            }
        });
    });
}

// Setup history functionality
function setupHistory() {
    const historyToggle = document.querySelector('.history-toggle');
    const historyPanel = document.getElementById('historyPanel');
    const closeHistory = document.querySelector('.close-history');
    const clearHistory = document.querySelector('.clear-history');
    
    // Toggle history panel
    historyToggle.addEventListener('click', function() {
        historyPanel.classList.toggle('active');
        loadHistory();
    });
    
    // Close history panel
    closeHistory.addEventListener('click', function() {
        historyPanel.classList.remove('active');
    });
    
    // Clear history
    clearHistory.addEventListener('click', function() {
        localStorage.removeItem('watchHistory');
        loadHistory(); // Reload (empty) history
    });
}

// Add video to watch history
function addToHistory(videoName, videoEmbed, videoImg, category) {
    // Get existing history
    let history = JSON.parse(localStorage.getItem('watchHistory') || '[]');
    
    // Create history item
    const historyItem = {
        name: videoName,
        embed: videoEmbed,
        img: videoImg,
        category: category,
        timestamp: new Date().getTime()
    };
    
    // Remove duplicate if exists
    history = history.filter(item => item.embed !== videoEmbed);
    
    // Add new item at the beginning
    history.unshift(historyItem);
    
    // Limit history to 20 items
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    // Save to localStorage
    localStorage.setItem('watchHistory', JSON.stringify(history));
}

// Load and display watch history
function loadHistory() {
    const historyContent = document.getElementById('historyContent');
    const history = JSON.parse(localStorage.getItem('watchHistory') || '[]');
    
    // Clear existing content
    historyContent.innerHTML = '';
    
    if (history.length === 0) {
        historyContent.innerHTML = '<p class="empty-history">No watch history yet</p>';
        return;
    }
    
    // Add history items
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-thumbnail">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="history-info">
                <h4>${item.name}</h4>
                <span>${item.category}</span>
                <span class="history-time">${formatTime(item.timestamp)}</span>
            </div>
        `;
        
        // Add click event to play the video
        historyItem.addEventListener('click', function() {
            // Hide history panel
            document.getElementById('historyPanel').classList.remove('active');
            
            // Set selected video and show ad
            selectedVideoEmbed = item.embed;
            showAd();
        });
        
        historyContent.appendChild(historyItem);
    });
}

// Format timestamp for history
function formatTime(timestamp) {
    const now = new Date().getTime();
    const diff = now - timestamp;
    
    // Less than a minute
    if (diff < 60000) {
        return 'Just now';
    }
    
    // Less than an hour
    if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    
    // Less than a day
    if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    // Less than a week
    if (diff < 604800000) {
        const days = Math.floor(diff / 86400000);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    
    // Format as date
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}