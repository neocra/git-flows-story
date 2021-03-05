import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";


storiesOf("gitflow/3. GitHub flow", module)
  .add("Initial Repos", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Deploy to dev (Do nothings all comits on master is deployable)", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Create an ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch("add-ocean")
        .commit("Add first ocean");
      }}
    </Gitgraph>
  ))
  .add("Create an humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master.branch("add-ocean")
        .commit("Add first ocean");
        master.branch("add-humain")
        .commit("Add first humain");
      }}
    </Gitgraph>
  ))
  .add("Pull Request an humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       master.branch("add-ocean")
       .commit("Add first ocean");
       master
       .commit("PR 02 : Add first humain");
     }}
    </Gitgraph>
  ))
  .add("Deploy a beta (All is done)", () => (
    <Gitgraph options={gitGraphOptions}>
     {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       master.branch("add-ocean")
       .commit("Add first ocean");
       master
       .commit("PR 02 : Add first humain");
     }}
    </Gitgraph>
  ))
  .add("Deploy a production (All is done)", () => (
    <Gitgraph options={gitGraphOptions}>
     {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       master.branch("add-ocean")
       .commit("Add first ocean");
       master
       .commit("PR 02 : Add first humain");
     }}
    </Gitgraph>
  ))
  .add("Fix color of ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       var f = master.branch("add-ocean")
       .commit("Add first ocean");
       master
       .commit("PR 02 : Add first humain");
       f.commit('Fix color of ocean');
     }}
    </Gitgraph>
  )) 
  .add("Pull request ocean", () => (
    <Gitgraph options={gitGraphOptions}>
     {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       master
       .commit("PR 02 : Add first humain");
       master.commit('PR 01 : Add first ocean');
     }}
    </Gitgraph>
  )) 
  .add("Oups humain have no brain", () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      master
      .commit("PR 02 : Add first humain");
      master.commit('PR 01 : Add first ocean');
      master.branch('add-brain')
      .commit('Add a brain');

    }}
   </Gitgraph>
  ))
  .add("Pull request brain", () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      master
      .commit("PR 02 : Add first humain");
      master.commit('PR 01 : Add first ocean');
      master
      .commit('PR 03 : Add a brain');
    }}
   </Gitgraph>
  ))
  .add("Fix brain on prod (All is done all comits on master is deployable)", () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      master
      .commit("PR 02 : Add first humain");
      master.commit('PR 01 : Add first ocean');
      master
      .commit('PR 03 : Add a brain');
    }}
   </Gitgraph>
  ))
  .add("Ocean is already deployed", () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      master
      .commit("PR 02 : Add first humain");
      master.commit('PR 01 : Add first ocean');
      master
      .commit('PR 03 : Add a brain');
    }}
   </Gitgraph>
  ))
  .add("Conclusion", () => (
    <div>
      <ul>
        <li>La branche "master" est la vérité</li>
        <li>La branche "master" est toujours déployable</li>
        <li>Pull request est une feature complète, discuté, et travaillé.</li>
        <li>Pas de gestion de hotfix</li>
      </ul>
      <ul>
        <li><a href="https://guides.github.com/introduction/flow/">Understanding the GitHub flow</a></li>
        <li><a href="https://githubflow.github.io/">GitHub Flow</a></li>
        <li><a href="https://guides.github.com/">GitHub Guides</a></li>
      </ul>
    </div>
  ))