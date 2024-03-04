export class ObjectGroupStructure {
  entries: string[];
  name: string;
  childs: ObjectGroupStructure[];
  constructor(name: string, entries: string[], childs: ObjectGroupStructure[]) {
    this.entries = entries
    this.childs = childs
    this.name = name
  }

  entriesResolver(): string[] {
    return this.resolver(this.entries, this);
  }

  private resolver(listEntries: string[], objectGroup: ObjectGroupStructure): string[] {
    if (!this.circularChecker()) return [];

    if (objectGroup.childs.length > 0) {
      objectGroup.childs.forEach((objectChildGroup) => {
        listEntries = this.resolver(listEntries.concat(objectChildGroup.entries), objectChildGroup);
      })
    }

    return this.removeDuplicateOfArrayString(listEntries)
  }

  private removeDuplicateOfArrayString(array: string[]): string[] {
    var isEverSee: Record<string, number> = {};
    var result: string[] = [];
    var nextValue: number = 0;
    for (var i = 0; i < array.length; i++) {
      // store the array value in item
      var item = array[i];

      // check if the value have ever seen, if not we give the flag in seen variable and store it in result variable
      if (isEverSee[item] !== 1) {
        isEverSee[item] = 1;
        result[nextValue++] = item;
      }
    }
    return result;
  }

  circularChecker(): boolean {
    try {
      this.nestedChecker([this.name], this)
      return true;
    } catch (error: any) {
      console.log(error.message);
      return false;
    }
  }

  private nestedChecker(listGroupName: string[], objectGroup: ObjectGroupStructure): string[] {
    let isDuplicated = new Set(listGroupName).size !== listGroupName.length;
    if (isDuplicated) {
      throw new Error(`It\'s not possible, it will cause circular reference!`);
    }

    if (objectGroup.childs.length > 0) {
      objectGroup.childs.forEach((objectChildGroup) => {
        this.nestedChecker(listGroupName.concat(objectChildGroup.name), objectChildGroup);
      });
    } else {
      //console.log(`Child end: ${listNodeName}`);

      // Reset the list of Node when the node doesn't have children
      listGroupName = [];
    }

    return listGroupName;
  }
}

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

try {
  rgtest4.circularChecker() ? console.log('Pass!') : console.log('Failed!');
}
catch (err: any) {
  console.log(err.message);
}

console.log(rgtest4.entriesResolver());