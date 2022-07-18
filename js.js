// 시작하기 버튼을 누르면 prompt 창 띄우기//////////////////
// prompt창에서 확인 눌렀을 때
//    1~10 숫자 입력 > number에 숫자저장(자동) > confirm창 /////////////
//    0 or 11이상 숫자 입력 > 경고창 > prompt창 다시 띄우기
// prompt창에서 취소 눌렀을 때 > 취소되었습니다 경고창 띄우고 종료

//++프롬프트창 제어++
//못한 것 : 0, 글자, 빈칸 입력 나누는 것 / 올바른 값 입력할 때까지 프롬프트 창 계속 띄우는 것

function handlePrompt() {
  number = parseInt(prompt("참가자의 수를 입력해주세요."));
  if (number) {
    if (number > 10) {
      alert("1~10 사이의 숫자를 입력해주세요!");
      //프롬프트창 계속 띄우기
    } else {
      if (confirm(+number + "명이 맞습니까?")) {
        onNumber.innerText = number;
      } else {
        alert("취소되었습니다.");
      }
    }
  } else {
    alert("취소되었습니다.");
  }
}

const $start = document.querySelector(".startBtn");

$start.addEventListener("click", handlePrompt);

//let word; // 제시어
let newWord; // 새로 입력한 단어

const onNumber = document.querySelector("#number");
const $text = document.querySelector("input");
const $word = document.querySelector("#word");
const $Btn = document.querySelector(".inputBtn");
const $order = document.querySelector("#order");

const onInput = function (event) {
  newWord = event.target.value;
};

function onClickBtn() {
  if (!$word.innerText && newWord.length === 3) {
    $word.innerText = newWord;
    $text.value = "";
    $text.focus();
    if ($order.innerText === onNumber.innerText) {
      $order.innerText = 1;
    } else {
      $order.innerText = Number($order.innerText) + 1;
    }
  } else {
    if (
      $word.innerText[$word.innerText.length - 1] === newWord[0] &&
      newWord.length === 3
    ) {
      $word.innerText = newWord;
      if ($order.innerText === onNumber.innerText) {
        $order.innerText = 1;
      } else {
        $order.innerText = Number($order.innerText) + 1;
      }
      $text.value = "";
      $text.focus();
    } else {
      alert("올바른 단어를 입력해주세요!");
      $text.value = "";
      $text.focus();
    }
  }
}

$text.addEventListener("input", onInput);
$Btn.addEventListener("click", onClickBtn);
