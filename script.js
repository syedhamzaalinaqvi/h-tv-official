// Simple script for H-TV with essential functionality - Performance Optimized
// Channel Data
const channels = [
     {
        id: 1,
        name: "A Plus",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/a-plus-live.webp?id=42",
        iframe: "https://live.streamly.com.co:8081/pk-aplus/index.m3u8"
    },
    {
        id: 2,
        name: "A Sports",
        category: "sports",
        country: "pakistan",
        logo: "https://yt3.googleusercontent.com/7ko4g0YM7E49IIbhfMhYJOWGTCIAuASHcPXRsBPWMOiBIuM0tBHe2Z9OVkzO1vVSxGSDZ1f1Sg=s900-c-k-c0x00ffffff-no-rj",
        iframe: "<iframe src='https://bradm.ax/build/202410/09/10dddbda311d7cd7ad4cb3ee7ffaaa441bf5a620/index.html?mediaUrl=https%3A%2F%2Flive.streamly.com.co%3A8081%2Fpk-Asports%2Findex.m3u8' width='800px' height='400px' frameBorder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
    },
    {
        id: 3,
        name: "Aaj Entertainment",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-entertainment-live.webp?id=10",
        iframe: "https://live.streamly.com.co:8081/pk-aajent/index.m3u8"
    },
    {
        id: 4,
        name: "Aaj News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-news-live.webp?id=48",
        iframe: "https://live.streamly.com.co:8081/aajnews/index.m3u8"
    },
    {
        id: 5,
        name: "Aan HD",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1681977574-logo.webp?id=71",
        iframe: "https://live.streamly.com.co:8081/pk-aantv/index.m3u8"
    },
    {
        id: 6,
        name: "ARY Digital",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-digital-live-logo.webp?id=34",
        iframe: "https://live.streamly.com.co:8081/pk-arydigital/index.m3u8"
    },
    {
        id: 7,
        name: "ARY News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1684242189-logo.webp?id=64",
        iframe: "https://live.streamly.com.co:8081/pk-arynews/index.m3u8"
    },
    {
        id: 8,
        name: "ARY Zindagi",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-zindagi-live-logo.webp?id=38",
        iframe: "https://live.streamly.com.co:8081/aryzindagi/index.m3u8"
    },
    {
        id: 9,
        name: "Bol Entertainment",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-entertainment-live.webp?id=89",
        iframe: "https://live.streamly.com.co:8081/pk-bolent/index.m3u8"
    },
    {
        id: 10,
        name: "Bol News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-news-live.webp?id=97",
        iframe: "https://live.streamly.com.co:8081/bol-news/index.m3u8"
    },
    {
        id: 11,
        name: "Cartoon Network",
        category: "kids",
        country: "usa",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/cartoon-network-live.webp?id=82",
        iframe: "https://live.streamly.com.co:8081/cartoonnetwork-sd/index.m3u8"
    },
    {
        id: 11,
        name: "Color Cineplex",
        category: "entertainment",
        country: "India",
        logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Color_Cineplex_HD.png",
        iframe: "https://live.streamly.com.co:8081/colorscinplex/index.m3u8"
    },
    {
        id: 12,
        name: "Dawn News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/dawn-news-live.webp?id=46",
        iframe: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/DawnNews-abr/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ni8xMS8yMDI0IDc6MzQ6NTIgQU0maGFzaF92YWx1ZT1yQlpjYUR5VGNzeFllSlpzc3lobHR3PT0mdmFsaWRtaW51dGVzPTE="
    },
    {
        id: 13,
        name: "Express Entertainment",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/express-entertainment-live.webp?id=75",
        iframe: "https://live.streamly.com.co:8081/expressnet/index.m3u8"
    },
    {
        id: 14,
        name: "Express News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/express-news-live.webp?id=70",
        iframe: "https://live.streamly.com.co:8081/expressnews/index.m3u8"
    },
    {
        id: 15,
        name: "Geo Entertainment",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/geo-entertainment-live.webp?id=72",
        iframe: "https://live.streamly.com.co:8081/pk-geoent/index.m3u8"
    },
    {
        id: 16,
        name: "Geo Kahani",
        category: "entertainment",
        country: "pakistan",
        logo: "https://yt3.googleusercontent.com/ytc/AIdro_lt2jwFpTYjusceAsLlIE0B312SEUb4A4Du-rbN8n_STCg=s900-c-k-c0x00ffffff-no-rj",
        iframe: "https://live.streamly.com.co:8081/pk-geokahani/index.m3u8"
    },
    {
        id: 17,
        name: "Geo News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/geo-news-live.webp?id=98",
        iframe: "https://live.streamly.com.co:8081/pk-geonews/index.m3u8"
    },
    {
        id: 18,
        name: "Green Entertainment",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1702552123-logo.webp?id=45",
        iframe: "https://live.streamly.com.co:8081/pk-greenent/index.m3u8"
    },
    {
        id: 19,
        name: "GNN HD",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/gnn-live.webp?id=10",
        iframe: "https://live.streamly.com.co:8081/gnnnews/index.m3u8"
    },
    {
        id: 20,
        name: "HUM TV",
        category: "entertainment",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1738840613135.webp?id=70",
        iframe: "https://live.streamly.com.co:8081/pk-hument/index.m3u8"
    },
    {
        id: 21,
        name: "Hum News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-News-Channel-logo.webp?id=17",
        iframe: "https://cdn21lhr.tamashaweb.com:8087/jazzauth/humnews-abr/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xMC8yMDI0IDY6MTc6MTkgQU0maGFzaF92YWx1ZT1MYnQ0VWJQd1U2WGpBQ0Nka2Vqcnl3PT0mdmFsaWRtaW51dGVzPTE="
    },
    {
        id: 22,
        name: "JALWA",
        category: "music",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/jalwa-tv-live.webp?id=79",
        iframe: "https://live.streamly.com.co:8081/pk-jalwahd/index.m3u8"
    },
    {
        id: 23,
        name: "Neo News",
        category: "news",
        country: "usa",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/neo-tv-live.webp?id=27",
        iframe: "https://live.streamly.com.co:8081/neonews/index.m3u8"
    },
    {
        id: 24,
        name: "Nickelodeon",
        category: "kids",
        country: "usa",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/TMSH-1720190626301.webp?id=84",
        iframe: "https://live.streamly.com.co:8081/nick/index.m3u8"
    },
    {
        id: 25,
        name: "Nick Jr.",
        category: "kids",
        country: "usa",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1729547438288.webp?id=52",
        iframe: "https://live.streamly.com.co:8081/nickjr/index.m3u8"
    },
    {
        id: 26,
        name: "PTV Sports",
        category: "sports",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750321954030.webp?id=30",
        iframe: "https://live.streamly.com.co:8081/pk-ptvsports/index.m3u8"
    },
    {
        id: 27,
        name: "Samaa News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/samaa-tv-live.webp?id=44",
        iframe: "https://cdn12isb.tamashaweb.com:8087/jazzauth/Tamasha-News-abr/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTAvMTcvMjAyNSA3OjQ4OjI2IEFNJmhhc2hfdmFsdWU9ZENYbzVjVkR6REdMbXNhWmZOZHRNZz09JnZhbGlkbWludXRlcz02MA%3D%3D:8087/jazzauth/Tamasha-News-abr/playlist.m3u8"
    },
    {
        id: 28,
        name: "Such News",
        category: "news",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/such-tv-live.webp?id=15",
        iframe: "https://live.streamly.com.co:8081/suchnews/index.m3u8"
    },
    {
        id: 29,
        name: "Ten Sports",
        category: "sports",
        country: "pakistan",
        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ten-sports-hd-logo.webp?id=81",
        iframe: "https://live.streamly.com.co:8081/pk-tensports/index.m3u8"
    }

    // Add more channels here following the same format
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functions
    setupFilters();
    setupFavorites();
    setupHistory();
    setupDarkMode();
    setupMobileMenu();
    
    // Initialize sections on page load
    // Initially hide all sections except player
    document.querySelectorAll('.section').forEach(section => {
        if (section.id !== 'player-section') {
            section.style.display = 'none';
        }
    });
    
    // Show home by default (just the player section)
    document.querySelector('.menu a.active').addEventListener('click', function(e) {
        e.preventDefault();
        showSection(null); // Show only player section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Set up mobile swipe gestures
    setupSwipeGestures();
    
    // Initialize player immediately
    initPlayer();
    setupChannels();
});

// Function to update the player with new content
function updatePlayer(src) {
    const playerContainer = document.getElementById('player-container');
    const powerLight = document.querySelector('.tv-power-light');
    
    // Clear the current content
    playerContainer.innerHTML = '';
    
    // Check if the source is an iframe code or a direct stream URL
    if (src.includes('<iframe')) {
        // If it's an iframe, insert it directly
        playerContainer.innerHTML = src;
    } else {
        // If it's a direct stream URL, create a bradmax player iframe for it
        const bradmaxIframe = `<iframe src="https://bradm.ax/build/202410/09/10dddbda311d7cd7ad4cb3ee7ffaaa441bf5a620/index.html?mediaUrl=${encodeURIComponent(src)}" width="800px" height="400px" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        playerContainer.innerHTML = bradmaxIframe;
    }
    
    // Turn on the power light (green)
    if (powerLight) {
        powerLight.classList.add('on');
    }
}

// Setup mobile swipe gestures for navigation
function setupSwipeGestures() {
    // Only initialize touch events if touch is supported
    if ('ontouchstart' in window) {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0; // Track vertical position to prevent unwanted swipes while scrolling
        const swipeThreshold = 70; // Minimum distance for a swipe (slightly reduced for better responsiveness)
        
        // Add touch event listeners to the body
        document.body.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.body.addEventListener('touchmove', function(e) {
            // Add visual feedback during swipe
            if (Math.abs(e.touches[0].clientX - touchStartX) > 30) {
                // This is potentially a horizontal swipe in progress
                e.preventDefault(); // Prevent scrolling during horizontal swipe
            }
        }, { passive: false });
        
        document.body.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            // Check if the gesture was mostly horizontal (to avoid triggering on vertical scrolls)
            const verticalDistance = Math.abs(touchEndY - touchStartY);
            if (verticalDistance < 50) { // Only handle if not primarily a vertical swipe
                handleSwipe();
            }
        }, { passive: true });
        
        // Function to determine the swipe direction and trigger actions
        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            
            // Check if the swipe was significant enough
            if (Math.abs(swipeDistance) >= swipeThreshold) {
                // Left to right swipe (open history panel)
                if (swipeDistance > 0) {
                    const historyPanel = document.getElementById('historyPanel');
                    if (historyPanel && !historyPanel.classList.contains('active')) {
                        // Vibrate if supported (provides tactile feedback on mobile)
                        if (navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        
                        historyPanel.classList.add('active');
                        // Also load history content if we have the function
                        if (typeof loadHistory === 'function') {
                            loadHistory();
                        }
                        
                        // Add visual feedback for swipe
                        historyPanel.style.animation = 'slideInRight 0.3s forwards';
                    }
                } 
                // Right to left swipe (open menu)
                else {
                    const hamburger = document.querySelector('.hamburger');
                    const menu = document.querySelector('.menu');
                    if (hamburger && menu && !menu.classList.contains('active')) {
                        // Vibrate if supported
                        if (navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        
                        hamburger.classList.add('active');
                        menu.classList.add('active');
                        
                        // Add visual feedback for swipe
                        menu.style.animation = 'slideInLeft 0.3s forwards';
                    }
                }
            }
        }
        
        // Add specific listeners for the history panel to detect swipes to close it
        const historyPanel = document.getElementById('historyPanel');
        if (historyPanel) {
            historyPanel.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            historyPanel.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                
                // Only handle if not primarily a vertical swipe
                const verticalDistance = Math.abs(touchEndY - touchStartY);
                if (verticalDistance < 50) {
                    const swipeDistance = touchEndX - touchStartX;
                    
                    // Check if swipe was significant and in the right direction (right to left to close)
                    if (Math.abs(swipeDistance) >= swipeThreshold && swipeDistance < 0) {
                        // Vibrate if supported
                        if (navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        
                        // Add animation for closing
                        historyPanel.style.animation = 'slideOutLeft 0.3s forwards';
                        
                        // After animation completes, remove active class
                        setTimeout(() => {
                            historyPanel.classList.remove('active');
                        }, 300);
                    }
                }
            }, { passive: true });
        }
        
        // Add specific listeners for the menu to detect swipes to close it
        const menu = document.querySelector('.menu');
        if (menu) {
            menu.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            menu.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                
                // Only handle if not primarily a vertical swipe
                const verticalDistance = Math.abs(touchEndY - touchStartY);
                if (verticalDistance < 50) {
                    const swipeDistance = touchEndX - touchStartX;
                    
                    // Check if swipe was significant and in the right direction (left to right to close)
                    if (Math.abs(swipeDistance) >= swipeThreshold && swipeDistance > 0) {
                        // Vibrate if supported
                        if (navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        
                        // Add animation for closing
                        menu.style.animation = 'slideOutRight 0.3s forwards';
                        
                        // After animation completes, remove active classes
                        setTimeout(() => {
                            menu.classList.remove('active');
                            document.querySelector('.hamburger')?.classList.remove('active');
                        }, 300);
                    }
                }
            }, { passive: true });
        }
    }
}

// Global variables
let art = null;
// Global function for applying filters
window.applyFilters = null;
// Ad system variables
let adTimer = null;
let adDuration = 20; // 20 seconds total ad duration
let skipDelay = 2; // Show skip button after 2 seconds
let isAdPlaying = false;
let selectedChannelSrc = null;

// Initialize Art Player with the recommended implementation
function initPlayer() {
    // Initialize with empty container - will be filled when a channel is selected
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = '<div class="initial-message">🎬 Pick Your Channel & Turn ON TV! 📺</div>';
}

// Setup channel click events using event delegation
function setupChannels() {
    const channelsContainer = document.getElementById('channelsContainer');
    
    // Clear existing channels
    channelsContainer.innerHTML = '';
    
    // Load channels from the array
    channels.forEach(channel => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.setAttribute('data-category', channel.category);
        channelElement.setAttribute('data-country', channel.country);
        channelElement.setAttribute('data-src', channel.iframe);
        
        channelElement.innerHTML = `
            <div class="channel-info">
                <img src="${channel.logo}" alt="${channel.name} Logo">
                <span>${channel.name}</span>
            </div>
            <button class="favorite-btn"><i class="fa-regular fa-heart"></i></button>
        `;
        
        // Get the favorite button
        const favoriteBtn = channelElement.querySelector('.favorite-btn');
        
        // Add click event listener for favorite button
        favoriteBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent channel click event
            
            // Get current favorites
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const channelSrc = channel.iframe;
            const heartIcon = this.querySelector('i');
            
            // Toggle favorite
            if (favorites.includes(channelSrc)) {
                // Remove from favorites
                favorites = favorites.filter(src => src !== channelSrc);
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.add('fa-regular');
            } else {
                // Add to favorites
                favorites.push(channelSrc);
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
            }
            
            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
        
        // Add click event listener for channel
        channelElement.addEventListener('click', function() {
            if (channel.iframe) {
                updatePlayer(channel.iframe);
                
                // Add to history
                addToHistory(channel.name, channel.iframe, channel.logo, channel.category);
            }
        });
        
        channelsContainer.appendChild(channelElement);
    });
}

// Simple and reliable video playback function
function playVideo(videoSrc) {
    if (!art) {
        console.error('Art player not initialized');
        return;
    }
    
    // Show loading indicator
    const videoPlayer = document.querySelector('.video-player');
    videoPlayer.classList.add('loading');
    
    // Simple and direct approach - first pause and reset the player
    art.pause();
    
    // Set new source and play
    setTimeout(() => {
        // Switch the URL directly
        art.switchUrl(videoSrc);
        
        // Try to play
        try {
            art.play();
        } catch (error) {
            console.log('Play prevented:', error);
        }
        
        // Hide loading after a reasonable time
        setTimeout(() => {
            videoPlayer.classList.remove('loading');
        }, 2000);
    }, 100);
}

// Ad system functions
function showAd() {
    // Don't show ad if one is already playing
    if (isAdPlaying) return;
    isAdPlaying = true;
    
    // Reset timer
    adDuration = 20;
    
    // Get ad container and elements
    const adContainer = document.getElementById('adContainer');
    const adContent = document.getElementById('adContent');
    const adTimer = document.getElementById('adTimer');
    const skipAdBtn = document.getElementById('skipAdBtn');
    
    // Clear any existing ad content
    adContent.innerHTML = '';
    
    // ========= IMAGE AD EXAMPLE =========
    // Use this for image ads - just replace the src with your ad image URL
    const adImage = document.createElement('img');
    adImage.src = 'herobg.webp'; // Your ad image
    adImage.alt = 'Advertisement';
    adImage.style.width = '100%';
    adImage.style.height = '100%';
    adImage.style.objectFit = 'fit';
    adContent.appendChild(adImage);
    
    /* ========= VIDEO AD EXAMPLE =========
    // Uncomment and use this for video ads - just replace the src with your ad video URL
    const adVideo = document.createElement('video');
    adVideo.src = 'your-video-ad.mp4'; // Your ad video URL
    adVideo.autoplay = true;
    adVideo.controls = false;
    adVideo.muted = false; // Set to true if you want muted by default
    adVideo.style.maxWidth = '100%';
    adVideo.style.maxHeight = '100%';
    adVideo.style.objectFit = 'contain';
    adContent.appendChild(adVideo);
    
    // Optional: End ad when video ends
    adVideo.onended = function() {
        endAd();
    };
    */
    
    /* ========= VAST/EXTERNAL AD EXAMPLE =========
    // Uncomment and use this for VAST or external ad players
    const adIframe = document.createElement('iframe');
    adIframe.src = 'https://your-vast-ad-url.com/'; // Your VAST or ad player URL
    adIframe.style.width = '100%';
    adIframe.style.height = '100%';
    adIframe.style.border = 'none';
    adContent.appendChild(adIframe);
    */
    
    // Update timer display
    adTimer.textContent = adDuration;
    
    // Show ad container
    adContainer.style.display = 'flex';
    
    // Hide skip button initially
    skipAdBtn.style.display = 'none';
    
    // Start the ad timer
    startAdTimer();
    
    // Show skip button after 2 seconds
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
    if (selectedChannelSrc) {
        playVideo(selectedChannelSrc);
        selectedChannelSrc = null; // Reset selected channel
    }
}

// Setup favorites functionality
function setupFavorites() {
    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Set initial state for favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const channel = btn.closest('.channel');
        const channelSrc = channel.dataset.src;
        
        // Set initial heart state
        if (favorites.includes(channelSrc)) {
            btn.querySelector('i').classList.remove('fa-regular');
            btn.querySelector('i').classList.add('fa-solid');
        }
    });
    
    // Setup favorites toggle button
    const favoritesToggle = document.getElementById('favoritesToggle');
    if (favoritesToggle) {
        favoritesToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            window.applyFilters();
        });
    }
}

// Setup search and filter functionality
function setupFilters() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('categoryFilter');
    const countryFilter = document.getElementById('countryFilter');
    const channelGuide = document.querySelector('.channel-guide');
    
    // Create and add no-results message element dynamically if it doesn't exist
    let noResults = channelGuide.querySelector('.no-results');
    if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <p>No channels match your search criteria</p>
        `;
        channelGuide.appendChild(noResults);
    }
    
    // Event listeners
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    categoryFilter.addEventListener('change', applyFilters);
    countryFilter.addEventListener('change', applyFilters);
    
    // Debounce function to limit how often a function can run
    function debounce(func, delay) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    // Apply filters function
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const country = countryFilter.value;
        const favorites = document.getElementById('favoritesToggle').classList.contains('active');
        const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        let visibleCount = 0;
        const channels = document.querySelectorAll('.channel');
        
        // Simple approach for better browser performance
        channels.forEach(channel => {
            const channelName = channel.querySelector('.channel-info span').textContent.toLowerCase();
            const channelCategory = channel.dataset.category;
            const channelCountry = channel.dataset.country;
            const channelSrc = channel.dataset.src;
            
            // Check if matches all criteria
            const matchesSearch = channelName.includes(searchTerm);
            const matchesCategory = category === 'all' || channelCategory === category;
            const matchesCountry = country === 'all' || channelCountry === country;
            const matchesFavorites = !favorites || favoritesList.includes(channelSrc);
            
            // Add fade-in effect with a slight delay for visual appeal
            if (matchesSearch && matchesCategory && matchesCountry && matchesFavorites) {
                channel.style.display = '';
                channel.classList.add('filtered-in');
                visibleCount++;
            } else {
                channel.style.display = 'none';
                channel.classList.remove('filtered-in');
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'flex';
        } else {
            noResults.style.display = 'none';
        }
    }
    
    // Make applyFilters available globally
    window.applyFilters = applyFilters;
}

// Setup watch history panel and functionality
function setupHistory() {
    const historyToggle = document.querySelector('.history-toggle');
    const historyPanel = document.getElementById('historyPanel');
    const closeHistory = document.getElementById('closeHistory');
    const clearHistoryBtn = document.getElementById('clearHistory');
    const historyContent = document.querySelector('.history-content');
    
    // Toggle history panel visibility
    historyToggle.addEventListener('click', function() {
        historyPanel.classList.toggle('active');
        loadHistory();
    });
    
    // Close history panel when close button is clicked
    closeHistory.addEventListener('click', function() {
        historyPanel.classList.remove('active');
    });
    
    // Close history panel when clicking outside
    document.addEventListener('click', function(e) {
        if (historyPanel.classList.contains('active') && 
            !historyPanel.contains(e.target) && 
            e.target !== historyToggle &&
            !historyToggle.contains(e.target)) {
            
            historyPanel.classList.remove('active');
        }
    });
    
    // Clear watch history
    clearHistoryBtn.addEventListener('click', function() {
        // Show confirmation dialog
        showConfirmDialog('Are you sure you want to clear your watch history?', function() {
            localStorage.removeItem('watchHistory');
            loadHistory();
        });
    });
    
    // Load and display history items
    function loadHistory() {
        historyContent.innerHTML = '';
        
        const history = JSON.parse(localStorage.getItem('watchHistory') || '[]');
        
        if (history.length === 0) {
            historyContent.innerHTML = '<div class="empty-history">Your watch history is empty</div>';
            return;
        }
        
        // Sort history with newest first
        history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            // Format the timestamp
            const itemDate = new Date(item.timestamp);
            const formattedDate = formatDate(itemDate);
            
            historyItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="history-img">
                <div class="history-text">
                    <span>${item.name}</span>
                    <small>${formattedDate} · ${item.category}</small>
                </div>
                <div class="history-actions">
                    <button class="history-play" title="Play"><i class="fas fa-play"></i></button>
                    <button class="history-remove" title="Remove"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            // Play button
            historyItem.querySelector('.history-play').addEventListener('click', function(e) {
                e.stopPropagation();
                playVideo(item.src);
                
                // Find and activate the corresponding channel
                const channels = document.querySelectorAll('.channel');
                channels.forEach(channel => {
                    if (channel.dataset.src === item.src) {
                        document.querySelector('.channel.active')?.classList.remove('active');
                        channel.classList.add('active');
                    }
                });
                
                // Close the history panel
                historyPanel.classList.remove('active');
            });
            
            // Remove button
            historyItem.querySelector('.history-remove').addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Remove from history
                const updatedHistory = history.filter(h => h.src !== item.src);
                localStorage.setItem('watchHistory', JSON.stringify(updatedHistory));
                
                // Remove from UI with animation
                historyItem.style.opacity = '0';
                setTimeout(() => {
                    historyItem.remove();
                    
                    // Show empty state if needed
                    if (updatedHistory.length === 0) {
                        historyContent.innerHTML = '<div class="empty-history">Your watch history is empty</div>';
                    }
                }, 300);
            });
            
            // Click on item to play
            historyItem.addEventListener('click', function() {
                playVideo(item.src);
                
                // Find and activate the corresponding channel
                const channels = document.querySelectorAll('.channel');
                channels.forEach(channel => {
                    if (channel.dataset.src === item.src) {
                        document.querySelector('.channel.active')?.classList.remove('active');
                        channel.classList.add('active');
                    }
                });
                
                // Close the history panel
                historyPanel.classList.remove('active');
            });
            
            historyContent.appendChild(historyItem);
        });
    }
    
    // Helper to format date
    function formatDate(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHr = Math.floor(diffMin / 60);
        const diffDay = Math.floor(diffHr / 24);
        
        if (diffDay > 0) {
            return diffDay === 1 ? 'Yesterday' : `${diffDay} days ago`;
        } else if (diffHr > 0) {
            return `${diffHr} ${diffHr === 1 ? 'hour' : 'hours'} ago`;
        } else if (diffMin > 0) {
            return `${diffMin} ${diffMin === 1 ? 'minute' : 'minutes'} ago`;
        } else {
            return 'Just now';
        }
    }
}

