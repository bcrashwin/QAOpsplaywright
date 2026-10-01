const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
testDataForOrder :  {
    username : "bcrashwin@gmail.com",
    password : "Rash@123",
    productName:"ADIDAS ORIGINAL"

    }
}

)