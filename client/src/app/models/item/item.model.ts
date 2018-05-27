  // Create Item Model Class
  export class Item {
    // properties
    public listId: string = '';
    public itemName: string = '';
    public description: string = '';
    
    constructor(listId: string, itemName: string, email: string, description: string) {
      this.listId = listId;
      this.itemName = itemName;
      this.description = email;
    }
  }