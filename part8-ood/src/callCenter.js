class CallCenter {
    constructor(teamsNumber, employeesNumberPerTeam) {
        this.pendingDirectorCalls = [];
        this.pendingTeamsCalls = [];

        this.director = new Director('director');
        this.teams = Array.from(new Array(teamsNumber)).map((item, i) => {
            let team = new Team(i, employeesNumberPerTeam);
            team.onDelegateCall = delegateToDirector.bind(this);
            team.onFree = checkFreeTeams.bind(this);
            return team;
        });

        function delegateToDirector(call) {
            if (this.director.isFree()) {
                console.log('add director to the call');
                call.add(this.director);
            } else {
                this.pendingDirectorCalls.push(call);
            }
        }
        function checkFreeTeams() {
            if(this.pendingTeamsCalls.length) {
                let call = this.pendingTeamsCalls.shift();
                this.dispatchCall(call);
            }
        }
        function checkFreeDirector() {
            if(this.pendingDirectorCalls.length) {
                let call = this.pendingDirectorCalls.shift();
                delegateToDirector(call);
            }
        }
    }
    dispatchCall(call) {
        let availableTeams = this.teams.filter(team => team.isAvailable());
        if (availableTeams.length) {
            let availableEmployee = availableTeams[0].getAvailableEmployee();
            console.log('add available employee to call');
            call.add(availableEmployee);
        } else {
            this.pendingTeamsCalls.push(this.call);
        }
    }
}

class Team {
    constructor(id, employeesNumber) {
        this.onDelegateCall = function () { };
        this.onFree = function () { };
        this.pendingManagerCalls = [];

        this.manager = new Manager(id + ':manager');
        this.manager.onDelegateCall = delegateToDirector.bind(this);
        this.manager.onFree = checkFreeManager.bind(this);

        this.employees = Array.from(new Array(employeesNumber)).map((item, i) => {
            let employee = new Employee(id + ':employee' + i);
            employee.onDelegateCall = delegateToManager.bind(this);
            employee.onFree = checkFreeEmployees.bind(this);
            return employee;
        });

        function delegateToManager(call) {
            if (this.manager.isFree()) {
                console.log('add manager to the call');
                call.add(this.manager);
            } else {
                this.pendingManagerCalls.push(call);
            }
        }
        function checkFreeEmployees() {
            this.onFree();
        }
        function checkFreeManager(call) {
            if(this.pendingManagerCalls.length) {
                let call = this.pendingManagerCalls.shift();
                call.add(this.manager);
            }
        }
        function delegateToDirector(call) {
            this.onDelegateCall(call);
        }
    }
    isAvailable() {
        return this.employees.some(employee => employee.isFree());
    }
    getAvailableEmployee() {
        return this.employees.filter(employee => employee.isFree())[0];
    }
}

class Call {
    constructor(customer) {
        console.log('call created')
        this.isPending = true;
        this.customer = customer;
        this.customer.connect(this);
    }
    add(employee) {
        console.log('call is processing')
        this.isPending = false;
        this.employee = employee;
        this.employee.connect(this);
    }
    suspend() {
        console.log('call suspended')
        this.isPending = true;
        this.employee.disconnect();
        this.employee = null;
    }
    end() {
        console.log('call processed')
        this.isPending = false;
        this.customer.disconnect();
        this.customer = null;
        this.employee.disconnect();
        this.employee = null;
    }
}

class Caller {
    constructor(name) {
        this.name = name;
        this.isConnected = false;
    }
    connect(call) {
        this.call = call;
        this.isConnected = true;
    }
    disconnect() {
        this.call = null;
        this.isConnected = false;
    }
}

class Customer extends Caller {
    constructor(name, problemLevel = problemLevels.EMPLOYEE) {
        super(name);
        this.problemLevel = problemLevel;
        this.isSatisfied = false;
    }
    resolveProblem() {
        this.isSatisfied = true;
        console.log('problem resolved');
    }
}

class Employee extends Caller {
    constructor(name) {
        super(name);
        this.onDelegateCall = function () { };
        this.onFree = function () { };
        this.problemSolvingLevel = problemLevels.EMPLOYEE;
    }
    connect(call) {
        super.connect(call);
        if (call.customer.problemLevel <= this.problemSolvingLevel) {
            console.log('resolve problem');
            call.customer.resolveProblem();
            call.end();
        } else {
            call.suspend();
            console.log('delegate problem');
            this.onDelegateCall(call);
        }
        this.onFree();
    }
    isFree() {
        return !this.isConnected;
    }
}

class Manager extends Employee {
    constructor(name) {
        super(name);
        this.isAvailable = true;
        this.problemSolvingLevel = problemLevels.MANAGER;
    }
    isFree() {
        return super.isFree() && this.isAvailable;
    }
}

class Director extends Manager {
    constructor(name) {
        super(name);
        this.problemSolvingLevel = problemLevels.DIRECTOR;
    }
}

const problemLevels = {
    EMPLOYEE: 0,
    MANAGER: 1,
    DIRECTOR: 2
}

let callCenter = new CallCenter(4, 10),
    customer = new Customer('John', problemLevels.MANAGER);
    call = new Call(customer);
callCenter.dispatchCall(call);