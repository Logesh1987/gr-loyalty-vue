<template>
  <div class="profileBlock">
    <div class="totalPoints shadow my-3">
      <i class="icon-star"></i>
      <strong class="px-3">28500</strong>
      <span>
        Redeemable
        <br />Points
      </span>
    </div>
    <div class="shadow-lg bg-white rounded p-4 position-relative mb-4">
      <div class="profilePic">
        <span class="shadow bg-white">
          <i class="icon-profile"></i>
        </span>
      </div>
      <h5 class="w-75">Complete your profile and get 500 points!</h5>
      <p>
        <i class="fas fa-envelope"></i>
        robert.downey@gmail.com
      </p>
      <form class="m-0">
        <div class="formController">
          <label for>Name</label>
          <input type="text" />
        </div>
        <div class="formController">
          <label for>Gender</label>
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="formController">
          <label for>Country</label>
          <select>
            <option value="United States">United States</option>
            <option value="India">India</option>
          </select>
        </div>
        <div class="text-right mt-4">
          <button class="btn btn-outline-secondary mr-2">Cancel</button>
          <button type="submit" class="btn btn-theme">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import './styles.less';
export default {
  name: "Profile",
  components: {}
};
</script>
