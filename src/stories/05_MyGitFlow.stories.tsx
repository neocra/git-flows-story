import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";

storiesOf("gitflow/5. My git flow", module)
  .add("Initial Repos", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Deploy to dev", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth")
        .tag('dev');
      }}
    </Gitgraph>
  ))
  .add("Create ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth")
        .tag('dev');;
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
      }}
    </Gitgraph>
  ))
  .add("Create an humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth")
        .tag('dev');;
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
        const feature2 = master.branch("features/0002-add-humain");
        feature2.commit("Add my first humain");
      }}
    </Gitgraph>
  ))
  .add("Squash merge humain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
        master.commit('PR 03 : Add my first humain')
        .tag('dev');;
      }}
    </Gitgraph>
  ))
  .add("Deploy a beta", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
        master.commit('PR 03 : Add my first humain')
        .tag('dev')
        .tag('v1.0.0')
        .tag('uat');
      }}
    </Gitgraph>
  ))
  .add("Deploy to prod", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
        master.commit('PR 03 : Add my first humain')
        .tag('dev')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
      }}
    </Gitgraph>
  ))
  .add("Fix color of ocean to blue", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
        master.commit('PR 03 : Add my first humain')
        .tag('dev')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        feature1.commit('Fix color of ocean to blue');
      }}
    </Gitgraph>
  ))
  .add("Squash merge ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        master.commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        master.commit('PR 04 : Add my first ocean')
        .tag('dev');
      }}
    </Gitgraph>
  ))
  .add("Oups Humain have no brain.", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        var prod = master.commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        master.commit('PR 04 : Add my first ocean')
        .tag('dev');
        var feature = prod.branch('features/0003-add-a-brain')
        feature.commit('Add a brain to a humain');

      }}
    </Gitgraph>
  ))
  .add("Squash fix of the brain", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        var prod = master.commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain')
        .tag('dev');
      }}
    </Gitgraph>
  ))
  .add("PR a Cherry pick Hot fix on prod.", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        
        var prod = master
        .commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        var hotFix = prod            
            .branch('features/0003-add-a-brain-to-hotfix-v1-0-0')
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain')
        .tag('dev');
        hotFix.commit('Add a brain to a humain');
      }}
    </Gitgraph>
  ))
  .add("Squash the Hot fix on prod.", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        
        var prod = master
        .commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('uat')
        .tag('prod');
        var hotFix = prod            
            .branch('hotfix/v1-0-0')
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain');
        hotFix.commit('PR 06 : Add a brain to a humain').tag('dev');
      }}
    </Gitgraph>
  ))
  .add("Deploy a beta of hotfix", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        
        var prod = master
        .commit('PR 03 : Add my first humain')
        .tag('v1.0.0')
        .tag('prod');
        var hotFix = prod            
            .branch('hotfix/v1-0-0')
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain');
        hotFix.commit('PR 06 : Add a brain to a humain')
        .tag('dev')
        .tag('v1.0.1')
        .tag('uat');
      }}
    </Gitgraph>
  ))
  .add("Deploy Hot fix on prod.", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        
        var prod = master
        .commit('PR 03 : Add my first humain')
        .tag('v1.0.0');
        var hotFix = prod            
            .branch('hotfix/v1-0-0')
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain');
        hotFix.commit('PR 06 : Add a brain to a humain')
        .tag('dev')
        .tag('v1.0.1')
        .tag('uat')
        .tag('prod');
      }}
    </Gitgraph>
  ))
  .add("Deploy Ocean", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
        
        var prod = master
        .commit('PR 03 : Add my first humain')
        .tag('v1.0.0');
        var hotFix = prod            
            .branch(
                { 
                  name: 'hotfix/v1-0-0',
                 style: {
                     label:{
                         display: false
                     }
                 }
            });
        master.commit('PR 04 : Add my first ocean');
        master.commit('PR 05 : Add a brain to a humain')
        .tag('v1.1.0')
        .tag('dev')
        .tag('uat')
        .tag('prod');
        hotFix.commit('PR 06 : Add a brain to a humain')
        .tag('v1.0.1');
      }}
    </Gitgraph>
  ))