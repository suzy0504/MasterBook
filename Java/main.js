import FishList from "./FishData.js";

const gallery = document.getElementById('gallery');
const fishImgContainer = document.getElementById('fishImgContainer');


const modal = document.querySelector(".modal");
const modal_img = document.querySelector(".modal_content");
const span = document.querySelector(".close");

fishImgContainer.addEventListener('click', ()=>{
  modalDisplay("block");
  modal_img.src = img.src;
});
span.addEventListener('click', ()=>{
  modalDisplay("none");
});
modal.addEventListener('click', ()=>{
  modalDisplay("none");
});
function modalDisplay(text){
  modal.style.display = text;
}

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

    // 포획 방식
    if (typeof fish.CaptureMethod === 'object') {
        const CaptureMethodDiv = document.createElement('div');
        CaptureMethodDiv.classList.add('capture-method');
    
        if (fish.CaptureMethod["★★"]) {
            const Capture1 = document.createElement('p');
            Capture1.textContent = "★★ " + fish.CaptureMethod["★★"];
            CaptureMethodDiv.appendChild(Capture1);
        }
    
        if (fish.CaptureMethod["★★★"]) {
            const Capture2 = document.createElement('p');
            Capture2.textContent = "★★★ " + fish.CaptureMethod["★★★"];
            CaptureMethodDiv.appendChild(Capture2);
        }
    
        card.appendChild(CaptureMethodDiv);
    } else {
        const CaptureMethod = document.createElement('p');
        CaptureMethod.textContent = "포획 방식: " + fish.CaptureMethod;
        card.appendChild(CaptureMethod);
    }

     // materials 정보가 있을 경우 추가
     if (fish.materials) {
        const materials = document.createElement('p');
        materials.textContent = "Materials" + fish.materials;
        card.appendChild(materials);
    }
    
    // 요리 방식 - 머리, 살점, 붉은살, 중뱃살, 대뱃살
if (typeof fish.cookingUsed === 'object') {
    const cookingUsedDiv = document.createElement('div');
    cookingUsedDiv.classList.add('cooking-used');

    // 머리 요리
    if (fish.cookingUsed.머리) {
        const cookingHead = document.createElement('p');
        cookingHead.textContent = "머리: " + fish.cookingUsed.머리;
        cookingUsedDiv.appendChild(cookingHead);
    }

    // 살점 요리
    if (fish.cookingUsed.살점) {
        const cookingFlesh = document.createElement('p');
        cookingFlesh.textContent = "살점: " + fish.cookingUsed.살점;
        cookingUsedDiv.appendChild(cookingFlesh);
    }

    // 붉은살 요리
    if (fish.cookingUsed.붉은살) {
        const cookingRedFlesh = document.createElement('p');
        cookingRedFlesh.textContent = "붉은살: " + fish.cookingUsed.붉은살;
        cookingUsedDiv.appendChild(cookingRedFlesh);
    }

    // 중뱃살 요리
    if (fish.cookingUsed.중뱃살) {
        const cookingMidFlesh = document.createElement('p');
        cookingMidFlesh.textContent = "중뱃살: " + fish.cookingUsed.중뱃살;
        cookingUsedDiv.appendChild(cookingMidFlesh);
    }

    // 대뱃살 요리
    if (fish.cookingUsed.대뱃살) {
        const cookingLargeFlesh = document.createElement('p');
        cookingLargeFlesh.textContent = "대뱃살: " + fish.cookingUsed.대뱃살;
        cookingUsedDiv.appendChild(cookingLargeFlesh);
    }

    card.appendChild(cookingUsedDiv);
} else {
    const cookingUsed = document.createElement('p');
    cookingUsed.textContent = "사용요리: " + fish.cookingUsed;
    card.appendChild(cookingUsed);
}


    card.appendChild(fishInfo);
    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(fish => {
    createCardImg(fish);
});

