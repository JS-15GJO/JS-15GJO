import {renderMap} from "../lib/index.js"
import { getNode } from "../lib/index.js";
import {imageChange} from "../lib/index.js"
// import {} from "../lib/utils/mapIconChange.js"

// mapApi('.box', 100, 500, 37.511371, 127.098339); //header 지도
// mapApi('.box2', 100, 200, 37.511371, 127.098339); //footer 지도

renderMap(37.559035,126.922513, 450, '.box');
renderMap(37.559035,126.922513, 250, '.box2');

// 하트 버튼 누르면 이미지 변경 부분
const toggleIcon = getNode('.toggle-icon')
toggleIcon.addEventListener('click', imageChange(toggleIcon))

