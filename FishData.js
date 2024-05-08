const gallery = document.getElementById('gallery');
const fishImgContainer = document.getElementById('fishImgContainer');

// 도감 데이터
const FishList = [
    {
        name: '흰동가리',
        image: 'https://i.namu.wiki/i/yZTbSA0YyWXw7Aa1VNSdxpKbI2mvn9-uh7US-ATsUskRwbLaqeudFKUqj4xKfP96-NojtomNybrw2O1wWf2aAQ.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '흰동가리 초밥\n열대어 마늘구이'
    },
    {
        name: '콤버',
        image: 'https://i.namu.wiki/i/ICNzuxA8oIndZ_PSESfSuotAiAZvzl5YPdUhFMJocNSFBHh_wVIOwqGOvxtAlVTDsKE_krL5VSPrAq5xzTaqSg.webp',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '콤버 초밥 콤버 샌드위치',        
    },
    {
        name: '지중해카디널피쉬',
        image: 'https://i.namu.wiki/i/QmG5mgUzsw28-rJeDWV2lflhO_BCQTa94S6YxkB6aBn60_T74DNGvoS84RIFqD67ZVUV6Lz159dESVo5P2hTCg.webp',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '지중해카디널피쉬 초밥',       
    },
    {
        name: '금강바리',
        image: 'https://i.namu.wiki/i/NdxtCq0_3bF9dVSd1yslnbpXv0hPHZudayFmS7C5FiEO6Xyr_CQn6Q-SoCEADPx4outjivjQ0jpD7z924d_4XQ.png',
        rank: '1',
        weight: '0.3',
        activityTime: '낮',
        cookingUsed: '금강바리  초밥',       
    }
    
];

// 도감 이미지 항목 생성 함수
function createCardImg(fish) {
    const fishcard = document.createElement('div');
    fishcard.classList.add('fish-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = fish.image;

    const name = document.createElement('h3');
    name.textContent = fish.name;

    imageContainer.appendChild(image);
    fishcard.appendChild(imageContainer);
    fishcard.appendChild(name);

    // 이미지 카드에 클릭 이벤트 추가
    fishcard.addEventListener('click', function() {
        createCard(fish);
    });
    
    fishImgContainer.appendChild(fishcard);
}

// 도감 항목 생성 함수
function createCard(fish) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = fish.image;

    const name = document.createElement('h3');
    name.textContent = fish.name;

    const rank = document.createElement('p');
    rank.textContent = "Rank " + fish.rank;

    const weight = document.createElement('p');
    weight.textContent = "Weight " + fish.weight;

    const activityTime = document.createElement('p');
    activityTime.textContent = "Activity Time " + fish.activityTime;

    const cookingUsed = document.createElement('p');
    cookingUsed.textContent = "Cooking Used " + fish.cookingUsed;
   
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(weight);
    card.appendChild(activityTime);
    card.appendChild(cookingUsed);

    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(fish => {
    createCardImg(fish);
});
