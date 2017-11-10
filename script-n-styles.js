var bodyelementberke = document.getElementsByTagName("body")[0]
bodyelementberke.classList.add('text-center');
n = -1
    while (n<50) {
    n = n+1;
    var iframe = document.getElementsByTagName("iframe")[n];   // Get the [n]th <iframe> element in the document
    var att = document.createAttribute("allowfullscreen");       // Create a "allowfullscreen" attribute
    att.value = "1";                           // Set the value of the class attribute
    iframe.setAttributeNode(att);
    }
