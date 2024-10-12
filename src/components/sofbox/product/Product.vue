<template>
  <ul :class="className" :id="id">
    <li v-for="(item,index) in items" :key="index" class="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <div class="product-miniature">
        <div class="thumbnail-container">
          <a href="#"><img :src="item.image" alt="product-image" class="img-fluid"></a>
          <a href="javascript:void();" v-if="item.type == 'New'" class="new">{{ item.type }}</a>
        </div>
        <div class="product-description">
          <h4>{{ item.title }}</h4>
          <p class="mb-0">{{ item.subtitle }}</p>
          <div class="ratting">
            <ul class="ratting-item d-flex p-0 m-0">
              <li v-for="(rating, index) in 5" :key="index" class="full">
                <i class="ri-star-fill" v-if="item.rating >= rating" />
                <i class="ri-star-line" v-else />
              </li>
            </ul>
          </div>
          <div class="d-flex flex-wrap justify-content-between align-items-center">
            <div class="product-action">
              <div class="add-to-cart"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart"> <i class="ri-shopping-cart-2-line"></i></a></div>
              <div class="wishlist"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Wishlist"> <i class="ri-heart-line"></i></a></div>
            </div>
            <div class="product-price">
              <div class="regular-price"><b> ${{ item.regular_price }}</b> <span class="offer-price ml-2">${{ item.offer_price }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Product',
  props: {
    items: { type: Array, default: () => [] },
    className: { type: String, default: '' },
    id: { type: String, default: '' }
  }
}
</script>
