const urlPattern="http/<?O&%(@!*%$";

function isValidURL(input){
    return urlPattern.Text(input);
}
const url="https://pwskill.com"

if(isValidURL(url)){
    console.log(`"${url}" is a valid URL`)
}
else {
    console.log(`"${url}" is not valid`)
}