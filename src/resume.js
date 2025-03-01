/* eslint-disable */
export const resume = {
  profiles: {
    subject: "Profiles",
    name: "김호빈",
    intro: "Junior Software Engineer",
    contents: [
      { title: "전화번호", link: "", style: "fas fa-phone-volume" },
      { title: "email", link: "mailto:isb0573@naver.com", style: "fas fa-at" },
      {
        title: "git",
        link: "https://github.com/404Hobin",
        style: "fab fa-github",
      },
      {
        title: "blog",
        link: "https://isb0573.tistory.com/",
        style: "fas fa-blog",
      },
    ],
  },
  intro: {
    subject: "About Me",
    content:
      "안녕하세요!!\
      학부 시절에는 수업 수강 차원을 넘어 직접 논문을 작성하고 학술대회 발표를 경험했으며,\
      우수 논문상 수상 성과를 얻었습니다. 실용 특허 출원, AI 부전공 이수, 기업 협력 산학 프로젝트,\
      공모전 입상, 학과 블로그 운영, 동아리 활동 등 다양한 분야에서\
      적극적으로 도전했습니다. \
      졸업 후에는 개발 역량 강화에 집중하며 백준 플랫폼에서 알고리즘 문제 해결 및\
      소규모 프로젝트 진행하며 기술적 성장을 추구해왔습니다.\
      새로운 경험을 시도하는 것을 즐기며, 문제 해결 과정에서 얻는 통찰을 소중히 여깁니다.\
      주취미는 배드민턴입니다.\
      단순 취미를 넘어 주 3회 체계적 레슨과 공식 동호회 활동으로 이어지며,\
      A조 급수 취득 및 공식 대회 입상 경험을 쌓았습니다.\
      소통과 다양한 경험을 바탕으로, 효율적인 문제 해결을 통해\
      맡은 일에는 책임감을 다하겠습니다.\
      \
      ",
  },
  experience: {
    subject: "Experience",
    contents: [
      {
        left_title: "2020.07 ~ 2020.08",
        left_add: "",
        right_title: "(주)잔다 인턴 근무",
        right_subtitle: "동서대학교 2020학년도 하계 국내인턴십",
        content: [{ main: "하우스 매뉴얼 솔루션 개발", sub: [] }],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
    ],
  },
  skills: {
    subject: "Skills",
    contents: [
      {
        title: "Frontend",
        content: ["HTML", "CSS", "JavaScrpit", "React"],
      },
      {
        title: "Backend",
        content: ["C++", "PHP", "Python", "Node.js", "Django", "Spring"],
      },
      {
        title: "ETC",
        content: ["Git", "mySQL"],
      },
    ],
  },
  projects: {
    subject: "Projects",
    contents: [
      {
        left_title: "2021.09 ~ 2021.10",
        left_add: "https://github.com/Kim-Hobin/Resume",
        right_title: "기술 이력서",
        right_subtitle: "React Based Github Pages Resume",
        content: [
          { main: "React 기반 깃허브 이력서", sub: [] },
          {
            main: "Wrapper, Left, Rgiht 구조로 컴포넌트를 나누어 구현",
            sub: [],
          },
          { main: "각 프로젝트 이미지의 모달 구현, PDF Viewer 구현", sub: [] },
        ],
        keywords: ["React", "HTML", "CSS", "JS"],
        folder: "./resume",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.07 ~ 2020.08",
        left_add: "https://github.com/Kim-Hobin/House-Mannual",
        right_title: "하우스 매뉴얼",
        right_subtitle: "숙박 예약 페이지 솔루션 프로젝트",
        content: [
          {
            main: "고객이 호텔을 예약하면 URL을 통해 아이템의 정보를 보여주도록 함",
            sub: [],
          },
          {
            main: "html, css, javascript로 클라이언트, Django + MongoDB 서버 구현",
            sub: [],
          },
          {
            main: "기능 구현",
            sub: [
              "기본적인 CRUD 및 반응형 웹앱 구현",
              "사용자의 권한에 따라 뷰를 다르게 구성",
              "Slug 등록을 통해 원하는 URL 구성, 이미지 슬라이드 구현",
            ],
          },
        ],
        keywords: ["Django", "MongoDB", "HTML", "CSS", "JS"],
        folder: "./house-manual",
        images: ["1", "2", "3", "4"],
        pdfs: [],
      },
      {
        left_title: "2020.03 ~ 2020.12",
        left_add:
          "https://github.com/Kim-Hobin/OMR-based-automatic-arragement-system",
        right_title: "광학 음악 인식 기반 자동 편곡 시스템",
        right_subtitle: "캡스톤디자인1, 2 교과목 연계 졸업프로젝트",
        content: [
          {
            main: "일반인도 악보를 데이터화하여 쉽게 편집하고 음악 파일로 출력할 수 있는 악보 인식 기반 어플리케이션",
            sub: [
              "사용자는 편곡하고자 하는 음악의 악보를 입력하고 편곡된 음악 파일을 제공 받음",
            ],
          },
          {
            main: "크게 광학 음악 인식 모듈과 자동 편곡 모듈로 구성",
            sub: [
              "클라이언트는 안드로이드 애플리케이션, 서버는 파이썬으로 구현",
              "광학 음악 인식 모듈에 OpenCV 라이브러리를 사용하였으며, 속도를 위해 jni + ndk를 사용함",
            ],
          },
          {
            main: "본 프로젝트를 통해 작게 나마 컴퓨터비전, 머신 러닝 등 인공지능 분야의 학습 계기가 됨",
            sub: [
              "악보의 구성요소들이 가진 구조적 특성을 이용해 인식 모듈을 구현",
              "자동 편곡 모듈에 다층 퍼셉트론 구조의 신경망을 통해 멜로디 기반 화성을 생성",
            ],
          },
        ],
        keywords: ["C++", "JAVA", "Python", "Android", "OpenCV", "TensorFlow"],
        folder: "./senior-project",
        images: ["1", "2"],
        pdfs: [],
      },
      {
        left_title: "2019.09 ~ 2019.12",
        left_add: "https://github.com/Kim-Hobin/PC-auction",
        right_title: "PC 견적 관리 웹사이트",
        right_subtitle: "데이터베이스 설계 교과목 연계 프로젝트",
        content: [
          {
            main: "PC부품에 대한 지식 없이 조립형 PC를 구매할 수 있는 PC견적 및 경매 사이트",
            sub: [],
          },
          {
            main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현",
            sub: [],
          },
          {
            main: "로그인, 로그아웃, 회원가입, 역경매/입찰, 페이징, 관리자 페이지 등의 기능 제공",
            sub: [],
          },
        ],
        keywords: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        folder: "./PC-auction",
        images: ["1", "2", "3", "4", "5", "6"],
        pdfs: [],
      },
      {
        left_title: "2019.09 ~ 2019.12",
        left_add: "https://github.com/Kim-Hobin/Online-Book-Purchase-System",
        right_title: "온라인 도서 구매 시스템",
        right_subtitle: "데이터베이스 설계 교과목 연계 프로젝트",
        content: [
          {
            main: "데이터베이스 실습을 위해 알라딘, YES24, 리디북스와 같은 온라인 도서 구매 사이트를 구현",
            sub: [],
          },
          {
            main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현",
            sub: [],
          },
          {
            main: "로그인/로그아웃, 회원가입, 마이페이지(신용카드, 장바구니, 주문내역, 주문상세), 주문, 리뷰 등의 기능 제공",
            sub: [],
          },
          { main: "MySQL의 테이블의 속성이나 관계에 대해 직접 설계", sub: [] },
        ],
        keywords: ["PHP", "MySQL", "HTML", "CSS", "JS"],
        folder: "./book-manage",
        pdfs: [],
      },
      {
        left_title: "2019.09 ~ 2019.12",
        left_add: "",
        right_title: "플리마켓 통합 관리 시스템",
        right_subtitle: "소프트웨어분석설계과목 교과목 연계 프로젝트",
        content: [
          {
            main: "플리마켓의 셀러와 주최자, 참가자에게 기존의 불편한 요소들을 해소할 수 있도록 하는 플리마켓 통합 관리 시스템",
            sub: [],
          },
          {
            main: "해당 프로젝트는 개발 직전 단계까지의 설계를 목표로 두고 프로젝트 정의서, 다양한 문서를 작성 해본 프로젝트",
            sub: [
              "프로젝트 정의서, 요구사항기술서, 클래스분석서, UI설계서, 데이트베이스설계서 등의 설계 문서 작성",
              "프로젝트 설계방법과 StarUML과 같은 설계툴에 대해 배울수 있었음",
            ],
          },
        ],
        keywords: ["StarUML"],
        folder: "./fleamarket",
        images: [],
        pdfs: ["1", "2"],
      },
      {
        left_title: "2019.09 ~ 2019.12",
        left_add: "https://github.com/Kim-Hobin/tap-the-taxi-2",
        right_title: "TAPC2",
        right_subtitle: "소프트웨어 개발 실습4 교과목 연계 프로젝트",
        content: [
          {
            main: "고지대에 위치한 학교의 지리적 특성에 택시합승관련 어플리케이션",
            sub: [],
          },
          {
            main: "클라이언트는 안드로이드 애플리케이션, 서버는 Node.js, DB는 MySQL로 구현",
            sub: [
              "로그인/로그아웃, 회원가입 등을 위한 http 서버와 매칭/채팅을 위한 소켓 서버를 구현",
              "기존 TapC의 FIreBase를 대체하여 웹 서버 연동",
            ],
          },
        ],
        keywords: ["Node.js", "MySQL", "JAVA", "JavaScrpit", "Andriod"],
        folder: "./tapc2",
        pdfs: [],
      },
      {
        left_title: "2018.03 ~ 2018.06",
        left_add: "https://github.com/Kim-Hobin/Online-badminton-Shopping-Mall",
        right_title: "배드민턴 쇼핑몰",
        right_subtitle: "소프트웨어개발실습2 교과목 연계 프로젝트",
        content: [
          { main: "배드민턴 관련 쇼핑몰 사이트", sub: [] },
          {
            main: "html + css + javascript을 기반으로 서버가 없는 정적 페이지로 이미지 슬라이드 구현",
            sub: [],
          },
        ],
        keywords: ["HTML", "CSS", "JS"],
        folder: "./badmintorn-market",
        images: ["1", "2", "3", "4"],
        pdfs: [],
      },
    ],
  },
  educations: {
    subject: "Education",
    contents: [
      {
        left_title: "2014.03 ~ 2021.02",
        left_add: "",
        right_title: "동서대학교 졸업",
        right_subtitle:
          "컴퓨터공학과 / 소프트웨어 전공 / AI공학 부전공 / 학점 : 4.17",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2011.03 ~ 2014.02",
        left_add: "",
        right_title: "부산용인고 졸업",
        right_subtitle: "부산광역시 동래구 명장동",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
    ],
  },
  awards: {
    subject: "Awards",
    contents: [
      {
        left_title: "2020.12.17",
        left_add:
          "https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=10&mode=view&idx=83639",
        right_title: "2020년도 온택트기반 동서인 FAIR - 최우수상",
        right_subtitle: "",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.11.28",
        left_add: "",
        right_title:
          "한국지능시스템학회 30주년 기념 2020 추계학술대회 - 우수논문상",
        right_subtitle: "",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.08.31",
        left_add:
          "https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=15&mode=view&idx=82307",
        right_title: "동서인 AI해커톤 경진대회 - 장려상",
        right_subtitle: "",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.06.08",
        left_add:
          "https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000014&pg=3&mode=view&idx=442",
        right_title: "2020년도 동서 AI·SW 아이디어 경진대회 - 장려상",
        right_subtitle: "",
        content: [],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
    ],
  },
  reserchs: {
    subject: "Reserch",
    contents: [
      {
        left_title: "2020.01.18",
        left_add:
          "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10572152",
        right_title: "Journal of The Korean Instiute of Inteligent System",
        right_subtitle:
          "Optical Music Recognition-based Auto Arrangement System",
        content: [
          {
            main: "구분 : Journal",
            sub: [
              "흔히 음악을 추상적이고 불확실성이 높은 예술 분야라 생각하지만, 엄연히 화성학과 대위법 등 정립된 이론이 존재한다. 컴퓨터와 인공지능이 등장함에 따라 이런 이론들을 바탕으로 음악을 작곡하거나 편곡하려는 시도가 생겨났고, 현재까지도 많은 연구가 진행되고 있다. 본 논문에서는 악보 이미지를 입력받아 알고리즘을 통해 자동 편곡한 음악 파일을 출력할 수 있도록 하는 악보 인식 기반 자동 편곡 시스템을 제안하였다. 광학 음악 인식을 통해 악보를 컴퓨터가 이해하기 쉬운 데이터 형태로 변환하였고, 멜로디를 기반으로 코드를 생성함으로써 편곡 시스템의 일부분을 구현하였다. 코드를 생성하는 작업에는 실제 악곡의 멜로디와 코드를 기반으로 심층 신경망을 사용하였다. 코드를 생성하는 데에는 다양한 선택지가 있음에도 불구, 실제 악곡과의 비교에서 약 55%의 일치율을 보였다.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.11.28",
        left_add: "",
        right_title: "컴퓨터공학부졸업논문집",
        right_subtitle: "광학 음악 인식 기반 편곡 시스템",
        content: [
          {
            main: "구분 : Thesis",
            sub: [
              "4차 산업혁명이 진행되며 인공지능이 다양한 분야에서 활용되고 있다. 음악 분야 또한 인공지능과의 융합에 많은 연구가 진행되고 있다. 한편 사회 전반적으로 음악에 대한 수요는 꾸준히 늘고 있으며, 그중에서도 편곡에 대한 관심이 늘고 있다. 다만 편곡 작업은 진입장벽이 높아, 전공자가 아닌 일반인들이 시도하기에는 어려움이 있다. 이에 따라 본 논문에서는 광학 음악 인식 기반 자동 편곡 시스템을 제안한다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 편곡 과정 중, 화성 생성의 경우 멜로디에 기반한 신경망 기법을 사용하였다. 제안한 광학 음악 인식 기법은 복잡도 ‘하’에 해당하는 악보 20장에 대해 95%의 인식률을 보였으며 신경망을 통해 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용할 수 있음을 확인하였다.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.11.28",
        left_add: "",
        right_title: "한국지능시스템학회 30주년 기념 2020 추계학술대회",
        right_subtitle: "광학 음악 인식 기반 편곡 시스템",
        content: [
          {
            main: "구분 : Conference",
            sub: [
              "인공지능에 대한 관심과 활용이 증가함에 따라 4차 산업혁명의 주요 기술로 각광받고 있다. \
                    음악분야에서도 인공지능과의 융합에 많은 연구가 활발히 진행되고 있다. 본 논문에서는 광학음악인식 기반 자동 편곡 시스템을 제안한다. \
                    편곡에는 템포 조절, 조옮김, 화성 생성과 같은 다양한 과정이 포함된다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 멜로디에 \
                    어울리는 화성을 생성하기 위해 신경망 기법을 사용하였다. 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용시킬 수 있음을 확인하였다.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.11.10",
        left_add: "",
        right_title: "발명 특허 출원",
        right_subtitle: "악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법",
        content: [
          {
            main: "구분 : Conference",
            sub: [
              "본 발명은 악보 인식 기반 편곡 장치 및 방법에 관한 것으로, 더 상세하게는 광학 인식 알고리즘을 이용하여 악보로부터 데이터를 추출하고, \
                    추출된 데이터를 편집함으로써 사용자가 쉽게 악보를 편곡하도록 제공하며, 편곡된 음악을 파일로 제공받도록 하는 악보 인식 기반 편곡 장치 및 방법에 관한 것이다.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.08.31",
        left_add: "http://www.aspbs.com/ctn/contents-ctn2021.htm",
        right_title: "ICCT2020 SCOPUS",
        right_subtitle:
          "Computer-Vision-based Advanced Optical Music Recognition System",
        content: [
          {
            main: "구분 : SCOPUS",
            sub: [
              "Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
      {
        left_title: "2020.07.09",
        left_add: "",
        right_title:
          "The 10th International Conference on Convergence Technology in 2020",
        right_subtitle:
          "Advanced Optical Music Recognition System for Automatic Arrangement",
        content: [
          {
            main: "구분 : Conference",
            sub: [
              "In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility.",
            ],
          },
        ],
        keywords: [],
        folder: "",
        images: [],
        pdfs: [],
      },
    ],
  },
  certificates: {
    // subject: "Certificate",
    contents: [
      // {
      //     left_title: "2020.07.09",
      //     left_add: "",
      //     right_title: "정보처리기사",
      //     right_subtitle: "한국산업인력공단",
      //     content: [], keywords: [], folder: "", images: [], pdfs: []
      // },
      // {
      //     left_title: "2020.07.09",
      //     left_add: "",
      //     right_title: "리눅스 마스터 2급",
      //     right_subtitle: "대한상공회의소 자격팡가사업단",
      //     content: [], keywords: [], folder: "", images: [], pdfs: []
      // },
      // {
      //     left_title: "2020.07.09",
      //     left_add: "",
      //     right_title: "워드프로세스 1급",
      //     right_subtitle: "대한상공회의소 자격팡가사업단",
      //     content: [], keywords: [], folder: "", images: [], pdfs: []
      // },
      // {
      //     left_title: "2020.07.09",
      //     left_add: "",
      //     right_title: "컴퓨터활용능력 1급",
      //     right_subtitle: "대한상공회의소 자격팡가사업단",
      //     content: [], keywords: [], folder: "", images: [], pdfs: []
      // },
    ],
  },
};
