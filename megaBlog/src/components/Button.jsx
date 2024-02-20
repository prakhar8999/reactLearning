import React from 'react'

function Button({
    buttonText,
    type = "button",
    bgColor = 'bg-blue-600',
    txtColor = 'text-white',
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${txtColor} ${className}`} type={type} {...props}>
            {buttonText}
        </button>
    )
}

export default Button
