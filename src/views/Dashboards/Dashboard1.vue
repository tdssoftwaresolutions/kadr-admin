<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card body-class=" profile-page p-0">
          <template v-slot:body>
            <div class="profile-header">
              <div class="cover-container">
                <b-img :src="require('../../assets/images/page-img/profile-bg.jpg')" alt="profile-bg" rounded fluid style="width:100%;"/>
                <ul class="header-nav d-flex flex-wrap justify-end p-0 m-0" style="display:none !important">
                  <li><b-link href="javascript:void();"><i class="ri-pencil-line"></i></b-link></li>
                  <li><b-link href="javascript:void();"><i class="ri-settings-4-line"></i></b-link></li>
                </ul>
              </div>
              <div class="profile-info p-4">
                <b-row>
                  <b-col md="6" sm="12">
                    <div class="user-detail pl-5">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="profile-img pr-4">
                          <b-img :src="require('../../assets/images/user/11.png')" alt="profile-img" fluid class="avatar-130" />
                        </div>
                        <div class="profile-detail d-flex align-items-center">
                          <h3>Rahul Sharma</h3>
                          <p class="m-0 pl-3"> - Ramsun Interior</p>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="6" sm="12" style="display: none;">
                    <ul class="nav nav-pills d-flex align-items-end float-right profile-feed-items p-0 m-0">
                      <li>
                        <b-link class="nav-link active" data-toggle="pill" href="#profile-feed">feed</b-link>
                      </li>
                      <li>
                        <b-link class="nav-link" data-toggle="pill" href="#profile-activity">Activity</b-link>
                      </li>
                      <li>
                        <b-link class="nav-link" data-toggle="pill" href="#profile-friends">friends</b-link>
                      </li>
                      <li>
                        <b-link class="nav-link" data-toggle="pill" href="#profile-profile">profile</b-link>
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col sm="12">
        <b-row>
          <b-col lg="3" class="profile-left">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Mediator</h4>
                </template>
                <template v-slot:body>
                  <ul class="media-story m-0 p-0">
                    <li v-for="(item,index) in story" :key="index" class="d-flex align-items-center" :class="item.isActive +' '+ item.class">
                      <b-img :src="item.image" alt="story-img" rounded="circle" fluid />
                      <div class="stories-data ml-3">
                        <h5>{{ item.title }}</h5>
                        <p class="mb-0">{{ item.time }}</p>
                      </div>
                    </li>
                  </ul>
                </template>
              </iq-card>
          </b-col>
          <b-col lg="6" class="profile-center">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">About</h4>
              </template>
              <template v-slot:body>
                <div class="about-info m-0 p-0">
                  <b-row>
                    <b-col cols="12"><p>Lorem ipsum dolor sit amet, contur adipiscing elit.</p></b-col>
                    <b-col cols="3">Email:</b-col>
                    <b-col cols="9"><b-link href="mailto:nikjone@demoo.com"> nikjone@demoo.com </b-link></b-col>
                    <b-col cols="3">Phone:</b-col>
                    <b-col cols="9"><b-link href="tel:001 2351 256 12">001 2351 256 12</b-link></b-col>
                    <b-col cols="3">Location:</b-col>
                    <b-col cols="9">USA</b-col>
                  </b-row>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="3" class="profile-right">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Timeline</h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="timelineItems" />
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { sofbox } from '../../config/pluginInit'
export default {
  name: 'Profile',
  mounted () {
    sofbox.index()
    const userType = this.$cookies.get('type')
    if (!userType) {
      this.$router.push({ path: '/auth/sign-in' })
    }
  },
  data () {
    return {
      galary: [
        { image: require('../../assets/images/page-img/g1.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g2.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g3.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g4.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g5.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g6.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g7.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g8.jpg'), href: 'javascript:void();' },
        { image: require('../../assets/images/page-img/g9.jpg'), href: 'javascript:void();' }
      ],
      timelineItems: [
        {
          color: 'success',
          title: 'Registration',
          right: '16 September 2024',
          description: 'Registration on our portal kADR.live',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Other party details',
          right: '20 October 2024',
          description: 'Share other party details with our team to get the mediation started',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Payment',
          right: '22 October 2024',
          description: 'Payment to initiate mediation',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Mediator Assignment',
          right: '22 October 2024',
          description: 'Assignment of Mediator',
          child: {
            type: 'img',
            items: [
              require('../../assets/images/user/05.jpg')
            ]
          }
        },
        {
          color: 'danger',
          title: 'Client Call',
          right: '19 November 2019',
          description: 'Call scheduled with you and customer',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'warning',
          title: 'Mega Event',
          right: '15 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        }
      ],
      friends: [
        { name: 'Paul Molive', role: 'Web Designer', image: require('../../assets/images/user/01.jpg') },
        { name: 'Paul Molive', role: 'trainee', image: require('../../assets/images/user/01.jpg') },
        { name: 'Anna Mull', role: 'Web Developer', image: require('../../assets/images/user/02.jpg') },
        { name: 'Paige Turner', role: 'trainee', image: require('../../assets/images/user/03.jpg') },
        { name: 'Barb Ackue', role: 'Web Designer', image: require('../../assets/images/user/04.jpg') },
        { name: 'Greta Life', role: 'Tester', image: require('../../assets/images/user/05.jpg') },
        { name: 'Ira Membrit', role: 'Android Developer', image: require('../../assets/images/user/06.jpg') },
        { name: 'Pete Sariya', role: 'Web Designer', image: require('../../assets/images/user/07.jpg') }
      ],
      userBio: [
        { title: 'Joined', description: 'November 15, 2012' },
        { title: 'Lives', description: 'United States of America' },
        { title: 'Email', description: '<a href="mailto:nikjone@gmail.com"> nikjone@gmail.com</a>' },
        { title: 'Url', description: '<a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank"> www.bootstrap.com </a>' },
        { title: 'Contact', description: '<a href="tel:001 4544 565 456">(001) 4544 565 456</a>' }
      ],
      story: [
        { title: 'Karan VJ', time: 'Senior Mediator (kADR)', image: require('../../assets/images/user/05.jpg'), class: 'mb-4', isActive: 'active' }
      ],
      suggestions: [
        { name: 'Paul Molive', mutual_friend: '4 mutual friends', image: require('../../assets/images/user/01.jpg') },
        { name: 'Paul Molive', mutual_friend: '4 mutual friends', image: require('../../assets/images/user/01.jpg') },
        { name: 'Anna Mull', mutual_friend: '6 mutual friends', image: require('../../assets/images/user/02.jpg') },
        { name: 'Paige Turner', mutual_friend: '8 mutual friends', image: require('../../assets/images/user/03.jpg') },
        { name: 'Barb Ackue', mutual_friend: '1 mutual friends', image: require('../../assets/images/user/04.jpg') },
        { name: 'Greta Life', mutual_friend: '3 mutual friends', image: require('../../assets/images/user/05.jpg') },
        { name: 'Ira Membrit', mutual_friend: '12 mutual friends', image: require('../../assets/images/user/06.jpg') },
        { name: 'Pete Sariya', mutual_friend: '2 mutual friends', image: require('../../assets/images/user/07.jpg') }
      ],
      news: [
        { description: 'there is a meetup in your city on friday at 19:00.<a href="#">see details</a>' },
        { description: '20% off coupon on selected items at pharmaprix' }
      ],
      twitterFeed: [
        {
          image: require('../../assets/images/user/01.jpg'),
          name: 'Anna Sthesia',
          username: '@anna59',
          isVerify: true,
          tags: [
            {
              link: '#',
              text: 'Html'
            },
            {
              link: '#',
              text: 'Bootstrap'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          image: require('../../assets/images/user/02.jpg'),
          name: 'Paige Turner',
          username: '@paige30',
          isVerify: true,
          tags: [
            {
              link: '#',
              text: 'Js'
            },
            {
              link: '#',
              text: 'Bootstrap'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          image: require('../../assets/images/user/03.jpg'),
          name: 'Greta Life',
          username: '@greta07',
          isVerify: false,
          tags: [
            {
              link: '#',
              text: 'Html'
            },
            {
              link: '#',
              text: 'CSS'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        }
      ]
    }
  }
}
</script>
