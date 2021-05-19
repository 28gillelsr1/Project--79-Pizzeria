menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza","Cheese Pizza", "Chicken Pizza", "Pineapple Pizza"];
    
function getmenu(){
    var data;
    data="<ul class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        data=data+'<li>' + menu_list_array[i] + '</li>'
    }
     data=data+"</ul>"
     document.getElementById("display_menu").innerHTML = data;
}

function add_item(){
    var data;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    data="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        data=data+'<div class="card">' +'<img src="pizza.png"/>' + menu_list_array[i] + '</div>'
    }
     data=data+"</section>"
     document.getElementById("display_addedmenu").innerHTML = data;
    
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
