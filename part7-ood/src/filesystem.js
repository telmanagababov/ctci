class Directory {
    constructor(name) {
        this.name = name;
        this.files = {};
    }

    add(file) {
        this.files[file.name] = file;
    }

    remove(fileName) {
        this.files[fileName] = null;
    }

    get(fileName) {
        return this.files[fileName];
    }

    dir() {
        return Object.keys(this.files);
    }
}

class File {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    setData(data) {
        this.data = data;
    }
}

class Folder extends Directory {
    constructor(name) {
        super(name);
    }
}

class FileSystem extends Directory {
    constructor() {
        super('filesystem');
    }
}

let fileSystem = new FileSystem(),
    aFolder = new Folder('aFolder'),
    bFolder = new Folder('bFolder'),
    b1File = new File('b1File', 'b1Data'),
    b2File = new File('b2File', 'b2Data');

bFolder.add(b1File);
bFolder.add(b2File);
fileSystem.add(aFolder);
fileSystem.add(bFolder);

console.log(fileSystem.dir());
console.log(fileSystem.get('bFolder').dir());