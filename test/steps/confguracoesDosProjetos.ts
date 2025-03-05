import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ProjectsPage from "../../pages/ProjectsPage";
import Assert from "../../helper/wrapper/assert";

let projectsPage: ProjectsPage;
let assert: Assert;


Given('que o usuário administrador está na tela inicial', async function () {
  projectsPage = new ProjectsPage(fixture.page);
  assert = new Assert(fixture.page);
  await projectsPage.gotoLuegRep(process.env.BASEURL);
  await projectsPage.clickLoginButton();
});

