// Video data organized by category
const videoData = {
    applied: [
        {
            title: "Jan-27 | Applied Chemistry | Pulp and Paper | Mr. Rohan Sir",
            url: "https://youtu.be/JrW0Mi8-KeY"
        },
        {
            title: "Jan-28 | Applied Chemistry | Cement | Mr. Rohan Sir",
            url: "https://youtu.be/eL1rHenuFkA"
        },
        {
            title: "Jan-30 | Applied Chemistry | Mr. Rohan Sir",
            url: "https://youtu.be/3dU49uH7qNw"
        },
        {
            title: "Jan-31 | Applied Chemistry | Mr. Rohan Sir",
            url: "https://youtu.be/Ajx5gADRdW8"
        },
        {
            title: "Feb 04 | Applied Chem | Nuclear Chem & Application of Radioactivity | Mr Rohan Sir",
            url: "https://youtu.be/CpKnKSp_UeE"
        },
        {
            title: "Feb 05 | Applied Chem | Nuclear Chem & Application of Radioactivity | Mr Rohan Sir",
            url: "https://youtu.be/a7jNj-s9k9Y"
        },
        {
            title: "Feb-09 | Applied Chemistry| Imp Questions | Mr. Rohan Sir",
            url: "https://youtu.be/P9Zm__9WxdA"
        },
        {
            title: "Feb-10 | Applied Chemistry | Polymers | Mr. Rohan Sir",
            url: "https://youtu.be/oWUrR8mKB5w"
        }
    ],
    organic: [
        {
            title: "Jan-07 | Organic Chemistry | Nomenclatur Day-01 | Mr. Aashish Sir",
            url: "https://youtu.be/UsEZtz_wUHI"
        },
        {
            title: "Jan-08 | Organic Chemistry | Aromatic Nomenclature | Day-02 | Mr. Aashish Sir",
            url: "https://youtu.be/9qrdNBwGIPY"
        },
        {
            title: "Jan-09 | Chemistry | Organic Chemistry | Ether | Day-03 | Mr. Aashish Sir",
            url: "https://youtu.be/6483JL_qtKM"
        },
        {
            title: "Jan-11 | Organic Chemistry | Alcohol Day-01 | Mr. Aashish Sir",
            url: "https://youtu.be/rvwhThNpEME"
        },
        {
            title: "Jan-12 | Organic Chemistry | Alcohol Day-01 | Mr. Aashish Sir",
            url: "https://youtu.be/x9Am5yoMxDo"
        },
        {
            title: "Jan-13 | Organic Chemistry | Alcohol Day-03 | Mr. Aashish Sir",
            url: "https://youtu.be/Qv6jEE1MKGg"
        },
        {
            title: "Jan-14 | Organic Chemistry | ALCOHOL/CHEMICAL PROPERTIES | Mr. Aashish Sir",
            url: "https://youtu.be/ee3Weio5ako"
        },
        {
            title: "Jan-15 | Organic Chemistry | PHENOL 01 | Mr. Aashish Sir",
            url: "https://youtu.be/wPjdWprpr58"
        },
        {
            title: "Jan-16 | Organic Chemistry | Phenol | Mr. Aashish",
            url: "https://youtu.be/op6IprJtfXM"
        },
        {
            title: "Jan-17 | Organic Chemistry | Chemical properties 01 | Mr. Aashish Sir",
            url: "https://youtu.be/Y-bZUAbwvpw"
        },
        {
            title: "Jan-19 | Chemistry | Organic Chemistry | fever class | NEB IMP | Mr. Aashish Sir",
            url: "https://youtu.be/y7zKisSJtfU"
        },
        {
            title: "Jan-21 | Chemistry | Chemical properties | Lec-02 | Mr. Aashish Sir",
            url: "https://youtu.be/ol7HNhhF6fI"
        },
        {
            title: "Jan-23 | Chemistry | Organic Chemistry | ALDEHYDE AND KETONE | Mr. Aashish Sir",
            url: "https://youtu.be/GzKKSmwseGU"
        },
        {
            title: "Jan-24 | Chemistry | Organic Chemistry | ALDEHYDE AND KETONE | Mr. Aashish Sir",
            url: "https://youtu.be/WWYB7U84T88"
        },
        {
            title: "Feb-15 | Organic Chemistry | Aldehyde and Keton | Mr. Aashish Sir",
            url: "https://youtu.be/XvtQ43NGjBU"
        },
        {
            title: "Feb-21 | Organic Chemistry | Carboxylic Acid | Mr. Aashish Sir",
            url: "https://youtu.be/WGAwOdGN4rQ"
        },
        {
            title: "Feb-22 | Organic Chemistry | Carboxylic Acid | Mr. Aashish Sir",
            url: "https://youtu.be/R9YKfDF-HM0"
        },
        {
            title: "Mar-01 | Chemistry | Nitro Compound | Mr. Aashish Sir",
            url: "https://youtu.be/0tpBJcGPUaE"
        },
        {
            title: "Mar-17 | Chemistry | Nitro Compounds | Mr. Ashish Sir",
            url: "https://youtu.be/ecVJ83MZfHk"
        },
        {
            title: "Mar-18 | Organic Chemistry | Nitro Compounds | Mr. Aashish Sir",
            url: "https://youtu.be/u0LsMaDaly0"
        },
        {
            title: "Mar-22 | Organic chemistry | Amines | Mr. Aashish Sir",
            url: "https://youtu.be/JDmlhx1DO_8"
        }
    ],
    inorganic: [
        {
            title: "Silver | Inorganic Chemistry | Most Important Questions | Enough For Exam- 2081 Batch",
            url: "https://youtu.be/kBtlknP7Hv0"
        },
        {
            title: "Inorganic Chemistry Most important Question Class-12 NEB | 100% Sure 12 Marks",
            url: "https://youtu.be/RbYcAvs4Zfw"
        },
        {
            title: "Iron | Inorganic Chemistry | Most Important Questions | Enough For Exam- 2081 Batch",
            url: "https://youtu.be/Jnk-d7CyNiU"
        },
        {
            title: "Zinc | Inorganic Chemistry | Most Important Questions | Class-12 NEB- 2081 Batch",
            url: "https://youtu.be/3YRRuBy_pzY"
        },
        {
            title: "Inorganic Chemistry Most important Question Class-12 NEB | 100% Sure 12 Marks",
            url: "https://youtu.be/xmRFktkBwD0"
        },
        {
            title: "Inorganic Chemistry Most important Question Class-12 NEB | 100% Sure 12 Marks",
            url: "https://youtu.be/RbYcAvs4Zfw"
        },
        {
            title: "Inorganic Chemistry Most important Question Class-12 NEB | 100% Sure 12 Marks",
            url: "https://youtu.be/MCtzbuAXFiU"
        },
        {
            title: "Carbon Family | Inorganic Chemistry | Mr. Rohan Sir",
            url: "https://youtu.be/QrlizeSzp4c"
        }
    ]
};

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.remove('fa-times');
        mobileMenu.querySelector('i').classList.add('fa-bars');
    }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Video Modal Elements
