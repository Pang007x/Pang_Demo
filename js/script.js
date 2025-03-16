


document.addEventListener('DOMContentLoaded', function() {
    const addProjectButton  = document.getElementById("add-project-btn");
    let number = 3;
    let imageSelector = 0;
    addProjectButton.onclick = function(){
        const projectToAdd = document.createElement("div");
        const projectContainner = document.getElementById("project-container")
        projectToAdd.className = 'project-card';
        projectToAdd.innerHTML = `
        <img src="./images/projects/project${imageSelector + 1}.png" alt="Project 2" class="project-image">
        <div class="project-info">
            <h3>Project ${number} Title</h3>
            <p>Brief description of Project 2. Explain what it does and the technologies used.</p>
            <div class="project-links">
                <a href="https://devcommu.org/" class="btn">View Project</a>
                <a href="https://github.com/DevCommunities" class="btn">GitHub</a>
            </div>
        </div>
        `
        projectContainner.appendChild(projectToAdd);
        number += 1;
        imageSelector += 1;
        if(imageSelector == 2){
            imageSelector = 0
        }
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Science and Technology student from KPAOS"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(textArray.length) setTimeout(type, newTextDelay + 250);
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Add click event to all navigation links
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            smoothScroll(target, 1000); // 1000ms for the scroll duration
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        document.querySelectorAll('section').forEach(function(section) {
            var top = section.offsetTop - 100; // Adjust this value based on your header height
            var bottom = top + section.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < bottom) {
                links.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});