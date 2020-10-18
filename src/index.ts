class A{
    declare foo: string;
    #bar: number;
    constructor(foo: string, bar: number){
        this.foo = foo;
        this.#bar = bar;
    }
    get bar () {
        return this.#bar;
    }
}

var a = new A('p', 1);

console.log(a);
console.log(a);

export default a;