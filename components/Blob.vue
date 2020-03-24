<template>
   <svg class="svg-blob"  viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(230, 200)">
        <path
          d="M184.3,-110.4C211,-60.2,185.6,16.2,146.2,64.9C106.8,113.7,53.4,134.8,-11.5,141.5C-76.5,148.2,-153,140.3,-192.4,91.6C-231.8,42.8,-234.1,-46.8,-195.9,-103.7C-157.6,-160.7,-78.8,-184.8,0,-184.8C78.8,-184.8,157.6,-160.7,184.3,-110.4Z"
          fill="rgba(255, 66, 101, 1)"
          stroke="none"
          stroke-width="0">
        </path>
    </g>
  </svg>
</template>

<style lang = "scss" scoped>
  @import '../assets/styles/main.scss';

 .svg-blob{
    width: 200px;
    height: 200px;
     -webkit-animation:  blob-animation ease-in-out 12s infinite;
   -moz-animation: my blob-animationopright ease-in-out 12s infinite;
   animation:  blob-animation ease-in-out 12s infinite;
 }


 @keyframes blob-animation {
  0% {
		transform: translatey(0px) scale(1);
	}
	50% {
		transform: translatey(-15px) scale(1.05);
	}
	100% {
		transform: translatey(0px) scale(1);
	}
 }
</style>


