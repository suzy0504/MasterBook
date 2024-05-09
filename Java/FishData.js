// 도감 데이터
const FishList = [
    // 블루홀 초입
    {
        name: '흰동가리',        
        image: 'img/fishImg/흰동가리.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '흰동가리 초밥\n열대어 마늘구이',
        fishInfo: '붉은 몸에 흰 세로줄이 있는 15cm 정도의 물고기. 홍해와 태평양, 동남아시아, 인도양의 따듯한 해역에 서식한다. 말미잘 속에 숨어, 기생충을 청소해준다.'
    },
    {
        name: '콤버',
        image: 'img/fishImg/콤버.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '콤버 초밥\n콤버 샌드위치',  
        fishInfo: '큰 머리와 돌출된 턱, 오렌지색의 긴 가로줄과 여러 개의 세로 줄무늬가 특징인 25cm 정도의 물고기. 암초나 대륙붕 등에 넓게 서식한다.'      
    },
    {
        name: '지중해카디널피쉬',
        image: 'img/fishImg/지중해카디널피쉬.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '지중해카디널피쉬 초밥',       
        fishInfo: '큰 머리와, 매우 큰 눈, 계란형 몸을 가진 5~20cm 정도의 루비빛 물고기. 암초나 동굴 속에 숨어살며 작은 물고기나 플랑크톤 등을 먹는다.'
    },
    {
        name: '금강바리',
        image: 'img/fishImg/금강바리.png',
        rank: '1',
        weight: '0.3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '금강바리 초밥',    
        fishInfo: '몸 측면의 짙은 분홍색 사각 반점이 특징인 20cm 정도의 물고기. 산호초 주변 수심 10~180m에서 서식하며 플랑크톤을 먹는다.'   
    },
    {
        name: '안개나비고기',
        image: 'img/fishImg/안개나비고기.png',
        weight: '0.4',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '안개나비고기 초밥\n열대어 마늘구이',     
        fishInfo: '튀어나온 주둥이와 노란 머리와 등지느러미로 인해 보이는 하얀 삼각형이 특징인 최대 18cm 정도의 물고기. 암초 경사면에 주로 서식한다.'  
    },
    {
        name: '옐로우탱',
        image: 'img/fishImg/옐로우탱.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '옐로우탱 초밥',     
        fishInfo: '매우 선명한 노란색의 크기 20cm 정도의 물고기로 열대지역 얕은 산호초 지대에 주로 서식한다. 조류나 해양식물을 먹는다.'  
    },
    {
        name: '사르파살파',
        image: 'img/fishImg/사르파살파.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '사르파살파 초밥',     
        fishInfo: '회청색 몸에 금색의 가로 줄무늬가 있는 15~40cm 정도의 물고기. 수심 70m 이내에 서식하며, 해조류나 식물성 플랑크톤, 무척추생물 등을 먹는다.'  
    },
    {
        name: '원반제비활치',
        image: 'img/fishImg/원반제비활치.png',
        rank: '1',
        weight: '0.3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '원반제비활치 튀김\n활치 오야코동',     
        fishInfo: '몸이 매우 얇고 활처럼 휜 등과 배 지느러미, 부채꼴의 꼬리를 가진 60cm 정도의 물고기. 수심 5~30m의 암초나 산호초 주변에서 서식한다.'  
    },
    {
        name: '블루탱',
        image: 'img/fishImg/블루탱.png',
        weight: '0.5',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '블루탱 초밥\n열대어 마늘구이',     
        fishInfo: '감청색 몸체에 노란 꼬리를 가진 약간 평평한 30cm 정도의 물고기. 인도양과 태평양 전역의 암초와 산호초 지대에서 볼 수 있다. 플랑크톤과 해조류를 먹는다.'  
    },
    {
        name: '무지개놀래기',
        image: 'img/fishImg/무지개놀래기.png',
        rank: '1',
        weight: '0.6',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '무지개놀래기 초밥\놀래기 커리',     
        fishInfo: '청갈색 몸에 밝은 오렌지색의 가로선이 있는 18cm 정도의 물고기. 해초나 바위근처에 서식하며 갑각류나 연체동물, 극피동물을 먹는다.'  
    },
    {
        name: '배주름쥐치',
        image: 'img/fishImg/배주름쥐치.png',
        rank: '1',
        weight: '0.7',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '배주름쥐치 초밥',     
        fishInfo: '화려한 모자이크 무늬로 피카소피쉬라 불리는 30cm 정도의 물고기. 산호초 지대의 바위구멍이나 산호 틈, 모래 등지에 숨어 있다가 지나가는 동물을 습격해 먹는다.'  
    },
    {
        name: '빨판매가리',
        image: 'img/fishImg/빨판매가리.png',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '빨판매가리 초밥\n빨판매가리 감태국',     
        fishInfo: '은색 몸에 옆구리에 1~5개의 흑점을 지닌 최고 60cm 정도의 육식 물고기. 인도 태평양 지역의 암초나 산호초 지대에 널리 서식한다.'  
    },
    {
        name: '황등어',
        image: 'img/fishImg/황등어.png',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '황등어 초밥\n황등어 간장조림',     
        fishInfo: '회청색 몸에 상부 1/3이 노란색인 약 40cm 정도의 방추형 물고기. 따듯한 바다의 수심 50m 이내 산호초 주변에 서식하며 동물성 플랑크톤을 먹는다.'  
    },
    {
        name: '오네이트놀래기',
        image: 'img/fishImg/오네이트놀래기.png',
        rank: '1',
        weight: '0.5',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '오네이트놀래기 초밥\n놀래기 커리',     
        fishInfo: '녹갈색 몸에 청색 세로줄을 가지는 20cm 정도의 물고기. 동부 대서양과 지중해 50m 이내의 바위 해안에 서식하며 작은 연체동물과 갑각류를 먹는다.'  
    },
    {
        name: '깃털제비활치',
        image: 'img/fishImg/깃털제비활치.png',
        rank: '1',
        weight: '0.8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '깃털제비활치 초밥\n활치 오야코동',     
        fishInfo: '얇은 몸에 세로 줄무늬가 있는 60cm 정도의 은색 물고기. 호주나 인도 연안의 해초, 나무 파편, 인공 암초 등지에 주로 서식한다.'  
    },
    {
        name: '지중해비늘돔',
        image: 'img/fishImg/지중해비늘돔.png',
        rank: '1',
        weight: '2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '지중해비늘돔 초밥\n비늘돔 흑식초 조림',     
        fishInfo: '붉은 몸에 노란색과 회색의 무늬를 가지는 30cm 정도의 물고기. 지중해와 대서양 동부 바위 해안의 수심 50m 부근에 서식하며 해조류나 무척추동물을 먹는다.'  
    },
    {
        name: '붉은이빨쥐치',
        image: 'img/fishImg/붉은이빨쥐치.png',
        rank: '1',
        weight: '1',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '붉은이빨쥐치 초밥\n붉은이빨쥐치 소금구이',     
        fishInfo: '짙은 보라색 몸에 청녹색 머리, 하늘색 꼬리와 두 개의 날카롭고 붉은 이빨을 가진 30cm 정도의 물고기. 흐름이 강한 산호초나 바위틈에 숨어 서식한다.'  
    },
    {
        name: '블랙스내퍼',
        image: 'img/fishImg/블랙스내퍼.png',
        rank: '1',
        weight: '1',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '블랙스내퍼 초밥',     
        fishInfo: '온 몸이 검은 35cm 정도의 물고기로, 수심 90m 정도의 산호초 주변 급경사 지역에 무리지어 서식하며 갑각류나 작은 물고기를 잡아먹는다.'  
    },
    {
        name: '버팔로피쉬',
        image: 'img/fishImg/버팔로피쉬.png',
        weight: '1.8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '버팔로피쉬 초밥\n버팔로피쉬 커리',     
        fishInfo: '머리에 거대한 혹과, 앵무새 부리같은 입을 가진 산호초 지역에서 가장 큰 물고기. 최고 150cm, 무게 75kg 이상까지 자라며, 해조류나 살아있는 산호를 깨트려 먹는다.'  
    },
    {
        name: '배럴해파리',
        image: 'img/fishImg/배럴해파리.png',
        rank: '2',
        weight: '1',
        activityTime: '낮',
        CaptureMethod: {            
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '배럴해파리 군함 초밥\n해파리 무침',   
        materials: '배럴해파리의 촉수',  
        fishInfo: '원통형 몸에 거대한 갓과 8개의 주름진 촉수를 가지고 있는 40~150cm 정도의 해파리. 북동부대서양과 아드리아해, 지중해, 흑해 등지에 서식한다.'  
    },
    {
        name: '달걀프라이해파리',
        image: 'img/fishImg/달걀프라이해파리.png',
        weight: '1',
        activityTime: '낮',
        CaptureMethod: {            
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '달걀프라이해파리 군함 초밥\n해파리 무침',          
        fishInfo: '돔 형태의 중앙을 링과 주름으로 둘러싼 최대 40cm 정도의 해파리. 여러 번 갈라지는 수많은 촉수와 봉이 달린 촉수를 가지고 있으며 지중해 연안에 서식한다.'  
    },
    {
        name: '백기흉상어',
        image: 'img/fishImg/백기흉상어.png',
        rank: '4',
        weight: '2.5',
        activityTime: '항상',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: {
            살점: '백기흉상어 초밥',
            머리: '백기흉상어 머리 통구이'
        },
        materials: '백기흉상어의 이빨',        
        fishInfo: '날씬한 몸매에 등지느러미와 꼬리지느러미 끝이 하얀 평균 1.6m 정도의 비교적 작은 상어. 인도양과 태평양의 수심 8~40m 사이의 산호초 주변에 널리 서식한다.'  
    },
    {
        name: '꺼끌복',
        image: 'img/fishImg/꺼끌복.png',
        rank: '3',
        weight: '3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '복어 특초밥\n복어 니코고리\n복어 완자탕',   
        materials: '꺼끌복의 독주머니',  
        fishInfo: '가시로 온몸이 뒤덮인 검은 반점이 여럿 있는 긴 흰색 몸통을 가진 120cm 정도의 물고기. 적이 나타나면 몸을 부풀리는 특징이 있으며 잡식성이다.'  
    },
    {
        name: '쏠배감펭',
        image: 'img/fishImg/쏠배감펭.png',
        rank: '2',
        weight: '1.5',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '쏠배감펭 초밥\n쏠배감펭 튀김',   
        materials: '쏠배감펭의 가시',  
        fishInfo: '사자 갈기 같은 수많은 독가시와 얼룩말 같은 무늬를 가진 47cm 정도의 물고기. 해초, 산호 및 인공암초를 포함한 다양한 곳에 서식하며 작은 물고기를 먹는다.'  
    },
    {
        name: '타이탄트리거피쉬',
        image: 'img/fishImg/타이탄트리거피쉬.png',
        rank: '2',
        weight: '3.8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '타이탄트리거피쉬 초밥\n화려한 특초밥 세트',           
        fishInfo: '노란색 몸에 눈 주위에 어두운 반점과 날카로운 이빨을 가진 75cm 정도의 거대한 쥐치. 산호초나 암초 경사면 등에 서식하며 산호나 성게 등을 먹는다. 공격성이 강하다.'  
    },
    {
        name: '참다랑어',
        image: 'img/fishImg/참다랑어.png',
        rank: '7',
        weight: '8',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: {
            붉은살 : '참다랑어 붉은살 초밥\n마구로동',
            중뱃살 : '참다랑어 중뱃살 초밥\n핫페퍼튜나',
            대뱃살 : '참다랑어 대뱃살 초밥\n히알로네마 참치회'
        },         
        fishInfo: '고등어과에 속하는 어류로 주로 참치회로 소비되는 종이다. 유영 속도가 70~90km 정도로 매우 빠르며 헤엄치지 않으면 질식사한다.'  
    },
    {
        name: '황다랑어',
        image: 'img/fishImg/황다랑어.png',
        rank: '7',
        weight: '6',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: {
            붉은살 : '황다랑어 붉은살 초밥\n하와이안 포케',
            중뱃살 : '황다랑어 중뱃살 초밥\n황다랑어 스테이크',
            대뱃살 : '황다랑어 대뱃살 초밥\n히알로네마 참치회'
        },         
        fishInfo: '지느러미가 노란색인 것이 특징이며 일 년 내내 번식하며 성체가 되는 데에 약 2년 정도 걸린다.'  
    },
    {
        name: '라마엔젤피쉬',
        image: 'img/fishImg/라마엔젤피쉬.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '라마엔젤피쉬 초밥',           
        fishInfo: '몸 전체에 불꽃처럼 보이는 밝은 빨간색과 주황색이 있으며 몸과 끝 부분은 푸르스름하다.'  
    },
    {
        name: '혹돔',
        image: 'img/fishImg/혹돔.png',
        rank: '5',
        weight: '4.3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '혹돔 초밥\n트러플 혹돔 조림',           
        fishInfo: '머리에 큰 혹이 난 것처럼 툭 튀어나와 있으며 턱 역시 크게 돌출되어 있다. 이빨 역시 날카로우며 주로 갑각류를 먹는 육식성 어류이다.'  
    },
    {
        name: '혹황제엔젤피쉬돔',
        image: 'img/fishImg/황제엔젤피쉬.png',
        rank: '1',
        weight: '0.4',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '황제엔젤피쉬 초밥',           
        fishInfo: '어릴 때는 흰색과 남색이지만 성체가 되면서 발색이 완전히 달라지는 어종이다. 다른 물고기와 어울리기 보다 단독 행동을 주로 한다.'  
    },
    {
        name: '노랑가오리',
        image: 'img/fishImg/노랑가오리.png',
        rank: '6',
        weight: '3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '노랑가오리 초밥\n가오리포',           
        fishInfo: '서태평양 지역의 수심 10m 남짓한 얕은 바다나 강 하구에 주로 서식한다. 꼬리의 톱니 모양 가시에는 맹독이 있어 인간이 찔리면 기절하고 심지어 죽을 수도 있다'  
    },
    {
        name: '마블전기가오리',
        image: 'img/fishImg/마블전기가오리.png',
        rank: '6',
        weight: '3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '마블전기가오리 초밥\n가오리포',       
        materials: '전기가오리의 발전판',      
        fishInfo: '동부대서양에서 남아프리카까지 분포하는 전기 가오리이다. 야행성이며 주로 바닥에 숨어 있다가 70~80V의 전기를 내뿜어 먹이를 사냥한다.'  
    },
    {
        name: '흰다리새우',
        image: 'img/fishImg/흰다리새우.png',
        rank: '5',
        weight: '0.1',
        activityTime: '낮',
        CaptureMethod: {           
            "★★★": '잠자리채 포획'
        },
        cookingUsed: '흰다리자숙새우 초밥\n멘보샤\n새우튀김 특초밥\n흰다리자숙새우 튀김\n가지 새우완자 튀김',                 
        fishInfo: '보리새우과의 새우로 최대 20cm 정도까지 자란다. 양식으로 많이 키우며 맛에 비해서 저렴하여 인기가 높다.'  
    },
    {
        name: '쏠종개',
        image: 'img/fishImg/쏠종개.png',
        rank: '5',
        weight: '0.3',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '쏠종개 초밥\n쏠종개 파이',           
        fishInfo: '약 20~30cm 정도 길이의 물고기로 입가에 4쌍의 수염이 있다. 떼로 지어 몰려다니는 습성이 있다.'  
    },
    {
        name: '보라성게',
        image: 'img/fishImg/보라성게.png',
        rank: '5',
        weight: '1',
        activityTime: '낮',
        CaptureMethod: {            
            "★★★": '채집'
        },
        cookingUsed: '보라성게 초밥\n보라성게 덮밥\n트러플 돛새치 타르타르',           
        fishInfo: '날카로운 가시가 돋힌 보라색 성게이다. 식용으로 사용된다.'  
    },
    {
        name: '청상아리',
        image: 'img/fishImg/청상아리.png',
        rank: '8',
        weight: '9',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '청상아리 초밥',           
        fishInfo: '눈이 크고 검으며 주둥이 끝이 뾰족한 특징을 가진 대형 상어류. 온대와 열대해역에 걸쳐 전 세계에 널리 분포되어 있고, 표면~150m 깊이에 서식한다.'  
    },
    {
        name: '청새치',
        image: 'img/fishImg/청새치.png',
        rank: '8',
        weight: '7.5',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '청새치 초밥\n청새치 된장구이',           
        fishInfo: '시속 100km 속도로 헤엄칠 수 있으며 매우 난폭한 성질을 가지고 있다. 창처럼 생긴 윗턱을 휘둘러 먹이를 때리거나 베어 섭취한다.'  
    },
    {
        name: '환도상어',
        image: 'img/fishImg/환도상어.png',
        rank: '9',
        weight: '9.5',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '환도상어 초밥',  
        materials: '환도상어의 꼬리',           
        fishInfo: '몸체의 길이보다 긴 꼬리 지느러미가 특징인 상어. 긴 꼬리를 채찍처럼 이용해 작은 물고기 떼를 기절시켜서 잡아먹는다.'  
    },
    {
        name: '방사쏠베감펭',
        image: 'img/fishImg/방사쏠베감펭.png',
        rank: '4',
        weight: '1.7',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '방사쏠베감펭 초밥\n달빛 블래더랙 롤',              
        fishInfo: '게나 새우를 주로 사냥하는 야행성 어종이다. 등지느러미에는 12~13개의 긴 독가시가 있으며, 쏠베감펭과 달리 가시에 줄무늬가 없다.'  
    },
    {
        name: '롱스파인 다람쥐고기',
        image: 'img/fishImg/롱스파인 다람쥐고기.png',
        rank: '5',
        weight: '0.4',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '롱스파인다람쥐고기 초밥\n달빛 블래더랙 롤',              
        fishInfo: '인도-태평양 및 열대 지역 부근에서 무리를 지어 활동하는 야행성 어종이다. 주로 연안의 암초 해역에서 서식하며 주로 갑각류를 먹이로 섭취한다.'  
    },
    {
        name: '가시복',
        image: 'img/fishImg/가시복.png',
        rank: '5',
        weight: '3.5',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '가시복 껍질 초무침\n복어 완자탕',              
        fishInfo: '전세계 열대 및 아열대 바다의 산호초에 서식하며 50cm까지도 성장한다. 가시에서는 강력한 독성 물질을 분비하여 자신을 보호한다.'  
    },
    {
        name: '상자해파리',
        image: 'img/fishImg/상자해파리.png',
        rank: '5',
        weight: '5',
        activityTime: '밤',
        CaptureMethod: {           
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '상자해파리 군함 초밥',   
        materials: '상자해파리의 촉수',  
        fishInfo: '해파리와는 별개의 종으로 분류되는 생물이다. 바다의 말벌 이라고 불리울 정도로 강력한 독을 갖고 있으며 눈이 있어 먹이를 쫓아가기도 한다.'  
    },
    {
        name: '곰치',
        image: 'img/fishImg/곰치.png',
        rank: '5',
        weight: '9',
        activityTime: '항상',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '곰치 초밥\n곰치 커리',   
        materials: '곰치의 턱뼈',  
        fishInfo: '비늘 대신 두꺼운 가죽과 점액질로 뒤덮인 1.5m 정도의 바다 뱀장어. 열대 및 온대 바다의 암초나 바위틈에 숨어 살며, 독특한 구조의 턱으로 깨문 적은 놓치지 않는다.'  
    },
    {
        name: '흑기흉상어',
        image: 'img/fishImg/흑기흉상어.png',
        rank: '6',
        weight: '2.5',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '흑기흉상어 초밥\n상어 가라아게',         
        fishInfo: '흑기흉상어는 지느러미와 주둥이에 뚜렷한 검은 얼룩이 있는 것이 특징이다. 낮은 수심에서 서식하며 사냥할 경우 무리를 지어서 다니기도 한다.'  
    },
    {
        name: '무태상어',
        image: 'img/fishImg/무태상어.png',
        rank: '6',
        weight: '4',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '무태상어 초밥\n상어 가라아게',          
        fishInfo: '흑기흉상어는 지느러미와 주둥이에 뚜렷한 검은 얼룩이 있는 것이 특징이다. 낮은 수심에서 서식하며 사냥할 경우 무리를 지어서 다니기도 한다.'  
    },
    {
        name: '지브라상어',
        image: 'img/fishImg/지브라상어.png',
        rank: '8',
        weight: '10.5',
        activityTime: '밤',
        CaptureMethod: {
            "★★": '갈무리',
            "★★★": '드론 인양'
        },
        cookingUsed: '지브라상어 초밥',          
        fishInfo: '어릴 때는 얼룩말 같은 줄무늬를 가지지만 성체가 되면 점박이로 바뀌는 야행성 상어. 열대 인도 태평양 전역에서 발견되며 수심 60m 이내에 서식한다.'  
    },

    // 중간수역
    {
        name: '블루헤드타일피쉬',
        image: 'img/fishImg/블루헤드타일피쉬.png',
        rank: '1',
        weight: '0.2',
        activityTime: '낮',
        CaptureMethod: {
            "★★": '작살 포획',
            "★★★": '그물 포획\n수면 포획'
        },
        cookingUsed: '블루헤드타일피쉬 초밥',           
        fishInfo: '푸른색 머리에 녹색 몸, 노란 꼬리를 가진 보통 15cm 정도의 가늘고 긴 물고기. 산호초 지역의 경사면이나 산호 잔해 등지에 숨어 서식한다.'  
    },
];



export default FishList;