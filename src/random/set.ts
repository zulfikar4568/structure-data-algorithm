export class MySet {
  private collection: any = [];

  public has = (element: any) => {
    return (this.collection.indexOf(element) !== -1);
  }

  public values = () => {
    return this.collection;
  }

  public add = (element: any) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    } else {
      return false;
    }
  }

  public remove = (element: any) => {
    if (!this.has(this.collection)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  
  public size = () => {
    return this.collection.length;
  }

  public union = (otherSet: MySet) => {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((element: any) => {
      unionSet.add(element)
    });
    secondSet.forEach((element: any) => {
      unionSet.add(element)
    });
    return unionSet;
  }

  public intersection = (otherSet: MySet) => {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((element: any) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element)
      }
    });
    return intersectionSet;
  }
  
  public difference = (otherSet: MySet) => {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((element: any) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element)
      }
    });
    return differenceSet;
  }

  public subset = (otherSet: MySet) => {
    let firstSet = this.values();
    return firstSet.every(function(value: any) {
      return otherSet.has(value);
    })
  }
}