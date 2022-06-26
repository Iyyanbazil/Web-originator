/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
  .swiper-container {
    width: 90%;
    height: 200px;
  margin-top:200px;
  }

  .swiper-button-next{
   position:relative;
   top:-100px;
   left:100%;
 
  }
  .swiper-button-prev{
    position:relative;
    top:-100px
  
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    // height: 100px;
    object-fit: cover;
  }
  </style>
  `;
  bm.add(opts.name, {
    label: `
    <i class="fa fa-arrows-h"></i>
    <div class="gjs-block-label">
      ${opts.label}
    </div> 
    `,
    category: opts.category,
    content: `
  <div class="swiper-container mySwiper">
    <div class="swiper-wrapper">
    
      <div class="swiper-slide"><img></img></div>
      <div class="swiper-slide"> <img></img></div>
      <div class="swiper-slide"> <img></img></div>
      <div class="swiper-slide"><img></img></div>
     
    </div>
    
    
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    // <div class="swiper-pagination"></div>
    
  </div> ${style}`,
  });
};
