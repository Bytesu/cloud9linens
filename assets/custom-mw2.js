class FormControlGroup extends HTMLElement{
    constructor() {
        super();
        this.init()
      //console.log('12')
    }
   init(){
     this.addEventListener('change',(evt)=>{
  console.log(evt)
     })
   }
}
if (!customElements.get('form-control-group')) {
    customElements.define('form-control-group',FormControlGroup)
}
$(document).ready(function(){
    const connecForm =  document.querySelectorAll(".connected__products form");
    if(connecForm[0]){
        for (let i = 0; i < connecForm.length; i++) {
            connecForm[i].addEventListener("change",function(){
                const variantSelect =  this.querySelectorAll(".connectedOption ");
                const sizeVar = variantSelect[0];
                const varOption = variantSelect[1];
                let selectValueEl = sizeVar.value +' '+ varOption.value;
                let currentVar = document.querySelector(`[data-variant-option="${selectValueEl}"]`);
                let curVarId = currentVar.getAttribute("data-variant-id");
                let curVarPrice = currentVar.getAttribute("data-variant-price");
                console.log(curVarPrice);
                this.querySelector(".connected__price").innerHTML = curVarPrice;
                this.querySelector(".main__input").value = curVarId;
            });
        }
    }

    $(document).ready(function() {
      $('#register_from').click(function() { 
        $(this).addClass('account_tab_active');       
        $('#custom_login-form').hide();
        $('#custom_register').show();
        
        
        //$('#login_from').addClass('account_tab_active');
        $('#login_from').removeClass('account_tab_active');   
           
      });


      if(window.location.href.indexOf('register')>-1){
        $('#register_from').click()
      }else{
        $('#login_from').addClass('account_tab_active')
      }
      $('#login_from').click(function() {
        $(this).addClass('account_tab_active');          
        $('#custom_register').hide();
        $('#custom_login-form').show();
        $('#register_from').removeClass('account_tab_active'); 
        
      });
    });
    






    const mobMenuIcon = document.querySelector("#mySidenav");
        const menuObserver = new MutationObserver(function(){
          if(mobMenuIcon.classList.contains("hidden")){
            document.querySelector(".mobile____menu img").src = "https://cdn.shopify.com/s/files/1/0602/8673/0497/files/grip-lines.png?v=1670484880";
          }
          else{
            document.querySelector(".mobile____menu img").src = "https://cdn.shopify.com/s/files/1/0602/8673/0497/files/close_FILL0_wght200_GRAD0_opsz24_1.svg?v=1680176434"; 
          }
        }); 

    const domConfig = {
       attributes: true,
       childList: true,
       subtree: false
     };

    menuObserver.observe(mobMenuIcon,domConfig);

    $('.custom___swiper___slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true
      });

      $(".ftr_mob_click").click(function(){
        $(this).toggleClass("ftr_icon_minus");
        $(this).next().toggleClass("ftr_navbar_toggle");
      });
      $( "body" ).on( "click",".mw_showcollapse", function() {
        $(this).toggleClass("mw-icon-rotate");
        $(".mw_collapse").toggleClass("show_filter");
        $("html").removeClass("prevent-scroll");
        
      });

      // jQuery( "body" ).on( "click", ".sort-label", function() {  
      //   $(".select-selected").toggleClass("select-selected_show");
      // });
      // jQuery( "body" ).on( "click", ".sort-label", function() {  
      //   $(".select-items").toggleClass("show-sort-option");
      // });
      
  const menuItems = document.querySelectorAll(".product-option-item");
    menuItems.forEach(item => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        // $('product-option-item').removeAttr('data-selected');
        // Remove "active" class from all menu items
        menuItems.forEach(item => item.classList.remove("mw_variant_active"));
        // Add "active" class to clicked menu item
        event.target.classList.add("mw_variant_active");
        event.target.dataset.selected='true';
        // Perform other actions as necessary

        let item_in_hidden = item.dataset.value;

        let variant_id = event.target.closest(".custom_connected_product").querySelector(`.connected_variant_detail [data-variant-option="${item_in_hidden}"]`).getAttribute("data-variant-option");

        let variant_price = event.target.closest(".custom_connected_product").querySelector(`.connected_variant_detail [data-variant-option="${item_in_hidden}"]`).getAttribute("data-variant-price");

        // let variant_id = $('.connected_variant_details[data-variant-option="'+item_in_hidden+'"]').data('variant-id');
        // let variant_price = $('.connected_variant_details[data-variant-option="'+item_in_hidden+'"]').data('variant-price');

        event.target.closest('.connected_product_form').querySelector('.connected__price').innerHTML = variant_price;
        event.target.closest('.connected_product_form').querySelector('.main__input').value = variant_id;

      });
    })

});



