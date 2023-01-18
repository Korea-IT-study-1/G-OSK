# G-OSK
```
팀프로젝트로 G-OSK 독서실키오스크를 선정했습니다.
```
# 팀원소개
+ 최준호
    + 화면설계 디자인
    + 백엔드 구현
    + DB 설계 및 연계
    + 입실/퇴실
    + 자리이동
    + 매출조회(관리자)
    + 좌석관리 (관리자)
    + 전체페이지정리
    
+ 문창배
    + 화면설계 디자인
    + 백엔드 구현
    + DB 설계 및 연계
    + 로그인
    + 마이페이지
    + 회원관리 (관리자)
    + 좌석관리 (관리자)
    + 사물함
    
+ 조창석
    + 화면설계 디자인
    + 백엔드 구현
    + DB구조 및 연계
    + 원데이, 정액권, 지정석
    + 상품 등록
    + 결제 기능
    + 상품관리 (관리자)
# 기술스택

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> <img src="https://img.shields.io/badge/IntelliJ IDEA-E34F26?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white">

<img src="https://img.shields.io/badge/Visual Studio Code-1572B6?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/Apache Tomcat-F7DF1E?style=for-the-badge&logo=Apache Tomcat&logoColor=white">

<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

# DATABASE ERD

<img width="1042" alt="KakaoTalk_20230116_164601825" src="https://user-images.githubusercontent.com/93910053/212624341-a8a9b57c-4696-4128-916f-8a2eabc27638.png">


# 구현한 주요기능

+ 관리자 페이지
    + 상품 등록/삭제/수정 
    + 회원 등록/삭제/수정
    + 좌석 유지보수/이동/강제퇴장
    + 상품 조회
    <br>
+ 원데이/정액권/지정석 페이지
    + 제품 종류
    + 제품 좌석선택
    + 결제
    <br>
+ 마이 페이지
    + 구매내역
    <br>
+ 입실/퇴실 페이지
    + 구매 제품에 따라 입실
    + 퇴실시 이용권종료/퇴실 선택
    <br>
+ 로그인 페이지
    + 회원가입 및 로그인

