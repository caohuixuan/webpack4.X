import Text from './json/title.json';

const config=function(){
	var firstTitle=document.createElement('h1');
	firstTitle.innerHTML=Text.greet;
	return firstTitle;
};
export default config;