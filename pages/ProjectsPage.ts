import { type Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class ProjectsPage {

  private base: PlaywrightWrapper;

  constructor(private page: Page){
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    loginAdmText: "Agnes Nielsen(Admin)",
    menuItemRole: "menuitem",
    searchBox: "searchbox",
    gridCell: "gridcell",
    setNewProjectText: "Set a new project",
    tabProjectsRoleName: "Projects",
    projectSearchBoxRoleName: "Search for a project",
    gridNameRoleName: "Name",
    gridDescriptionRoleName: "Description",
    gridCreatedOnRoleName: "Created On",
    setANewProjectText: "Set a new project"
  }

  async gotoLuegRep(BASEURL: string){
    await this.base.goto(BASEURL);
  }

  async clickLoginButton(){
    await this.base.waitAndClickGetByText(this.Elements.loginAdmText);
  }

  async clickProjectsTab(){
    await this.base.waitAndClickGetByRole(this.Elements.menuItemRole, this.Elements.tabProjectsRoleName);
  }

  async getSetANewProjectText(){
    return await this.base.getByText(this.Elements.setNewProjectText);
  }

  async getProjectSearchBoxText(){
    return await this.base.getTextByRole(this.Elements.searchBox, this.Elements.projectSearchBoxRoleName);
  }

  async getGridNameText(){
    return await this.base.getTextByRole(this.Elements.gridCell, this.Elements.gridNameRoleName);
  }

  async getGridDescriptionText(){
    return await this.base.getTextByRole(this.Elements.gridCell, this.Elements.gridDescriptionRoleName);
  }

  async getGridCreatedOnText(){
    return await this.base.getTextByRole(this.Elements.gridCell, this.Elements.gridCreatedOnRoleName);
  }

  async clickSetANewProject(){
    await this.base.waitAndClickGetByText(this.Elements.setANewProjectText);
  }

  async pause(){
    await this.base.pause();
  }

}