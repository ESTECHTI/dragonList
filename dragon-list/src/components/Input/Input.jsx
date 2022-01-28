import './Input.scss'

export const Input = ({ label, type, value, placeholder, onChange, id, ...otherProps }) => {
  return (
    <div className='input--elements'>
      <input
        className='input--elements-value'
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
