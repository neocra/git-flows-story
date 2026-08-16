import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";



const meta: Meta = {
  title: "gitflow/4. Microsoft git flow",
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

export const CreateARelease: Story = {
  name: "Create a release",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch('releases/M001')
        .commit('Release M001');
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
        .commit("Empty earth");
        master.branch('releases/M001')
        .commit('Release M001');
        const topic = master.branch("topic/create-ocean");
        topic.commit("Add my first ocean");
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
        master.branch('releases/M001')
        .commit('Release M001');
        const topic = master.branch("topic/create-ocean");
        topic.commit("Add my first ocean");
        const feature = master.branch("feature/create-humain");
        feature.commit("Add an humain");
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
        .commit("Empty earth");
        master.branch('releases/M001')
        .commit('Release M001');
        const topic = master.branch("topic/create-ocean");
        topic.commit("Add my first ocean");
        master.commit("PR 01 : Add an humain");
      }}
    </Gitgraph>
  ),
};

export const CreateAReleaseForHumain: Story = {
  name: "Create a release for humain",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      master.branch('releases/M001')
      .commit('Release M001');
      const topic = master.branch("topic/create-ocean");
      topic.commit("Add my first ocean");
      master.commit("PR 01 : Add an humain");
      master.branch('releases/M002')
      .commit('Release M002');
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
      .commit("Empty earth");
      master.branch('releases/M001')
      .commit('Release M001');
      const topic = master.branch("topic/create-ocean");
      topic.commit("Add my first ocean");
      master.commit("PR 01 : Add an humain");
      master.branch('releases/M002')
      .commit('Release M002');
      topic.commit('Fix color of ocean');
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
      .commit("Empty earth");
      master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
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
      .commit("Empty earth");
      master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
      master.branch('bugfix/fix-brain')
      .commit('Fix brain ');
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
      .commit("Empty earth");
      master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
      master
      .commit('PR 03 : Fix brain');
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
      .commit("Empty earth");
      var m001 = master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      var m002 = master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
      master
      .commit('PR 03 : Fix brain');
      m001.branch('bugfix/fix-brain-to-M001').commit('Fix brain');
      m002.branch('bugfix/fix-brain-to-M002').commit('Fix brain');
    }}
  </Gitgraph>
  ),
};

export const SquashTheHotFixOnReleases: Story = {
  name: "Squash the Hot fix on releases",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
    {(gitgraph) => {
      const master = gitgraph.branch("master")
      .commit("Empty earth");
      var m001 = master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      var m002 = master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
      master
      .commit('PR 03 : Fix brain');
      m001.commit('PR 04 : Fix brain');
      m002.commit('PR 05 : Fix brain');
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
      .commit("Empty earth");
      var m001 = master.branch('releases/M001')
      .commit('Release M001');
      master.commit("PR 01 : Add an humain");
      var m002 = master.branch('releases/M002')
      .commit('Release M002');
      master.commit('PR 02 : Add ocean')
      master
      .commit('PR 03 : Fix brain');
      m001.commit('PR 04 : Fix brain');
      m002.commit('PR 05 : Fix brain');
      var m003 = master.branch('releases/M003')
      .commit('Release M003');
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
        <li>Différence entre topics et features</li>
        <li>Chaque branche release correspond a une release</li>
        <li>Hotfix/Bugfix fais sur master et cherry pick sur les release a corriger</li>
        <li>Rings deploiment</li>
      </ul>
      <ul>
        <li><a href="https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/use-git-microsoft">How We Use Git at Microsoft</a></li>
        <li><a href="https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow">Release Flow</a></li>
      </ul>
    </div>
  ),
};
