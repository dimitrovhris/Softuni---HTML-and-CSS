function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
         let text = document.getElementById(`searchField`).value;
         document.getElementById(`searchField`).value = '';
         let rows = Array.from(document.querySelectorAll('tbody tr'));
         rows.forEach(row => row.setAttribute('class', ''));
         for (const row of rows) {
            let cells = Array.from(row.children);
            for (const cell of cells) {
               if(cell.textContent.includes(text)){
                  row.setAttribute('class', 'select');
               }
            }
         }
   }
}