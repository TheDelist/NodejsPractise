
const arguments=process.argv.slice(2);

function radius(rad){

    console.log("area :" + Math.pow(rad,2)*Math.PI);

}
radius(arguments[0]*1);