// const stickyDiv = document.querySelector(".mw_slider");
// const stickyDivP = document.querySelector(".mw_slider").parentElement;

// document.addEventListener("scroll",function(){
//   // console.log(window.pageYOffset , (stickyDiv.offsetTop - 25));
//   if(window.pageYOffset > (stickyDivP.offsetTop -35)){
//     stickyDiv.classList.add("sticky__cus");
//     // console.log("hi");
//   }
//   else{
//     // console.log("bye");
//     stickyDiv.classList.remove("sticky__cus");
//   }
// });

// const custom_drop = document.getElementsByClassName("product-option-item");

var acc = document.querySelectorAll(".accordion-faq");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(ee) {
      
      let allFaqValue = document.querySelectorAll(".panel-faq");
      if (this.nextElementSibling.style.maxHeight == this.nextElementSibling.scrollHeight + 'px') {
        // this.nextElementSibling.style.display = "none";
        this.nextElementSibling.style.maxHeight = 0;
        acc.forEach(elem => {
        elem.classList.remove("faq-active");
      });
      } else {
        allFaqValue.forEach(elem => {
          // elem.style.display = "none";
          elem.style.maxHeight = 0;
        });

      acc.forEach(elem => {
        elem.classList.remove("faq-active");
      });
        this.classList.add("faq-active");
        
        // this.nextElementSibling.style.display = "block";
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      }
      
    });
  }


  // services slider 

  $(document).ready(function() {
    $('.mw_slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
    });

    $( document ).ready(function() {
      if (window.matchMedia( "(max-width: 767px)" ).matches) {
        $('.services_slider_mob .mw_slider').slick('unslick');
      }
    });

    
    // document.querySelector(".mw_cus_login_show").addEventListener("click",function(el){
    //   el.preventDefault();
    //   window.location.href = "/account";
    // });

  // filter collection page


if (window.matchMedia("(max-width: 992px)").matches) {
  // const filterEl = document.querySelectorAll(".cus_toggleButton");

  function fillterFun(el){
    let getDivHeight = el.nextElementSibling;
    el.classList.toggle("filterShow");
    if (el.classList.contains("filterShow")) {
      getDivHeight.style.maxHeight = getDivHeight.scrollHeight+'px';
    }
    else{
      getDivHeight.style.maxHeight = 0;
    }

    if (document.querySelector(".filterShow")) {
      if (!document.querySelector(".showApplyBtn")) {
        document.querySelector("#CollectionFiltersForm").classList.add("showApplyBtn")
      }
    }
    else{
      if (document.querySelector(".showApplyBtn")) {
        document.querySelector(".showApplyBtn").classList.remove("showApplyBtn")
      }
    }

  }
}

function rangeValue(val) {
  val.closest(".field").querySelector("label span").innerHTML = val.value
}


  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  window.onload = () => {
    
    // Get the value of the cookie
    const cookieValue = getCookie("sf-recent-viewed-products");

    

    // Check if the cookie value exists
    if (cookieValue) {
      // Parse the cookie value (assuming it's in JSON format)
      const products = JSON.parse(cookieValue);
      
      // Append each product to the specified div element
      const divElement = document.querySelector(".resent_product_mw");

        // products.map( handle => {
        //   const prodHTML =  fetchCache(`/products/${handle}?view=grid-card-item`);
        //   console.log(prodHTML);
        //  });
     
        // products.forEach(hdl => {
        // const node = this.productNodes[hdl];

        // if (node) {
        //   this.domNodes.productList.appendChild(node);
        // }
      //});

       var rv_prd = '<div class="mw_recently">';

       async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
      }

       const start = async () => {
       await asyncForEach(products, async(product) => {
        
        await jQuery.getJSON(window.Shopify.routes.root + 'products/'+product+'.js', function(product) {
              
              rv_prd += '<div><img src="'+product.featured_image+'"><h3>'+product.title+'</h3><p>'+product.price+'<p><a href="'+product.url+'">Buy now</a></div>';
               
            });
           
           
          });
          
          
      rv_prd += '</div>';

      $('.resent_product_mw').append(rv_prd);
        
      }
      start();

    }
  };

