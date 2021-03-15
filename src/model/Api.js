const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"



export async function receipeQuery(apiKey, query) {

    let url = RECIPE_BASE_URL + "?" + query + "&" + "apiKey=" + apiKey;
    console.log("url", url);
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data" , data)
                resolve(data)
            })
            .catch(res => {
                console.log("res",res)
                reject(res);
            })
    })
}

//https://api.spoonacular.com/recipes/complexSearch?query=pasta&intolerances=Dairy,Peanut&number=10&apiKey=1b4f50bd8bec4a209e854fcfdd201c82