// //Question:1
//  For the given JSON iterate over object for Loops (for,for in, for Of forEach)


let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]


  console.log(`This is in For Loop`);
  for ( i=0; i<object.length; i++){

    var res=object[i]
    console.log(`
    ${res.person}    ${res.age}    ${res.company}
    `);
  }

  console.log(`This is in For..in Loop`);

  for(let key in object){
    var res=object[key]
    console.log(`
    ${res.person}    ${res.age}    ${res.company}
    `);
  }

  console.log(`This is in For..of Loop`);

  for (res of object){
    console.log(`
    ${res.person}    ${res.age}    ${res.company}
    `);
  }



  console.log(`This is in ForEach Loop`);


  object.forEach((res) => {
    console.log(`
    ${res.person}    ${res.age}    ${res.company}
    `);

  });
