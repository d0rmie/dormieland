const example = () => console.log('This is an example of a console log');


const human = {
    name: 'Jim',
    surname: 'Smith',
    explain() {
        return example();
    },
    age: 45,
    get name() {
        return this.name;
    }
    };

console.log(human.name);
