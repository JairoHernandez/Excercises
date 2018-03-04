// Prices for order of stickers = area and quantity
// different products having a different price per unit of area
// quantity of 1 = full price
// quantity increases price fails, quickly at first then more gradually

// pseudocode
// area = item_width * item_height
// quantity_adjustment = quantity ^ -0.1
// item_price = area * product_area_price * quantity * quantity_adjustment

// { quantity: 50, width: 2, height: 1, product: { area_price: 0.8 } }
// { quantity: 50, width: 1, height: 1, product: { area_price: 0.8 } }

// > Math.pow(50, -0.1)
// 0.6762433378062414

function quantityDiscount(items) {

    let area = '';
    let quantity_adjustment = '';
    let item_price = '';
    let order_total = 0;
    let discount_total = 0;

    for (let item of items) {
        area = item.width * item.height;
        quantity_adjustment = Math.pow(item.quantity, -0.1);
        item_price = area * item.product.area_price * item.quantity * quantity_adjustment;
        order_total += item_price;
    }

    let total_quantity = 0;
    for (let item of items) {
        total_quantity += item.quantity;
    }

    for (let item of items) {
        area = item.width * item.height;
        quantity_adjustment = Math.pow(total_quantity, -0.1);
        item_price = area * item.product.area_price * item.quantity * quantity_adjustment;
        discount_total += item_price;
    }
    answer = order_total.toFixed(2) - discount_total.toFixed(2);
    answerRounded = answer.toFixed(2);  

    if (answerRounded === 0.00) {
        return 0.0
    }
    return answerRounded;   
}


let items =  [
    { quantity: 50, width: 2, height: 2, product: { area_price: 0.6 } },
    { quantity: 150, width: 3, height: 2, product: { area_price: 0.8 } }
 ];

console.log(quantityDiscount(items));
