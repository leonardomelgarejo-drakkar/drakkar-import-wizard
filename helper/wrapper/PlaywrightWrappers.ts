import { Page } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async waitAndClickGetByText(text: string) {
        const element = this.page.getByText(text.trim(), { exact: false }).first();
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async waitAndClickLocator(text: string) {
        const element = this.page.locator(text);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async waitAndClickGetByRole(roleType: string, role: string) {
        const element = this.page.getByRole(roleType as any, { name: role });
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async waitForPopupAndClickGetByRole(roleType: string, role: string) {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.waitAndClickGetByRole(roleType, role)
        ])
        await newPage.waitForLoadState();

        return newPage;
    }

    async navigateTo(link: string) {
        await Promise.all([
            this.page.click(link)
        ])
    }

    async waitGetByRoleLink(roleType: string, role: string) {
        const element = this.page.getByRole(roleType as any, { name: role });
        await element.waitFor({
            state: "visible"
        });
        return this.page;
    }

    async fill(locator: string, text: string){
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.fill(text);
    }

    async fillByLabel(label: string, text: string){
        const element = this.page.getByLabel(label);
        await element.waitFor({
            state: "visible"
        });
        await element.fill(text);
    }

    async clickByLabel(label: string){
        const element = this.page.getByLabel(label);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async clickByLabelExact(label: string, exact: boolean){
        const element = this.page.getByLabel(label, { exact: exact.toString() === "true" });
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async getTextByLocator(locator: string){
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "attached"
        });
        return await element.textContent();
    }

    async getByText(text: string){
        const element = this.page.getByText(text);
        await element.waitFor({
            state: "visible"
        });
        return (await element.textContent()).trim();
    }

    async waitForGridLoad(locator: string){
        const element = this.page.locator(locator).first();
        await element.waitFor({
            state: "attached"
        });
    }

    async waitForPopup(){
        return await this.page.waitForEvent('popup');
    }

    async waitForGridCellLoad(name: string){
        const element = this.page.locator(`role=gridcell[name="${name}"]`);
        await element.waitFor({
            state: "visible"
        });

        return await element.innerText()
    }

    async getTextByRole(roleType: string, role: string) {
        const element = this.page.getByRole(roleType as any, { name: role }).first();
        await element.waitFor({
            state: "visible"
        });
        return (await element.textContent()).trim();
    }

    async pause(){
        return await this.page.pause();
    }

    async close(){
        return await this.page.close();
    }

}