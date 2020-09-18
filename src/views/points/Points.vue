<template>
  <div class="ltBlock">
    <div class="profPoints rounded bg-white mt-4 py-4 px-3 d-flex align-items-start">
      <i class="bg-white themeColor shadow-lg rounded-circle icon-star p-4 border"></i>
      <div class="flex-grow-1 pl-3">
        <strong class="themeColor">2800</strong>
        <p>Redeemable Points</p>
        <hr />
        <a href="#" class="themeColor">
          View Rewards & Claim
          <i class="ml-2 fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
    <div class="profNav rounded bg-white px-4 py-2 mt-3 mb-4">
      <a href="#" class="d-flex align-items-center">
        <i
          class="d-flex align-items-center justify-content-center icon-hoursglass themeColor shadow-lg rounded-circle border"
        ></i>
        <span class="flex-grow-1 text-secondary py-4 mx-3 border-bottom">
          Latest Exclusion
          <br />Period Happy Cents
        </span>
      </a>
      <a href="#" class="d-flex align-items-center">
        <i
          class="d-flex align-items-center justify-content-center icon-star themeColor shadow-lg rounded-circle border"
        ></i>
        <span class="position-relative flex-grow-1 text-secondary py-4 mx-3 border-bottom">
          Available Happy Cents
          <small class="d-block text-dark">
            <u>Get more happy cents</u>
          </small>
        </span>
      </a>
      <a href="#" class="d-flex align-items-center">
        <i
          class="d-flex align-items-center justify-content-center icon-history themeColor shadow-lg rounded-circle border"
        ></i>
        <span class="position-relative flex-grow-1 text-secondary py-4 mx-3">
          Redeemed Happy Cents
          <small class="d-block text-dark">
            <u>View transaction history</u>
          </small>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import "./styles.less";
export default {
  name: "Points",
  components: {}
};
</script>
