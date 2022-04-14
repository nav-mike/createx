import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   * @deprecated use buttonStyle instead
   */
  primary?: boolean;
  /**
   * Button style: primary, secondary, danger
   */
  buttonStyle?: 'primary' | 'secondary' | 'danger';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonStyle = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, buttonClassByType(buttonStyle)].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const buttonClassByType = (buttonType: 'primary' | 'secondary' | 'danger') => {
  switch (buttonType) {
    case 'primary':
      return 'storybook-button--primary';
    case 'secondary':
      return 'storybook-button--secondary';
    case 'danger':
      return 'storybook-button--danger';
  }
}
