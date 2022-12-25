function demoJSObjects() {
    let obj1 = { key: 'value' }
    console.log(`$ let obj1 = { key: 'value'}`);
    console.log(`obj1 = `, obj1)
    console.log(`obj1.toString() = `, obj1.toString())
    console.log(`JSON.stringify(obj1) = `, JSON.stringify(obj1))
    console.log(`$ obj1.key is `, obj1.key)
    console.log(`$ obj1['key'] is `, obj1['key'])
}

function demoObjectsAccess() {
    let obj1 = {
        0: 'value',
        '00': '00Value',
        key: 'valueForKey',
        'key 2': 'value for key 2',
        _key: 'value_key'
    }
    console.log(`$ let obj1 = {
        0: 'value',
        '00': '00Value',
        key: 'valueForKey',
        'key 2': 'value for key 2',
        _key: 'value_key'
    }`);
    console.log(`obj1 = `, obj1)
    console.log(`JSON.stringify(obj1) = `, JSON.stringify(obj1,null,1))

    console.log(`obj1[0] = `, obj1[0])
    console.log(`obj1['0'] = `, obj1['0'])
    console.log(`obj1['00'] = `, obj1['00'])
    console.log(`obj1['key 2'] = `, obj1['key 2'])
    console.log(`obj1._key = `, obj1._key)
    console.log(`obj1['_key'] = `, obj1['_key'])
    console.log(`obj1['randomKey'] = `, obj1['randomKey'])
}

function demoObjectsComparision() {

    let obj1 = { key: 'value' }
    console.log(`$ let obj1 = { key: 'value' }`);
    console.log(`obj1 = `, obj1)
    console.log(`JSON.stringify(obj1) = `, JSON.stringify(obj1,null,1))

    let obj2 = { key: 'value' }
    console.log(`$ let obj2 = { key: 'value' }`);
    console.log(`obj2 = `, obj1)
    console.log(`JSON.stringify(obj2) = `, JSON.stringify(obj2,null,1))

    console.log(`$ obj1 == obj2 is `, obj1 == obj2)
    console.log(`$ obj1 === obj2 is `, obj1 === obj2)

    let obj3 = { key: obj1 }
    console.log(`$ let obj3 = { key: obj1 }`);
    console.log(`obj3 = `, obj1)
    console.log(`JSON.stringify(obj3) = `, JSON.stringify(obj3,null,1))

    let obj4 = { key: obj1 }
    console.log(`$ let obj4 = { key: obj1 }`);
    console.log(`obj4 = `, obj1)
    console.log(`JSON.stringify(obj4) = `, JSON.stringify(obj4,null,1))

    console.log(`$ obj3 == obj4 is `, obj3 == obj4)
    console.log(`$ obj3 === obj4 is `, obj3 === obj4)

    console.log(`$ obj3.key == obj4.key is `, obj3.key == obj4.key)
    console.log(`$ obj3.key === obj4.key is `, obj3.key === obj4.key)

    obj1.key = 8
    console.log(`$ obj1.key = 8`)
    console.log(`obj1 = `, obj1)
    console.log(`JSON.stringify(obj1) = `, JSON.stringify(obj1,null,1))

    console.log(`obj3 = `, obj3)
    console.log(`JSON.stringify(obj3) = `, JSON.stringify(obj3,null,1))

    console.log(`obj4 = `, obj4)
    console.log(`JSON.stringify(obj1) = `, JSON.stringify(obj4,null,1))
}