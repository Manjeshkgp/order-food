let foodPopup = document.querySelector('.foodPopup');
let showFood = document.querySelector('#showFood');
let checkboxes = document.querySelectorAll('.checkBoxes');
let radios = document.querySelectorAll('.radio');
let filterBtn = document.querySelector('#filterBtn');
let resetBtn = document.querySelector('#resetBtn');
let orderPopup = document.querySelector('.orderPopup');
let orderBtn = document.querySelector('.orderBtn');
let bill = orderPopup.querySelector('.bill');
let closeIcon = orderPopup.querySelector('i');
let buyBtn = orderPopup.querySelector('.buyBtn');
let selectStr = '';

class Food {
    constructor(image, name, description, price, classes) {
        this.image = image,
            this.name = name,
            this.description = description,
            this.price = price,
            this.classes = classes
    };
};
let Foods = [
    biryani1 = new Food('biryani1', 'Shahi Chicken Biryani', 'lorem ipsum', '49', 'nv indian other'),
    burger1 = new Food('burger1', 'Triple Decker Burger', 'lorem ipsum', '49', 'nv american burger'),
    burger2 = new Food('burger2', 'Simple Burger', 'lorem ipsum', '9', 'nv american burger'),
    burger3 = new Food('burger3', 'Veg Patty Burger', 'lorem ipsum', '19', 'v american burger'),
    burger4 = new Food('burger4', 'Spicy Burger with Snacks', 'lorem ipsum', '49', 'v american burger'),
    chickenFried1 = new Food('chickenFried1', 'Fried Chicken Wings', 'lorem ipsum', '39', 'nv oth other'),
    chickenNuggets1 = new Food('chickenNuggets1', 'Fried Chicken Nuggets', 'lorem ipsum', '29', 'nv oth other'),
    dosa1 = new Food('dosa1', 'Healthy & Tasty Dosa', 'lorem ipsum', '19', 'v indian other'),
    fish1 = new Food('fish1', 'Spicy Rohu Fish Curry', 'lorem ipsum', '39', 'nv indian other'),
    fish2 = new Food('fish2', 'Healthy Fish Curry with Turmeric', 'lorem ipsum', '29', 'nv indian other'),
    halwa1 = new Food('halwa1', 'Gaajar ka Halwa', 'lorem ipsum', '29', 'v indian other'),
    hotDog1 = new Food('hotDog1', 'Hot Dogs', 'lorem ipsum', '29', 'nv american other'),
    idli1 = new Food('idli1', 'Idli & Chutney', 'lorem ipsum', '9', 'v indian other'),
    idli2 = new Food('idli2', 'Secial Idli Breakfast', 'lorem ipsum', '29', 'v indian other'),
    jalebi1 = new Food('jalebi1', 'Jalebi', 'lorem ipsum', '19', 'v indian other'),
    lasagna1 = new Food('lasagna1', 'Small Lasagna', 'lorem ipsum', '19', 'nv italian other'),
    lasagna2 = new Food('lasagna2', 'Large Lasagna', 'lorem ipsum', '39', 'nv italian other'),
    lemonRice1 = new Food('lemonRice1', 'Healthy Lemon Rice', 'lorem ipsum', '19', 'v indian other'),
    mexicanSnacks1 = new Food('mexicanSnacks1', 'Pack of Mexican Snacks', 'lorem ipsum', '29', 'nv mexican other'),
    mexicanSnacks2 = new Food('mexicanSnacks2', 'Full Plate Mexican Snacks', 'lorem ipsum', '49', 'nv mexican other'),
    noodle1 = new Food('noodle1', 'Egg Noodles', 'lorem ipsum', '19', 'nv japanese noodle'),
    noodle2 = new Food('noodle2', 'Jheenga Noodle', 'lorem ipsum', '49', 'nv japanese noodle'),
    noodle3 = new Food('noodle3', 'Veg Japanese Noodle', 'lorem ipsum', '19', 'v japanese noodle'),
    noodle4 = new Food('noodle4', 'Healthy Noodles', 'lorem ipsum', '29', 'v japanese noodle'),
    noodle5 = new Food('noodle5', 'Indian Noodles(Chowmein)', 'lorem ipsum', '29', 'v indian noodle'),
    noodle6 = new Food('noodle6', 'Italian Noodles', 'lorem ipsum', '29', 'v italian noodle'),
    noodle7 = new Food('noodle7', 'Chicken Noodles', 'lorem ipsum', '39', 'nv japanese noodle'),
    noodle8 = new Food('noodle8', 'Noodle Soup', 'lorem ipsum', '29', 'nv japanese noodle'),
    pancake1 = new Food('pancake1', 'Berry Flavoured Pancake', 'lorem ipsum', '29', 'nv american other'),
    pancake2 = new Food('pancake2', 'Banana Flavoured Pancake', 'lorem ipsum', '29', 'nv american other'),
    paneer1 = new Food('paneer1', 'Paneer Rice', 'lorem ipsum', '19', 'v indian other'),
    pasta1 = new Food('pasta1', 'Spicy Pasta', 'lorem ipsum', '19', 'v italian other'),
    pavBhaji1 = new Food('pavBhaji1', 'Pav Bhaji', 'lorem ipsum', '9', 'v indian other'),
    pavBhaji2 = new Food('pavBhaji2', 'Summer Special Pav Bhaji', 'lorem ipsum', '19', 'v indian other'),
    pavBhaji3 = new Food('pavBhaji3', 'Family Pack Pav Bhaji', 'lorem ipsum', '39', 'v indian other'),
    pizza1 = new Food('pizza1', 'Soft Pizza', 'lorem ipsum', '29', 'v italian pizza'),
    pizza2 = new Food('pizza2', 'Extra Cheese Pizza', 'lorem ipsum', '29', 'v italian pizza'),
    pizza3 = new Food('pizza3', 'Crispy Pizza', 'lorem ipsum', '29', 'v italian pizza'),
    pizza4 = new Food('pizza4', 'Pizza Cola Combo', 'lorem ipsum', '29', 'nv american pizza'),
    pizza5 = new Food('pizza5', 'Mayo Pizza', 'lorem ipsum', '29', 'nv italian pizza'),
    pizza6 = new Food('pizza6', 'Mushroom Pizza', 'lorem ipsum', '29', 'v italian pizza'),
    // pizza7 is background image
    pizza8 = new Food('pizza8', 'Spicy Tomato Pizza', 'lorem ipsum', '29', 'nv indian pizza'),
    pizza9 = new Food('pizza9', 'Cheese Burst Pizza', 'lorem ipsum', '29', 'nv italian pizza'),
    pizza10 = new Food('pizza10', 'Yellow Pizza', 'lorem ipsum', '29', 'nv italian pizza'),
    pizza11 = new Food('pizza11', 'Veggie Pizza', 'lorem ipsum', '29', 'v italian pizza'),
    pizza12 = new Food('pizza12', 'Shrimp Pizza', 'lorem ipsum', '29', 'nv italian pizza'),
    pizza13 = new Food('pizza13', 'Normal Pizza', 'lorem ipsum', '29', 'v indian pizza'),
    pizza14 = new Food('pizza14', 'Peri Peri Pizza', 'lorem ipsum', '29', 'nv italian pizza'),
    roll1 = new Food('roll1', 'Veg Roll', 'lorem ipsum', '19', 'v oth roll'),
    roll2 = new Food('roll2', 'Chicken Roll', 'lorem ipsum', '9', 'nv indian roll'),
    roll3 = new Food('roll3', 'Double Roll', 'lorem ipsum', '9', 'v oth roll'),
    roll4 = new Food('roll4', 'Mexican Snack Roll', 'lorem ipsum', '19', 'nv mexican roll'),
    salad1 = new Food('salad1', 'Mixed Salad with Eggs', 'lorem ipsum', '19', 'nv mexican salad'),
    salad2 = new Food('salad2', 'Mixed Flora Salad', 'lorem ipsum', '49', 'v oth salad'),
    salad3 = new Food('salad3', 'Origano Brauqli Salad', 'lorem ipsum', '19', 'v american salad'),
    salad4 = new Food('salad4', 'Basic Italian Salad', 'lorem ipsum', '9', 'v italian salad'),
    samosa1 = new Food('samosa1', 'Samosa', 'lorem ipsum', '9', 'v indian other'),
    samosa2 = new Food('samosa2', 'Spicy Samosa', 'lorem ipsum', '9', 'v indian other'),
    vada1 = new Food('vada1', 'Vada', 'lorem ipsum', '9', 'v indian other'),
    pakoda1 = new Food('pakoda1', 'Pakoda(Fritters)', 'lorem ipsum', '9', 'v indian other'),
    waffle1 = new Food('waffle1', 'Waffle', 'lorem ipsum', '9', 'nv oth other'),
];

