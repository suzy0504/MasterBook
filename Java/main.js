import FishList from "./FishData.js";

const gallery = document.getElementById('gallery');
const fishImgContainer = document.getElementById('fishImgContainer');

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
    rank.textContent = "랭크" + fish.rank;

    const weight = document.createElement('p');
    weight.textContent = "살점 무게" + fish.weight;

    const activityTime = document.createElement('p');
    activityTime.textContent = "활동 시간" + fish.activityTime;

    const cookingUsed = document.createElement('div');
    cookingUsed.classList.add('cooking-used');

    
    
    const fishInfo = document.createElement('p');
    fishInfo.textContent = "설명" + fish.fishInfo;    

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(weight);
    card.appendChild(activityTime);    

     // materials 정보가 있을 경우 추가
     if (fish.materials) {
        const materials = document.createElement('p');
        materials.textContent = "Materials" + fish.materials;
        card.appendChild(materials);
    }
    
    // 요리 방식
    if (typeof fish.cookingUsed === 'object') {
        const cookingUsed = document.createElement('div');
        cookingUsed.classList.add('사용요리');

        if (fish.cookingUsed.머리) {
            const cookingTitle1 = document.createElement('p');
            cookingTitle1.textContent = "머리" + fish.cookingUsed.머리;
            cookingUsed.appendChild(cookingTitle1);
        }

        if (fish.cookingUsed.살점) {
            const cookingTitle2 = document.createElement('p');
            cookingTitle2.textContent = "살점" + fish.cookingUsed.살점;
            cookingUsed.appendChild(cookingTitle2);
        }

        card.appendChild(cookingUsed);
    } else {
        const cookingUsed = document.createElement('p');
        cookingUsed.textContent = "사용요리" + fish.cookingUsed;
        card.appendChild(cookingUsed);
    }

    card.appendChild(fishInfo);
    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(fish => {
    createCardImg(fish);
});
