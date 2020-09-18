<template>
  <div class="loyaltyWrapper" ng-show="loyaltyViews === 1">
    <nav class="loyalMainNav">
      <a href="#" @click.prevent="activeView = 1" :class="{active: activeView === 1}">
        <i class="icon-home"></i>
      </a>
      <a href="#" @click.prevent="activeView = 2" :class="{active: activeView === 2}">
        <i class="icon-earn"></i>
        <span>Earn</span>
      </a>
      <a href="#" @click.prevent="activeView = 3" :class="{active: activeView === 3}">
        <i class="icon-referral"></i>
        <span>Referral</span>
      </a>
      <a href="#" @click.prevent="activeView = 4" :class="{active: activeView === 4}">
        <i class="icon-claim"></i>
        <span>Claim</span>
      </a>
    </nav>
    <div class="loyalViews">
      <div class="homeView" v-if="activeView === 1">
        <div class="loyalWelcome my-4">
          <p>Welcome to Happy Perks, a rewards program! Its FREE to join & filled with Perks!</p>
          <p class="themeColor">
            <strong>Earn 250 welcome Points!</strong>
          </p>
          <button class="btn">Create Account</button>
          <hr />
          <p>
            Already have an account?
            <a href="#" class="themeColor">Sign in</a>
          </p>
        </div>
        <div class="loyalCover my-4">
          <span>Get 1 points for every $1 you spend!</span>
        </div>
        <div class="swiper-container earnSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="loyalBirthdayHeader d-flex justify-content-between"
                data-toggle="collapse"
                href="#earn1"
                role="button"
                aria-expanded="false"
                aria-controls="earn1"
              >
                <div>
                  <i class="icon-cake"></i>
                  <span class="pl-2">Enter your birthday</span>
                </div>
                <div>
                  <div class="starPoints">100</div>
                </div>
              </div>
              <div class="collapse mx-3" id="earn1">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid.
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="loyalBirthdayHeader d-flex justify-content-between"
                data-toggle="collapse"
                href="#earn2"
                role="button"
                aria-expanded="false"
                aria-controls="earn2"
              >
                <div>
                  <i class="icon-cake"></i>
                  <span class="pl-2">Enter your birthday</span>
                </div>
                <div>
                  <div class="starPoints">100</div>
                </div>
              </div>
              <div class="collapse mx-3" id="earn2">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid.
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="loyalBirthdayHeader d-flex justify-content-between"
                data-toggle="collapse"
                href="#earn3"
                role="button"
                aria-expanded="false"
                aria-controls="earn3"
              >
                <div>
                  <i class="icon-cake"></i>
                  <span class="pl-2">Enter your birthday</span>
                </div>
                <div>
                  <div class="starPoints">100</div>
                </div>
              </div>
              <div class="collapse mx-3" id="earn3">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid.
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination-wrap">
            <div class="swiper-pagination"></div>
          </div>
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>-->
        </div>
        <div class="accordion loyalEarn my-4" id="accordionExample">
          <div class="card">
            <div
              class="card-header d-flex justify-content-between align-items-center bg-white collapsed"
              id="headingOne"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <div>
                <i class="icon-play-right1"></i>
                <span class="pl-2">Enter your birthday</span>
              </div>
              <div>
                <i
                  class="icon-claim d-inline-flex align-items-center justify-content-center mx-2 border border-dark rounded-circle"
                ></i>
                <div class="starPoints">100</div>
              </div>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica.
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="card-header d-flex justify-content-between align-items-center bg-white collapsed"
              id="headingTwo"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div>
                <i class="icon-play-right1"></i>
                <span class="pl-2">Enter your birthday</span>
              </div>
              <div>
                <i
                  class="icon-claim d-inline-flex align-items-center justify-content-center mx-2 border border-dark rounded-circle"
                ></i>
                <div class="starPoints">100</div>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="card-header d-flex justify-content-between align-items-center bg-white collapsed"
              id="headingThree"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div>
                <i class="icon-play-right1"></i>
                <span class="pl-2">Enter your birthday</span>
              </div>
              <div>
                <i
                  class="icon-claim d-inline-flex align-items-center justify-content-center mx-2 border border-dark rounded-circle"
                ></i>
                <div class="starPoints">100</div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        <p class="text-center my-4">
          <a href="#" style="color: #ccc;">continue shopping</a>
        </p>
      </div>
      <div class="earnView" v-if="activeView === 2">
        <div class="loyalNotify my-3">
          <p>
            Google's free service instantly translates words, phrases, and web pages between English
            and
            over
            100.
          </p>
          <span>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
          </span>
        </div>
        <div class="loyalNotify my-3">
          <p>
            Bem-vinda! Você só precisa confirmar que podemos enviar seus e-mails de atividades do
            programa de recompensas para você.
          </p>
          <span class="btn btn-theme rounded-pill">okay</span>
        </div>
        <div class="loyalCover my-4">
          <span>Get 1 points for every $1 you spend!</span>
        </div>
        <div class="loyalBirthdayHeader d-flex justify-content-between">
          <div>
            <i class="icon-cake"></i>
            <span class="pl-2">Enter your birthday</span>
          </div>
          <div>
            <div class="starPoints">100</div>
          </div>
        </div>
        <div class="bonusBox d-flex align-items-center flex-nowrap my-4">
          <figure>
            <i class="icon-claim"></i>
          </figure>
          <div>
            <h5>
              Bonus Points text can come here.
              <br />2nd line to be here
            </h5>
            <p>Bonus points description</p>
          </div>
        </div>
        <p class="text-center my-4">
          <a href="#" style="color: #ccc;">continue shopping</a>
        </p>
      </div>
      <div class="referralView" v-if="activeView === 3">
        <h5 class="text-center">Refer friends. Earn rewards!</h5>
        <div class="referralInfoBox d-flex justify-content-between pt-5">
          <div class="text-center p-3">
            <i class="icon-refer-you"></i>
            <h5 class="mt-2">You Get</h5>
            <p class="mb-0">10% off coupon on total order value + 100 reward points</p>
          </div>
          <div class="text-center p-3">
            <i class="icon-refer-friend"></i>
            <h5 class="mt-2">You Friends Get</h5>
            <p class="mb-0">100 Happy Cents off on total order value</p>
          </div>
        </div>
        <div class="login-signup themeBg px-5 py-3 my-4 text-center rounded">
          <p>Sign up now to Earn rewards for inviting your friends to sign up to our promotion</p>
          <a href="#" class="btn btn-outline-light my-3">Create Account</a>
          <hr />
          <p class="mb-0">
            <small>Earn 100 happy cents welcome points!</small>
          </p>
        </div>
        <div class="ifDash">
          <div class="inviteFriends themeBg px-5 py-3 my-4 text-center rounded">
            <p>Earn rewards for inviting your friends to sign up to our promotion</p>
            <div class="border border-light text-left py-2 pl-3 pr-5 position-relative copyBox">
              https://bit.ly/3gH3ovC
              <button class="position-absolute btn btn-ligh2">
                <i class="icon-copy"></i>
              </button>
            </div>
            <nav class="mt-3 px-3 d-flex justify-content-around themeTextColor">
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-whatsapp"></i>
              </a>
            </nav>
          </div>
          <div class="inviteDash themeColor d-flex p-3 bg-white rounded">
            <div
              class="text-body p-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center border-right"
            >
              <p class="m-0">Referral Goal</p>
              <p class="m-2">
                <i class="fas fa-check-circle themeColor"></i>
                <i class="fas fa-check-circle themeColor"></i>
                <i class="fas fa-check-circle themeColor"></i>
                <i class="fas fa-circle text-secondary"></i>
                <i class="fas fa-circle text-secondary"></i>
              </p>
              <p class="m-0">2/5</p>
            </div>
            <div
              class="text-body p-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center"
            >
              <p class="m-0 mb-2">Referral Rewards</p>
              <p class="m-0">
                <u>1000 Points</u>
              </p>
              <p class="m-0">
                <u>04 Coupons</u>
              </p>
            </div>
          </div>
        </div>
        <div class="referralCouponList">
          <div class="rCard shadow-sm bg-white rounded d-flex align-items-start mb-3">
            <div class="text-secondary p-3 text-right date">
              <small>
                24 Apr. 2020
                <br />14:22:03
              </small>
            </div>
            <div class="p-3 pl-4">
              <div class="badge badge-pill themeBg mb-3">
                <i class="icon-star"></i> 1000 Happy
                Cents
              </div>
              <h6>Coupon Details</h6>
              <p
                class="m-0 text-secondary"
              >Incognito support added. Be sure to check the Options to see...</p>
              <div class="coupon rounded py-2 px-3 mt-4">
                <span>GRkY1URWG2</span>
                <a href="#" class="p-2">
                  <i class="icon-copy"></i>
                </a>
              </div>
              <div class="d-flex mt-3">
                <img src="@/assets/images/profile.png" class="rounded-circle" />
                <span class="pl-2">robert.junior@starwars.net</span>
              </div>
            </div>
          </div>
          <div class="rCard shadow-sm bg-white rounded d-flex align-items-start mb-3">
            <div class="text-secondary p-3 text-right date">
              <small>
                24 Apr. 2020
                <br />14:22:03
              </small>
            </div>
            <div class="p-3 pl-4">
              <div class="badge badge-pill themeBg mb-3">
                <i class="icon-star"></i> 1000 Happy
                Cents
              </div>
              <h6>Coupon Details</h6>
              <p
                class="m-0 text-secondary"
              >Incognito support added. Be sure to check the Options to see...</p>
              <div class="coupon rounded py-2 px-3 mt-4">
                <span>GRkY1URWG2</span>
                <a href="#" class="p-2">
                  <i class="icon-copy"></i>
                </a>
              </div>
              <div class="d-flex mt-3">
                <img src="@/assets/images/profile.png" class="rounded-circle" />
                <span class="pl-2">robert.junior@starwars.net</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="claimView" v-if="activeView === 4">
        <div class="totalClaims py-3">
          <div class="badge badge-pill themeBg">
            <i class="icon-star"></i> 17750 Happy Cents
          </div>
        </div>
        <div class="claimList">
          <div
            @click="activeClaimCard = 1"
            :class="{active : activeClaimCard === 1}"
            class="claimCard mb-4 d-flex rounded shadow"
          >
            <figure class="m-0">
              <img class="w-100" src="@/assets/images/2.jpg" alt />
              <figcaption class="bg-white position-relative p-2 m-0">
                <span>Gift name</span>
                <div class="floater rounded-circle bg-white shadow-lg">
                  <p>1000</p>
                  <small>HAPPY CENTS</small>
                </div>
              </figcaption>
            </figure>
            <div v-if="activeClaimCard === 1" class="bg-white p-2">
              <h6>$10 Off Coupons</h6>
              <p>Redeem $5 off coupon for 500 points</p>
              <a
                href="#"
                ng-click="showClaim=true; $event.preventDefault();"
                class="btn btn-theme"
              >Claim now</a>
            </div>
          </div>
          <div
            @click="activeClaimCard = 2"
            :class="{active : activeClaimCard === 2}"
            class="claimCard mb-4 d-flex rounded shadow"
          >
            <figure class="m-0">
              <img class="w-100" src="@/assets/images/2.jpg" alt />
              <figcaption class="bg-white position-relative p-2 m-0">
                <span>Gift name</span>
                <div class="floater rounded-circle bg-white shadow-lg">
                  <p>1000</p>
                  <small>HAPPY CENTS</small>
                </div>
              </figcaption>
            </figure>
            <div v-if="activeClaimCard === 2" class="bg-white p-2">
              <h6>$10 Off Coupons</h6>
              <p>Redeem $5 off coupon for 500 points</p>
              <a
                href="#"
                ng-click="showClaim=true; $event.preventDefault();"
                class="btn btn-theme"
              >Claim now</a>
            </div>
          </div>
          <div
            @click="activeClaimCard = 3"
            :class="{active : activeClaimCard === 3}"
            class="claimCard mb-4 d-flex rounded shadow"
          >
            <figure class="m-0">
              <img class="w-100" src="@/assets/images/2.jpg" alt />
              <figcaption class="bg-white position-relative p-2 m-0">
                <span>Gift name</span>
                <div class="floater rounded-circle bg-white shadow-lg">
                  <p>1000</p>
                  <small>HAPPY CENTS</small>
                </div>
              </figcaption>
            </figure>
            <div v-if="activeClaimCard === 3" class="bg-white p-2">
              <h6>$10 Off Coupons</h6>
              <p>Redeem $5 off coupon for 500 points</p>
              <a
                href="#"
                ng-click="showClaim=true; $event.preventDefault();"
                class="btn btn-theme"
              >Claim now</a>
            </div>
          </div>
          <div
            @click="activeClaimCard = 4"
            :class="{active : activeClaimCard === 4}"
            class="claimCard mb-4 d-flex rounded shadow"
          >
            <figure class="m-0">
              <img class="w-100" src="@/assets/images/2.jpg" alt />
              <figcaption class="bg-white position-relative p-2 m-0">
                <span>Gift name</span>
                <div class="floater rounded-circle bg-white shadow-lg">
                  <p>1000</p>
                  <small>HAPPY CENTS</small>
                </div>
              </figcaption>
            </figure>
            <div v-if="activeClaimCard === 4" class="bg-white p-2">
              <h6>$10 Off Coupons</h6>
              <p>Redeem $5 off coupon for 500 points</p>
              <a
                href="#"
                ng-click="showClaim=true; $event.preventDefault();"
                class="btn btn-theme"
              >Claim now</a>
            </div>
          </div>
          <div
            @click="activeClaimCard = 5"
            :class="{active : activeClaimCard === 5}"
            class="claimCard mb-4 d-flex rounded shadow"
          >
            <figure class="m-0">
              <img class="w-100" src="@/assets/images/2.jpg" alt />
              <figcaption class="bg-white position-relative p-2 m-0">
                <span>Gift name</span>
                <div class="floater rounded-circle bg-white shadow-lg">
                  <p>1000</p>
                  <small>HAPPY CENTS</small>
                </div>
              </figcaption>
            </figure>
            <div v-if="activeClaimCard === 5" class="bg-white p-2">
              <h6>$10 Off Coupons</h6>
              <p>Redeem $5 off coupon for 500 points</p>
              <a
                href="#"
                ng-click="showClaim=true; $event.preventDefault();"
                class="btn btn-theme"
              >Claim now</a>
            </div>
          </div>
        </div>
        <!-- <div
          class="claimConfirm d-flex align-items-center justify-content-center"
        >
          <div class="text-center bg-white p-5 rounded">
            <p class="mb-4">Are you sure want to claim this?</p>
            <nav class="d-flex">
              <button class="w-50 mx-2 btn btn-outline-dark" ng-click="showClaim=false">Cancel</button>
              <button class="w-50 mx-2 btn btn-theme">Ok</button>
            </nav>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import './styles.less';
import '@/assets/styles/icons.css';
import '@/assets/styles/common.less';

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      activeView: 1,
      activeClaimCard: null
    }
  }
};
</script>
