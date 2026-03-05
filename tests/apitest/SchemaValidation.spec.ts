import test, { expect } from "@playwright/test";
import Ajv from "ajv";



test('schema validation', async ({request}) => {


    

   const response  =  await   request.get('https://jsonplaceholder.typicode.com/posts/1')


       expect(response.ok()).toBeTruthy()

       expect(response.status()).toBe(200)

    const   responsebody =  await response.json()


    

 const  schema  =  {
  type: "object",
  properties: {
    userId: {
      type: "integer"
    },
    id: {
      type: "integer"
    },
    title: {
      type: "string"
    },
    body: {
      type: "string"
    }
  },
  required: [
    "userId",
    "id",
    "title",
    "body"
  ]
}


    // Create Avj object 

       const avj = new Ajv()

       const validate =  avj.compile(schema)

      const  isvalid = validate(responsebody)


      expect(isvalid).toBeTruthy()

});