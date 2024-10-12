<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">User List</h4>
          </template>
          <template v-slot:body>
            <div class="table-responsive">
              <b-table id="user-list-table" class="mt-4" striped bordered :fields="columns"  :items="items">
                <template v-slot:cell(profile)="data" >
                  <b-img rounded="circle" fluid class="avatar-40" :src="data.value" />
                </template>
                <template v-slot:cell(status)="data">
                  <b-badge pill :class="data.value.color">{{ data.value.name }}</b-badge>
                </template>
                <template v-slot:cell(action)="data1">
                  <div class="flex align-items-center list-user-action" v-html="data1.value.link">
                  </div>
                </template>
              </b-table>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { sofbox } from '../../config/pluginInit'
import $ from 'jquery'
export default {
  name: 'UserList',
  mounted () {
    sofbox.index()
    $('#user-list-table').DataTable({
      dom: "<'row justify-content-between' <'col-md-6 col-sm-12' f><'col-md-6 sm-12' <'user-list-files d-flex float-right' B>>> <'row table-responsive' t><'row justify-content-between mt-3'<'col-md-6' i><'col-md-6' p>>",
      buttons: {
        dom: {
          button: {
            tag: 'a',
            className: ''
          }
        }
      },
      drawCallback: function () {
        $('.dataTables_paginate > .pagination').addClass('justify-content-end mb-0')
      },
      language: {
        search: '',
        searchPlaceholder: 'Search'
      }
    })
  },
  data () {
    return {
      columns: [
        { key: 'profile', label: 'Profile', tdClass: 'text-center' },
        { key: 'name', label: 'Name', tdClass: '' },
        { key: 'contact', label: 'Contact', tdClass: '' },
        { key: 'email', label: 'Email', tdClass: '' },
        { key: 'country', label: 'Country', tdClass: '' },
        { key: 'status', label: 'Status', tdClass: '' },
        { key: 'company', label: 'Company', tdClass: '' },
        { key: 'join_date', label: 'Join Date', tdClass: '' },
        { key: 'action', label: 'Action', tdClass: '' }
      ],
      items: [
        {
          profile: require('../../assets/images/user/01.jpg'),
          name: 'Anna Sthesia',
          contact: '(760) 756 7568',
          email: 'annasthesia@gmail.com',
          country: 'USA',
          status: { name: 'Active', color: 'iq-bg-primary' },
          company: 'Acme Corporation',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/02.jpg'),
          name: 'Brock Lee',
          contact: '+62 5689 458 658',
          email: 'brocklee@gmail.com',
          country: 'Indonesia',
          status: { name: 'active', color: 'iq-bg-primary' },
          company: 'Soylent Corp',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/03.jpg'),
          name: 'Dan Druff',
          contact: '+55 6523 456 856',
          email: 'dandruff@gmail.com',
          country: 'Brazil',
          status: { name: 'pending', color: 'iq-bg-warning' },
          company: 'Umbrella Corporation',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/04.jpg'),
          name: 'Hans Olo',
          contact: '+91 2586 253 125',
          email: 'hansolo@gmail.com',
          country: 'India',
          status: { name: 'inactive', color: 'iq-bg-danger' },
          company: 'Vehement Capital',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/05.jpg'),
          name: 'Lynn Guini',
          contact: '+27 2563 456 589',
          email: 'lynnguini@gmail.com',
          country: 'Brazil',
          status: { name: 'active', color: 'iq-bg-primary' },
          company: 'Massive Dynamic',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/06.jpg'),
          name: 'Eric Shun',
          contact: '+55 25685 256 589',
          email: 'ericshun@gmail.com',
          country: 'Africa',
          status: { name: 'pending', color: 'iq-bg-warning' },
          company: 'Globex Corporation',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/07.jpg'),
          name: 'aaronottix',
          contact: '(760) 756 7568',
          email: 'budwiser@gmail.com',
          country: 'USA',
          status: { name: 'hold', color: 'iq-bg-info' },
          company: 'Acme Corporation',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/08.jpg'),
          name: 'Marge Arita',
          contact: '+27 5625 456 589',
          email: 'margearita@gmail.com',
          country: 'Africa',
          status: { name: 'complere', color: 'iq-bg-success' },
          company: 'Massive Dynamic',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        },
        {
          profile: require('../../assets/images/user/09.jpg'),
          name: 'Bill Dabear',
          contact: '+55 2563 456 589',
          email: 'billdabear@gmail.com',
          country: 'Brazil',
          status: { name: 'active', color: 'iq-bg-primary' },
          company: 'Massive Dynamic',
          join_date: '2019/12/01',
          action: { link: '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#"><i class="ri-user-add-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>' }
        }
      ]
    }
  }
}
</script>
