const tree = {
    value: '0',
    children: [{
        value: '00',
        children: [{
            value: '000',
            children: [{
                value: '0000',
                children: []
            }]
        }, {
            value: '001',
            children: []
        }, {
            value: '002',
            children: []
        }]
    }, {
        value: '01',
        children: [{
            value: '010',
            children: [{
                value: '0100',
                children: []
            }]
        }, {
            value: '011',
            children: []
        }]
    }, {
        value: '02',
        children: [{
            value: '020',
            children: []
        }]
    }]
};

export default tree;