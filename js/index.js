'use strict';

const users = [
    {
        id: 1,
        firstName: 'UserName1',
        lastName: 'UserLastNAme1',
        imageSrc: 'https://static.toiimg.com/photo/msid-71659192/71659192.jpg?822632',
    },
    {
        id: 2,
        firstName: 'UserName2',
        lastName: 'UserLastNAme2',
        imageSrc: 'https://static-sl.insales.ru/images/products/1/6777/340572793/GDS11.jpg',
    },
    {
        id: 3,
        firstName: 'UserName3',
        lastName: 'UserLastNAme3',
        imageSrc: 'https://www.motardinn.com/f/125/1255830/held-heros.jpg',
    },
];

const userList = document.getElementById('userList');

users.forEach(user => userList.append(generateUserListItem(user)));

const ALT_IMAGE = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png';

function generateUserListItem({imageSrc, firstName, lastName}) {
    
    const userListItem = document.createElement('li');

        const imageWrapper = document.createElement('div');
        userListItem.append(imageWrapper);

            const image = document.createElement('img');
            image.setAttribute('src', imageSrc ? imageSrc : ALT_IMAGE);
            image.setAttribute('alt', 'user photo');
            imageWrapper.append(image);

        const userInfo = document.createElement('div');
        userInfo.append(`${firstName} ${lastName}`)

        userListItem.append(userInfo);


    return userListItem;
}