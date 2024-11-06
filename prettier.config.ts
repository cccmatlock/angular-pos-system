import { Options } from 'prettier';

const config: Options = {
  singleQuote: true, // Angular Style Guide prefers single quotes
  printWidth: 100, // Sets max line length to 100 for readability
  trailingComma: 'all', // Helps with cleaner diffs in version control
  tabWidth: 2, // Consistent with Angular's two-space indentation style
  semi: true, // Always use semicolons for clarity
  bracketSpacing: true, // Adds spaces inside object brackets
  arrowParens: 'always', // Always include parentheses around arrow function arguments
};

export default config;
