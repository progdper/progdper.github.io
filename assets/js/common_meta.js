// 스트릭트 모드 - js를 파싱하고 실행
"use strict";



// [ 기본 ]

//브라우저 호환성
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'X-UA-Compatible');
link.content = "IE-edge";
document.getElementsByTagName('head')[0].appendChild(link);

//인코딩
var link = document.createElement('meta'); 
link.setAttribute('charset', 'UTF-8');
document.getElementsByTagName('head')[0].appendChild(link);

//미디어쿼리
var link = document.createElement('meta'); 
link.setAttribute('name', 'viewport');
link.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
document.getElementsByTagName('head')[0].appendChild(link);

// // 다른 입력 방법
// var meta = document.createElement('meta');
// meta.name = 'viewport';
// meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
// document.getElementsByTagName('head')[0].appendChild(meta);

// var meta = document.createElement('meta');
// meta.httpEquiv = "pragma";
// meta.content = "no-cache";
// document.getElementsByTagName('head')[0].appendChild(meta);



// [ 추가 - 홈페이지 관련 ]

//검색 엔진 검색 단어
var link = document.createElement('meta'); 
link.setAttribute('name', 'Keywords');
link.content = " 개발자, frontend, backend,  rezume, 프론트엔드, 백엔드, 자기소개서 ";
document.getElementsByTagName('head')[0].appendChild(link);

//검색 결과 표시 설명
var link = document.createElement('meta'); 
link.setAttribute('name', 'Description');
link.content = "웹 개발자 최재훈의 자기소개서 및 이력서";
document.getElementsByTagName('head')[0].appendChild(link);

//검색 로봇 제어 - index : 페이지 수집 대상, follow : 페이지를 포함해 링크가 걸린 곳을 수집 대상
var link = document.createElement('meta'); 
link.setAttribute('name', 'robots');
link.content = "index, follow";
document.getElementsByTagName('head')[0].appendChild(link);

//제작일
var link = document.createElement('meta'); 
link.setAttribute('name', 'Date');
link.content = "2023년 02월 15일";
document.getElementsByTagName('head')[0].appendChild(link);

//홈페이지 주제
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Subject');
link.content = "개인 홍보";
document.getElementsByTagName('head')[0].appendChild(link);

//홈페이지 제목
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Title');
link.content = "웹 개발자 최재훈";
document.getElementsByTagName('head')[0].appendChild(link);



// [ 추가 - 제작 관련 ]

//페이지 제작자명
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Author');
link.content = "기획, 디자인, html - 최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

//제작사
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'publisher');
link.content = "최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

//웹 책임자
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Other Agent');
link.content = "최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

//제작도구
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Generator');
link.content = "Visual Studio Code";
document.getElementsByTagName('head')[0].appendChild(link);

//메일주소
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Reply-To');
link.content = "progdper@gmail.com";
document.getElementsByTagName('head')[0].appendChild(link);

//파일 이름
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Filename');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//위치
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Location');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//배포자
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Distribution');
link.content = "최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

//저작권
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Copyright');
link.content = "Copyright 2023. 최재훈. All rights reserved.";
document.getElementsByTagName('head')[0].appendChild(link);

//제작년월일
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Build');
link.content = "2023년 02월 15일";
document.getElementsByTagName('head')[0].appendChild(link);

//최종 수정일
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Last-Modified');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);



// [ 추가 - 캐쉬 관련 ]

//그림 위 마우스 오버시 이미지 관련 툴바 생성 여부
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'imagetoolbar');
link.content = "no";
document.getElementsByTagName('head')[0].appendChild(link);

//서버로부터 캐쉬 가져오기
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Cache-Control');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//캐쉬 만료일
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Expires');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//새로고침
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'refresh');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//입력된 주소로 몇초 후 자동 이동
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'refresh');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//페이지 들어갈 때 장면 전환 효과
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Page-Enter');
link.content = "revealtrans(Duration=1, Transition=12)";
document.getElementsByTagName('head')[0].appendChild(link);

//페이지 나갈 때 장면 전환 효과
var link = document.createElement('meta'); 
link.setAttribute('http-equiv', 'Page-Exit');
link.content = "revealtrans(Duration=1, Transition=12)";
document.getElementsByTagName('head')[0].appendChild(link);



// [ 추가 - OG(Open Graph) url 링크시 정보 노출, 위의 내용과 동일한 것이 있을 겨우 내용이 같아야 함]

