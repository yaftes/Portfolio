function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Remove "active" class from all links
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add "active" class to the clicked link
    var clickedLink = document.querySelector('nav a[href="#' + sectionId + '"]');
    clickedLink.classList.add('active');
}
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }
