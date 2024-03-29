export default function Input({ name, content, type, min, onSelect }) {
  return (
    <div>
      <label>{content}</label>
      <input type={type} min={min} onChange={onSelect} id={name} />
    </div>
  )
}
