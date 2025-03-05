import { type Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class ProjectsPage {

  private base: PlaywrightWrapper;

  constructor(private page: Page){
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    loginAdmText: "Agnes Nielsen(Admin)"
    // setNewProject
  }

  async gotoLuegRep(BASEURL: string){
    await this.base.goto(BASEURL);
  }

  async clickLoginButton(){
    await this.base.waitAndClickGetByText(this.Elements.loginAdmText);
  }
}