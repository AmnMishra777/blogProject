const isValidUrl = function (value) {
    const regEx = /^\s*([a-z]){2,8}\s*$/
    const result = regEx.test(value)
    return result;
}


const a= isValidUrl("jids")
console.log(a)

// /^\s*(ftp|http|https?):\/\/+?\www\.[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{3}.*[\/\s\w]*$/
///^\s*(ftp|http|https?):\/\/+?(www.| ?)[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,7}.*[\/\s\w]*$/
///^\s*(ftp|http|https?):\/\/+(www\.)?[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{3}.*[\/\s\w]*$/