import { cva, cx } from "class-variance-authority";
import { motion } from "framer-motion";

export const Header = ({ cta, props }) => {
	const classes = cva("flex flex-col items-center place-content-center", {
		variants: {
			intent: {
				white: "text-isWhite",
				light: "text-isGrayLightEmphasis6",
				gray: "text-isGrayDark",
				dark: "text-isGrayDarkEmphasis3",
				night: "text-isGrayDarkEmphasis6",
				black: "text-isBlack",
				primary: "text-isBlueDark ",
				secondary: "text-isPurpleDark ",
				tertiary: "text-isMintDark ",
				info: "text-isCyanDark ",
				error: "text-isRedDark ",
				warning: "text-isOrangeDark ",
				success: "text-isGreenDark ",
				none: "",
			},
			size: {
				xs: "text-xs sm:text-sm md:text-md lg:text-lg",
				sm: "text-sm sm:text-md md:text-lg lg:text-xl",
				md: "text-md sm:text-lg md:text-xl lg:text-2xl",
				lg: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
				xl: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
				"2xl": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
				"3xl": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
				none: "",
			},
			font: {
				ultralight: "font-ultralight",
				extralight: "font-extralight",
				light: "font-light",
				normal: "font-normal",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
				extrabold: "font-extrabold",
				black: "font-black",
				none: "",
			},
			shadow: {
				sm: "drop-shadow-sm",
				md: "drop-shadow-md",
				lg: "drop-shadow-lg",
				xl: "drop-shadow-xl",
				none: "",
			},
			animate: {
				primary: "transition ease-in-out duration-300",
				none: "",
			},
			w: {
				fit: "w-fit",
				full: "w-full",
				none: "",
			},
		},
		p: {
			xs: "py-[1px] md:py-[2px] lg:py-[3px] px-[8px] md:px-[10px] lg:px-[12px]",
			sm: "py-[1px] md:py-[2px] lg:py-[3px] px-[10px] md:px-[12px] lg:px-[14px]",
			md: "py-[2px] md:py-[3px] lg:py-[4px] px-[12px] md:px-[14px] lg:px-[16px]",
			lg: "py-[2px] md:py-[3px] lg:py-[4px] px-[14px] md:px-[16px] lg:px-[18px]",
			xl: "py-[3px] md:py-[4px] lg:py-[5px] px-[16px] md:px-[18px] lg:px-[20px]",
			"2xl": "py-[3px] md:py-[4px] lg:py-[5px] px-[18px] md:px-[20px] lg:px-[22px]",
			none: "",
		},
		defaultVariants: {
			intent: "dark",
			size: "2xl",
			font: "bold",
			shadow: "none",
			animate: "none",
			w: "full",
		},
	});

	return <div className={cx(classes({ ...props }))}>{cta}</div>;
};
