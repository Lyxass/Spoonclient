const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"
const RECIPE_DETAIL_URL = "https://api.spoonacular.com/recipes/{id}/information"
const INGREDIENT_URL = "https://api.spoonacular.com/food/ingredients/{id}/information"
const RECIPE_AUTO_COMPLETE = "https://api.spoonacular.com/recipes/autocomplete?number=10&query="
const RECIPE_RANDOM_URL = "https://api.spoonacular.com/recipes/random?number=1"


export async function receipeQuery(apiKey, input, filters,offset) {
    let query = "query=" + input + "&number=20";
    if(offset !== undefined){
        query += "&offset=" + offset;
    }else{
        query += "&offset=" + 0;

    }
    Object.keys(filters).forEach((element) => {
        if (filters[element].length > 0 && filters[element].indexOf("None") < 0 && filters[element] !== "") {
            query += "&" + element + "=" + filters[element]
        }
    })

    let url = RECIPE_BASE_URL + "?" + query + "&" + "apiKey=" + apiKey;
    return queryApi(url)
}

export async function getRandomReceipe(apiKey){
    let url = RECIPE_RANDOM_URL + "&apiKey=" + apiKey
    return queryApi(url)
}

export async function loadReceipePage(url,offset){
    url = replaceOffsetInUrl(url,offset)
    return queryApi(url)
}


export async function queryReceipeById(apiKey,id){
    let i = RECIPE_DETAIL_URL.indexOf("{id}")
    let url = RECIPE_DETAIL_URL.substring(0,i)+id+RECIPE_DETAIL_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return queryApi(url)
}

export async function queryIngredientById(apiKey,id){
    let i = INGREDIENT_URL.indexOf("{id}")
    let url = INGREDIENT_URL.substring(0,i)+id+INGREDIENT_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return queryApi(url)
}

export async function recipeAutoComplete(str,apiKey){
    let url = RECIPE_AUTO_COMPLETE+str+"&apiKey="+apiKey;
    return queryApi(url);
    }


function queryApi(url){
    return new Promise((resolve, reject) => {
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.currentSearch = url;
                resolve(data)
            })
            .catch(res => {
                reject(res);
            })
    })
}

export function replaceOffsetInUrl(url,offset){
    let offsetIndex = url.indexOf("offset=");
    if(offsetIndex < 0){
        return ""
    }
    let size = 7;
    let startOfURL = url.substring(offsetIndex+size)
    let endOfURL = startOfURL.substring(startOfURL.indexOf("&"))
    return url.substring(0,offsetIndex+size) + offset + endOfURL
}

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=Dairy,Peanut&number=10&apiKey=1b4f50bd8bec4a209e854fcfdd201c82