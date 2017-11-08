function apocalypse(familiesNumber) {
    const families = Array.from(new Array(familiesNumber))
        .map(family => new Family());
    
    const children = families.reduce((acc, family) => {
        return acc.concat(family.children); 
    }, []);

    const girls = children.filter(child => child instanceof Girl);
    const boys = children.filter(child => child instanceof Boy);

    console.group('apocalypse');
    console.log('families: ', families.length);
    console.log('children: ', children.length);
    console.log('girls: ', girls.length, 
            '[' + (girls.length / children.length * 100).toFixed(2) + '%]');
    console.log('boys: ', boys.length,
            '[' + (boys.length / children.length * 100).toFixed(2) + '%]');
    console.groupEnd();
}

class Family {
    constructor() {
        this.children = this.generateChildren();
    }
    generateChildren() {
        let hasGirl = false,
            children = [];
        while(!hasGirl) {
            let child = this.generateRandomChild();
            children.push(child);
            hasGirl = child instanceof Girl;
        }
        return children;
    }
    generateRandomChild() {
        return Math.random() >= 0.5 ? new Girl() : new Boy();
    }
}
class Boy {
    constructor() {
        this.sex = 'boy';
    }
}
class Girl {
    constructor() {
        this.sex = 'girl'
    }
}

apocalypse(10000);