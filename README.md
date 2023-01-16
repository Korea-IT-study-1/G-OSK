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
자리이
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





