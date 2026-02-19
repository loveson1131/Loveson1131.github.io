
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");


    filterForm.classList.toggle("active");
    newForm.classList.remove("active");
}


function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");


    newForm.classList.toggle("active");
    filterForm.classList.remove("active");
}


function filterArticles() {
    const opinionChecked = document.getElementById("opinionCheckbox").checked;
    const recipeChecked = document.getElementById("recipeCheckbox").checked;
    const updateChecked = document.getElementById("updateCheckbox").checked;


    const opinions = document.querySelectorAll("article.opinion");
    const recipes = document.querySelectorAll("article.recipe");
    const updates = document.querySelectorAll("article.update");

    opinions.forEach((article) => {
        if (opinionChecked) {
            article.classList.remove("hidden");
        } else {
            article.classList.add("hidden");
        }
    });

    recipes.forEach((article) => {
        if (recipeChecked) {
            article.classList.remove("hidden");
        } else {
            article.classList.add("hidden");
        }
    });

    updates.forEach((article) => {
        if (updateChecked) {
            article.classList.remove("hidden");
        } else {
            article.classList.add("hidden");
        }
    });
}


function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const body = document.getElementById("inputArticle").value.trim();


    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    let type = "";
    let label = "";

    if (opinionRadio.checked) {
        type = "opinion";
        label = "Opinion";
    } else if (recipeRadio.checked) {
        type = "recipe";
        label = "Recipe";
    } else if (lifeRadio.checked) {
        type = "update";
        label = "Update";
    }

    if (!title || !body || !type) {
        alert("Please fill in all fields and select an article type.");
        return;
    }


    const existingArticles = document.querySelectorAll("#articleList article");
    const newId = "a" + (existingArticles.length + 1);


    const article = document.createElement("article");
    article.classList.add(type);
    article.id = newId;

    article.innerHTML = `
        <span class="marker">${label}</span>
        <h2>${title}</h2>
        <p>${body}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    const checkboxMap = {
        opinion: document.getElementById("opinionCheckbox"),
        recipe: document.getElementById("recipeCheckbox"),
        update: document.getElementById("updateCheckbox"),
    };

    if (!checkboxMap[type].checked) {
        article.classList.add("hidden");
    }


    document.getElementById("articleList").appendChild(article);


    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;
}