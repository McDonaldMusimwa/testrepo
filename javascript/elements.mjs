
/*
export default function buildElements(data) {
    const elements = data.map(element => `
      <button class="myBtn">${element.name}</button>
      <!-- The Modal -->
      <div class="modal myModal">
  
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>${element.name}</h2>
          </div>
  
          <div class="modal-body">
            <div class="products-container"></div>
          </div>
        </div>
  
      </div>
    `).join('');
    
    document.querySelector('.main').innerHTML = elements;
  }
  
  */


export default function buildElements(data) {
    const elements = data.map(element => `
      <button class="myBtn">${element.name}</button>
      <!-- The Modal -->
      <div class="modal myModal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>${element.name}</h2>
          </div>
          <div class="modal-body">
            <div class="products-container"></div>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelector('.main').innerHTML = elements;

    // Get the modal elements
    const modalBtns = document.querySelectorAll('.myBtn');
    const modalCloseBtns = document.querySelectorAll('.close');
    const modalContainer = document.querySelectorAll('.myModal');

    // Open the modal on button click
    modalBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modalContainer[i].style.display = 'block';
        });
    });

    // Close the modal on close button click or outside click
    modalCloseBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modalContainer[i].style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalContainer[i]) {
            modalContainer[i].style.display = 'none';
        }
    });
}

