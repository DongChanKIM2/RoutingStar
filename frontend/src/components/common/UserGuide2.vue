<template id="background">
  <div>
    <v-carousel
      class="carousel"
      height="auto"
      cycle
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item class="intro" style="height: 800px;">
        <section class="intro tracking-in-expand">
          <div class="introDescription">
            <div class="text-caption">당신의 발자취가 별이 되어 떠있는 곳</div>
            <p>RoutingStar</p>
          </div>
          <img
            class="introImage"
            style="margin: 0 auto;"
            src="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028117/3D%20Illustrations/3d-illustration4_usckww.png"
            alt="3d illustration of boy with a flag"
          />
        </section>
      </v-carousel-item>

      <v-carousel-item style="" class="guide1">
        <section class="guide1 focus-in-expand-fwd" justify="center">
          <v-img class="ma-2 focus-in-expand-fwd" :src="require('../../assets/그림1.png')" />
          <div class="guide1Description">
            <h1 class="Dohyeon">정보를 얻을래!</h1>
            <br />
            <div>
                    <v-img class="ma-2 focus-in-expand-fwd" :src="require('../../assets/설명1.png')" />
            </div>
          </div>
        </section>
      </v-carousel-item>

      <v-carousel-item class="guide2 focus-in-expand-fwd">
        <section class="guide2 ">
          <div>
            <v-img class="ma-2 tilt-in-top-1" :src="require('../../assets/그림2.png')" />
            <v-img class="ma-2 tilt-in-fwd-tr" :src="require('../../assets/그림3.png')" />
            <div class="guide2Description">
              <h1 class="Dohyeon">공유할래!</h1>
              <div>
                  <v-img class="ma-2 focus-in-expand-fwd" :src="require('../../assets/설명2.png')" />
              </div>
            </div>
          </div>
        </section>
      </v-carousel-item>

      <v-carousel-item class="guide3 focus-in-expand-fwd">
        <section class="guide3">
          <div>
            <v-img class="ma-2 tilt-in-top-1" :src="require('../../assets/그림5.png')" />
            <v-img class="ma-2 tilt-in-fwd-tr" :src="require('../../assets/그림6.png')" />
            <div class="guide3Description">
              <h1 class="Dohyeon">탐나는데!?</h1>
              <div>
                  <v-img class="ma-2 focus-in-expand-fwd" :src="require('../../assets/설명3.png')" />
              </div>
            </div>
          </div>
        </section>
      </v-carousel-item>

    </v-carousel>
    <footer>
      Developed by RoutingStar
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#101423", "#fbe8a6", "#fff3e2", "#101423"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");
#background {
  background: #101423;
}

* {
  font-family: "Nanum Gothic";
}

/* .carousel {
    min-height: 700px;
} */

footer {
  background: #101423;
  color: #632b2b;
  padding: 10px;
  text-align: right;
  font-weight: 900;
}

.intro {
  display: flex;
  background: #101423;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 800px;
}
.introDescription {
  font-size: 20px;
  color: #fbe8a6;
  padding-top: 120px;
}
.introDescription p {
  font-size: 40px;
  color: #fbe8a6;
  font-weight: 900;
  font-family: "Palette Mosaic", cursive;
}

.guide1 {
  display: flex;
  background: #fbe8a6;
  justify-content: space-evenly;
  padding-top: 80px;
  overflow: hidden;
  height: 800px;
}
.guide1Description h1 {
  color: #101423;
  font-size: 48px;
}
.guide1Description div {
  color: #101423;
  font-size: 20px;
  border-radius: 10px;
}
.guide1Description h1[data-v-196bde76] {
  padding: 0px;
}

.guide2 {
  display: flex;
  background: #fff3e2;
  justify-content: space-evenly;
  padding-top: 80px;
  overflow: hidden;
  height: 800px;
}
.guide2Description h1 {
  font-size: 48px;
  color: #632b2b;
  padding: 120px 0px 20px 0px;
}
.guide2Description div {
  color: #632b2b;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
}

.guide3 {
  display: flex;
  background: #B4DFE5;
  justify-content: space-evenly;
  padding-top: 80px;
  overflow: hidden;
}
.guide3Description h1 {
  font-size: 48px;
  color: #101423;
  padding: 120px 0px 20px 0px;
}
.guide3Description div {
  color: #101423;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
}



.Nanum {
  font-family: "Nanum Gothic Coding", monospace;
}
.Dohyeon {
  font-family: "Do Hyeon", sans-serif;
}

/* responsiveness */
@media screen and (max-width: 1000px) {
  .intro {
    display: block;
    padding-top: 10px;
    height: auto;
  }
  .introImage {
    width: 100%;
  }
  .introDescription {
    padding: 30px 0px 0px 20px;
  }
  .guide1 {
    display: block;
    padding-top: 10px;
    height: auto;
  }
  .guide1Image {
    width: 100%;
  }
  .guide1Description {
    padding: 10px;
  }
  .guide1Description h1 {
    padding: 30px 0px;
  }
  .guide2 {
    display: block;
    padding-top: 10px;
    height: auto;
  }
  .guide2Image {
    width: 100%;
  }
  .guide2Description {
    padding: 20px;
  }
  .guide2Description h1 {
    padding: 30px 0px;
  }
    .guide3 {
    display: block;
    padding-top: 10px;
    height: auto;
  }
  .guide3Image {
    width: 100%;
  }
  .guide3Description {
    padding: 20px;
  }
  .guide3Description h1 {
    padding: 30px 0px;
  }
}

element.style {
    width: auto;
}

.tracking-in-expand {
  -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-8-17 0:55:48
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.focus-in-expand-fwd {
  -webkit-animation: focus-in-expand-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-expand-fwd 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-8-17 2:9:54
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
    transform: translateZ(-800px);
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
    transform: translateZ(-800px);
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

.tilt-in-fwd-tr {
	-webkit-animation: tilt-in-fwd-tr 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: tilt-in-fwd-tr 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-8-17 4:3:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tilt-in-fwd-tr
 * ----------------------------------------
 */
@-webkit-keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}

.tilt-in-top-1 {
	-webkit-animation: tilt-in-top-1 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: tilt-in-top-1 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


/* ----------------------------------------------
 * Generated by Animista on 2021-8-17 4:4:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tilt-in-top-1
 * ----------------------------------------
 */
@-webkit-keyframes tilt-in-top-1 {
  0% {
    -webkit-transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
            transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-top-1 {
  0% {
    -webkit-transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
            transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}

</style>
