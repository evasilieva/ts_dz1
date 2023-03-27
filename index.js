"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions(users, usersInfo) {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < usersInfo.length; j++) {
            if (users[i].userid == usersInfo[j].userid) {
                let userData = {
                    name: users[i].name,
                    position: usersInfo[j].organization.position,
                    age: usersInfo[j].age,
                    gender: users[i].gender
                };
                result.push(userData);
            }
        }
    }
    return result;
}
const usersPositions = getUsersJobPositions(users_1.usersArray, userInfo_1.usersInfoArray);
console.log('userPositions', usersPositions);
