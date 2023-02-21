import { supportedChains } from "@lifi/sdk";
import { cva, cx } from "class-variance-authority";
import { motion } from "framer-motion";
import { Button } from "./Button";

export const List = ({ onClick, cta, disabled, props, arr, currActive, property, display, parent }) => {
	const classes = cva("flex flex-col items-center place-content-center", {
		variants: {
			intent: {
				white: "bg-isWhite hover:bg-isGrayLightEmphasis6 text-isGrayDarkEmphasis3",
				light: "bg-isGrayLightEmphasis6 hover:bg-isGrayLightEmphasis5 text-isGrayDarkEmphasis3",
				gray: "bg-isGrayDark hover:bg-isGrayDarkEmphasis text-isWhite",
				dark: "bg-isGrayDarkEmphasis3 hover:bg-isGrayDarkEmphasis6 text-isWhite",
				primary: "bg-isBlueDark hover:bg-isBlueDarkEmphasis text-isWhite",
				secondary: "bg-isPurpleDark hover:bg-isPurpleDarkEmphasis text-isWhite",
				tertiary: "bg-isMintDark hover:bg-isMintDarkEmphasis text-isWhite",
				info: "bg-isCyanDark hover:bg-isCyanDarkEmphasis text-isWhite",
				error: "bg-isRedDark hover:bg-isRedDarkEmphasis text-isWhite",
				warning: "bg-isOrangeDark hover:bg-isOrangeDarkEmphasis text-isWhite",
				success: "bg-isGreenDark hover:bg-isGreenDarkEmphasis text-isWhite",
				none: "",
			},
			size: {
				xs: "text-xs md:text-sm lg:text-md rounded-md",
				sm: "text-sm md:text-md lg:text-lg rounded-md",
				md: "text-md md:text-lg lg:text-xl rounded-lg",
				lg: "text-lg md:text-xl lg:text-2xl rounded-xl",
				xl: "text-xl md:text-2xl lg:text-3xl rounded-xl",
				"2xl": "text-2xl md:text-3xl lg:text-4xl rounded-2xl",
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
			p: {
				xs: "py-[1px] md:py-[2px] lg:py-[3px] px-[8px] md:px-[10px] lg:px-[12px]",
				sm: "py-[1px] md:py-[2px] lg:py-[3px] px-[10px] md:px-[12px] lg:px-[14px]",
				md: "py-[2px] md:py-[3px] lg:py-[4px] px-[12px] md:px-[14px] lg:px-[16px]",
				lg: "py-[2px] md:py-[3px] lg:py-[4px] px-[14px] md:px-[16px] lg:px-[18px]",
				xl: "py-[3px] md:py-[4px] lg:py-[5px] px-[16px] md:px-[18px] lg:px-[20px]",
				"2xl": "py-[3px] md:py-[4px] lg:py-[5px] px-[18px] md:px-[20px] lg:px-[22px]",
				"3xl": "py-[4px] md:py-[5px] lg:py-[6px] px-[20px] md:px-[22px] lg:px-[24px]",
				none: "",
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "lg",
			font: "bold",
			shadow: "sm",
			animate: "primary",
			w: "fit",
			p: "xl",
		},
	});

	return (
		<div className="flex flex-col items-center w-full">
			<Button cta={cta} props={{ intent: "dark", w: "full" }} />

			<div className="flex flex-col items-center w-full h-40 mt-1 overflow-auto shadow-sm rounded-xl bg-isWhite">
				{arr !== undefined
					? arr.map((ele, index) => {
							return (
								<div
									onClick={() => {
										onClick(parent, ele[property]);
									}}
									key={index}
									value={ele[property]}
									className={`text-sm text-ellipsis w-full text-center font-medium
                                    transition ease-in-out duration-200 cursor-pointer
                            ${
								currActive == ele[property]
									? "bg-isGreenDark text-isWhite hover:bg-isGreenDarkEmphasis"
									: "text-isGrayLight2 hover:bg-isBlueDark hover:text-isWhite"
							}
                            `}
								>
									{ele[display]}
								</div>
							);
					  })
					: ""}
			</div>
		</div>
	);
};
