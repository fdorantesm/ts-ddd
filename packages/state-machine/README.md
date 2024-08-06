<h1 align="center">State Machine Utility</h1>

<div align="center">
<br>

<p><i>A minimal state machine class</i></p>

</div>

## Installation

```sh
npm i @ts-ddd/state-machine
```

```sh
yarn add @ts-ddd/state-machine
```

```sh
pnpm install @ts-ddd/state-machine
```

```sh
bun add @ts-ddd/state-machine
```

## Usage

```ts
import { StateMachine } from '@ts-ddd/state-machine';

enum LightTransitions {
  RED = "red",
  GREEN = "green",
  PULSING_GREEN = "pulsing_green",
  AMBER = "amber",
}

const transitions = {
  [LightTransitions.RED]: [LightTransitions.GREEN],
  [LightTransitions.GREEN]: [LightTransitions.PULSING_GREEN],
  [LightTransitions.PULSING_GREEN]: [LightTransitions.AMBER],
  [LightTransitions.AMBER]: [LightTransitions.RED],
}

const light = StateMachine.instance({
  transitions,
  currentState: LightTransitions.RED,
});

light.setState(LightTransitions.GREEN);
light.canTransitionTo(LightTransitions.PULSING_GREEN) // true

StateMachine.validateTransition(transitions, LightTransitions.RED, LightTransitions.GREEN) // true
StateMachine.validateTransition(transitions, LightTransitions.PULSING_GREEN, LightTransitions.GREEN) // false

light.getState() // 'green'

light.is(LightTransitions.AMBER) // false


```

<br>
<br>

---

<br>
<br>

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src="https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" style="margin-bottom: 5px;" />
    </a>
</div>
