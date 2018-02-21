# Best Practice

## What was the Issue 
When I did Code review, I saw someone changed array by filter,
and he changed the object of outer function and it could be because JavaScript Function is followed the Call By Sharing.
``` javascript
const people = [
    {
        id: 1,
        name: 'Kim',
        order: 1
    },
    {
        id: 2,
        name: 'Lee',
        order: 2
    }
];

const selectedOrder = 2;
people.filter((person, index) => {
    if (person.order === (selectedOrder - 1)) {
        person.order = selectedOrder; // At the line, original person is changed because JavaScript is Call By Sharing.
        return person;
    }
    if (person.order === selectedOrder) {
        person.order = (selectedOrder - 1);
        return person;
    }
});
```

## Best Practice
For the rule of Pure Function, which is Immutable, I use cloneDeep of lodash when I update the object or state. Also, ImmutableJS can be one of choice.
``` javascript
// cloneDeep and forEach for update a state.
_.forEach(_.cloneDeep(people), (person, key) => { 
    if (person.order === (selectedOrder - 1)) {
        person.order = selectedOrder;
        return person;
    }
    if (person.order === selectedOrder) {
        person.order = (selectedOrder - 1);
        return person;
    }
});
```


## Run
``` bash
> yarn install

> yarn start
```