const modal = document.getElementById('videoModal');
const modalPlayer = document.getElementById('videoPlayer');
const closeBtn = document.querySelector('.close-btn');

// Function to open the modal and play video
function openModal(videoId) {
    modalPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Add autoplay=1
    modal.style.display = 'block';
}

// Function to close the modal and stop video
function closeModal() {
    modal.style.display = 'none';
    modalPlayer.src = ''; // Stop the video by clearing the src
}

// Event listener for close button
closeBtn.addEventListener('click', closeModal);

// Event listener to close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to show videos for a specific category
function showVideos(category) {
    const container = document.getElementById(`${category}-videos`);
    const videos = videoData[category];
    const loading = container.querySelector('.loading');
    
    // Toggle display
    if (container.style.display === 'block') {
        // If already open, just return without hiding
        // Or optionally: container.style.display = 'none';
        return;
    }
    
    // Show loading animation
    loading.style.display = 'block';
    container.style.display = 'block';
    
    // Clear previous content except loading
    Array.from(container.children).forEach(child => {
        if (child !== loading) {
            child.remove();
        }
    });
    
    // Create clickable video list items
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        
        // Extract video ID from URL
        let videoId = '';
        try {
            const url = new URL(video.url);
            if (url.hostname === 'youtu.be') {
                videoId = url.pathname.substring(1);
            } else if (url.hostname.includes('youtube.com')) {
                videoId = url.searchParams.get('v');
            }
            // Handle edge cases like URLs with extra parameters if needed
            if (videoId.includes('&')) {
                 videoId = videoId.split('&')[0];
            }
        } catch (e) {
            console.error('Error parsing video URL:', video.url, e);
            // Attempt to extract ID using regex as a fallback
            const match = video.url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/);
            if (match) videoId = match[1];
        }

        if (!videoId) return; // Skip if ID couldn't be extracted
        
        videoElement.innerHTML = `
            <h4>${video.title} <i class="fas fa-play-circle play-icon"></i></h4>
            <!-- The iframe is now removed from here -->
        `;
        
        // Add click listener to open modal
        videoElement.addEventListener('click', () => {
            openModal(videoId);
        });
        
        container.appendChild(videoElement);
    });
    
    // Hide loading animation
    loading.style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.remove('fa-times');
            mobileMenu.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}); 