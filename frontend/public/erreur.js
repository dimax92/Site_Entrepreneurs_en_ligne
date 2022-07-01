function mauvaisNomDeDomaine(){
    if(location.host !== "busimod.com" && location.host !== "www.busimod.com"){
        document.querySelector("html").remove();
    }
};
mauvaisNomDeDomaine();

function mauvaisProtocol(){
    if(location.protocol !== "https:"){
        location.protocol="https:";
    }
};
mauvaisProtocol();