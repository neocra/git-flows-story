import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";

const meta: Meta = {
  title: "gitflow/1. git flow",
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

export const DeployToDev: Story = {
  name: "Deploy to dev",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch("develop")
        .commit('Deploy to dev');
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
        .commit("Empty earth")
        .branch("develop")
        .commit('Deploy to dev')
        .branch("features/0001-create-ocean")
        .commit("Add my first ocean");
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
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        develop.branch("features/0001-create-ocean")
          .commit("Add my first ocean");
        develop.branch("features/0002-add-humains")
            .commit("Add my first humain");
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
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        develop.branch("features/0001-create-ocean")
          .commit("Add my first ocean");
        develop
            .commit("PR 1 : Add my first humain");
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
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        develop.branch("features/0001-create-ocean")
          .commit("Add my first ocean");
        develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
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
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        develop.branch("features/0001-create-ocean")
          .commit("Add my first ocean");
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
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
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
    var f1=    develop.branch("features/0001-create-ocean")
          .commit("Add my first ocean");
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        f1.commit('Fix color of ocean to blue');
    }}
    </Gitgraph>
  ),
};

export const SquashMergeOcean: Story = {
  name: "Squash merge Ocean",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        develop
            .commit("PR 2 : Add my first ocean")
    }}
    </Gitgraph>
  ),
};

export const OupsHumainHaveNoBrain: Story = {
  name: "Oups Humain have no brain",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        develop
            .commit("PR 2 : Add my first ocean")
        
        master.branch("hotfix/1.0.0")
            .commit('Add a brain to a humain');
    }}
    </Gitgraph>
  ),
};

export const DeployBrainToProd: Story = {
  name: "Deploy brain to prod",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        develop
            .commit("PR 2 : Add my first ocean")
        
       var hotfix = master.branch("hotfix/1.0.0")
            .commit('Add a brain to a humain');
        master.merge(hotfix)
        .tag('1.0.1');
        develop.merge(hotfix);
    }}
    </Gitgraph>
  ),
};

export const DeployBetaOfOcean: Story = {
  name: "Deploy beta of ocean",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        develop
            .commit("PR 2 : Add my first ocean")
        
       var hotfix = master.branch("hotfix/1.0.0")
            .commit('Add a brain to a humain');
        master.merge(hotfix)
        .tag('1.0.1');
        develop.merge(hotfix);
        develop.branch('releases/1.1.0')
        .commit('Deploy beta');
    }}
    </Gitgraph>
  ),
};

export const DeployOceanOnProd: Story = {
  name: "Deploy ocean on prod",
  render: () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
        const develop = master
                .branch("develop")
                .commit('Deploy to dev');
        var release = develop
            .commit("PR 1 : Add my first humain")
            .branch('releases/1.0.0')
            .commit('Deploy beta');
        develop.merge(release);
        master.merge(release).tag('1.0.0');
        develop
            .commit("PR 2 : Add my first ocean")
        
       var hotfix = master.branch("hotfix/1.0.0")
            .commit('Add a brain to a humain');
        master.merge(hotfix)
        .tag('1.0.1');
        develop.merge(hotfix);
       var release = develop.branch('releases/1.1.0')
        .commit('Deploy beta');

        develop.merge(release);
        master.merge(release)
        .tag('1.1.0');
    }}
    </Gitgraph>
  ),
};

export const Conclusion: Story = {
  name: "Conclusion",
  render: () => (
    <div>
      <ul>
        <li>La branche "develop" est la vérité</li>
        <li>Gitflow + GitVersion sont adapté pour des librairies (Version -alpha, -beta...)</li>
        <li>Outils en ligne de command + implémentation dans GitKraken, SourceTree, ...</li>
        <li>Repackager/Rebuild pour déployer une beta/production</li>
        <li>End release complexe et non adapté avec les PR (Merge dans develop, merge dans master, tag sur master)</li>
      </ul>
      <h2>Links</h2>
      <ul>
      <li><a href="https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html">git-flow cheatsheet</a></li>
      <li><a href="https://nvie.com/posts/a-successful-git-branching-model/">A successful Git branching model</a></li>
      </ul>
    </div>
  ),
};
