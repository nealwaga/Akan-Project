function getIndex(userDate) {
    const date = new Date(userDate);

    if(date.getMonth() <=0 || date.getMonth() > 12){
        console.log("error!")
    }
}