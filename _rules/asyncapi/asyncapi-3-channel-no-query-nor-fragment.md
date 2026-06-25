---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-no-query-nor-fragment
title: Asyncapi 3 Channel No Query Nor Fragment
severity: warn
given: $.channels.*
message: ""
description: Channel address must not include query ("?") or fragment ("#") delimiter.
experience:
  - consistency
  - naming
spec:
  - channels
source: []
builtin: true
---
