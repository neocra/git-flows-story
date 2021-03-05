import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";

storiesOf("gitflow/1. git flow", module)
  .add("Initial Repos", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Deploy to dev", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch("develop")
        .commit('Deploy to dev');
      }}
    </Gitgraph>
  ))
  .add("Create ocean", () => (
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
  ))
  .add("Create an humain", () => (
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
  ))
  .add("Squash merge humain", () => (
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
  ))
  .add("Deploy a beta", () => (
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
  ))
  .add("Deploy to prod", () => (
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
  ))
  .add("Fix color of ocean to blue", () => (
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
  ))
  .add("Squash merge Ocean", () => (
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
  ))
  .add("Oups Humain have no brain", () => (
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
  ))
  .add("Deploy brain to prod", () => (
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
  ))
  .add("Deploy beta of ocean", () => (
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
  ))
  .add("Deploy ocean on prod", () => (
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
  ))
  .add("Conclusion", () => (
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
  ))