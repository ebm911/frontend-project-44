#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { generateQuestion, description } from '../src/games/even.js';

const gameLogic = { generateQuestion, description };
runGame(gameLogic);