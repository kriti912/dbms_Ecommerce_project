function on() {
    document.getElementById("cart-overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("cart-overlay").style.display = "none";
  }

let add_to_cart_btn = document.getElementsByClassName('adding-button')
let main_container = document.getElementsByTagName('tbody')[0]
let quantity_fields = document.getElementsByClassName('input_quantity')
let remove_item_from_cart_btn = document.getElementsByClassName('remove_item')



for(let i=0; i<add_to_cart_btn.length;i++){
    add_to_cart_btn[i].addEventListener('click', addToCart)
}

function addToCart(event){

    let btn1 = event.target // plus button
    let btn_2 = btn1.parentElement // button class = "adding_buttton"
    let btn_3 = btn_2.parentElement //class = "cart-box"
    let btn_4 = btn_3.parentElement //class = "right-box"
    let btn_parent = btn_4.parentElement //class = "small-box"
    let btn_grandparent = btn_parent.parentElement //class = "col1 one"

    let btn_4_sibling = btn_4.previousElementSibling // class = "details-box"
    let clothes_details = btn_4_sibling.firstElementChild //class = "clothes-details"
    let itemName = clothes_details.children[0].innerText //e.g Top1, Top8 
    let itemPrice = clothes_details.children[1].innerText //e.g Rs. 3000

    let btn_parent_sibling = btn_parent.previousElementSibling // class = "box"
    let image_box = btn_parent_sibling.firstElementChild //class = "inner-box"
    let itemImage = image_box.children[0].src //image source reference

    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = `<td class="image-size"><img src="${itemImage}" alt="items"></td>
    <td><h6>${itemName}</h6></td>
    <td class="item_price"><h6>${itemPrice}</h6></td>
    <td><input type="number" min = "1" value="1" class="input_quantity" placeholder="1" ><h6></h6></td>
    <td class="total_price"><h6>${itemPrice}</h6></td>
    <td><h6><button class="remove_item">Remove</button></h6></td> `

    main_container.append(itemContainer)

    for(let i=0; i<quantity_fields.length;i++){
        quantity_fields[i].addEventListener('click', updateTotal)
    }
    // console.log(itemImage)
    for(let i=0; i<remove_item_from_cart_btn.length;i++){
        remove_item_from_cart_btn[i].addEventListener('click', removeItemFromCart)
    }


    grandTotal()
}
function updateTotal(event){
    number_of_items = event.target
     number_of_items_parents = number_of_items.parentElement.parentElement
     price_field = number_of_items_parents.getElementsByClassName('item_price')[0]
     total_field = number_of_items_parents.getElementsByClassName('total_price')[0]
     price_field_content = price_field.children[0].innerText.replace('Rs.', ' ')
    total_field.children[0].innerText = 'Rs. ' + number_of_items.value * price_field_content

    grandTotal()

}
function grandTotal()
{
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]

    let total_price = document.getElementsByClassName('total_price')
    for(let i=0; i<total_price.length;i++){
        total_price_content = Number(total_price[i].innerText.replace("Rs.", ''))
        total += total_price_content
    }
    grand_total.children[0].innerText = 'Rs. '+ total
    grand_total.children[0].style.fontWeight = 'bolder'
    // console.log(total)
}
function removeItemFromCart(event){
    remove_btn = event.target
    remove_btn_grandparents = remove_btn.parentElement.parentElement.parentElement
    remove_btn_grandparents.remove()
    grandTotal()
}