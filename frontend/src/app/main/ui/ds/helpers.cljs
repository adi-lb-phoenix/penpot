;; This Source Code Form is subject to the terms of the Mozilla Public
;; License, v. 2.0. If a copy of the MPL was not distributed with this
;; file, You can obtain one at http://mozilla.org/MPL/2.0/.
;;
;; Copyright (c) KALEIDOS INC

(ns app.main.ui.ds.helpers
  "A collection of helpers for exporting them to be used on storybook code."
  (:require
   [rumext.v2 :as mf]))

(def default
  (mf/object
   {:uuid parse-uuid
    :linear :linear
    :radial :radial
    :stops [{:color "#151035"
             :opacity 1
             :offset 0},
            {:color "#2f226c"
             :opacity 0.5
             :offset 1}]}))
