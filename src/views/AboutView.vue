<template>
  <div class="container">
    <p>Nilai: {{ nilai }} Nilai Selisih Terbesar: {{ selisihT }}</p>
    <input
      v-model="n"
      class="form-control"
      type="number"
      min="1"
      @input="generatePattern"
      placeholder="input 4 atau 5"
    />
    <div v-for="row in n" :key="row">
      <div>
        <span v-for="col in row" :key="col">
          {{ col }}
        </span>
        <span>**</span>
        <span v-for="col in n - row" :key="col">
          {{ col + row + 1 + 2 }}
        </span>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      n: 4,
      nilai: [10, 7, 5, 8, 11, 9, 1],
      selisihT: 0
    }
  },
  mounted() {
    this.selisihT = this.selisih(this.nilai)
  },
  methods: {
    selisih(arr) {
      if (arr.length < 2) {
        return 0
      }

      let selisihT = 0
      let minValue = arr[0]

      for (let i = 1; i < arr.length; i++) {
        const selisih = arr[i] - minValue
        if (selisih > selisihT) {
          selisihT = selisih
        }
        if (arr[i] < minValue) {
          minValue = arr[i]
        }
      }

      return selisihT
    }
  }
}
</script>