// 기본사항
// 종류
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:type');
link.content = "website";
document.getElementsByTagName('head')[0].appendChild(link);

// 주소
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:url');
link.content = "https://progdper.github.io/";
document.getElementsByTagName('head')[0].appendChild(link);

// 제목
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:title');
link.content = "웹 개발자 최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

// 반영 이미지
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:image');
link.content = "{{ url_for('/static/img', filename='mata_img.jpg') }}";
// link.content = "/static/img/mata_img.jpg";
document.getElementsByTagName('head')[0].appendChild(link);

// 설명
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:description');
link.content = "웹 개발자 최재훈의 자기소개서 및 이력서";
document.getElementsByTagName('head')[0].appendChild(link);

// 이름(title의 세부적인 카테고리)
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:site_name');
link.content = "최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

// 지역
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:locale');
link.content = "ko_KR";
document.getElementsByTagName('head')[0].appendChild(link);

// 이미지 가로 크기 (권장 1200)
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:image:width');
link.content = "1200";
document.getElementsByTagName('head')[0].appendChild(link);

// 이미지 세로 크기 (권장 630)
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:image:height');
link.content = "630";
document.getElementsByTagName('head')[0].appendChild(link);

//트위터 카드형태 미리보기  - summary, photo, player 중 선택할 수 있으며 summary로 작성됨
// 트위터 카드
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:card');
link.content = "summary";
document.getElementsByTagName('head')[0].appendChild(link);

// 트위터 url
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:url');
link.content = "https://progdper.github.io/";
document.getElementsByTagName('head')[0].appendChild(link);

// 트위터 제목
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:title');
link.content = "웹 개발자 최재훈";
document.getElementsByTagName('head')[0].appendChild(link);

// 트위터 설명
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:description');
link.content = "웹 개발자 최재훈의 자기소개서 및 이력서";
document.getElementsByTagName('head')[0].appendChild(link);

// 트위터 이미지
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:image');
link.content = "{{ url_for('/static/img', filename='mata_img.jpg') }}";
// link.content = "/static/img/mata_img.jpg";
document.getElementsByTagName('head')[0].appendChild(link);

// 트위터 시작 장애인을 위한 이미지 설명
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:image:alt');
link.content = "웹 개발자 최재훈의 자기소개서 및 이력서 ";
document.getElementsByTagName('head')[0].appendChild(link);


// 트위터 도메인 - content : http://YourDomain.com/
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:domain');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);



//소셜 미디어 분석 태크
// 페이스북 - content : your_app_id
var link = document.createElement('meta'); 
link.setAttribute('property', 'fb:app_id');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//트위터 - content : @website-username
var link = document.createElement('meta'); 
link.setAttribute('name', 'twitter:site');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);



//모바일 앱 미리보기
// ios
//url - ios 앱 url
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:ios:url');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//id - ios 앱스토어 id
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:ios:app_store_id');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//이름 - ios 앱 이름
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:ios:app_name');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

// android
//url - android 앱 url
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:android:url');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//url - android 웹 url
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:web:url');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//이름 - android 앱 이름
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:android:app_name');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

//패키지 이름 - android 패치키 이름
var link = document.createElement('meta'); 
link.setAttribute('property', 'al:android:package');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);







//추가사항
// 문장 시작에 나타나는 단어 선택
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:determiner');
link.content = "ko_KR";
document.getElementsByTagName('head')[0].appendChild(link);

// 다국어 지원
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:locale:alternate');
link.content = "ko_KR";
document.getElementsByTagName('head')[0].appendChild(link);

// 사이트에 포함되는 오디오
var link = document.createElement('meta'); 
link.setAttribute('property', 'og:audio');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);




// [ 검색엔진 등록 - 각 사이트별로 등록 절차 필요]

// 네이버 사이트 검색 등록 - 필수 : 네이버 웹마스터 도구에서 사이트 등록 후 meta 주소 입력
var link = document.createElement('meta'); 
link.setAttribute('name', 'naver-site-verification');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

// 구글 사이트 검색 등록 - 필수 : 구글 서치 콘솔에서 등록
var link = document.createElement('meta'); 
link.setAttribute('name', 'google-site-verification');
link.content = " ";
document.getElementsByTagName('head')[0].appendChild(link);

// 다음, bing의 경우 직접 등록하면 완료됨


