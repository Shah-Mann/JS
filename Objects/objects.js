let restaurant = {
  name: "ABC",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatleft = this.guestCapacity - this.guestCount;
    return partySize <= seatleft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

// seatParty
// removeParty

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
