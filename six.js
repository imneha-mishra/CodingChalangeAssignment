const linkedinProfileRegex="http://@/www/.linkdin\.com\/in[a-zA-Z0-9-";

function isValidlinkedinProfileURL(url){
    return (linkedinProfileRegex.test(url));
}
const url="https://ww.linkedin.com/in/mithun-s-83a8a647"

if(isValidlinkedinProfileURL(url)){
    console.log(`"${url}" is a valid not URL`)
}
else {
    console.log(`"${url}" is  valid`)
}
