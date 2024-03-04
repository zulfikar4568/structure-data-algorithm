# Object Group Usecase

![image](https://github.com/zulfikar4568/structure-data-algorithm/assets/64786139/9e54ab70-1b81-4cfe-a9dd-fb37f62421f8)

![image](https://github.com/zulfikar4568/structure-data-algorithm/assets/64786139/c4b3a4ba-9ff3-423e-a08b-58d7a294ca7a)


## How to Use
```ts
const rgtest1 = new ObjectGroupStructure('rgtest1', ['Resource1', 'Resource2', 'Resource3', 'Resource4'], [])
const rgtest2 = new ObjectGroupStructure('rgtest2', ['Resource1', 'Resource2', 'Resource5'], []);
const rgtest3 = new ObjectGroupStructure('rgtest3', ['Resource6'], []);
const rgtest4 = new ObjectGroupStructure('rgtest4', ['Resource3', 'Resource7'], []);
const rgtest5 = new ObjectGroupStructure('rgtest5', ['Resource4', 'Resource5'], []);
const rgtest6 = new ObjectGroupStructure('rgtest6', ['Resource2', 'Resource3', 'Resource10'], []);

rgtest1.childs = [rgtest2, rgtest3];
rgtest2.childs = [rgtest3, rgtest5];
rgtest3.childs = [rgtest5];
rgtest4.childs = [rgtest1, rgtest2, rgtest3];
rgtest5.childs = [rgtest6];
// rgtest6.childs = [rgtest4]; // Circular Refrences
```

## Check if the Object Group have circular reference
```ts
rgtest4.circularChecker() ? console.log('Pass!') : console.log('Failed!');
```

## Resolve the entries
```ts
console.log(rgtest4.entriesResolver());
```
