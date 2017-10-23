function Profile(name, address, city, state, zipcode, avatar) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.avatar = avatar;
}

Profile.prototype = {
  getProfileUpdate : function(Profile) {
    var getField = prompt("Which field would you like to update?");
    var getInput = prompt(`What would you like to change ${getField} to?`);

    switch (getField) {
      case "name":
        Profile.name = getInput;
        console.log(`Your updated name is ${Profile.name}.`);
        break;
      case "address":
        Profile.address = getInput;
        console.log(`Your updated address is ${Profile.address}.`);
        break;
      case "city":
        Profile.city = getInput;
        console.log(`Your updated city is ${Profile.city}.`);
        break;
      case "state":
        Profile.state = getInput;
        console.log(`Your updated city is ${Profile.state}.`);
        break;
      case "zipcode":
        Profile.zipcode = getInput;
        console.log(`Your updated zipcode is ${Profile.zipcode}.`);
        break;
      case "avatar":
        Profile.avatar = getInput;
        console.log(`Your updated avatar is ${Profile.avatar}.`);
        break;
      }
    // console.log(Profile);
  },
  updateProfile : function(Profile) {
   var newProfile = Object.assign(this, Profile);
   console.log(newProfile);
  }
};


BrookeProfile = new Profile("Brooke","22 Churchwell","Durham","NC","dog");
ChristopherProfile = new Profile("Christopher","22 Churchwell","Raleigh","NC","27713","cat");

// console.log(Profile.prototype.getProfileUpdate(BrookeProfile));

console.log(ChristopherProfile.updateProfile({city:"Durham"}));
console.log(ChristopherProfile.newProfile);
