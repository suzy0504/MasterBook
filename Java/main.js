import FishList from "./FishData.js";

const gallery = document.getElementById('gallery');
const fishImgContainer = document.getElementById('fishImgContainer');
const modalContent = document.getElementById('modalContent');

const modal = document.querySelector(".modal");
const span = document.querySelector(".close");

fishImgContainer.addEventListener('click', () => {
    modalDisplay("block");
});

span.addEventListener('click', () => {
    modalDisplay("none");
});

modal.addEventListener('click', () => {
    modalDisplay("none");
});

function modalDisplay(text) {
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
    fishcard.addEventListener('click', () => {
        displayFishInfo(fish);
    });

    fishImgContainer.appendChild(fishcard);
}

// 도감 상세 항목 생성 함수
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
    card.appendChild(fishInfo);
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
    gallery.appendChild(card);
}

// 도감 항목 추가
FishList.forEach(fish => {
    createCardImg(fish);
});

function displayFishInfo(fish) {
    modal.style.display = "block";
    modalContent.innerHTML = ""; // 모달 내용 초기화

    const fishInfo = document.createElement('div');
    fishInfo.innerHTML = `
        <img src="${fish.image}" alt="${fish.name}" class="modal-image">
        <h3>${fish.name}</h3>
        <p class="modal-fishInfo">설명: ${fish.fishInfo}</p>

        <div class="modalRank">
        <p1>랭크</p1>
        <p2>${fish.rank}</p2>
        </div>

        <div class="modal-fishWeight">
        <p1>살점 무게</P1>
        <p2>${fish.weight}</p2>
        </div>

        <div class="modal-fishActivityTime">
        <p1>활동 시간</p1>
        <p2>${fish.activityTime}</p2>    
        </div>

        <div class="capture-method-container">
            <div class="capture-method-details">
             <p id = "p1">포획 방식</p>
                <div class="capture-method-details1">
                ${formatCaptureMethod(fish.CaptureMethod)}</div> 
             </div>                       
        </div>

        <p>사용 요리:${formatCookingUsed(fish.cookingUsed)}</p>
        
    `;
    // 포획 방식을 별 등급으로 분류하여 나타내는 함수
    function formatCaptureMethod(captureMethod) {
        let formattedCaptureMethod = '';
        // ★★ 등급
        if (captureMethod["★★"]) {
            formattedCaptureMethod += `<div class="capture-method-grade1"><p1>★★</p1><p2>${captureMethod["★★"]}</p2></div>`;
        }
        // ★★★ 등급
        if (captureMethod["★★★"]) {
            formattedCaptureMethod += `<div class="capture-method-grade2"><p1>★★★</p1><p2>${captureMethod["★★★"]}</p2></div>`;
        }

        return formattedCaptureMethod;
    }
    modalContent.appendChild(fishInfo);
}
function formatCaptureMethod(captureMethod) {
    if (typeof captureMethod === 'object') {
        return Object.keys(captureMethod).map(key => `${key}: ${captureMethod[key]}`).join(', ');
    } else {
        return captureMethod;
    }
}
function formatCookingUsed(cookingUsed) {
    if (typeof cookingUsed === 'object') {
        return Object.keys(cookingUsed).map(key => `<p>${key}: ${cookingUsed[key]}</p>`).join('');
    } else {
        return `<p>${cookingUsed}</p>`;
    }
}