const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"
const RECIPE_DETAIL_URL = "https://api.spoonacular.com/recipes/{id}/information"
const INGREDIENT_URL = "https://api.spoonacular.com/food/ingredients/{id}/information"
const RECIPE_AUTO_COMPLETE = "https://api.spoonacular.com/recipes/autocomplete?number=10&query="
const RECIPE_RANDOM_URL = "https://api.spoonacular.com/recipes/random?number=1"

/**
 * Permet la recherche d'une recette via l'API
 * @param apiKey La clé d'API stocké dans le store
 * @param input La string à rechercher
 * @param filters L'objet représentant la séléction des différents filtres
 * @param offset numéro de la page * nombre d'élement par page
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function receipeQuery(apiKey, input, filters,offset) {
    let query = "query=" + input + "&number=20";
    if(offset !== undefined){
        query += "&offset=" + offset;
    }else{
        query += "&offset=" + 0;

    }
    Object.keys(filters).forEach((element) => {
        if (filters[element].length > 0 && filters[element].indexOf("None") < 0 && filters[element] !== "") {
            console.log(element," : ",filters[element])
            query += "&" + element + "=" + filters[element]
            console.log("query: ", query)
        }
    })

    let url = RECIPE_BASE_URL + "?" + query + "&" + "apiKey=" + apiKey;
    return queryApi(url)
}

/**
 * Recherche du recette aléatoire
 * @param apiKey La clé d'API stocké dans le store
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function getRandomReceipe(apiKey){
    let url = RECIPE_RANDOM_URL + "&apiKey=" + apiKey
    return queryApi(url)
}

/**
 * Permet de changer le page a partir d'une URL déjà faite (On remplace uniquement l'offset)
 * @param url L'URL de la requête
 * @param offset numéro de la page * nombre d'élement par page
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function loadReceipePage(url,offset){
    url = replaceOffsetInUrl(url,offset)
    return queryApi(url)
}

/**
 *
 * @param apiKey La clé d'API stocké dans le store
 * @param id id de la recette
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function queryReceipeById(apiKey,id){
    let i = RECIPE_DETAIL_URL.indexOf("{id}")
    let url = RECIPE_DETAIL_URL.substring(0,i)+id+RECIPE_DETAIL_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return queryApi(url)
}

/**
 * Inutilisé mais fonctionne
 * Permet de récupérer les informations d'un ingrédient à partir de son id
 * @param apiKey La clé d'API stocké dans le store
 * @param id id de l'ingrédient
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function queryIngredientById(apiKey,id){
    let i = INGREDIENT_URL.indexOf("{id}")
    let url = INGREDIENT_URL.substring(0,i)+id+INGREDIENT_URL.substring(i+4)+ "?" + "apiKey=" + apiKey
    return queryApi(url)
}

/**
 * Permet l'autocomplétion
 * @param str La recherche actuelle
 * @param apiKey La clé d'API stocké dans le store
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
export async function recipeAutoComplete(str,apiKey){
    let url = RECIPE_AUTO_COMPLETE+str+"&apiKey="+apiKey;
    return queryApi(url);
    }

/**
 * Effectue la requête auprès de l'API (le fetch)
 * @param url L'URL de la requête
 * @returns {Promise<unknown>} Renvoie le résultat fourni par l'API sous forme de promesse
 */
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

/**
 * Remplace la valeur de l'offset dans l'URL
 * @param url L'URL de la requête
 * @param offset numéro de la page * nombre d'élement par page
 * @returns {string}
 */
function replaceOffsetInUrl(url,offset){
    let offsetIndex = url.indexOf("offset=");
    if(offsetIndex < 0){
        return ""
    }
    let size = 7;
    let startOfURL = url.substring(offsetIndex+size)
    let endOfURL = startOfURL.substring(startOfURL.indexOf("&"))
    return url.substring(0,offsetIndex+size) + offset + endOfURL
}

