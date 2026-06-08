const findday = (day)=>{
    let showday = document.getElementById("dealsabout")
    if(day==="Monday"){
        showday.innerText = "Monday Deals"
    }else  if(day==="Tuesday"){
        showday.innerText = "Tuesday Deals"
    }else  if(day==="Wednesday"){
        showday.innerText = "Wednesday Deals"
    }else  if(day==="Thursday"){
        showday.innerText = "Thursday Deals"
    }else  if(day==="Friday"){
        showday.innerText = "Friday Deals"
    }else  if(day==="Saturday"){
        showday.innerText = "Saturday Deals"
    }else  if(day==="Sunday"){
        showday.innerText = "Sunday Deals"
    }
    
}



  function showDeals(day) {
    // const selectedDay = document.getElementById('days').value; // Get selected day

    const dealsContainer = document.getElementById('dealsContainer');

    // Clear existing deals
    dealsContainer.innerHTML = '';

    // Define deals for each day
    const deals = {
        Monday : [
           { title: "Pizza Lovers",   menu: [
            { name: "2 LargePizze", price: 2000 },
            { name: "2 Sandwithch", price: 300 },
            { name: "2 Drink ", price: 300 },
            { name: "4 Ice Creams ", price: 400 },
            { name: "1 Salad", price: 200 },
          ],
          totalPrice: function () {
            return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
          },
        },  { title: "B.B.Q",  menu: [
            { name: "4 LegPiecs", price: 1000 },
            { name: "3 Kabab", price: 300 },
            { name: "1 Drink 2.15L", price: 200 },
            { name: "2 Ice Cream", price: 200 },
            { name: "1 Salad", price: 120 },
          ],
          totalPrice: function () {
            return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
          },
        },  { title: "Special Offer",  menu: [
            { name: "4 Burgers", price: 1000 },
            { name: " 2 Fries", price: 400 },
            { name: "2 Drink ", price: 150 },
            { name: "4 Ice Cream", price: 400 },
            { name: "1 Salad", price: 120 },
          ],
          totalPrice: function () {
            return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
          },
        },
        ],
        Tuesday: [
            {
              title: "Chinese Special",
              menu: [
                { name: "2 Large Chow Mein", price: 1200 },
                { name: "2 Spring Rolls", price: 300 },
                { name: "2 Drink ", price: 300 },
                { name: "2 Desserts", price: 400 },
                { name: "1 Soup Bowl", price: 250 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Vegetarian Feast",
              menu: [
                { name: "2 Veggie Burgers", price: 600 },
                { name: "2 Fries", price: 400 },
                { name: "2 Lemonades", price: 300 },
                { name: "2 Desserts", price: 300 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Snack Time",
              menu: [
                { name: "2 Grilled Sandwiches", price: 800 },
                { name: "2 Fries", price: 300 },
                { name: "1 Drink", price: 200 },
                { name: "2 Ice Creams", price: 300 },
                { name: "1 Salad", price: 150 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
          ],
          Wednesday: [
            {
              title: "Mexican Fiesta",
              menu: [
                { name: "2 Burritos", price: 800 },
                { name: "2 Tacos", price: 500 },
                { name: "2 Drink ", price: 300 },
                { name: "Nachos with Dip", price: 300 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Grill Special",
              menu: [
                { name: "2 Grilled Sandwiches", price: 700 },
                { name: "1 Fries", price: 300 },
                { name: "2 Milkshakes", price: 500 },
                { name: "2 Brownies", price: 300 },
                { name: "1 Salad", price: 150 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Budget Combo",
              menu: [
                { name: "1 Large Pizza", price: 1200 },
                { name: "1 Fries", price: 300 },
                { name: "1 Drink ", price: 200 },
                { name: "2 Desserts", price: 400 },
                { name: "1 Salad", price: 150 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
          ],
        
          Thursday: [
            {
              title: "Seafood Special",
              menu: [
                { name: "2 Fish Fillets", price: 1000 },
                { name: "1 Prawn Curry", price: 1200 },
                { name: "1 Large Fries", price: 300 },
                { name: "2 Lemonades", price: 300 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Desi Delight",
              menu: [
                { name: "1 Plate Chicken Karahi", price: 1200 },
                { name: "4 Naans", price: 200 },
                { name: "1 Raita Bowl", price: 150 },
                { name: "2 Drinks", price: 250 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Mini Feast",
              menu: [
                { name: "1 Small Biryani", price: 400 },
                { name: "2 Kebabs", price: 300 },
                { name: "1 Drink ", price: 150 },
                { name: "1 Ice Cream", price: 200 },
                { name: "1 Salad", price: 100 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
          ],
        
          Friday: [
            {
              title: "Biryani Combo",
              menu: [
                { name: "2 Plates Chicken Biryani", price: 800 },
                { name: "2 Raita Bowls", price: 200 },
                { name: "2 Drink ", price: 300 },
                { name: "4 Samosas", price: 250 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Steak Special",
              menu: [
                { name: "2 Beef Steaks", price: 1400 },
                { name: "1 Mashed Potato Bowl", price: 300 },
                { name: "2 Drinks", price: 300 },
                { name: "2 Desserts", price: 400 },
                { name: "1 Salad", price: 200 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
            {
              title: "Quick Bite",
              menu: [
                { name: "1 Chicken Wrap", price: 400 },
                { name: "1 Fries", price: 200 },
                { name: "1 Drink ", price: 150 },
                { name: "1 Ice Cream", price: 100 },
                { name: "1 Salad", price: 100 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
          ],
        
        
         Saturday : [
            { title: "Deal 1",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },  { title: "Deal 2",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },  { title: "Deal 3",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
         ],
         Sunday : [
            { title: "Deal 1",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },  { title: "Deal 2",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },  { title: "Deal 3",  menu: [
                { name: "Burger", price: 300 },
                { name: "Fries", price: 150 },
                { name: "Drink", price: 100 },
                { name: "Ice Cream", price: 200 },
                { name: "Salad", price: 120 },
              ],
              totalPrice: function () {
                return this.menu.reduce((sum, menuitem) => sum + menuitem.price, 0);
              },
            },
         ],
         
        }
        const selectedDay = day;
        findday(selectedDay)
     
    // Select deals based on the day
    if (selectedDay === "Monday" ) {
        const selectedDeals = deals.Monday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name} </p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                     <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });
    }
else if(selectedDay === "Tuesday"){
    const selectedDeals = deals.Tuesday;
    const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
    dealsContainer.innerHTML = ""; // Clear any previous deals

    selectedDeals.forEach((deal) => {
        // Convert the menu items to a list of strings
        const menuItems = deal.menu
            .map((item) => `<p>${item.name} </p>`)
            .join(""); // Join them into a single string

        // Create the deal card
        const dealCard = `
            <div class="deal-card">
                <h3>${deal.title}</h3>
                ${menuItems}
                <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                 <button class = "orderdeal"  > <a target="_blank" href = "order.html"> Order Now </a> </button>
            </div>
        `;

        // Append the card to the container
        dealsContainer.innerHTML += dealCard;
    });

    }
    else if(selectedDay === "Wednesday"){
        const selectedDeals = deals.Wednesday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name} </p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                     <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });

    }
    else if(selectedDay === "Thursday"){
        const selectedDeals = deals.Thursday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name} </p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                     <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });
    }
    else if(selectedDay === "Friday"){
        const selectedDeals = deals.Friday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name} </p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                     <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });

    }
    else if(selectedDay === "Saturday"){
        const selectedDeals = deals.Saturday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name} </p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                    <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });

    }
    else if(selectedDay === "Sunday"){
        const selectedDeals = deals.Sunday;
        const dealsContainer = document.getElementById("dealsContainer"); // Make sure this element exists in your HTML
        dealsContainer.innerHTML = ""; // Clear any previous deals

        selectedDeals.forEach((deal) => {
            // Convert the menu items to a list of strings
            const menuItems = deal.menu
                .map((item) => `<p>${item.name}</p>`)
                .join(""); // Join them into a single string

            // Create the deal card
            const dealCard = `
                <div class="deal-card">
                    <h3>${deal.title}</h3>  
                    ${menuItems}
                    <p><strong>Total Price:</strong> Rs ${deal.totalPrice()}</p>
                     <button class = "orderdeal"  > <a href = "order.html"> Order Now </a> </button>
                </div>
            `;

            // Append the card to the container
            dealsContainer.innerHTML += dealCard;
        });
    }

    // Generate HTML for deals
   
}


showDeals("Monday")





