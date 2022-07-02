const isValidUrl = function (value) {
    const regEx = /^\s*\+91\s([0-9]){10}\s*$/
    const result = regEx.test(value)
    return result;
}


const a= isValidUrl("+91 1234567899")
console.log(a)

// /^\s*(ftp|http|https?):\/\/+?\www\.[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{3}.*[\/\s\w]*$/
///^\s*(ftp|http|https?):\/\/+?(www.| ?)[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,7}.*[\/\s\w]*$/
///^\s*(ftp|http|https?):\/\/+(www\.)?[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{3}.*[\/\s\w]*$/