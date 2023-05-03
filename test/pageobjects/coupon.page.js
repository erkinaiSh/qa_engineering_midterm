const Page = require('./page');
const ClientPage = require('./client.page');

class CouponPage extends Page {
  get createCouponButton () {
    return $('button.crm-button');
  }
  
  get clientNameInput () {
    return $('input[formcontrolname="ClientFullName"]');
  }
  
  get benefitInput () {
    return $('input[formcontrolname="Benefit"]');
  }
  
  get beginDateInput () {
    return $('input[formcontrolname="BeginDate"]');
  }
  
  get endDateInput () {
    return $('input[formcontrolname="EndDate"]');
  }
  
  get saveButton () {
    return $('button[name="save"]');
  }
  
  async createCoupon() {
    await ClientPage.couponLink.click();
    await expect(browser).toHaveUrlContaining('coupons');
  
    await this.createCouponButton.click();
    await browser.pause(4000);
  
    await this.clientNameInput.setValue('CrazyBlare');
    await this.benefitInput.setValue(2000);
    await this.beginDateInput.setValue('3/23/2023');
    await this.endDateInput.setValue('4/23/2023');
  
    await this.saveButton.click();
    await browser.pause(3000);
  }
}

module.exports = new CouponPage();
