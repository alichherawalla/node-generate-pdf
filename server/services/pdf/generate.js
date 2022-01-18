import puppeteer from 'puppeteer';

export const generatePDF = async (html = '') => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-sandbox']
    });
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf();

    await page.close();
    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.log(error);
  }
};
