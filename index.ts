import {usersArray, IUser} from "./users";
import {IOrganization, IUserInfo, usersInfoArray} from "./userInfo";

interface IUserPosition {
    name: string,
    position: string,
    age: number,
    gender: string
}

function getUsersJobPositions(users: Array<IUser>, usersInfo: Array<IUserInfo>): Array<IUserPosition> {
    let result:Array<IUserPosition>=[];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < usersInfo.length; j++) {
            if (users[i].userid == usersInfo[j].userid) {
                let userData: IUserPosition = {
                    name: users[i].name,
                    position: usersInfo[j].organization.position,
                    age: usersInfo[j].age,
                    gender: users[i].gender
                }
                result.push(userData);
            }
        }
    }
    return result;
}

const usersPositions = getUsersJobPositions(usersArray,usersInfoArray);
console.log('userPositions', usersPositions);
