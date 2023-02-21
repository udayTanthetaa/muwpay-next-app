import { cva, cx } from "class-variance-authority";
import { motion } from "framer-motion";

export const Container = ({ onClick, cta, disabled, props }) => {
	const classes = cva("flex flex-col items-center place-content-center", {
		variants: {
			flex: {
				"col-start": "flex flex-col items",
			},
			intent: {
				white: "bg-isWhite",
				light: "bg-isGrayLightEmphasis6",
				gray: "bg-isGrayDark",
				dark: "bg-isGrayDarkEmphasis3",
				primary: "bg-isBlueDark",
				secondary: "bg-isPurpleDark",
				tertiary: "bg-isMintDark",
				info: "bg-isCyanDark",
				error: "bg-isRedDark",
				warning: "bg-isOrangeDark",
				success: "bg-isGreenDark",
				none: "",
			},
			w: {
				fit: "w-fit",
				full: "w-full",
				screen: "min-w-screen",
				none: "",
			},
			h: {
				fit: "w-fit",
				full: "h-full",
				screen: "min-h-screen",
				none: "",
			},
			p: {
				xs: "p-[4px]",
				sm: "p-[8px]",
				md: "p-[12px]",
				lg: "p-[16px]",
				xl: "p-[20px]",
				"2xl": "p-[24px]",
				"3xl": "p-[28px]",
				none: "",
			},
		},
		defaultVariants: {
			intent: "light",
			shadow: "sm",
			animate: "primary",
			w: "fit",
			p: "xl",
		},
	});

	return <div className={cx(classes({ ...props }))} />;
};
