const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"
const RECIPE_DETAIL_URL = "https://api.spoonacular.com/recipes/{id}/information"
const INGREDIENT_URL = "https://api.spoonacular.com/food/ingredients/{id}/information"


export async function receipeQuery(apiKey, input, filters) {
    if (input.indexOf("&") >= 0 || input.indexOf("=") >= 0) {
        _reject("Invalid Input : Illegal Character (&, =)")
    }
    //check for &
    let query = "query=" + input;
    Object.keys(filters).forEach((element) => {
        if (filters[element].length > 0 && filters[element].indexOf("None") < 0 && filters[element] !== "") {
            query += "&" + element + "=" + filters[element]
        }
    })

    let url = RECIPE_BASE_URL + "?" + query + "&" + "apiKey=" + apiKey;
    return _query(url)
}

export async function queryReceipeById(apiKey,id){
    let i = RECIPE_DETAIL_URL.indexOf("{id}")
    let url = RECIPE_DETAIL_URL.substring(0,i)+id+RECIPE_DETAIL_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return _query(url)
}

export async function queryIngredientById(apiKey,id){
    let i = INGREDIENT_URL.indexOf("{id}")
    let url = INGREDIENT_URL.substring(0,i)+id+INGREDIENT_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return _query(url)
}

function _query(url){
    return new Promise((resolve, reject) => {
        console.log(url)
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

function _reject(reason){
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=Dairy,Peanut&number=10&apiKey=1b4f50bd8bec4a209e854fcfdd201c82