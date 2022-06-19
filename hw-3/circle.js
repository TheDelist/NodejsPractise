

const  circleArea=(radius)=>{
    return Math.PI * Math.pow(radius,2);
}

const circleCircumference =(radius)=>{
    return Math.PI * 2 * radius;
}

const printCircleArea=(radius)=>{
    console.log("area :"+ circleArea(radius));
}

const printCircleCircumference=(radius)=>{
    console.log("circumference :" +circleCircumference(radius));
}
module.exports= {
    printCircleArea,
    printCircleCircumference
}