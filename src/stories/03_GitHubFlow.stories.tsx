import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";


const meta: Meta = {
  title: "gitflow/3. GitHub flow",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InitialRepos: Story = {
  name: "Initial Repos",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ),
};

export const DeployToDevDoNothingsAllComitsOnMasterIsDeployable: Story = {
  name: "Deploy to dev (Do nothings all comits on master is deployable)",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ),
};

export const CreateAnOcean: Story = {
  name: "Create an ocean",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch("add-ocean")
        .commit("Add first ocean");
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
        .commit("Empty earth");
        master.branch("add-ocean")
        .commit("Add first ocean");
        master.branch("add-humain")
        .commit("Add first humain");
      }}
    </Gitgraph>
  ),
};

export const PullRequestAnHumain: Story = {
  name: "Pull Request an humain",
  render: () => (
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
  ),
};

export const DeployABetaAllIsDone: Story = {
  name: "Deploy a beta (All is done)",
  render: () => (
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
  ),
};

export const DeployAProductionAllIsDone: Story = {
  name: "Deploy a production (All is done)",
  render: () => (
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
  ),
};

export const FixColorOfOcean: Story = {
  name: "Fix color of ocean",
  render: () => (
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
  ),
};

export const PullRequestOcean: Story = {
  name: "Pull request ocean",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
     {(gitgraph) => {
       const master = gitgraph.branch("master")
       .commit("Empty earth");
       master
       .commit("PR 02 : Add first humain");
       master.commit('PR 01 : Add first ocean');
     }}
    </Gitgraph>
  ),
};

export const OupsHumainHaveNoBrain: Story = {
  name: "Oups humain have no brain",
  render: () => (
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
  ),
};

export const PullRequestBrain: Story = {
  name: "Pull request brain",
  render: () => (
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
  ),
};

export const FixBrainOnProdAllIsDoneAllComitsOnMasterIsDeployable: Story = {
  name: "Fix brain on prod (All is done all comits on master is deployable)",
  render: () => (
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
  ),
};

export const OceanIsAlreadyDeployed: Story = {
  name: "Ocean is already deployed",
  render: () => (
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
  ),
};

export const Conclusion: Story = {
  name: "Conclusion",
  render: () => (
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
  ),
};
