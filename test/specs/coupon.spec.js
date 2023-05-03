const LoginPage = require('../pageobjects/login.page');
const CouponPage = require('../pageobjects/coupon.page');

describe("Coupon tests", () => {
  
  beforeEach( async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })
  
  it('Create a coupon', async () => {
    await CouponPage.createCoupon();
  })
})
