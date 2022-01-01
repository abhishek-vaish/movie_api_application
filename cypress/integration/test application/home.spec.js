/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Movie Card Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check the Movie Card Component on Home Screen", () => {
    cy.get(".card__rectangle > p").contains("Movies");
  });

  it("Check the Movie Card Component", () => {
    cy.get(".Movies").click();
    cy.get(".movies > .movies__data > p").contains("Loading...");
    cy.get(".title__header > p").contains("Popular Movies");
  });
});

describe("Series Card Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check the Series Card Component on Home Screen", () => {
    cy.get(".card__rectangle > p").contains("Series");
  });

  it("Check the Series Card Component", () => {
    cy.get(".Series").click();
    cy.get(".series > .series__data > p").contains("Loading...");
    cy.get(".title__header > p").contains("Popular Series");
  });
});
