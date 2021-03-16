const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"



export async function receipeQuery(apiKey, input, filters) {

    if (input.indexOf("&") >= 0) {
        return new Promise((resolve, reject) => {
            console.log("Erreur &");
            reject("Invalid Input");
        })
    }

    //check for &
    let query = "query=" + input;


    Object.keys(filters).forEach((element) => {
        console.log("filter", filters[element])

        if (filters[element].length > 0 && filters[element].indexOf("None") < 0 && filters[element] !== "") {
            query += "&" + element + "=" + filters[element]
        }
    })

    let url = RECIPE_BASE_URL + "?" + query + "&" + "apiKey=" + apiKey;
    console.log("url", url);
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                resolve(data)
            })
            .catch(res => {
                console.log("res", res)
                reject(res);
            })
    })
}

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=Dairy,Peanut&number=10&apiKey=1b4f50bd8bec4a209e854fcfdd201c82