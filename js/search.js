

function openSearch(){


var domainName = document.getElementById("search").value;

var searchURL = 'https://uk.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck='+domainName;

window.location.href = searchURL; 

}