const traversingObject = testObj => {
    
    console.log('test Object', testObj);
    const keys = Object.keys(testObj);
    if(keys.length<0) 
        {
            console.log(testObj);
            return;
        }
    else 
        keys.map(
            key => {
                traversingObject(testObj[key]);
            }
        )
}
const iterate = (obj) => {
    Object.keys(obj).forEach(key => {


    if (typeof obj[key] === 'object' && ! Array.isArray(obj[key])) {
            iterate(obj[key])
        } else {
            console.log(`value: ${obj[key]}`);

        }

    })
}
const testObj = {
    a: 'name is Rohit',
    b: 'this is some text',
    c: {
        child: 'some child',
        nested: 'test child',
        moreNested: {
            some:'some more text',
            garbage: 'some garbage text',
        }
    
    },
    d: [1,2,3,4,5],
}
iterate(testObj)