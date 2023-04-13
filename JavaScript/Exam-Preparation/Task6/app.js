function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const buttonLoad = document.getElementById('load-product');
    buttonLoad.addEventListener('click', loadProducts);
    const buttonAdd = document.getElementById('add-product');
    buttonAdd.addEventListener('click', addProduct);
    let inputName = document.getElementById('product');
    let inputCount = document.getElementById('count');
    let inputPrice = document.getElementById('price');
    async function loadProducts(event) {
        event.preventDefault();
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const values = Object.values(data);
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';
        for (const value of values) {
            let product = document.createElement('tr');

            let tdName = document.createElement('td');
            tdName.setAttribute('class', 'name');
            tdName.textContent = value['product'];

            let tdCount = document.createElement('td');
            tdCount.setAttribute('class', 'count-product');
            tdCount.textContent = value['count'];

            let tdPrice = document.createElement('td');
            tdPrice.setAttribute('class', 'product-price');
            tdPrice.textContent = value['price'];

            let tdButton = document.createElement('td');

            let buttonUpdate = document.createElement('button');
            buttonUpdate.setAttribute('class', 'update');
            buttonUpdate.textContent = 'Update';
            buttonUpdate.addEventListener('click', update);

            async function update(event) {
                let parentTr = event.target.parentNode.parentNode;
                let childrenArray = Array.from(parentTr.children);
                let id = parentTr.id;
                buttonAdd.setAttribute('disabled', true);
                console.log(childrenArray[0]);
                inputName.value = childrenArray[0].textContent;
                inputCount.value = childrenArray[1].textContent;
                inputPrice.value = childrenArray[2].textContent;

                let mainButtonUpdate = document.getElementById('update-product');
                mainButtonUpdate.removeAttribute('disabled');
                mainButtonUpdate.addEventListener('click', finalUpdate);
                

                async function finalUpdate() {
                    buttonAdd.removeAttribute('disabled');
                    mainButtonUpdate.setAttribute('disabled', true);
                    let newName = inputName.value;
                    let newCount = inputCount.value;
                    let newPrice = inputPrice.value;

                    let httpHeaders = {
                        method: 'PATCH',
                        body: JSON.stringify({
                            'product': newName,
                            'count': newCount,
                            'price': newPrice
                        })
                    }
                    await fetch(BASE_URL + id, httpHeaders);
                    inputName.value = '';
                    inputCount.value = '';
                    inputPrice.value = '';
                    loadProducts(event);
                }
            }

            let buttonDelete = document.createElement('button');
            buttonDelete.setAttribute('class', 'delete');
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', deleteProduct);

            tdButton.appendChild(buttonUpdate);
            tdButton.appendChild(buttonDelete);

            product.id = value['_id'];
            
            product.appendChild(tdName);
            product.appendChild(tdCount);
            product.appendChild(tdPrice);
            product.appendChild(tdButton);

            tbody.appendChild(product);

            async function deleteProduct(event){
                let parentTr = event.target.parentNode.parentNode;
                let id = parentTr.id;
                
                let httpHeaders = {
                    method: 'DELETE'
                }
                await fetch(BASE_URL + id, httpHeaders);
                loadProducts(event);
            }
        }
    }
    async function addProduct(event) {
        event.preventDefault();


        let name = inputName.value;
        let count = inputCount.value;
        let price = inputPrice.value;

        inputName.value = '';
        inputCount.value = '';
        inputPrice.value = '';

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                "product": name,
                "count": count,
                'price': price
            }
            )
        }
        await fetch(BASE_URL, httpHeaders);
        loadProducts(event);
    }


}

attachEvents();