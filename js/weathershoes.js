function weathershoes() {
    //Input - Get Users Weather Input
    let weathershoes = document.getElementById('weather-select').value;
    //Processing - Get Input and Get Shoe Info
    let shoes;
    switch(weathershoes) {
        case "hot":
            shoes = "sandals";
            break;
        case "rain":
            shoes = "galoshes";
            break;
        case "snow":
            shoes = "boots";
            break;
        case "":
            shoes = "shoes";
            break;
    }
    //Output - Display Shoes User needs to wear
    document.getElementById('output').innerHTML = `If the weather is ${weathershoes}, Please wear ${shoes}!`;
}