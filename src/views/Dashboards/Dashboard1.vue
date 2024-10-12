<template>
  <b-container fluid>
    <RightSideBarStyle1>
      <iq-card class="shadow-none">
        <template v-slot:headerTitle>
          <h6 class="card-title">Active Users</h6>
        </template>
        <template v-slot:headerAction>
          <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
            <template v-slot:button-content>
              <span><i class="ri-more-2-fill"></i></span>
            </template>
            <b-dropdown-item><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
            <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
            <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
            <b-dropdown-item><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
            <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
          </b-dropdown>
        </template>
        <template v-slot:body>
          <div class="media align-items-center mb-4" v-for="(item,index) in usersList" :key="index">
            <div :class="`iq-profile-avatar ${item.isActive ? `status-online` : 'status-away'}`">
              <img class="rounded-circle avatar-60" :src="item.image" :alt="item.name">
            </div>
            <div class="media-body ml-3">
              <h6 class="mb-0"><a href="#">{{ item.name }}</a></h6>
              <p class="mb-0">{{ item.role }}</p>
            </div>
          </div>
        </template>
      </iq-card>
    </RightSideBarStyle1>
    <b-row>
      <b-col lg="3" md="6">
        <iq-card class-name="overflow-hidden" body-class="pb-0">
          <template v-slot:body>
            <div class="rounded-circle iq-card-icon iq-bg-primary"><i class="ri-exchange-dollar-fill"></i></div>
            <span class="float-right line-height-6">Net Worth</span>
            <div class="clearfix"></div>
            <div class="text-center">
              <h2 class="mb-0"><span class="counter">65</span><span>M</span></h2>
              <p class="mb-0 text-secondary line-height"><i class="ri-arrow-up-line text-success mr-1"></i><span class="text-success">10%</span> Increased</p>
            </div>
          </template>
          <ApexChart element="chart-1" :chartOption="chart1"/>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card class-name="overflow-hidden" body-class="pb-0">
          <template v-slot:body>
            <div class="rounded-circle iq-card-icon iq-bg-warning"><i class="ri-bar-chart-grouped-line"></i></div>
            <span class="float-right line-height-6">Todays Gains</span>
            <div class="clearfix"></div>
            <div class="text-center">
              <h2 class="mb-0"><span>$</span><span class="counter">4500</span></h2>
              <p class="mb-0 text-secondary line-height"><i class="ri-arrow-up-line text-success mr-1"></i><span class="text-success">20%</span> Increased</p>
            </div>
          </template>
          <ApexChart element="chart-2" :chartOption="chart2"/>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card class-name="overflow-hidden" body-class="pb-0">
          <template v-slot:body>
            <div class="rounded-circle iq-card-icon iq-bg-success"><i class="ri-group-line"></i></div>
            <span class="float-right line-height-6">Total Users</span>
            <div class="clearfix"></div>
            <div class="text-center">
              <h2 class="mb-0"><span class="counter">96.6</span><span>K</span></h2>
              <p class="mb-0 text-secondary line-height"><i class="ri-arrow-up-line text-success mr-1"></i><span class="text-success">30%</span> Increased</p>
            </div>
          </template>
          <ApexChart element="chart-3" :chartOption="chart3"/>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card class-name="overflow-hidden" body-class="pb-0">
          <template v-slot:body>
            <div class="rounded-circle iq-card-icon iq-bg-danger"><i class="ri-shopping-cart-line"></i></div>
            <span class="float-right line-height-6">Orders Received</span>
            <div class="clearfix"></div>
            <div class="text-center">
              <h2 class="mb-0"><span class="counter">15.5</span><span>K</span></h2>
              <p class="mb-0 text-secondary line-height"><i class="ri-arrow-down-line text-danger mr-1"></i><span class="text-danger">10%</span> Increased</p>
            </div>
          </template>
          <ApexChart element="chart-4" :chartOption="chart4"/>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card class-name="overflow-hidden">
          <template v-slot:headerTitle>
            <h4 class="card-title">Monthly sales trend </h4>
          </template>
          <template v-slot:headerAction>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#" class="nav-link active">Latest</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Month</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">All Time</a>
              </li>
            </ul>
          </template>
          <template v-slot:body>
            <div class="d-flex justify-content-around">
              <div class="price-week-box mr-5">
                <span>Current Week</span>
                <h2>$<span class="counter">180</span> <i class="ri-funds-line text-success font-size-18"></i></h2>
              </div>
              <div class="price-week-box">
                <span>Previous Week</span>
                <h2>$<span class="counter">52.55</span> <i class="ri-funds-line text-danger font-size-18"></i></h2>
              </div>
            </div>
          </template>
          <ApexChart element="chart-5" :chartOption="chart5"/>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="animation-card" bodyClass="p-0">
          <template v-slot:body>
            <div class="an-text">
              <span>Quarterly Target </span>
              <h2 class="display-4 font-weight-bold">$<span>2M</span></h2>
            </div>
            <div class="an-img">
              <lottie :option="require('../../assets/images/small/data')"></lottie>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Top Grossing</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span><i class="ri-more-2-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col sm="8">
                <div class="media-sellers">
                  <div class="media-sellers-img">
                    <img :src="require('../../assets/images/page-img/01.jpg')" class="mr-3 rounded" alt="">
                  </div>
                  <div class="media-sellers-media-info">
                    <h5 class="mb-0"><a class="text-dark" href="#">Android Tablet</a></h5>
                    <p class="mb-1">Android 10 supported tablet with best features.</p>
                    <div class="sellers-dt">
                      <span class="font-size-12">Vendor: <a href="#"> iqonicdesign</a></span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <h5 class="mb-0">20,019</h5>
                <span>Sales</span>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <ul class="list-inline mb-0 list-star">
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                </ul>
                <span>Rating</span>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col sm="8">
                <div class="media-sellers">
                  <div class="media-sellers-img">
                    <img :src="require('../../assets/images/page-img/02.jpg')" class="mr-3 rounded" alt="">
                  </div>
                  <div class="media-sellers-media-info">
                    <h5 class="mb-0"><a class="text-dark" href="#">Apple Watch</a></h5>
                    <p class="mb-1">Latest model of apple watch for productivity.</p>
                    <div class="sellers-dt">
                      <span class="font-size-12">Vendor: <a href="#">Apple</a></span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <h5 class="mb-0">56,112</h5>
                <span>Sales</span>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <ul class="list-inline mb-0 list-star">
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                </ul>
                <span>Rating</span>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col sm="8">
                <div class="media-sellers">
                  <div class="media-sellers-img">
                    <img :src="require('../../assets/images/page-img/03.jpg')" class="mr-3 rounded" alt="">
                  </div>
                  <div class="media-sellers-media-info">
                    <h5 class="mb-0"><a class="text-dark" href="#">I-Phone & I-Mac</a></h5>
                    <p class="mb-1">Best ever combo package for work and personal use.</p>
                    <div class="sellers-dt">
                      <span class="font-size-12">Vendor: <a href="#"> Iqonic devices</a></span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <h5 class="mb-0">9,895</h5>
                <span>Sales</span>
              </b-col>
              <b-col sm="2" class="text-center mt-3">
                <ul class="list-inline mb-0 list-star">
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                  <li class="list-inline-item text-warning"><i class="ri-star-fill"></i></li>
                </ul>
                <span>Rating</span>
              </b-col>
            </b-row>
          </template>
        </iq-card>
        <b-row>
          <b-col lg="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Support Tickets</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown id="dropdownMenuButton2" right variant="none" data-toggle>
                  <template v-slot:button-content>
                    <span class="dropdown-toggle dropdown-bg">View all</span>
                  </template>
                  <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
                </b-dropdown>
              </template>
              <template v-slot:body>
                <div class="media-support">
                  <div class="media-support-header mb-2">
                    <div class="media-support-user-img mr-3">
                      <img class="rounded-circle" :src="require('../../assets/images/user/1.jpg')" alt="">
                    </div>
                    <div class="media-support-info mt-2">
                      <h6 class="mb-0"><a href="#" class="">Nik Jordan</a></h6>
                      <small>2 day ago</small>
                    </div>
                    <div class="mt-3">
                      <span class="badge badge-success">Pending</span>
                    </div>
                  </div>
                  <div class="media-support-body">
                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <hr class="mt-4 mb-4">
                <div class="media-support">
                  <div class="media-support-header mb-2">
                    <div class="media-support-user-img mr-3">
                      <img class="rounded-circle" :src="require('../../assets/images/user/02.jpg')" alt="">
                    </div>
                    <div class="media-support-info mt-2">
                      <h6 class="mb-0"><a href="#" class="">Lily Wozniak</a></h6>
                      <small>2 day ago</small>
                    </div>
                    <div class="mt-3">
                      <span class="badge badge-warning text-white">Working</span>
                    </div>
                  </div>
                  <div class="media-support-body">
                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable layout.</p>
                  </div>
                </div>
                <hr class="mt-4 mb-4">
                <div class="media-support">
                  <div class="media-support-header mb-2">
                    <div class="media-support-user-img mr-3">
                      <img class="rounded-circle" :src="require('../../assets/images/user/03.jpg')" alt="">
                    </div>
                    <div class="media-support-info mt-2">
                      <h6 class="mb-0"><a href="#" class="">Samuel Path</a></h6>
                      <small>2 day ago</small>
                    </div>
                    <div class="mt-3">
                      <span class="badge badge-primary">Open</span>
                    </div>
                  </div>
                  <div class="media-support-body">
                    <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <hr class="mt-4 mb-4">
                <div class="media-support">
                  <div class="media-support-header mb-2">
                    <div class="media-support-user-img mr-3">
                      <img class="rounded-circle" :src="require('../../assets/images/user/04.jpg')" alt="">
                    </div>
                    <div class="media-support-info mt-2">
                      <h6 class="mb-0"><a href="#" class="">Mia Mai</a></h6>
                      <small>2 day ago</small>
                    </div>
                    <div class="mt-3">
                      <span class="badge badge-danger">Closed</span>
                    </div>
                  </div>
                  <div class="media-support-body">
                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Cash flow</h4>
              </template>
              <template v-slot:headerAction>
                <b-dropdown id="dropdownMenuButton2" right variant="none">
                  <template v-slot:button-content>
                    <span><i class="ri-more-2-fill"></i></span>
                  </template>
                  <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
                </b-dropdown>
              </template>
              <ApexChart element="bar-chart-6" :chartOption="chart6"/>
            </iq-card>
            <iq-card body-class="p-0">
              <template v-slot:body>
                <b-row no-gutters class="align-items-center">
                  <b-col lg="6">
                    <div class="p-4">
                      <div class="d-flex align-items-center">
                        <a href="#" class="iq-icon-box rounded-circle iq-bg-primary">
                        <i class="ri-facebook-fill"></i>
                        </a>
                        <h4 class="mb-0"><span class="counter">200</span>k<small class="d-block font-size-14">Posts</small></h4>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6">
                    <ApexChart element="wave-chart-8" :chartOption="chart7" :isLive="true"/>
                  </b-col>
                </b-row>
              </template>
            </iq-card>
            <iq-card body-class="p-0">
              <template v-slot:body>
                <b-row no-gutters class="align-items-center">
                  <b-col lg="6">
                    <div class="p-4">
                      <div class="d-flex align-items-center">
                        <a href="#" class="iq-icon-box rounded-circle iq-bg-success">
                        <i class="ri-twitter-fill"></i>
                        </a>
                        <h4 class="mb-0"><span class="counter">400</span>k<small class="d-block font-size-14">Tweets</small></h4>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6">
                    <ApexChart element="wave-chart-9" :chartOption="chart8" :isLive="true"/>
                  </b-col>
                </b-row>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">

        <iq-card>
          <template v-slot:cardImage>
            <img :src="require('../../assets/images/small/img-1.jpg')" alt="image" class="img-fluid">
          </template>
          <template v-slot:headerTitle>
            <h4 class="card-title">How to setup E-store</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span><i class="ri-settings-5-fill"></i></span>
              </template>
              <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <span class="font-size-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <small class="text-muted mt-3 d-inline-block w-100">Saturday, 7 December 2019</small>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Order Summary</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-2-fill"></i></span>
              </template>
              <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table responsive :items="items"  class="mb-0 table-borderless">
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.name }}</b-badge>
              </template>
              <template v-slot:cell(progress)="data1">
                <b-progress :value="data1.value.count" class="iq-progress-bar" :variant="data1.value.color"></b-progress>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
