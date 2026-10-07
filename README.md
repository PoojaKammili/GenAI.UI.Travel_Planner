# AI Travel Planner UI

Angular frontend for the AI Travel Planner application. It allows users to enter travel preferences and view an AI-generated travel plan.

## Tech Stack

* Angular
* TypeScript
* HTML
* CSS
* Reactive Forms
* HttpClient
* RxJS

## Project Structure

```text
travel-planner-ui
│
└── src
    └── app
        ├── components
        │   ├── travel-planner
        │   │   ├── travel-planner.ts
        │   │   ├── travel-planner.html
        │   │   └── travel-planner.css
        │   │
        │   └── travel-result
        │       ├── travel-result.ts
        │       ├── travel-result.html
        │       └── travel-result.css
        │
        ├── interfaces
        │   ├── travel-request.ts
        │   ├── travel-plan.ts
        │   └── travel-day.ts
        │
        ├── services
        │   └── travel.service.ts
        │
        ├── app.routes.ts
        └── app.config.ts
```

## Application Flow

```text
User
  ↓
TravelPlanner Component
  ↓
TravelService
  ↓
HttpClient
  ↓
.NET Web API
  ↓
Ollama / Llama 3.2
  ↓
Travel Plan Response
  ↓
BehaviorSubject
  ↓
TravelResult Component
  ↓
Display Travel Plan
```

## Features

* Reactive travel form with validation
* Destination, days, budget, and interests input
* REST API integration using HttpClient
* Strongly typed TypeScript interfaces
* Angular routing
* BehaviorSubject for sharing travel plan data
* Separate travel input and result pages
* Day-wise travel plan display
* Responsive UI

## Routes

| Route     | Component     | Purpose                       |
| --------- | ------------- | ----------------------------- |
| `/travel` | TravelPlanner | Enter travel preferences      |
| `/plan`   | TravelResult  | Display generated travel plan |

## How to Run

Install dependencies:

```bash
npm install
```

Start the Angular application:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```

To generate a travel plan, make sure the .NET Web API and Ollama with Llama 3.2 are also running.
