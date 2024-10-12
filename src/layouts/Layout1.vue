<template>
  <div>
    <Loader/>
    <vue-scroll-progress-bar @complete="handleComplete" height="0.2rem" backgroundColor="linear-gradient(to right, #067bfe, #0885ff)" style="z-index: 10000" />
    <div class="wrapper">
      <!-- Sidebar  -->
      <SideBarStyle1 :items="sidebar" :logo="logo" />
      <!-- TOP Nav Bar -->
      <NavBarStyle1 title="Dashboard" :homeURL="{ name: 'dashboard1.home' }" :logo="logo">
        <template slot="responsiveRight">
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item">
              <a class="search-toggle iq-waves-effect" href="#"><i class="ri-search-line"></i></a>
              <form action="#" class="search-box">
                <input type="text" class="text search-input" placeholder="Type here to search..." />
              </form>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="search-toggle iq-waves-effect"><i class="ri-mail-line"></i></a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
                    </div>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/01.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Nik Emma Watson</h6>
                          <small class="float-left font-size-12">13 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/02.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                          <small class="float-left font-size-12">20 Apr</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/03.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Why do we use it?</h6>
                          <small class="float-left font-size-12">30 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/04.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Variations Passages</h6>
                          <small class="float-left font-size-12">12 Sep</small>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/05.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Lorem Ipsum generators</h6>
                          <small class="float-left font-size-12">5 Dec</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item iq-film-block" v-show="showNavTicket" @click="rightSideBar">
              <a href="javascript:void(0)" class="iq-waves-effect"><i class="ri-film-line" />
                <span class="menu-tag">{{ numberOfTicket }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="iq-waves-effect"><i class="ri-shopping-cart-2-line"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="search-toggle iq-waves-effect"><i class="ri-notification-2-line"></i></a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-danger p-3">
                      <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                    </div>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">New Order Recieved</h6>
                          <small class="float-right font-size-12">23 hrs ago</small>
                          <p class="mb-0">Lorem is simply</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/01.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Emma Watson Nik</h6>
                          <small class="float-right font-size-12">Just Now</small>
                          <p class="mb-0">95 MB</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" src="images/user/02.jpg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">New customer is join</h6>
                          <small class="float-right font-size-12">5 days ago</small>
                          <p class="mb-0">Jond Nik</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card" >
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40" src="images/small/jpg.svg" alt="">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Updates Available</h6>
                          <small class="float-right font-size-12">Just Now</small>
                          <p class="mb-0">120 MB</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item iq-full-screen"><a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a></li>
          </ul>
        </template>
        <template slot="right">
          <ul class="navbar-list">
            <li>
              <a href="#" class="search-toggle iq-waves-effect bg-primary text-white">
                <img :src="userProfile" class="img-fluid rounded" alt="user">
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white line-height">Hello Nik jone</h5>
                      <span class="text-white font-size-12">Available</span>
                    </div>
                    <a href="#" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-file-user-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">My Profile</h6>
                          <p class="mb-0 font-size-12">View personal profile details.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-success-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-success">
                          <i class="ri-profile-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Edit Profile</h6>
                          <p class="mb-0 font-size-12">Modify your personal details.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-danger-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-danger">
                          <i class="ri-account-box-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Account settings</h6>
                          <p class="mb-0 font-size-12">Manage your account parameters.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-secondary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-secondary">
                          <i class="ri-lock-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">Privacy Settings</h6>
                          <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                        </div>
                      </div>
                    </a>
                    <div class="d-inline-block w-100 text-center p-3">
                      <a class="iq-bg-danger iq-sign-btn" href="#" role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </NavBarStyle1>
      <!-- TOP Nav Bar END -->
      <div id="content-page" class="content-page">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
    </div>
    <FooterStyle1>
      <template v-slot:left>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li class="list-inline-item"><a href="#">Terms of Use</a></li>
      </template>
      <template v-slot:right>
        Copyright 2020 <a href="#">Sofbox</a> All Rights Reserved.
      </template>
    </FooterStyle1>
  </div>
</template>
<script>
import Loader from '../components/sofbox/loader/Loader'
import SideBarStyle1 from '../components/sofbox/sidebars/SideBarStyle1'
import NavBarStyle1 from '../components/sofbox/navbars/NavBarStyle1'
import SideBarItems from '../FackApi/json/SideBar'
import profile from '../assets/images/user/1.jpeg'
import logo from '../assets/logo.jpeg'
import { sofbox } from '../config/pluginInit'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout1',
  components: {
    Loader, SideBarStyle1, NavBarStyle1
  },
  mounted () {
    sofbox.mainIndex()
  },
  computed: {
    ...mapGetters({
      showNavTicket: 'TicketBooking/navTicket',
      numberOfTicket: 'TicketBooking/numberOfTicket'
    })
  },
  watch: {
  },
  // sidebarTicket
  data () {
    return {
      sidebar: SideBarItems,
      userProfile: profile,
      logo: logo
    }
  },
  methods: {
    handleComplete () {},
    rightSideBar () {
      if (this.numberOfTicket > 0) {
        this.$store.dispatch('TicketBooking/displaySidebarTicket', true)
      }
    }
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
</style>