Array.from(Foods).forEach(function (food, index) {

    let allFood = document.createElement('div');
    allFood.innerHTML = `<div class="boxes ${food.classes}" id="box${index}" >
<img src="Food-img/${food.image}.jpg" loading="lazy" alt="" onclick="showFoodPopup(${index})">
<p class="foodText">${food.name}</p>
<div class="selection">
        <p class="foodPrice">$${food.price}</p>
        <input type="checkbox" name="select" class="selects" value="${food.price}">
    </div>
</div>`;

    showFood.appendChild(allFood);
    let boxes = document.querySelectorAll('.boxes');
    Array.from(checkboxes).forEach(function (checkbox) {
        filterBtn.addEventListener('click', function () {
            if (checkbox.checked == true) {
                boxes.forEach(function (box) {
                    if (box.classList.contains(checkbox.value)) {
                        box.classList.remove('hideBox');
                        box.classList.add('showBox');
                    }
                })
            }
            else if (checkbox.checked == false) {
                boxes.forEach(function (box) {
                    if (box.classList.contains(checkbox.value)) {
                        box.classList.remove('showBox');
                        box.classList.add('hideBox');
                        // box.parentElement.style.gap = '0px';
                    }
                })
            }
        })
    })
    resetBtn.addEventListener('click', function () {
        boxes.forEach(function (box) {
            box.classList.remove('hideBox');
            box.classList.remove('showBox');
        })
    })


});


