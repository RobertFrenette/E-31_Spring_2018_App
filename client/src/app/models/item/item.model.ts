  // Create Item Model Class
  export class Item {
    // properties
    public itemName: string = '';
    public description: string = '';
    
    constructor(itemName: string, email: string, description: string) {
      this.itemName = itemName;
      this.description = email;
    }
  }