// Add channel to watch history
function addToHistory(name, src, img, category) {
    let history = JSON.parse(localStorage.getItem('watchHistory') || '[]');
    
    // Remove if already exists (to update and move to top)
    history = history.filter(item => item.src !== src);
    
    // Add new entry
    history.unshift({
        name: name,
        src: src,
        img: img,
        category: category || 'unknown',
        timestamp: new Date().toISOString()
    });
    
    // Limit history size to 20 items
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    // Save to localStorage
    localStorage.setItem('watchHistory', JSON.stringify(history));
}

// Show confirm dialog
function showConfirmDialog(message, onConfirm) {
    const confirmDialog = document.getElementById('confirmDialog');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmOk = document.getElementById('confirmOk');
    const confirmCancel = document.getElementById('confirmCancel');
    const closeConfirm = document.querySelector('.close-confirm');
    
    // Set message
    confirmMessage.textContent = message;
    
    // Show dialog
    confirmDialog.style.display = 'flex';
    
    // Handle confirm button
    const handleConfirm = function() {
        confirmDialog.style.display = 'none';
        if (typeof onConfirm === 'function') {
            onConfirm();
        }
        cleanup();
    };
    
    // Handle cancel
    const handleCancel = function() {
        confirmDialog.style.display = 'none';
        cleanup();
    };
    
    // Cleanup event listeners
    const cleanup = function() {
        confirmOk.removeEventListener('click', handleConfirm);
        confirmCancel.removeEventListener('click', handleCancel);
        closeConfirm.removeEventListener('click', handleCancel);
    };
    
    // Add event listeners
    confirmOk.addEventListener('click', handleConfirm);
    confirmCancel.addEventListener('click', handleCancel);
    closeConfirm.addEventListener('click', handleCancel);
}

