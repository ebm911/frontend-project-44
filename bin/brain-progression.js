#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { generateQuestion, description } from '../src/games/progression.js';

const gameLogic = { generateQuestion, description };
runGame(gameLogic);