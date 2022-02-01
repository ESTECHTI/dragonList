import './Input.scss'

export const Input = ({ className, label, type, value, placeholder, onChange, id, ...otherProps }) => {
  return (
    <div className='input--elements'>
      <input
        // eslint-disable-next-line no-sequences
        className={'input--elements-value', className}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        {...otherProps}
      />
      <label className={value ? "Active" : ""} htmlFor={label}>{label}</label>
    </div>
  )
}
