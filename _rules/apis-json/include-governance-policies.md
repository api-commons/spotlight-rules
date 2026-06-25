---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-governance-policies
title: Include Governance Policies
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Governance Policies
description: This property ensures there is a governance policies reference as
  part of an API contract, usually a common property pointing to a centralized
  set of policies that get applied
experience:
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
