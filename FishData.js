const gallery = document.getElementById('gallery');

//도감 데이터
const FishList = [
    {
        name: '흰동가리',
        image: 'https://i.namu.wiki/i/yZTbSA0YyWXw7Aa1VNSdxpKbI2mvn9-uh7US-ATsUskRwbLaqeudFKUqj4xKfP96-NojtomNybrw2O1wWf2aAQ.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '흰동가리 초밥 열대어 마늘구이'
    },
    { name: '파이리', image: 'https://via.placeholder.com/150', description: '불 포켓몬' },
    { name: '꼬부기', image: 'https://via.placeholder.com/150', description: '물 포켓몬' }
];

// 도감 항목 생성 함수
function createCard(Fish) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = fish.image;

    const name = document.createElement('h3');
    name.textContent = fish.name;

    const rank = document.createElement('p');
    rank.textContent = "Rank: " + fish.rank;

    const weight = document.createElement('p');
    weight.textContent = "Weight: " + fish.weight;

    const activityTime = document.createElement('p');
    activityTime.textContent = "Activity Time: " + fish.activityTime;

    const cookingUsed = document.createElement('p');
    cookingUsed.textContent = "Cooking Used: " + fish.cookingUsed;

    const description = document.createElement('p');
    description.textContent = fish.description;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(weight);
    card.appendChild(activityTime);
    card.appendChild(cookingUsed);
    card.appendChild(description);
    

    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(Fish => {
    createCard(Fish);
});