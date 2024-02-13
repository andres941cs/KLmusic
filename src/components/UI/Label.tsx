interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}
export const Label = ({children,...props}:Props) => {
    return (
        <label {...props} className="block text-sm font-medium leading-6 text-gray-900" >{children}</label>
    );
}

export default Label