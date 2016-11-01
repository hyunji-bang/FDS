/*! DOM API © yamoo9.net, 2016 */

(function(global){
  'use strict';

  // 선택 -------------------------------------------------------

  // (ELEMENT_NODE || document).getElementById();         // ELEMENT_NODE
  // (ELEMENT_NODE || document).getElementsByTagName();   // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).getElementsByClassName(); // NODE_LIST (Like Array Object)
  // (ELEMENT_NODE || document).querySelector();          // ELEMENT_NODE
  // (ELEMENT_NODE || document).querySelectorAll();       // NODE_LIST (Like Array Object)

  // 탐색 -------------------------------------------------------

  // PARENT_NODE: .parentNode

  // CHILD_NODE | NODE_LIST:
  // .firstChild, .lastChild, .childNodes, .children
  // .firstElementChild, .lastElementChild

  // SIBLING_NODE:
  // .nextSibling, .previousSibling
  // .nextElementSibling, .previousElementSibling

  // 삽입(추가) --------------------------------------------------

  // PARENT_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.parentNode.insertBefore(INSERT_NODE, TARGET_NODE)

  // 제거 -------------------------------------------------------

  // PARENT_NODE.removeChild(CHILD_NODE)
  // CHILD_NODE.parentNode.removeChild(CHILD_NODE)

  // 대체 -------------------------------------------------------

  // NODE를 다른 NODE와 위치를 서로 변경하는 것이 아닙니다.
  // 기존 NODE를 제거(반환)한 후, 새로운 NODE를 그 위치에 대체시키는 것입니다.
  // TARGET_NODE.parentNode.replaceChild(REPLACE_NODE, TARGET_NODE)

  var gnb      = document.querySelector('#gnb');
  var target_p = document.querySelector('.target-paragraph');

  // console.log('gnb:', gnb);
  // console.log('target_p:', target_p);

  var gnb_links = gnb.querySelectorAll('a');

  for ( var i=0, l=gnb_links.length; i<l; i++ ) {
    var gnb_link = gnb_links[i];
    gnb_link.onclick = replaceStrongElement;
  }

  function replaceStrongElement() {
    // 대체 요소 탐색(선택)
    var target_strong = target_p.querySelector('strong');
    console.log('target_strong:', target_strong);

    // 대체 요소를 자신의 위치로 대체
    // <a> 요소 클릭하면, 해당 <a> 요소 위치에 <strong> 요소가 대체된다.
    var replaced_el = this.parentNode.replaceChild(target_strong, this);

    console.log('replaced_el:', replaced_el);

    // 웹 브라우저 기본 동작 차단
    // 오래 전 방법
    return false;
    // 이 아래 코드는 실행 X
  }

  // 복사 -------------------------------------------------------

})(this);