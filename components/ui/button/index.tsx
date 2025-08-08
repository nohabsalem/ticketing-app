"use client";
import { createButton } from "@gluestack-ui/button";
import { PrimitiveIcon, UIIcon } from "@gluestack-ui/icon";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import {
  useStyleContext,
  withStyleContext,
} from "@gluestack-ui/nativewind-utils/withStyleContext";
import { cssInterop } from "nativewind";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const SCOPE = "BUTTON";

const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true,
    },
  },
});

const buttonStyle = tva({
  base: "group/button rounded flex-row items-center justify-center data-[disabled=true]:opacity-40 gap-2",
  variants: {
    action: {
      primary:
        "  data-[active=true]: border-primary-300 border-primary-400 data-[active=true]:border-primary-500 ",
      secondary:
        "border-secondary-300 bg-secondary-600 border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-700 ",
      positive:
        " border-success-300 bg-success-600 border-success-400 data-[active=true]:bg-success-700 data-[active=true]:border-success-500 ",
      negative:
        "bg-error-500 border-error-300 bg-error-600 border-error-400 data-[active=true]:bg-error-700 data-[active=true]:border-error-500 ",
      default: "bg-transparent bg-background-50",
    },
    variant: {
      link: "px-0",
      outline:
        "bg-transparent border bg-background-50 data-[active=true]:bg-transparent",
      solid: "",
    },

    size: {
      xs: "px-3.5 h-8",
      sm: "px-4 h-9",
      md: "px-5 h-10",
      lg: "px-6 h-11",
      xl: "px-7 h-12",
    },
  },
  compoundVariants: [
    {
      action: "primary",
      variant: "link",
      class:
        "px-0 bg-transparent bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "secondary",
      variant: "link",
      class:
        "px-0 bg-transparent bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "positive",
      variant: "link",
      class:
        "px-0 bg-transparent bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "negative",
      variant: "link",
      class:
        "px-0 bg-transparent bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "primary",
      variant: "outline",
      class:
        "bg-transparent bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "secondary",
      variant: "outline",
      class:
        "bg-transparent bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "positive",
      variant: "outline",
      class:
        "bg-transparent bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "negative",
      variant: "outline",
      class:
        "bg-transparent bg-background-50 data-[active=true]:bg-transparent",
    },
  ],
});

// const buttonTextStyle = tva({
//   base: "text-typography-0 font-semibold web:select-none",
//   parentVariants: {
//     action: {
//       primary:
//         "text-primary-600 text-primary-600 data-[active=true]:text-primary-700",
//       secondary:
//         "text-typography-500 text-typography-600 data-[active=true]:text-typography-700",
//       positive:
//         "text-success-600 text-success-600 data-[active=true]:text-success-700",
//       negative:
//         "text-error-600 text-error-600 data-[active=true]:text-error-700",
//     },
//     variant: {
//       link: "data-[hover=true]:underline data-[active=true]:underline",
//       outline: "",
//       solid:
//         "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
//     },
//     size: {
//       xs: "text-xs",
//       sm: "text-sm",
//       md: "text-base",
//       lg: "text-lg",
//       xl: "text-xl",
//     },
//   },
//   parentCompoundVariants: [
//     {
//       variant: "solid",
//       action: "primary",
//       class:
//         "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
//     },
//     {
//       variant: "solid",
//       action: "secondary",
//       class:
//         "text-typography-800 text-typography-800 data-[active=true]:text-typography-800",
//     },
//     {
//       variant: "solid",
//       action: "positive",
//       class:
//         "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
//     },
//     {
//       variant: "solid",
//       action: "negative",
//       class:
//         "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
//     },
//     {
//       variant: "outline",
//       action: "primary",
//       class:
//         "text-primary-500 text-primary-500 data-[active=true]:text-primary-500",
//     },
//     {
//       variant: "outline",
//       action: "secondary",
//       class:
//         "text-typography-500 text-primary-600 data-[active=true]:text-typography-700",
//     },
//     {
//       variant: "outline",
//       action: "positive",
//       class:
//         "text-primary-500 text-primary-500 data-[active=true]:text-primary-500",
//     },
//     {
//       variant: "outline",
//       action: "negative",
//       class:
//         "text-primary-500 text-primary-500 data-[active=true]:text-primary-500",
//     },
//   ],
// });
const buttonTextStyle = tva({
  base: "text-4xl font-semibold text-blue-600 web:select-none", // h1 style
  parentVariants: {
    action: {
      primary: "text-primary-600 data-[active=true]:text-primary-700",
      secondary: "text-typography-500 data-[active=true]:text-typography-700",
      positive: "text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[active=true]:text-error-700",
    },
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid: "text-typography-0 data-[active=true]:text-typography-0",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class: "text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "secondary",
      class: "text-typography-800 data-[active=true]:text-typography-800",
    },
    {
      variant: "solid",
      action: "positive",
      class: "text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "negative",
      class: "text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "outline",
      action: "primary",
      class: "text-primary-500 data-[active=true]:text-primary-500",
    },
    {
      variant: "outline",
      action: "secondary",
      class: "text-typography-500 data-[active=true]:text-typography-700",
    },
    {
      variant: "outline",
      action: "positive",
      class: "text-primary-500 data-[active=true]:text-primary-500",
    },
    {
      variant: "outline",
      action: "negative",
      class: "text-primary-500 data-[active=true]:text-primary-500",
    },
  ],
});

