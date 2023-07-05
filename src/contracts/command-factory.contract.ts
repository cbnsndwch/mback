import type { Command } from 'commander';

/**
 * A function that adds a command to the program.
 */
export type CommandFactory = (command: Command) => void;
