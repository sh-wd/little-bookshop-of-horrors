$(document).ready(function(){
  
//define variables to be used in the function
  let cart = [];
  let quantity;
  let price;
  let cartTotal;
  let imgSrc;
  let imgAlt;
  let bookTitle;
  let author;
  let cartItem;  
  
//run this function when the add to cart button is clicked  
  $(".btn-addToCart").click(function(){
    
//set variable quantity to the number of times a repeat button has been clicked
    let quantity;
    
//set variable price to the value associated with the button clicked
    let price = $(this).attr("value");
    
//set variable imgSrc to the value of the image source corresponding to the button clicked
    let imgSrc = $(this).parent().parent().children("img").attr("src");
    
//set variable imgAlt to the value of the alt of the same image
    let imgAlt = $(this).parent().parent().children("img").attr("alt");
    
//set variable bookTitle to the value of the corresponding book's title
    let bookTitle = $(this).parent().parent().children("h3").text();
    
//set variable author to the value of the author of the selected book
    let author = $(this).parent().parent().children("p").text();
    
//set variable cartItem to the html code to be inserted into shopping cart
    let cartItem = "<div class='row cart-item m-1 rounded bg-white w-100'><div class='col-3 d-flex align-items-center'><img class='cart-book-cover' src='" + imgSrc + "' alt='" + imgAlt + "'></div><div class='col-7 py-1'><h5 class='book-title'>" + bookTitle + "</h5><small><p class='author'>" + author + "</p><p>£" + price + "</p></small></div><div class='col-2 d-flex align-items-center'><button class='btn btn-sm btn-outline-danger btn-remove'>x</button></div></div>";
    
//push the value of cartItem into the array cart
    cart.push(cartItem);
    
//find the div with id of shopping-cart and insert the html code inside the array cart
    $("#shopping-cart").html(cart);
    
//
    console.log(price);
    console.log(imgSrc);
    console.log(imgAlt);
    console.log(bookTitle);
    console.log(author);
    console.log(cartItem);
    console.log(cart);
  })
  
  $(".btn-remove").click(function(){
    this.parent().remove();
  })
})
