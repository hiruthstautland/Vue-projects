<template>
  <div class="calculator">
    <div class="display">{{ sum || "0" }}</div>
    <div class="btn-calc" @click="clear">AC</div>
    <div class="btn-calc" @click="sign">+/-</div>
    <div class="btn-calc" @click="percent">%</div>
    <div class="btn-calc btn-right" @click="divide">/</div>
    <div class="btn-calc" @click="append('7')">7</div>
    <div class="btn-calc" @click="append('8')">8</div>
    <div class="btn-calc" @click="append('9')">9</div>
    <div class="btn-calc btn-right" @click="multi">*</div>
    <div class="btn-calc" @click="append('4')">4</div>
    <div class="btn-calc" @click="append('5')">5</div>
    <div class="btn-calc" @click="append('6')">6</div>
    <div class="btn-calc btn-right" @click="minus">-</div>
    <div class="btn-calc" @click="append('1')">1</div>
    <div class="btn-calc" @click="append('2')">2</div>
    <div class="btn-calc" @click="append('3')">3</div>
    <div class="btn-calc btn-right" @click="add">+</div>
    <div class="zero btn-calc" @click="append('0')">0</div>
    <div class="btn-calc" @click="dot">.</div>
    <div class="btn-calc equal btn-right" @click="equal">=</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      previous: null,
      sum: "",
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.sum = "";
    },
    sign() {
      this.sum = this.sum * -1;
      // this.sum =
      //   this.sum.charAt(0) === "-" ? this.sum.slice(1) : `-${this.sum}`;
    },
    percent() {
      this.sum = `${parseFloat(this.sum) / 100}`;
    },
    setPrevious() {
      this.previous = this.sum;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    multi() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    append(number) {
      if (this.operatorClicked) {
        this.sum = " ";
        this.operatorClicked = false;
      }
      this.sum = `${this.sum}${number}`;
    },
    dot() {
      if (this.sum.indexOf(".") === -1) {
        this.append(".");
      }
    },
    equal() {
      if (this.sum === "") {
        this.sum = this.sum;
      } else {
        this.sum = `${this.operator(
          parseFloat(this.sum),
          parseFloat(this.previous)
        )}`;
      }
      this.previous = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: 0 auto;
  width: 20rem;
  font-size: 40px;
  display: grid;
  border: 2px solid black;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(50px, auto);
}
.display {
  grid-column: 1/5;
  background: rgba(43, 74, 255, 0.411);
}
.zero {
  grid-column: 1/3;
}
.btn-calc {
  background: rgb(245, 243, 243);
  border: 1px solid #333;
}
.btn-calc:hover {
  font-weight: bolder;
  cursor: pointer;
}
.btn-right {
  background: rgb(197, 196, 196);
}
</style>
