class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}] TypeScript version is ${this.version} `;
  }
}

const TS = new TypeScript("2.1");

console.log(TS.info("Jack"));

// class Car {
//     readonly model:string
//     readonly  numberOfWheels:number = 4
//     constructor(theModel:string){
//         this.model = theModel
//     }
// }

// nuyn banna inch verevum
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// TypeScript-ում protected (պաշտպանված) հիմնաբառը օգտագործվում է դասի հատկությունների և մեթոդների հասանելիությունը փոփոխելու համար: Այս փոփոխիչը թույլ է տալիս մուտք գործել դասի և դրա ածանցյալ դասերի մեջ գտնվող հատկություններ և մեթոդներ, բայց ոչ արտաքին կոդից:

// Որպես protected (պաշտպանված) հայտարարված հատկությունները և մեթոդները հասանելի չեն դասի օրինակներից, բայց դրանք կարող են մուտք գործել ստացված դասերի միջոցով: Սա տարբերակում է protected_ո public_ից (հասանելի է ցանկացած վայրից) և private (հասանելի է միայն այն դասի շրջանակներում, որտեղ նրանք հայտարարվել են):


class Animal {
    protected voice:string = ''
    public color:string = 'black'
    constructor(){
        this.go()
    }
    private go(){
        console.log('go')
    }   
}

class Cat extends Animal {
    public setVoice(voices:string):void{
        this.voice = voices
    }
}

const cat = new Cat();
cat.setVoice("Meu meu")
console.log(cat.color);

abstract class Component {
    abstract render():void
    abstract info(): string
}

class AppComponent extends Component {
    render():void {
        console.log('Component on')
    }

    info(): string {
        return 'This is info'
    }
}