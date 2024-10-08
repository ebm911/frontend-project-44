#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { generateQuestion, description } from '../src/games/gcd.js';

const gameLogic = { generateQuestion, description };
runGame(gameLogic);