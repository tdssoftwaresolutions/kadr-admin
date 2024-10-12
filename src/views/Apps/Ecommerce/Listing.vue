<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:body>
            <div id="js-product-list">
              <div class="Products">
                <Product :items="items" className="product_list gridcount grid row"/>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { sofbox } from '../../../config/pluginInit'
export default {
  name: 'listing',
  mounted () {
    sofbox.index()
  },
  data () {
    return {
      items: [
        { title: 'consectetur adipiscing elit', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '99.00', offer_price: '50.00', type: '' },
        { title: 'Sed dictum orci vel', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '199.00', offer_price: '15.00', type: 'New' },
        { title: 'neque venenatis', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '1000.00', offer_price: '500.00', type: '' },
        { title: 'Etiam interdum nisi et', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '100.00', offer_price: '50.00', type: '' },
        { title: 'Proin at diam sit amet', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '150.00', offer_price: '50.00', type: 'New' },
        { title: 'augue rhoncus ornare', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '599.00', offer_price: '99.00', type: '' },
        { title: 'Nulla venenatis mi sed', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '3', regular_price: '199.00', offer_price: '50.00', type: '' },
        { title: 'Etiam interdum nisi et', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '4', regular_price: '100.00', offer_price: '50.00', type: '' },
        { title: 'dignissim orci quis', subtitle: 'Proin sed risus mattis', image: 'https://dummyimage.com/384x250/000/fff', rating: '5', regular_price: '150.00', offer_price: '50.00', type: 'New' }
      ]
    }
  }
}
</script>
