# Storybook Documentation

## Overview

Storybook is a tool for building UI components and pages in isolation. It allows developers to develop, test, and document UI components without needing to run the full application.

## Getting Started

### Running Storybook

```bash
npm run storybook
```

This will start the Storybook development server on `http://localhost:6006`

### Building Storybook for Production

```bash
npm run build-storybook
```

This creates a static build of Storybook in the `storybook-static` directory.

## Available Stories

Stories are co-located with their components for better organization and maintainability.

### Components

- **Button** (`src/components/Button.stories.tsx`)

  - All variants: primary, secondary, success, danger, outline, ghost
  - All sizes: small, medium, large
  - States: disabled, loading
  - With icons and different icon positions

- **Loading** (`src/components/Loading.stories.tsx`)

  - Variants: inline, spinner, fullscreen
  - Sizes: small, medium, large
  - With and without messages

- **WarningCard** (`src/components/WarningCard.stories.tsx`)

  - Variants: warning, error, info, success
  - With and without actions
  - Custom icons and long messages

- **CardHeader** (`src/components/CardHeader.stories.tsx`)

  - Custom gradients and colors
  - With and without stats
  - Multiple gradient themes

- **Form/Input** (`src/components/Form/Input.stories.tsx`)
  - All input types: text, email, password, number, tel, url, datetime-local
  - Variants: default, classic
  - States: normal, with value, disabled, error
  - With icons and labels

## Co-located Stories

Stories are placed next to their respective components for better organization:

```
src/
├── components/
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   ├── Loading.tsx
│   ├── Loading.stories.tsx
│   ├── Form/
│   │   ├── Input.tsx
│   │   └── Input.stories.tsx
│   └── ...
```

This approach provides several benefits:

- **Better organization**: Stories are easy to find next to their components
- **Easier maintenance**: When updating a component, the story is right there
- **Clear relationships**: It's obvious which story belongs to which component
- **Reduced cognitive load**: No need to navigate between different folders

## Creating New Stories

### Basic Story Structure

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "@storybook/test";
import YourComponent from "./YourComponent";

const meta = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Define controls for component props
  },
  args: {
    // Default args
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Story-specific args
  },
};
```

### Story Categories

- **Components**: Basic UI components
- **Form**: Form-related components
- **Layout**: Layout and container components
- **Pages**: Full page components

### Best Practices

1. **Use descriptive titles**: Group related components logically
2. **Include all variants**: Show all possible states and variations
3. **Add controls**: Make stories interactive with argTypes
4. **Document with autodocs**: Use the `autodocs` tag for automatic documentation
5. **Test edge cases**: Include error states, loading states, empty states

## Configuration

### Main Configuration (`.storybook/main.ts`)

- Stories are located in `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- Uses Next.js framework
- Includes static directory for public assets
- Configured addons: docs, onboarding, a11y, vitest

### Preview Configuration (`.storybook/preview.ts`)

- Imports global CSS styles
- Configures background options
- Sets up controls matchers

## Addons

### Available Addons

- **@storybook/addon-docs**: Automatic documentation generation
- **@storybook/addon-a11y**: Accessibility testing
- **@storybook/addon-vitest**: Testing integration
- **@chromatic-com/storybook**: Visual testing (if configured)

### Using Addons

```typescript
// In your story
export const MyStory: Story = {
  parameters: {
    a11y: {
      // Accessibility configuration
    },
  },
};
```

## Integration with Development Workflow

### Git Hooks

Storybook stories are included in the lint-staged configuration, so they will be linted and formatted on commit.

### Testing

- Stories can be used for visual regression testing
- Component testing with @storybook/addon-vitest
- Accessibility testing with @storybook/addon-a11y

### Documentation

- Automatic documentation generation
- Interactive component playground
- Design system documentation

## Tips and Tricks

1. **Use the Controls addon** to make stories interactive
2. **Group related stories** using the title structure
3. **Use the Actions addon** to log component events
4. **Create composite stories** that show multiple components together
5. **Use the Background addon** to test components on different backgrounds

## Troubleshooting

### Common Issues

1. **Tailwind CSS not working**: Ensure CSS is imported in preview.ts
2. **Component not rendering**: Check if all required props are provided
3. **TypeScript errors**: Ensure proper type definitions for Meta and StoryObj

### Getting Help

- [Storybook Documentation](https://storybook.js.org/docs)
- [Next.js Integration Guide](https://storybook.js.org/docs/react/get-started/nextjs)
- [Writing Stories Guide](https://storybook.js.org/docs/writing-stories/introduction)
