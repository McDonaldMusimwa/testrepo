export default class fakeShopTemplate {

    clothsElectronics(items,dom) {
      
      let result = "";
      items.forEach(item => {
        result += `<div class="product-body">
                    <img src=${item.image} alt=${item.name} class="product-img" />
                    <div class="product-details">
                    <h3>${item.title}</h3>
                    <p class="price">R ${item.price}</p>
                    </div>
                  </div>`;
      });
      //const productsContainer = document.querySelector(`${dom}`);
      dom.innerHTML = result;
    }
  
    toolsFurniture(items) {
      let result = "";
      items.forEach(item => {
        result += `<div class="modal-border">
                    <img src=${item.imageSource} alt=${item.name} class="product-img" />
                    <div class="product-details">
                    <h3>${item.title}</h3>
                    <p class="price">${item.price}</p>
                    </div>
                  </div>`;
      });
      const productsContainer = document.querySelector('.modal-body');
      productsContainer.innerHTML = result;
    }
  
  }
  