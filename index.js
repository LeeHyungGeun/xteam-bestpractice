(function() {
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

    /** 
     * ==============================
     * Issue Example
     * When I did code review, I saw someone changed array by filter
     * In addition, It is not obey the rule of Pure Function.
    */
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

    /** 
     * ==============================
     * Best Practice
     * First, to use forEach, not the filter, it is to follow their role of ES6
     * Second, for the Immutable rule, you can clone the object by cloneDeep of Lodash.
     * In addition, on map, forEach, filter, we cannot declare any variable and change the object of outer function.
    */
    const newPeople = _.forEach(_.cloneDeep(people), (person, key) => { // cloneDeep and forEach for update a state.
        if (person.order === (selectedOrder - 1)) {
            person.order = selectedOrder;
            return person;
        }
        if (person.order === selectedOrder) {
            person.order = (selectedOrder - 1);
            return person;
        }
    });
}());