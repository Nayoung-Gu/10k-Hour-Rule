# ⏰ 10k-Hour-Rule

## 👀 개요

HTML, CSS, JavaScript, Figma로 구현한 <1만 시간의 법칙> 반응형 웹페이지
<br>
<br>

## 📌 주요 기능
- `input`에 전문가가 되고 싶은 분야와 일일 투자 시간을 입력했을 때 총 소요 일수 계산
- 모달창, 결과창을 보여줄 때 `window.scrollTo()` API를 통해 해당 부분의 시작 위치로 부드럽게 이동
- '공유하기' 버튼 클릭시 `document.execCommand()` API를 통해 주소 링크 복사
<br>


## ⚙ 이슈

1. 일부 모바일에서 레이아웃 유지 불가 현상<br>
  👉 이슈: 반응형 관련 익스텐션과 별도의 사이트에서 핸드폰 모델별 미리보기로 확인했을 때는 의도한 대로 구현되었으나 실제 iPhone xs 이후 모델부터 <1만 시간의 법칙> 정의 부분과 계산 버튼의 글자 일부가 잘려 보이는 현상 <br>
  👉 해결(예정): `media-query`를 세분화한 후 실제 핸드폰에서 테스트할 예정이다. 지금은 음절 단위로 잘리는 현상만 방지하기 위해 일시적으로 `word-break: keep-all;`만 설정해둔 상태이다.
<br>

## 🔎 실제 구현 화면
![screencapture-nayoung-gu-github-io-10k-Hour-Rule-2022-06-04-14_16_19](https://user-images.githubusercontent.com/80025366/171985486-b94f127e-848b-4b32-9d23-3eca51abf8d2.png)

