// 도감 데이터
const FishList = [
    {
        name: '흰동가리',
        image: 'https://i.namu.wiki/i/yZTbSA0YyWXw7Aa1VNSdxpKbI2mvn9-uh7US-ATsUskRwbLaqeudFKUqj4xKfP96-NojtomNybrw2O1wWf2aAQ.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '흰동가리 초밥\n열대어 마늘구이',
        fishInfo: '붉은 몸에 흰 세로줄이 있는 15cm 정도의 물고기. 홍해와 태평양, 동남아시아, 인도양의 따듯한 해역에 서식한다. 말미잘 속에 숨어, 기생충을 청소해준다.'
    },
    {
        name: '콤버',
        image: 'https://i.namu.wiki/i/ICNzuxA8oIndZ_PSESfSuotAiAZvzl5YPdUhFMJocNSFBHh_wVIOwqGOvxtAlVTDsKE_krL5VSPrAq5xzTaqSg.webp',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '콤버 초밥\n콤버 샌드위치',  
        fishInfo: '큰 머리와 돌출된 턱, 오렌지색의 긴 가로줄과 여러 개의 세로 줄무늬가 특징인 25cm 정도의 물고기. 암초나 대륙붕 등에 넓게 서식한다.'      
    },
    {
        name: '지중해카디널피쉬',
        image: 'https://i.namu.wiki/i/QmG5mgUzsw28-rJeDWV2lflhO_BCQTa94S6YxkB6aBn60_T74DNGvoS84RIFqD67ZVUV6Lz159dESVo5P2hTCg.webp',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        cookingUsed: '지중해카디널피쉬 초밥',       
        fishInfo: '큰 머리와, 매우 큰 눈, 계란형 몸을 가진 5~20cm 정도의 루비빛 물고기. 암초나 동굴 속에 숨어살며 작은 물고기나 플랑크톤 등을 먹는다.'
    },
    {
        name: '금강바리',
        image: 'https://i.namu.wiki/i/NdxtCq0_3bF9dVSd1yslnbpXv0hPHZudayFmS7C5FiEO6Xyr_CQn6Q-SoCEADPx4outjivjQ0jpD7z924d_4XQ.png',
        rank: '1',
        weight: '0.3',
        activityTime: '낮',
        cookingUsed: '금강바리 초밥',    
        fishInfo: '몸 측면의 짙은 분홍색 사각 반점이 특징인 20cm 정도의 물고기. 산호초 주변 수심 10~180m에서 서식하며 플랑크톤을 먹는다.'   
    },
    {
        name: '안개나비고기',
        image: 'https://i.namu.wiki/i/Bazqhhgna5vrThSslsUsbkEomwPt55tkQzfdM2yGsdPWMYhyedYahM1IJh7EFX4LM9HW6Kx6OdFIvrKO077DBA.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        cookingUsed: '안개나비고기 초밥\n열대어 마늘구이',     
        fishInfo: '튀어나온 주둥이와 노란 머리와 등지느러미로 인해 보이는 하얀 삼각형이 특징인 최대 18cm 정도의 물고기. 암초 경사면에 주로 서식한다.'  
    },
    {
        name: '옐로우탱',
        image: 'https://i.namu.wiki/i/XXdcRzHkgrVjkVIx4bip_BSMec9hM9KZelvzTSLN25NdOKUfxw7u7lNVzv__PjkmMvcpo9YqbdBbP9b8Yackgg.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        cookingUsed: '옐로우탱 초밥',     
        fishInfo: '매우 선명한 노란색의 크기 20cm 정도의 물고기로 열대지역 얕은 산호초 지대에 주로 서식한다. 조류나 해양식물을 먹는다.'  
    },
    {
        name: '사르파살파',
        image: 'https://i.namu.wiki/i/TVFBDZCjxreJsFWrmQpEqMUkQ1B7Gznep0whCFrt3aRoh6YvTDuKPz13J8I-lHgMlyePQme4OtNrcxmZA_FASg.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        cookingUsed: '사르파살파 초밥',     
        fishInfo: '회청색 몸에 금색의 가로 줄무늬가 있는 15~40cm 정도의 물고기. 수심 70m 이내에 서식하며, 해조류나 식물성 플랑크톤, 무척추생물 등을 먹는다.'  
    },
    {
        name: '원반제비활치',
        image: 'https://i.namu.wiki/i/xXEhyLbYCg4MNF8ldWTQl_gWDO0HLSoPOqDgDqlnT7coFA-GlJpTDDGLafxUZNFthf5U82njwdXVIL-g4O49dg.webp',
        rank: '1',
        weight: '0.3',
        activityTime: '낮',
        cookingUsed: '원반제비활치 튀김\n활치 오야코동',     
        fishInfo: '몸이 매우 얇고 활처럼 휜 등과 배 지느러미, 부채꼴의 꼬리를 가진 60cm 정도의 물고기. 수심 5~30m의 암초나 산호초 주변에서 서식한다.'  
    },
    {
        name: '블루탱',
        image: 'https://i.namu.wiki/i/nT3-1ZGCOSYFQAj0i_tOn_7u7_-Z8BW6oGKmyQ0XXPv-9kEe6R2gVaobhRSmZFmTJ4Gwen8VANqTNDcW5IRf7w.png',
        rank: '1',
        weight: '0.5',
        activityTime: '낮',
        cookingUsed: '블루탱 초밥\n열대어 마늘구이',     
        fishInfo: '감청색 몸체에 노란 꼬리를 가진 약간 평평한 30cm 정도의 물고기. 인도양과 태평양 전역의 암초와 산호초 지대에서 볼 수 있다. 플랑크톤과 해조류를 먹는다.'  
    },
    {
        name: '무지개놀래기',
        image: 'https://i.namu.wiki/i/rIvMHMSF6pH4RlWF-FArX-ISKYxc9YmgpXU2oBVyQ0JbGGW2kGN5YjHvFYriISR_RwmUrIAuGThCXsoiVfekyw.png',
        rank: '1',
        weight: '0.6',
        activityTime: '낮',
        cookingUsed: '무지개놀래기 초밥\놀래기 커리',     
        fishInfo: '청갈색 몸에 밝은 오렌지색의 가로선이 있는 18cm 정도의 물고기. 해초나 바위근처에 서식하며 갑각류나 연체동물, 극피동물을 먹는다.'  
    },
    {
        name: '배주름쥐치',
        image: 'https://i.namu.wiki/i/n16iGZLvDUrZcnZQHQPf4Lou0wUiscgoiPabxytxJvIaqhUo1TEkdYmSI1fjuRgMeciLejx4Ziub_H9CpizqBA.png',
        rank: '1',
        weight: '0.7',
        activityTime: '낮',
        cookingUsed: '배주름쥐치 초밥',     
        fishInfo: '화려한 모자이크 무늬로 피카소피쉬라 불리는 30cm 정도의 물고기. 산호초 지대의 바위구멍이나 산호 틈, 모래 등지에 숨어 있다가 지나가는 동물을 습격해 먹는다.'  
    },
    {
        name: '빨판매가리',
        image: 'https://i.namu.wiki/i/Hy-XrCFtsrEleJRNEsKKhX03JJoFbyGMfshj8d5SJQJtJF4DyNOciWOYF9HFKa1bhaHPbr-W0f7Op5HbfcQ1yg.png',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        cookingUsed: '빨판매가리 초밥\n빨판매가리 감태국',     
        fishInfo: '은색 몸에 옆구리에 1~5개의 흑점을 지닌 최고 60cm 정도의 육식 물고기. 인도 태평양 지역의 암초나 산호초 지대에 널리 서식한다.'  
    },
    {
        name: '황등어',
        image: 'https://i.namu.wiki/i/pHtFpS9eS29rImciYmQypK9tE2gyrwSNbwLPr8lY9pJC1FzrjcrsBxke4w70d7W4RxkDwq4ZFpo52AzEFyA3aQ.png',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        cookingUsed: '황등어 초밥\n황등어 간장조림',     
        fishInfo: '회청색 몸에 상부 1/3이 노란색인 약 40cm 정도의 방추형 물고기. 따듯한 바다의 수심 50m 이내 산호초 주변에 서식하며 동물성 플랑크톤을 먹는다.'  
    },
    {
        name: '오네이트놀래기',
        image: 'https://i.namu.wiki/i/doS2__CcnPDJKwy8TtDO5UdabrH772LkaUBDVcrer2JT-maW2XwDu4_LQA4TOzYiTeogHH-O4rlcv5BABZzGLA.png',
        rank: '1',
        weight: '0.5',
        activityTime: '낮',
        cookingUsed: '오네이트놀래기 초밥\n놀래기 커리',     
        fishInfo: '녹갈색 몸에 청색 세로줄을 가지는 20cm 정도의 물고기. 동부 대서양과 지중해 50m 이내의 바위 해안에 서식하며 작은 연체동물과 갑각류를 먹는다.'  
    },
    {
        name: '깃털제비활치',
        image: 'https://i.namu.wiki/i/EHe5N1LUhqB9KwTGGnYYtKU-fKFvq-Ci7xgxy_qpq6k7tsT5mu4QhNO1MPNlIFcYtEljK9Azco5g1GEo7m16og.webp',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        cookingUsed: '깃털제비활치 초밥\n활치 오야코동',     
        fishInfo: '얇은 몸에 세로 줄무늬가 있는 60cm 정도의 은색 물고기. 호주나 인도 연안의 해초, 나무 파편, 인공 암초 등지에 주로 서식한다.'  
    },
    {
        name: '지중해비늘돔',
        image: 'https://i.namu.wiki/i/KeeabKWpMFjhghI82x1HXNHt8Pb0a0N3cfLpmn1LkqF5qhJET5d1-445XgImiI6moCJLwjURRfEPTnt82XvSsw.png',
        rank: '1',
        weight: '2',
        activityTime: '낮',
        cookingUsed: '지중해비늘돔 초밥\n비늘돔 흑식초 조림',     
        fishInfo: '붉은 몸에 노란색과 회색의 무늬를 가지는 30cm 정도의 물고기. 지중해와 대서양 동부 바위 해안의 수심 50m 부근에 서식하며 해조류나 무척추동물을 먹는다.'  
    },
    {
        name: '붉은이빨쥐치',
        image: 'https://i.namu.wiki/i/GJiybPGqrbbDsSxml4As1c0ZkAqKtNRvwxxJL47c1O_EM3ftZa-vE0oMtOo3SmOLyT8hYmYbX7HX3eO2x5ZqYw.png',
        rank: '1',
        weight: '1',
        activityTime: '낮',
        cookingUsed: '붉은이빨쥐치 초밥\n붉은이빨쥐치 소금구이',     
        fishInfo: '짙은 보라색 몸에 청녹색 머리, 하늘색 꼬리와 두 개의 날카롭고 붉은 이빨을 가진 30cm 정도의 물고기. 흐름이 강한 산호초나 바위틈에 숨어 서식한다.'  
    },
    {
        name: '블랙스내퍼',
        image: 'https://i.namu.wiki/i/tcdV9eMybEhMPyLMy-iHsG7MOc269mbEs5v23Vj_GvlXOQRbfp9199SCs0MELYZBpY2Ma78UUHJr8gru6ODvCA.webp',
        rank: '1',
        weight: '1',
        activityTime: '낮',
        cookingUsed: '블랙스내퍼 초밥',     
        fishInfo: '온 몸이 검은 35cm 정도의 물고기로, 수심 90m 정도의 산호초 주변 급경사 지역에 무리지어 서식하며 갑각류나 작은 물고기를 잡아먹는다.'  
    },
    {
        name: '버팔로피쉬',
        image: 'https://i.namu.wiki/i/UY0EmqZ6uexhosSoymBGXm8PTYMGaXJTHdiLr4Ql1fMnnzJ2IjQEZcS-lm1yDuj02rz0o491CKnpQBqvhPRN6w.webp',
        rank: '3',
        weight: '1.8',
        activityTime: '낮',
        cookingUsed: '버팔로피쉬 초밥\n버팔로피쉬 커리',     
        fishInfo: '머리에 거대한 혹과, 앵무새 부리같은 입을 가진 산호초 지역에서 가장 큰 물고기. 최고 150cm, 무게 75kg 이상까지 자라며, 해조류나 살아있는 산호를 깨트려 먹는다.'  
    },
    {
        name: '배럴해파리',
        image: 'https://i.namu.wiki/i/3Xl4nZP1T91mrHXsOBjoEV6LFQX2zqbonXWSOXb890vQYRg9SAQXaH8tHIgXEPF8COhaQqXEa1GSIvI1bLCpDQ.png',
        rank: '2',
        weight: '1',
        activityTime: '낮',
        cookingUsed: '배럴해파리 군함 초밥\n해파리 무침',   
        materials: '배럴해파리의 촉수',  
        fishInfo: '원통형 몸에 거대한 갓과 8개의 주름진 촉수를 가지고 있는 40~150cm 정도의 해파리. 북동부대서양과 아드리아해, 지중해, 흑해 등지에 서식한다.'  
    },
    {
        name: '달걀프라이해파리',
        image: 'https://i.namu.wiki/i/u-j9B6l6tdHsX_yUBU3RTIZs22iu_1nIyYAJzTgBxAPKIENSBUQPn5EeLqEg-JDuIt2NTjd-5M6-MsiBxxRWDg.webp',
        rank: '2',
        weight: '1',
        activityTime: '낮',
        cookingUsed: '달걀프라이해파리 군함 초밥\n해파리 무침',          
        fishInfo: '돔 형태의 중앙을 링과 주름으로 둘러싼 최대 40cm 정도의 해파리. 여러 번 갈라지는 수많은 촉수와 봉이 달린 촉수를 가지고 있으며 지중해 연안에 서식한다.'  
    },
];

export default FishList;