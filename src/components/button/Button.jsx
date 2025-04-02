export const Button = ({children, size, variant,...rest}) => (
    <button {...rest}>
      {children}
    </button>
  )