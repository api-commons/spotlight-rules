---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-entry-require-tags
title: API Entry Require Tags
severity: info
given: $.apis.*
message: API MUST Have a Tags Object
description: Each API defined in an APIs.json artifact includes a property for
  adding one or more tags. These tags provide additional context about the
  resources or capabilities offered by the API, highlighting its business value
  and the domain in which it is applied.
experience:
  - discoverability
  - data-modeling
spec:
  - apis
source: []
builtin: false
---
