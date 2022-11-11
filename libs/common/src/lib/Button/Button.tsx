/* eslint-disable-next-line */
export interface ButtonProps {
  title?: string;
}

export function Button({ title = 'Button' }: ButtonProps) {
  return <button style={{ padding: '10px' }}>{title}</button>;
}

export default Button;
