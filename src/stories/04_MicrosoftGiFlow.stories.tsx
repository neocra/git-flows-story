import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Gitgraph, Mode, Branch } from "@gitgraph/react";
import { GitgraphCore } from "@gitgraph/core";

import { gitGraphOptions } from "./helpers";



storiesOf("gitflow/4. Microsoft git flow", module)
  .add("Initial Repos", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth");
      }}
    </Gitgraph>
  ))
  .add("Create a release", () => (
    <Gitgraph options={gitGraphOptions}>
      {(gitgraph) => {
        const master = gitgraph.branch("master")
        .commit("Empty earth")
        .branch('releases/M001')
        .commit('Release M001');
      }}
    </Gitgraph>
  ))
  .add("Create ocean", () => (
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
  ))
  .add("Create an humain", () => (
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
  ))
  .add("Squash merge humain", () => (
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
  ))
  .add("Create a release for humain", () => (
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
  ))
  .add("Fix color of ocean to blue", () => (
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
  ))
  .add("Squash merge ocean", () => (
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
  ))
  .add("Oups Humain have no brain.", () => (
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
  ))
  .add("Squash fix of the brain", () => (
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
  ))
  .add("PR a Cherry pick Hot fix on prod.", () => (
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
  ))
  .add("Squash the Hot fix on releases", () => (
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
  ))  
  .add("Deploy Ocean", () => (
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
  ))
  .add("Conclusion", () => (
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
  ))