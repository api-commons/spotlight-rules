---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: property-require-type
title: Property Require Type
severity: info
given: $.properties[*]
message: type should be present
description: The `type` property of each property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - properties
source: []
builtin: false
---
