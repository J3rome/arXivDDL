(function() {
    'use strict';

    // Create a new link beside the original download link
    // Append the "Download" html attribute to the link with full article name
    var downloadLinkList = document.querySelector("div div.extra-services ul li:first-child");
    var browserLink = downloadLinkList.children[0];
    // TODO : Check for encoding issues/unpermitted chars? Browser and OS can probably take care of this..
    var filename = document.title.replace("] ","]").replace(/ /g,"_") + ".pdf";

    var directLink = browserLink.cloneNode();
    directLink.innerText = "[Direct Download]";
    directLink.setAttribute("download",filename);
    directLink.setAttribute("style","margin-left:10px");

    downloadLinkList.append(directLink);

})();
