"use server"

import { revalidatePath } from "next/cache"
import puppeteer from "puppeteer"
import { headers } from 'next/headers'

export async function scrapeHealyProducts(url: string) {
    headers()

    try {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        const navigationPromise = page.waitForNavigation({
            waitUntil: "networkidle0",
            timeout: 120000
        });
        await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 })
        await page.addScriptTag({ url: "https://code.jquery.com/jquery-3.6.0.min.js" })
        await navigationPromise;

        const isJQueryLoaded = await page.evaluate(() => !!window?.jQuery);
        if (!isJQueryLoaded) {
            throw new Error("JQuery not loaded");
        }

        const data = await page.evaluate(() => {
            // <h1 class="product_title entry-title">Healy Resonance Plus Edition</h1>
            const title = $("h1.product_title.entry-title").text();
  
            return { title }
        });

        await browser.close()
        revalidatePath("/")

        // Düz bir nesne oluştur ve döndür
        return {
            title: data.title,
            url: url
        }

    } catch (error) {
        console.log(error)
        return {
            error: error instanceof Error ? error.message : String(error)
        }
    }
}
