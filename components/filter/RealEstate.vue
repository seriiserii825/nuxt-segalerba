<template>
  <article class="real-estate real-estates__item">
    <h3 class="real-estate__title">{{ title }}</h3>
    <div class="real-estate__body">
      <div class="real-estate__img">
        <a :href="realPermalink">
          <img :src="currentImg" alt="" />
        </a>
        <div class="real-estate__thmbs-container">
          <button @click="prevThmb" class="slider-btn prev">
            <svg
              width="20"
              height="32"
              viewBox="0 0 20 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.000488281 15.5307L1.99158 17.5228L15.5308 31.062L19.5326 27.0779L7.98548 15.5307L19.5326 3.98363L15.5308 -0.000488281L1.99158 13.5387L-0.000488281 15.5307Z"
                fill="#FF8D00"
              ></path>
            </svg>
          </button>
          <button @click="nextThmb" class="slider-btn next">
            <svg
              width="20"
              height="32"
              viewBox="0 0 20 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.71 15.9129L17.7179 13.9208L4.17865 0.381594L0.17687 4.36574L11.724 15.9129L0.17687 27.46L4.17865 31.4441L17.7179 17.9049L19.71 15.9129Z"
                fill="#FF8D00"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="real-estate__content">
        <div class="real-estate__labels">
          <div class="real-estate__label">
            <span class="real-estate__price">€{{ clearedPrice }}</span
            ><span class="real-estate__place">{{ cuttedPlace }}</span>
          </div>
        </div>
        <div class="real-estate__text">
          <p v-html="text"></p>
          <a :href="realPermalink">Leggi tutto</a>
        </div>
      </div>
    </div>
    <footer class="real-estate__footer">
      <div class="real-estate__info">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1.85476V17.1452C18 18.1676 17.2114 19 16.2429 19H14.5329C14.1429 19 13.83 18.6698 13.83 18.2581C13.83 17.8464 14.1429 17.5162 14.5329 17.5162H16.2429C16.4357 17.5162 16.5943 17.3488 16.5943 17.1452V10.2781H10.3843C9.99429 10.2781 9.68143 9.94786 9.68143 9.53619C9.68143 9.12452 9.99429 8.79429 10.3843 8.79429H16.5943V1.85476C16.5943 1.65119 16.4357 1.48381 16.2429 1.48381H8.30143V3.65976C8.30143 4.07143 7.98857 4.40167 7.59857 4.40167C7.20857 4.40167 6.89571 4.07143 6.89571 3.65976V1.48381H1.75714C1.56429 1.48381 1.40571 1.65119 1.40571 1.85476V8.7581H6.89143V6.58214C6.89143 6.17048 7.20429 5.84024 7.59429 5.84024C7.98429 5.84024 8.29714 6.17048 8.29714 6.58214V12.4224C8.29714 12.834 7.98429 13.1643 7.59429 13.1643C7.20429 13.1643 6.89143 12.834 6.89143 12.4224V10.2464H1.40571V17.1452C1.40571 17.3488 1.56429 17.5162 1.75714 17.5162H6.89143V15.3402C6.89143 14.9286 7.20429 14.5983 7.59429 14.5983C7.98429 14.5983 8.29714 14.9286 8.29714 15.3402V17.5162H11.7643C12.1543 17.5162 12.4671 17.8464 12.4671 18.2581C12.4671 18.6698 12.1543 19 11.7643 19H1.75714C0.788571 19 0 18.1676 0 17.1452V1.85476C0 0.832381 0.788571 0 1.75714 0H16.2429C17.2114 0 18 0.832381 18 1.85476Z"
            fill="#555555"
          />
        </svg>
        <span>{{ surface }} mq</span>
      </div>
      <div class="real-estate__info">
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6523 8.26048V2.03571C21.6523 0.91381 20.7449 0 19.6309 0H3.36914C2.25508 0 1.34766 0.91381 1.34766 2.03571V8.26048C0.561523 8.54095 0 9.29191 0 10.1786V18.3214C0 18.6969 0.300977 19 0.673828 19H3.36914C3.74199 19 4.04297 18.6969 4.04297 18.3214V16.2857H18.957V18.3214C18.957 18.6969 19.258 19 19.6309 19H22.3262C22.699 19 23 18.6969 23 18.3214V10.1786C23 9.29191 22.4385 8.54095 21.6523 8.26048ZM3.36914 1.35714H19.6309C20.0037 1.35714 20.3047 1.66024 20.3047 2.03571V8.14286H18.8402C18.9166 7.93024 18.957 7.70405 18.957 7.46429V6.10714C18.957 4.98524 18.0496 4.07143 16.9355 4.07143H14.1953C13.0813 4.07143 12.1738 4.98524 12.1738 6.10714V7.46429C12.1738 7.70405 12.2143 7.93024 12.2906 8.14286H10.7094C10.7857 7.93024 10.8262 7.70405 10.8262 7.46429V6.10714C10.8262 4.98524 9.91875 4.07143 8.80469 4.07143H6.06445C4.95039 4.07143 4.04297 4.98524 4.04297 6.10714V7.46429C4.04297 7.70405 4.0834 7.93024 4.15977 8.14286H2.69531V2.03571C2.69531 1.66024 2.99629 1.35714 3.36914 1.35714ZM13.5215 7.46429V6.10714C13.5215 5.73167 13.8225 5.42857 14.1953 5.42857H16.9355C17.3084 5.42857 17.6094 5.73167 17.6094 6.10714V7.46429C17.6094 7.83976 17.3084 8.14286 16.9355 8.14286H14.1953C13.8225 8.14286 13.5215 7.83976 13.5215 7.46429ZM5.39062 7.46429V6.10714C5.39062 5.73167 5.6916 5.42857 6.06445 5.42857H8.80469C9.17754 5.42857 9.47852 5.73167 9.47852 6.10714V7.46429C9.47852 7.83976 9.17754 8.14286 8.80469 8.14286H6.06445C5.6916 8.14286 5.39062 7.83976 5.39062 7.46429ZM2.02148 9.5H20.9785C21.3514 9.5 21.6523 9.8031 21.6523 10.1786V12.2143H1.34766V10.1786C1.34766 9.8031 1.64863 9.5 2.02148 9.5ZM20.3047 17.6429V15.6071C20.3047 15.2317 20.0037 14.9286 19.6309 14.9286H3.36914C2.99629 14.9286 2.69531 15.2317 2.69531 15.6071V17.6429H1.34766V13.5714H21.6523V17.6429H20.3047Z"
            fill="#555555"
          />
        </svg>
        <span>{{ rooms }} locali</span>
      </div>
      <div class="real-estate__info">
        <svg
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 5.49559C32 5.06692 31.6428 4.7197 31.2019 4.7197H4.81962V1.54751H7.32424V2.99643C7.32424 3.4251 7.68141 3.77233 8.12236 3.77233C8.56332 3.77233 8.92049 3.4251 8.92049 2.99643V0.775899C8.92049 0.347226 8.56332 0 8.12236 0H4.0215C3.58054 0 3.22337 0.347226 3.22337 0.775899V4.7197H0.798126C0.357172 4.7197 0 5.06692 0 5.49559C0 10.361 3.0073 14.5535 7.31101 16.4139L7.06408 16.5125C6.6584 16.6797 6.46438 17.1298 6.63635 17.5242C6.76423 17.82 7.05967 18 7.37274 18C7.47416 18 7.57999 17.9786 7.68141 17.94L9.62161 17.1512C10.4815 17.3356 11.3722 17.4342 12.285 17.4342H19.715C20.7998 17.4342 21.8492 17.297 22.8502 17.0398L25.0638 17.94C25.1652 17.9829 25.2666 18 25.3725 18C25.6855 18 25.981 17.82 26.1089 17.5242C26.2808 17.1298 26.0868 16.6754 25.6811 16.5125L25.0418 16.2553C29.1559 14.322 32 10.2239 32 5.49559ZM19.715 15.8909H12.285C6.6584 15.8909 2.0328 11.6428 1.62271 6.27149H30.3773C29.9672 11.6428 25.3416 15.8909 19.715 15.8909Z"
            fill="#555555"
          />
        </svg>
        <span>{{ bathRooms }} bagni</span>
      </div>
      <div class="real-estate__info">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.45244 1C1.33399 1 1.21629 1.05081 1.13255 1.13802C1.0488 1.22523 1.00002 1.3478 1 1.47115V18.5289C1 18.6522 1.0488 18.7748 1.13255 18.862C1.21629 18.9492 1.33399 19 1.45244 19H20.4736C20.8294 18.9967 21.0038 18.7983 20.9999 18.453V15.1471C20.9999 15.0238 20.9511 14.9012 20.8674 14.814C20.7836 14.7268 20.6659 14.676 20.5475 14.676H17.8189V12.7465C17.8189 12.6231 17.7702 12.5005 17.6864 12.4132C17.6027 12.326 17.4849 12.2751 17.3665 12.2751H14.6381V9.88781C14.6381 9.76445 14.5893 9.64183 14.5055 9.55463C14.4216 9.46739 14.3039 9.41665 14.1854 9.4167H11.457V7.06671C11.457 6.94332 11.4082 6.82072 11.3244 6.7335C11.2406 6.64628 11.1228 6.59552 11.0044 6.59556H8.27598V4.22705C8.27598 4.10367 8.22728 3.98104 8.14353 3.89377C8.05978 3.8065 7.94204 3.75567 7.82356 3.75565H5.08592V1.47115C5.08592 1.3478 5.03712 1.22523 4.95337 1.13802C4.86962 1.05081 4.75193 1.00003 4.63348 1H1.45244Z"
            stroke="#555555"
            stroke-width="1.5"
          />
        </svg>
        <span>{{ removedZeroBehind }}</span>
      </div>
    </footer>
  </article>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    img: {
      type: String,
      default: "https://via.placeholder.com/300x200",
    },
    price: {
      type: String,
      default: "20",
    },
    place: {
      type: String,
      default: "Place",
    },
    text: {
      type: String,
      default: "Text",
    },
    permalink: {
      type: String,
      default: "https://www.google.com",
    },
    surface: {
      type: Number,
      default: 20,
    },
    rooms: {
      type: Number,
      default: 2,
    },
    bathRooms: {
      type: Number,
      default: 1,
    },
    thmbs: {
      type: Array,
      default: () => [],
    },
    floor: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      activeThmb: 0,
    };
  },
  methods: {
    nextThmb() {
      this.activeThmb =
        this.activeThmb === 5 || this.activeThmb >= this.thmbs.length - 1
          ? 0
          : this.activeThmb + 1;
    },
    prevThmb() {
      this.activeThmb = this.activeThmb === 0 ? 5 : this.activeThmb - 1;
    },
    cleanTheWord(s) {
      let r = s.toLowerCase().trim();
      r = r.replace(/\(/g, "");
      r = r.replace(/\)/g, "");
      r = r.replace(/\s/g, "-");
      r = r.replace(new RegExp(/[àáâãäå]/g), "a");
      r = r.replace(new RegExp(/æ/g), "ae");
      r = r.replace(new RegExp(/ç/g), "c");
      r = r.replace(new RegExp(/[èéêë]/g), "e");
      r = r.replace(new RegExp(/[ìíîï]/g), "i");
      r = r.replace(new RegExp(/ñ/g), "n");
      r = r.replace(new RegExp(/[òóôõö]/g), "o");
      r = r.replace(new RegExp(/œ/g), "oe");
      r = r.replace(new RegExp(/[ùúûü]/g), "u");
      r = r.replace(new RegExp(/[ýÿ]/g), "y");
      r = r.replace(new RegExp(/\W/g), "-");
      r = r.replace("--", "");
      return r;
    },
  },
  computed: {
    currentImg() {
      return this.activeThmb === 0
        ? this.img
        : this.thmbs[this.activeThmb].nome_th;
    },
    clearedPrice() {
      /**
       * Number.prototype.format(n, x, s, c)
       *
       * @param integer n: length of decimal
       * @param integer x: length of whole part
       * @param mixed   s: sections delimiter
       * @param mixed   c: decimal delimiter
       */
      Number.prototype.format = function (n, x, s, c) {
        let re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
          num = this.toFixed(Math.max(0, ~~n));

        return (c ? num.replace(".", c) : num).replace(
          new RegExp(re, "g"),
          "$&" + (s || ",")
        );
      };

      const myString = Number(this.price.replace(/\D/g, ""));

      return myString.format(-3, 3, ".", ","); // "12.345.678,90"
    },
    removedZeroBehind() {
      return this.floor.replace(/^[0]+/g, "");
    },
    realPermalink() {
      const p1 = this.cleanTheWord(this.title);
      const p2 = this.cleanTheWord(this.place);
      return `/annunci-immobiliari/${this.permalink}-${p1}-${p2}/`;
      // ?id=${this.permalink}
    },
    cuttedPlace() {
      if (this.place.length > 14) {
        return this.place.substr(0, 14) + "...";
      } else {
        return this.place;
      }
    },
  },
};
</script>
<style lang="scss"></style>
