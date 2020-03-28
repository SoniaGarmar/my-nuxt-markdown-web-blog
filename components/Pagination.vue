<template>
  <ul id="pagination">
    <li>
      <button
        @click="onClickFirstPage"
         :disabled="isFirstPage"

      >
        <font-awesome-icon :icon="['fas', 'angle-double-left']"/>
      </button>
    </li>

    <li>
      <button
        @click="onClickPreviousPage"
        :disabled="isFirstPage"
      >
         <font-awesome-icon :icon="['fas', 'angle-left']"/>
      </button>
    </li>

    <li v-for="button in pageButtons" :key="button.text">
      <button
        @click="onClickMiddlePage(button.text)"
         :disabled="button.isDisabled"

      >
        {{ button.text }}
      </button>
    </li>

    <li>
      <button
        @click="onClickNextPage"
         :disabled="isLastPage"
      >
        <font-awesome-icon :icon="['fas', 'angle-right']"/>
      </button>
    </li>

    <li>
      <button
        @click="onClickLastPage"
         :disabled="isLastPage"
      >
        <font-awesome-icon :icon="['fas', 'angle-double-right']"/>
      </button>
    </li>
  </ul>

</template>

<script>
export default {
props: {
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    },
    totalItems: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    maxButtons: {
      type: Number,
      required: false,
      default: 10
    },
  },



computed: {
    totalPages(){
      return this.totalItems/this.itemsPerPage
    },

     firstPageButton() {
      return this.currentPage === 1 ? 1
       : this.currentPage === this.totalPages ?
         this.totalPages - this.maxButtons : this.currentPage - 1;
    },

    pageButtons() {
      const buttons = [];

      for (let i = this.firstPageButton;

        i <= Math.min(this.firstPageButton + this.maxButtons - 1, this.totalPages); i+= 1 ) {
        buttons.push({
          text: i,
          isDisabled: i === this.currentPage
        });
      }

      return buttons;
    },


   isFirstPage() {
      return this.currentPage === 1;
    },

  isLastPage() {
      return this.currentPage === this.totalPages;
  }

  },

   methods: {
    onClickFirstPage() {
      this.$emit('pagebuttonclicked', 1);
    },

    onClickPreviousPage() {
      this.$emit('pagebuttonclicked', this.currentPage - 1);
    },

    onClickMiddlePage(pageButton) {
      this.$emit('pagebuttonclicked', pageButton);
    },

    onClickNextPage() {
      this.$emit('pagebuttonclicked', this.currentPage + 1);
    },

    onClickLastPage() {
      this.$emit('pagebuttonclicked', this.totalPages);
    },


  }

};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";

#pagination {
  list-style-type: none;
  margin: 60px 0;
  text-align: center;
  li{
      display: inline-block;
      margin:0;
      button {
        background: $white;
        border: none;
        color: $grey-dark;
        &:disabled {
           opacity: 0.6;
        }
      }

  }
}
</style>
