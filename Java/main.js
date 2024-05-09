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
    rank.textContent = "Rank" + fish.rank;

    const weight = document.createElement('p');
    weight.textContent = "Weight" + fish.weight;

    const activityTime = document.createElement('p');
    activityTime.textContent = "Activity Time" + fish.activityTime;

    const cookingUsed = document.createElement('p');
    cookingUsed.textContent = "Cooking Used" + fish.cookingUsed;
    
    const fishInfo = document.createElement('p');
    fishInfo.textContent = "Fish Info" + fish.fishInfo;    

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(weight);
    card.appendChild(activityTime);
    card.appendChild(cookingUsed);

     // materials 정보가 있을 경우 추가
     if (fish.materials) {
        const materials = document.createElement('p');
        materials.textContent = "Materials" + fish.materials;
        card.appendChild(materials);
    }
    
    card.appendChild(fishInfo);
    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(fish => {
    createCardImg(fish);
});
