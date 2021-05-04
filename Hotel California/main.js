let hotel = {
    rooms: 140,
    booked: 120,

    isAvailable: function () {
        return this.rooms - this.booked;
    }

};


let availableRooms = document.getElementById('rooms');
availableRooms.textContent = hotel.isAvailable();


