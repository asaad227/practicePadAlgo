const zbc = "www.xakep-kelo.ru"
function domainName(url){
    //your code here
    const re = /[0-9 aA-zZ -]+/g
    
    const refind = url.match(re);
     
    
    if(url.includes("www") || url.includes("http")){
      return refind[1]
    }else if(url.includes("www") && url.includes("http")){
        return refind[2]
    }else{
        return refind[0]
    }
    
   
  }

  console.log(domainName(zbc))