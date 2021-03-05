import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";



storiesOf("gitflow/2. git lab flow", module)
  .add("Initial Repos", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Deploy to dev (Do nothings)", () => (
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
        .branch("features/0001-add-ocean")
        .commit("Add first ocean");
      }}
    </Gitgraph>
  ))
  .add("Create an humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master.branch("features/0002-add-humain")
        .commit("Add first humain");
      }}
    </Gitgraph>
  ))
  .add("Merge Request an humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master
        .commit("MR 01 : Add first humain");
      }}
    </Gitgraph>
  ))
  .add("Deploy a stable", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master
        .commit("MR 01 : Add first humain")
        .branch("stable")
        .commit('Merge to Stable');
      }}
    </Gitgraph>
  ))
  .add("Deploy a production", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master
        .commit("MR 01 : Add first humain")
        .branch("stable")
        .commit('Merge to Stable')
        .branch("production")
        .commit('Merge to Production');
      }}
    </Gitgraph>
  ))
  .add("Fix color of ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        var f = master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master
        .commit("MR 01 : Add first humain")
        .branch("stable")
        .commit('Merge to Stable')
        .branch("production")
        .commit('Merge to Production');
        f.commit('Fix color of ocean');
      }}
    </Gitgraph>
  )) 
  .add("Merge request ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain")
        .branch("stable")
        .commit('Merge to Stable')
        .branch("production")
        .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');
      }}
    </Gitgraph>
  )) 
  .add("Oups humain have no brain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.branch('features/0003-add-brain')
              .commit('Add a brain');
      }}
    </Gitgraph>
  ))
  .add("Merge request brain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.commit('MR 03 : Add a brain');
      }}
    </Gitgraph>
  ))
  .add("Cherry pick brain on prod", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.commit('MR 03 : Add a brain');

        production.branch('features/0003-fix-brain-in-production')
        .commit('Add a brain');
      }}
    </Gitgraph>
  ))
  .add("Complete Merge Request on prod", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.commit('MR 03 : Add a brain');

        production
        .commit('MR 04 : Add a brain');
      }}
    </Gitgraph>
  ))
  .add("Deploy ocean on stable", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.commit('MR 03 : Add a brain');

        production
        .commit('MR 04 : Add a brain');
        stable.merge(master);
      }}
    </Gitgraph>
  ))
  .add("Deploy ocean on production", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        master
        .commit("MR 01 : Add first humain");
        const stable = master.branch("stable")
                      .commit('Merge to Stable');
        const production = stable.branch("production")
                         .commit('Merge to Production');

        master.commit('MR 02 : Add ocean');

        master.commit('MR 03 : Add a brain');

        production
        .commit('MR 04 : Add a brain');
        stable.merge(master);
        production.merge(stable);
      }}
    </Gitgraph>
  ))
  .add("Conclusion", () => (
    <div>
      <ul>
        <li>La branche "master" est la vérité</li>
        <li>Merge request est un environement complet</li>
        <li>Repackager/Rebuild pour déployer une beta/production</li>
      </ul>
      <ul>
        <li><a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html">Introduction to GitLab Flow</a></li>
        <li><a href="https://about.gitlab.com/blog/2020/03/05/what-is-gitlab-flow/">The problem with Git flow</a></li>
      </ul>
    </div>
  ))