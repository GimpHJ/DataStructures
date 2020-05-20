class HashTable{
  constructor(size){
    this.data = new Array(size);
  }
  
  _hash(key){
    let hash = 0;
    for(let i=0;i<key.length;i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //Module : Not to exceed the array size
    }
    return hash;
  }
  
  set(key, value){
    const address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
    //Just to show this.
  }
  
  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i=0;i<currentBucket.length;i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
          //return the value
        }
      }
    }
  }
  
  keys(){
    const keyArray = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        for(let j=0;j<this.data[i].length;j++){
          keyArray.push(this.data[i][j][0]);
        }
      }
    }
    return keyArray;    
  }    
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()
