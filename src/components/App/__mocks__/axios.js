'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {"id":"907","rewards":{"miles":10000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":579.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"},"name":"Omni Chicago Hotel & Suites Magnificent Mile","neighborhoodName":"Magnificent Mile"}},
        {"id":"908","rewards":{"miles":8000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":234.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/6/0/96/743/239/chidt-exterior-0227-hor-clsc_S.jpg"},"name":"Chicago Marriott Downtown Magnificent Mile","neighborhoodName":"Magnificent Mile"}},{"id":"87390","rewards":{"miles":12000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":123.0},"hotelStaticContent":{"mainImage":{"url":"http://d2whcypojkzby.cloudfront.net/imageRepo/1/0/16/99/327/012857_A_P.jpg"},"name":"Homewood Suites by Hilton Chicago-Lincolnshire","neighborhoodName":"Lincolnshire"}}
      ]
    });
  }
};