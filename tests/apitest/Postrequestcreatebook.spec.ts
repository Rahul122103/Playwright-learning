



/*
http - Post 
Create Book


*/


import { test,expect } from "@playwright/test";



test('Create Book Post Request', async({request}) => {


    // Request Body 
   const requestbody  =  {
    firstname: "Jim",
   lastname : "Brown",
    totalprice: 111,
  depositpaid: true,
    bookingdates: {
        checkin: "2018-01-01",
        checkout : "2019-01-01",
    },
     additionalneeds :"Breakfast"
}



const response=  await request.post("/booking",{data:requestbody})


    const jsonbody = await response.json()

console.log( jsonbody)


// assertion 

expect(response.ok()).toBeTruthy()

expect(response.status()).toBe(200)



// assertion on key ( they are properties)

expect(jsonbody).toHaveProperty('bookingid')
expect(jsonbody).toHaveProperty('booking')



// assertion on values 

expect(jsonbody.booking).toMatchObject({

     firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'

})

expect(jsonbody.booking.bookingdates).toMatchObject({

      checkin: '2018-01-01', checkout: '2019-01-01' })
   

})








;