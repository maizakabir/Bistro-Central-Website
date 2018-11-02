var items= [
  {name: "Bruschetta", price: "400", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18033149_1171830252925629_1457470584425243279_n.png?_nc_cat=108&_nc_eui2=AeHTzm4nwsyTES0KdsuyMYMNolVgBc3tthd8h46B7Hst5nX29rsMwG2LMm5LC3LUdG6cSmHHV4NgNRpWZueezOcr8PtZmGSE8XiMPf2AeOEOJQ&_nc_ht=scontent.fdac6-1.fna&oh=f2ab31e2091a16734a64e247151e9409&oe=5C851ED1"},
  {name: "Sliders", price: "500", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18622460_1196550667120254_2242044962115780579_n.jpg?_nc_cat=109&_nc_eui2=AeHLbWz3A_P1k1YruavzdystfUJZ_HfxdS1LLs7U1KLUkZYjIDss162Gyv8ASIQHJPrtOq413EAKGTJarSaete7F5T2OFHWFzvyJOlhbEYVx5w&_nc_ht=scontent.fdac6-1.fna&oh=ebb2f2110413d939933e7cb3cdebc00a&oe=5C79CA85"},
  {name: "Chicken Caesar Wrap", price: "290", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/17991052_1171832276258760_7310224873182421184_n.jpg?_nc_cat=105&_nc_eui2=AeGdQgmS4YptkDiJwx11Wks52HrCD-L7isBOAzI_nV8OIXq5DCxVfR_X3SEIuKRoWHu7tnuc6olEKOY-VRWi6ej0cJmT0dbRlFyK92qku1vBPg&_nc_ht=scontent.fdac6-1.fna&oh=8d084b8b7064d7c94110d9399c25e305&oe=5C4278AD"},
  {name: "Grilled Chicken Burger", price: "540", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/17883924_1171831446258843_7877012536803823270_n.jpg?_nc_cat=101&_nc_eui2=AeEMh3fL-Fi9wBleFPTzTEP1j1HHtiWQrc2fnJNlC9KLvcdNndhBNhO4X5YtQEvRVKjAf62x0o6O6HkqRJKoRKyGDdg2_gqEq-_0QIOKnIGIJg&_nc_ht=scontent.fdac6-1.fna&oh=298ab9786d4313778e9a1bab0a892d32&oe=5C877B1A"},
  {name: "Fresh Greek", price: "350", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18582470_1196550677120253_5073899335218100895_n.jpg?_nc_cat=100&_nc_eui2=AeFrzaFRJsqrg32G8n1GejQUKlBZlPOP3Bn68ooirFQtPR225B1imv2wZ3ZBFe7VLNeZFnb1s4tYUnXHUKMPUIwH1zcOGp5HMxdGu_UoCFcl_Q&_nc_ht=scontent.fdac6-1.fna&oh=5ab0345ce5c21e94228d2e863a7970d3&oe=5C42E46F"},
  {name: "Grilled Chicken Sandwich", price: "250", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18528099_1196550790453575_5840516226387743684_n.jpg?_nc_cat=103&_nc_eui2=AeHJTwZZ2OE0KXGGYB9bjn46ip8xK-sNTsRuUTuLrAt8f9pzO49I7-AGb44HT8D9OTLCIfdsMsbgsRYVFdpd6Y39zxRPpT98dnEcS863GCcGnA&_nc_ht=scontent.fdac6-1.fna&oh=5a1da8ea1e6ac3f6c565ed33b1934438&oe=5C89DDE6"},
  {name: "Tomato and Basil Soup", price: "350", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/19748402_1238206272954693_4202449684845199215_n.jpg?_nc_cat=101&_nc_eui2=AeH8XPV8Y99gHuy3_NDVwJ7ZpEvZuavynhL5tYWR6YNjv44eqEEblMV1hOJGhE1W5DHtk7UvUTh8GA2PPNPJzZ90A49LN9mWhnihUhDxCUlRSg&_nc_ht=scontent.fdac6-1.fna&oh=b2124b35568b65eab4cd3cb88093f811&oe=5C3E54A5"}, 
  {name: "Butter Chicken Wrap", price: "290", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/19642802_1238206316288022_7399007092915588550_n.jpg?_nc_cat=111&_nc_eui2=AeGm8O2cxDTCsVgtzDD_9hPiu5UMkmBva0air6LEjRET_Hjw4VurmixdVnQQCz4zvTWtMbO9Edf5kfGGA92ChEhp9x_gR0jZDxDig3CFgVNSjQ&_nc_ht=scontent.fdac6-1.fna&oh=0053fd3dc8ab3a06a9569cc3574669a9&oe=5C417FB1"},
  {name: "Spaghetti Bolognese", price: "650", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/19665340_1238206319621355_4055961814681523855_n.jpg?_nc_cat=110&_nc_eui2=AeETJF3Z23Ivwe8WSwe91hAN6yNY5ogD-uxyiFJ4YpqQLQQZj0b9VGpt_yaxkXmFNOF0pY7EcDA5RQZjLxX-mN-cJCM7i32QJYi3WBECTNT3vg&_nc_ht=scontent.fdac6-1.fna&oh=f4b0ee20ab99789a01fa2e9114c93bc9&oe=5C475305"},
  {name: "Chicken/Fish Tenders", price: "400", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18527660_1196550647120256_870342910651781535_n.jpg?_nc_cat=100&_nc_eui2=AeG0haCChpdFKRuFDO6K0Pm1PT4DZ5qCHL2JJSl0kGDD06ZtIZplZ-nfewZmyMfLqpjPM1zdrNGmB4Q4XxV76Gr6fNErg96AviHFdKIZO5KwNA&_nc_ht=scontent.fdac6-1.fna&oh=9d5db46feb161b6ab19166d6f8c0530e&oe=5C854635"},
  {name: "Achari Beef", price: "450", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/24775249_1375912692517383_5033955816083975146_n.jpg?_nc_cat=108&_nc_eui2=AeEmTg6JhZ1lfVPS0Byp6lpZKxCa_SFC2wPWdTc5aNLUeMJZFhQSEd3Se2XPYIu5Vbw57sw7_I5vpkSjBRssk835s2NaIr5DRolm8felbySG9g&_nc_ht=scontent.fdac6-1.fna&oh=ab139fff754582a3ab5cf1ae8d47eb1a&oe=5C4B9C91"},
  {name: "Penne Alfredo", price: "600", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/35272107_1558742460901071_1535268852030504960_n.jpg?_nc_cat=105&_nc_eui2=AeFLyApFF8zf9fQoTbOnMeqcYv_D80trx3wWiyX2NemArS525kyUZ7tr0Mt5_mpiLoAuvT-YwzxvVveCEKGyYebjnt4OgEcLo1o5B2eVj9i1sQ&_nc_ht=scontent.fdac6-1.fna&oh=7f58d0992db7c09714c9b8eb74f55142&oe=5C49F95E"},
];

var combos= [
  {name: "Combo One", price: "5000", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-0/p200x200/19225853_1225218924253428_676843407515246871_n.jpg?_nc_cat=111&_nc_eui2=AeGZyuqM2vdWMJ-04Q0E5CFYNLriFA7JzyUG3kwVX_i0Zdg6AeyfulMUItP2606JLO-VxXYgntoQuZQSCVfl-05nKKXN9K27qQ8_0PlH275ODg&_nc_ht=scontent.fdac6-1.fna&oh=b78da05be6be0ef4ae34ceb1c4b537d7&oe=5C8481F0"},
  {name: "Combo Two", price: "7000", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18423961_1188035257971795_5843383954787970714_n.jpg?_nc_cat=108&_nc_eui2=AeEEN4cCd1rdH5VSc18b_UF-H8K6p7LM3zjjJ903K9AlPLu98BIHGnQJu6WnGjSWK8s2fIibz_cDWKPV0_Z5JANDf0l6sLD8pAVe_qEQYGJUNg&_nc_ht=scontent.fdac6-1.fna&oh=678e4ceeee0c3c5bb511405c1f8c43da&oe=5C743A72"},
  {name: "Combo Three", price: "8200", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18199056_1176343155807672_2257789920217918765_n.jpg?_nc_cat=108&_nc_eui2=AeHmquEvk3HQ85CW7JoZQZsb5nKhdU43Sw0B5nPoSgBGSnfTkZiVrnsRV1NVoUePoHbPgpNXkUBDwsN_ZwhFjzCQGEyuOpxM_nPlrK4UTn_Rlw&_nc_ht=scontent.fdac6-1.fna&oh=ee4a7d40b5b2902ee8fc3cc49b9de68c&oe=5C421BE0"},
  {name: "Combo Four", price: "9000", image: "https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/18057899_1171830546258933_517477300426050764_n.jpg?_nc_cat=105&_nc_eui2=AeGH8OLkpPa-evOjLCHHBLGZUtYGsf0qYEMHQ0oUPyJx-C1BqkgZWljtArF7HLxKfq99978cBCChByHlcZCYm1flTB5OftDZVkXJB_aUTESGVA&_nc_ht=scontent.fdac6-1.fna&oh=fc20a41857cf33f03badaf090bb82bfe&oe=5C772B6A"},
];

var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):
{
  items: [],
  total: 0
};

localStorage.setItem('cart', JSON.stringify(cart));

$(document).ready(function(){
  
  //menu items
  items.forEach(function (item, index){
    var colDiv= $('<div>').addClass('col-md-4');
    var cardDiv= $('<div>').addClass('card');
    
    var itemImage= $('<img>').addClass("card-img-top");
    itemImage.attr ('src', item.image);
    cardDiv.append (itemImage);
    
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
    
    var itemTitle= $('<h5>').addClass('card-text').text(item.name);
    cardBodyDiv.append(itemTitle);
    
    var itemPrice= $('<p>').addClass('card-text').text("BDT " + item.price + "/-");
    cardBodyDiv.append(itemPrice);
    
    colDiv.append(cardDiv);
    $("#menu-items").append(colDiv);
  });
  
   //combo items
  combos.forEach(function (combo, index){
    var colDiv= $('<div>').addClass('col-md-6');
    var cardDiv= $('<div>').addClass('card');
  
    var comboImage= $('<img>').addClass("card-img-top");
    comboImage.attr ('src', combo.image);
    cardDiv.append (comboImage);
  
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
  
    var comboTitle= $('<h5>').addClass('card-text').text(combo.name);
    cardBodyDiv.append(comboTitle);
  
    var comboPrice= $('<p>').addClass('card-text').text("BDT " + combo.price + "/-");
    cardBodyDiv.append(comboPrice);
  
    var addToCart= $('<button>').addClass ("btn btn-primary").text("Add to Cart").attr('id', index);
    addToCart.click(function(event){
      var cartItem= combos[event.target.id];
      cartItem.quantity= 1;
      cart.items.push(cartItem);
      console.log(cartItem.price);
      cart.total= (parseInt (cart.total) + parseInt(cartItem.price)).toString();
      $("#total").text(cart.total);
      localStorage.setItem('cart', JSON.stringify(cart));
    });
    cardBodyDiv.append(addToCart);
    
    colDiv.append(cardDiv);
    $("#cater-items").append(colDiv);
    });
    
    $("#total").text(cart.total);
    
    //cart items
    cart.items.forEach(function(item, index){
    var colDiv= $('<div>').addClass('col-md-6');
    var cardDiv= $('<div>').addClass('card');
    
    var comboImage= $('<img>').addClass("card-img-top");
    comboImage.attr('src', item.image);
    cardDiv.append(comboImage);
    
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
    
    var comboTitle= $('<h5>').addClass('card-title').text(item.name);
    cardBodyDiv.append(comboTitle);

    var comboPrice= $('<p>').addClass('card-text').text ("$"+ item.price);
    cardBodyDiv.append(comboPrice);
  
    colDiv.append(cardDiv);
    $('#cart-row').append(colDiv);
  });
    
    
    $("#showCartBtn").click(function(){
      $("#cart").show();
      $("#cater").hide();
      $("#showCartBtn").hide();
      $("#orderBtn").show();
    });
  
    $("#hideCartBtn").click(function(){
      $("#cart").hide();
      $("#showCartBtn").show();
      $("#cater").show();
      $("hideCartBtn").hide();
    });
});