const buttonIconStyle = tva({
  base: "fill-none",
  parentVariants: {
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid:
        "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
    },
    size: {
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-[18px] w-[18px]",
      xl: "h-5 w-5",
    },
    action: {
      primary:
        "text-primary-600 text-primary-600 data-[active=true]:text-primary-700",
      secondary:
        "text-typography-500 text-typography-600 data-[active=true]:text-typography-700",
      positive:
        "text-success-600 text-success-600 data-[active=true]:text-success-700",

      negative:
        "text-error-600 text-error-600 data-[active=true]:text-error-700",
    },
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class:
        "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "secondary",
      class:
        "text-typography-800 text-typography-800 data-[active=true]:text-typography-800",
    },
    {
      variant: "solid",
      action: "positive",
      class:
        "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "negative",
      class:
        "text-typography-0 text-typography-0 data-[active=true]:text-typography-0",
    },
  ],
});

const buttonGroupStyle = tva({
  base: "",
  variants: {
    space: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
      xl: "gap-5",
      "2xl": "gap-6",
      "3xl": "gap-7",
      "4xl": "gap-8",
    },
    isAttached: {
      true: "gap-0",
    },
    flexDirection: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
  },
});

type IButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIButton>,
  "context"
> &
  VariantProps<typeof buttonStyle> & { className?: string };

const Button = React.forwardRef<
  React.ComponentRef<typeof UIButton>,
  IButtonProps
>(function Button(
  { className, variant = "solid", size = "md", action = "primary", ...props },
  ref
) {
  return (
    <UIButton
      ref={ref}
      {...props}
      className={buttonStyle({ variant, size, action, class: className })}
      context={{ variant, size, action }}
    />
  );
});

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & { className?: string };

const ButtonText = React.forwardRef<
  React.ComponentRef<typeof UIButton.Text>,
  IButtonTextProps
>(function ButtonText({ className, variant, size, action, ...props }, ref) {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE);

  return (
    <UIButton.Text
      ref={ref}
      {...props}
      className={buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction,
        },
        variant,
        size,
        action,
        class: className,
      })}
    />
  );
});

const ButtonSpinner = UIButton.Spinner;

type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle> & {
    className?: string | undefined;
    as?: React.ElementType;
    height?: number;
    width?: number;
  };

const ButtonIcon = React.forwardRef<
  React.ComponentRef<typeof UIButton.Icon>,
  IButtonIcon
>(function ButtonIcon({ className, size, ...props }, ref) {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE);

  if (typeof size === "number") {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIButton.Icon
      {...props}
      className={buttonIconStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          action: parentAction,
        },
        size,
        class: className,
      })}
      ref={ref}
    />
  );
});

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

const ButtonGroup = React.forwardRef<
  React.ComponentRef<typeof UIButton.Group>,
  IButtonGroupProps
>(function ButtonGroup(
  {
    className,
    space = "md",
    isAttached = true,
    flexDirection = "column",
    ...props
  },
  ref
) {
  return (
    <UIButton.Group
      className={buttonGroupStyle({
        class: className,
        space,
        isAttached,
        flexDirection,
      })}
      {...props}
      ref={ref}
    />
  );
});

Button.displayName = "Button";
ButtonText.displayName = "ButtonText";
ButtonSpinner.displayName = "ButtonSpinner";
ButtonIcon.displayName = "ButtonIcon";
ButtonGroup.displayName = "ButtonGroup";

export { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText };
