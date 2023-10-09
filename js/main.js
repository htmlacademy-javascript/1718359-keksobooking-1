
const arrAuthors = [];
const typeArr = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinArr = ['12:00', '13:00', '14:00'];

function createAuthor(){
  for (let i = 1; i < 11; i++) {
    const num = `0${i}`;
    arrAuthors.push({
      author:{
        avatar:`img/avatars/user${num.slice(-2)}.png`
      },
      offer:{
        title: `Заголовок предложения ${i}`,
        address: 'hz',
        price: Math.ceil(Math.random() * 10000),
        type: typeArr[i],
        rooms: Math.ceil(Math.random() * 300),
        guests:  Math.ceil(Math.random() * 1000),
        checkin: checkinArr[Math.ceil(Math.random() * 2)],
        features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        photos:['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
      },
      location:{
        lat: (Math.random() * (35.70000 - 35.65000) + 35.65000).toFixed(5),
        lng: (Math.random() * (139.80000 - 139.70000) + 139.70000).toFixed(5)
      }
    });

  }

}
createAuthor();


