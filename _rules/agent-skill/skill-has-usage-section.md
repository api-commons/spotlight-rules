---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-has-usage-section
title: Skill Has Usage Section
severity: info
given: $
message: Skill body should have a "Usage" section.
description: A skill body should document how to use it under a Usage section,
  so both humans and agents can see how it is meant to be invoked.
experience:
  - documentation
spec:
  - body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-has-usage-section/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-has-usage-section' (Skill Has Usage Section).
  Requirement: A skill body should document how to use it under a Usage section,
  so both humans and agents can see how it is meant to be invoked. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Agent
  Skill. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-has-usage-section:
    title: Skill Has Usage Section
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-has-usage-section/
    description: A skill body should document how to use it under a Usage section,
      so both humans and agents can see how it is meant to be invoked.
    message: Skill body should have a "Usage" section.
    severity: info
    given: $
    then:
      function: headingPresent
      functionOptions:
        name: Usage
    tags:
      - format:agent-skill
      - spec:body
      - experience:documentation
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-has-usage-section' (Skill Has Usage Section).
      Requirement: A skill body should document how to use it under a Usage
      section, so both humans and agents can see how it is meant to be invoked.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid Agent Skill. Return only the complete corrected document,
      with no commentary."
---
