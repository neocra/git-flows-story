import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";



const meta: Meta = {
  title: "gitflow/2. git lab flow",
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

export const DeployToDevDoNothings: Story = {
  name: "Deploy to dev (Do nothings)",
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
        .branch("features/0001-add-ocean")
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
        master.branch("features/0001-add-ocean")
        .commit("Add first ocean");
        master.branch("features/0002-add-humain")
        .commit("Add first humain");
      }}
    </Gitgraph>
  ),
};

export const MergeRequestAnHumain: Story = {
  name: "Merge Request an humain",
  render: () => (
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
  ),
};

export const DeployAStable: Story = {
  name: "Deploy a stable",
  render: () => (
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
  ),
};

export const DeployAProduction: Story = {
  name: "Deploy a production",
  render: () => (
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
  ),
};

export const FixColorOfOcean: Story = {
  name: "Fix color of ocean",
  render: () => (
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
  ),
};

export const MergeRequestOcean: Story = {
  name: "Merge request ocean",
  render: () => (
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
  ),
};

export const MergeRequestBrain: Story = {
  name: "Merge request brain",
  render: () => (
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
  ),
};

export const CherryPickBrainOnProd: Story = {
  name: "Cherry pick brain on prod",
  render: () => (
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
  ),
};

export const CompleteMergeRequestOnProd: Story = {
  name: "Complete Merge Request on prod",
  render: () => (
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
  ),
};

export const DeployOceanOnStable: Story = {
  name: "Deploy ocean on stable",
  render: () => (
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
  ),
};

export const DeployOceanOnProduction: Story = {
  name: "Deploy ocean on production",
  render: () => (
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
  ),
};

export const Conclusion: Story = {
  name: "Conclusion",
  render: () => (
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
  ),
};
