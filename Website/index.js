var contact_us = document.getElementById("contact-us");
var cellphone = document.getElementById("cellphone");
var shop = document.getElementById("shop");
var total = document.getElementById("total");
var shop_border = document.getElementById("shop-border");
var lista_cumparaturi = document.getElementById("lista-cumparaturi");
var clicked = false;
var clickedShop = false;

cellphone.addEventListener("click", openTab);
shop.addEventListener("click", openTabShop);

function openTabShop() {
  if (clickedShop == true) {
    lista_cumparaturi.style.display = "none";
    total.style.display = "none";
    shop.style.color = "rgb(105, 105, 105)";
    shop.children[0].style.background = "#e2e2e2";
    shop.children[0].style.border = "0px";
    clickedShop = false;
  } else {
    lista_cumparaturi.style.display = "flex";
    total.style.display = "flex";
    shop.style.color = "#B8E1FC";
    shop.children[0].style.background = "rgb(122, 122, 122)";
    shop.children[0].style.borderTopRightRadius = "40px";
    shop.children[0].style.borderTopLeftRadius = "40px";
    shop.children[0].style.border.bottom = "0px";
    clickedShop = true;
  }
}

function openTab() {
  if (clicked == true) {
    contact_us.style.display = "none";
    cellphone.style.borderTopLeftRadius = "40px";
    cellphone.style.borderTopRightRadius = "40px";
    clicked = false;
  } else {
    contact_us.style.display = "flex";
    cellphone.style.borderTopLeftRadius = "0px";
    cellphone.style.borderTopRightRadius = "0px";
    clicked = true;
  }
}

document.querySelectorAll("#buy").forEach((item_On) => {
  item_On.addEventListener("click", (bought) => {
    var item = item_On.parentElement.parentElement;
    var item_clone = document.createElement("div");
    item_clone.className += "item_clone";
    item_clone.innerHTML = item.innerHTML;

    pretProdus = item.children[3].children[0].textContent;
    total.children[0].textContent = parseFloat(pretProdus) + parseFloat(total.children[0].textContent);
    lista_cumparaturi.appendChild(item_clone);
    if (item_clone.children[3].children[1].outerHTML =='<i class="fa-solid fa-store" id="buy"></i>') {
      item_clone.children[3].children[1].remove();
    }
    lista_cumparaturi.style.display = "flex";
    total.style.display = "flex";
    shop.style.color = "#B8E1FC";
    shop.children[0].style.background = "rgb(122, 122, 122)";
    shop.children[0].style.borderTopRightRadius = "40px";
    shop.children[0].style.borderTopLeftRadius = "40px";
    shop.children[0].style.border.bottom = "0px";
    clickedShop = true;
  });
});
