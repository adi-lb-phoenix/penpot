// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import Components from "@target/components";
import { helpers } from "@target/components";
import { action } from "@storybook/addon-actions";

const { Swatch } = Components;

export default {
  title: "Foundations/Utilities/Swatch",
  component: Swatch,
  argTypes: {
    background: {
      control: "object",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    active: {
      control: { type: "boolean" },
    },
  },
  args: {
    background: { color: "#7efff5" },
    size: "medium",
    active: false,
  },
  render: ({ ...args }) => <Swatch {...args} />,
};

export const Default = {};

export const WithOpacity = {
  args: {
    background: {
      color: "#2f226c",
      opacity: 0.5,
    },
  },
};

// These stories are disabled because the gradient and the UUID variants cannot be translated from cljs into JS
// When the repo is updated to use the new version of rumext, these stories should be re-enabled and tested
//
export const LinearGradient = {
  args: {
    background: {
      gradient: {
        type: helpers.linear,
        "start-x": 0,
        "start-y": 0,
        "end-x": 1,
        "end-y": 0,
        width: 1,
        stops: helpers.stops,
      },
    },
  },
};

export const RadialGradient = {
  args: {
    background: {
      gradient: {
        type: helpers.radial,
        "start-x": 0,
        "start-y": 0,
        "end-x": 1,
        "end-y": 0,
        width: 1,
        stops: helpers.stops,
      },
    },
  },
};

export const Rounded = {
  args: {
    background: {
      id: helpers.uuid(crypto.randomUUID()),
      color: "#2f226c",
      opacity: 0.5,
    },
  },
};

export const Clickable = {
  args: {
    onClick: action("on-click"),
    "aria-label": "Click swatch",
  },
};
