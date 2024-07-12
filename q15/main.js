"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// •  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ['Humaira', 'Noman', 'Irfan'];
let absentGuest = guestList.pop();
console.log(`${absentGuest} , 'can not make it to the dinner so i am planning to invite someone else'`);
let newGuest = guestList.push('Sufyan');
//new set of invitations
guestList.forEach(guestList => {
    console.log(`Dear ${guestList} ,You are cordially invited to join us for a delightful dinner. Your presence would make the evening truly special.`);
});