# 프로젝트 배포 및  사이트
+ [참조 사이트] https://gosk.co.kr/default/g_library/glibrary_sub2.php?sub=02
+ [프로젝트 사이트](http://43.200.236.80:8005/index)

프로젝트 사이트가 없고 참조 사이트를 통해 제작했습니다.

# 주요 구현 기능
> 메인페이지

![화면 캡처 2023-01-16 132947](https://user-images.githubusercontent.com/93910053/212598937-4d6ec786-bbf2-4b0c-9e14-a48ef516671d.png)
<br>

> 회원가입페이지

![화면 캡처 2023-01-16 133047](https://user-images.githubusercontent.com/93910053/212599017-61ae9605-370e-4f37-a18b-dde4e21d48c1.png)
```
회워가입은 전화번호/비밀번호만 적어주면 회원가입이 가능합니다.
```
<br>

> 내정보페이지

![화면 캡처 2023-01-16 140627](https://user-images.githubusercontent.com/93910053/212602772-70cd8726-2fdd-4f07-8c33-c3cf63c914a2.png)
```
내정보는 자신이 구매한 이용권을 모두 볼 수 있습니다.
```

![화면 캡처 2023-01-16 140911](https://user-images.githubusercontent.com/93910053/212602985-a61a1e71-0be3-413b-a52a-b48a59736026.png)
```
오늘/1개월 이내/3개월 이내 클릭시 날짜에 맞춰서 이용권을 모두 볼 수 있습니다.
```

> 자리이동페이지

![화면 캡처 2023-01-16 141428](https://user-images.githubusercontent.com/93910053/212603518-9f300a20-1738-4834-8b9c-1a8ccaa8b04a.png)
```
자리 이동 시 원하는 곳을 선택하고 버튼을 클릭하면 이동 가능합니다.
```

> 원데이/정액권/지정석

![화면 캡처 2023-01-16 134051](https://user-images.githubusercontent.com/93910053/212600125-125a8bd5-e8a6-467f-be80-25196729d8fe.png)
```
원데이/정액권을 클릭하면 회원가입한 아이디로 로그인하면 일반석에 선택가능한 좌석이 나타납니다.
지정석을 클릭하면 지정석에 선택가능한 좌석이 나타납니다.
```
<br>

![화면 캡처 2023-01-16 134136](https://user-images.githubusercontent.com/93910053/212600276-412a717d-7b32-4bfc-8532-b87be6b2b3ea.png)
```
좌석선택시 좌석번호가 색이 변하고 창에 뜨게 되어있습니다.
```

![화면 캡처 2023-01-16 133757](https://user-images.githubusercontent.com/93910053/212600404-7fb80b69-afef-47df-a355-cac266b427d7.png)
```
다음을 누르면 원데이권에 대한 상품 목록이 나타납니다.
```

![화면 캡처 2023-01-16 134641](https://user-images.githubusercontent.com/93910053/212600696-9995725f-330b-4141-bde1-aba6e5bc1989.png)
```
다음버튼을 누르면 결제창이 뜨게 되어있습니다.
```

![화면 캡처 2023-01-16 134802](https://user-images.githubusercontent.com/93910053/212600890-1a1579cb-1dbb-4735-8ad6-d78b0dfa4276.png)
```
결제하기를 누르면 결제기능인 이니시스결제창이 뜨면서 결제를 합니다.
```

>사물함페이지

![화면 캡처 2023-01-16 142117](https://user-images.githubusercontent.com/93910053/212604211-d6117e7f-8009-45c8-b436-b19c7303e786.png)
```
사물함도 원데이/정액권/지정석과 같은 방식으로 진행됩니다.
```

![화면 캡처 2023-01-16 142302](https://user-images.githubusercontent.com/93910053/212604485-6cb0a8a4-4119-41db-b457-52cec7e4f3d5.png)
```
다음버튼을 클릭시 사물함 판매상품이 나타납니다.
```

![화면 캡처 2023-01-16 142456](https://user-images.githubusercontent.com/93910053/212604589-8bfd1ca5-b8b5-48c9-86e5-bd454c022a28.png)
```
다음버튼을 클릭시 사물함 결제페이지가 나타납니다.

```


![화면 캡처 2023-01-16 134802](https://user-images.githubusercontent.com/93910053/212600890-1a1579cb-1dbb-4735-8ad6-d78b0dfa4276.png)
```
결제하기를 누르면 결제기능인 이니시스결제창이 뜨면서 결제를 합니다.
```

> 입실페이지

![화면 캡처 2023-01-16 142719](https://user-images.githubusercontent.com/93910053/212604847-d6b14fa4-d088-4661-9f45-38ecf929faa3.png)
```
입실시 만약 로그인 한사람의 자리가 있으면 입실을 못하게 합니다.
자리가 없다면 좌석선택을 하게합니다.
```

![화면 캡처 2023-01-16 143044](https://user-images.githubusercontent.com/93910053/212605734-624a01bc-c12d-45a4-8afd-4225f760ce89.png)
```
입실성공(가간권)
```

![화면 캡처 2023-01-16 143541](https://user-images.githubusercontent.com/93910053/212605800-82b77ff9-6b70-48b4-a43d-d6cd0d9654f0.png)
```
입실성공(시간권)
```

> 퇴실페이지

![화면 캡처 2023-01-16 152950](https://user-images.githubusercontent.com/93910053/212613297-e1902b65-266f-4a25-8f98-7f9d705c5d56.png)
```
지정석/원데이는 이용권종료만 가능합니다.
```

![화면 캡처 2023-01-16 153019](https://user-images.githubusercontent.com/93910053/212613403-6397ebc3-01b8-4561-be17-a0a2cb040b4a.png)
```
지정석/원데이 이용권종료시 화면입니다.
```

![화면 캡처 2023-01-16 153212](https://user-images.githubusercontent.com/93910053/212613474-e6f2ab6e-9274-4195-bc2e-6b500ae1fd71.png)
```
정액권은 남은 시간이 저장되기 때문에 일반 퇴실/이용권종료 기능이 있습니다.
```

![화면 캡처 2023-01-16 153230](https://user-images.githubusercontent.com/93910053/212613757-4bb923e4-3120-4739-a909-8322181c8bb8.png)
```
일반퇴실/이용권종료 이용권종료시 화면입니다.
```

>(상품관리)관리자 페이지

![화면 캡처 2023-01-16 154038](https://user-images.githubusercontent.com/93910053/212613959-ce9e89a0-b801-482d-867e-3b9700ea979b.png)4
```
상품관리 페이지는 원데이/지정석/정액권에 상품가격을 수정/삭제/등록이 가능합니다.
```

![화면 캡처 2023-01-16 154217](https://user-images.githubusercontent.com/93910053/212614544-bb23049d-c25e-410a-aa74-5f25d6ea3ea0.png)
```
수정시 원하는 가격/시간을 변경할 수 있습니다.
```

![화면 캡처 2023-01-16 154244](https://user-images.githubusercontent.com/93910053/212614699-832484d5-c953-44cd-8c88-262c07875ca6.png)
```
삭제버튼 클릭시 삭제가 됩니다.
```

![화면 캡처 2023-01-16 154318](https://user-images.githubusercontent.com/93910053/212614781-22202c1b-20c9-4480-b2f2-2c03577c55a7.png)

![화면 캡처 2023-01-16 154343](https://user-images.githubusercontent.com/93910053/212614827-f1eac128-c952-490b-a570-357f3d6e2e88.png)

![화면 캡처 2023-01-16 154405](https://user-images.githubusercontent.com/93910053/212614830-1147a35a-f4b2-48fc-9836-95682133937b.png)

```
등록시 지정석/원데이/정액권을 선택할수 있고 상품에 맞춰 시간 가격을 설정할 수 있습니다.
```

![화면 캡처 2023-01-16 154748](https://user-images.githubusercontent.com/93910053/212614990-4ff94b2e-2c8a-44a2-b8ab-070e6a58f584.png)

```
등록시 보이는 화면입니다.
```

>(회원관리)관리자 페이지

![화면 캡처 2023-01-16 154839](https://user-images.githubusercontent.com/93910053/212615382-7c7a90f1-0225-49be-9eed-99665d2774ba.png)

```
회원관리 페이지는 수정/삭제가 가능하고 내정보를 클릭하면 이용권구매내역을 확인할 수 있습니다.
```

![화면 캡처 2023-01-16 154859](https://user-images.githubusercontent.com/93910053/212615584-ec30a3a5-8010-4946-adf1-a71e715a505f.png)

```
내정보 클릭시 보이는 구매내역입니다.
```

![화면 캡처 2023-01-16 154915](https://user-images.githubusercontent.com/93910053/212615798-35933158-ccca-4b97-b1e7-02115d1aa4a8.png)

```
수정버튼 클릭시 전화번호/비밀번호를 변경할 수 있습니다.
```

![화면 캡처 2023-01-16 155452](https://user-images.githubusercontent.com/93910053/212616046-b978abe0-0268-489f-a0e2-ae8d4ff4fc3e.png)

```
010-0000-0000을 삭제버튼을 클릭했을때 전화번호가 안보이는것을 확일할 수 있는 화면입니다.
```

>(좌석관리)관리자 페이지

![화면 캡처 2023-01-16 155622](https://user-images.githubusercontent.com/93910053/212620439-d8d744ab-eb99-4e1c-bd7b-5f324b1db805.png)
```
좌석관리 페이지는 유지보수/자리이동/강제퇴장이 가능합니다.
```
![화면 캡처 2023-01-16 162304](https://user-images.githubusercontent.com/93910053/212620563-7db4caef-2db6-4584-9192-67dde3ed26e7.png)
![화면 캡처 2023-01-16 162327](https://user-images.githubusercontent.com/93910053/212620565-509c2fc1-66a9-4eb3-b289-19a1f695d048.png)

```
자리이동 클릭시 일반석/지정석/정액권을 선택해서
이동좌석은 현재 사용중인 좌석이 나타나고
변경좌석은 유지보수/사용중좌석을 제외한 좌석이 나타납니다.
```

![화면 캡처 2023-01-16 163242](https://user-images.githubusercontent.com/93910053/212622175-f902757b-01c5-4b5f-9053-11668ee6b0bc.png)
```
유지보수는 좌석 선택하고 유지보수를 클릭하면됩니다.
```

![화면 캡처 2023-01-16 163258](https://user-images.githubusercontent.com/93910053/212622298-e1bb962f-119e-4c55-aa84-f5d91dd02283.png)
```
유지보수 성공하면 변경된 것을 확인할 수 있는 화면입니다.
그리고 사용좌석을 선택후 강제퇴장을 누르면 강제퇴장이 됩니다.
```

![화면 캡처 2023-01-16 163652](https://user-images.githubusercontent.com/93910053/212622652-d3c0f73a-e00a-4878-8fb7-09530fa46242.png)
```
강제퇴장 성공하면 변경된 것을 확인할 수 있는 화면입니다.
```

>(매출조회)관리자 페이지

![화면 캡처 2023-01-16 164002](https://user-images.githubusercontent.com/93910053/212623218-66c993b2-ad7f-423b-83f8-1dacbb7eb45f.png)
```
매출조회는 전체매출조회/시간매출조회/상품목록조회 기능이 있습니다.
```

![화면 캡처 2023-01-16 164338](https://user-images.githubusercontent.com/93910053/212623827-edf575d7-260b-43bb-8d4c-fad897ce30f0.png)
```
시간매출조회시 나타나는 화면입니다.
```

![화면 캡처 2023-01-16 164356](https://user-images.githubusercontent.com/93910053/212623832-660d819f-2b56-4e50-911d-0eb3e65b4e75.png)
```
상품목록조회시 나타나는 화면입니다
```

# 팀프로젝트 장점

> 효율성 향상<br>

기능을 갖춘 제품을 완성한다는 공동의 목표를 향해 함께 노력하고 공통의 문제를 해결하는 것과 팀원이 마주치는 문제 또한 효율적인 방법을 찾기 위해 협력한다는 점이 있습니다. 아무래도 팀프로젝트를 한 번 해봤던 사람들이 모였기 때문에 더욱더 빨리 기능을 제작할 수 있었고 문제가 생길 때마다 대화를 통해 어떠한 방식이 더 좋은 방법인지에 대한 얘기도 나누면서 최대한 완성도 있는 프로젝트를 만드려고 노력하였습니다.

> 이해도 증가 및 책임감 증가<br>

각자 전 프로젝트에서 맡은 파트가 아닌 다른 파트를 함으로써 거기에 대한 기능을 만들어내면서 이해도가 증가하였고 팀원들이 테스터를 해주어서 코드에 대한 즉각적인 피드백 혹은 결과물에 대한 피드백, 또한 이슈로 인한 브레인스토밍이 조금 더 깊게 생각할 수 있도록 도움이 되었던 것 같습니다. 그리고 팀 프로젝트를 하면서 모두에게 피해를 끼치지 않기 위해  책임감을 가지고 일에 몰두할 수 있었습니다.

> 큰 프로그램 작성에 대한 부담이 훨씬 줄어듬<br>

아무래도 가장 큰 장점은 프로그램을 완성시키는 것에 있어 개인 프로젝트보다 압박감이 훨씬 줄어드는 것 같습니다. 전체 할당량을 여러 파트로 쪼개서 목표량을 세우고 거기서 또 일을 쪼개다보니 매주 주어진 할당량이 부담스럽게 느껴지지 않았습니다.

# 아쉬운점

> 커뮤니케이션 툴<br>

커뮤니케이션을 대화로만 하다보니까 기능을 제작하다가 막힌 경우가 조금 있어서 좋은 커뮤니케이션 툴이나 서로 현재 하고 있는 파트 무엇인지, 서로의 이슈가 무엇인지, TODO는 무엇인지, 무엇을 완료했는지 등을 한눈에 보기 좋게 하는 툴이 있었을 것인데 그런 툴을 탐색과 사용을 못한 것이 아쉬운점인 것 같습니다.

# 팀 프로젝트 소감

> 최준호

이번 프로젝트는 전에 학원에서 같이 수업 들었던 수강생들 중 프로젝트를 하나 더하고 싶은 사람들끼리 뭉쳐서 진행했습니다. 처음에는 프로젝트를 진행을 할 때 "한번 했으니깐 조금은 쉽겠지?"라는 생각을 가지고 있다가 프로젝트를 진행하는 과정에서 나의 생각이 틀렸다는 것을 알았습니다. 코딩은 배울 것이 많고 저가 아직은 많이 부족하다는 것을 깨우쳐주는 프로젝트였습니다. 그러면서 이번 프로젝트에서 많을 것을 배우고 가져갈 수 있었습니다.





