import { cva, cx } from "class-variance-authority";
import { motion } from "framer-motion";

export const Input = ({ onChange, value, type, placeholder, props, parent }) => {
	const classes = cva("flex flex-col items-center place-content-center outline-none", {
		variants: {
			intent: {
				white: "bg-isWhite focus:bg-isGrayLightEmphasis5 text-isGrayDarkEmphasis3",
				light: "bg-isGrayLightEmphasis6 focus:bg-isGrayLightEmphasis5 text-isGrayDarkEmphasis3",
				gray: "bg-isGrayDark focus:bg-isGrayDarkEmphasis text-isWhite",
				dark: "bg-isGrayDarkEmphasis3 focus:bg-isGrayDarkEmphasis6 text-isWhite",
				primary: "bg-isBlueDark focus:bg-isBlueDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis5",
				secondary:
					"bg-isPurpleDark focus:bg-isPurpleDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				tertiary: "bg-isMintDark focus:bg-isMintDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				info: "bg-isCyanDark focus:bg-isCyanDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				error: "bg-isRedDark focus:bg-isRedDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				warning: "bg-isOrangeDark focus:bg-isOrangeDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				success: "bg-isGreenDark focus:bg-isGreenDarkEmphasis text-isWhite placeholder-isGrayLightEmphasis6",
				none: "",
			},
			size: {
				xs: "text-xs md:text-sm lg:text-md py-[1px] md:py-[2px] lg:py-[3px] px-[8px] md:px-[10px] lg:px-[12px] rounded-md",
				sm: "text-sm md:text-md lg:text-lg py-[1px] md:py-[2px] lg:py-[3px] px-[10px] md:px-[12px] lg:px-[14px] rounded-md",
				md: "text-md md:text-lg lg:text-xl py-[2px] md:py-[3px] lg:py-[4px] px-[12px] md:px-[14px] lg:px-[16px] rounded-xl",
				lg: "text-lg md:text-xl lg:text-2xl py-[2px] md:py-[3px] lg:py-[4px] px-[14px] md:px-[16px] lg:px-[18px] rounded-lg",
				xl: "text-xl md:text-2xl lg:text-3xl py-[3px] md:py-[4px] lg:py-[5px] px-[16px] md:px-[18px] lg:px-[20px] rounded-xl",
				"2xl": "text-2xl md:text-3xl lg:text-4xl py-[3px] md:py-[4px] lg:py-[5px] px-[18px] md:px-[20px] lg:px-[22px] rounded-2xl",
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
		defaultVariants: {
			intent: "white",
			size: "md",
			font: "semibold",
			shadow: "sm",
			animate: "primary",
			w: "full",
		},
	});

	return (
		<input
			placeholder={placeholder}
			onChange={(e) => {
				onChange(parent, e.target.value);
			}}
			value={value}
			type={type}
			className={cx(classes({ ...props }))}
		/>
	);
};
