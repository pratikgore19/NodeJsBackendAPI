import test from 'ava'

import userService from '../user.service'

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
        userName: 'Ratik Gore',
        userEmail: 'pratikgore@gmail.com',
        userAge: 23,
        userCity: 'Pune'
    }
});

test('Must add the user',(t)=>{
    const expectedId = 1;
    let user = userService.addUser(sampleUser);
    t.is(user.userName, sampleUser.userName);
    t.deepEqual(user,{id:expectedId,...sampleUser});
});

test('Must update the user',(t)=>{
    const expectedId = 1;
    let updatedDetails = {
        ...sampleUser,
        userName: 'Amol Gore',
        userEmail: 'amolgore@gmail.com',
        userAge: 32
    }
    let updatedUser = userService.updateUser(expectedId, updatedDetails);
    t.deepEqual(updatedUser,{id:expectedId,...updatedDetails});
});

test('Must delete the user',(t)=>{
    const userId = 1;
    userService.deleteUser(userId);
    const user = userService.getUserById(userId);
    t.is(user, undefined);
});