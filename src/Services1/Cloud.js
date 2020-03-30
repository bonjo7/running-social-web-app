export default function cloudURL() {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../config.json', false);
    xobj.send(null); 
    var cloudRoute = "";
    if (xobj.status === 200) {
      cloudRoute = JSON.parse(xobj.responseText).cloudHost;
      }
    return cloudRoute;
  }