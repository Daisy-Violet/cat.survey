let allInputs = document.getElementsByTagName('input');
let catName = document.getElementById('cat-name');
let catOwner = document.getElementById('owner');
let ownerEmail = document.getElementById('email');
let catBreed = document.querySelectorAll('.breed');
let catBreedSelected = [];
let catMeal = document.querySelectorAll('.meal');
let catMealChecked = [];
let catSex = document.querySelectorAll('.sex');
let catSexChecked = [];
let formBtn = document.querySelector('.form__btn');

class Cat {
    constructor(name, owner, email, breed, meal, sex) {
        this.name = name;
        this.owner = owner;
        this.email = email;
        this.breed = breed;
        this.meal = meal;
        this.sex = sex;
    }
}

formBtn.addEventListener('click', () => {
    catBreed.forEach((item) => {
        if (item.selected) {
            catBreedSelected.push(item.value);
        }
    });
    let catBreedFinallySelected = catBreedSelected.toString();

    catMeal.forEach((item) => {
        if (item.checked) {
            catMealChecked.push(item.value);
        }
    });
    let catMealFinallyChecked = catMealChecked.toString();

    catSex.forEach((item) => {
        if (item.checked) {
            catSexChecked.push(item.value);
        }
    });
    let catSexFinallyChecked = catSexChecked.toString();

    let myCat = new Cat(catName.value, catOwner.value, ownerEmail.value, catBreedFinallySelected, catMealFinallyChecked, catSexFinallyChecked);
    console.log(myCat);

    allInputs.value = '';
})