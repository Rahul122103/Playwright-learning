// Basic auth 


/*
Buffer.from("admin:1234").toString('base64');  // this  is encoding 


1️⃣ What Basic Auth Actually Requires

Basic Auth header format:

Authorization: Basic base64(username:password)
Example credentials:

username = admin
password = 1234

First combine them:

admin:1234

Then convert this string to Base64:

YWRtaW46MTIzNA==

Final header sent to API:

Authorization: Basic YWRtaW46MTIzNA==







-> Convert to Buffer
Buffer.from("admin:1234")

Buffer is a Node.js class used to handle binary data.

This converts the string into binary representation.

Example conceptually:

admin:1234
↓
binary data


-> Convert Binary to Base64
.toString('base64')

This converts the binary data into Base64 encoding.

Result:

YWRtaW46MTIzNA==



How things work 

1. Buffer convert username password in binaory code 
2. .toString -> convert binary code in Readable text 
// But we have to send data encrypted ( because data send in api encrypted )
// so we have to encode this username and password 

3. .toString('base64') -> convert readable text to non undertandable ( or non readable, or meaningless text) text 
// base64 - Convert this buffer into a Base64 encoded string.


*/


import {test , expect  } from "@playwright/test";


test('Basic Auth', async ({request}) => {


    const encoded =  Buffer.from('user:pass').toString('base64')


   const response  =  await   request.get('https://httpbin.org/basic-auth/user/pass',
        {headers:{
            Authorization:`Basic ${encoded}`
        }}
       )


       expect(response.ok()).toBeTruthy()

       expect(response.status()).toBe(200)
    
});



test('Apikey Authenication', async ({request}) => {


    const apikey = "2822111264d062682d6aea0b010f0671"


   const response  =  await   request.get('http://api.openweathermap.org/data/2.5/forecast?id=524901',
        {params:{
            appid:apikey
        }}
       )


       expect(response.ok()).toBeTruthy()

       expect(response.status()).toBe(200)
// console.log(await response.json()) // this will not  print nested object and array json also it just shows text as object or array

     console.log(JSON.stringify(await response.json(), null, 2)) // this wil print nested object and array json also
    
});