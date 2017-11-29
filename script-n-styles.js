//smooth scrolling
jQuery(document).ready(function () {
    // Add smooth scrolling to all links
    jQuery("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            //Optinal number 100 is for scrolling less so the element can be seen
            jQuery('html, body').animate({
                scrollTop: jQuery(hash).offset().top - 100
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
var bodyelementberke = document.getElementsByTagName("body")[0]
bodyelementberke.classList.add('text-center');
n = -1
while (n < 50) {
    n = n + 1;
    var iframe = document.getElementsByTagName("iframe")[n];   // Get the [n]th <iframe> element in the document
    var att = document.createAttribute("allowfullscreen");       // Create a "allowfullscreen" attribute
    att.value = "1";                           // Set the value of the class attribute
    iframe.setAttributeNode(att);
}
