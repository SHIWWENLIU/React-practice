
export interface ButtonProps{
 disabled?: boolean;
 onClick?: ()=>void;
 size?: 'small'|'medium'|'large';
 title: string;
}

export default function Button({
    disabled,
    onClick,
    size='medium',
    title
}: ButtonProps) {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        className={size}>
            {title}
        </button>
    )
}