function showFoodPopup(FoodIndex) {
    foodPopup.classList.add('show');
    foodPopup.querySelector('img').srcset = 'Food-img/' + Foods[FoodIndex].image + '.jpg';
    foodPopup.querySelector('h3').innerText = Foods[FoodIndex].name;
    foodPopup.querySelector('.foodDesc').innerText = Foods[FoodIndex].description;
    foodPopup.querySelector('.price').innerText = '$' + Foods[FoodIndex].price;
};
// close icon function for foodPopup
foodPopup.querySelector('.cross').addEventListener('click', function () {
    foodPopup.classList.remove('show');
});
//selects ko click orderBtn ke baad select kiya, because after loading .boxes ye code run hona tha .After learning asynchronous js isme changes karunga

orderBtn.addEventListener('click', function () {
    let selects = document.querySelectorAll('.selects');
    Array.from(selects).forEach(function (select) {
        if (select.checked == true) {
            selectStr += select.value;
            selectStr += '+';
            orderPopup.classList.add('show');
        }
        else if (select.checked == false) {
            return;
        }
    })
    let val = selectStr.slice(0, -1);
    bill.innerText = 'Your Total Bill is $' + eval(val);
    val = '';
    selectStr = '';
})

// to close the orderPopup box
closeIcon.addEventListener('click', () => {
    orderPopup.classList.remove('show');
    orderPopup.querySelector('#address').value = '';
    orderPopup.querySelector('#phnNmbr').value = '';
});

buyBtn.addEventListener('click', function () {
    if (!orderPopup.querySelector('#address').value == '' && !orderPopup.querySelector('#phnNmbr').value == '') {
        orderPopup.classList.remove('show');
        orderPopup.querySelector('#address').value = '';
        orderPopup.querySelector('#phnNmbr').value = '';
        document.querySelector('.thankPopup').classList.add('show');
    }
    else {
        alert('Please enter Phone Number & Address')
    }
});
document.querySelector('.thankPopup button').addEventListener('click', () => {
    document.querySelector('.thankPopup').classList.remove('show');
})
