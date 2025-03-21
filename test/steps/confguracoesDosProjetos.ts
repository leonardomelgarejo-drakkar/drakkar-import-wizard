import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import ProjectsPage from "../../pages/ProjectsPage";
import Assert from "../../helper/wrapper/assert";
import { timeout } from "../../helper/globalConfig";

let projectsPage: ProjectsPage;
let assert: Assert;
let setANewProjectText: string;
let projectSearchBoxText: string;
let gridName: string;
let gridDescription: string;
let gridCreatedOn: string;

Given('que o usuário administrador está na tela inicial', {timeout: timeout}, async function () {
  projectsPage = new ProjectsPage(fixture.page);
  assert = new Assert(fixture.page);
  await projectsPage.gotoLuegRep(process.env.BASEURL);
  await projectsPage.clickLoginButton();
});

When('ele clica na aba "Projetos"', {timeout: timeout}, async function () {
  projectsPage.clickProjectsTab();
});

When('ele clica na opção criar novo projeto', {timeout: timeout}, async function () {
  await projectsPage.clickSetANewProject();
  // await projectsPage.pause();
});

Then('a opção "Criar novo projeto" deve estar disponível', {timeout: timeout}, async function () {
  setANewProjectText = await projectsPage.getSetANewProjectText();
  await assert.assertElementContains("Set a new project", setANewProjectText);
});

Then('a lista de projetos existentes deve estar visível na parte inferior da tela', {timeout: timeout}, async function () {
  projectSearchBoxText = await projectsPage.getProjectSearchBoxText();
  await assert.assertElementContains("Search for a project", projectSearchBoxText);
});

Then('a caixa de pesquisa de projetos deve estar disponível', {timeout: timeout}, async function () {
  gridName = await projectsPage.getGridNameText();
  gridDescription = await projectsPage.getGridDescriptionText();
  gridCreatedOn = await projectsPage.getGridCreatedOnText();

  await assert.assertElementContains("Name", gridName);
  await assert.assertElementContains("Description", gridDescription);
  await assert.assertElementContains("Created On", gridCreatedOn);
});