// import users from '../../FackApi/api/user.json'
import { sofbox } from '../../config/pluginInit'
export default {
  name: 'Dashbaord',
  components: {
  },
  mounted () {
    sofbox.index()
    const data = this.$cookies.get('hasSession')
    if (!data || data !== 'true') {
      this.$router.push({ path: '/auth/sign-in' })
    }
  },
  data () {
    return {
      chart1: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [60, 15, 50, 30, 70]
        }],
        colors: ['#0084ff'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart2: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [70, 40, 60, 30, 60]
        }],
        colors: ['#ffd400'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart3: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [60, 40, 60, 40, 70]
        }],
        colors: ['#00ca00'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [75, 30, 60, 35, 60]
        }],
        colors: ['#e64141'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart5: {
        chart: {
          height: 200,
          type: 'line',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        stroke: {
          width: [2, 3],
          curve: 'smooth',
          dashArray: [0, 5]
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        colors: ['#00ca00', '#007bff'],
        series: [{
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
          opacity: [0.2, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' views'
              }
              return y
            }
          }
        },
        legend: {
          labels: {
            useSeriesColors: true
          },
          markers: {
            customHTML: [
              function () {
                return ''
              },
              function () {
                return ''
              },
              function () {
                return ''
              }
            ]
          }
        }
      },
      chart6: {
        chart: {
          height: 400,
          type: 'bar',
          sparkline: {
            show: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#0084ff', '#ffd400'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 5,
          colors: ['#ffffff']
        },
        series: [{
          name: 'Mobile',
          enabled: 'true',
          data: [44, 90, 90, 60, 115]
        }, {
          name: 'Desktop',
          data: [35, 80, 100, 70, 95]
        }],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      chart7: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#0084ff'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#00ca00'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      items: [
        { package_no: '#0879985', date: '26/12/2019', delivery: '30/12/2019', status: { name: 'Moving', color: 'success' }, location: 'Victoria 8007 Australia', progress: { count: 90, color: 'success' } },
        { package_no: '#0879984', date: '23/12/2019', delivery: '27/12/2019', status: { name: 'Pending', color: 'warning text-white' }, location: 'Athens 2745 Greece', progress: { count: 70, color: 'warning' } },
        { package_no: '#0879983', date: '18/12/2019', delivery: '30/12/2019', status: { name: 'Canceled', color: 'danger' }, location: 'Victoria 8007 Australia', progress: { count: 45, color: 'danger' } },
        { package_no: '#0879982', date: '14/12/2019', delivery: '20/12/2019', status: { name: 'Working', color: 'info' }, location: 'Delhi 0014 India', progress: { count: 90, color: 'info' } },
        { package_no: '#0879981', date: '10/12/2019', delivery: '18/12/2019', status: { name: 'Moving', color: 'success' }, location: 'Alabama 2741 USA', progress: { count: 45, color: 'success' } }
      ],
      usersList: [
        { name: 'Anna Sthesia', role: 'Admin', image: require('../../assets/images/user/01.jpg'), link: '', isActive: true },
        { name: 'Paul Molive', role: 'User', image: require('../../assets/images/user/02.jpg'), link: '', isActive: false },
        { name: 'Bob Frapples', role: 'Auther', image: require('../../assets/images/user/03.jpg'), link: '', isActive: true },
        { name: 'Barb Ackue', role: 'Editor', image: require('../../assets/images/user/04.jpg'), link: '', isActive: true },
        { name: 'Greta Life', role: 'User', image: require('../../assets/images/user/05.jpg'), link: '', isActive: false },
        { name: 'Ira Membrit', role: 'User', image: require('../../assets/images/user/06.jpg'), link: '', isActive: true },
        { name: 'Pete Sariya', role: 'Editor', image: require('../../assets/images/user/07.jpg'), link: '', isActive: false },
        { name: 'Anna Sthesia', role: 'Editor', image: require('../../assets/images/user/08.jpg'), link: '', isActive: true },
        { name: 'Paul Molive', role: 'Author', image: require('../../assets/images/user/09.jpg'), link: '', isActive: false },
        { name: 'Bob Frapples', role: 'User', image: require('../../assets/images/user/10.jpg'), link: '', isActive: true },
        { name: 'Anna Sthesia', role: 'Admin', image: require('../../assets/images/user/01.jpg'), link: '', isActive: true },
        { name: 'Paul Molive', role: 'User', image: require('../../assets/images/user/02.jpg'), link: '', isActive: false },
        { name: 'Bob Frapples', role: 'Auther', image: require('../../assets/images/user/03.jpg'), link: '', isActive: false },
        { name: 'Barb Ackue', role: 'Editor', image: require('../../assets/images/user/04.jpg'), link: '', isActive: true },
        { name: 'Greta Life', role: 'User', image: require('../../assets/images/user/05.jpg'), link: '', isActive: true }
      ],
      timelineItems: [
        {
          color: 'primary',
          title: 'Client Login',
          right: '24 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Scheduled Maintenance',
          right: '23 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'danger',
          title: 'Dev Meetup',
          right: '20 November 2019',
          description: 'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
              require('../../assets/images/user/05.jpg'),
              require('../../assets/images/user/06.jpg'),
              require('../../assets/images/user/07.jpg'),
              require('../../assets/images/user/08.jpg'),
              require('../../assets/images/user/09.jpg'),
              require('../../assets/images/user/10.jpg')
            ]
          }
        },
        {
          color: 'primary',
          title: 'Client Call',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
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
      ]
    }
  }
}
</script>
