//   -------js for MenuToggle------------------

  
  var  MenuItems = document.getElementById('MenuItems');

  MenuItems.style.maxHeight = "0%";

  function menutoggle(){

      if(MenuItems.style.maxHeight == "0%"){

        MenuItems.style.maxHeight = "100%";
      }
      else{

        MenuItems.style.maxHeight = "0%";
      }

  }
  // function close_menu(){
  //   document.getElementById('MenuItems_close').style.display = "none";
  // }
//   function close_menu(){
//     if(MenuItems.style.maxWidth == "100%"){
//       MenuItems.style.maxWidth = "0%";
//     }
//     else{
//       MenuItems.style.maxWidth = "100%";
//     }
//   }
// //   ----------------------js for product-----------------



    var ProductImg = document.getElementById("ProductImg")
    var SmallImg = document.getElementsByClassName("small-img")

    SmallImg[0].onclick = function()
    {
        ProductImg.src = SmallImg[0].src
    }
    SmallImg[1].onclick = function()
    {
        ProductImg.src = SmallImg[1].src
    }
    SmallImg[2].onclick = function()
    {
        ProductImg.src = SmallImg[2].src
    }
    SmallImg[3].onclick = function()
    {
        ProductImg.src = SmallImg[3].src
    }
  

    // ----scroll----
    
 
