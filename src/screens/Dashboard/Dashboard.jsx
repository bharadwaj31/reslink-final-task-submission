import React from "react";
import { AvatarLabelGroup } from "../../components/AvatarLabelGroup";
import { Button } from "../../components/Button";
import { LargeInput } from "../../components/LargeInput";
import { BarChart2 } from "../../icons/BarChart2";
import { LogOut } from "../../icons/LogOut";
import { Plus } from "../../icons/Plus";
import { Settings } from "../../icons/Settings";
import { ThreeLayers1 } from "../../icons/ThreeLayers1";
import { Users1 } from "../../icons/Users1";
import { VuesaxLinearNotification } from "../../icons/VuesaxLinearNotification";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div-3">
        <div className="overlap-2">
          <div className="div-hero-blur-bg" />
          <div className="sidebar-navigation">
            <div className="content">
              <div className="nav">
                <img
                  className="header"
                  alt="Header"
                  src="https://c.animaapp.com/d6DddjiK/img/header.svg"
                />
                <div className="navigation">
                  <div className="nav-item-base">
                    <div className="div-4">
                      <BarChart2
                        className="icon-instance-node-2"
                        color="#D0D5DD"
                      />
                      <div className="text-5">Dashboard</div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="div-4">
                      <ThreeLayers1
                        className="icon-instance-node-2"
                        color="#D0D5DD"
                      />
                      <div className="text-5">Projects</div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="div-4">
                      <Users1
                        className="icon-instance-node-2"
                        color="#D0D5DD"
                      />
                      <div className="text-5">Staffing</div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="div-4">
                      <img
                        className="icon-instance-node-2"
                        alt="Solar chat line"
                        src="https://c.animaapp.com/d6DddjiK/img/solar-chat-line-broken.svg"
                      />
                      <div className="text-5">Messages</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="footer">
                  <div className="navigation-2">
                    <div className="content-wrapper">
                      <div className="div-4">
                        <BarChart2
                          className="icon-instance-node-2"
                          color="#D0D5DD"
                        />
                        <div className="text-6">Support</div>
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="div-4">
                        <Settings
                          className="icon-instance-node-2"
                          color="#D0D5DD"
                        />
                        <div className="text-6">Settings</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-2">
                  <img
                    className="divider"
                    alt="Divider"
                    src="https://c.animaapp.com/d6DddjiK/img/divider.svg"
                  />
                  <div className="account">
                    <AvatarLabelGroup
                      className="avatar-label-group-instance"
                      size="md"
                      state="default"
                      statusIcon="false"
                      supportingTextClassName="avatar-label-group-2"
                      textClassName="design-component-instance-node"
                    />
                    <div className="icon-instance-node-3">
                      <Button
                        buttonBaseIcon={
                          <LogOut className="icon-instance-node-3" />
                        }
                        className="button-instance"
                        destructive={false}
                        hierarchy="tertiary-gray"
                        icon="only"
                        size="sm"
                        state="default"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="div-hero-blur-bg-2" />
            <div className="footer-3">
              <img
                className="line-2"
                alt="Line"
                src="https://c.animaapp.com/d6DddjiK/img/line-40.svg"
              />
              <div className="group-2">
                <p className="p">
                  Copyright © 2023. Reslink. All rights reserved.
                </p>
              </div>
            </div>
            <div className="header-section">
              <div className="container">
                <div className="page-header">
                  <div className="content-2">
                    <div className="text-and-supporting-2">
                      <div className="text-7">Welcome back, Olivia</div>
                      <p className="supporting-text-2">
                        Track, manage researchers and submissions.
                      </p>
                    </div>
                    <div className="div-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="metric-group">
              <div className="metric-item">
                <div className="group-3">
                  <div className="number-and-chart">
                    <div className="number-and-badge">
                      <div className="number">07</div>
                    </div>
                  </div>
                  <div className="heading-and-dropdown">
                    <div className="heading">Active Projects</div>
                  </div>
                </div>
                <div className="frame">
                  <img
                    className="img-2"
                    alt="Fluent person"
                    src="https://c.animaapp.com/d6DddjiK/img/fluent-person-32-regular.svg"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="group-3">
                  <div className="number-and-chart">
                    <div className="number-and-badge">
                      <div className="number">04</div>
                    </div>
                  </div>
                  <div className="heading-and-dropdown">
                    <div className="heading">Proposals</div>
                  </div>
                </div>
                <div className="frame">
                  <img
                    className="img-2"
                    alt="Basil edit outline"
                    src="https://c.animaapp.com/d6DddjiK/img/basil-edit-outline.svg"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="group-3">
                  <div className="number-and-chart">
                    <div className="number-and-badge">
                      <div className="number">03</div>
                    </div>
                  </div>
                  <div className="heading-and-dropdown">
                    <div className="heading">Active Jobs</div>
                  </div>
                </div>
                <div className="frame">
                  <img
                    className="img-2"
                    alt="Solar bookmark"
                    src="https://c.animaapp.com/d6DddjiK/img/solar-bookmark-broken.svg"
                  />
                </div>
              </div>
              <div className="metric-item">
                <div className="group-3">
                  <div className="number-and-chart">
                    <div className="number-and-badge">
                      <div className="number">240</div>
                    </div>
                  </div>
                  <div className="heading-and-dropdown">
                    <div className="heading">Application</div>
                  </div>
                </div>
                <div className="frame">
                  <img
                    className="img-2"
                    alt="Carbon view"
                    src="https://c.animaapp.com/d6DddjiK/img/carbon-view.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-2">
              <div className="metric-item-2">
                <div className="heading-2">Posted Projects</div>
                <div className="text-8">See All</div>
                <img
                  className="line-3"
                  alt="Line"
                  src="https://c.animaapp.com/d6DddjiK/img/line-41-1.svg"
                />
                <div className="frame-3">
                  <div className="frame-4">
                    <p className="text-wrapper-3">
                      Thermal protective performance and mult
                    </p>
                    <div className="frame-5">
                      <div className="text-wrapper-4">Resume review</div>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                  <div className="frame-4">
                    <p className="text-wrapper-3">
                      Effect of heat flux and moisture....
                    </p>
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="ellipse-3" />
                        <div className="text-wrapper-5">Interview</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <p className="text-wrapper-3">
                      Thermal protective performance and mult
                    </p>
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="ellipse-4" />
                        <div className="text-wrapper-5">Task</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <p className="text-wrapper-3">
                      Testing and evaluation of functio...
                    </p>
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="ellipse-5" />
                        <div className="text-wrapper-5">Payment</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <p className="text-wrapper-3">
                      Development of thermal liner for E....
                    </p>
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="ellipse-6" />
                        <div className="text-wrapper-5">Closed</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <p className="text-wrapper-3"></p>
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="text-wrapper-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="metric-item-2">
                <div className="heading-3">Recent Activities</div>
                <img
                  className="line-4"
                  alt="Line"
                  src="https://c.animaapp.com/d6DddjiK/img/line-41.svg"
                />
                <div className="frame-3">
                  <div className="frame-7">
                    <div className="ellipse-4" />
                    <p className="text-wrapper-6">
                      Interview is scheduled for 12PM
                    </p>
                    <div className="frame-8">
                      <div className="text-wrapper-7">6:29PM</div>
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="ellipse-7" />
                    <p className="text-wrapper-6">
                      Applicant applied on Technical researcher
                    </p>
                    <div className="frame-8">
                      <div className="text-wrapper-7">8:21PM</div>
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="ellipse-8" />
                    <div className="text-wrapper-6">Interview is cancelled</div>
                    <div className="frame-8">
                      <div className="text-wrapper-7">7:10PM</div>
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="ellipse-7" />
                    <p className="text-wrapper-6">
                      Applicant applied on Technical researcher
                    </p>
                    <div className="frame-8">
                      <div className="text-wrapper-7">6:29PM</div>
                    </div>
                  </div>
                  <div className="frame-7">
                    <div className="ellipse-9" />
                    <div className="text-wrapper-6">Recieved Proposal</div>
                    <div className="frame-8">
                      <div className="text-wrapper-7">6:29PM</div>
                    </div>
                  </div>
                  <div className="frame-7">
                    <p className="text-wrapper-6"></p>
                    <div className="frame-8">
                      <div className="text-wrapper-7"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LargeInput
            className="large-input-instance"
            ellipseClassName="large-input-4"
            line="https://c.animaapp.com/d6DddjiK/img/line-1.svg"
            overlapClassName="large-input-2"
            state="default"
            textClassName="large-input-3"
            type="search-icon"
          />
          <div className="vuesax-linear-wrapper">
            <VuesaxLinearNotification className="icon-instance-node-2" />
          </div>
          <Button
            buttonBaseSizeMdIconLeadingClassName="button-2"
            buttonBaseText="Create New Project"
            buttonBaseTextClassName="design-component-instance-node"
            className="button-3"
            destructive={false}
            hierarchy="primary"
            icon="leading"
            override={<Plus className="icon-instance-node-3" />}
            size="md"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};
