import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";


export enum BUTTON_VARIANTS {
    PRIMARY = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_VARIANTS;

};
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    variant = BUTTON_VARIANTS.PRIMARY,
    ...restProps
}) => {

    return (
        <button style={{color: 'red'}} onClick={() => console.log('DDDD')} {...restProps}>
            {children}
        </button>
    );
};