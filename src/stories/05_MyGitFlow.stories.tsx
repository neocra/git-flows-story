import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";

const meta: Meta = {
  title: "gitflow/5. My git flow",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InitialRepos: Story = {
  name: "Initial Repos",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth");
      }}
    </Gitgraph>
  ),
};

export const DeployToDev: Story = {
  name: "Deploy to dev",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth")
        .tag('dev');
      }}
    </Gitgraph>
  ),
};

export const CreateOcean: Story = {
  name: "Create ocean",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("PR 01 : Empty earth")
        .tag('dev');;
        const feature1 = master.branch("features/0001-create-ocean");
        feature1.commit("Add my first ocean");
      }}
    </Gitgraph>
  ),
};

export const CreateAnHumain: Story = {
  name: "Create an humain",
  render: () => (
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
  ),
};

export const SquashMergeHumain: Story = {
  name: "Squash merge humain",
  render: () => (
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
  ),
};

export const DeployABeta: Story = {
  name: "Deploy a beta",
  render: () => (
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
  ),
};

export const DeployToProd: Story = {
  name: "Deploy to prod",
  render: () => (
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
  ),
};

export const FixColorOfOceanToBlue: Story = {
  name: "Fix color of ocean to blue",
  render: () => (
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
  ),
};

export const SquashMergeOcean: Story = {
  name: "Squash merge ocean",
  render: () => (
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
  ),
};

export const OupsHumainHaveNoBrain: Story = {
  name: "Oups Humain have no brain.",
  render: () => (
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
  ),
};

export const SquashFixOfTheBrain: Story = {
  name: "Squash fix of the brain",
  render: () => (
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
  ),
};

export const PRACherryPickHotFixOnProd: Story = {
  name: "PR a Cherry pick Hot fix on prod.",
  render: () => (
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
  ),
};

export const SquashTheHotFixOnProd: Story = {
  name: "Squash the Hot fix on prod.",
  render: () => (
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
  ),
};

export const DeployABetaOfHotfix: Story = {
  name: "Deploy a beta of hotfix",
  render: () => (
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
  ),
};

export const DeployHotFixOnProd: Story = {
  name: "Deploy Hot fix on prod.",
  render: () => (
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
  ),
};

export const DeployOcean: Story = {
  name: "Deploy Ocean",
  render: () => (
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
  ),
};
