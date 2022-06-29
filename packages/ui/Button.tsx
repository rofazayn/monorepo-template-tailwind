import React, { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  children: any
}

export const Button = ({
  children,
  ...otherProps
}: ButtonHTMLAttributes<ButtonProps>) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 rounded-lg px-4 py-2 text-white font-bold transition-all duration-300"
      {...otherProps}
    >
      {children}
    </button>
  )
}
