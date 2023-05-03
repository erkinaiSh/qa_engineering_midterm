const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');

describe("Client tests", () => {
  
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })
  
  it('Create a client', async () => {
    await ClientPage.createClient();
  })
  
  it('Update a client', async () => {
    await ClientPage.updateClient();
  })
  
  it('View updated client', async () => {
    await ClientPage.viewClient();
  })
  
  it('Check Итого заказов', async () => {
    await ClientPage.checkOrders();
  });
})
