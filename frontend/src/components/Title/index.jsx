export const Title = ({ children }) => {
  return (
    <div className="flex gap-2 mb-5 items-center">
      <span className="flex w-1 h-3 rounded-2xl bg-primary"></span>
      <h4 className="font-medium capitalize">{children}</h4>
    </div>
  )
}
