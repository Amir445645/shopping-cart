var hearts = document.querySelectorAll(".fa-heart ");
console.log(hearts);
for (let i = 0; i < hearts.length; i++) {
  var heart = hearts[i];
  console.log(heart);

  heart.addEventListener("click", (e) => {
    var clickedheart = e.target;
    clickedheart.classList.toggle("rouge");
  });
}
var deletes = document.querySelectorAll(".fa-times-circle ");

for (let i = 0; i < deletes.length; i++) {
  var delete0 = deletes[i];
  delete0.addEventListener("click", (e) => {
    var clickeddelete0 = e.target;
    clickeddelete0.parentElement.parentElement.remove();
  });
}
/*var adds = document.querySelectorAll(".plus-btn");

console.log(adds);
for (let i = 0; i < adds.length; i++) {
  var add0 = adds[i];
  console.log(add0);
  add0.addEventListener("click", function (e) {
    var clickedadd0 = e.target;
    var input = clickedadd0.parentElement.children[1];
    console.log(input);
    var inputValue = input.value;
    console.log(inputValue);
    var newValue = parseInt(inputValue) + 1;
    console.log(newValue);
    input.Value = newValue;
  });
}
var subtracts = document.querySelectorAll(".minus-btn");

console.log(subtracts);
for (let i = 0; i < subtracts.length; i++) {
  var subtract0 = subtracts[i];
  console.log(subtract0);
  subtract0.addEventListener("click", function (e) {
    var clickedsubtract0 = e.target;
    var input = clickedsubtract0.parentElement.children[1];
    console.log(input);
    var inputValue = input.value;
    console.log(inputValue);
    var newValue = parseInt(inputValue) - 1;
    //console.log(newValue);
    input.Value = newValue;
  });
}*/