// Setup dark mode
function setupDarkMode() {
    // Support both darkModeToggle and themeToggle
    const darkModeToggle = document.getElementById('darkModeToggle') || document.getElementById('themeToggle');
    if (!darkModeToggle) return;
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'false');
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Scroll to player section
function scrollToPlayer() {
    const playerSection = document.getElementById('player-section');
    playerSection.scrollIntoView({ behavior: 'smooth' });
}

// Show section (used for navigation)
function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the player section always
    document.getElementById('player-section').style.display = 'grid';
    
    // Show the requested section
    if (sectionId && sectionId !== 'player-section') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
            // Scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Setup mobile menu functionality
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    let menuCloseTimeout = null; // Track the timeout ID
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent document click from immediately closing
            
            // Clear any pending animations/timeouts
            if (menuCloseTimeout) {
                clearTimeout(menuCloseTimeout);
                menuCloseTimeout = null;
            }
            
            // Reset any animations
            menu.style.animation = '';
            
            // Toggle menu state
            if (menu.classList.contains('active')) {
                // If menu is open, close it with animation
                menu.style.animation = 'slideOutRight 0.3s forwards';
                
                menuCloseTimeout = setTimeout(() => {
                    menu.classList.remove('active');
                    hamburger.classList.remove('active');
                    menu.style.animation = ''; // Clear animation after completing
                }, 300);
            } else {
                // If menu is closed, open it
                menu.classList.add('active');
                hamburger.classList.add('active');
                menu.style.animation = 'slideInLeft 0.3s forwards';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            // Check if menu is active and click is outside menu and hamburger
            if (menu.classList.contains('active') && 
                !menu.contains(event.target) && 
                !hamburger.contains(event.target)) {
                
                // Clear any existing timeouts
                if (menuCloseTimeout) {
                    clearTimeout(menuCloseTimeout);
                }
                
                // Add animation for closing
                menu.style.animation = 'slideOutRight 0.3s forwards';
                
                // After animation completes, remove active classes
                menuCloseTimeout = setTimeout(() => {
                    menu.classList.remove('active');
                    hamburger.classList.remove('active');
                    menu.style.animation = ''; // Clear animation
                    menuCloseTimeout = null;
                }, 300);
            }
        });
        
        // Close menu when a menu item is clicked
        document.querySelectorAll('.menu a').forEach(item => {
            item.addEventListener('click', function() {
                // Clear any existing timeouts
                if (menuCloseTimeout) {
                    clearTimeout(menuCloseTimeout);
                }
                
                // Add animation for closing
                menu.style.animation = 'slideOutRight 0.3s forwards';
                
                // After animation completes, remove active classes
                menuCloseTimeout = setTimeout(() => {
                    hamburger.classList.remove('active');
                    menu.classList.remove('active');
                    menu.style.animation = ''; // Clear animation
                    menuCloseTimeout = null;
                }, 300);
            });
        });
        
        // Prevent menu close when clicking inside the menu (but not on menu links)
        menu.addEventListener('click', function(event) {
            if (!event.target.closest('a')) {
                event.stopPropagation();
            }
        });
    }
}