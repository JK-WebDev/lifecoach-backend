# Lifecoach - Backend

Version 1.4.0

## Team Members

- Josh Easley
- Kyle Cordell

## Overview

Uncle Jimmy’s Life Coaching. Get life advice from your AI-powered Uncle Jimmy. Advice/tasks given can be saved to your “Life Improvement List”. Snark and sarcasm included at no additional charge.

## Install Instructions

## API

## Database schema
### Task
  title: String,
  isCompleted: Boolean,
  notes: Array,
  owner: String

## Dependencies
- openai npm package
- mongoose

## Change Log

- 1.4.0 - Add sorting to get /task route
- 1.3.0 - Add Update and Delete tasks route, consolidates update and create route(s)
- 1.2.0 - Adds "get all tasks" for auth user, and create task route
- 1.1.0 - Adds OpenAI query route and initial Auth0 middleware
- 1.0.0 - Initial commit

### Feature Planning and Estimates

```
Name of feature: Add get all, and create task routes

Estimate of time needed to complete: 4

Start time: 2

Finish time: 4:22

Actual time needed to complete: 2:22
```

```
Name of feature: Update and Delete task routes

Estimate of time needed to complete: 2

Start time: 12

Finish time:

Actual time needed to complete:
```
